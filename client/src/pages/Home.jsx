

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




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Hero from '../components/Hero';
// import heroVideo from '../assets/videos/robi-v1.mp4';
// import Footer from "../components/Footer";
// import ProtectedImage from '../components/ProtectedImage'; 

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
//     <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden">
//       <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

//       {title && <h1 className="text-center text-3xl md:text-4xl mt-10 text-zinc-100 px-4">{title}</h1>}

//       <section className="py-12 md:py-24 w-full">
//         {sections.map((section, index) => {
//           const titleLower = section.title ? section.title.toLowerCase() : '';
//           const isWedding = titleLower.includes('wedding');
//           const isBridalShower = titleLower.includes('bridal') || titleLower.includes('bridal shower');
//           const isBabyShower = titleLower.includes('baby') || titleLower.includes('shower');

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
//             <div key={section.id || index} className="mb-20 md:mb-36 w-full border-b border-zinc-900 pb-16 md:pb-28 last:border-b-0">
              
//               {section.names && (
//                 <div className="mb-10 md:mb-16 text-center px-4">
//                   <span className="text-[9px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//                     Event Story & Timeline
//                   </span>
//                   <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif italic text-zinc-100 tracking-wide font-light">
//                     {section.names}
//                   </h3>
//                   <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto my-3"></div>
//                   <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-zinc-400 font-light">
//                     {section.date}
//                   </p>
//                 </div>
//               )}

//               {isWedding ? (
//                 <div className="w-full space-y-10 md:space-y-16">
                  
//                   {Array.isArray(section.images) && section.images[0] && (
//                     <div className="w-full max-w-4xl mx-auto px-4">
//                       <div className="text-center max-w-lg mx-auto mb-6">
//                         <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-1">
//                           {customHeadings[0] || defaultHeadings[0]}
//                         </span>
//                         <p className="text-sm md:text-base text-zinc-300 font-light">
//                           {customDescriptions[0] || defaultDescriptions[0]}
//                         </p>
//                       </div>
//                       <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl bg-zinc-900 border-2 border-[#dfb557]/40 relative">
//                         <img src={section.images[0]} alt={section.title} className="w-full h-full object-cover" />
//                       </div>
//                     </div>
//                   )}

//                   {Array.isArray(section.images) && section.images.length > 1 && (
//                     <div className="max-w-4xl mx-auto px-4 relative">
//                       <div className="space-y-6 sm:space-y-12">
//                         {section.images.slice(1, 5).map((img, i) => {
//                           const actualIdx = i + 1;
//                           const isEven = i % 2 === 0;

//                           return (
//                             <div 
//                               key={i} 
//                               className={`flex items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-zinc-950/70 border-2 border-[#dfb557]/50 shadow-2xl ${isEven ? 'flex-row-reverse text-right sm:text-left' : 'flex-row text-left sm:text-right'}`}
//                             >
//                               <div className={`flex-1 ${isEven ? 'sm:text-left text-right' : 'sm:text-right text-left'} space-y-1.5`}>
//                                 <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#dfb557] font-bold block">
//                                   Chapter 0{actualIdx}
//                                 </span>
//                                 <h4 className="text-base sm:text-2xl font-serif text-zinc-100">
//                                   {customHeadings[actualIdx] || defaultHeadings[actualIdx]}
//                                 </h4>
//                                 <p className="text-[11px] sm:text-sm text-zinc-300 font-light leading-relaxed">
//                                   {customDescriptions[actualIdx] || defaultDescriptions[actualIdx]}
//                                 </p>
//                               </div>

//                               <div className="relative flex-shrink-0 flex justify-center">
//                                 <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 sm:border-4 border-[#dfb557] shadow-xl bg-zinc-900 hover:scale-105 transition-transform duration-500 flex-shrink-0">
//                                   <img src={img} alt={section.title} className="w-full h-full object-cover" />
//                                 </div>
//                               </div>
//                             </div>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   )}

//                   {Array.isArray(section.images) && section.images[5] && (
//                     <div className="w-full max-w-4xl mx-auto px-4 pt-4">
//                       <div className="text-center max-w-lg mx-auto mb-6">
//                         <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-1">
//                           {customHeadings[5] || defaultHeadings[5]}
//                         </span>
//                         <p className="text-sm md:text-base text-zinc-300 font-light">
//                           {customDescriptions[5] || defaultDescriptions[5]}
//                         </p>
//                       </div>
//                       <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl bg-zinc-900 border-2 border-[#dfb557]/40 relative">
//                         <img src={section.images[5]} alt={section.title} className="w-full h-full object-cover" />
//                       </div>
//                     </div>
//                   )}

//                   {Array.isArray(section.images) && section.images.length > 6 && (
//                     <div className="max-w-4xl mx-auto px-4 relative pt-4">
//                       <div className="space-y-6 sm:space-y-12">
//                         {section.images.slice(6, 10).map((img, i) => {
//                           const actualIdx = i + 6;
//                           const isEven = i % 2 === 0;

//                           return (
//                             <div 
//                               key={i} 
//                               className={`flex items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-zinc-950/70 border-2 border-[#dfb557]/50 shadow-2xl ${isEven ? 'flex-row-reverse text-right sm:text-left' : 'flex-row text-left sm:text-right'}`}
//                             >
//                               <div className={`flex-1 ${isEven ? 'sm:text-left text-right' : 'sm:text-right text-left'} space-y-1.5`}>
//                                 <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#dfb557] font-bold block">
//                                   Chapter 0{actualIdx}
//                                 </span>
//                                 <h4 className="text-base sm:text-2xl font-serif text-zinc-100">
//                                   {customHeadings[actualIdx] || defaultHeadings[actualIdx]}
//                                 </h4>
//                                 <p className="text-[11px] sm:text-sm text-zinc-300 font-light leading-relaxed">
//                                   {customDescriptions[actualIdx] || defaultDescriptions[actualIdx]}
//                                 </p>
//                               </div>

//                               <div className="relative flex-shrink-0 flex justify-center">
//                                 <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 sm:border-4 border-[#dfb557] shadow-xl bg-zinc-900 hover:scale-105 transition-transform duration-500 flex-shrink-0">
//                                   <img src={img} alt={section.title} className="w-full h-full object-cover" />
//                                 </div>
//                               </div>
//                             </div>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   )}

//                   {Array.isArray(section.images) && section.images.length > 10 && (
//                     <div className="max-w-4xl mx-auto px-4 pt-12">
//                       <div className="text-center mb-6">
//                         <h3 className="text-2xl font-serif text-zinc-100 uppercase tracking-widest">More Memories</h3>
//                         <div className="w-8 h-[1px] bg-[#dfb557] mx-auto mt-2"></div>
//                       </div>
//                       <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
//                         {section.images.slice(10, 16).map((img, i) => (
//                           <div key={i} className="aspect-square overflow-hidden rounded-xl bg-zinc-900 border border-[#dfb557]/40 shadow-lg">
//                             <img src={img} alt={section.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   <div className="text-center pt-8 px-4">
//                     <Link 
//                       to={`/gallery/${generateSlug(section.title)}`}
//                       className="text-[11px] font-bold uppercase tracking-[0.3em] border-2 border-[#dfb557] px-8 py-3.5 text-[#dfb557] hover:bg-[#dfb557] hover:text-black transition-all duration-300 inline-block rounded-xl shadow-lg"
//                     >
//                       View Full Gallery
//                     </Link>
//                   </div>
//                 </div>

//               ) : isBridalShower ? (
//                 <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 space-y-12">
//                   <div className="text-center space-y-2 mb-8">
//                     <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block">
//                       Bridal Shower Celebration
//                     </span>
//                     <h2 className="text-3xl sm:text-4xl font-serif text-zinc-100">
//                       {section.title}
//                     </h2>
//                     <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto"></div>
//                     <p className="text-sm text-zinc-400 font-light max-w-md mx-auto">
//                       {section.desc || section.description}
//                     </p>
//                   </div>

//                   {/* 2 ስእሊ ጎኒ ንጎን (ስእሊ ዓቢ ንክኸውን aspectRatio ተስተኻኪሉ፣ ጽሑፍ ከኣ ጽሩይ ክኸውን ተገይሩ) */}
//                   <div className="space-y-10">
//                     {Array.isArray(section.images) && (() => {
//                       const pairs = [];
//                       for (let i = 0; i < section.images.length; i += 2) {
//                         pairs.push(section.images.slice(i, i + 2));
//                       }
//                       return pairs.map((pair, pairIdx) => (
//                         <div key={pairIdx} className="p-2 sm:p-6 rounded-2xl bg-zinc-950/75 border-2 border-[#dfb557]/40 shadow-xl space-y-4">
                          
