import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Gallery() {
  const { category } = useParams(); // ንኣብነት: 'weddings', 'bridal-shoots'
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Lightbox States
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // ካብ ዳታቤዝ ኩሉ ፕሮጀክትታት ነምጽእ እሞ ነቲ ናይዚ URL ዝሰማማዕ ንመርጾ
    fetch('https://film-production-portfolio.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => {
        // ንኣብነት 'bridal-shoots' ዝብል ናብ 'Bridal Shoots' ቀይርካ ንምድላድ
        const found = data.find(item => 
          item.title.toLowerCase().replace(/\s+/g, '-') === category.toLowerCase()
        );
        setProjectData(found || { title: category.replace(/-/g, ' '), images: [] });
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching gallery:", err);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <p className="text-xl tracking-widest uppercase text-amber-400">Loading Gallery...</p>
      </div>
    );
  }

  // slides ን Lightbox ክሰማማዕ ንዳሉ
  const slides = projectData?.images?.map(img => ({ src: img })) || [];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12 md:px-20">
      {/* ናብ Home ንምምላስ ዝሕግዝ ቁልፊ */}
      <div className="mb-10">
        <Link 
          to="/home" 
          className="text-xs uppercase tracking-[0.3em] text-zinc-400 hover:text-white border border-zinc-800 px-4 py-2 rounded transition"
        >
          &larr; Back to Home
        </Link>
      </div>

      {/* ርእሲ ጋለሪ */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-serif italic text-amber-300 capitalize mb-4">
          {projectData?.names || projectData?.title}
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
          {projectData?.desc || `Explore the complete collection of ${projectData?.title} moments captured with elegance.`}
        </p>
      </div>

      {/* ስእልታት ብግቡእ ንሞባይልን ዴስክቶፕን ዝሰማማዕ Grid (ሞባይል 1-2፣ ላፕቶፕ 3-4 ኮለም) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {projectData?.images && projectData.images.length > 0 ? (
          projectData.images.map((img, index) => (
            <div 
              key={index} 
              onClick={() => { setCurrentIndex(index); setOpen(true); }}
              className="group aspect-[2/3] overflow-hidden bg-zinc-900 rounded-lg cursor-pointer border border-zinc-800 shadow-lg relative"
            >
              <img 
                src={img} 
                alt={`${projectData.title} ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-widest bg-black/60 px-3 py-1 rounded">View</span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-zinc-500">
            <p>No images uploaded in this gallery yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox ንምጥዋቕ ምስ ዝደልዩ ብዓቢ ንምርኣይ */}
      <Lightbox 
        open={open} 
        close={() => setOpen(false)} 
        slides={slides} 
        index={currentIndex}
      />
    </div>
  );
}

export default Gallery;