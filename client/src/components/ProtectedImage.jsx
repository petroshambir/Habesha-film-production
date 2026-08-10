


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

import React, { useState, useEffect } from 'react';

const ProtectedImage = ({ src, alt, className, onClick }) => {
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
          isTouched ? 'blur-md opacity-20' : ''
        }`}
      />

      {/* 2. መከላኸሊ ባዶ ምስሊ (Transparent Layer) */}
      <img 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
        alt="Protection Layer" 
        className="absolute inset-0 w-full h-full opacity-0 z-10"
      />

      {/* 3. ትኽክለኛ ሎጎን ዋተርማርክን (Bottom-Right Corner) */}
      <div className={`absolute bottom-3 right-3 transition-opacity duration-300 pointer-events-none z-20 ${
        isTouched ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
      }`}>
        <div className="bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2.5">
          <img 
            src="/adal-ogo.png" 
            alt="Habesha Logo" 
            className="w-7 h-7 object-contain bg-white/10 p-0.5 rounded"
          />
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold tracking-wider uppercase text-white leading-tight">
              Habesha Pictures
            </span>
            <span className="text-[8px] tracking-widest text-amber-400 uppercase font-semibold leading-tight">
              Protected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectedImage;