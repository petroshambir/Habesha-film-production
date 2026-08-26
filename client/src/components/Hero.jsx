

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
      small: "HABESHA PICTURES",
      title1: "Stories",
      title2: "that remain.",
      subtitle:
        "Photography • Cinematography • Creative Stories",
    },
    {
      logo: logoAi2,
      small: "HABESHA PICTURES",
      title1: "Visuals",
      title2: "that inspire.",
      subtitle:
        "Film Production • Commercials • Visual Arts",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  /* =====================================================
     AUTO SLIDE
  ===================================================== */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const current = slides[activeSlide];

  return (
    <section className="relative h-[90vh] min-h-[680px] w-full overflow-hidden bg-[#020202] text-white md:h-[96vh]">

      {/* =====================================================
          CINEMATIC ANIMATIONS
      ===================================================== */}

      <style>{`

        @keyframes cinematicZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }

        @keyframes logoReveal {
          0% {
            opacity: 0;
            transform: scale(.86) translateY(35px);
            filter: blur(12px);
          }

          60% {
            opacity: .85;
            filter: blur(2px);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }

        @keyframes cinematicFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-18px) rotate(.5deg);
          }
        }

        @keyframes goldGlow {
          0%,
          100% {
            opacity: .25;
            transform: scale(.95);
          }

          50% {
            opacity: .65;
            transform: scale(1.08);
          }
        }

        @keyframes lightSweep {
          0% {
            left: -40%;
            opacity: 0;
          }

          15% {
            opacity: .5;
          }

          45% {
            opacity: .15;
          }

          100% {
            left: 140%;
            opacity: 0;
          }
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineReveal {
          0% {
            width: 0;
          }

          100% {
            width: 100%;
          }
        }

        @keyframes ringRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(0);
            opacity: .15;
          }

          50% {
            transform: translateY(-30px);
            opacity: .8;
          }

          100% {
            transform: translateY(-60px);
            opacity: 0;
          }
        }

        @keyframes scrollMove {
          0% {
            transform: translateY(-8px);
            opacity: 0;
          }

          50% {
            opacity: 1;
          }

          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .cinematic-zoom {
          animation: cinematicZoom 7s ease-out forwards;
        }

        .logo-reveal {
          animation: logoReveal 1.4s cubic-bezier(.16,1,.3,1) forwards;
        }

        .cinematic-float {
          animation: cinematicFloat 5s ease-in-out infinite;
        }

        .gold-glow {
          animation: goldGlow 5s ease-in-out infinite;
        }

        .light-sweep {
          animation: lightSweep 6s ease-in-out infinite;
        }

        .text-reveal {
          animation: textReveal 1s cubic-bezier(.16,1,.3,1) forwards;
        }

        .line-reveal {
          animation: lineReveal 1.4s ease-out forwards;
        }

        .ring-rotate {
          animation: ringRotate 25s linear infinite;
        }

        .particle {
          animation: particleFloat 5s ease-out infinite;
        }

        .scroll-move {
          animation: scrollMove 1.8s ease-in-out infinite;
        }

      `}</style>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <div className="absolute left-0 top-0 z-[100] w-full">
        <Navbar />
      </div>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Black base */}
        <div className="absolute inset-0 bg-[#020202]" />

        {/* Gold cinematic glow LEFT */}
        <div
          className="
            gold-glow
            absolute
            -left-[180px]
            top-[25%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#d4a943]/10
            blur-[150px]
          "
        />

        {/* Gold cinematic glow RIGHT */}
        <div
          className="
            gold-glow
            absolute
            -right-[180px]
            top-[15%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#d4a943]/10
            blur-[160px]
          "
          style={{ animationDelay: "2s" }}
        />

        {/* =================================================
            DECORATIVE GOLD RING
        ================================================= */}

        <div className="absolute left-1/2 top-[43%] hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 md:block">

          <div
            className="
              ring-rotate
              absolute
              inset-0
              rounded-full
              border
              border-[#d6ae52]/10
            "
          />

          <div
            className="
              ring-rotate
              absolute
              inset-[50px]
              rounded-full
              border
              border-dashed
              border-[#d6ae52]/10
            "
            style={{ animationDirection: "reverse" }}
          />

        </div>

        {/* =================================================
            CAMERA
        ================================================= */}

        <img
          src={img_bg}
          alt=""
          aria-hidden="true"
          className="
            cinematic-float
            absolute
            bottom-[-20px]
            left-[-100px]
            z-[5]
            w-[420px]
            max-w-[70vw]
            object-contain
            opacity-30
            grayscale
            md:bottom-[-80px]
            md:left-[-80px]
            md:w-[680px]
          "
        />

        {/* Camera gold glow */}
        <div
          className="
            absolute
            bottom-[8%]
            left-[8%]
            z-[4]
            h-[250px]
            w-[250px]
            rounded-full
            bg-[#d5ad50]/10
            blur-[100px]
          "
        />

        {/* =================================================
            MAIN LOGO
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            z-[10]
            flex
            items-center
            justify-center
            px-5
            pb-16
            pt-24
            md:pb-20
          "
        >

          <div className="relative flex w-full max-w-[1100px] items-center justify-center">

            {/* Logo golden glow */}

            <div
              key={`glow-${activeSlide}`}
              className="
                logo-reveal
                absolute
                h-[45%]
                w-[60%]
                rounded-full
                bg-[#d8ae50]/20
                blur-[100px]
              "
            />

            <img
              key={`logo-${activeSlide}`}
              src={current.logo}
              alt="Habesha Pictures"
              className="
                logo-reveal
                cinematic-zoom
                relative
                z-10
                max-h-[58vh]
                w-[94%]
                object-contain
                drop-shadow-[0_0_35px_rgba(212,169,67,0.25)]
                md:w-[78%]
              "
            />

          </div>

        </div>

        {/* =================================================
            CINEMATIC LIGHT SWEEP
        ================================================= */}

        <div
          className="
            light-sweep
            pointer-events-none
            absolute
            top-0
            z-[25]
            h-full
            w-[18%]
            skew-x-[-18deg]
            bg-gradient-to-r
            from-transparent
            via-[#f1d278]/15
            to-transparent
            blur-2xl
          "
        />

        {/* =================================================
            GOLD PARTICLES
        ================================================= */}

        <div className="pointer-events-none absolute inset-0 z-[15]">

          <span className="particle absolute left-[20%] top-[55%] h-1 w-1 rounded-full bg-[#e4bd65]" />

          <span
            className="particle absolute left-[35%] top-[35%] h-[3px] w-[3px] rounded-full bg-[#e4bd65]"
            style={{ animationDelay: "1s" }}
          />

          <span
            className="particle absolute left-[65%] top-[25%] h-1 w-1 rounded-full bg-[#e4bd65]"
            style={{ animationDelay: "2s" }}
          />

          <span
            className="particle absolute right-[20%] top-[50%] h-[3px] w-[3px] rounded-full bg-[#e4bd65]"
            style={{ animationDelay: "3s" }}
          />

          <span
            className="particle absolute right-[35%] top-[30%] h-1 w-1 rounded-full bg-[#e4bd65]"
            style={{ animationDelay: "4s" }}
          />

        </div>

        {/* =================================================
            CINEMATIC DARK OVERLAYS
        ================================================= */}

        <div className="absolute inset-0 z-[20] bg-gradient-to-b from-black/80 via-black/10 to-black/80" />

        <div className="absolute inset-0 z-[21] bg-gradient-to-r from-black/80 via-transparent to-black/65" />

        <div className="absolute inset-0 z-[22] bg-gradient-to-t from-[#020202] via-transparent to-transparent" />

        {/* Grain */}

        <div className="pointer-events-none absolute inset-0 z-[23] opacity-[0.035] mix-blend-overlay">

          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.4'/%3E%3C/svg%3E\")",
            }}
          />

        </div>

      </div>

      {/* =====================================================
          HERO TEXT
      ===================================================== */}

      <div className="absolute inset-x-0 bottom-0 z-[50]">

        <div className="mx-auto max-w-[1600px] px-5 pb-10 sm:px-8 md:px-14 md:pb-14 lg:px-20">

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">

            {/* LEFT */}

            <div className="max-w-[760px]">

              {/* Label */}

              <div
                key={`label-${activeSlide}`}
                className="text-reveal mb-5 flex items-center gap-4"
              >

                <span className="h-px w-12 bg-[#d8b45c]" />

                <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#d8b45c] sm:text-[10px]">
                  {current.small}
                </span>

              </div>

              {/* Title */}

              <div key={`title-${activeSlide}`} className="text-reveal">

                <h1 className="font-serif text-[48px] font-light leading-[.88] tracking-[-.04em] sm:text-7xl md:text-8xl lg:text-[105px]">

                  <span className="block text-white">
                    {current.title1}
                  </span>

                  <span className="ml-4 block italic text-[#d6af57] sm:ml-8">
                    {current.title2}
                  </span>

                </h1>

              </div>

              {/* Subtitle */}

              <p
                key={`subtitle-${activeSlide}`}
                className="
                  text-reveal
                  mt-6
                  max-w-[600px]
                  text-[9px]
                  uppercase
                  leading-6
                  tracking-[0.28em]
                  text-white/55
                  sm:text-xs
                  sm:leading-7
                "
                style={{ animationDelay: "300ms" }}
              >
                {current.subtitle}
              </p>

              {/* Line */}

              <div className="mt-6 h-px w-full max-w-[520px] overflow-hidden bg-white/10">

                <div
                  key={`line-${activeSlide}`}
                  className="
                    line-reveal
                    h-full
                    bg-gradient-to-r
                    from-[#d6ae52]
                    via-[#f1d078]
                    to-transparent
                  "
                />

              </div>

              {/* Bottom labels */}

              <div className="mt-5 flex flex-wrap items-center gap-5 sm:gap-8">

                <span className="text-[7px] tracking-[0.3em] text-white/35 sm:text-[8px]">
                  FILM PRODUCTION
                </span>

                <span className="h-3 w-px bg-white/15" />

                <span className="text-[7px] tracking-[0.3em] text-white/35 sm:text-[8px]">
                  PHOTOGRAPHY
                </span>

                <span className="h-3 w-px bg-white/15" />

                <span className="text-[7px] tracking-[0.3em] text-white/35 sm:text-[8px]">
                  CINEMATOGRAPHY
                </span>

              </div>

            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div className="hidden w-[210px] border-l border-white/10 pl-7 lg:block">

              <span className="text-[8px] tracking-[0.35em] text-[#d6af57]">
                SELECTED WORK
              </span>

              <div className="mt-5">

                <span className="font-serif text-5xl font-light text-white">
                  0{activeSlide + 1}
                </span>

                <span className="mx-2 text-white/20">
                  /
                </span>

                <span className="font-mono text-[9px] text-white/30">
                  0{slides.length}
                </span>

              </div>

              <p className="mt-5 text-[9px] leading-5 tracking-[0.08em] text-white/35">
                Creating cinematic visual stories
                designed to remain unforgettable.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          SLIDE CONTROLS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-8
          right-5
          z-[70]
          flex
          items-center
          gap-2
          sm:right-10
          md:bottom-12
          md:right-16
        "
      >

        <span className="mr-2 font-mono text-[9px] text-white/30">
          0{activeSlide + 1}
        </span>

        {slides.map((_, index) => (

          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            className="relative h-6 w-10"
            aria-label={`Show slide ${index + 1}`}
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
                    ? "w-10 bg-[#d8b45c]"
                    : "w-5 bg-white/20 hover:w-8 hover:bg-white/50"
                }
              `}
            />

          </button>

        ))}

        <span className="ml-1 font-mono text-[9px] text-white/30">
          0{slides.length}
        </span>

      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-[70]
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          md:flex
        "
      >

        <span className="text-[7px] uppercase tracking-[0.4em] text-white/30">
          Explore
        </span>

        <div className="relative h-10 w-px overflow-hidden bg-white/10">

          <div className="scroll-move absolute left-0 top-0 h-3 w-full bg-[#d8b45c]" />

        </div>

      </div>

    </section>
  );
}

export default Hero;