

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

// import React from "react";
// import Navbar from "./Navbar";

// import img_bg from "../assets/images/camera-pic-5-removebg-preview.png";
// import logoAi2 from "../assets/images/logoAi2.png";

// function Hero({ imageSrc }) {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-[#030303] text-white">
      
//       {/* ================= GLOBAL CINEMATIC STYLE ================= */}
//       <style>{`
//         @keyframes heroZoom {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.06); }
//         }

//         @keyframes floatCamera {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-12px); }
//         }

//         @keyframes goldPulse {
//           0%, 100% { opacity: .35; transform: scale(.95); }
//           50% { opacity: .75; transform: scale(1.05); }
//         }

//         @keyframes lineReveal {
//           0% { width: 0; opacity: 0; }
//           100% { width: 100%; opacity: 1; }
//         }

//         @keyframes fadeUp {
//           0% {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slowRotate {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes shimmer {
//           0% { transform: translateX(-120%); }
//           100% { transform: translateX(120%); }
//         }

//         .hero-zoom {
//           animation: heroZoom 18s ease-in-out infinite;
//         }

//         .camera-float {
//           animation: floatCamera 5s ease-in-out infinite;
//         }

//         .gold-pulse {
//           animation: goldPulse 4s ease-in-out infinite;
//         }

//         .fade-up {
//           animation: fadeUp 1s ease forwards;
//         }

//         .fade-up-delay-1 {
//           animation: fadeUp 1s .15s ease forwards;
//           opacity: 0;
//         }

//         .fade-up-delay-2 {
//           animation: fadeUp 1s .3s ease forwards;
//           opacity: 0;
//         }

//         .fade-up-delay-3 {
//           animation: fadeUp 1s .45s ease forwards;
//           opacity: 0;
//         }

//         .fade-up-delay-4 {
//           animation: fadeUp 1s .6s ease forwards;
//           opacity: 0;
//         }

//         .slow-rotate {
//           animation: slowRotate 35s linear infinite;
//         }

//         .gold-line {
//           animation: lineReveal 1.5s ease forwards;
//         }

//         .shimmer {
//           animation: shimmer 4s ease-in-out infinite;
//         }
//       `}</style>

//       {/* ================= BACKGROUND ================= */}
//       <div className="absolute inset-0 overflow-hidden">
        
//         <div
//           className="absolute inset-0 scale-105 hero-zoom"
//           style={{
//             backgroundImage: `url(${imageSrc || logoAi2})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         {/* Dark cinematic overlay */}
//         <div className="absolute inset-0 bg-black/70" />

//         {/* Left cinematic darkness */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />

//         {/* Bottom darkness */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

//         {/* Golden radial atmosphere */}
//         <div className="absolute left-[55%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#d9a441]/10 blur-[120px] gold-pulse" />

//         {/* Subtle vignette */}
//         <div className="absolute inset-0 shadow-[inset_0_0_180px_70px_rgba(0,0,0,0.95)]" />

//         {/* Film grain */}
//         <div className="absolute inset-0 opacity-[0.035] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
//       </div>

//       {/* ================= NAVBAR ================= */}
//       <div className="absolute left-0 top-0 z-50 w-full">
//         <Navbar />
//       </div>

//       {/* ================= GOLD DECORATIVE LINE ================= */}
//       <div className="absolute left-0 top-[115px] z-20 hidden h-px w-[22%] bg-gradient-to-r from-[#d7a83d] to-transparent lg:block" />

//       <div className="absolute right-0 top-[115px] z-20 hidden h-px w-[15%] bg-gradient-to-l from-[#d7a83d] to-transparent lg:block" />

//       {/* ================= MAIN CONTENT ================= */}
//       <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16 xl:px-24">

//         <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">

//           {/* ================= LEFT CONTENT ================= */}
//           <div className="relative z-20 max-w-3xl">

//             {/* Small Label */}
//             <div className="fade-up mb-7 flex items-center gap-4">
//               <span className="h-px w-10 bg-[#d8aa45]" />

//               <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#d8aa45] sm:text-xs">
//                 Film Production • Photography • Cinematography
//               </span>
//             </div>

