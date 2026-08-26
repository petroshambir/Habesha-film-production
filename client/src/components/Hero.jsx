

// import React from 'react';
// import Navbar from './Navbar';
// import img_bg from "../assets/images/camera-pic-5-removebg-preview.png"
// import logoAi1 from "../assets/images/logoAi1.png"
// import logoAi2 from "../assets/images/logoAi2.png"

// function Hero({ imageSrc }) {
//   return (
//     <section className="relative w-full h-[85vh] md:h-[95vh] flex items-end justify-start overflow-hidden bg-[#050505]">
      
//       {/* Custom Keyframes: ቁሩብ ዝያዳ ፍጡንን ልኩዕን ምንቅስቓስ */}
//       <style>{`
//         @keyframes customFloat {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-12px);
//           }
//         }
//         .animate-slow-float {
//           animation: customFloat 3.5s ease-in-out infinite;
//         }
//       `}</style>

//       {/* Navbar */}
//       <div className="absolute top-0 left-0 w-full z-50">
//         <Navbar /> 
//       </div>
      
//       {/* ድሕረ ባይታ ስእሊ ምስ Cinematic Zoom Effect */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <img 
//           // src={imageSrc || "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop"}
//           src={logoAi2}
//           alt="Habesha Film Production Hero" 
//           className="w-full h-full object-cover brightness-[0.6] contrast-110 scale-105 animate-pulse duration-[10000ms]"
//         />
//         {/* Cinematic Multi-Layer Gradient Mask */}
//         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/70"></div>
//         <div className="absolute inset-0 bg-radial-vignette opacity-60"></div>
//       </div>
      
//       {/* ዝንሳፈፍ ትሕዝቶ ምስ Smooth Entrances */}
//       <div className="relative z-10 px-4 sm:px-12 md:px-24 pb-8 md:pb-16 pt-24 w-full max-w-5xl mt-auto">
//         <div className="flex flex-col items-start border-l-4 border-[#dfb557] pl-4 sm:pl-10 space-y-4 max-w-3xl">
          
//           {/* Tagline Animation */}
//           <div className="overflow-hidden">
//             <span className="inline-block text-[10px] sm:text-[11px] md:text-sm uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#dfb557] font-semibold animate-fade-in-down">
//               Cinematic Excellence & Visual Mastery
//             </span>
//           </div>

//           {/* Main Title Animation */}
//           <div className="overflow-hidden">
//             <h1 className="text-4xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter font-serif drop-shadow-2xl animate-fade-in-up">
//               Habesha
//             </h1>
//           </div>

//           {/* Subtitle */}
//           <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-zinc-300 font-light max-w-lg leading-relaxed animate-fade-in">
//             Redefining Film Production, Commercials & Global Digital Stories.
//           </p>

//           {/* እታ ስእሊ: ቁሩብ ፍጡን ዝኾነ (3.5s) ምንቅስቓስ ተዋሂብዎ ኣሎ */}
//           <div className="pt-3 w-full">
//             <div className="relative w-full max-w-[240px] sm:w-64 h-32 sm:h-40 rounded-2xl overflow-visible group cursor-pointer animate-slow-float">
              
//               {/* እቲ ከባቢኣ ብርሃን ንክህልዎ ዘኽእል ጸጸኒሑ ዝለዋወጥ ወርቃዊ ብርሃን (Glow Effect) */}
//               <div className="absolute -inset-2 bg-gradient-to-r from-[#dfb557] via-amber-300 to-[#dfb557] rounded-2xl blur-lg opacity-80 animate-pulse"></div>

//               {/* ቀንዲ ናይ ስእሊ መሓዛ */}
//               <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#dfb557]/50 shadow-[0_0_30px_rgba(223,181,87,0.4)]">
//                 <img 
//                   src={img_bg} 
//                   alt="Featured Camera Showcase" 
//                   className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out p-1"
//                 />
                
//                 {/* ጽሕፍቲ ሓበሻ: ብግእዝ፣ ግዝፍ ዝበለ፣ ኣብ ማእከል ታሕቲ ብምሉእ ጸጋማውን የማናውን ሚዛን ዝተሰርዔ */}
//                 <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent py-2.5 px-3 flex justify-center items-center">
//                   <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] group-hover:text-[#dfb557] transition-colors duration-300">
//                     ሓበሻ
//                   </span>
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

import img_bg from "../assets/images/camera-pic-5-removebg-preview.png";
import logoAi1 from "../assets/images/logoAi1.png";
import logoAi2 from "../assets/images/logoAi2.png";

function Hero() {
  const slides = [
    {
      logo: logoAi1,
      label: "HABESHA PICTURES",
      subtitle: "Photography • Cinematography • Creative Stories",
    },
    {
      logo: logoAi2,
      label: "HABESHA PICTURES",
      subtitle: "Film Production • Commercials • Visual Arts",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const current = slides[activeSlide];

  return (
    <section className="relative h-[88vh] min-h-[650px] w-full overflow-hidden bg-[#030303] text-white md:h-[96vh]">

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}
      <style>{`
        @keyframes heroZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }

        @keyframes heroFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes goldFloat {
          0%, 100% {
            transform: translateX(-10px);
            opacity: .35;
          }
          50% {
            transform: translateX(25px);
            opacity: .8;
          }
        }

        @keyframes lightSweep {
          0% {
            transform: translateX(-120%) skewX(-20deg);
            opacity: 0;
          }
          20% {
            opacity: .4;
          }
          60% {
            opacity: .15;
          }
          100% {
            transform: translateX(150%) skewX(-20deg);
            opacity: 0;
          }
        }

        @keyframes logoIn {
          0% {
            opacity: 0;
            transform: scale(.92) translateY(25px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes textIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineGrow {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }

        .hero-zoom {
          animation: heroZoom 6s ease-out forwards;
        }

        .hero-float {
          animation: heroFloat 4s ease-in-out infinite;
        }

        .gold-float {
          animation: goldFloat 5s ease-in-out infinite;
        }

        .light-sweep {
          animation: lightSweep 5s ease-in-out infinite;
        }

        .logo-in {
          animation: logoIn 1.2s ease-out forwards;
        }

        .text-in {
          animation: textIn 1s ease-out forwards;
        }

        .line-grow {
          animation: lineGrow 1.4s ease-out forwards;
        }
      `}</style>

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <div className="absolute left-0 top-0 z-[60] w-full">
        <Navbar />
      </div>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Dark cinematic background */}
        <div className="absolute inset-0 bg-[#050505]" />

        {/* Soft gold glow - left */}
        <div className="absolute -left-32 top-1/3 h-[450px] w-[450px] rounded-full bg-[#d4a943]/10 blur-[120px] gold-float" />

        {/* Soft gold glow - right */}
        <div
          className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#d4a943]/10 blur-[140px] gold-float"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Camera background */}
        <img
          src={img_bg}
          alt=""
          aria-hidden="true"
          className="
            absolute
            -right-16
            bottom-[-30px]
            z-[1]
            w-[430px]
            max-w-[65vw]
            object-contain
            opacity-[0.13]
            grayscale
            hero-float
            md:-right-5
            md:bottom-[-40px]
            md:w-[620px]
          "
        />

        {/* Main cinematic image / logo */}
        <div className="absolute inset-0 flex items-center justify-center">

          <img
            key={current.logo}
            src={current.logo}
            alt="Habesha Pictures"
            className="
              logo-in
              hero-zoom
              absolute
              max-h-[70vh]
              w-[90%]
              max-w-[1100px]
              object-contain
              opacity-[0.90]
              md:w-[78%]
            "
          />

        </div>

        {/* =================================================
            CINEMATIC OVERLAYS
        ================================================= */}

        {/* Top dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black/80" />

        {/* Bottom dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />

        {/* Side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/60" />

        {/* Gold cinematic light */}
        <div
          className="
            light-sweep
            pointer-events-none
            absolute
            left-0
            top-0
            z-10
            h-full
            w-[25%]
            bg-gradient-to-r
            from-transparent
            via-[#e0b957]/20
            to-transparent
            blur-xl
          "
        />

        {/* Film grain */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div className="relative z-30 flex h-full w-full items-end">

        <div className="w-full px-5 pb-12 sm:px-10 md:px-20 md:pb-16 lg:px-24">

          <div className="max-w-[720px]">

            {/* Small label */}
            <div
              key={`label-${activeSlide}`}
              className="text-in mb-5 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-[#d9b45b]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.38em] text-[#d9b45b] sm:text-[10px]">
                {current.label}
              </span>
            </div>

            {/* Main title */}
            <div
              key={`title-${activeSlide}`}
              className="text-in"
            >
              <h1 className="font-serif text-5xl font-light leading-[0.9] tracking-[-0.04em] text-white sm:text-7xl md:text-8xl lg:text-[110px]">

                <span className="block">
                  Stories
                </span>

                <span className="ml-4 block italic text-[#d5af58] sm:ml-8">
                  that remain.
                </span>

              </h1>
            </div>

            {/* Description */}
            <p
              key={`desc-${activeSlide}`}
              className="
                text-in
                mt-6
                max-w-[570px]
                text-[10px]
                font-light
                uppercase
                leading-6
                tracking-[0.22em]
                text-white/55
                sm:text-xs
                sm:leading-7
              "
              style={{ animationDelay: "250ms" }}
            >
              {current.subtitle}
            </p>

            {/* Gold line */}
            <div className="mt-7 h-px w-full max-w-[470px] overflow-hidden bg-white/10">
              <div
                key={`line-${activeSlide}`}
                className="line-grow h-full bg-gradient-to-r from-[#d6ae52] via-[#f2d27c] to-transparent"
              />
            </div>

            {/* Bottom information */}
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">

              <div
                key={`info-${activeSlide}`}
                className="text-in flex items-center gap-3"
                style={{ animationDelay: "450ms" }}
              >
                <span className="text-[8px] tracking-[0.3em] text-white/35">
                  PHOTOGRAPHY
                </span>

                <span className="h-3 w-px bg-white/20" />

                <span className="text-[8px] tracking-[0.3em] text-white/35">
                  CINEMATOGRAPHY
                </span>
              </div>

            </div>

          </div>

          {/* =================================================
              SLIDE INDICATORS
          ================================================= */}
          <div className="absolute bottom-12 right-5 flex items-center gap-3 sm:right-10 md:bottom-16 md:right-20 lg:right-24">

            <span className="mr-2 font-mono text-[9px] text-white/30">
              0{activeSlide + 1}
            </span>

            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                className="group relative h-5 w-10"
              >
                <span
                  className={`
                    absolute
                    left-0
                    top-1/2
                    h-px
                    -translate-y-1/2
                    transition-all
                    duration-500
                    ${
                      activeSlide === index
                        ? "w-10 bg-[#d7b45b]"
                        : "w-5 bg-white/25 group-hover:w-8 group-hover:bg-white/60"
                    }
                  `}
                />
              </button>
            ))}

            <span className="ml-1 font-mono text-[9px] text-white/30">
              0{slides.length}
            </span>

          </div>

        </div>

      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}
      <div className="absolute bottom-6 left-1/2 z-40 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">

        <span className="text-[7px] uppercase tracking-[0.4em] text-white/30">
          Scroll
        </span>

        <div className="h-10 w-px overflow-hidden bg-white/10">
          <div className="h-1/2 w-full animate-pulse bg-[#d7b45b]" />
        </div>

      </div>

    </section>
  );
}

export default Hero;