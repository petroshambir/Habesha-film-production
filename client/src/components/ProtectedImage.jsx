

// import React from 'react';

// const ProtectedImage = ({ src, alt, className }) => {
//   return (
//     <div 
//       className={`relative overflow-hidden select-none group ${className || ''}`}
//       onContextMenu={(e) => e.preventDefault()}
//       onDragStart={(e) => e.preventDefault()}
//     >
//       {/* 1. እቲ ትክክለኛ ምስሊ */}
//       <img 
//         src={src} 
//         alt={alt || "Protected Image"} 
//         className="w-full h-full object-cover pointer-events-none"
//       />

//       {/* 2. መከላኸሊ ባዶ ምስሊ (Transparent Layer) */}
//       <img 
//         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
//         alt="Protection Layer" 
//         className="absolute inset-0 w-full h-full opacity-0 z-10"
//       />

//       {/* 3. ዋተርማርክ - ኣብ ኮምፒተር (Hover) ኣብ ሞባይል ድማ (Active / Touch) ምስ ዝትንከፍ ብግልጺ ይርአ */}
//       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50 active:opacity-60 transition-opacity duration-200 pointer-events-none z-20">
//         <div className="flex flex-col items-center text-white rotate-[-30deg] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
//           {/* ናይ ኩባንያኻ ሎጎ (SVG) */}
//           <svg className="w-12 h-12 mb-1 text-white/60" fill="currentColor" viewBox="0 0 20 20">
//             <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5 7.71v2.99l-.893 1.786a1 1 0 00.447 1.344l3 1.5a1 1 0 00.893 0l3-1.5a1 1 0 00.447-1.344L15 10.7V7.71l2.394-1.79a1 1 0 000-1.84l-7-3zM12 11.476L9 12.976l-3-1.5v-1.8l2.606-1.954 3.606 2.705L12 11.476zM6 15.976v-1.8l.893-1.786L9 13.476l3 1.5v1.8l-2.606-1.954L6 15.976zM11 13.976l3-1.5v-1.8l2.394-1.79a1 1 0 000-1.84l-7-3a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5 7.71v2.99l-.893 1.786a1 1 0 00.447 1.344l3 1.5a1 1 0 00.893 0l3-1.5a1 1 0 00.447-1.344L15 10.7V7.71l2.394-1.79a1 1 0 000-1.84l-7-3z" />
//           </svg>
//           <span className="text-sm md:text-xl font-bold tracking-widest uppercase">
//             Habesha Film
//           </span>
//           <span className="text-[10px] tracking-wider uppercase text-white/80">
//             Production
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProtectedImage;


import React from 'react';

const ProtectedImage = ({ src, alt, className }) => {
  return (
    <div 
      className={`relative overflow-hidden select-none group ${className || ''}`}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* 1. እቲ ትክክለኛ ምስሊ */}
      <img 
        src={src} 
        alt={alt || "Protected Image"} 
        className="w-full h-full object-cover pointer-events-none"
      />

      {/* 2. መከላኸሊ ባዶ ምስሊ (Transparent Layer) */}
      <img 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
        alt="Protection Layer" 
        className="absolute inset-0 w-full h-full opacity-0 z-10"
      />

      {/* 3. ዋተርማርክ */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-20">
        <div className="flex flex-col items-center text-white rotate-[-30deg] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          <svg className="w-12 h-12 mb-1 text-white/70" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5 7.71v2.99l-.893 1.786a1 1 0 00.447 1.344l3 1.5a1 1 0 00.893 0l3-1.5a1 1 0 00.447-1.344L15 10.7V7.71l2.394-1.79a1 1 0 000-1.84l-7-3zM12 11.476L9 12.976l-3-1.5v-1.8l2.606-1.954 3.606 2.705L12 11.476zM6 15.976v-1.8l.893-1.786L9 13.476l3 1.5v1.8l-2.606-1.954L6 15.976zM11 13.976l3-1.5v-1.8l2.394-1.79a1 1 0 000-1.84l-7-3a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5 7.71v2.99l-.893 1.786a1 1 0 00.447 1.344l3 1.5a1 1 0 00.893 0l3-1.5a1 1 0 00.447-1.344L15 10.7V7.71l2.394-1.79a1 1 0 000-1.84l-7-3z" />
          </svg>
          <span className="text-sm md:text-xl font-bold tracking-widest uppercase">
            Habesha Film
          </span>
          <span className="text-[10px] tracking-wider uppercase text-white/90">
            Production
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProtectedImage; 