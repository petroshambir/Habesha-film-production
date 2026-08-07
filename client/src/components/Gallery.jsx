// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// function Gallery() {
//   const { category } = useParams(); // ንኣብነት: 'weddings', 'bridal-shoots'
//   const [projectData, setProjectData] = useState(null);
//   const [loading, setLoading] = useState(true);
  
//   // Lightbox States
//   const [open, setOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     // ካብ ዳታቤዝ ኩሉ ፕሮጀክትታት ነምጽእ እሞ ነቲ ናይዚ URL ዝሰማማዕ ንመርጾ
//     fetch('https://habesha-film-production-server.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => {
//         // ንኣብነት 'bridal-shoots' ዝብል ናብ 'Bridal Shoots' ቀይርካ ንምድላድ
//         const found = data.find(item => 
//           item.title.toLowerCase().replace(/\s+/g, '-') === category.toLowerCase()
//         );
//         setProjectData(found || { title: category.replace(/-/g, ' '), images: [] });
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Error fetching gallery:", err);
//         setLoading(false);
//       });
//   }, [category]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
//         <p className="text-xl tracking-widest uppercase text-amber-400">Loading Gallery...</p>
//       </div>
//     );
//   }

//   // slides ን Lightbox ክሰማማዕ ንዳሉ
//   const slides = projectData?.images?.map(img => ({ src: img })) || [];

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12 md:px-20">
//       {/* ናብ Home ንምምላስ ዝሕግዝ ቁልፊ */}
//       <div className="mb-10">
//         <Link 
//           to="/home" 
//           className="text-xs uppercase tracking-[0.3em] text-zinc-400 hover:text-white border border-zinc-800 px-4 py-2 rounded transition"
//         >
//           &larr; Back to Home
//         </Link>
//       </div>

//       {/* ርእሲ ጋለሪ */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-6xl font-serif italic text-amber-300 capitalize mb-4">
//           {projectData?.names || projectData?.title}
//         </h1>
//         <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
//           {projectData?.desc || `Explore the complete collection of ${projectData?.title} moments captured with elegance.`}
//         </p>
//       </div>

//       {/* ስእልታት ብግቡእ ንሞባይልን ዴስክቶፕን ዝሰማማዕ Grid (ሞባይል 1-2፣ ላፕቶፕ 3-4 ኮለም) */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//         {projectData?.images && projectData.images.length > 0 ? (
//           projectData.images.map((img, index) => (
//             <div 
//               key={index} 
//               onClick={() => { setCurrentIndex(index); setOpen(true); }}
//               className="group aspect-[2/3] overflow-hidden bg-zinc-900 rounded-lg cursor-pointer border border-zinc-800 shadow-lg relative"
//             >
//               <img 
//                 src={img} 
//                 alt={`${projectData.title} ${index + 1}`} 
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
//               />
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <span className="text-white text-xs uppercase tracking-widest bg-black/60 px-3 py-1 rounded">View</span>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full text-center py-20 text-zinc-500">
//             <p>No images uploaded in this gallery yet.</p>
//           </div>
//         )}
//       </div>

//       {/* Lightbox ንምጥዋቕ ምስ ዝደልዩ ብዓቢ ንምርኣይ */}
//       <Lightbox 
//         open={open} 
//         close={() => setOpen(false)} 
//         slides={slides} 
//         index={currentIndex}
//       />
//     </div>
//   );
// }

// export default Gallery;


// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// function Gallery() {
//   const { category } = useParams(); 
//   const [projectData, setProjectData] = useState(null);
//   const [loading, setLoading] = useState(true);
  
//   const [open, setOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     setLoading(true);
//     fetch('https://habesha-film-production-server.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => {
//         // const found = data.find(item => 
//         //   item.title.toLowerCase().replace(/\s+/g, '-') === category.toLowerCase()
//         // );
//         // setProjectData(found || { title: category.replace(/-/g, ' '), images: [] });
//         // setLoading(false);
//         const found = data.find(item => {
//   const formattedItemTitle = item.title
//     .toLowerCase()
//     .replace(/"/g, '')
//     .replace(/&/g, 'and')
//     .trim()
//     .replace(/\s+/g, '-');
    
