


// import React from 'react';
// import Navbar from './Navbar';

// function Hero({ imageSrc }) {
//   return (
//     <section className="relative w-full h-[75vh] md:h-[85vh] flex items-end justify-start overflow-hidden bg-[#050505]">
//       {/* Navbar ኣብ ልዕሊቲ ስእሊ ብ Absolute ተቐሚጡ ኣሎ (z-50 ገይረዮ ኣለኹ፡ እቲ በርገር ክኽፈት ከሎ ካብ ጽሕፈት ንላዕሊ ኮይኑ ንኸርኢ) */}
//       <div className="absolute top-0 left-0 w-full z-50">
//         <Navbar /> 
//       </div>
      
//       {/* ድሕረ ባይታ ስእሊ (Background Image) */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src={imageSrc || "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop"}
//           alt="Habesha Film Production Hero" 
//           className="w-full h-full object-cover brightness-[0.65] contrast-105"
//         />
//         {/* Cinematic Gradient Mask */}
//         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-black/50"></div>
//       </div>
      
//       {/* ዝንሳፈፍ ትሕዝቶ (ኣብ ሞባይል ብ CSS Transform & Padding ንላዕሊ ተቐሪቡ፣ ኣብ ዴስክቶፕ ከም ቀደም ብታሕቲ) */}
//       <div className="relative z-10 px-6 sm:px-12 md:px-24 pb-12 md:pb-20 pt-28 md:pt-0 animate-fade-in-up w-full max-w-4xl mt-auto">
//         <div className="flex flex-col items-start border-l-2 border-[#dfb557] pl-5 sm:pl-8">
//           <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#dfb557] font-bold mb-2">
//             Habesha Pictures & Studio
//           </span>
//           <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tight mb-2 font-serif drop-shadow-lg">
//             Habesha
//           </h1>
//           <p className="text-[11px] sm:text-sm uppercase tracking-[0.3em] text-zinc-200 mb-6 font-light">
//             Film & Digital Production
//           </p>
          
//           <a href="#work" className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[#dfb557] font-semibold hover:text-white transition-colors">
//             <span className="w-10 sm:w-12 h-[1px] bg-[#dfb557] transition-all group-hover:w-20"></span>
//             Explore Reel
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

// import React from 'react';
// import Navbar from './Navbar';

// function Hero({ imageSrc }) {
//   return (
//     <section className="relative w-full h-[85vh] md:h-[95vh] flex items-end justify-start overflow-hidden bg-[#050505]">
//       {/* Navbar */}
//       <div className="absolute top-0 left-0 w-full z-50">
//         <Navbar /> 
//       </div>
      
//       {/* ድሕረ ባይታ ስእሊ ምስ Cinematic Zoom Effect */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <img 
//           src={imageSrc || "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop"}
//           alt="Habesha Film Production Hero" 
//           className="w-full h-full object-cover brightness-[0.6] contrast-110 scale-105 animate-pulse duration-[10000ms]"
//         />
//         {/* Cinematic Multi-Layer Gradient Mask */}
//         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/70"></div>
//         <div className="absolute inset-0 bg-radial-vignette opacity-60"></div>
//       </div>
      
//       {/* ዝንሳፈፍ ትሕዝቶ ምስ Smooth Entrances */}
//       <div className="relative z-10 px-6 sm:px-12 md:px-24 pb-16 md:pb-24 pt-32 w-full max-w-5xl mt-auto">
//         <div className="flex flex-col items-start border-l-4 border-[#dfb557] pl-6 sm:pl-10 space-y-3">
          
//           {/* Tagline Animation */}
//           <div className="overflow-hidden">
//             <span className="inline-block text-[11px] md:text-sm uppercase tracking-[0.5em] text-[#dfb557] font-semibold animate-fade-in-down">
//               Cinematic Excellence & Visual Mastery
//             </span>
//           </div>

//           {/* Main Title Animation */}
//           <div className="overflow-hidden">
//             <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter font-serif drop-shadow-2xl animate-fade-in-up">
//               Habesha
//             </h1>
//           </div>

//           {/* Subtitle */}
//           <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-zinc-300 font-light max-w-lg leading-relaxed animate-fade-in">
//             Redefining Film Production, Commercials & Global Digital Stories.
//           </p>
          
//           {/* Explore Reel Button with Hover Animation */}
//           <div className="pt-4">
//             <a 
//               href="#work" 
//               className="group inline-flex items-center gap-5 text-xs uppercase tracking-[0.4em] text-[#dfb557] font-bold hover:text-white transition-all duration-300"
//             >
//               <span className="w-12 sm:w-16 h-[2px] bg-[#dfb557] transition-all duration-300 group-hover:w-28 group-hover:bg-white"></span>
//               Explore Reel
//             </a>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


// import React from 'react';
// import Navbar from './Navbar';
// import img_bg from "../assets/images/camera-pic-5.jpg"

// function Hero({ imageSrc }) {
//   return (
//     <section className="relative w-full h-[85vh] md:h-[95vh] flex items-end justify-start overflow-hidden bg-[#050505]">
//       {/* Navbar */}
//       <div className="absolute top-0 left-0 w-full z-50">
//         <Navbar /> 
//       </div>
      
