
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
    <section className="relative w-full min-h-[85vh] lg:h-screen flex flex-col justify-between bg-[#050505] overflow-hidden pt-20">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 gap-12">
        
        {/* ጸጋማይ ሸነሕ: ትሕዝቶን መልእኽትን (Left Content) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#dfb557]/10 border border-[#dfb557]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#dfb557] animate-pulse"></span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#dfb557] font-semibold">
              Habesha Pictures & Studio
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-zinc-100 tracking-tight leading-[1.1] mb-6">
            Cinematic Artistry <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb557] via-[#f3d07a] to-[#dfb557]">
              For Eternal Moments
            </span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base font-light max-w-xl leading-relaxed mb-8">
            ብዝለዓለ ደረጃ ነፍስወከፍ ፍጻሜታትኩም፡ መርዓ፡ ሰነዳውን (Documentary) ከምኡውን ስቱድዮ ቀረጻታት ብፍሉይ ስነ-ጥበባዊ መነጽር ናብ ዘልኣለማዊ ታሪኽ ንቕየሮ።
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#work" 
              className="bg-[#dfb557] text-black px-8 py-3.5 rounded-xl text-xs uppercase font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all shadow-xl"
            >
              Explore Reel
            </a>
            <a 
              href="/contact" 
              className="bg-zinc-900/80 border border-zinc-800 hover:border-[#dfb557]/50 text-zinc-200 px-8 py-3.5 rounded-xl text-xs uppercase font-bold tracking-[0.2em] hover:bg-zinc-900 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* የማናይ ሸነሕ: ብሉጽ ናይ ስቱድዮ ስእሊ ብፍሉይ ፍሬም (Right Image Showcase) */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#dfb557]/30 shadow-2xl group">
            <img 
              src={imageSrc || "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop"} 
              alt="Habesha Film Production Showcase" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            {/* ኣብ ውሽጢ ስእሊ ዝርአ ንኡስ ባጅ */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#dfb557] font-bold block">Professional Studio</span>
                <span className="text-xs text-zinc-200 font-serif">4K UHD Cinematography</span>
              </div>
              <span className="text-[#dfb557] text-lg">&rarr;</span>
            </div>
          </div>

          {/* ድሕረ ባይታ ብርሃን (Glow Effect) */}
          <div className="absolute -inset-4 bg-[#dfb557]/10 rounded-3xl blur-2xl -z-10"></div>
        </div>

      </div>
    </section>
  );
}

export default Hero;