//   return formattedItemTitle === category.toLowerCase().trim();
// });
//       })
//       .catch(err => {
//         console.error("Error fetching gallery:", err);
//         setLoading(false);
//       });
//   }, [category]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
//         <p className="text-xl tracking-widest uppercase text-amber-400 animate-pulse">Loading Gallery...</p>
//       </div>
//     );
//   }

//   const slides = projectData?.images?.map(img => ({ src: img })) || [];

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12 md:px-20">
//       {/* ናብ Home ንምምላስ ዝሕግዝ ቁልፊ */}
//       <div className="mb-10 pt-16 md:pt-4">
//         <Link 
//           to="/" 
//           className="text-xs uppercase tracking-[0.3em] text-zinc-400 hover:text-white border border-zinc-800 px-4 py-2 rounded transition"
//         >
//           &larr; Back to Home
//         </Link>
//       </div>

//       {/* ርእሲ ጋለሪ */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-6xl font-serif italic text-amber-300 capitalize mb-4">
//           {projectData?.names || projectData?.title}
//         </h1>
//         <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
//           {projectData?.desc || `Explore the complete collection of ${projectData?.title} moments captured with elegance.`}
//         </p>
//       </div>

//       {/* ስእልታት Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//         {projectData?.images && projectData.images.length > 0 ? (
//           projectData.images.map((img, index) => (
//             <div 
//               key={index} 
//               onClick={() => { setCurrentIndex(index); setOpen(true); }}
//               className="group aspect-[2/3] overflow-hidden bg-zinc-900 rounded-lg cursor-pointer border border-zinc-800 shadow-lg relative"
//             >
//               <img 
//                 src={img} 
//                 alt={`${projectData.title} ${index + 1}`} 
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
//               />
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <span className="text-white text-xs uppercase tracking-widest bg-black/60 px-3 py-1 rounded">View</span>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full text-center py-20 text-zinc-500">
//             <p>No images uploaded in this gallery yet.</p>
//           </div>
//         )}
//       </div>

//       <Lightbox 
//         open={open} 
//         close={() => setOpen(false)} 
//         slides={slides} 
//         index={currentIndex}
//       />
//     </div>
//   );
// }

// export default Gallery;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// function Gallery() {
//   const { category } = useParams(); 
//   const [projectData, setProjectData] = useState(null);
//   const [loading, setLoading] = useState(true);
  
//   const [open, setOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     setLoading(true);
//     fetch('https://habesha-film-production-server.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => {
//         const found = data.find(item => {
//           const formattedItemTitle = item.title
//             .toLowerCase()
//             .replace(/"/g, '')
//             .replace(/&/g, 'and')
//             .trim()
//             .replace(/\s+/g, '-');
            
//           return formattedItemTitle === category.toLowerCase().trim();
//         });

//         setProjectData(found || null);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Error fetching gallery:", err);
//         setLoading(false);
//       });
//   }, [category]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
//         <p className="text-xl tracking-widest uppercase text-amber-400 animate-pulse">Loading Gallery...</p>
//       </div>
//     );
//   }

//   // Descriptions ካብቲ ፍሉይ ቅርጺ (||DESCS||) ንምውጻእ ወይ ብቐጥታ ንምርኣይ
//   let descriptions = [];
//   try {
//     if (projectData?.description && projectData.description.includes('||DESCS||')) {
//       const cleanDesc = projectData.description.split('||DESCS||')[1];
//       descriptions = JSON.parse(cleanDesc);
//     }
//   } catch (e) {
//     descriptions = [];
//   }

//   const slides = projectData?.images?.map((img, index) => ({ 
//     src: img,
//     description: descriptions[index] || "" 
//   })) || [];

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12 md:px-20">
//       {/* ናብ Home ንምምላስ ዝሕግዝ ቁልፊ */}
//       <div className="mb-10 pt-16 md:pt-4">
//         <Link 
//           to="/" 
//           className="text-xs uppercase tracking-[0.3em] text-zinc-400 hover:text-white border border-zinc-800 px-4 py-2 rounded transition"
//         >
//           &larr; Back to Home
//         </Link>
//       </div>