//             {/* Main Heading */}
//             <div className="fade-up-delay-1">
//               <h1 className="font-serif text-[54px] font-medium leading-[0.9] tracking-[-0.04em] sm:text-[76px] md:text-[96px] lg:text-[105px] xl:text-[120px]">
//                 We Create
//               </h1>

//               <h1 className="mt-2 font-serif text-[54px] font-medium leading-[0.9] tracking-[-0.04em] text-[#d8aa45] sm:text-[76px] md:text-[96px] lg:text-[105px] xl:text-[120px]">
//                 Visual Stories.
//               </h1>
//             </div>

//             {/* Gold Divider */}
//             <div className="fade-up-delay-2 mt-8 h-px w-20 bg-[#d8aa45]" />

//             {/* Description */}
//             <p className="fade-up-delay-2 mt-7 max-w-xl text-sm font-light leading-7 tracking-wide text-zinc-300 sm:text-base sm:leading-8">
//               From powerful cinematic films to unforgettable photography,
//               we transform ideas, people and moments into visual stories
//               that connect with audiences across the world.
//             </p>

//             {/* CTA */}
//             <div className="fade-up-delay-3 mt-9 flex flex-wrap items-center gap-4">

//               <a
//                 href="#portfolio"
//                 className="group relative inline-flex items-center gap-4 overflow-hidden border border-[#d8aa45] bg-[#d8aa45] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-black transition-all duration-500 hover:bg-transparent hover:text-[#d8aa45] sm:px-8"
//               >
//                 <span className="relative z-10">
//                   Explore Our Work
//                 </span>

//                 <span className="relative z-10 text-lg transition-transform duration-500 group-hover:translate-x-2">
//                   →
//                 </span>

//                 <span className="absolute inset-0 -translate-x-full bg-white/20 shimmer" />
//               </a>

//               <a
//                 href="#contact"
//                 className="group inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white transition-all duration-500 hover:border-[#d8aa45] hover:text-[#d8aa45] sm:px-8"
//               >
//                 Start A Project

//                 <span className="transition-transform duration-300 group-hover:translate-x-1">
//                   ↗
//                 </span>
//               </a>

//             </div>

//             {/* ================= STATS ================= */}
//             <div className="fade-up-delay-4 mt-12 grid max-w-2xl grid-cols-3 border-y border-white/10 py-5">

//               <div className="border-r border-white/10 pr-4">
//                 <div className="font-serif text-2xl text-[#d8aa45] sm:text-3xl">
//                   250+
//                 </div>

//                 <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-zinc-500 sm:text-[9px]">
//                   Projects
//                 </div>
//               </div>

//               <div className="border-r border-white/10 px-4">
//                 <div className="font-serif text-2xl text-[#d8aa45] sm:text-3xl">
//                   120+
//                 </div>

//                 <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-zinc-500 sm:text-[9px]">
//                   Clients
//                 </div>
//               </div>

//               <div className="pl-4">
//                 <div className="font-serif text-2xl text-[#d8aa45] sm:text-3xl">
//                   10+
//                 </div>

//                 <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-zinc-500 sm:text-[9px]">
//                   Years
//                 </div>
//               </div>

//             </div>

//           </div>

//           {/* ================= RIGHT VISUAL ================= */}
//           <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[650px]">

//             {/* Golden orbit */}
//             <div className="absolute h-[330px] w-[330px] rounded-full border border-[#d8aa45]/20 sm:h-[450px] sm:w-[450px] lg:h-[560px] lg:w-[560px]" />

//             <div className="absolute h-[390px] w-[390px] rounded-full border border-[#d8aa45]/10 sm:h-[510px] sm:w-[510px] lg:h-[620px] lg:w-[620px] slow-rotate" />

//             {/* Glow behind logo */}
//             <div className="absolute h-[250px] w-[250px] rounded-full bg-[#d8aa45]/15 blur-[100px] sm:h-[350px] sm:w-[350px]" />

