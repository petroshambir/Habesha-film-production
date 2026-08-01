
import React from 'react';
import Navbar from './Navbar';
import heroVideo from '../assets/videos/robi-v1.mp4';

function Hero({ videoSrc }) {
  return (
    <section className="relative w-full h-[75vh] flex items-end justify-start overflow-hidden bg-black">
      <Navbar /> 
      
      {/* ቪዲዮ (ምሉእ ባክግራውንድ) */}
      <video 
        autoPlay loop muted playsInline 
        className="absolute inset-0 w-full h-full object-cover" 
        src={videoSrc}
      />
      
      {/* Cinematic Gradient Mask (ንቪዲዮ ንኽትሪኢ) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

      {/* ዝንሳፈፍ ትሕዝቶ (ብታሕቲ ኣብ ጸጋም) */}
      <div className="relative z-10 p-12 md:p-24 animate-fade-in-up">
        <div className="flex flex-col items-start border-l border-white/30 pl-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-2">
            Professional Studio
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 transition-all hover:tracking-widest">
            {/* Habesha */}
          </h1>
          <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-8">
            Film & Digital Production
          </p>
          
          <a href="#work" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white">
            <span className="w-12 h-[1px] bg-white transition-all group-hover:w-20"></span>
            Explore Reel
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;