//       {/* ርእሲ ጋለሪ */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-6xl font-serif italic text-amber-300 capitalize mb-4">
//           {projectData?.names || projectData?.title}
//         </h1>
//         <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
//           {projectData?.description && !projectData.description.includes('||DESCS||') 
//             ? projectData.description 
//             : `Explore the complete collection of ${projectData?.title} moments captured with elegance.`}
//         </p>
//       </div>

//       {/* ስእልታት Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//         {projectData?.images && projectData.images.length > 0 ? (
//           projectData.images.map((img, index) => (
//             <div 
//               key={index} 
//               onClick={() => { setCurrentIndex(index); setOpen(true); }}
//               className="group aspect-[2/3] overflow-hidden bg-zinc-900 rounded-lg cursor-pointer border border-zinc-800 shadow-lg relative"
//             >
//               <img 
//                 src={img} 
//                 alt={`${projectData.title} ${index + 1}`} 
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
//               />
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <span className="text-white text-xs uppercase tracking-widest bg-black/60 px-3 py-1 rounded">View</span>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full text-center py-20 text-zinc-500">
//             <p>No images uploaded in this gallery yet.</p>
//           </div>
//         )}
//       </div>

//       <Lightbox 
//         open={open} 
//         close={() => setOpen(false)} 
//         slides={slides} 
//         index={currentIndex}
//       />
//     </div>
//   );
// }

// export default Gallery;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import ProtectedImage from '../components/ProtectedImage'; // ሕልፈት ስእሊ (Protected Image) ኣእቲናዮ ኣለና

// function Gallery() {
//   const { category } = useParams(); 
//   const [projectData, setProjectData] = useState(null);
//   const [loading, setLoading] = useState(true);
  
//   const [open, setOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     setLoading(true);
//     fetch('https://habesha-film-production-server.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => {
//         const found = data.find(item => {
//           const formattedItemTitle = item.title
//             .toLowerCase()
//             .replace(/"/g, '')
//             .replace(/&/g, 'and')
//             .trim()
//             .replace(/\s+/g, '-');
            
//           return formattedItemTitle === category.toLowerCase().trim();
//         });

//         setProjectData(found || null);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Error fetching gallery:", err);
//         setLoading(false);
//       });
//   }, [category]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
//         <p className="text-xl tracking-widest uppercase text-amber-400 animate-pulse">Loading Gallery...</p>
//       </div>
//     );
//   }

//   // Descriptions ካብቲ ፍሉይ ቅርጺ (||DESCS||) ንምውጻእ ወይ ብቐጥታ ንምርኣይ
//   let descriptions = [];
//   try {
//     if (projectData?.description && projectData.description.includes('||DESCS||')) {
//       const cleanDesc = projectData.description.split('||DESCS||')[1];
//       descriptions = JSON.parse(cleanDesc);
//     }
//   } catch (e) {
//     descriptions = [];
//   }

//   const slides = projectData?.images?.map((img, index) => ({ 
//     src: img,
//     description: descriptions[index] || "" 
//   })) || [];

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12 md:px-20">
//       {/* ናብ Home ንምምላስ ዝሕግዝ ቁልፊ */}
//       <div className="mb-10 pt-16 md:pt-4">
//         <Link 
//           to="/" 
//           className="text-xs uppercase tracking-[0.3em] text-zinc-400 hover:text-white border border-zinc-800 px-4 py-2 rounded transition"
//         >
//           &larr; Back to Home
//         </Link>
//       </div>

//       {/* ርእሲ ጋለሪ */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-6xl font-serif italic text-amber-300 capitalize mb-4">
//           {projectData?.names || projectData?.title}
//         </h1>
//         <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
//           {projectData?.description && !projectData.description.includes('||DESCS||') 
//             ? projectData.description 
//             : `Explore the complete collection of ${projectData?.title} moments captured with elegance.`}
//         </p>
//       </div>

