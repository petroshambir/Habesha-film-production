import React from 'react';

const ProtectedImage = ({ src, alt, className }) => {
  return (
    <div 
      className={`relative overflow-hidden select-none group ${className || ''}`}
      onContextMenu={(e) => e.preventDefault()} // የማናይ ጸወታ (Right-Click) ብጽኑዕ ይኽልክል
      onDragStart={(e) => e.preventDefault()}    // ብማውስ ሰሒብካ ንምውጻእ ይኽልክል
    >
      {/* 1. እቲ ትክክለኛ ምስሊ ብ Background መልክዕ ይቕመጥ (Save ክግበር ከሎ ምስሊ ንኸይወርድ) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 pointer-events-none"
        style={{ backgroundImage: `url(${src})` }}
      />

      {/* 2. መከላኸሊ ባዶ ምስሊ (Transparent Image) - ሰባት Save Image ክሉ እዚ ባዶ ባእታ እዩ ዝወርድ */}
      <img 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" 
        alt={alt || "Protected Image"} 
        className="w-full h-full opacity-0 pointer-events-none relative z-10"
      />

      {/* 3. ዋተርማርክ - ማውስ ናብቲ ስእሊ ኣብ ዝመጸሉ እዋን (Hover) ወይ ድማ ስክሪንሹት ንምውሳድ 
          ፈተነ ምስ ዝግበር ብግልጺ (opacity-50 ወይ opacity-80) ንርኢሉ ዓቕሚ */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none z-20">
        <span className="text-white text-base md:text-2xl font-bold tracking-widest rotate-[-30deg] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Habesha Film Production
        </span>
      </div>
    </div>
  );
};

export default ProtectedImage;