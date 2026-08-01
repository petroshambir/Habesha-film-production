
import React from 'react';
import { Link } from 'react-router-dom';

import tiktokImg from '../assets/images/tiktok.jpeg';
import instagramImg from '../assets/images/instagram.jpeg';
import youtubeImg from '../assets/images/youtube.jpeg';
import facebookImg from '../assets/images/facebook.jpeg';

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10 py-16 px-6 md:px-24">
      {/* 
        text-center (ንሞባይል ማእከል ይገብሮ) 
        md:text-left (ካብ ላፕቶፕ ንላዕሊ ናብ ጸጋም ይገብሮ) 
        flex flex-col items-center md:block (ንኩሉ ትሕስቶ ኣብ ሞባይል ናብ ማእከል ይስሕቦ)
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* ንፋልማይ ክፋል */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-light tracking-widest uppercase">JONI Studio</h3>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
            Crafting cinematic stories and timeless portraits for your most cherished moments. 
          </p>
        </div>

        {/* ኮንታክት */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h4 className="text-sm uppercase tracking-[0.2em] text-white/50">Contact</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>Email: hello@jonistudio.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Location: Addis Ababa, Ethiopia</li>
          </ul>
        </div>

        {/* ሶሻል ሚድያ */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h4 className="text-sm uppercase tracking-[0.2em] text-white/50">Follow Us</h4>
          {/* justify-center (ንሶሻል ሚድያ ስእልታት ኣብ ሞባይል ማእከል ይገብሮ) */}
          <div className="flex items-center justify-center md:justify-start gap-6">
            
            {/* ቲክቶክ ስእሊ (w-8 h-8 ኣብ ሞባይል ይዓቢ፣ md:w-6 md:h-6 ኣብ ላፕቶፕ ንቁሩብ ይመጣጠን) */}
            <a href="https://www.tiktok.com/@robeltesfu21" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={tiktokImg} alt="TikTok" className="w-8 h-8 md:w-6 md:h-6 object-contain rounded-md" />
            </a>

            {/* ኢንስታግራም ስእሊ */}
            <a href="https://www.instagram.com/_u/robel.tesfu.1848" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={instagramImg} alt="Instagram" className="w-8 h-8 md:w-6 md:h-6 object-contain rounded-md" />
            </a>

            {/* ዩቱብ ስእሊ */}
            <a href="https://www.youtube.com/@joniphotographyofficial" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={youtubeImg} alt="YouTube" className="w-8 h-8 md:w-6 md:h-6 object-contain rounded-md" />
            </a>

            {/* ፌስቡክ ስእሊ */}
            <a href="https://www.facebook.com/profile.php?id=61563600000000" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={facebookImg} alt="Facebook" className="w-8 h-8 md:w-6 md:h-6 object-contain rounded-md" />
            </a>

          </div>
        </div>
      </div>

      {/* ታሕተዋይ ክፋል (Copyright & Admin link) */}
      <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center text-zinc-600 text-[10px] uppercase tracking-[0.3em]">
        <div>© 2026 JONI Studio. All rights reserved.</div>
        
        <Link 
          to="/admin-login" 
          className="text-zinc-800 hover:text-zinc-500 transition-colors"
        >
          Admin
        </Link>
      </div>
    </footer>
  );
}

export default Footer;