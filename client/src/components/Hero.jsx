
// import React from 'react';
// import Navbar from './Navbar';
// import heroVideo from '../assets/videos/robi-v1.mp4';

// function Hero({ videoSrc }) {
//   return (
//     <section className="relative w-full h-[75vh] flex items-end justify-start overflow-hidden bg-black">
//       <Navbar /> 
      
//       {/* ቪዲዮ (ምሉእ ባክግራውንድ) */}
//       <video 
//         autoPlay loop muted playsInline 
//         className="absolute inset-0 w-full h-full object-cover" 
//         src={videoSrc}
//       />
      
//       {/* Cinematic Gradient Mask (ንቪዲዮ ንኽትሪኢ) */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

//       {/* ዝንሳፈፍ ትሕዝቶ (ብታሕቲ ኣብ ጸጋም) */}
//       <div className="relative z-10 p-12 md:p-24 animate-fade-in-up">
//         <div className="flex flex-col items-start border-l border-white/30 pl-8">
//           <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-2">
//             Professional Studio
//           </span>
//           <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 transition-all hover:tracking-widest">
//             {/* Habesha */}
//           </h1>
//           <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-8">
//             Film & Digital Production
//           </p>
          
//           <a href="#work" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white">
//             <span className="w-12 h-[1px] bg-white transition-all group-hover:w-20"></span>
//             Explore Reel
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import React from 'react';
import Navbar from './Navbar';

function Hero({ imageSrc }) {
  return (
    <div className="relative w-full h-[75vh] md:h-[85vh] flex flex-col justify-between bg-[#050505]">
      
      {/* Navbar ኣብ ልዕሊቲ ስእሊ ብ Absolute ተቐሚጡ ኣሎ */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Hero Background Image & Dark Overlay (ልክዕ ከም Contact ገጽካ) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc || "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1920&auto=format&fit=crop"} 
          alt="Habesha Film Production Hero" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/60"></div>
      </div>

      {/* Hero Content & Habesha Pictures H2 */}
      <div className="relative z-10 mt-auto text-center px-4 pb-16 max-w-4xl mx-auto">
        <span className="text-[10px] md:text-xs uppercase font-bold tracking-[0.4em] text-[#dfb557] block mb-3">
          Professional Film & Studio Production
        </span>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif mb-4 text-zinc-100 drop-shadow-lg tracking-tight">
          Capturing Your Eternal Moments
        </h1>
        
        <div className="w-16 h-[2px] bg-[#dfb557] mx-auto mb-4"></div>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#dfb557] tracking-wider font-light drop-shadow mb-8">
          Habesha Pictures
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="#work" 
            className="bg-[#dfb557] text-black px-8 py-3.5 rounded-xl text-xs uppercase font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all shadow-xl"
          >
            Explore Reel
          </a>
          <a 
            href="/contact" 
            className="bg-zinc-900/80 border border-[#dfb557]/40 text-zinc-100 px-8 py-3.5 rounded-xl text-xs uppercase font-bold tracking-[0.2em] hover:bg-zinc-800 hover:border-[#dfb557] transition-all backdrop-blur-md"
          >
            Contact Us
          </a>
        </div>
      </div>

    </div>
  );
}

export default Hero;