//             {/* Main Logo */}
//             <div className="relative z-10 camera-float">
//               <img
//                 src={logoAi2}
//                 alt="Habesha Pictures"
//                 className="w-[310px] max-w-[80vw] object-contain drop-shadow-[0_0_50px_rgba(216,170,69,0.25)] sm:w-[430px] lg:w-[540px] xl:w-[610px]"
//               />
//             </div>

//             {/* Camera */}
//             <div className="absolute bottom-[-25px] left-[-5px] z-20 w-[230px] camera-float sm:bottom-[-35px] sm:left-[0] sm:w-[300px] lg:bottom-[-30px] lg:left-[-35px] lg:w-[370px]">
//               <img
//                 src={img_bg}
//                 alt="Professional cinema camera"
//                 className="w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]"
//               />
//             </div>

//             {/* Floating Golden Dot */}
//             <div className="absolute right-[12%] top-[18%] h-2 w-2 rounded-full bg-[#d8aa45] shadow-[0_0_20px_8px_rgba(216,170,69,0.3)]" />

//             <div className="absolute left-[18%] top-[25%] h-1.5 w-1.5 rounded-full bg-[#d8aa45]" />

//             {/* Visual Label */}
//             <div className="absolute bottom-[10%] right-0 hidden border-l border-[#d8aa45] pl-4 lg:block">
//               <p className="text-[9px] uppercase tracking-[0.35em] text-[#d8aa45]">
//                 Visual Storytelling
//               </p>

//               <p className="mt-1 text-[10px] tracking-wide text-zinc-500">
//                 Crafted Beyond Imagination
//               </p>
//             </div>

//           </div>

//         </div>
//       </div>

//       {/* ================= BOTTOM SCROLL ================= */}
//       <div className="absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center md:flex">

//         <span className="mb-3 text-[8px] uppercase tracking-[0.5em] text-zinc-500">
//           Scroll To Explore
//         </span>

//         <div className="relative h-10 w-px overflow-hidden bg-white/10">
//           <div className="absolute left-0 top-0 h-1/2 w-full bg-[#d8aa45]" />
//         </div>

//       </div>

//       {/* ================= SIDE INDEX ================= */}
//       <div className="absolute bottom-10 right-8 z-30 hidden lg:block">
//         <div className="flex items-center gap-3">
//           <span className="text-[9px] uppercase tracking-[0.35em] text-[#d8aa45]">
//             01
//           </span>

//           <span className="h-px w-10 bg-[#d8aa45]/50" />

//           <span className="text-[9px] uppercase tracking-[0.35em] text-zinc-600">
//             04
//           </span>
//         </div>
//       </div>

//     </section>
//   );
// }

// export default Hero;

import React from "react";
import Navbar from "./Navbar";

import img_bg from "../assets/images/camera-pic-5-removebg-preview.png";
import logoAi2 from "../assets/images/logoAi2.png";

