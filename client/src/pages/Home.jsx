

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Hero from '../components/Hero';
// import heroVideo from '../assets/videos/robi-v1.mp4';
// import Footer from "../components/Footer";

// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// function Home() {
//   const [open, setOpen] = useState(false);
//   const [currentImages, setCurrentImages] = useState([]);
//   const [title, setTitle] = useState('');
  
//   const [sections, setSections] = useState([]); 

//   useEffect(() => {
//     fetch('https://habesha-film-production-server.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => {
//         const processedData = data.map(section => {
//           let parsedDescriptions = section.descriptions || [];
//           let parsedHeadings = section.headings || [];
//           let mainDesc = section.desc || section.description || '';

//           try {
//             if (typeof section.description === 'string' && section.description.includes('||DESCS||')) {
//               const parts = section.description.split('||DESCS||');
//               mainDesc = parts[0] || '';
              
//               try {
//                 parsedDescriptions = parts[1] ? JSON.parse(parts[1]) : [];
//               } catch(err) { parsedDescriptions = []; }
              
//               try {
//                 parsedHeadings = parts[2] ? JSON.parse(parts[2]) : [];
//               } catch(err) { parsedHeadings = []; }
//             }
//           } catch (e) {
//             console.log("Error parsing section data", e);
//           }

//           return {
//             ...section,
//             desc: mainDesc,
//             descriptions: parsedDescriptions,
//             headings: parsedHeadings
//           };
//         });

//         setSections(processedData);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   // ጽሩይ Slug ንምፍጣር ዝሕግዝ ተግባር (Helper function for URLs)
//   const generateSlug = (titleText) => {
//     if (!titleText) return '';
//     return titleText
//       .toLowerCase()
//       .replace(/"/g, '')
//       .replace(/&/g, 'and')
//       .trim()
//       .replace(/\s+/g, '-');
//   };

//   return (
//     <div className="min-h-screen bg-[#fcfbf9] text-zinc-900 font-sans">
//       <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

//       {title && <h1 className="text-center text-4xl mt-10 text-zinc-900">{title}</h1>}

//       <section className="py-20 w-full">
//         {sections.map((section, index) => {
//           const isWedding = section.title && section.title.toLowerCase().includes('wedding');

//           const defaultDescriptions = [
//             "01. The Beginning of Forever — Our First Look",
//             "02. A Tender Moment Caught in Time",
//             "03. Walking Hand in Hand Towards Tomorrow",
//             "04. Joy and Laughter Shared with Loved Ones",
//             "05. The Grand Celebration and Vows",
//             "06. Unforgettable Emotions of the Day",
//             "07. Elegance in Every Single Detail",
//             "08. Dancing Under the Evening Lights",
//             "09. Sweet Whispers and Quiet Glances",
//             "10. Cherished Memories to Last a Lifetime",
//             "11. A Magical Evening Full of Grace",
//             "12. Smiles That Brighten the Whole World",
//             "13. Embracing the Warmth of Family",
//             "14. Looking Into Each Other's Eyes",
//             "15. The Perfect Ending to a Perfect Day"
//           ];

//           const defaultHeadings = [
//             "The Story Begins",
//             "Tender Highlight",
//             "Walking Together",
//             "Shared Laughter",
//             "Featured Memory",
//             "Pure Emotion",
//             "Elegant Detail",
//             "Evening Magic",
//             "Quiet Glance",
//             "Cherished Moment",
//             "Graceful Evening",
//             "Bright Smile",
//             "Family Warmth",
//             "Deep Connection",
//             "Grand Finale"
//           ];

//           const customDescriptions = section.descriptions && section.descriptions.length > 0 
//             ? section.descriptions 
//             : defaultDescriptions;

//           const customHeadings = section.headings && section.headings.length > 0 
//             ? section.headings 
//             : defaultHeadings;

//           return (
//             <div key={section.id || index} className="mb-32 w-full">
              
