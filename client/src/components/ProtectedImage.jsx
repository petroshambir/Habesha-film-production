import React, { useState } from 'react';

function ProtectedImage({ src, alt, title, subtitle }) {
  const [showAlert, setShowAlert] = useState(false);

  // ዝኾነ ሰብ ራይት ክሊክ፡ ሎንግ-ፕረስ ወይ ስእሊ ክዝሕት/ክሰቅል ምስ ፈተነ ክታሓዞ ዝኽእል
  const handleProtectedAction = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2500); // ድሕሪ 2.5 ካልኢት እቲ መልእኽቲ ይጠፍእ
  };

  return (
    <div 
      className="group relative bg-zinc-950 border border-[#dfb557]/20 rounded-2xl overflow-hidden shadow-xl select-none"
      onContextMenu={handleProtectedAction} // ራይት ክሊክ ይኽልክል
      onCopy={handleProtectedAction}        // ኮፒ ምግባር ይኽልክል
      onDragStart={handleProtectedAction}   // ስኢልካ ናብ ካልእ ቦታ ጎቲትካ ምውሳድ ይኽልክል
    >
      
      {/* 1. እቲ ስእሊ (Pointer Events ተዓጺዩ ስለዘሎ: ክለኣኽ፣ ክሰፈን ወይ ክርከብ ኣይክእልን) */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none"
          draggable="false"
        />

        {/* 2. Watermark Overlay (ኣብ ማእከል ስእሊ ብዓቢዩ ዝረአ ሳምቢል) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
          <div className="transform -rotate-12 px-6 py-2.5 border-2 border-[#dfb557]/40 bg-black/50 backdrop-blur-[2px] rounded-xl shadow-2xl">
            <span className="text-xs md:text-sm font-serif font-bold text-[#dfb557]/70 tracking-[0.3em] uppercase">
              Habesha Pictures • Protected
            </span>
          </div>
        </div>

        {/* 3. Invisible Shield Layer (ዝኾነ ናይ ሼር፡ ዳውንሎድ ወይ ራይት-ክሊክ ፈተና ኣብዚ ይዕጸዎ) */}
        <div 
          className="absolute inset-0 z-20 bg-transparent cursor-default"
          onContextMenu={handleProtectedAction}
          onClick={(e) => {
            // ኣብ ሞባይል ሎንግ-ፕረስ (Long Press) ንምክልካል
            if (e.detail === 0) handleProtectedAction(e);
          }}
        ></div>

        {/* 4. መጠንቀቕታ መልእኽቲ (ተጠቃሚ ኮፒ ወይ ዳውንሎድ ምስ ዝፍትን ዝረአ) */}
        {showAlert && (
          <div className="absolute inset-x-4 bottom-4 z-30 bg-black/90 border border-[#dfb557] px-4 py-2.5 rounded-xl text-center shadow-2xl animate-fade-in">
            <p className="text-[11px] font-serif text-[#dfb557] tracking-wider">
              ⚠️ እዚ ስእሊ ብሕጊ ዝተሐለወ እዩ (Protected Content)
            </p>
          </div>
        )}
      </div>

      {/* Title & Subtitle */}
      {title && (
        <div className="p-5 text-left bg-gradient-to-t from-zinc-950 to-zinc-900/80">
          {subtitle && (
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#dfb557]">
              {subtitle}
            </span>
          )}
          <h4 className="text-lg font-serif text-zinc-100 mt-1">{title}</h4>
        </div>
      )}

    </div>
  );
}

export default ProtectedImage;