//                           <div className="grid grid-cols-2 gap-2 sm:gap-6">
//                             {pair.map((img, imgIdx) => {
//                               const absoluteIdx = (pairIdx * 2) + imgIdx;
//                               return (
//                                 <div key={imgIdx} className="space-y-2 flex flex-col justify-between">
//                                   {/* እቲ ስእሊ ኣብ ሞባይል ዓቢ ንክኸውን aspect-square ወይስ aspect-[3/4] ተዋሂብዎ ኣሎ */}
//                                   <div className="w-full aspect-[3/4] sm:aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden border-2 border-[#dfb557]/60 shadow-lg bg-zinc-900">
//                                     <img src={img} alt={section.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
//                                   </div>
                                  
//                                   {/* ጽሑፍ ኣብ ትሕቲ ስእሊ (ብትኽክል  መጠን ተዋሂብዎ) */}
//                                   <div className="text-center space-y-1 px-1">
//                                     <span className="text-[7px] sm:text-[10px] tracking-[0.2em] uppercase text-[#dfb557] font-bold block">
//                                       Moment 0{absoluteIdx + 1}
//                                     </span>
//                                     <h4 className="text-[11px] sm:text-lg font-serif text-zinc-100 line-clamp-1">
//                                       {customHeadings[absoluteIdx] || `Precious Moment ${absoluteIdx + 1}`}
//                                     </h4>
//                                     <p className="text-[9px] sm:text-xs text-zinc-300 font-light leading-snug line-clamp-2">
//                                       {customDescriptions[absoluteIdx] || `Celebrating the joy and warmth of this special bridal shower journey.`}
//                                     </p>
//                                   </div>
//                                 </div>
//                               );
//                             })}
//                           </div>
//                         </div>
//                       ));
//                     })()}
//                   </div>

//                   <div className="text-center pt-6">
//                     <Link 
//                       to={`/gallery/${generateSlug(section.title)}`}
//                       className="text-[11px] font-bold uppercase tracking-[0.3em] border-2 border-[#dfb557] px-8 py-3 text-[#dfb557] hover:bg-[#dfb557] hover:text-black transition-all duration-300 inline-block rounded-xl shadow-md"
//                     >
//                       View Full Gallery
//                     </Link>
//                   </div>
//                 </div>

//               ) : isBabyShower ? (
//                 <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
//                   <div className="text-center space-y-2 mb-8">
//                     <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block">
//                       Baby Shower Celebration
//                     </span>
//                     <h2 className="text-3xl sm:text-4xl font-serif text-zinc-100">
//                       {section.title}
//                     </h2>
//                     <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto"></div>
//                     <p className="text-sm text-zinc-400 font-light max-w-md mx-auto">
//                       {section.desc || section.description}
//                     </p>
//                   </div>

//                   <div className="space-y-6 sm:space-y-10">
//                     {Array.isArray(section.images) && section.images.map((img, i) => {
//                       const isEven = i % 2 === 0;

//                       return (
//                         <div 
//                           key={i} 
//                           className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-4 sm:p-6 rounded-2xl bg-zinc-950/70 border-2 border-[#dfb557]/40 shadow-xl ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
//                         >
//                           <div className="w-full sm:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border border-[#dfb557]/50 shadow-md bg-zinc-900 flex-shrink-0">
//                             <img src={img} alt={section.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
//                           </div>

//                           <div className="w-full sm:w-1/2 space-y-2 text-center sm:text-left">
//                             <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#dfb557] font-bold block">
//                               Moment 0{i + 1}
//                             </span>
//                             <h4 className="text-lg sm:text-xl font-serif text-zinc-100">
//                               {customHeadings[i] || `Precious Moment ${i + 1}`}
//                             </h4>
//                             <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
//                               {customDescriptions[i] || `Celebrating the joy and warmth of this special baby shower journey.`}
//                             </p>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>

//                   <div className="text-center pt-6">
//                     <Link 
//                       to={`/gallery/${generateSlug(section.title)}`}
//                       className="text-[11px] font-bold uppercase tracking-[0.3em] border-2 border-[#dfb557] px-8 py-3 text-[#dfb557] hover:bg-[#dfb557] hover:text-black transition-all duration-300 inline-block rounded-xl shadow-md"
//                     >
//                       View Full Gallery
//                     </Link>
//                   </div>
//                 </div>