//               {section.names && (
//                 <div className="mb-16 text-center px-6">
//                   <h3 className="text-3xl md:text-6xl font-serif italic text-zinc-800 tracking-wide">
//                     {section.names}
//                   </h3>
//                   <p className="text-[11px] md:text-[12px] uppercase tracking-[0.4em] text-zinc-500 mt-3 font-light">
//                     {section.date}
//                   </p>
//                 </div>
//               )}

//               {isWedding ? (
//                 <div className="w-full space-y-20 md:space-y-24">
                  
//                   {Array.isArray(section.images) && section.images[0] && (
//                     <div className="w-full">
//                       <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8 px-6">
//                         <span className="text-[10px] md:text-[11px] tracking-[0.6em] uppercase text-zinc-400 font-bold block mb-2">
//                           {customHeadings[0] || defaultHeadings[0]}
//                         </span>
//                         <p className="text-base md:text-lg leading-relaxed text-zinc-600">
//                           {customDescriptions[0] || defaultDescriptions[0]}
//                         </p>
//                       </div>
//                       <div className="group w-full h-[320px] sm:h-[400px] md:h-[550px] overflow-hidden shadow-xl bg-zinc-200">
//                         <img 
//                           src={section.images[0]} 
//                           alt={section.title} 
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
//                         />
//                       </div>
//                     </div>
//                   )}

//                   {Array.isArray(section.images) && section.images.length > 1 && (
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24 space-y-16 md:space-y-20">
//                       {section.images.slice(1, 4).map((img, i) => {
//                         const actualIdx = i + 1;
//                         return (
//                           <div key={i} className={`flex ${i % 2 !== 0 ? 'flex-row-reverse md:flex-row-reverse' : 'flex-row md:flex-row'} items-center gap-4 sm:gap-8 md:gap-12`}>
//                             <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 text-left px-1 sm:px-2">
//                               <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-zinc-400 font-bold block">
//                                 Moment 0{actualIdx + 1}
//                               </span>
//                               <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-zinc-900 leading-tight">
//                                 {customHeadings[actualIdx] || defaultHeadings[actualIdx]}
//                               </h3>
//                               <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
//                                 {customDescriptions[actualIdx] || defaultDescriptions[actualIdx]}
//                               </p>
//                             </div>
//                             <div className="flex-1 w-full flex justify-center">
//                               <div className="group aspect-[3/4] w-[130px] sm:w-[200px] md:max-w-md overflow-hidden rounded-t-[80px] sm:rounded-t-[120px] md:rounded-t-[140px] rounded-b-none shadow-xl bg-zinc-200">
//                                 <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   )}

//                   {Array.isArray(section.images) && section.images[4] && (
//                     <div className="w-full pt-4">
//                       <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8 px-6">
//                         <span className="text-[10px] md:text-[11px] tracking-[0.6em] uppercase text-zinc-400 font-bold block mb-2">
//                           {customHeadings[4] || defaultHeadings[4]}
//                         </span>
//                         <p className="text-base md:text-lg leading-relaxed text-zinc-600">
//                           {customDescriptions[4] || defaultDescriptions[4]}
//                         </p>
//                       </div>
//                       <div className="group w-full h-[320px] sm:h-[400px] md:h-[550px] overflow-hidden shadow-xl bg-zinc-200">
//                         <img 
//                           src={section.images[4]} 
//                           alt={section.title} 
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
//                         />
//                       </div>
//                     </div>
//                   )}