function Hero({ imageSrc }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#070707] text-white">

      {/* ================= GLOBAL CINEMATIC STYLE ================= */}
      <style>{`
        @keyframes heroZoom {
          0%, 100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.05);
          }
        }

        @keyframes floatCamera {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes goldPulse {
          0%, 100% {
            opacity: .25;
            transform: scale(.96);
          }

          50% {
            opacity: .55;
            transform: scale(1.04);
          }
        }

        @keyframes lineReveal {
          0% {
            width: 0;
            opacity: 0;
          }

          100% {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slowRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(120%);
          }
        }

        .hero-zoom {
          animation: heroZoom 20s ease-in-out infinite;
        }

        .camera-float {
          animation: floatCamera 5s ease-in-out infinite;
        }

        .gold-pulse {
          animation: goldPulse 5s ease-in-out infinite;
        }

        .fade-up {
          animation: fadeUp 1s ease forwards;
        }

        .fade-up-delay-1 {
          animation: fadeUp 1s .15s ease forwards;
          opacity: 0;
        }

        .fade-up-delay-2 {
          animation: fadeUp 1s .3s ease forwards;
          opacity: 0;
        }

        .fade-up-delay-3 {
          animation: fadeUp 1s .45s ease forwards;
          opacity: 0;
        }

        .fade-up-delay-4 {
          animation: fadeUp 1s .6s ease forwards;
          opacity: 0;
        }

        .slow-rotate {
          animation: slowRotate 40s linear infinite;
        }

        .gold-line {
          animation: lineReveal 1.5s ease forwards;
        }

        .shimmer {
          animation: shimmer 4s ease-in-out infinite;
        }
      `}</style>


      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Main background */}
        <div
          className="absolute inset-0 scale-105 hero-zoom"
          style={{
            backgroundImage: `url(${imageSrc || logoAi2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(1.18) contrast(1.03)",
          }}
        />

        {/* Soft cinematic dark overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Soft left gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

        {/* Soft bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        {/* Golden cinematic atmosphere */}
        <div className="absolute left-[52%] top-[18%] h-[520px] w-[520px] rounded-full bg-[#d9a441]/12 blur-[130px] gold-pulse" />

        {/* Second subtle golden glow */}
        <div className="absolute right-[5%] top-[45%] h-[300px] w-[300px] rounded-full bg-[#d9a441]/8 blur-[100px]" />

        {/* Lighter vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_45px_rgba(0,0,0,0.55)]" />

        {/* Very subtle grain */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      </div>


      {/* ================= NAVBAR ================= */}
      <div className="absolute left-0 top-0 z-50 w-full">
        <Navbar />
      </div>


      {/* ================= GOLD DECORATIVE LINES ================= */}
      <div className="absolute left-0 top-[115px] z-20 hidden h-px w-[22%] bg-gradient-to-r from-[#d7a83d] to-transparent lg:block" />

      <div className="absolute right-0 top-[115px] z-20 hidden h-px w-[15%] bg-gradient-to-l from-[#d7a83d] to-transparent lg:block" />


      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16 xl:px-24">

        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">


          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-20 max-w-3xl">

            {/* Small Label */}
            <div className="fade-up mb-7 flex items-center gap-4">

              <span className="h-px w-10 bg-[#d8aa45]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-[#e0b653] sm:text-xs">
                Film Production • Photography • Cinematography
              </span>

            </div>


            {/* Main Heading */}
            <div className="fade-up-delay-1">

              <h1 className="font-serif text-[54px] font-medium leading-[0.9] tracking-[-0.04em] text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.45)] sm:text-[76px] md:text-[96px] lg:text-[105px] xl:text-[120px]">
                We Create
              </h1>

              <h1 className="mt-2 font-serif text-[54px] font-medium leading-[0.9] tracking-[-0.04em] text-[#d8aa45] drop-shadow-[0_4px_25px_rgba(0,0,0,0.45)] sm:text-[76px] md:text-[96px] lg:text-[105px] xl:text-[120px]">
                Visual Stories.
              </h1>

            </div>


            {/* Gold Divider */}
            <div className="fade-up-delay-2 mt-8 h-px w-20 bg-[#d8aa45]" />


            {/* Description */}
            <p className="fade-up-delay-2 mt-7 max-w-xl text-sm font-light leading-7 tracking-wide text-zinc-200 sm:text-base sm:leading-8">
              From powerful cinematic films to unforgettable photography,
              we transform ideas, people and moments into visual stories
              that connect with audiences across the world.
            </p>


            {/* CTA */}
            <div className="fade-up-delay-3 mt-9 flex flex-wrap items-center gap-4">

              <a
                href="#portfolio"
                className="group relative inline-flex items-center gap-4 overflow-hidden border border-[#d8aa45] bg-[#d8aa45] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-black transition-all duration-500 hover:bg-transparent hover:text-[#d8aa45] sm:px-8"
              >

                <span className="relative z-10">
                  Explore Our Work
                </span>

                <span className="relative z-10 text-lg transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 shimmer" />

              </a>


              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border border-white/30 bg-black/10 px-7 py-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-all duration-500 hover:border-[#d8aa45] hover:text-[#d8aa45] sm:px-8"
              >

                Start A Project

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>

              </a>

            </div>


            {/* ================= STATS ================= */}
            <div className="fade-up-delay-4 mt-12 grid max-w-2xl grid-cols-3 border-y border-white/15 py-5">

              <div className="border-r border-white/15 pr-4">

                <div className="font-serif text-2xl text-[#e0b653] sm:text-3xl">
                  250+
                </div>

                <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-zinc-400 sm:text-[9px]">
                  Projects
                </div>

              </div>


              <div className="border-r border-white/15 px-4">

                <div className="font-serif text-2xl text-[#e0b653] sm:text-3xl">
                  120+
                </div>

                <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-zinc-400 sm:text-[9px]">
                  Clients
                </div>

              </div>


              <div className="pl-4">

                <div className="font-serif text-2xl text-[#e0b653] sm:text-3xl">
                  10+
                </div>

                <div className="mt-1 text-[8px] uppercase tracking-[0.25em] text-zinc-400 sm:text-[9px]">
                  Years
                </div>

              </div>

            </div>

          </div>


          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[650px]">

            {/* Outer golden orbit */}
            <div className="absolute h-[330px] w-[330px] rounded-full border border-[#d8aa45]/25 sm:h-[450px] sm:w-[450px] lg:h-[560px] lg:w-[560px]" />

            {/* Rotating orbit */}
            <div className="absolute h-[390px] w-[390px] rounded-full border border-[#d8aa45]/12 sm:h-[510px] sm:w-[510px] lg:h-[620px] lg:w-[620px] slow-rotate" />


            {/* Logo glow */}
            <div className="absolute h-[280px] w-[280px] rounded-full bg-[#d8aa45]/15 blur-[100px] sm:h-[380px] sm:w-[380px]" />


            {/* Main Logo */}
            <div className="relative z-10 camera-float">

              <img
                src={logoAi2}
                alt="Habesha Pictures"
                className="w-[310px] max-w-[80vw] object-contain drop-shadow-[0_0_60px_rgba(216,170,69,0.35)] sm:w-[430px] lg:w-[540px] xl:w-[610px]"
              />

            </div>


            {/* Camera */}
            <div className="absolute bottom-[-25px] left-[-5px] z-20 w-[230px] camera-float sm:bottom-[-35px] sm:left-0 sm:w-[300px] lg:bottom-[-30px] lg:left-[-35px] lg:w-[370px]">

              <img
                src={img_bg}
                alt="Professional cinema camera"
                className="w-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.75)]"
              />

            </div>


            {/* Golden light particles */}
            <div className="absolute right-[12%] top-[18%] h-2 w-2 rounded-full bg-[#e3b64e] shadow-[0_0_20px_8px_rgba(216,170,69,0.35)]" />

            <div className="absolute left-[18%] top-[25%] h-1.5 w-1.5 rounded-full bg-[#e3b64e] shadow-[0_0_12px_4px_rgba(216,170,69,0.25)]" />

            <div className="absolute right-[25%] top-[38%] h-1 w-1 rounded-full bg-[#e3b64e]" />


            {/* Visual Label */}
            <div className="absolute bottom-[10%] right-0 hidden border-l border-[#d8aa45] pl-4 lg:block">

              <p className="text-[9px] uppercase tracking-[0.35em] text-[#d8aa45]">
                Visual Storytelling
              </p>

              <p className="mt-1 text-[10px] tracking-wide text-zinc-400">
                Crafted Beyond Imagination
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM SCROLL ================= */}
      <div className="absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center md:flex">

        <span className="mb-3 text-[8px] uppercase tracking-[0.5em] text-zinc-400">
          Scroll To Explore
        </span>

        <div className="relative h-10 w-px overflow-hidden bg-white/20">

          <div className="absolute left-0 top-0 h-1/2 w-full bg-[#d8aa45]" />

        </div>

      </div>


      {/* ================= SIDE INDEX ================= */}
      <div className="absolute bottom-10 right-8 z-30 hidden lg:block">

        <div className="flex items-center gap-3">

          <span className="text-[9px] uppercase tracking-[0.35em] text-[#d8aa45]">
            01
          </span>

          <span className="h-px w-10 bg-[#d8aa45]/60" />

          <span className="text-[9px] uppercase tracking-[0.35em] text-zinc-500">
            04
          </span>

        </div>

      </div>

    </section>
  );
}

export default Hero;