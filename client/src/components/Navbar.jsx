
// import React, { useState } from 'react';
// import logo from '../assets/images/robi-logo.png';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [workOpen, setWorkOpen] = useState(false);

//   return (
//     <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center text-white">
//       {/* ሎጎ */}
//       <img src={logo} alt="logo" className="w-20 h-20 md:w-32 md:h-28" />

//       {/* በርገር መኑ (Mobile) */}
//       <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? '✕' : '☰'}
//       </button>

//       {/* ናቪጌሽን ሊንክስ */}
    
//       {/* ናቪጌሽን ሊንክስ */}
//       <div className={`
//         absolute md:static top-full left-0 w-full bg-black/95 md:bg-transparent p-6 md:p-0 
//         flex flex-col md:flex-row gap-6 md:gap-8 uppercase tracking-widest text-xs font-semibold
//         md:ml-auto md:w-auto md:items-center  /* እዚ ክፋል እዩ ሊንክታት ናብ የማን ዝድርፎ */
//         ${isOpen ? 'flex' : 'hidden md:flex'}
//       `}>

//         <a href="/" className="hover:text-zinc-400">Home</a>
//         <a href="#about" className="hover:text-zinc-400">About</a>
     
//         <div 
//   className="relative"
//   onMouseEnter={() => setWorkOpen(true)}
//   onMouseLeave={() => setWorkOpen(false)}
// >
//   <button 
//     className="hover:text-zinc-400 flex items-center" 
//     onClick={() => setWorkOpen(!workOpen)}
//   >
//      Gallery ▾
//   </button>
  
//   {workOpen && (
//     <div className="md:absolute md:top-full md:right-0 bg-black/90 p-4 w-full md:w-48 mt-2 border border-white/10">
//       <a href="#wedding" className="block py-2 hover:text-zinc-400">Wedding</a>
//       <a href="#bridal" className="block py-2 hover:text-zinc-400">Bridal</a>
//       <a href="#baby-shower" className="block py-2 hover:text-zinc-400">Baby Shower</a>
//     </div>
//   )}
// </div>
//         <a href="#contact" className="hover:text-zinc-400">Contact</a>
//         {/* <a href="#gallery" className="hover:text-zinc-400">Our Work</a> */}
   
        
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/images/robi-logo.png';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [workOpen, setWorkOpen] = useState(false);
//   const [galleryLinks, setGalleryLinks] = useState([]);

//   // ካብ ሰርቨር ነቶም ፕሮጀክትታት/ጋለሪታት ብኣውቶማቲክ ነንብቦ
//   useEffect(() => {
//     fetch('https://habesha-film-production-server.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => {
//         setGalleryLinks(data);
//       })
//       .catch(err => console.log("Error fetching navbar categories:", err));
//   }, []);

//   return (
//     <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center text-white">
//       {/* ሎጎ */}
//       <Link to="/">
//         <img src={logo} alt="logo" className="w-20 h-20 md:w-32 md:h-28" />
//       </Link>

//       {/* በርገር መኑ (Mobile) */}
//       <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? '✕' : '☰'}
//       </button>

//       {/* ናቪጌሽን ሊንክስ */}
//       <div className={`
//         absolute md:static top-full left-0 w-full bg-black/95 md:bg-transparent p-6 md:p-0 
//         flex flex-col md:flex-row gap-6 md:gap-8 uppercase tracking-widest text-xs font-semibold
//         md:ml-auto md:w-auto md:items-center 
//         ${isOpen ? 'flex' : 'hidden md:flex'}
//       `}>

//         <Link to="/" className="hover:text-zinc-400 transition-colors">Home</Link>
//         <a href="#about" className="hover:text-zinc-400 transition-colors">About</a>
       
//         {/* Gallery Dropdown (Dynamic from Database) */}
//         <div 
//           className="relative py-2 md:py-0"
//           onMouseEnter={() => setWorkOpen(true)}
//           onMouseLeave={() => setWorkOpen(false)}
//         >
//           <button 
//             className="hover:text-zinc-400 flex items-center gap-1 transition-colors w-full justify-between md:justify-start" 
//             onClick={() => setWorkOpen(!workOpen)}
//           >
//             Gallery <span>▾</span>
//           </button>
          
//           {/* Invisible bridge to prevent mouse leave gap */}
//           {workOpen && (
//             <div className="absolute top-full left-0 w-full h-3 bg-transparent md:block hidden"></div>
//           )}