//                   {Array.isArray(section.images) && section.images.length > 5 && (
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24 space-y-16 md:space-y-20 pt-4">
//                       {section.images.slice(5, 8).map((img, i) => {
//                         const actualIdx = i + 5;
//                         return (
//                           <div key={i} className={`flex ${i % 2 !== 0 ? 'flex-row-reverse md:flex-row-reverse' : 'flex-row md:flex-row'} items-center gap-4 sm:gap-8 md:gap-12`}>
//                             <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 text-left px-1 sm:px-2">
//                               <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-zinc-400 font-bold block">
//                                 Moment 0{actualIdx + 1}
//                               </span>
//                               <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-zinc-900 leading-tight">
//                                 {customHeadings[actualIdx] || defaultHeadings[actualIdx]}
//                               </h3>
//                               <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
//                                 {customDescriptions[actualIdx] || defaultDescriptions[actualIdx]}
//                               </p>
//                             </div>
//                             <div className="flex-1 w-full flex justify-center">
//                               <div className="group aspect-[3/4] w-[130px] sm:w-[200px] md:max-w-md overflow-hidden rounded-t-[80px] sm:rounded-t-[120px] md:rounded-t-[140px] rounded-b-none shadow-xl bg-zinc-200">
//                                 <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   )}

//                   {Array.isArray(section.images) && section.images[8] && (
//                     <div className="w-full pt-4">
//                       <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8 px-6">
//                         <span className="text-[10px] md:text-[11px] tracking-[0.6em] uppercase text-zinc-400 font-bold block mb-2">
//                           {customHeadings[8] || defaultHeadings[8]}
//                         </span>
//                         <p className="text-base md:text-lg leading-relaxed text-zinc-600">
//                           {customDescriptions[8] || defaultDescriptions[8]}
//                         </p>
//                       </div>
//                       <div className="group w-full h-[320px] sm:h-[400px] md:h-[550px] overflow-hidden shadow-xl bg-zinc-200">
//                         <img 
//                           src={section.images[8]} 
//                           alt={section.title} 
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
//                         />
//                       </div>
//                     </div>
//                   )}

//                   {Array.isArray(section.images) && section.images.length > 9 && (
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24 space-y-16 md:space-y-20 pt-4">
//                       {section.images.slice(9, 12).map((img, i) => {
//                         const actualIdx = i + 9;
//                         return (
//                           <div key={i} className={`flex ${i % 2 !== 0 ? 'flex-row-reverse md:flex-row-reverse' : 'flex-row md:flex-row'} items-center gap-4 sm:gap-8 md:gap-12`}>
//                             <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 text-left px-1 sm:px-2">
//                               <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-zinc-400 font-bold block">
//                                 Moment 0{actualIdx + 1}
//                               </span>
//                               <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-zinc-900 leading-tight">
//                                 {customHeadings[actualIdx] || defaultHeadings[actualIdx]}
//                               </h3>
//                               <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
//                                 {customDescriptions[actualIdx] || defaultDescriptions[actualIdx]}
//                               </p>
//                             </div>
//                             <div className="flex-1 w-full flex justify-center">
//                               <div className="group aspect-[3/4] w-[130px] sm:w-[200px] md:max-w-md overflow-hidden rounded-t-[80px] sm:rounded-t-[120px] md:rounded-t-[140px] rounded-b-none shadow-xl bg-zinc-200">
//                                 <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   )}

//                   {Array.isArray(section.images) && section.images[12] && (
//                     <div className="w-full pt-4">
//                       <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8 px-6">
//                         <span className="text-[10px] md:text-[11px] tracking-[0.6em] uppercase text-zinc-400 font-bold block mb-2">
//                           {customHeadings[12] || defaultHeadings[12]}
//                         </span>
//                         <p className="text-base md:text-lg leading-relaxed text-zinc-600">
//                           {customDescriptions[12] || defaultDescriptions[12]}
//                         </p>
//                       </div>
//                       <div className="group w-full h-[320px] sm:h-[400px] md:h-[550px] overflow-hidden shadow-xl bg-zinc-200">
//                         <img 
//                           src={section.images[12]} 
//                           alt={section.title} 
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
//                         />
//                       </div>
//                     </div>
//                   )}

