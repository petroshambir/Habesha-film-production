

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
import logoAi1 from "../assets/images/logoAi3.png";
import logoAi2 from "../assets/images/logoAi2.png";

function Hero() {
  const slides = [
    {
      logo: logoAi1,
      eyebrow: "CAPTURING LIFE • CREATING MEMORIES",
      line1: "WE DON'T JUST",
      line2: "CAPTURE MOMENTS.",
      highlight: "WE TELL STORIES",
      line3: "THAT LIVE FOREVER.",
      subtitle: "Photography • Film Production • Cinematography",
    },
    {
      logo: logoAi2,
      eyebrow: "VISUAL STORIES • CINEMATIC EXPERIENCES",
      line1: "YOUR VISION.",
      line2: "OUR CREATIVE",
      highlight: "STORYTELLING.",
      line3: "MADE TO LAST.",
      subtitle: "Film Production • Commercials • Visual Arts",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const current = slides[activeSlide];

  return (
    <section className="relative min-h-[760px] h-[100vh] w-full overflow-hidden bg-[#020202] text-white">

      {/* =========================================================
          CINEMATIC ANIMATIONS
      ========================================================= */}

      <style>{`

        @keyframes cameraFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-12px) scale(1.015);
          }
        }

        @keyframes logoCinematicIn {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(.72);
            filter: blur(15px);
          }

          45% {
            opacity: .55;
            filter: blur(5px);
          }

          75% {
            opacity: .9;
            filter: blur(1px);
          }

          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
            filter: blur(0);
          }
        }

        @keyframes logoSlowZoom {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }

          100% {
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        @keyframes textCinematicIn {
          0% {
            opacity: 0;
            transform: translateY(35px);
            filter: blur(5px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes goldLightMove {
          0% {
            transform: translateX(-120%) skewX(-20deg);
            opacity: 0;
          }

          15% {
            opacity: .35;
          }

          45% {
            opacity: .12;
          }

          100% {
            transform: translateX(500%) skewX(-20deg);
            opacity: 0;
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            opacity: .18;
            transform: scale(.92);
          }

          50% {
            opacity: .48;
            transform: scale(1.08);
          }
        }

        @keyframes filmRoll {
          0% {
            transform: translateX(-30px) rotate(-4deg);
          }

          50% {
            transform: translateX(30px) rotate(3deg);
          }

          100% {
            transform: translateX(-30px) rotate(-4deg);
          }
        }

        @keyframes particleUp {
          0% {
            transform: translateY(30px) scale(.6);
            opacity: 0;
          }

          30% {
            opacity: .7;
          }

          100% {
            transform: translateY(-120px) scale(1);
            opacity: 0;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-150%);
            opacity: 0;
          }

          20% {
            opacity: .8;
          }

          50% {
            opacity: .15;
          }

          100% {
            transform: translateX(250%);
            opacity: 0;
          }
        }

        @keyframes bottomLine {
          0% {
            width: 0;
          }

          100% {
            width: 100%;
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }

          50% {
            opacity: 1;
          }

          100% {
            transform: translateY(14px);
            opacity: 0;
          }
        }

        .camera-float {
          animation: cameraFloat 6s ease-in-out infinite;
        }

        .logo-cinematic-in {
          animation:
            logoCinematicIn 1.5s cubic-bezier(.16,1,.3,1) forwards,
            logoSlowZoom 8s ease-out 1.5s forwards;
        }

        .text-cinematic-in {
          animation: textCinematicIn 1s cubic-bezier(.16,1,.3,1) forwards;
        }

        .gold-light-move {
          animation: goldLightMove 7s ease-in-out infinite;
        }

        .glow-pulse {
          animation: glowPulse 5s ease-in-out infinite;
        }

        .film-roll {
          animation: filmRoll 8s ease-in-out infinite;
        }

        .particle-up {
          animation: particleUp 5s ease-out infinite;
        }

        .shine {
          animation: shine 4s ease-in-out infinite;
        }

        .bottom-line {
          animation: bottomLine 1.5s ease-out forwards;
        }

        .scroll-down {
          animation: scrollDown 1.8s ease-in-out infinite;
        }

      `}</style>


      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <div className="absolute left-0 top-0 z-[100] w-full">
        <Navbar />
      </div>


      {/* =========================================================
          CINEMATIC BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Black background */}

        <div className="absolute inset-0 bg-[#020202]" />


        {/* Subtle gold atmosphere - LEFT */}

        <div
          className="
            glow-pulse
            absolute
            -left-[250px]
            top-[35%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#c9982e]/20
            blur-[170px]
          "
        />


        {/* Subtle gold atmosphere - RIGHT */}

        <div
          className="
            glow-pulse
            absolute
            -right-[250px]
            top-[15%]
            h-[700px]
            w-[700px]
            rounded-full
            bg-[#c9982e]/15
            blur-[180px]
          "
          style={{ animationDelay: "2s" }}
        />


        {/* =====================================================
            CAMERA — LEFT BOTTOM
        ===================================================== */}

        <div
          className="
            camera-float
            absolute
            bottom-[-35px]
            left-[-110px]
            z-[8]
            w-[440px]
            sm:w-[520px]
            md:bottom-[-65px]
            md:left-[-80px]
            md:w-[650px]
            lg:w-[720px]
          "
        >

          {/* Camera glow */}

          <div
            className="
              absolute
              bottom-[10%]
              left-[25%]
              h-[220px]
              w-[320px]
              rounded-full
              bg-[#d6a83d]/20
              blur-[100px]
            "
          />

          <img
            src={img_bg}
            alt="Professional Camera"
            className="
              relative
              z-10
              w-full
              object-contain
              grayscale-[20%]
              opacity-[0.72]
              drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]
            "
          />

        </div>


        {/* =====================================================
            MAIN LOGO AREA
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            z-[15]
            flex
            items-center
            justify-center
            px-4
            pb-[190px]
            pt-[100px]
            sm:pb-[160px]
            md:pb-[90px]
            lg:justify-center
          "
        >

          <div className="relative h-full w-full max-w-[1050px]">

            {/* Logo ambient glow */}

            <div
              key={`logo-glow-${activeSlide}`}
              className="
                logo-cinematic-in
                absolute
                left-1/2
                top-1/2
                h-[330px]
                w-[330px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#d6a83d]/20
                blur-[110px]
                sm:h-[430px]
                sm:w-[430px]
                md:h-[500px]
                md:w-[500px]
              "
            />


            {/* Logo */}

            <img
              key={`logo-${activeSlide}`}
              src={current.logo}
              alt="Habesha Pictures"
              className="
                logo-cinematic-in
                absolute
                left-1/2
                top-1/2
                z-10
                max-h-[48vh]
                w-[78%]
                -translate-x-1/2
                -translate-y-1/2
                object-contain
                drop-shadow-[0_0_45px_rgba(212,169,67,0.35)]
                sm:w-[70%]
                md:max-h-[58vh]
                md:w-[62%]
                lg:w-[58%]
              "
            />

          </div>

        </div>


        {/* =====================================================
            GOLD CINEMATIC LIGHT
        ===================================================== */}

        <div
          className="
            gold-light-move
            pointer-events-none
            absolute
            left-0
            top-[-20%]
            z-[30]
            h-[150%]
            w-[16%]
            rotate-[12deg]
            bg-gradient-to-r
            from-transparent
            via-[#f5d36b]/25
            to-transparent
            blur-[30px]
          "
        />


        {/* =====================================================
            GOLD PARTICLES
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 z-[25]">

          <span
            className="
              particle-up
              absolute
              left-[28%]
              top-[58%]
              h-[3px]
              w-[3px]
              rounded-full
              bg-[#e8c46b]
            "
          />

          <span
            className="
              particle-up
              absolute
              left-[40%]
              top-[50%]
              h-[2px]
              w-[2px]
              rounded-full
              bg-[#f0d37a]
            "
            style={{ animationDelay: "1s" }}
          />

          <span
            className="
              particle-up
              absolute
              left-[58%]
              top-[42%]
              h-[3px]
              w-[3px]
              rounded-full
              bg-[#e8c46b]
            "
            style={{ animationDelay: "2s" }}
          />

          <span
            className="
              particle-up
              absolute
              left-[72%]
              top-[55%]
              h-[2px]
              w-[2px]
              rounded-full
              bg-[#f0d37a]
            "
            style={{ animationDelay: "3s" }}
          />

          <span
            className="
              particle-up
              absolute
              left-[82%]
              top-[45%]
              h-[3px]
              w-[3px]
              rounded-full
              bg-[#e8c46b]
            "
            style={{ animationDelay: "4s" }}
          />

        </div>


        {/* =====================================================
            LIGHT SHINE ON LOGO
        ===================================================== */}

        <div
          className="
            shine
            pointer-events-none
            absolute
            left-[45%]
            top-[10%]
            z-[28]
            h-[70%]
            w-[10%]
            rotate-[15deg]
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            blur-2xl
          "
        />


        {/* =====================================================
            CINEMATIC VIGNETTE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[40]
            bg-gradient-to-b
            from-black/80
            via-transparent
            to-black/90
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[41]
            bg-gradient-to-r
            from-black/80
            via-transparent
            to-black/60
          "
        />


        {/* Bottom cinematic shadow */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            z-[42]
            h-[35%]
            bg-gradient-to-t
            from-black
            via-black/70
            to-transparent
          "
        />


        {/* Film grain */}

        <div className="pointer-events-none absolute inset-0 z-[45] opacity-[0.025] mix-blend-overlay">

          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.35'/%3E%3C/svg%3E\")",
            }}
          />

        </div>

      </div>


      {/* =========================================================
          LEFT CINEMATIC MESSAGE
      ========================================================= */}

      <div
        key={`content-${activeSlide}`}
        className="
          text-cinematic-in
          absolute
          left-0
          top-1/2
          z-[60]
          w-full
          -translate-y-1/2
          px-6
          sm:px-10
          md:px-16
          lg:px-20
          xl:px-24
        "
      >

        <div className="max-w-[520px]">

          {/* Eyebrow */}

          <div className="mb-6 flex items-center gap-4">

            <span className="h-px w-9 bg-[#d6ae52]" />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.38em]
                text-[#e2bd62]
                sm:text-[10px]
              "
            >
              {current.eyebrow}
            </span>

          </div>


          {/* Main message */}

          <h1
            className="
              font-serif
              text-[36px]
              font-light
              leading-[1.08]
              tracking-[0.01em]
              text-white
              sm:text-[48px]
              md:text-[54px]
              lg:text-[58px]
          "
          >

            <span className="block">
              {current.line1}
            </span>

            <span className="block">
              {current.line2}
            </span>

            <span
              className="
                block
                text-[#d6aa43]
                drop-shadow-[0_0_20px_rgba(214,170,67,0.18)]
              "
            >
              {current.highlight}
            </span>

            <span className="block">
              {current.line3}
            </span>

          </h1>


          {/* Gold divider */}

          <div className="mt-7 h-px w-[260px] overflow-hidden bg-white/10">

            <div
              key={`line-${activeSlide}`}
              className="
                bottom-line
                h-full
                bg-gradient-to-r
                from-[#b98724]
                via-[#f1cf72]
                to-transparent
              "
            />

          </div>


          {/* Subtitle */}

          <p className="
            mt-5
            text-[9px]
            uppercase
            tracking-[0.28em]
            text-white/50
            sm:text-[10px]
          ">
            {current.subtitle}
          </p>


          {/* CTA */}

          <button
            type="button"
            className="
              group
              mt-7
              flex
              items-center
              gap-6
              border
              border-[#c99b35]/60
              bg-black/20
              px-6
              py-3
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-[#e5c66f]
              backdrop-blur-sm
              transition-all
              duration-500
              hover:border-[#f1ce70]
              hover:bg-[#c99b35]/10
              hover:shadow-[0_0_30px_rgba(210,167,66,0.15)]
            "
          >

            <span>
              Discover Our Work
            </span>

            <span
              className="
                text-lg
                transition-transform
                duration-500
                group-hover:translate-x-2
              "
            >
              →
            </span>

          </button>

        </div>

      </div>


      {/* =========================================================
          RIGHT SIDE SERVICES
      ========================================================= */}

      <div
        className="
          absolute
          right-5
          top-1/2
          z-[60]
          hidden
          -translate-y-1/2
          lg:block
          xl:right-12
        "
      >

        <div className="w-[220px]">

          <ServiceItem
            icon="◉"
            title="PHOTOGRAPHY"
            subtitle="Timeless & Elegant"
          />

          <ServiceItem
            icon="▣"
            title="FILM PRODUCTION"
            subtitle="Cinematic & Creative"
          />

          <ServiceItem
            icon="▷"
            title="CINEMATOGRAPHY"
            subtitle="Visual Storytelling"
          />

        </div>

      </div>


      {/* =========================================================
          BOTTOM STATS
      ========================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-[70]
          border-t
          border-white/10
          bg-black/35
          backdrop-blur-sm
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-[1500px]
            items-center
            justify-between
            px-5
            py-4
            sm:px-8
            md:px-12
            lg:px-20
          "
        >

          <div className="hidden items-center gap-4 sm:flex">

            <span className="text-2xl text-[#d6ae52]">
              ◎
            </span>

            <div>

              <p className="text-[9px] tracking-[0.25em] text-white">
                GLOBAL VISION
              </p>

              <p className="mt-1 text-[8px] text-white/35">
                Stories Beyond Borders
              </p>

            </div>

          </div>


          <Stat number="250+" label="PROJECTS COMPLETED" />
          <Stat number="120+" label="HAPPY CLIENTS" />
          <Stat number="10+" label="YEARS EXPERIENCE" />


          <div className="hidden items-center gap-4 sm:flex">

            <span className="text-2xl text-[#d6ae52]">
              ◉
            </span>

            <div>

              <p className="text-[9px] tracking-[0.25em] text-white">
                PASSION DRIVEN
              </p>

              <p className="mt-1 text-[8px] text-white/35">
                Detail. Emotion. Impact.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================================
          SLIDE CONTROLS
      ========================================================= */}

      <div
        className="
          absolute
          right-5
          top-[110px]
          z-[90]
          flex
          items-center
          gap-2
          sm:right-8
          md:right-14
        "
      >

        <span className="mr-2 font-mono text-[8px] text-white/35">
          0{activeSlide + 1}
        </span>

        {slides.map((_, index) => (

          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            className="group relative h-5 w-8"
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
                    ? "w-8 bg-[#e1bb5c]"
                    : "w-4 bg-white/20 group-hover:w-6 group-hover:bg-white/50"
                }
              `}
            />

          </button>

        ))}

        <span className="ml-1 font-mono text-[8px] text-white/35">
          0{slides.length}
        </span>

      </div>


      {/* =========================================================
          SCROLL
      ========================================================= */}

      <div
        className="
          absolute
          bottom-[88px]
          left-1/2
          z-[80]
          hidden
          -translate-x-1/2
          flex-col
          items-center
          md:flex
        "
      >

        <span className="
          text-[7px]
          uppercase
          tracking-[0.45em]
          text-white/35
        ">
          Scroll To Explore
        </span>

        <div className="relative mt-3 h-8 w-px bg-white/10">

          <div
            className="
              scroll-down
              absolute
              left-0
              top-0
              h-3
              w-px
              bg-[#e2bd62]
            "
          />

        </div>

      </div>

    </section>
  );
}


/* ============================================================
   SERVICE ITEM
============================================================ */

function ServiceItem({ icon, title, subtitle }) {
  return (
    <div className="
      group
      border-b
      border-white/10
      py-5
      transition-all
      duration-500
      hover:border-[#d6ae52]/70
    ">

      <div className="flex items-center gap-4">

        <span className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          border-[#c89b35]/60
          text-sm
          text-[#d6ae52]
          transition-all
          duration-500
          group-hover:bg-[#c89b35]/10
          group-hover:shadow-[0_0_20px_rgba(214,174,82,0.2)]
        ">
          {icon}
        </span>

        <div>

          <p className="
            text-[9px]
            tracking-[0.22em]
            text-white
          ">
            {title}
          </p>

          <p className="
            mt-1
            text-[8px]
            text-white/35
          ">
            {subtitle}
          </p>

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   STAT
============================================================ */

function Stat({ number, label }) {
  return (
    <div className="
      border-l
      border-white/10
      px-4
      text-center
      sm:px-7
      md:px-10
    ">

      <p className="
        font-serif
        text-2xl
        text-[#e0b95f]
        sm:text-3xl
      ">
        {number}
      </p>

      <p className="
        mt-1
        text-[7px]
        tracking-[0.2em]
        text-white/45
        sm:text-[8px]
      ">
        {label}
      </p>

    </div>
  );
}


export default Hero;