//       {/* ስእልታት Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//         {projectData?.images && projectData.images.length > 0 ? (
//           projectData.images.map((img, index) => (
//             <div 
//               key={index} 
//               onClick={() => { setCurrentIndex(index); setOpen(true); }}
//               className="group aspect-[2/3] overflow-hidden bg-zinc-900 rounded-lg cursor-pointer border border-zinc-800 shadow-lg relative"
//             >
//               {/* ንቡር img ብ ProtectedImage ተኪኤዮ ኣለኹ */}
//               <ProtectedImage 
//                 src={img} 
//                 alt={`${projectData.title} ${index + 1}`} 
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
//               />
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
//                 <span className="text-white text-xs uppercase tracking-widest bg-black/60 px-3 py-1 rounded">View</span>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full text-center py-20 text-zinc-500">
//             <p>No images uploaded in this gallery yet.</p>
//           </div>
//         )}
//       </div>

//       <Lightbox 
//         open={open} 
//         close={() => setOpen(false)} 
//         slides={slides} 
//         index={currentIndex}
//       />
//     </div>
//   );
// }


// export default Gallery;


import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ProtectedImage from '../components/ProtectedImage'; // ሕልፈት ስእሊ (Protected Image) ኣእቲናዮ ኣለና

function Gallery() {
  const { category } = useParams(); 
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch('https://habesha-film-production-server.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => {
          const formattedItemTitle = item.title
            .toLowerCase()
            .replace(/"/g, '')
            .replace(/&/g, 'and')
            .trim()
            .replace(/\s+/g, '-');
            
          return formattedItemTitle === category.toLowerCase().trim();
        });

        setProjectData(found || null);
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
        <p className="text-xl tracking-widest uppercase text-amber-400 animate-pulse">Loading Gallery...</p>
      </div>
    );
  }

  // Descriptions ካብቲ ፍሉይ ቅርጺ (||DESCS||) ንምውጻእ ወይ ብቐጥታ ንምርኣይ
  let descriptions = [];
  try {
    if (projectData?.description && projectData.description.includes('||DESCS||')) {
      const cleanDesc = projectData.description.split('||DESCS||')[1];
      descriptions = JSON.parse(cleanDesc);
    }
  } catch (e) {
    descriptions = [];
  }

  const slides = projectData?.images?.map((img, index) => ({ 
    src: img,
    description: descriptions[index] || "" 
  })) || [];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12 md:px-20">
      {/* ናብ Home ንምምላስ ዝሕግዝ ቁልፊ */}
      <div className="mb-10 pt-16 md:pt-4">
        <Link 
          to="/" 
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
          {projectData?.description && !projectData.description.includes('||DESCS||') 
            ? projectData.description 
            : `Explore the complete collection of ${projectData?.title} moments captured with elegance.`}
        </p>
      </div>

      {/* ስእልታት Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {projectData?.images && projectData.images.length > 0 ? (
          projectData.images.map((img, index) => (
            <div 
              key={index} 
              onClick={() => { setCurrentIndex(index); setOpen(true); }}
              className="group aspect-[2/3] overflow-hidden bg-zinc-900 rounded-lg cursor-pointer border border-zinc-800 shadow-lg relative"
            >
              {/* ንቡር img ብ ProtectedImage ተኪኤዮ ኣለኹ */}
              <ProtectedImage 
                src={img} 
                alt={`${projectData.title} ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
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

      {/* Lightbox ንምርኢት ስእሊ ብትኽክልን ብምክልኻልን (Protected) ክሰርሕ ተገይሩ ኣሎ */}
      <Lightbox 
        open={open} 
        close={() => setOpen(false)} 
        slides={slides} 
        index={currentIndex}
        render={{
          slide: ({ slide }) => (
            <div className="relative w-full h-full flex items-center justify-center p-4 select-none">
              <img 
                src={slide.src} 
                alt="Lightbox Protected" 
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
                className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl pointer-events-none" 
              />
              {/* ንስእሊ ዳውንሎድ ከይግበር ካብ ላዕሊ ንዝሽፍን ከልካሊ */}
              <div className="absolute inset-0 z-10 bg-transparent"></div>
            </div>
          )
        }}
      />
    </div>
  );
}

export default Gallery;

// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import ProtectedImage from '../components/ProtectedImage'; // ሕልፈት ስእሊ (Protected Image) ኣእቲናዮ ኣለና

// function Gallery() {
//   const { category } = useParams(); 
//   const [projectData, setProjectData] = useState(null);
//   const [loading, setLoading] = useState(true);
  
//   const [open, setOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     setLoading(true);
//     fetch('https://habesha-film-production-server.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => {
//         const found = data.find(item => {
//           const formattedItemTitle = item.title
//             .toLowerCase()
//             .replace(/"/g, '')
//             .replace(/&/g, 'and')
//             .trim()
//             .replace(/\s+/g, '-');
            
//           return formattedItemTitle === category.toLowerCase().trim();
//         });

//         setProjectData(found || null);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Error fetching gallery:", err);
//         setLoading(false);
//       });
//   }, [category]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
//         <p className="text-xl tracking-widest uppercase text-amber-400 animate-pulse">Loading Gallery...</p>
//       </div>
//     );
//   }

//   // Descriptions ካብቲ ፍሉይ ቅርጺ (||DESCS||) ንምውጻእ ወይ ብቐጥታ ንምርኣይ
//   let descriptions = [];
//   try {
//     if (projectData?.description && projectData.description.includes('||DESCS||')) {
//       const cleanDesc = projectData.description.split('||DESCS||')[1];
//       descriptions = JSON.parse(cleanDesc);
//     }
//   } catch (e) {
//     descriptions = [];
//   }

//   const slides = projectData?.images?.map((img, index) => ({ 
//     src: img,
//     description: descriptions[index] || "" 
//   })) || [];

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-12 md:px-20">
//       {/* ናብ Home ንምምላስ ዝሕግዝ ቁልፊ */}
//       <div className="mb-10 pt-16 md:pt-4">
//         <Link 
//           to="/" 
//           className="text-xs uppercase tracking-[0.3em] text-zinc-400 hover:text-white border border-zinc-800 px-4 py-2 rounded transition"
//         >
//           &larr; Back to Home
//         </Link>
//       </div>

//       {/* ርእሲ ጋለሪ */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-6xl font-serif italic text-amber-300 capitalize mb-4">
//           {projectData?.names || projectData?.title}
//         </h1>
//         <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
//           {projectData?.description && !projectData.description.includes('||DESCS||') 
//             ? projectData.description 
//             : `Explore the complete collection of ${projectData?.title} moments captured with elegance.`}
//         </p>
//       </div>

//       {/* ስእልታት Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//         {projectData?.images && projectData.images.length > 0 ? (
//           projectData.images.map((img, index) => (
//             <div 
//               key={index} 
//               onClick={() => { setCurrentIndex(index); setOpen(true); }}
//               className="group aspect-[2/3] overflow-hidden bg-zinc-900 rounded-lg cursor-pointer border border-zinc-800 shadow-lg relative select-none"
//             >
//               {/* ንቡር img ብ ProtectedImage ተኪኤዮ ኣለኹ */}
//               <ProtectedImage 
//                 src={img} 
//                 alt={`${projectData.title} ${index + 1}`} 
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none" 
//               />
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
//                 <span className="text-white text-xs uppercase tracking-widest bg-black/60 px-3 py-1 rounded">View</span>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full text-center py-20 text-zinc-500">
//             <p>No images uploaded in this gallery yet.</p>
//           </div>
//         )}
//       </div>

//       {/* Lightbox ንምርኢት ስእሊ ብትኽክልን ብምክልኻልን (Protected) ክሰርሕ ተገይሩ ኣሎ */}
//       <Lightbox 
//         open={open} 
//         close={() => setOpen(false)} 
//         slides={slides} 
//         index={currentIndex}
//         render={{
//           slide: ({ slide }) => (
//             <div className="relative w-full h-full flex items-center justify-center p-4 select-none">
//               <ProtectedImage 
//                 src={slide.src} 
//                 alt="Lightbox Protected" 
//                 className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl pointer-events-none" 
//               />
//               {/* ንስእሊ ዳውንሎድ ከይግበር ካብ ላዕሊ ንዝሽፍን ከልካሊ */}
//               <div className="absolute inset-0 z-10 bg-transparent pointer-events-auto" onContextMenu={(e) => e.preventDefault()}></div>
//             </div>
//           )
//         }}
//       />
//     </div>
//   );
// }

// export default Gallery;