//                   {Array.isArray(section.images) && section.images.length > 13 && (
//                     <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24 space-y-16 md:space-y-20 pt-4">
//                       {section.images.slice(13, 16).map((img, i) => {
//                         const actualIdx = i + 13;
//                         return (
//                           <div key={i} className={`flex ${i % 2 !== 0 ? 'flex-row-reverse md:flex-row-reverse' : 'flex-row md:flex-row'} items-center gap-4 sm:gap-8 md:gap-12`}>
//                             <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4 text-left px-1 sm:px-2">
//                               <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-zinc-400 font-bold block">
//                                 Moment 0{actualIdx + 1}
//                               </span>
//                               <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-zinc-900 leading-tight">
//                                 {customHeadings[actualIdx] || defaultHeadings[actualIdx]}
//                               </h3>
//                               <p className="text-xs sm:text-sm md:text-base text-zinc-600 leading-relaxed">
//                                 {customDescriptions[actualIdx] || defaultDescriptions[actualIdx]}
//                               </p>
//                             </div>
//                             <div className="flex-1 w-full flex justify-center">
//                               <div className="group aspect-[3/4] w-[130px] sm:w-[200px] md:max-w-md overflow-hidden rounded-t-[80px] sm:rounded-t-[120px] md:rounded-t-[140px] rounded-b-none shadow-xl bg-zinc-200">
//                                 <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   )}

//                   <div className="text-center pt-10 px-6">
//                     <Link 
//                       to={`/gallery/${generateSlug(section.title)}`}
//                       className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.4em] border-2 border-zinc-900 px-8 md:px-10 py-3 md:py-4 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 inline-block"
//                     >
//                       View Gallery
//                     </Link>
//                   </div>
//                 </div>
//               ) : (
//                 <div className={`max-w-7xl mx-auto px-6 flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center text-center md:text-left gap-12 md:gap-16 py-12`}>
//                   <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-4">
//                     <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-400 font-bold">
//                       0{index + 1} — Selection
//                     </span>
//                     <h2 className="text-3xl md:text-6xl font-light tracking-tighter leading-none text-zinc-900">
//                       {section.title}
//                     </h2>
//                     <p className="text-base md:text-lg leading-relaxed text-zinc-600 max-w-md pt-4">
//                       {section.desc || section.description}
//                     </p>
//                   </div>

//                   <div className="flex-1 flex flex-col items-center md:items-start w-full">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//                       {Array.isArray(section.images) && section.images.slice(0, 2).map((img, i) => (
//                         <div key={i} className={`group aspect-[2/3] overflow-hidden bg-zinc-200 shadow-lg ${i === 1 ? 'md:mt-16' : ''}`}>
//                           <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                         </div>
//                       ))}
//                     </div>
                    
//                     <div className="mt-8 w-full text-center md:text-left flex justify-center md:justify-start">
//                       <Link 
//                         to={`/gallery/${generateSlug(section.title)}`}
//                         className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.4em] border-2 border-zinc-900 px-8 py-3 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 inline-block"
//                       >
//                         View Gallery
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </section>

//       <Lightbox open={open} close={() => setOpen(false)} slides={currentImages} />
//       <Footer />
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import heroVideo from '../assets/videos/robi-v1.mp4';
import Footer from "../components/Footer";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Home() {
  const [open, setOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [title, setTitle] = useState('');
  
  const [sections, setSections] = useState([]); 

  useEffect(() => {
    fetch('https://habesha-film-production-server.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => {
        const processedData = data.map(section => {
          let parsedDescriptions = section.descriptions || [];
          let parsedHeadings = section.headings || [];
          let mainDesc = section.desc || section.description || '';

          try {
            if (typeof section.description === 'string' && section.description.includes('||DESCS||')) {
              const parts = section.description.split('||DESCS||');
              mainDesc = parts[0] || '';
              
              try {
                parsedDescriptions = parts[1] ? JSON.parse(parts[1]) : [];
              } catch(err) { parsedDescriptions = []; }
              
              try {
                parsedHeadings = parts[2] ? JSON.parse(parts[2]) : [];
              } catch(err) { parsedHeadings = []; }
            }
          } catch (e) {
            console.log("Error parsing section data", e);
          }

          return {
            ...section,
            desc: mainDesc,
            descriptions: parsedDescriptions,
            headings: parsedHeadings
          };
        });

        setSections(processedData);
      })
      .catch(err => console.log(err));
  }, []);

  // ጽሩይ Slug ንምፍጣር ዝሕግዝ ተግባር (Helper function for URLs)
  const generateSlug = (titleText) => {
    if (!titleText) return '';
    return titleText
      .toLowerCase()
      .replace(/"/g, '')
      .replace(/&/g, 'and')
      .trim()
      .replace(/\s+/g, '-');
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-zinc-100 font-sans selection:bg-zinc-800">
      <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

      {title && <h1 className="text-center text-4xl mt-10 text-zinc-100">{title}</h1>}

      <section className="py-20 w-full overflow-hidden">
        {sections.map((section, index) => {
          const isWedding = section.title && section.title.toLowerCase().includes('wedding');

          const defaultDescriptions = [
            "01. The Beginning of Forever — Our First Look",
            "02. A Tender Moment Caught in Time",
            "03. Walking Hand in Hand Towards Tomorrow",
            "04. Joy and Laughter Shared with Loved Ones",
            "05. The Grand Celebration and Vows",
            "06. Unforgettable Emotions of the Day",
            "07. Elegance in Every Single Detail",
            "08. Dancing Under the Evening Lights",
            "09. Sweet Whispers and Quiet Glances",
            "10. Cherished Memories to Last a Lifetime",
            "11. A Magical Evening Full of Grace",
            "12. Smiles That Brighten the Whole World",
            "13. Embracing the Warmth of Family",
            "14. Looking Into Each Other's Eyes",
            "15. The Perfect Ending to a Perfect Day"
          ];

          const defaultHeadings = [
            "The Story Begins",
            "Tender Highlight",
            "Walking Together",
            "Shared Laughter",
            "Featured Memory",
            "Pure Emotion",
            "Elegant Detail",
            "Evening Magic",
            "Quiet Glance",
            "Cherished Moment",
            "Graceful Evening",
            "Bright Smile",
            "Family Warmth",
            "Deep Connection",
            "Grand Finale"
          ];

          const customDescriptions = section.descriptions && section.descriptions.length > 0 
            ? section.descriptions 
            : defaultDescriptions;

          const customHeadings = section.headings && section.headings.length > 0 
            ? section.headings 
            : defaultHeadings;

          return (
            <div key={section.id || index} className="mb-32 w-full">
              
              {/* Names & Date Header (ከምቲ ኣብ ቪድዮ ዘሎ ርእስቲ መርዓ) */}
              {section.names && (
                <div className="mb-20 text-center px-6">
                  <h3 className="text-3xl md:text-6xl font-serif italic text-zinc-100 tracking-wider">
                    {section.names}
                  </h3>
                  <div className="w-12 h-[1px] bg-zinc-700 mx-auto my-4"></div>
                  <p className="text-[11px] md:text-[12px] uppercase tracking-[0.4em] text-zinc-400 font-light">
                    {section.date}
                  </p>
                </div>
              )}

              {isWedding ? (
                <div className="w-full space-y-24">
                  
                  {/* Quote Section (ናይ ፊጻልድ ዘረባ ኣብ ማእከል) */}
                  <div className="max-w-xl mx-auto px-6 text-center my-16">
                    <p className="font-serif italic text-lg md:text-2xl text-zinc-300 leading-relaxed">
                      "Nobody has ever measured, even poets, how much a heart can hold."
                    </p>
                    <span className="text-xs uppercase tracking-widest text-zinc-500 mt-4 block">— Zelda Fitzgerald</span>
                  </div>

                  {/* Top First Image */}
                  {Array.isArray(section.images) && section.images[0] && (
                    <div className="max-w-5xl mx-auto px-4">
                      <div className="group w-full h-[350px] sm:h-[450px] md:h-[600px] overflow-hidden shadow-2xl bg-zinc-900 rounded-lg">
                        <img 
                          src={section.images[0]} 
                          alt={section.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                    </div>
                  )}

                  {/* Love Story Timeline Section (ብሰንሰለት/Timeline ዝተሰርዐ ዙርያ ምስልታት) */}
                  {Array.isArray(section.images) && section.images.length > 1 && (
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 relative my-28">
                      <h2 className="text-center font-serif text-3xl md:text-5xl italic mb-20 text-zinc-200">Love Story</h2>
                      
                      {/* Vertical Center Line for Timeline */}
                      <div className="absolute left-1/2 top-24 bottom-0 w-[1px] bg-zinc-800 -translate-x-1/2 hidden md:block"></div>

                      <div className="space-y-20">
                        {section.images.slice(1, 5).map((img, i) => {
                          const actualIdx = i + 1;
                          const isEven = i % 2 === 0;
                          return (
                            <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                              
                              {/* Text Side */}
                              <div className="flex-1 text-center md:text-left space-y-3 px-2">
                                <h3 className="text-2xl md:text-3xl font-serif text-zinc-100">
                                  {customHeadings[actualIdx] || defaultHeadings[actualIdx]}
                                </h3>
                                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                                  {customDescriptions[actualIdx] || defaultDescriptions[actualIdx]}
                                </p>
                              </div>

                              {/* Circular Image Frame */}
                              <div className="flex-1 flex justify-center relative">
                                <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl bg-zinc-900 group">
                                  <img 
                                    src={img} 
                                    alt={section.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                  />
                                </div>
                              </div>

                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Coming Soon Countdown Section */}
                  <div className="bg-zinc-950 py-16 border-y border-zinc-900 my-20">
                    <div className="max-w-3xl mx-auto text-center px-6">
                      <span className="text-xs uppercase tracking-[0.5em] text-zinc-500 block mb-6">Coming Soon</span>
                      <div className="grid grid-cols-4 gap-4 text-center font-serif">
                        <div className="border-r border-zinc-800">
                          <span className="text-3xl md:text-5xl font-light text-zinc-100 block">61</span>
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500">Days</span>
                        </div>
                        <div className="border-r border-zinc-800">
                          <span className="text-3xl md:text-5xl font-light text-zinc-100 block">05</span>
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500">Hours</span>
                        </div>
                        <div className="border-r border-zinc-800">
                          <span className="text-3xl md:text-5xl font-light text-zinc-100 block">52</span>
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500">Minutes</span>
                        </div>
                        <div>
                          <span className="text-3xl md:text-5xl font-light text-zinc-100 block">19</span>
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500">Seconds</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* About Us Section */}
                  <div className="max-w-5xl mx-auto px-6 my-24">
                    <h2 className="text-center font-serif text-3xl md:text-5xl italic mb-16 text-zinc-200">About Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      
                      <div className="p-8 border border-zinc-800 bg-zinc-950 rounded-xl flex flex-col justify-between">
                        <div>
                          <h4 className="font-serif text-2xl mb-4 text-zinc-200">Mia Williams</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">
                            {customDescriptions[5] || defaultDescriptions[5]}
                          </p>
                        </div>
                        {section.images[5] && (
                          <div className="mt-6 h-64 overflow-hidden rounded-lg">
                            <img src={section.images[5]} alt="Mia" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>

                      <div className="p-8 border border-zinc-800 bg-zinc-950 rounded-xl flex flex-col justify-between">
                        <div>
                          <h4 className="font-serif text-2xl mb-4 text-zinc-200">Lucas Jackson</h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">
                            {customDescriptions[6] || defaultDescriptions[6]}
                          </p>
                        </div>
                        {section.images[6] && (
                          <div className="mt-6 h-64 overflow-hidden rounded-lg">
                            <img src={section.images[6]} alt="Lucas" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Gallery Grid Section (ከምቲ ኣብ ቪድዮ ዝነበረ ግሪድ) */}
                  {Array.isArray(section.images) && section.images.length > 7 && (
                    <div className="max-w-6xl mx-auto px-4 my-24">
                      <h2 className="text-center font-serif text-3xl md:text-5xl italic mb-16 text-zinc-200">Gallery</h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {section.images.slice(7, 13).map((img, i) => (
                          <div key={i} className="group aspect-square overflow-hidden rounded-lg bg-zinc-900 shadow-lg">
                            <img 
                              src={img} 
                              alt="Gallery Item" 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Time & Place Cards */}
                  <div className="max-w-6xl mx-auto px-4 my-24">
                    <h2 className="text-center font-serif text-3xl md:text-5xl italic mb-16 text-zinc-200">Time & Place</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {["The Reception", "The Ceremony", "Wedding Party"].map((title, idx) => (
                        <div key={idx} className="border border-zinc-800 bg-zinc-950 p-6 rounded-xl text-center space-y-4">
                          <h4 className="font-serif text-xl text-zinc-200">{title}</h4>
                          <p className="text-xs text-zinc-400">Saturday, August 15, 2026<br/>10:00 AM onwards</p>
                          <div className="h-40 bg-zinc-900 rounded overflow-hidden">
                            {section.images[idx] && <img src={section.images[idx]} alt={title} className="w-full h-full object-cover" />}
                          </div>
                          <button className="text-[10px] uppercase tracking-widest border border-zinc-700 px-4 py-2 hover:bg-zinc-100 hover:text-zinc-950 transition-colors w-full">
                            Map Location
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message Wall Section */}
                  <div className="max-w-5xl mx-auto px-6 my-24">
                    <h2 className="text-center font-serif text-3xl md:text-5xl italic mb-16 text-zinc-200">Message Wall</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="p-6 border border-zinc-800 bg-zinc-950 rounded-xl space-y-4">
                          <p className="text-xs text-zinc-400 italic">"Wishing you a lifetime of love and happiness together. You two are perfect for each other!"</p>
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500 block">— John Doe</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Gallery Button */}
                  <div className="text-center pt-10 px-6">
                    <Link 
                      to={`/gallery/${generateSlug(section.title)}`}
                      className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.4em] border border-zinc-100 px-10 py-4 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-950 transition-all duration-300 inline-block rounded"
                    >
                      View Full Gallery
                    </Link>
                  </div>

                </div>
              ) : (
                /* ንኻልኦት ፕሮጀክታት ዝኸውን ነባሪ ዲዛይን (Default Layout) */
                <div className={`max-w-7xl mx-auto px-6 flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center text-center md:text-left gap-12 md:gap-16 py-12`}>
                  <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-4">
                    <span className="text-[11px] tracking-[0.6em] uppercase text-zinc-500 font-bold">
                      0{index + 1} — Selection
                    </span>
                    <h2 className="text-3xl md:text-6xl font-light tracking-tighter leading-none text-zinc-100">
                      {section.title}
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed text-zinc-400 max-w-md pt-4">
                      {section.desc || section.description}
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col items-center md:items-start w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                      {Array.isArray(section.images) && section.images.slice(0, 2).map((img, i) => (
                        <div key={i} className={`group aspect-[2/3] overflow-hidden bg-zinc-900 shadow-xl rounded-lg ${i === 1 ? 'md:mt-16' : ''}`}>
                          <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 w-full text-center md:text-left flex justify-center md:justify-start">
                      <Link 
                        to={`/gallery/${generateSlug(section.title)}`}
                        className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.4em] border border-zinc-100 px-8 py-3 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-950 transition-all duration-300 inline-block rounded"
                      >
                        View Gallery
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      <Lightbox open={open} close={() => setOpen(false)} slides={currentImages} />
      <Footer />
    </div>
  );
}

export default Home;