//       {/* ድሕረ ባይታ ስእሊ ምስ Cinematic Zoom Effect */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <img 
//           src={imageSrc || "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop"}
//           alt="Habesha Film Production Hero" 
//           className="w-full h-full object-cover brightness-[0.6] contrast-110 scale-105 animate-pulse duration-[10000ms]"
//         />
//         {/* Cinematic Multi-Layer Gradient Mask */}
//         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/70"></div>
//         <div className="absolute inset-0 bg-radial-vignette opacity-60"></div>
//       </div>
      
//       {/* ዝንሳፈፍ ትሕዝቶ ምስ Smooth Entrances */}
//       <div className="relative z-10 px-6 sm:px-12 md:px-24 pb-12 md:pb-20 pt-32 w-full max-w-5xl mt-auto">
//         <div className="flex flex-col items-start border-l-4 border-[#dfb557] pl-6 sm:pl-10 space-y-5 max-w-3xl">
          
//           {/* Tagline Animation */}
//           <div className="overflow-hidden">
//             <span className="inline-block text-[11px] md:text-sm uppercase tracking-[0.5em] text-[#dfb557] font-semibold animate-fade-in-down">
//               Cinematic Excellence & Visual Mastery
//             </span>
//           </div>

//           {/* Main Title Animation */}
//           <div className="overflow-hidden">
//             <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter font-serif drop-shadow-2xl animate-fade-in-up">
//               Habesha
//             </h1>
//           </div>

//           {/* Subtitle */}
//           <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-zinc-300 font-light max-w-lg leading-relaxed animate-fade-in">
//             Redefining Film Production, Commercials & Global Digital Stories.
//           </p>

//           {/* እታ ስእሊ ብዘይ ቦርደር (Border-less) ብሆቨር ትንቀሳቐስ */}
//           <div className="pt-2">
//             <div className="relative w-48 sm:w-56 h-32 sm:h-36 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-black/80">
//               <img 
//                 src={img_bg} 
//                 alt="Featured Camera Showcase" 
//                 className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
//               />
//               {/* Overlay Gradient & Text */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-3">
//                 <span className="text-[11px] uppercase tracking-[0.25em] text-[#dfb557] font-bold group-hover:text-white transition-colors duration-300">
//                   Featured Gear
//                 </span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;
import React from 'react';
import Navbar from './Navbar';
import img_bg from "../assets/images/camera-pic-5-removebg-preview.png"

function Hero({ imageSrc }) {
  return (
    <section className="relative w-full h-[85vh] md:h-[95vh] flex items-end justify-start overflow-hidden bg-[#050505]">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar /> 
      </div>
      
      {/* ድሕረ ባይታ ስእሊ ምስ Cinematic Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={imageSrc || "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop"}
          alt="Habesha Film Production Hero" 
          className="w-full h-full object-cover brightness-[0.6] contrast-110 scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Cinematic Multi-Layer Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-60"></div>
      </div>
      
      {/* ዝንሳፈፍ ትሕዝቶ ምስ Smooth Entrances */}
      <div className="relative z-10 px-4 sm:px-12 md:px-24 pb-8 md:pb-16 pt-24 w-full max-w-5xl mt-auto">
        <div className="flex flex-col items-start border-l-4 border-[#dfb557] pl-4 sm:pl-10 space-y-4 max-w-3xl">
          
          {/* Tagline Animation */}
          <div className="overflow-hidden">
            <span className="inline-block text-[10px] sm:text-[11px] md:text-sm uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#dfb557] font-semibold animate-fade-in-down">
              Cinematic Excellence & Visual Mastery
            </span>
          </div>

          {/* Main Title Animation */}
          <div className="overflow-hidden">
            <h1 className="text-4xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter font-serif drop-shadow-2xl animate-fade-in-up">
              Habesha
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-zinc-300 font-light max-w-lg leading-relaxed animate-fade-in">
            Redefining Film Production, Commercials & Global Digital Stories.
          </p>

          {/* እታ ስእሊ: ምንቅስቓሳ ኣዝዩ ህዱእን ቀስ ዝበለን (Slow Floating Motion - 8s) ተገይሩሉ ኣሎ */}
          <div className="pt-3 w-full">
            <div className="relative w-full max-w-[240px] sm:w-64 h-32 sm:h-40 rounded-2xl overflow-visible group cursor-pointer animate-bounce duration-[8000ms]">
              
              {/* እቲ ከባቢኣ ብርሃን ንክህልዎ ዘኽእል ጸጸኒሑ ዝለዋወጥ ወርቃዊ ብርሃን (Glow Effect) */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#dfb557] via-amber-300 to-[#dfb557] rounded-2xl blur-lg opacity-80 animate-pulse"></div>

              {/* ቀንዲ ናይ ስእሊ መሓዛ */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#dfb557]/50 shadow-[0_0_30px_rgba(223,181,87,0.4)] bg-black/80">
                <img 
                  src={img_bg} 
                  alt="Featured Camera Showcase" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out p-1"
                />
                
                {/* ጽሕፍቲ ሓበሻ: ብግእዝ፣ ግዝፍ ዝበለ፣ ኣብ ማእከል ታሕቲ ብምሉእ ጸጋማውን የማናውን ሚዛን ዝተሰርዔ */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent py-2.5 px-3 flex justify-center items-center">
                  <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] group-hover:text-[#dfb557] transition-colors duration-300">
                    ሓበሻ
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;