//               ) : (
//                 <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center space-y-6 py-6">
//                   <span className="text-[10px] tracking-[0.5em] uppercase text-[#dfb557] font-bold">
//                     Curated Project
//                   </span>
//                   <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-100">
//                     {section.title}
//                   </h2>
//                   <p className="text-sm md:text-base leading-relaxed text-zinc-400 max-w-lg font-light">
//                     {section.desc || section.description}
//                   </p>

//                   <div className="grid grid-cols-2 gap-4 w-full pt-4 max-w-2xl">
//                     {Array.isArray(section.images) && section.images.slice(0, 2).map((img, i) => (
//                       <div key={i} className="aspect-[3/4] overflow-hidden bg-zinc-900 border border-[#dfb557]/40 rounded-xl shadow-lg">
//                         <img src={img} alt={section.title} className="w-full h-full object-cover" />
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="pt-4">
//                     <Link 
//                       to={`/gallery/${generateSlug(section.title)}`}
//                       className="text-[11px] font-bold uppercase tracking-[0.3em] border-2 border-[#dfb557] px-8 py-3 text-[#dfb557] hover:bg-[#dfb557] hover:text-black transition-all duration-300 inline-block rounded-xl shadow-md"
//                     >
//                       Explore Project
//                     </Link>
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
import ProtectedImage from '../components/ProtectedImage'; 

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
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden">
      <Hero videoSrc={heroVideo} buttonText="Explore Our Work" />

      {title && <h1 className="text-center text-3xl md:text-4xl mt-10 text-zinc-100 px-4">{title}</h1>}

      <section className="py-12 md:py-24 w-full">
        {sections.map((section, index) => {
          const titleLower = section.title ? section.title.toLowerCase() : '';
          const isWedding = titleLower.includes('wedding');
          const isBridalShower = titleLower.includes('bridal') || titleLower.includes('bridal shower');
          const isBabyShower = titleLower.includes('baby') || titleLower.includes('shower');

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
            <div key={section.id || index} className="mb-20 md:mb-36 w-full border-b border-zinc-900 pb-16 md:pb-28 last:border-b-0">
              
              {section.names && (
                <div className="mb-10 md:mb-16 text-center px-4">
                  <span className="text-[9px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
                    Event Story & Timeline
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif italic text-zinc-100 tracking-wide font-light">
                    {section.names}
                  </h3>
                  <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto my-3"></div>
                  <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-zinc-400 font-light">
                    {section.date}
                  </p>
                </div>
              )}

              {isWedding ? (
                <div className="w-full space-y-10 md:space-y-16">
                  
                  {Array.isArray(section.images) && section.images[0] && (
                    <div className="w-full max-w-4xl mx-auto px-4">
                      <div className="text-center max-w-lg mx-auto mb-6">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-1">
                          {customHeadings[0] || defaultHeadings[0]}
                        </span>
                        <p className="text-sm md:text-base text-zinc-300 font-light">
                          {customDescriptions[0] || defaultDescriptions[0]}
                        </p>
                      </div>
                      <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl bg-zinc-900 border-2 border-[#dfb557]/40 relative">
                        <ProtectedImage src={section.images[0]} alt={section.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  )}

                  {Array.isArray(section.images) && section.images.length > 1 && (
                    <div className="max-w-4xl mx-auto px-4 relative">
                      <div className="space-y-6 sm:space-y-12">
                        {section.images.slice(1, 5).map((img, i) => {
                          const actualIdx = i + 1;
                          const isEven = i % 2 === 0;

                          return (
                            <div 
                              key={i} 
                              className={`flex items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-zinc-950/70 border-2 border-[#dfb557]/50 shadow-2xl ${isEven ? 'flex-row-reverse text-right sm:text-left' : 'flex-row text-left sm:text-right'}`}
                            >
                              <div className={`flex-1 ${isEven ? 'sm:text-left text-right' : 'sm:text-right text-left'} space-y-1.5`}>
                                <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#dfb557] font-bold block">
                                  Chapter 0{actualIdx}
                                </span>
                                <h4 className="text-base sm:text-2xl font-serif text-zinc-100">
                                  {customHeadings[actualIdx] || defaultHeadings[actualIdx]}
                                </h4>
                                <p className="text-[11px] sm:text-sm text-zinc-300 font-light leading-relaxed">
                                  {customDescriptions[actualIdx] || defaultDescriptions[actualIdx]}
                                </p>
                              </div>

                              <div className="relative flex-shrink-0 flex justify-center">
                                <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 sm:border-4 border-[#dfb557] shadow-xl bg-zinc-900 hover:scale-105 transition-transform duration-500 flex-shrink-0">
                                  <ProtectedImage src={img} alt={section.title} className="w-full h-full object-cover" />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {Array.isArray(section.images) && section.images[5] && (
                    <div className="w-full max-w-4xl mx-auto px-4 pt-4">
                      <div className="text-center max-w-lg mx-auto mb-6">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-1">
                          {customHeadings[5] || defaultHeadings[5]}
                        </span>
                        <p className="text-sm md:text-base text-zinc-300 font-light">
                          {customDescriptions[5] || defaultDescriptions[5]}
                        </p>
                      </div>
                      <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl bg-zinc-900 border-2 border-[#dfb557]/40 relative">
                        <ProtectedImage src={section.images[5]} alt={section.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  )}

                  {Array.isArray(section.images) && section.images.length > 6 && (
                    <div className="max-w-4xl mx-auto px-4 relative pt-4">
                      <div className="space-y-6 sm:space-y-12">
                        {section.images.slice(6, 10).map((img, i) => {
                          const actualIdx = i + 6;
                          const isEven = i % 2 === 0;

                          return (
                            <div 
                              key={i} 
                              className={`flex items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-zinc-950/70 border-2 border-[#dfb557]/50 shadow-2xl ${isEven ? 'flex-row-reverse text-right sm:text-left' : 'flex-row text-left sm:text-right'}`}
                            >
                              <div className={`flex-1 ${isEven ? 'sm:text-left text-right' : 'sm:text-right text-left'} space-y-1.5`}>
                                <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#dfb557] font-bold block">
                                  Chapter 0{actualIdx}
                                </span>
                                <h4 className="text-base sm:text-2xl font-serif text-zinc-100">
                                  {customHeadings[actualIdx] || defaultHeadings[actualIdx]}
                                </h4>
                                <p className="text-[11px] sm:text-sm text-zinc-300 font-light leading-relaxed">
                                  {customDescriptions[actualIdx] || defaultDescriptions[actualIdx]}
                                </p>
                              </div>

                              <div className="relative flex-shrink-0 flex justify-center">
                                <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 sm:border-4 border-[#dfb557] shadow-xl bg-zinc-900 hover:scale-105 transition-transform duration-500 flex-shrink-0">
                                  <ProtectedImage src={img} alt={section.title} className="w-full h-full object-cover" />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {Array.isArray(section.images) && section.images.length > 10 && (
                    <div className="max-w-4xl mx-auto px-4 pt-12">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-serif text-zinc-100 uppercase tracking-widest">More Memories</h3>
                        <div className="w-8 h-[1px] bg-[#dfb557] mx-auto mt-2"></div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                        {section.images.slice(10, 16).map((img, i) => (
                          <div key={i} className="aspect-square overflow-hidden rounded-xl bg-zinc-900 border border-[#dfb557]/40 shadow-lg">
                            <ProtectedImage src={img} alt={section.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="text-center pt-8 px-4">
                    <Link 
                      to={`/gallery/${generateSlug(section.title)}`}
                      className="text-[11px] font-bold uppercase tracking-[0.3em] border-2 border-[#dfb557] px-8 py-3.5 text-[#dfb557] hover:bg-[#dfb557] hover:text-black transition-all duration-300 inline-block rounded-xl shadow-lg"
                    >
                      View Full Gallery
                    </Link>
                  </div>
                </div>

              ) : isBridalShower ? (
                <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 space-y-12">
                  <div className="text-center space-y-2 mb-8">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block">
                      Bridal Shower Celebration
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-zinc-100">
                      {section.title}
                    </h2>
                    <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto"></div>
                    <p className="text-sm text-zinc-400 font-light max-w-md mx-auto">
                      {section.desc || section.description}
                    </p>
                  </div>

                  <div className="space-y-10">
                    {Array.isArray(section.images) && (() => {
                      const pairs = [];
                      for (let i = 0; i < section.images.length; i += 2) {
                        pairs.push(section.images.slice(i, i + 2));
                      }
                      return pairs.map((pair, pairIdx) => (
                        <div key={pairIdx} className="p-2 sm:p-6 rounded-2xl bg-zinc-950/75 border-2 border-[#dfb557]/40 shadow-xl space-y-4">
                          
                          <div className="grid grid-cols-2 gap-2 sm:gap-6">
                            {pair.map((img, imgIdx) => {
                              const absoluteIdx = (pairIdx * 2) + imgIdx;
                              return (
                                <div key={imgIdx} className="space-y-2 flex flex-col justify-between">
                                  <div className="w-full aspect-[3/4] sm:aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden border-2 border-[#dfb557]/60 shadow-lg bg-zinc-900">
                                    <ProtectedImage src={img} alt={section.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                  </div>
                                  
                                  <div className="text-center space-y-1 px-1">
                                    <span className="text-[7px] sm:text-[10px] tracking-[0.2em] uppercase text-[#dfb557] font-bold block">
                                      Moment 0{absoluteIdx + 1}
                                    </span>
                                    <h4 className="text-[11px] sm:text-lg font-serif text-zinc-100 line-clamp-1">
                                      {customHeadings[absoluteIdx] || `Precious Moment ${absoluteIdx + 1}`}
                                    </h4>
                                    <p className="text-[9px] sm:text-xs text-zinc-300 font-light leading-snug line-clamp-2">
                                      {customDescriptions[absoluteIdx] || `Celebrating the joy and warmth of this special bridal shower journey.`}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ));
                    })()}
                  </div>

                  <div className="text-center pt-6">
                    <Link 
                      to={`/gallery/${generateSlug(section.title)}`}
                      className="text-[11px] font-bold uppercase tracking-[0.3em] border-2 border-[#dfb557] px-8 py-3 text-[#dfb557] hover:bg-[#dfb557] hover:text-black transition-all duration-300 inline-block rounded-xl shadow-md"
                    >
                      View Full Gallery
                    </Link>
                  </div>
                </div>

              ) : isBabyShower ? (
                <div className="w-full max-w-4xl mx-auto px-4 space-y-8">
                  <div className="text-center space-y-2 mb-8">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block">
                      Baby Shower Celebration
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-zinc-100">
                      {section.title}
                    </h2>
                    <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto"></div>
                    <p className="text-sm text-zinc-400 font-light max-w-md mx-auto">
                      {section.desc || section.description}
                    </p>
                  </div>

                  <div className="space-y-6 sm:space-y-10">
                    {Array.isArray(section.images) && section.images.map((img, i) => {
                      const isEven = i % 2 === 0;

                      return (
                        <div 
                          key={i} 
                          className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-4 sm:p-6 rounded-2xl bg-zinc-950/70 border-2 border-[#dfb557]/40 shadow-xl ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                        >
                          <div className="w-full sm:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border border-[#dfb557]/50 shadow-md bg-zinc-900 flex-shrink-0">
                            <ProtectedImage src={img} alt={section.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                          </div>

                          <div className="w-full sm:w-1/2 space-y-2 text-center sm:text-left">
                            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#dfb557] font-bold block">
                              Moment 0{i + 1}
                            </span>
                            <h4 className="text-lg sm:text-xl font-serif text-zinc-100">
                              {customHeadings[i] || `Precious Moment ${i + 1}`}
                            </h4>
                            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                              {customDescriptions[i] || `Celebrating the joy and warmth of this special baby shower journey.`}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-center pt-6">
                    <Link 
                      to={`/gallery/${generateSlug(section.title)}`}
                      className="text-[11px] font-bold uppercase tracking-[0.3em] border-2 border-[#dfb557] px-8 py-3 text-[#dfb557] hover:bg-[#dfb557] hover:text-black transition-all duration-300 inline-block rounded-xl shadow-md"
                    >
                      View Full Gallery
                    </Link>
                  </div>
                </div>

              ) : (
                <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center space-y-6 py-6">
                  <span className="text-[10px] tracking-[0.5em] uppercase text-[#dfb557] font-bold">
                    Curated Project
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-100">
                    {section.title}
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed text-zinc-400 max-w-lg font-light">
                    {section.desc || section.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 w-full pt-4 max-w-2xl">
                    {Array.isArray(section.images) && section.images.slice(0, 2).map((img, i) => (
                      <div key={i} className="aspect-[3/4] overflow-hidden bg-zinc-900 border border-[#dfb557]/40 rounded-xl shadow-lg">
                        <ProtectedImage src={img} alt={section.title} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <Link 
                      to={`/gallery/${generateSlug(section.title)}`}
                      className="text-[11px] font-bold uppercase tracking-[0.3em] border-2 border-[#dfb557] px-8 py-3 text-[#dfb557] hover:bg-[#dfb557] hover:text-black transition-all duration-300 inline-block rounded-xl shadow-md"
                    >
                      Explore Project
                    </Link>
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