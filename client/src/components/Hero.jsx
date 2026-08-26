

import React from 'react';
import Navbar from './Navbar';
import img_bg from "../assets/images/camera-pic-5-removebg-preview.png"
import logoAi1 from "../assets/images/logoAi1.png"
import logoAi2 from "../assets/images/logoAi2.png"

function Hero({ imageSrc }) {
  return (
    <section className="relative w-full h-[85vh] md:h-[95vh] flex items-end justify-start overflow-hidden bg-[#050505]">
      
      {/* Custom Keyframes: ቁሩብ ዝያዳ ፍጡንን ልኩዕን ምንቅስቓስ */}
      <style>{`
        @keyframes customFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-slow-float {
          animation: customFloat 3.5s ease-in-out infinite;
        }
      `}</style>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar /> 
      </div>
      
      {/* ድሕረ ባይታ ስእሊ ምስ Cinematic Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          // src={imageSrc || "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop"}
          src={logoAi2}
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

          {/* እታ ስእሊ: ቁሩብ ፍጡን ዝኾነ (3.5s) ምንቅስቓስ ተዋሂብዎ ኣሎ */}
          <div className="pt-3 w-full">
            <div className="relative w-full max-w-[240px] sm:w-64 h-32 sm:h-40 rounded-2xl overflow-visible group cursor-pointer animate-slow-float">
              
              {/* እቲ ከባቢኣ ብርሃን ንክህልዎ ዘኽእል ጸጸኒሑ ዝለዋወጥ ወርቃዊ ብርሃን (Glow Effect) */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#dfb557] via-amber-300 to-[#dfb557] rounded-2xl blur-lg opacity-80 animate-pulse"></div>

              {/* ቀንዲ ናይ ስእሊ መሓዛ */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#dfb557]/50 shadow-[0_0_30px_rgba(223,181,87,0.4)]">
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