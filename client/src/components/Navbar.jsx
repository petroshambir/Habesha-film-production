
import React, { useState } from 'react';
import logo from '../assets/images/robi-logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center text-white">
      {/* ሎጎ */}
      <img src={logo} alt="logo" className="w-20 h-20 md:w-32 md:h-28" />

      {/* በርገር መኑ (Mobile) */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>

      {/* ናቪጌሽን ሊንክስ */}
    
      {/* ናቪጌሽን ሊንክስ */}
      <div className={`
        absolute md:static top-full left-0 w-full bg-black/95 md:bg-transparent p-6 md:p-0 
        flex flex-col md:flex-row gap-6 md:gap-8 uppercase tracking-widest text-xs font-semibold
        md:ml-auto md:w-auto md:items-center  /* እዚ ክፋል እዩ ሊንክታት ናብ የማን ዝድርፎ */
        ${isOpen ? 'flex' : 'hidden md:flex'}
      `}>

        <a href="/" className="hover:text-zinc-400">Home</a>
        <a href="#about" className="hover:text-zinc-400">About</a>
        <a href="#contact" className="hover:text-zinc-400">Contact</a>
        <a href="#gallery" className="hover:text-zinc-400">Gallery</a>
        
        {/* Our Work Dropdown (Mobile-friendly) */}
        {/* <div className="relative">
          <button 
            className="hover:text-zinc-400 flex items-center" 
            onClick={() => setWorkOpen(!workOpen)}
          >
            Our Work ▾
          </button>
          {workOpen && (
            <div className="md:absolute md:top-full md:right-0 bg-black/90 p-4 w-full md:w-48 mt-2 border border-white/10">
              <a href="#wedding" className="block py-2 hover:text-zinc-400">Wedding</a>
              <a href="#bridal" className="block py-2 hover:text-zinc-400">Bridal</a>
              <a href="#baby-shower" className="block py-2 hover:text-zinc-400">Baby Shower</a>
            </div>
          )}
        </div> */}
        <div 
  className="relative"
  onMouseEnter={() => setWorkOpen(true)}
  onMouseLeave={() => setWorkOpen(false)}
>
  <button 
    className="hover:text-zinc-400 flex items-center" 
    onClick={() => setWorkOpen(!workOpen)}
  >
    Our Work ▾
  </button>
  
  {workOpen && (
    <div className="md:absolute md:top-full md:right-0 bg-black/90 p-4 w-full md:w-48 mt-2 border border-white/10">
      <a href="#wedding" className="block py-2 hover:text-zinc-400">Wedding</a>
      <a href="#bridal" className="block py-2 hover:text-zinc-400">Bridal</a>
      <a href="#baby-shower" className="block py-2 hover:text-zinc-400">Baby Shower</a>
    </div>
  )}
</div>
        
      </div>
    </nav>
  );
}

export default Navbar;