//           {workOpen && (
//             <div className="md:absolute md:top-[calc(100%+0.75rem)] md:right-0 bg-black/95 backdrop-blur-md py-3 px-4 w-full md:w-56 border border-white/10 shadow-2xl transition-all duration-300 animate-fadeIn space-y-2">
//               {galleryLinks.length > 0 ? (
//                 galleryLinks.map((item, index) => {
//                   const slug = item.title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
//                   return (
//                     <Link 
//                       key={item._id || index}
//                       to={`/gallery/${slug}`} 
//                       onClick={() => { setWorkOpen(false); setIsOpen(false); }}
//                       className="block py-2 text-zinc-300 hover:text-amber-300 transition-colors border-b border-white/5 last:border-none capitalize"
//                     >
//                       {item.title}
//                     </Link>
//                   );
//                 })
//               ) : (
//                 <span className="block py-2 text-zinc-500 text-xs">Loading...</span>
//               )}
//             </div>
//           )}
//         </div>

//         <a href="#contact" className="hover:text-zinc-400 transition-colors">Contact</a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/robi-logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [galleryLinks, setGalleryLinks] = useState([]);

  useEffect(() => {
    fetch('https://habesha-film-production-server.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => {
        setGalleryLinks(data);
      })
      .catch(err => console.log("Error fetching navbar categories:", err));
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center text-white">
      {/* ሎጎ */}
      <Link to="/">
        <img src={logo} alt="logo" className="w-20 h-20 md:w-32 md:h-28" />
      </Link>

      {/* በርገር መኑ (Mobile) */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>

      {/* ናቪጌሽን ሊንክስ */}
      <div className={`
        absolute md:static top-full left-0 w-full bg-black/95 md:bg-transparent p-6 md:p-0 
        flex flex-col md:flex-row gap-6 md:gap-8 uppercase tracking-widest text-xs font-semibold
        md:ml-auto md:w-auto md:items-center 
        ${isOpen ? 'flex' : 'hidden md:flex'}
      `}>

        <Link to="/" className="hover:text-zinc-400 transition-colors">Home</Link>
        <a href="#about" className="hover:text-zinc-400 transition-colors">About</a>
       
        {/* Gallery Dropdown (Dynamic from Database) */}
        <div 
          className="relative py-2 md:py-0"
          onMouseEnter={() => setWorkOpen(true)}
          onMouseLeave={() => setWorkOpen(false)}
        >
          <button 
            className="hover:text-zinc-400 flex items-center gap-1 transition-colors w-full justify-between md:justify-start" 
            onClick={() => setWorkOpen(!workOpen)}
          >
            Gallery <span>▾</span>
          </button>
          
          {workOpen && (
            <div className="absolute top-full left-0 w-full h-3 bg-transparent md:block hidden"></div>
          )}

          {workOpen && (
            <div className="md:absolute md:top-[calc(100%+0.75rem)] md:right-0 bg-black/95 backdrop-blur-md py-3 px-4 w-full md:w-56 border border-white/10 shadow-2xl transition-all duration-300 animate-fadeIn space-y-2">
              {galleryLinks.length > 0 ? (
                galleryLinks.map((item, index) => {
                  // 'Baby Shower & Baptism' ናብ 'baby-shower-baptism' ንምቕያር
                  const rawTitle = item.title.replace(/"/g, ''); // ን አብነት ኩሉ ግዜ " " እንተሃልዩ ይእግዶ
                  const slug = rawTitle
                    .toLowerCase()
                    .trim()
                    .replace(/&/g, 'and')                  // '&' ናብ 'and' ብምቕያር ን URL ጽሩይ ይገብሮ
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-');
                  
                  return (
                    <Link 
                      key={item._id || index}
                      to={`/gallery/${slug}`} 
                      onClick={() => { setWorkOpen(false); setIsOpen(false); }}
                      className="block py-2 text-zinc-300 hover:text-amber-300 transition-colors border-b border-white/5 last:border-none capitalize"
                    >
                      {rawTitle}
                    </Link>
                  );
                })
              ) : (
                <span className="block py-2 text-zinc-500 text-xs">Loading...</span>
              )}
            </div>
          )}
        </div>
   <a href="#price" className="hover:text-zinc-400 transition-colors">Price</a>
        <a href="#contact" className="hover:text-zinc-400 transition-colors">Contact</a>
     
      </div>
    </nav>
  );
}

export default Navbar;