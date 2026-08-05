
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
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Navbar ኣብ ልዕሊቲ ስእሊ ብ Absolute ተቐሚጡ ኣሎ */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>
      
      {/* ድሕረ ባይታ ስእሊ (Background Image) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc || "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1920&auto=format&fit=crop"} 
          alt="Habesha Film Production Hero" 
          className="w-full h-full object-cover scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-black/80"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* ማእከላይ ዝምልከት ትሕዝቶ (Center Aligned Luxury Cinematic Content) */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#dfb557] font-bold block mb-4">
          Habesha Pictures & Studio
        </span>
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold text-zinc-100 tracking-tight mb-6 drop-shadow-2xl">
          Capturing Your Eternal Moments
        </h1>
        
        <div className="w-20 h-[2px] bg-[#dfb557] mx-auto mb-6"></div>
        
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-zinc-300 max-w-2xl mx-auto mb-10 font-light">
          Film & Digital Production • Cinematic Excellence
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#work" 
            className="bg-[#dfb557] text-black px-8 py-4 rounded-xl text-xs uppercase font-bold tracking-[0.25em] hover:bg-[#c99f45] transition-all shadow-xl"
          >
            Explore Reel
          </a>
          <a 
            href="/contact" 
            className="bg-zinc-900/80 border border-[#dfb557]/40 text-zinc-100 px-8 py-4 rounded-xl text-xs uppercase font-bold tracking-[0.25em] hover:bg-zinc-800 hover:border-[#dfb557] transition-all backdrop-blur-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;