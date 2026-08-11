

// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// function Price() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [passcode, setPasscode] = useState('');
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const authData = localStorage.getItem('priceAuthData');
//     if (authData) {
//       const { expiry } = JSON.parse(authData);
//       if (new Date().getTime() < expiry) {
//         setIsAuthenticated(true);
//       } else {
//         localStorage.removeItem('priceAuthData');
//         setIsAuthenticated(false);
//       }
//     }
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(false);

//     try {
//       const response = await fetch('https://habesha-film-production-server.onrender.com/api/auth/verify-passcode', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ passcode }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsAuthenticated(true);
//         const expiryDuration = 10 * 60 * 1000; 
//         const authData = {
//           value: 'true',
//           expiry: new Date().getTime() + expiryDuration,
//         };
//         localStorage.setItem('priceAuthData', JSON.stringify(authData));
//       } else {
//         setError(true);
//       }
//     } catch (err) {
//       console.error("Error verifying passcode:", err);
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden flex flex-col justify-between">
//       <Navbar />

//       <div className="flex-grow flex items-center justify-center px-4 py-32">
//         {!isAuthenticated ? (
//           <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center relative">
//             <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">
//               Secure Access
//             </span>
//             <h2 className="text-2xl md:text-3xl font-serif mb-3 text-zinc-100">Protected Price Page</h2>
//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>
//             <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">
//               እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።
//             </p>
            
//             <form onSubmit={handleLogin} className="space-y-4">
//               <input 
//                 type="password"
//                 placeholder="Enter Passcode"
//                 value={passcode}
//                 onChange={(e) => setPasscode(e.target.value)}
//                 className="w-full px-4 py-3 bg-zinc-900 border border-[#dfb557]/50 rounded-xl focus:outline-none focus:border-[#dfb557] text-center tracking-widest text-lg text-zinc-100 placeholder-zinc-500 shadow-inner"
//               />
//               <button 
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 disabled:opacity-50 rounded-xl shadow-lg"
//               >
//                 {loading ? 'Checking...' : 'Submit'}
//               </button>
//               {error && <p className="text-red-400 text-xs mt-2 font-medium">ጌጋ ፓስኮድ! ደጊምካ ፈትን።</p>}
//             </form>
//           </div>
//         ) : (
//           <div className="max-w-7xl mx-auto text-center px-4 py-12">
//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Investment & Tiers
//             </span>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">Our Professional Packages</h1>
//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>
//             <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
//               ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ደረጃታት እቲ ንደለይዎ ምረጹ።
//             </p>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              
//               {/* 1. Premium Package */}
//               <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between transition-transform hover:-translate-y-1">
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">Ultimate VIP</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">Premium</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">$2,000+</p>
//                   <p className="text-xs sm:text-sm text-zinc-300 mb-6 font-light leading-relaxed">
//                     ዝለዓለ ደረጃ ሞያዊ ክእለትን ብርክት ዝበሉ መሳርሒታትን ተጠቒምካ ዝስራሕ ቪአይፒ ኣገልግሎት።
//                   </p>
//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-8 font-light">
//                     <li className="flex items-center gap-2">✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)</li>
//                     <li className="flex items-center gap-2">✓ ክልተ ኤክስፐርት ካሜራማን</li>
//                     <li className="flex items-center gap-2">✓ <b className="font-semibold text-[#dfb557]">Cinematic Color Grading</b> & VFX</li>
//                     <li className="flex items-center gap-2 text-[#dfb557] font-medium">🎁 <b className="font-semibold">ቦናስ:</b> ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር</li>
//                   </ul>
//                 </div>
//                 <button className="w-full bg-zinc-900 border border-[#dfb557]/50 text-zinc-100 py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#dfb557] hover:text-black transition-all duration-300 rounded-xl shadow-md">
//                   Select Premium
//                 </button>
//               </div>

//               {/* 2. Gold Package */}
//               <div className="bg-zinc-950 border-2 border-[#dfb557] p-6 sm:p-8 rounded-2xl shadow-2xl relative flex flex-col justify-between transition-transform hover:-translate-y-1">
//                 <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
//                   Top Tier
//                 </span>
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">Exclusive</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">Gold</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">300,000</p>
                  
//                   <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
//                     <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
//                     <ul className="space-y-1 pl-1">
//                       <li>• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)</li>
//                       <li>• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)</li>
//                       <li>• መዓልቲ መርዓ (5 ካሜራ: 4 ቪድዮ፣ 1 ፎቶ)</li>
//                       <li>• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)</li>
//                       <li>• ኩሉ ሶፍት ኮፒ (All Soft Copy)</li>
//                     </ul>
//                   </div>

//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-8 font-light">
//                     <li className="flex items-center gap-2">✓ 800 ፎቶዎች (10×15)</li>
//                     <li className="flex items-center gap-2">✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)</li>
//                     <li className="flex items-center gap-2">✓ 2 ሳይን ቦርድ (30×45)</li>
//                     <li className="flex items-center gap-2">✓ 3 ቦርድ (50×80, 40×60, 30×45)</li>
//                     <li className="flex items-center gap-2">✓ 400 ምስጋና ካርድ (Thank You Card)</li>
//                     <li className="flex items-center gap-2">✓ 8 ዩኤስቢ ፍላሽ (64 GB)</li>
//                     <li className="flex items-center gap-2">✓ 2 ባነር</li>
//                     <li className="flex items-center gap-2">✓ 2 ራማ / ቆብዕ (Cap)</li>
//                   </ul>
//                 </div>
//                 <button className="w-full bg-[#dfb557] text-black py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 rounded-xl shadow-lg">
//                   Select Gold
//                 </button>
//               </div>

//               {/* 3. Silver Package */}
//               <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between transition-transform hover:-translate-y-1">
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">Advanced</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">Silver</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">240,000</p>
                  
//                   <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
//                     <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
//                     <ul className="space-y-1 pl-1">
//                       <li>• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)</li>
//                       <li>• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)</li>
//                       <li>• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)</li>
//                       <li>• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)</li>
//                     </ul>
//                   </div>

//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-8 font-light">
//                     <li className="flex items-center gap-2">✓ 500 ፎቶዎች (10×15)</li>
//                     <li className="flex items-center gap-2">✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)</li>
//                     <li className="flex items-center gap-2">✓ 1 ሳይን ቦርድ (30×45)</li>
//                     <li className="flex items-center gap-2">✓ 2 ቦርድ (50×80 & 40×60)</li>
//                     <li className="flex items-center gap-2">✓ 250 ምስጋና ካርድ (Thank You Card)</li>
//                     <li className="flex items-center gap-2">✓ 6 ዩኤስቢ ፍላሽ (64 GB)</li>
//                     <li className="flex items-center gap-2">✓ 2 ባነር</li>
//                     <li className="flex items-center gap-2">✓ 2 ራማ / ቆብዕ (Cap)</li>
//                   </ul>
//                 </div>
//                 <button className="w-full bg-zinc-900 border border-[#dfb557]/50 text-zinc-100 py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#dfb557] hover:text-black transition-all duration-300 rounded-xl shadow-md">
//                   Select Silver
//                 </button>
//               </div>

//               {/* 4. Standard Package */}
//               <div className="bg-zinc-950/70 border-2 border-[#dfb557]/30 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between transition-transform hover:-translate-y-1">
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-400">Standard</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">Standard</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">190,000</p>
                  
//                   <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
//                     <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
//                     <ul className="space-y-1 pl-1">
//                       <li>• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)</li>
//                       <li>• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)</li>
//                       <li>• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)</li>
//                       <li>• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)</li>
//                     </ul>
//                   </div>

//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-8 font-light">
//                     <li className="flex items-center gap-2">✓ 300 ፎቶዎች (10×15)</li>
//                     <li className="flex items-center gap-2">✓ 1 ላሚኔትድ ፎቶ (30×90)</li>
//                     <li className="flex items-center gap-2">✓ 1 ሳይን ቦርድ (30×45)</li>
//                     <li className="flex items-center gap-2">✓ 1 ቦርድ (50×80)</li>
//                     <li className="flex items-center gap-2">✓ 200 ምስጋና ካርድ (Thank You Card)</li>
//                     <li className="flex items-center gap-2">✓ 4 ዩኤስቢ ፍላሽ (64 GB)</li>
//                     <li className="flex items-center gap-2">✓ 2 ባነር</li>
//                     <li className="flex items-center gap-2">✓ 2 ራማ / ቆብዕ (Cap)</li>
//                   </ul>
//                 </div>
//                 <button className="w-full bg-zinc-900 border border-[#dfb557]/50 text-zinc-100 py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#dfb557] hover:text-black transition-all duration-300 rounded-xl shadow-md">
//                   Select Standard
//                 </button>
//               </div>

//             </div>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Price;

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Price() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [packages, setPackages] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    // 1. Check local storage authentication
    const authData = localStorage.getItem('priceAuthData');
    if (authData) {
      const { expiry } = JSON.parse(authData);
      if (new Date().getTime() < expiry) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('priceAuthData');
        setIsAuthenticated(false);
      }
    }

    // 2. Fetch packages from backend
    fetch('https://habesha-film-production-server.onrender.com/api/packages')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setPackages(data);
        }
        setPageLoading(false);
      })
      .catch(err => {
        console.error("Error fetching packages:", err);
        setPageLoading(false);
      });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://habesha-film-production-server.onrender.com/api/auth/verify-price-passcode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passcode: passcode.trim() }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsAuthenticated(true);
        const expiryDuration = 10 * 60 * 1000; // 10 minutes
        const authData = {
          value: 'true',
          expiry: new Date().getTime() + expiryDuration,
        };
        localStorage.setItem('priceAuthData', JSON.stringify(authData));
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Error verifying passcode:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden flex flex-col justify-between">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4 py-32">
        {!isAuthenticated ? (
          <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center relative">
            <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">
              Secure Access
            </span>
            <h2 className="text-2xl md:text-3xl font-serif mb-3 text-zinc-100">Protected Price Page</h2>
            <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>
            <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">
              እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።
            </p>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <input 
                type="password"
                placeholder="Enter Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-900 border border-[#dfb557]/50 rounded-xl focus:outline-none focus:border-[#dfb557] text-center tracking-widest text-lg text-zinc-100 placeholder-zinc-500 shadow-inner"
              />
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 disabled:opacity-50 rounded-xl shadow-lg"
              >
                {loading ? 'Checking...' : 'Submit'}
              </button>
              {error && <p className="text-red-400 text-xs mt-2 font-medium">ጌጋ ፓስኮድ! ደጊምካ ፈትን።</p>}
            </form>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">
            <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
              Investment & Tiers
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">Our Professional Packages</h1>
            <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>
            <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
              ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ደረጃታት እቲ ንደለይዎ ምረጹ።
            </p>
            
            {pageLoading ? (
              <p className="text-zinc-500 text-sm">Loading packages...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {packages.map((pkg) => (
                  <div 
                    key={pkg._id || pkg.name} 
                    className={`bg-zinc-950 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between transition-transform hover:-translate-y-1 relative ${
                      pkg.isTopTier ? 'border-2 border-[#dfb557]' : 'border-2 border-[#dfb557]/50'
                    }`}
                  >
                    {pkg.isTopTier && (
                      <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
                        Top Tier
                      </span>
                    )}
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">{pkg.subtitle}</span>
                      <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{pkg.name}</h3>
                      <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{pkg.price}</p>
                      
                      {pkg.description && (
                        <p className="text-xs sm:text-sm text-zinc-300 mb-6 font-light leading-relaxed">
                          {pkg.description}
                        </p>
                      )}

                      <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-8 font-light">
                        {pkg.features && pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">✓ {feature}</li>
                        ))}
                      </ul>
                    </div>
                    <button className="w-full bg-[#dfb557] text-black py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 rounded-xl shadow-lg">
                      Select {pkg.name}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Price;