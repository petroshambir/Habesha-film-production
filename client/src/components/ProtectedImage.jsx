


// import React, { useEffect, useState } from 'react';

// const ProtectedImage = ({ src, alt, className }) => {
//   // ኣብ ሞባይል ክትንከፍ ከሎ ንምፍላጥ (Touch state)
//   const [isTouched, setIsTouched] = useState(false);

//   // ኣብ ፒሲ ስክሪንሹት ንምሕዛዝ ዝሕግዝ (PrintScreen ወይ Ctrl+Shift+S)
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (
//         e.key === 'PrintScreen' || 
//         (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 's')
//       ) {
//         e.preventDefault();
//         alert("⚠️ Screenshots are protected on this gallery!");
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div 
//       className={`relative overflow-hidden select-none group ${className || ''}`}
//       onContextMenu={(e) => e.preventDefault()}
//       onDragStart={(e) => e.preventDefault()}
//       // ሞባይል ክትንከፍ ከሎ
//       onTouchStart={() => setIsTouched(true)}
//       onTouchEnd={() => setTimeout(() => setIsTouched(false), 1500)} // ድሕሪ 1.5 ካልኢት ናብ ንቡር ይመልሶ
//     >
//       {/* 1. እቲ ትክክለኛ ምስሊ 
//           - ኣብ ሞባይል (isTouched) ምስ ዝኸውን ወይ ኣብ ፒሲ (group-hover) ከሎ ይድብዘዝ */}
//       <img 
//         src={src} 
//         alt={alt || "Protected Image"} 
//         className={`w-full h-full object-cover pointer-events-none transition-all duration-300 ${
//           isTouched ? 'blur-md opacity-20' : ''
//         }`}
//       />

//       {/* 2. መከላኸሊ ባዶ ምስሊ (Transparent Layer) */}
//       <img 
//         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
//         alt="Protection Layer" 
//         className="absolute inset-0 w-full h-full opacity-0 z-10"
//       />

//       {/* 3. ትኽክለኛ ሎጎን ዋተርማርክን (Bottom-Right Corner) 
//           - ምስቲ ዝለኣክካዮ ሎጎ ምስሊ ተዋሂዱ ብንኡስ መጠን ኣብ ኩርናዕ ይጸንሕ */}
//       <div className={`absolute bottom-3 right-3 transition-opacity duration-300 pointer-events-none z-20 ${
//         isTouched ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
//       }`}>
//         <div className="bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2.5">
//           {/* ናይቲ ሎጎ ምስሊ (ኣብ public folder ኣትዩ ዘሎ ፋይል ሐዞ ወይ ናብ public/images/adal-ogo.png ክትቅይሮ ትኽእል ኢኻ) */}
//           <img 
//             src="/adal-ogo.png" 
//             alt="Habesha Logo" 
//             className="w-7 h-7 object-contain bg-white/10 p-0.5 rounded"
//           />
//           <div className="flex flex-col text-left">
//             <span className="text-[11px] font-bold tracking-wider uppercase text-white leading-tight">
//               Habesha Pictures
//             </span>
//             <span className="text-[8px] tracking-widest text-amber-400 uppercase font-semibold leading-tight">
//               Protected
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProtectedImage;

// import React, { useState, useEffect } from 'react';

// const ProtectedImage = ({ src, alt, className, onClick }) => {
//   const [isTouched, setIsTouched] = useState(false);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (
//         e.key === 'PrintScreen' || 
//         (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 's')
//       ) {
//         e.preventDefault();
//         alert("⚠️ Screenshots are protected on this gallery!");
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div 
//       onClick={onClick}
//       className={`relative overflow-hidden select-none group ${className || ''}`}
//       onContextMenu={(e) => e.preventDefault()}
//       onDragStart={(e) => e.preventDefault()}
//       onTouchStart={() => setIsTouched(true)}
//       onTouchEnd={() => setTimeout(() => setIsTouched(false), 1500)}
//     >
//       {/* 1. እቲ ትክክለኛ ምስሊ */}
//       <img 
//         src={src} 
//         alt={alt || "Protected Image"} 
//         className={`w-full h-full object-cover pointer-events-none transition-all duration-300 ${
//           isTouched ? 'blur-lg brightness-50 contrast-125' : ''
//         }`}
//       />

//       {/* 2. መከላኸሊ ባዶ ምስሊ (Transparent Layer) */}
//       <img 
//         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
//         alt="Protection Layer" 
//         className="absolute inset-0 w-full h-full opacity-0 z-10"
//       />

//       {/* 3. ማእከላይ ዋተርማርክ (Center Text Watermark - ባክግራውንድ የብሉን፡ ዝርርግ ዝበለ) */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 p-4">
//         <div className="text-center transform -rotate-12 select-none opacity-40 group-hover:opacity-75 transition-opacity duration-300">
//           <h2 className="text-lg md:text-2xl font-serif font-bold tracking-[0.3em] uppercase text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
//             Habesha Pictures
//           </h2>
//           <p className="text-[9px] md:text-[11px] tracking-[0.5em] uppercase text-amber-400/90 font-semibold mt-1">
//             Protected Gallery
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProtectedImage;

// import React, { useState, useEffect } from 'react';
// import adalLogo from '../assets/images/adal-logo.png'; // ኣብዚ ሎጎ ፋይል ኣብ assets ፎልደር ኣትዩ

// const ProtectedImage = ({ src, alt, className, onClick }) => {
//   const [isTouched, setIsTouched] = useState(false);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (
//         e.key === 'PrintScreen' || 
//         (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 's')
//       ) {
//         e.preventDefault();
//         alert("⚠️ Screenshots are protected on this gallery!");
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div 
//       onClick={onClick}
//       className={`relative overflow-hidden select-none group ${className || ''}`}
//       onContextMenu={(e) => e.preventDefault()}
//       onDragStart={(e) => e.preventDefault()}
//       onTouchStart={() => setIsTouched(true)}
//       onTouchEnd={() => setTimeout(() => setIsTouched(false), 1500)}
//     >
//       {/* 1. እቲ ትክክለኛ ምስሊ */}
//       <img 
//         src={src} 
//         alt={alt || "Protected Image"} 
//         className={`w-full h-full object-cover pointer-events-none transition-all duration-300 ${
//           isTouched ? 'blur-sm brightness-75' : '' 
//         }`}
//       />

//       {/* 2. መከላኸሊ ባዶ ምስሊ (Transparent Layer) */}
//       <img 
//         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
//         alt="Protection Layer" 
//         className="absolute inset-0 w-full h-full opacity-0 z-10"
//       />

//       {/* 3. ማእከላይ ዋተርማርክ (ሎጎን ጽሑፍን ብማእከል) */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 p-4">
//         <div className="flex flex-col items-center text-center transform -rotate-12 select-none opacity-40 group-hover:opacity-75 transition-opacity duration-300">
//           <img 
//             src={adalLogo} 
//             alt="Habesha Logo" 
//             className="w-6 h-6 md:w-8 md:h-8 object-contain mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
//           />
//           <h2 className="text-lg md:text-2xl font-serif font-bold tracking-[0.3em] uppercase text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
//             Habesha Pictures
//           </h2>
//           <p className="text-[9px] md:text-[11px] tracking-[0.5em] uppercase text-amber-400/90 font-semibold mt-1">
//             Protected Gallery
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProtectedImage;

// import React, { useState, useEffect } from 'react';
// import adalLogo from '../assets/images/adal-logo.png'; 

// const ProtectedImage = ({ src, alt, className, onClick, showLogoOnly = false }) => {
//   const [isTouched, setIsTouched] = useState(false);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (
//         e.key === 'PrintScreen' || 
//         (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 's')
//       ) {
//         e.preventDefault();
//         alert("⚠️ Screenshots are protected on this gallery!");
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div 
//       onClick={onClick}
//       className={`relative overflow-hidden select-none group ${className || ''}`}
//       onContextMenu={(e) => e.preventDefault()}
//       onDragStart={(e) => e.preventDefault()}
//       onTouchStart={() => setIsTouched(true)}
//       onTouchEnd={() => setTimeout(() => setIsTouched(false), 1500)}
//     >
//       <img 
//         src={src} 
//         alt={alt || "Protected Image"} 
//         className={`w-full h-full object-cover pointer-events-none transition-all duration-300 ${
//           isTouched ? 'blur-sm brightness-75' : '' 
//         }`}
//       />

//       <img 
//         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
//         alt="Protection Layer" 
//         className="absolute inset-0 w-full h-full opacity-0 z-10"
//       />

//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 p-4">
//         {showLogoOnly ? (
//           /* ኣብ Home ዝጥቀመሉ - ሎጎ ጥራሕ */
//           <div className="flex flex-col items-center justify-center select-none opacity-40 group-hover:opacity-75 transition-opacity duration-300">
//             <img 
//               src={adalLogo} 
//               alt="Habesha Logo" 
//               className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
//             />
//           </div>
//         ) : (
//           /* ኣብ ካልእ ቦታታት ዝጥቀመሉ - ሙሉእ ዋተርማርክ (ሎጎን ጽሑፍን) */
//           <div className="flex flex-col items-center text-center transform -rotate-12 select-none opacity-40 group-hover:opacity-75 transition-opacity duration-300">
//             <img 
//               src={adalLogo} 
//               alt="Habesha Logo" 
//               className="w-6 h-6 md:w-8 md:h-8 object-contain mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
//             />
//             <h2 className="text-lg md:text-2xl font-serif font-bold tracking-[0.3em] uppercase text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
//               Habesha Pictures
//             </h2>
//             <p className="text-[9px] md:text-[11px] tracking-[0.5em] uppercase text-amber-400/90 font-semibold mt-1">
//               Protected Gallery
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProtectedImage;

import React, { useState, useEffect } from 'react';
import adalLogo from '../assets/images/adal-logo.png'; 

const ProtectedImage = ({ src, alt, className, onClick, showLogoOnly = false }) => {
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === 'PrintScreen' || 
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 's')
      ) {
        e.preventDefault();
        alert("⚠️ Screenshots are protected on this gallery!");
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden select-none group ${className || ''}`}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setTimeout(() => setIsTouched(false), 1500)}
    >
      {/* 1. እቲ ትክክለኛ ምስሊ */}
      <img 
        src={src} 
        alt={alt || "Protected Image"} 
        className={`w-full h-full object-cover pointer-events-none transition-all duration-300 ${
          isTouched ? 'blur-sm brightness-75' : '' 
        }`}
      />

      {/* 2. መከላኸሊ ባዶ ምስሊ (Transparent Layer) */}
      <img 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
        alt="Protection Layer" 
        className="absolute inset-0 w-full h-full opacity-0 z-10"
      />

      {/* 3. ዋተርማርክ (ሎጎን ኣብ ክልተ ቦታ ዝደግም ጽሑፍን) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 p-4">
        {showLogoOnly ? (
          /* ኣብ Home ዝጥቀመሉ - ሎጎ ጥራሕ (ግን ኣብ ክልተ ቦታ ክምለስ እንተደሊኻ ነዚውን ከከም ድሌትካ ክልተ ክትገብሮ ትኽእል ኢኻ) */
          <div className="flex flex-col items-center justify-center select-none opacity-40 group-hover:opacity-75 transition-opacity duration-300">
            <img 
              src={adalLogo} 
              alt="Habesha Logo" 
              className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
            />
          </div>
        ) : (
          /* ኣብ ካልእ ቦታታት ዝጥቀመሉ - ሙሉእ ዋተርማርክ (ኣብ ክልተ ቦታ ዝደግም፡ ብቡኒ ጎልደን ሕብሪ) */
          <div className="w-full h-full flex flex-col justify-between items-center py-6 select-none opacity-45 group-hover:opacity-80 transition-opacity duration-300">
            
            {/* 🌟 እቲ ቀዳማይ (ኣብ ላዕሊ) */}
            <div className="flex flex-col items-center text-center transform -rotate-6">
              <img 
                src={adalLogo} 
                alt="Habesha Logo" 
                className="w-5 h-5 md:w-7 md:h-7 object-contain mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
              />
              <h2 className="text-sm md:text-xl font-serif font-bold tracking-[0.25em] uppercase text-[#d4af37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                Habesha Pictures
              </h2>
              <p className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase text-[#c59b27] font-semibold mt-0.5">
                Protected Gallery
              </p>
            </div>

            {/* 🌟 እቲ ካልኣይ (ኣብ ታሕቲ) */}
            <div className="flex flex-col items-center text-center transform -rotate-6">
              <img 
                src={adalLogo} 
                alt="Habesha Logo" 
                className="w-5 h-5 md:w-7 md:h-7 object-contain mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
              />
              <h2 className="text-sm md:text-xl font-serif font-bold tracking-[0.25em] uppercase text-[#d4af37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                Habesha Pictures
              </h2>
              <p className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase text-[#c59b27] font-semibold mt-0.5">
                Protected Gallery
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default ProtectedImage;