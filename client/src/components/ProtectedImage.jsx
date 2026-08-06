
// import React, { useEffect } from 'react';

// const ProtectedImage = ({ src, alt, className }) => {
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
//     >
//       {/* 1. እቲ ትክክለኛ ምስሊ 
//           - ኣብ ሞባይል ሰባት ክትንከፍ (active) ከሎ ምስሊ ብምሉእ ክድብዘዝን ብርሃኑ ክወርድን ተገይሩ ኣሎ (active:blur-md active:opacity-20) */}
//       <img 
//         src={src} 
//         alt={alt || "Protected Image"} 
//         className="w-full h-full object-cover pointer-events-none transition-all duration-200 active:blur-md active:opacity-20"
//       />

//       {/* 2. መከላኸሊ ባዶ ምስሊ (Transparent Layer) */}
//       <img 
//         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
//         alt="Protection Layer" 
//         className="absolute inset-0 w-full h-full opacity-0 z-10"
//       />

//       {/* 3. ዋተርማርክ - ብንቡር ግዜ (opacity-40) ኮይኑ፡ 
//           ኣብ ሞባይል ብኢድ ክትንከፍ ከሎ (active:opacity-100) ወይ ኣብ ፒሲ ማውስ ክቐርብ ከሎ (group-hover:opacity-100) 
//           ብዓቢውን ብግልጽን መጺኡ ነቲ ስእሊ ይሽፍኖ። */}
//       <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 active:opacity-100 transition-opacity duration-200 pointer-events-none z-20 bg-black/30">
//         <div className="flex flex-col items-center text-white rotate-[-30deg] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] p-4 text-center">
//           <svg className="w-16 h-16 mb-2 text-white/90" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5 7.71v2.99l-.893 1.786a1 1 0 00.447 1.344l3 1.5a1 1 0 00.893 0l3-1.5a1 1 0 00.447-1.344L15 10.7V7.71l2.394-1.79a1 1 0 000-1.84l-7-3zM12 11.476L9 12.976l-3-1.5v-1.8l2.606-1.954 3.606 2.705L12 11.476zM6 15.976v-1.8l.893-1.786L9 13.476l3 1.5v1.8l-2.606-1.954L6 15.976zM11 13.976l3-1.5v-1.8l2.394-1.79a1 1 0 000-1.84l-7-3a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5 7.71v2.99l-.893 1.786a1 1 0 00.447 1.344l3 1.5a1 1 0 00.893 0l3-1.5a1 1 0 00.447-1.344L15 10.7V7.71l2.394-1.79a1 1 0 000-1.84l-7-3z" />
//           </svg>
//           <span className="text-lg md:text-2xl font-bold tracking-widest uppercase">
//             Habesha Film
//           </span>
//           <span className="text-xs md:text-sm tracking-wider uppercase text-white/90">
//             Production - Protected
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProtectedImage;

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

//       {/* 3. ዋተርማርክ 
//           - ኣብ ሞባይል ክትንከፍ ከሎ (isTouched) ወይ ኣብ ፒሲ ማውስ ክቐርብ ከሎ (group-hover:opacity-100) ብግልጺ ይርአ */}
//       <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none z-20 bg-black/40 ${
//         isTouched ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'
//       }`}>
//         <div className="flex flex-col items-center text-white rotate-[-30deg] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] p-4 text-center">
//           <svg className="w-16 h-16 mb-2 text-white/90" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5 7.71v2.99l-.893 1.786a1 1 0 00.447 1.344l3 1.5a1 1 0 00.893 0l3-1.5a1 1 0 00.447-1.344L15 10.7V7.71l2.394-1.79a1 1 0 000-1.84l-7-3zM12 11.476L9 12.976l-3-1.5v-1.8l2.606-1.954 3.606 2.705L12 11.476zM6 15.976v-1.8l.893-1.786L9 13.476l3 1.5v1.8l-2.606-1.954L6 15.976zM11 13.976l3-1.5v-1.8l2.394-1.79a1 1 0 000-1.84l-7-3a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5 7.71v2.99l-.893 1.786a1 1 0 00.447 1.344l3 1.5a1 1 0 00.893 0l3-1.5a1 1 0 00.447-1.344L15 10.7V7.71l2.394-1.79a1 1 0 000-1.84l-7-3z" />
//           </svg>
//           <span className="text-lg md:text-2xl font-bold tracking-widest uppercase">
//             Habesha Film
//           </span>
//           <span className="text-xs md:text-sm tracking-wider uppercase text-white/90">
//             Production - Protected
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProtectedImage;

import React, { useEffect, useState } from 'react';

const ProtectedImage = ({ src, alt, className }) => {
  // ኣብ ሞባይል ክትንከፍ ከሎ ንምፍላጥ (Touch state)
  const [isTouched, setIsTouched] = useState(false);

  // ኣብ ፒሲ ስክሪንሹት ንምሕዛዝ ዝሕግዝ (PrintScreen ወይ Ctrl+Shift+S)
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
      className={`relative overflow-hidden select-none group ${className || ''}`}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      // ሞባይል ክትንከፍ ከሎ
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setTimeout(() => setIsTouched(false), 1500)} // ድሕሪ 1.5 ካልኢት ናብ ንቡር ይመልሶ
    >
      {/* 1. እቲ ትክክለኛ ምስሊ 
          - ኣብ ሞባይል (isTouched) ምስ ዝኸውን ወይ ኣብ ፒሲ (group-hover) ከሎ ይድብዘዝ */}
      <img 
        src={src} 
        alt={alt || "Protected Image"} 
        className={`w-full h-full object-cover pointer-events-none transition-all duration-300 ${
          isTouched ? 'blur-lg opacity-30 scale-105' : ''
        }`}
      />

      {/* 2. መከላኸሊ ባዶ ምስሊ (Transparent Layer) */}
      <img 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
        alt="Protection Layer" 
        className="absolute inset-0 w-full h-full opacity-0 z-10"
      />

      {/* 3. ዋተርማርክ 
          - ኣብ ሞባይል ክትንከፍ ከሎ (isTouched) ወይ ኣብ ፒሲ ማውስ ክቐርብ ከሎ (group-hover:opacity-100) ብግልጺ ይርአ */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none z-20 bg-black/60 ${
        isTouched ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'
      }`}>
        <div className="flex flex-col items-center text-white rotate-[-30deg] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] p-4 text-center">
          <svg className="w-16 h-16 mb-2 text-white/90" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5 7.71v2.99l-.893 1.786a1 1 0 00.447 1.344l3 1.5a1 1 0 00.893 0l3-1.5a1 1 0 00.447-1.344L15 10.7V7.71l2.394-1.79a1 1 0 000-1.84l-7-3zM12 11.476L9 12.976l-3-1.5v-1.8l2.606-1.954 3.606 2.705L12 11.476zM6 15.976v-1.8l.893-1.786L9 13.476l3 1.5v1.8l-2.606-1.954L6 15.976zM11 13.976l3-1.5v-1.8l2.394-1.79a1 1 0 000-1.84l-7-3a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5 7.71v2.99l-.893 1.786a1 1 0 00.447 1.344l3 1.5a1 1 0 00.893 0l3-1.5a1 1 0 00.447-1.344L15 10.7V7.71l2.394-1.79a1 1 0 000-1.84l-7-3z" />
          </svg>
          <span className="text-lg md:text-2xl font-bold tracking-widest uppercase">
            Habesha Film
          </span>
          <span className="text-xs md:text-sm tracking-wider uppercase text-white/90">
            Production - Protected
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProtectedImage;