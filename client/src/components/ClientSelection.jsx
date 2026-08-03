import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ClientSelection() {
  const [passcode, setPasscode] = useState('');
  const [project, setProject] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // 1. ፓስኮድ ኣእቲኻ ናብቲ ስእሊታት ምእታው (Login)
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://habesha-film-production-server.onrender.com/api/client/verify-client-passcode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setProject(data.project);
        setSelectedImages(data.project.selectedImages || []);
      } else {
        setError(data.message || 'ይቕሬታ፣ ክሕለፍ ኣይፍቀድን እዩ (Invalid Passcode)');
      }
    } catch (err) {
      console.error("Login error:", err);
      setError('ሰርቨር ጌጋ ኣጋጢሙ ኣሎ። ደጊምካ ፈትን።');
    } finally {
      setLoading(false);
    }
  };

  // 2. ስእሊ ምስ ተመረጸ/ተሰረዘ (Checkbox Toggle)
  const handleCheckboxChange = (imageUrl) => {
    if (selectedImages.includes(imageUrl)) {
      setSelectedImages(selectedImages.filter(img => img !== imageUrl));
    } else {
      setSelectedImages([...selectedImages, imageUrl]);
    }
  };

  // 3. ዝተመረጸ ስእሊታት ናብ ስቱድዮ ምልኣክ (Submit Selection)
  const handleSubmitSelection = async () => {
    if (selectedImages.length === 0) {
      alert('ብዘይውሕድ ሓደ ስእሊ ክትመርጽ ኣለካ!');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://habesha-film-production-server.onrender.com/api/client/submit-selection/${project._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedImages }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        alert('ምልኣክ ኣይከኣለን። ደጊምካ ፈትን።');
      }
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-zinc-900 font-sans flex flex-col justify-between">
      <Navbar />

      <div className="flex-grow flex flex-col items-center justify-center px-4 py-24">
        
        {/* 1. PASSCODE LOGIN SCREEN */}
        {!project ? (
          <div className="bg-white p-8 md:p-12 shadow-2xl border border-zinc-200 max-w-md w-full text-center">
            <h2 className="text-2xl font-serif mb-2 text-zinc-900">Client Photo Selection</h2>
            <p className="text-sm text-zinc-600 mb-6">በጃኹም ኣብቲ ስቱድዮ ዝተዋህበኩም ፓስኮድ ኣብዚ ኣእትዉ።</p>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <input 
                type="text"
                placeholder="Enter Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-zinc-900 text-center tracking-widest text-lg uppercase"
                required
              />
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-zinc-900 text-white py-3 uppercase text-xs font-bold tracking-widest hover:bg-zinc-800 transition-colors disabled:opacity-50"
              >
                {loading ? 'Checking...' : 'Enter Gallery'}
              </button>
              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </form>
          </div>
        ) : submitted ? (
          /* 2. SUCCESS SCREEN AFTER SUBMISSION */
          <div className="bg-white p-10 shadow-xl border border-zinc-200 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
            <h2 className="text-2xl font-serif mb-2 text-zinc-900">ምርጫኹም ብዕወት ተሰዲዱ ኣሎ!</h2>
            <p className="text-sm text-zinc-600 mb-6">
              ንሕና ነቲ ዝመረጽኩዎም <b>{selectedImages.length}</b> ስእሊታት ተቐቢልና ኤዲቲንግ ክንጅምር ኢና። ነቲ ፎልደር ክንዓጽዎ ኢና፣ ነቲ ዝሰርሕዎ ስራሕ ድማ ብቐረባ ክንሕብረኩም ኢና።
            </p>
          </div>
        ) : (
          /* 3. INTERACTIVE GALLERY & CHECKBOX SELECTION */
          <div className="max-w-7xl w-full mx-auto px-4">
            
            {/* Header with Sticky Counter Box */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b pb-6 sticky top-20 bg-[#fcfbf9] z-10 py-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-amber-600">Welcome, {project.clientName}</span>
                <h1 className="text-3xl font-serif text-zinc-900">Portal #{project.portalNumber} - Photo Selection</h1>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center gap-4">
                <div className="bg-zinc-900 text-white px-6 py-3 rounded-none shadow-md text-sm font-medium">
                  Selected Images: <span className="text-amber-400 font-bold text-lg">{selectedImages.length}</span>
                </div>
                <button 
                  onClick={handleSubmitSelection}
                  disabled={loading || selectedImages.length === 0}
                  className="bg-amber-600 text-white px-6 py-3 text-xs uppercase font-bold tracking-widest hover:bg-amber-700 transition-colors disabled:opacity-50 shadow-md"
                >
                  {loading ? 'Sending...' : 'Send to Studio'}
                </button>
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {project.images.map((imgUrl, index) => {
                const isSelected = selectedImages.includes(imgUrl);
                return (
                  <div 
                    key={index} 
                    onClick={() => handleCheckboxChange(imgUrl)}
                    className={`relative group cursor-pointer overflow-hidden border-2 transition-all ${
                      isSelected ? 'border-amber-600 shadow-lg scale-[0.98]' : 'border-transparent hover:border-zinc-300'
                    }`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Client photo ${index + 1}`} 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Checkbox Overlay */}
                    <div className="absolute top-3 right-3">
                      <input 
                        type="checkbox" 
                        checked={isSelected}
                        onChange={() => {}} // Handled by parent div click
                        className="w-5 h-5 accent-amber-600 cursor-pointer pointer-events-none"
                      />
                    </div>

                    {/* Selected Badge */}
                    {isSelected && (
                      <div className="absolute inset-0 bg-amber-600/20 pointer-events-none flex items-center justify-center">
                        <span className="bg-amber-600 text-white text-[10px] uppercase font-bold px-2 py-1 tracking-widest shadow">
                          Selected
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ClientSelection;