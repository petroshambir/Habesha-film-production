

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
// // 
// export default Price;


import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Price() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // 1. ነቶም 4ቱ ፓኬታት ካብ localStorage ወይ ድማ ብነባሪ (Default) ክሕዞም ዝኽእል ስቴት
  const [packages, setPackages] = useState(() => {
    const saved = localStorage.getItem('myHabeshaPrices');
    return saved ? JSON.parse(saved) : {
      premium: {
        tag: 'Ultimate VIP',
        title: 'Premium',
        price: '$2,000+',
        desc: 'ዝለዓለ ደረጃ ሞያዊ ክእለትን ብርክት ዝበሉ መሳርሒታትን ተጠቒምካ ዝስራሕ ቪአይፒ ኣገልግሎት。',
        feat1: '✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)',
        feat2: '✓ ክልተ ኤክስፐርት ካሜራማን',
        feat3: '✓ Cinematic Color Grading & VFX',
        feat4: '🎁 ቦናስ: ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር'
      },
      gold: {
        tag: 'Exclusive',
        title: 'Gold',
        price: '300,000',
        services: 'ናይ ቀረጻ ኣገልግሎታት:\n• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)\n• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)\n• መዓልቲ መርዓ (5 ካሜራ: 4 ቪድዮ፣ 1 ፎቶ)\n• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)\n• ኩሉ ሶፍት ኮፒ (All Soft Copy)',
        item1: '✓ 800 ፎቶዎች (10×15)',
        item2: '✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)',
        item3: '✓ 2 ሳይን ቦርድ (30×45)',
        item4: '✓ 3 ቦርድ (50×80, 40×60, 30×45)',
        item5: '✓ 400 ምስጋና ካርድ (Thank You Card)',
        item6: '✓ 8 ዩኤስቢ ፍላሽ (64 GB)',
        item7: '✓ 2 ባነር',
        item8: '✓ 2 ራማ / ቆብዕ (Cap)'
      },
      silver: {
        tag: 'Advanced',
        title: 'Silver',
        price: '240,000',
        services: 'ናይ ቀረጻ ኣገልግሎታት:\n• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)\n• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)\n• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)\n• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)',
        item1: '✓ 500 ፎቶዎች (10×15)',
        item2: '✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)',
        item3: '✓ 1 ሳይን ቦርድ (30×45)',
        item4: '✓ 2 ቦርድ (50×80 & 40×60)',
        item5: '✓ 250 ምስጋና ካርድ (Thank You Card)',
        item6: '✓ 6 ዩኤስቢ ፍላሽ (64 GB)',
        item7: '✓ 2 ባነር',
        item8: '✓ 2 ራማ / ቆብዕ (Cap)'
      },
      standard: {
        tag: 'Standard',
        title: 'Standard',
        price: '190,000',
        services: 'ናይ ቀረጻ ኣገልግሎታት:\n• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)\n• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)\n• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)\n• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)',
        item1: '✓ 300 ፎቶዎች (10×15)',
        item2: '✓ 1 ላሚኔትድ ፎቶ (30×90)',
        item3: '✓ 1 ሳይን ቦርድ (30×45)',
        item4: '✓ 1 ቦርድ (50×80)',
        item5: '✓ 200 ምስጋና ካርድ (Thank You Card)',
        item6: '✓ 4 ዩኤስቢ ፍላሽ (64 GB)',
        item7: '✓ 2 ባነር',
        item8: '✓ 2 ራማ / ቆብዕ (Cap)'
      }
    };
  });

  useEffect(() => {
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
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://habesha-film-production-server.onrender.com/api/auth/verify-passcode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passcode }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsAuthenticated(true);
        const expiryDuration = 10 * 60 * 1000; 
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

  // 2. ለውጢ ክግበር ከሎ ንማሻመል (Update) ዝገብር ፈንክሽን
  const handleChange = (pkgKey, field, value) => {
    setPackages(prev => ({
      ...prev,
      [pkgKey]: {
        ...prev[pkgKey],
        [field]: value
      }
    }));
  };

  // 3. ሰቭ ንምግባር
  const handleSave = () => {
    localStorage.setItem('myHabeshaPrices', JSON.stringify(packages));
    alert('ለውጥታት ብሰላም ተዓቂሮም ኣለዉ!');
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
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
              <div></div>
              <div>
                <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
                  Investment & Tiers (Edit Mode Active)
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">Our Professional Packages</h1>
              </div>
              <button 
                onClick={handleSave}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-widest shadow-lg transition-all"
              >
                💾 Save Changes
              </button>
            </div>

            <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>
            <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
              ኣብቲ ዝደለኻዮ ሳጹን (Input) ብቐጥታ ብምጽሓፍ ለውጢ ግበር። ምስ ወዳእካውን ኣብ ላዕሊ ዘሎ "Save Changes" ጠቕዕ።
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              
              {/* 1. Premium Package */}
              <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between">
                <div>
                  <input 
                    type="text" 
                    value={packages.premium.tag}
                    onChange={(e) => handleChange('premium', 'tag', e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 p-1 text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557] rounded mb-2"
                  />
                  <input 
                    type="text" 
                    value={packages.premium.title}
                    onChange={(e) => handleChange('premium', 'title', e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 p-1 text-2xl font-serif mt-1 mb-2 text-zinc-100 rounded"
                  />
                  <input 
                    type="text" 
                    value={packages.premium.price}
                    onChange={(e) => handleChange('premium', 'price', e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 p-1 text-3xl font-serif font-bold text-[#dfb557] mb-6 rounded"
                  />
                  <textarea 
                    value={packages.premium.desc}
                    onChange={(e) => handleChange('premium', 'desc', e.target.value)}
                    rows={3}
                    className="w-full bg-zinc-900 border border-zinc-700 p-2 text-xs sm:text-sm text-zinc-300 mb-6 font-light leading-relaxed rounded resize-none"
                  />
                  <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-8 font-light">
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.premium.feat1.replace('✓ ', '')} onChange={(e) => handleChange('premium', 'feat1', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.premium.feat2.replace('✓ ', '')} onChange={(e) => handleChange('premium', 'feat2', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.premium.feat3.replace('✓ ', '')} onChange={(e) => handleChange('premium', 'feat3', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2 text-[#dfb557] font-medium"><input type="text" value={packages.premium.feat4} onChange={(e) => handleChange('premium', 'feat4', e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-[#dfb557]" /></li>
                  </ul>
                </div>
                <button className="w-full bg-zinc-900 border border-[#dfb557]/50 text-zinc-100 py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#dfb557] hover:text-black transition-all duration-300 rounded-xl shadow-md">
                  Select Premium
                </button>
              </div>

              {/* 2. Gold Package */}
              <div className="bg-zinc-950 border-2 border-[#dfb557] p-6 sm:p-8 rounded-2xl shadow-2xl relative flex flex-col justify-between">
                <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md z-10">
                  Top Tier
                </span>
                <div>
                  <input 
                    type="text" 
                    value={packages.gold.tag}
                    onChange={(e) => handleChange('gold', 'tag', e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 p-1 text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557] rounded mb-2"
                  />
                  <input 
                    type="text" 
                    value={packages.gold.title}
                    onChange={(e) => handleChange('gold', 'title', e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 p-1 text-2xl font-serif mt-1 mb-2 text-zinc-100 rounded"
                  />
                  <input 
                    type="text" 
                    value={packages.gold.price}
                    onChange={(e) => handleChange('gold', 'price', e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 p-1 text-3xl font-serif font-bold text-[#dfb557] mb-6 rounded"
                  />
                  
                  <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
                    <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
                    <textarea 
                      value={packages.gold.services}
                      onChange={(e) => handleChange('gold', 'services', e.target.value)}
                      rows={6}
                      className="w-full bg-zinc-900 border border-zinc-700 p-2 text-xs text-zinc-300 rounded resize-none"
                    />
                  </div>

                  <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-8 font-light">
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.gold.item1.replace('✓ ', '')} onChange={(e) => handleChange('gold', 'item1', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.gold.item2.replace('✓ ', '')} onChange={(e) => handleChange('gold', 'item2', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.gold.item3.replace('✓ ', '')} onChange={(e) => handleChange('gold', 'item3', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.gold.item4.replace('✓ ', '')} onChange={(e) => handleChange('gold', 'item4', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.gold.item5.replace('✓ ', '')} onChange={(e) => handleChange('gold', 'item5', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.gold.item6.replace('✓ ', '')} onChange={(e) => handleChange('gold', 'item6', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.gold.item7.replace('✓ ', '')} onChange={(e) => handleChange('gold', 'item7', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.gold.item8.replace('✓ ', '')} onChange={(e) => handleChange('gold', 'item8', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                  </ul>
                </div>
                <button className="w-full bg-[#dfb557] text-black py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 rounded-xl shadow-lg">
                  Select Gold
                </button>
              </div>

              {/* 3. Silver Package */}
              <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between">
                <div>
                  <input 
                    type="text" 
                    value={packages.silver.tag}
                    onChange={(e) => handleChange('silver', 'tag', e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 p-1 text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557] rounded mb-2"
                  />
                  <input 
                    type="text" 
                    value={packages.silver.title}
                    onChange={(e) => handleChange('silver', 'title', e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 p-1 text-2xl font-serif mt-1 mb-2 text-zinc-100 rounded"
                  />
                  <input 
                    type="text" 
                    value={packages.silver.price}
                    onChange={(e) => handleChange('silver', 'price', e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 p-1 text-3xl font-serif font-bold text-[#dfb557] mb-6 rounded"
                  />
                  
                  <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
                    <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
                    <textarea 
                      value={packages.silver.services}
                      onChange={(e) => handleChange('silver', 'services', e.target.value)}
                      rows={5}
                      className="w-full bg-zinc-900 border border-zinc-700 p-2 text-xs text-zinc-300 rounded resize-none"
                    />
                  </div>

                  <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-8 font-light">
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.silver.item1.replace('✓ ', '')} onChange={(e) => handleChange('silver', 'item1', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.silver.item2.replace('✓ ', '')} onChange={(e) => handleChange('silver', 'item2', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.silver.item3.replace('✓ ', '')} onChange={(e) => handleChange('silver', 'item3', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.silver.item4.replace('✓ ', '')} onChange={(e) => handleChange('silver', 'item4', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.silver.item5.replace('✓ ', '')} onChange={(e) => handleChange('silver', 'item5', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.silver.item6.replace('✓ ', '')} onChange={(e) => handleChange('silver', 'item6', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.silver.item7.replace('✓ ', '')} onChange={(e) => handleChange('silver', 'item7', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.silver.item8.replace('✓ ', '')} onChange={(e) => handleChange('silver', 'item8', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                  </ul>
                </div>
                <button className="w-full bg-zinc-900 border border-[#dfb557]/50 text-zinc-100 py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#dfb557] hover:text-black transition-all duration-300 rounded-xl shadow-md">
                  Select Silver
                </button>
              </div>

              {/* 4. Standard Package */}
              <div className="bg-zinc-950/70 border-2 border-[#dfb557]/30 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
                <div>
                  <input 
                    type="text" 
                    value={packages.standard.tag}
                    onChange={(e) => handleChange('standard', 'tag', e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 p-1 text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-400 rounded mb-2"
                  />
                  <input 
                    type="text" 
                    value={packages.standard.title}
                    onChange={(e) => handleChange('standard', 'title', e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 p-1 text-2xl font-serif mt-1 mb-2 text-zinc-100 rounded"
                  />
                  <input 
                    type="text" 
                    value={packages.standard.price}
                    onChange={(e) => handleChange('standard', 'price', e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 p-1 text-3xl font-serif font-bold text-[#dfb557] mb-6 rounded"
                  />
                  
                  <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
                    <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
                    <textarea 
                      value={packages.standard.services}
                      onChange={(e) => handleChange('standard', 'services', e.target.value)}
                      rows={5}
                      className="w-full bg-zinc-900 border border-zinc-700 p-2 text-xs text-zinc-300 rounded resize-none"
                    />
                  </div>

                  <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-8 font-light">
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.standard.item1.replace('✓ ', '')} onChange={(e) => handleChange('standard', 'item1', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.standard.item2.replace('✓ ', '')} onChange={(e) => handleChange('standard', 'item2', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.standard.item3.replace('✓ ', '')} onChange={(e) => handleChange('standard', 'item3', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.standard.item4.replace('✓ ', '')} onChange={(e) => handleChange('standard', 'item4', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.standard.item5.replace('✓ ', '')} onChange={(e) => handleChange('standard', 'item5', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.standard.item6.replace('✓ ', '')} onChange={(e) => handleChange('standard', 'item6', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.standard.item7.replace('✓ ', '')} onChange={(e) => handleChange('standard', 'item7', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                    <li className="flex items-center gap-2">✓ <input type="text" value={packages.standard.item8.replace('✓ ', '')} onChange={(e) => handleChange('standard', 'item8', '✓ ' + e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 p-1 rounded text-xs text-white" /></li>
                  </ul>
                </div>
                <button className="w-full bg-zinc-900 border border-[#dfb557]/50 text-zinc-100 py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#dfb557] hover:text-black transition-all duration-300 rounded-xl shadow-md">
                  Select Standard
                </button>
              </div>

            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Price;