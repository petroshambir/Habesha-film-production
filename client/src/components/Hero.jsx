
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
    <section className="relative w-full h-[75vh] flex items-end justify-start overflow-hidden bg-[#050505]">
      <Navbar /> 
      
      {/* ድሕረ ባይታ ስእሊ (Background Image) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc || "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1920&auto=format&fit=crop"} 
          alt="Habesha Film Production Hero" 
          className="w-full h-full object-cover brightness-50"
        />
        {/* Cinematic Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/60"></div>
      </div>
      
      {/* ዝንሳፈፍ ትሕዝቶ (ብታሕቲ ኣብ ጸጋም) */}
      <div className="relative z-10 p-12 md:p-24 animate-fade-in-up">
        <div className="flex flex-col items-start border-l border-[#dfb557]/40 pl-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#dfb557] mb-2">
            Professional Studio
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 transition-all hover:tracking-widest font-serif">
            Habesha
          </h1>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-300 mb-8 font-light">
            Film & Digital Production
          </p>
          
          <a href="#work" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-zinc-200 hover:text-[#dfb557] transition-colors">
            <span className="w-12 h-[1px] bg-[#dfb557] transition-all group-hover:w-20"></span>
            Explore Reel
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;