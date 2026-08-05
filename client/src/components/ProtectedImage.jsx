import React, { useState } from 'react';

const ProtectedImage = ({ src, alt, className }) => {
  const [isProtected, setIsProtected] = useState(false);

  // ሰባት ስክሪንሹት ንምግባር ሰለ ዝሓስቡ ወይ ኮፒ ንምግባር ክጽዕሩ ከለዉ ዋተርማርክ ንምርኣይ
  const handleMouseEnter = () => {
    // ኣብዚ ንእሽቶ ጸቕጢ ወይ ድማ ኣንጻር ቅዳሕ (Blur) ንምግባር ክለዋወጥ ይኽእል
  };

  return (
    <div 
      className="relative overflow-hidden group select-none"
      onContextMenu={(e) => e.preventDefault()} // የማናይ ጸወታ ከልከል
    >
      {/* እቲ ዋና ስእሊ */}
      <img 
        src={src} 
        alt={alt || "Protected Image"} 
        className={`${className} pointer-events-none`} // ብቐጻሊ ብማውስ ድራግ ወይ ሴቭ ንኸይግበር
        onDragStart={(e) => e.preventDefault()}
      />

      {/* ዋተርማርክ - ስክሪንሹት ወይ መጥቃዕቲ ቅዳሕ ምስ ዝህሉ ጥራይ ብግልጽ ንምውጻእ 
          ብ CSS print / screenshot detection ወይ ድማ ብማውስ Hover ግዜ ክረአ እንተደሊኻ ክዕረ ይኽእል */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
        <span className="text-white text-lg font-bold tracking-widest rotate-[-30deg] uppercase drop-shadow-md">
          Habesha Film Production
        </span>
      </div>
    </div>
  );
};

export default ProtectedImage;