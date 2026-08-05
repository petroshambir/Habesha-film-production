

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
    <div className="min-h-screen bg-[#030305] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden">
      <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

      {title && <h1 className="text-center text-3xl md:text-5xl mt-12 text-zinc-100 px-4">{title}</h1>}

      <section className="py-20 md:py-32 w-full">
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
            <div key={section.id || index} className="mb-32 md:mb-52 w-full border-b border-zinc-900 pb-20 md:pb-40 last:border-b-0">
              
              {section.names && (
                <div className="mb-16 md:mb-28 text-center px-6">
                  <span className="text-[10px] md:text-xs tracking-[0.8em] uppercase text-[#dfb557] font-semibold block mb-3">
                    Cinematic Portfolio Story
                  </span>
                  <h3 className="text-4xl sm:text-6xl md:text-8xl font-serif italic text-zinc-100 tracking-wide font-normal">
                    {section.names}
                  </h3>
                  <div className="w-20 h-[1px] bg-[#dfb557]/60 mx-auto my-6"></div>
                  <p className="text-[11px] md:text-[13px] uppercase tracking-[0.5em] text-zinc-400 font-light">
                    {section.date}
                  </p>
                </div>
              )}

              {isWedding ? (
                <div className="w-full space-y-24 md:space-y-40">
                  
                  {/* Hero Full-Screen Cinematic Showcase (Index 0) */}
                  {Array.isArray(section.images) && section.images[0] && (
                    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
                        <div className="lg:col-span-5 space-y-3">
                          <span className="text-[10px] tracking-[0.6em] uppercase text-[#dfb557] font-bold block">
                            Chapter I — {customHeadings[0] || defaultHeadings[0]}
                          </span>
                          <p className="text-lg md:text-2xl font-serif text-zinc-200 leading-snug font-light">
                            {customDescriptions[0] || defaultDescriptions[0]}
                          </p>
                        </div>
                      </div>
                      <div className="group w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl shadow-2xl bg-zinc-900 border border-zinc-800/80 relative">
                        <img 
                          src={section.images[0]} 
                          alt={section.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        />
                      </div>
                    </div>
                  )}

                  {/* Asymmetrical Multi-Column Grid for Moments 1, 2, 3 */}
                  {Array.isArray(section.images) && section.images.length > 1 && (
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                      {section.images.slice(1, 4).map((img, i) => {
                        const actualIdx = i + 1;
                        return (
                          <div key={i} className="space-y-4 flex flex-col">
                            <div className="group w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl bg-zinc-900 border border-zinc-800/80 relative">
                              <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            </div>
                            <div className="space-y-1.5 pt-2">
                              <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block">
                                0{actualIdx + 1}
                              </span>
                              <h4 className="text-xl md:text-2xl font-serif text-zinc-100">
                                {customHeadings[actualIdx] || defaultHeadings[actualIdx]}
                              </h4>
                              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                                {customDescriptions[actualIdx] || defaultDescriptions[actualIdx]}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Wide Banner Image (Index 4) */}
                  {Array.isArray(section.images) && section.images[4] && (
                    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 pt-10">
                      <div className="text-center max-w-2xl mx-auto mb-10 px-4">
                        <span className="text-[10px] tracking-[0.6em] uppercase text-[#dfb557] font-bold block mb-2">
                          {customHeadings[4] || defaultHeadings[4]}
                        </span>
                        <p className="text-base md:text-xl font-serif text-zinc-200 font-light leading-relaxed">
                          {customDescriptions[4] || defaultDescriptions[4]}
                        </p>
                      </div>
                      <div className="group w-full aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl bg-zinc-900 border border-zinc-800/80 relative">
                        <img 
                          src={section.images[4]} 
                          alt={section.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        />
                      </div>
                    </div>
                  )}

                  {/* Dual Grid Layout for Moments 5, 6, 7, 8 */}
                  {Array.isArray(section.images) && section.images.length > 5 && (
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                      {section.images.slice(5, 9).map((img, i) => {
                        const actualIdx = i + 5;
                        return (
                          <div key={i} className={`space-y-4 ${i % 2 !== 0 ? 'md:mt-24' : ''}`}>
                            <div className="group w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl bg-zinc-900 border border-zinc-800/80 relative">
                              <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            </div>
                            <div className="space-y-1.5 pt-2">
                              <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block">
                                Chapter 0{actualIdx + 1}
                              </span>
                              <h4 className="text-xl md:text-2xl font-serif text-zinc-100">
                                {customHeadings[actualIdx] || defaultHeadings[actualIdx]}
                              </h4>
                              <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                                {customDescriptions[actualIdx] || defaultDescriptions[actualIdx]}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Full Banner (Index 9) */}
                  {Array.isArray(section.images) && section.images[9] && (
                    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 pt-10">
                      <div className="group w-full aspect-[21/9] overflow-hidden rounded-3xl shadow-2xl bg-zinc-900 border border-zinc-800/80 relative">
                        <img 
                          src={section.images[9]} 
                          alt={section.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        />
                      </div>
                    </div>
                  )}

                  {/* Triple Grid for Remaining Images */}
                  {Array.isArray(section.images) && section.images.length > 10 && (
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                      {section.images.slice(10, 16).map((img, i) => {
                        const actualIdx = i + 10;
                        return (
                          <div key={i} className="space-y-3">
                            <div className="group w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl bg-zinc-900 border border-zinc-800/80 relative">
                              <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            </div>
                            <div className="space-y-1 pt-1">
                              <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block">
                                0{actualIdx + 1}
                              </span>
                              <h4 className="text-lg font-serif text-zinc-100">
                                {customHeadings[actualIdx] || defaultHeadings[actualIdx]}
                              </h4>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="text-center pt-16 px-6">
                    <Link 
                      to={`/gallery/${generateSlug(section.title)}`}
                      className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.5em] border-2 border-[#dfb557] px-12 py-4 text-[#dfb557] hover:bg-[#dfb557] hover:text-black transition-all duration-300 inline-block rounded-full shadow-2xl shadow-[#dfb557]/15"
                    >
                      View Full Gallery Collection
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center py-12">
                  <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
                    <span className="text-[11px] tracking-[0.6em] uppercase text-[#dfb557] font-bold block">
                      0{index + 1} — Curated Collection
                    </span>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-none text-zinc-100">
                      {section.title}
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed text-zinc-400 font-light">
                      {section.desc || section.description}
                    </p>
                    <div className="pt-4">
                      <Link 
                        to={`/gallery/${generateSlug(section.title)}`}
                        className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.4em] border-2 border-[#dfb557] px-10 py-4 text-[#dfb557] hover:bg-[#dfb557] hover:text-black transition-all duration-300 inline-block rounded-full shadow-xl"
                      >
                        Explore Project
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    {Array.isArray(section.images) && section.images.slice(0, 2).map((img, i) => (
                      <div key={i} className={`group aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-800/80 rounded-2xl shadow-2xl relative ${i === 1 ? 'sm:mt-20' : ''}`}>
                        <img src={img} alt={section.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                      </div>
                    ))}
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