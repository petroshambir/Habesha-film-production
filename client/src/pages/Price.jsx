
// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// function Price() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [passcode, setPasscode] = useState('');
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [adminPasscode, setAdminPasscode] = useState('');
//   const [isEditGateOpen, setIsEditGateOpen] = useState(false);
//   const [adminError, setAdminError] = useState(false);

//   const defaultPackages = {
//     premium: { 
//       tier: 'Ultimate VIP', 
//       name: 'Premium', 
//       price: '$1,000+', 
//       desc: 'ዝለዓለ ደረጃ ሞያዊ ክእለትን ብርክት ዝበሉ መሳርሒታትን ተጠቒምካ ዝስራሕ ቪአይፒ ኣገልግሎት።', 
//       services: [], 
//       features: [
//         '✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)',
//         '✓ ክልተ ኤክስፐርት ካሜራማን',
//         '✓ Cinematic Color Grading & VFX',
//         '🎁 ቦናስ: ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር'
//       ] 
//     },
//     gold: { 
//       tier: 'Top Tier', 
//       name: 'Gold', 
//       price: '300,000', 
//       desc: '', 
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (5 ካሜራ: 4 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)',
//         '• ኩሉ ሶፍት ኮፒ (All Soft Copy)'
//       ], 
//       features: [
//         '✓ 800 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)',
//         '✓ 2 ሳይን ቦርድ (30×45)',
//         '✓ 3 ቦርድ (50×80, 40×60, 30×45)',
//         '✓ 400 ምስጋና ካርድ (Thank You Card)',
//         '✓ 8 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)'
//       ] 
//     },
//     silver: { 
//       tier: 'Advanced', 
//       name: 'Silver', 
//       price: '240,000', 
//       desc: '', 
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)'
//       ], 
//       features: [
//         '✓ 500 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 2 ቦርድ (50×80 & 40×60)',
//         '✓ 250 ምስጋና ካርድ (Thank You Card)',
//         '✓ 6 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)'
//       ] 
//     },
//     standard: { 
//       tier: 'Standard', 
//       name: 'Standard', 
//       price: '190,000', 
//       desc: '', 
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)'
//       ], 
//       features: [
//         '✓ 300 ፎቶዎች (10×15)',
//         '✓ 1 ላሚኔትድ ፎቶ (30×90)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 1 ቦርድ (50×80)',
//         '✓ 200 ምስጋና ካርድ (Thank You Card)',
//         '✓ 4 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)'
//       ] 
//     },
//   };

//   const [packages, setPackages] = useState(defaultPackages);
//   const [tempPackages, setTempPackages] = useState(defaultPackages);

//   // ዳታ ካብ ሰርቨር ንምውራድን Authentication ንምፍታሽን
//   useEffect(() => {
//     fetch('https://habesha-film-production-server.onrender.com/api/packages')
//       .then(res => res.json())
//       .then(data => {
//         if (data) {
//           const mergedData = {
//             premium: { ...defaultPackages.premium, ...data.premium },
//             gold: { ...defaultPackages.gold, ...data.gold },
//             silver: { ...defaultPackages.silver, ...data.silver },
//             standard: { ...defaultPackages.standard, ...data.standard },
//           };
//           setPackages(mergedData);
//           setTempPackages(mergedData);
//         }
//       })
//       .catch(err => console.log("Failed to fetch packages:", err));

//     const authData = localStorage.getItem('priceAuthData');
//     if (authData) {
//       try {
//         const { expiry } = JSON.parse(authData);
//         if (new Date().getTime() < expiry) {
//           setIsAuthenticated(true);
//         } else {
//           localStorage.removeItem('priceAuthData');
//           setIsAuthenticated(false);
//         }
//       } catch (e) {
//         localStorage.removeItem('priceAuthData');
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
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ passcode }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsAuthenticated(true);
//         const expiryDuration = 10 * 60 * 1000; 
//         const authData = { value: 'true', expiry: new Date().getTime() + expiryDuration };
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

//   const handleEditGateSubmit = (e) => {
//     e.preventDefault();
//     if (adminPasscode === 'ADMIN2026') { 
//       setIsEditGateOpen(true);
//       setIsEditMode(true);
//       setAdminError(false);
//       setAdminPasscode('');
//     } else {
//       setAdminError(true);
//     }
//   };

//   // ዳታ ናብ ሰርቨር ንምልኣኽ
//   const handleSaveAndExit = async () => {
//     try {
//       const response = await fetch('https://habesha-film-production-server.onrender.com/api/packages/update', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(tempPackages),
//       });

//       if (response.ok) {
//         setPackages(tempPackages);
//         alert("ዳታ ብሰላም ተሰዲዱ ኣብ ኩሉ ዲቫይስ ክረአ እዩ!");
//       } else {
//         alert("ሰርቨር ጌጋ ኣለዎ።");
//       }
//     } catch (err) {
//       console.error("Error saving to server:", err);
//       alert("ዳታ ናብ ሰርቨር ምልኣኽ ኣይከኣለን።");
//     }
    
//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   const handleCancelEdit = () => {
//     setTempPackages(packages);
//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden flex flex-col justify-between">
//       <Navbar />

//       <div className="flex-grow flex items-center justify-center px-4 py-32">
//         {!isAuthenticated ? (
//           <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center relative">
//             <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">Secure Access</span>
//             <h2 className="text-2xl md:text-3xl font-serif mb-3 text-zinc-100">Protected Price Page</h2>
//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>
//             <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።</p>
            
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
//         ) : isEditMode ? (
//           <div className="max-w-5xl mx-auto text-center px-4 py-12 w-full">
//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">Administration Mode</span>
//             <h1 className="text-3xl font-serif mb-4 text-zinc-100">Edit Packages & Prices</h1>
//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-8"></div>
            
//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl space-y-6 text-left shadow-2xl">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {Object.keys(tempPackages).map((key) => {
//                   const pkg = tempPackages[key];
//                   return (
//                     <div key={key} className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 space-y-3">
//                       <h3 className="text-sm font-bold uppercase text-[#dfb557]">{key} Package</h3>
                      
//                       <div>
//                         <label className="text-[10px] uppercase text-zinc-400 font-semibold block">Tier Title</label>
//                         <input 
//                           value={pkg.tier || ''} 
//                           onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, tier: e.target.value}})}
//                           className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100"
//                         />
//                       </div>

//                       <div>
//                         <label className="text-[10px] uppercase text-zinc-400 font-semibold block">Name</label>
//                         <input 
//                           value={pkg.name || ''} 
//                           onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, name: e.target.value}})}
//                           className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100"
//                         />
//                       </div>

//                       <div>
//                         <label className="text-[10px] uppercase text-zinc-400 font-semibold block">Price</label>
//                         <input 
//                           value={pkg.price || ''} 
//                           onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, price: e.target.value}})}
//                           className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold text-[#dfb557]"
//                         />
//                       </div>

//                       {key === 'premium' && (
//                         <div>
//                           <label className="text-[10px] uppercase text-zinc-400 font-semibold block">Description</label>
//                           <textarea 
//                             rows="2"
//                             value={pkg.desc || ''} 
//                             onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, desc: e.target.value}})}
//                             className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100"
//                           />
//                         </div>
//                       )}

//                       {pkg.services && (
//                         <div>
//                           <label className="text-[10px] uppercase text-zinc-400 font-semibold block">Services (Newline separated)</label>
//                           <textarea 
//                             rows="4"
//                             value={(pkg.services || []).join('\n')} 
//                             onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, services: e.target.value.split('\n')}})}
//                             className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100"
//                           />
//                         </div>
//                       )}

//                       <div>
//                         <label className="text-[10px] uppercase text-zinc-400 font-semibold block">Features List (Newline separated)</label>
//                         <textarea 
//                           rows="5"
//                           value={(pkg.features || []).join('\n')} 
//                           onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, features: e.target.value.split('\n')}})}
//                           className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100"
//                         />
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="flex justify-end gap-4 pt-4 border-t border-zinc-900">
//                 <button onClick={handleCancelEdit} className="px-6 py-3 bg-zinc-900 text-zinc-300 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all">Cancel</button>
//                 <button onClick={handleSaveAndExit} className="px-6 py-3 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45] transition-all">Save Changes</button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">
//             <div className="flex justify-end mb-4">
//               {!isEditGateOpen ? (
//                 <div className="flex flex-col items-end">
//                   <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-[#dfb557]/40 shadow-lg">
//                     <input 
//                       type="password"
//                       placeholder="Admin Code"
//                       value={adminPasscode}
//                       onChange={(e) => setAdminPasscode(e.target.value)}
//                       className="bg-transparent text-zinc-100 text-xs px-2 focus:outline-none w-28"
//                     />
//                     <button onClick={handleEditGateSubmit} className="px-3 py-1.5 bg-[#dfb557] text-black rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#c99f45] transition-all">Unlock</button>
//                   </div>
//                   {adminError && <p className="text-red-400 text-[10px] mt-1 font-medium">Wrong Admin Code!</p>}
//                 </div>
//               ) : (
//                 <button onClick={() => setIsEditMode(true)} className="px-4 py-2 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-semibold tracking-widest shadow-md hover:bg-[#c99f45] transition-all">Enter Edit Mode ⚙️</button>
//               )}
//             </div>

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">Investment & Tiers</span>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">Our Professional Packages</h1>
//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>
//             <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
//               ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ደረጃታት እቲ ንደለይዎ ምረጹ።
//             </p>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              
//               {/* 1. Premium Package */}
//               <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between transition-transform hover:-translate-y-1">
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">{packages.premium.tier}</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.premium.name}</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.premium.price}</p>
//                   <p className="text-xs sm:text-sm text-zinc-300 mb-6 font-light leading-relaxed">{packages.premium.desc}</p>
//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-8 font-light">
//                     {(packages.premium.features || []).map((feat, idx) => (
//                       <li key={idx} className="flex items-center gap-2">{feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <button className="w-full bg-zinc-900 border border-[#dfb557]/50 text-zinc-100 py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#dfb557] hover:text-black transition-all duration-300 rounded-xl shadow-md">
//                   Select {packages.premium.name}
//                 </button>
//               </div>

//               {/* 2. Gold Package */}
//               <div className="bg-zinc-950 border-2 border-[#dfb557] p-6 sm:p-8 rounded-2xl shadow-2xl relative flex flex-col justify-between transition-transform hover:-translate-y-1">
//                 <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
//                   {packages.gold.tier}
//                 </span>
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">Exclusive</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.gold.name}</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.gold.price}</p>
                  
//                   {packages.gold.services && packages.gold.services.length > 0 && (
//                     <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
//                       <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
//                       <ul className="space-y-1 pl-1">
//                         {packages.gold.services.map((srv, idx) => (
//                           <li key={idx}>{srv}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-8 font-light">
//                     {(packages.gold.features || []).map((feat, idx) => (
//                       <li key={idx} className="flex items-center gap-2">{feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <button className="w-full bg-[#dfb557] text-black py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 rounded-xl shadow-lg">
//                   Select {packages.gold.name}
//                 </button>
//               </div>

//               {/* 3. Silver Package */}
//               <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between transition-transform hover:-translate-y-1">
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">{packages.silver.tier}</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.silver.name}</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.silver.price}</p>
                  
//                   {packages.silver.services && packages.silver.services.length > 0 && (
//                     <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
//                       <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
//                       <ul className="space-y-1 pl-1">
//                         {packages.silver.services.map((srv, idx) => (
//                           <li key={idx}>{srv}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-8 font-light">
//                     {(packages.silver.features || []).map((feat, idx) => (
//                       <li key={idx} className="flex items-center gap-2">{feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <button className="w-full bg-zinc-900 border border-[#dfb557]/50 text-zinc-100 py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#dfb557] hover:text-black transition-all duration-300 rounded-xl shadow-md">
//                   Select {packages.silver.name}
//                 </button>
//               </div>

//               {/* 4. Standard Package */}
//               <div className="bg-zinc-950/70 border-2 border-[#dfb557]/30 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between transition-transform hover:-translate-y-1">
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-400">{packages.standard.tier}</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.standard.name}</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.standard.price}</p>
                  
//                   {packages.standard.services && packages.standard.services.length > 0 && (
//                     <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
//                       <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
//                       <ul className="space-y-1 pl-1">
//                         {packages.standard.services.map((srv, idx) => (
//                           <li key={idx}>{srv}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-8 font-light">
//                     {(packages.standard.features || []).map((feat, idx) => (
//                       <li key={idx} className="flex items-center gap-2">{feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <button className="w-full bg-zinc-900 border border-[#dfb557]/50 text-zinc-100 py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#dfb557] hover:text-black transition-all duration-300 rounded-xl shadow-md">
//                   Select {packages.standard.name}
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


// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// function Price() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [passcode, setPasscode] = useState('');
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [adminPasscode, setAdminPasscode] = useState('');
//   const [isEditGateOpen, setIsEditGateOpen] = useState(false);
//   const [adminError, setAdminError] = useState(false);

//   // --- Customer Selection & Booking Form Modal State ---
//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
//   const [customerName, setCustomerName] = useState('');
//   const [bookingDate, setBookingDate] = useState('');

//   // --- Editable Fields Inside Modal / Notebook Booking ---
//   const [customizedPrice, setCustomizedPrice] = useState('');
//   const [customizedDesc, setCustomizedDesc] = useState('');

//   // --- Admin Notebook State ---
//   const [notebookList, setNotebookList] = useState([]);
//   const [editingNoteId, setEditingNoteId] = useState(null);

//   const defaultPackages = {
//     premium: { 
//       tier: 'Ultimate VIP', 
//       name: 'Premium', 
//       price: '$1,000+', 
//       desc: 'ዝለዓለ ደረጃ ሞያዊ ክእለትን ብርክት ዝበሉ መሳርሒታትን ተጠቒምካ ዝስራሕ ቪአይፒ ኣገልግሎት።', 
//       services: [], 
//       features: [
//         '✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)',
//         '✓ ክልተ ኤክስፐርት ካሜራማን',
//         '✓ Cinematic Color Grading & VFX',
//         '🎁 ቦናስ: ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር'
//       ] 
//     },
//     gold: { 
//       tier: 'Top Tier', 
//       name: 'Gold', 
//       price: '300,000', 
//       desc: 'ንዝበለጸን መስተንክራዊን መዓልቲ መርዓ ዝኸውን ምሉእ መደብ።',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (5 ካሜራ: 4 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)',
//         '• ኩሉ ሶፍት ኮፒ (All Soft Copy)'
//       ], 
//       features: [
//         '✓ 800 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)',
//         '✓ 2 ሳይን ቦርድ (30×45)',
//         '✓ 3 ቦርድ (50×80, 40×60, 30×45)',
//         '✓ 400 ምስጋና ካርድ (Thank You Card)',
//         '✓ 8 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)'
//       ] 
//     },
//     silver: { 
//       tier: 'Advanced', 
//       name: 'Silver', 
//       price: '240,000', 
//       desc: 'ሞያዊ ስራሕ ብዝተመጣጠነ ዋጋ ንምርካብ።',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)'
//       ], 
//       features: [
//         '✓ 500 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 2 ቦርድ (50×80 & 40×60)',
//         '✓ 250 ምስጋና ካርድ (Thank You Card)',
//         '✓ 6 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)'
//       ] 
//     },
//     standard: { 
//       tier: 'Standard', 
//       name: 'Standard', 
//       price: '190,000', 
//       desc: 'ቀንዲ ኣገደስቲ እዋናት ንምዕቃብ ዝሕግዝ መደብ።',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)'
//       ], 
//       features: [
//         '✓ 300 ፎቶዎች (10×15)',
//         '✓ 1 ላሚኔትድ ፎቶ (30×90)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 1 ቦርድ (50×80)',
//         '✓ 200 ምስጋና ካርድ (Thank You Card)',
//         '✓ 4 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)'
//       ] 
//     },
//   };

//   const [packages, setPackages] = useState(defaultPackages);
//   const [tempPackages, setTempPackages] = useState(defaultPackages);

//   useEffect(() => {
//     fetch('https://habesha-film-production-server.onrender.com/api/packages')
//       .then(res => res.json())
//       .then(data => {
//         if (data) {
//           const mergedData = {
//             premium: { ...defaultPackages.premium, ...data.premium },
//             gold: { ...defaultPackages.gold, ...data.gold },
//             silver: { ...defaultPackages.silver, ...data.silver },
//             standard: { ...defaultPackages.standard, ...data.standard },
//           };
//           setPackages(mergedData);
//           setTempPackages(mergedData);
//         }
//       })
//       .catch(err => console.log("Failed to fetch packages:", err));

//     const authData = localStorage.getItem('priceAuthData');
//     if (authData) {
//       try {
//         const { expiry } = JSON.parse(authData);
//         if (new Date().getTime() < expiry) {
//           setIsAuthenticated(true);
//         } else {
//           localStorage.removeItem('priceAuthData');
//           setIsAuthenticated(false);
//         }
//       } catch (e) {
//         localStorage.removeItem('priceAuthData');
//       }
//     }

//     const savedNotes = localStorage.getItem('adminNotebookListPersistent');
//     if (savedNotes) {
//       try {
//         setNotebookList(JSON.parse(savedNotes));
//       } catch (e) {
//         console.log("Error parsing saved notes");
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
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ passcode }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsAuthenticated(true);
//         const expiryDuration = 10 * 60 * 1000; 
//         const authData = { value: 'true', expiry: new Date().getTime() + expiryDuration };
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

//   const handleEditGateSubmit = (e) => {
//     e.preventDefault();
//     if (adminPasscode === 'ADMIN2026') { 
//       setIsEditGateOpen(true);
//       setIsEditMode(true);
//       setAdminError(false);
//       setAdminPasscode('');
//     } else {
//       setAdminError(true);
//     }
//   };

//   const handleSelectPackageClick = (pkgKey, isFromEdit = false) => {
//     const sourcePackages = isFromEdit ? tempPackages : packages;
//     const pkg = sourcePackages[pkgKey];
//     setSelectedPackage(pkg);
//     setCustomerName('');
//     setBookingDate('');
//     setCustomizedPrice(pkg.price);
//     setCustomizedDesc(pkg.desc || '');
//     setEditingNoteId(null);
//     setIsBookingModalOpen(true);
//   };
  
//   const handleBookingSubmit = (e) => {
//     e.preventDefault();
//     if (!customerName.trim() || !bookingDate || !selectedPackage) return;

//     const newBookingRecord = {
//       id: editingNoteId !== null ? editingNoteId : Date.now(),
//       customerName: customerName.trim(),
//       bookingDate,
//       packageName: selectedPackage.name,
//       packagePrice: customizedPrice,
//       tier: selectedPackage.tier,
//       // packageDesc ተወጊዱ ኣሎ፤ ንናይ ቀረጻ ኣገልግሎታትን ባህርያትን ጥራይ ተሓዚሉ ኣሎ
//       packageServices: selectedPackage.services || [],
//       packageFeatures: selectedPackage.features || [],
//       timestamp: new Date().toLocaleString()
//     };

//     if (editingNoteId !== null) {
//       const updatedList = notebookList.map(item => 
//         item.id === editingNoteId ? newBookingRecord : item
//       );
//       setNotebookList(updatedList);
//       localStorage.setItem('adminNotebookListPersistent', JSON.stringify(updatedList));
//     } else {
//       const updatedList = [newBookingRecord, ...notebookList];
//       setNotebookList(updatedList);
//       localStorage.setItem('adminNotebookListPersistent', JSON.stringify(updatedList));
//     }

//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);
//     alert("ብሰላም ኣብ Admin Notebook ተዓቂቡ እዩ!");
//   };
//   // const handleBookingSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (!customerName.trim() || !bookingDate || !selectedPackage) return;

//   //   if (editingNoteId !== null) {
//   //     const updatedList = notebookList.map(item => {
//   //       if (item.id === editingNoteId) {
//   //         return {
//   //           ...item,
//   //           customerName,
//   //           bookingDate,
//   //           packageName: selectedPackage.name,
//   //           packagePrice: customizedPrice,
//   //           tier: selectedPackage.tier,
//   //           packageDesc: customizedDesc,
//   //           packageServices: selectedPackage.services || [],
//   //           packageFeatures: selectedPackage.features || []
//   //         };
//   //       }
//   //       return item;
//   //     });
//   //     setNotebookList(updatedList);
//   //     localStorage.setItem('adminNotebookListPersistent', JSON.stringify(updatedList));
//   //   } else {
//   //     const newBookingRecord = {
//   //       id: Date.now(),
//   //       customerName: customerName.trim(),
//   //       bookingDate,
//   //       packageName: selectedPackage.name,
//   //       packagePrice: customizedPrice,
//   //       tier: selectedPackage.tier,
//   //       packageDesc: customizedDesc,
//   //       packageServices: selectedPackage.services || [],
//   //       packageFeatures: selectedPackage.features || [],
//   //       timestamp: new Date().toLocaleString()
//   //     };

//   //     const updatedList = [newBookingRecord, ...notebookList];
//   //     setNotebookList(updatedList);
//   //     localStorage.setItem('adminNotebookListPersistent', JSON.stringify(updatedList));
//   //   }

//   //   setIsBookingModalOpen(false);
//   //   setSelectedPackage(null);
//   //   setEditingNoteId(null);
//   //   alert("ብሰላም ኣብ Admin Notebook ተዓቂቡ እዩ!");
//   // };

//   const handleEditNoteItem = (note) => {
//     const foundKey = Object.keys(packages).find(k => packages[k].name === note.packageName) || 'gold';
//     const pkg = packages[foundKey] || packages.gold;
//     setSelectedPackage(pkg);
//     setCustomerName(note.customerName);
//     setBookingDate(note.bookingDate);
//     setCustomizedPrice(note.packagePrice);
//     setCustomizedDesc(note.packageDesc);
//     setEditingNoteId(note.id);
//     setIsBookingModalOpen(true);
//   };

//   const handleDeleteNote = (id) => {
//     const updatedList = notebookList.filter(note => note.id !== id);
//     setNotebookList(updatedList);
//     localStorage.setItem('adminNotebookListPersistent', JSON.stringify(updatedList));
//   };

//   // const handleShareReceipt = (note) => {
//   //   const receiptText = `🎥 ═══════════════════════════ 🎥\n` +
//   //     `   HABESHA FILM PRODUCTION\n` +
//   //     `   Professional Media & Wedding Cinematography\n` +
//   //     `🎥 ═══════════════════════════ 🎥\n\n` +
//   //     `✨ **OFFICIAL BOOKING RECEIPT** ✨\n` +
//   //     `----------------------------------------\n` +
//   //     `👤 **ስም ዓሚል (Customer):** ${note.customerName}\n` +
//   //     `📅 **ዕለት መደብ (Event Date):** ${note.bookingDate}\n` +
//   //     `📦 **ዝተመረጸ ፓኬኬጅ:** ${note.packageName} (${note.tier})\n` +
//   //     `💰 **ዋጋ (Total Price):** ${note.packagePrice}\n` +
//   //     (note.packageDesc ? `📝 **መግለጺ (Description):** ${note.packageDesc}\n` : '') +
//   //     `----------------------------------------\n` +
//   //     `📌 **ዝርዝር ኣገልግሎታት/ባህርያት:**\n` +
//   //     (note.packageServices && note.packageServices.length > 0 ? note.packageServices.map(s => `• ${s}`).join('\n') + '\n' : '') +
//   //     (note.packageFeatures && note.packageFeatures.length > 0 ? note.packageFeatures.map(f => `${f}`).join('\n') : '') + `\n\n` +
//   //     `═══════════════════════════════\n` +
//   //     `🌐 Habesha Film Production\n` +
//   //     `📍 Professional Studio & Media Production\n` +
//   //     `✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ! እናመስገንና።`;

//   //   if (navigator.share) {
//   //     navigator.share({
//   //       title: 'Booking Receipt - Habesha Film Production',
//   //       text: receiptText,
//   //     }).catch(err => console.log("Error sharing", err));
//   //   } else {
//   //     navigator.clipboard.writeText(receiptText);
//   //     alert("ደረሰኝ (Receipt) ናብ ክሊፕቦርድ ገዲዳ ኣላ! ንዓማዊል ክትልእክዋ ትኽክሉ ኢኹም (Copied to clipboard).");
//   //   }
//   // };
//   const handleShareReceipt = (note) => {
//     const receiptText = 
//       `┌────────────────────────────────────────┐\n` +
//       `│     ✨ HABESHA FILM PRODUCTION ✨     │\n` +
//       `└────────────────────────────────────────┘\n\n` +
//       `👤 ስም ዓሚል: ${note.customerName}\n` +
//       `📅 ዕለት መደብ: ${note.bookingDate}\n` +
//       `📦 ፓኬኬጅ: ${note.packageName} (${note.tier})\n` +
//       `💰 ዋጋ: ${note.packagePrice}\n\n` +
//       `────────────────────────────────────────\n` +
//       `🛠 ናይ ቀረጻ ኣገልግሎታት:\n` +
//       (note.packageServices && note.packageServices.length > 0 
//         ? note.packageServices.map(s => `  ${s}`).join('\n') 
//         : '  • ሕጂ ንጊዜው ዝተወሰነ ኣገልግሎት የለን') + `\n\n` +
//       `✨ ባህርያት/ረብሓታት:\n` +
//       (note.packageFeatures && note.packageFeatures.length > 0 
//         ? note.packageFeatures.map(f => `  ${f}`).join('\n') 
//         : '  • የለዉን') + `\n\n` +
//       `────────────────────────────────────────\n` +
//       `🌐 Habesha Film Production Studio\n` +
//       `✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ!`;

//     if (navigator.share) {
//       navigator.share({
//         title: 'Booking Receipt - Habesha Film Production',
//         text: receiptText,
//       }).catch(err => console.log("Error sharing", err));
//     } else {
//       navigator.clipboard.writeText(receiptText);
//       alert("ደረሰኝ (Receipt) ናብ ክሊፕቦርድ ገዲዳ ኣላ! ንዓማዊል ክትልእክዋ ትኽክሉ ኢኹም።");
//     }
//   };

//   const handleSaveAndExit = async () => {
//     try {
//       const response = await fetch('https://habesha-film-production-server.onrender.com/api/packages/update', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(tempPackages),
//       });

//       if (response.ok) {
//         setPackages(tempPackages);
//         alert("ዳታ ብሰላም ተሰዲዱ ኣብ ኩሉ ዲቫይስ ክረአ እዩ!");
//       } else {
//         alert("ሰርቨር ጌጋ ኣለዎ።");
//       }
//     } catch (err) {
//       console.error("Error saving to server:", err);
//       alert("ዳታ ናብ ሰርቨር ምልኣኽ ኣይከኣለን።");
//     }

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   const handleCancelEdit = () => {
//     setTempPackages(packages);
//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden flex flex-col justify-between">
//       <Navbar />

//       <div className="flex-grow flex items-center justify-center px-4 py-32">
//         {!isAuthenticated ? (
//           <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center relative">
//             <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">Secure Access</span>
//             <h2 className="text-2xl md:text-3xl font-serif mb-3 text-zinc-100">Protected Price Page</h2>
//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>
//             <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።</p>
            
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
//         ) : isEditMode ? (
//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">
//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">Administration Mode</span>
//             <h1 className="text-3xl font-serif mb-4 text-zinc-100">Edit Packages & Admin Notebook</h1>
//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-8"></div>
            
//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl space-y-8 text-left shadow-2xl">
              
//               {/* --- Admin Notebook / Bookings List Section --- */}
//               <div className="bg-zinc-900 p-6 rounded-xl border border-[#dfb557]/30 space-y-4 shadow-inner">
//                 <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
//                   <h3 className="text-xs font-bold uppercase text-[#dfb557] tracking-wider">📝 Admin Notebook & Customer Bookings</h3>
//                   <span className="text-[10px] text-zinc-400 font-light">ዋጋ፣ መግለጺን ዝርዝርን ሒዙ ካብ ከይድምሰስ ዝዕቀብ</span>
//                 </div>

//                 <div className="space-y-4 pt-2 max-h-[500px] overflow-y-auto">
//                   {notebookList.length === 0 ? (
//                     <p className="text-zinc-500 text-xs italic text-center py-4">ዝኾነ ዝተመዝገበ ዓሚል ወይ ኖት የልቦን። ካብቲ ኣብ ታሕቲ ዘሎ ኤዲት ሙድ ጌርካ ድማ "Select" ብምባል ክትምዝግቡ ትኽክሉ ኢኹም።</p>
//                   ) : (
//                     notebookList.map((note) => (
//                       <div key={note.id} className="bg-zinc-950 border border-zinc-800 p-5 rounded-xl space-y-4 shadow-md">
                        
//                         {/* Header: Customer Name & Date */}
//                         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-zinc-900 pb-3">
//                           <div className="flex items-center gap-3">
//                             <span className="text-base font-serif font-bold text-[#dfb557]">{note.customerName}</span>
//                             <span className="text-[10px] bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md text-zinc-300 font-semibold">📅 ዕለት: {note.bookingDate}</span>
//                           </div>
//                           <span className="text-[9px] text-zinc-500">ተመዝጊቡሉ: {note.timestamp}</span>
//                         </div>

//                         {/* Package Details Layout Inside Notebook */}
//                         <div className="bg-zinc-900/80 border border-[#dfb557]/30 p-4 rounded-xl space-y-3">
//                           <div className="flex justify-between items-center">
//                             <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#dfb557]">{note.tier}</span>
//                             <span className="text-lg font-serif font-bold text-[#dfb557]">{note.packagePrice}</span>
//                           </div>

//                           <h4 className="text-xl font-serif text-white">{note.packageName} Package</h4>

//                           {note.packageDesc && (
//                             <p className="text-xs text-zinc-300 font-light leading-relaxed">
//                               {note.packageDesc}
//                             </p>
//                           )}

//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-zinc-800 text-xs">
//                             {note.packageServices && note.packageServices.length > 0 && (
//                               <div className="space-y-1">
//                                 <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">ናይ ቀረጻ ኣገልግሎታት:</span>
//                                 <ul className="space-y-1 text-zinc-300 font-light">
//                                   {note.packageServices.map((s, i) => <li key={i}>{s}</li>)}
//                                 </ul>
//                               </div>
//                             )}

//                             <div className="space-y-1">
//                               <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">ባህርያትን ረብሓታትን:</span>
//                               <ul className="space-y-1 text-zinc-300 font-light">
//                                 {note.packageFeatures && note.packageFeatures.map((f, i) => <li key={i} className="flex items-center gap-2">{f}</li>)}
//                               </ul>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex justify-end items-center gap-2 pt-2 border-t border-zinc-900">
//                           <button 
//                             onClick={() => handleShareReceipt(note)} 
//                             className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-[10px] uppercase font-semibold transition-all flex items-center gap-1"
//                           >
//                             Share 🔗
//                           </button>
//                           <button 
//                             onClick={() => handleEditNoteItem(note)} 
//                             className="px-3 py-1.5 bg-[#dfb557]/20 hover:bg-[#dfb557]/40 text-[#dfb557] rounded text-[10px] uppercase font-semibold transition-all"
//                           >
//                             Edit (ዋጋ/መግለጺ)
//                           </button>
//                           <button 
//                             onClick={() => handleDeleteNote(note.id)} 
//                             className="px-3 py-1.5 bg-red-950/60 hover:bg-red-900 text-red-300 rounded text-[10px] uppercase font-semibold transition-all"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </div>
//                     ))
//                   )}
//                 </div>
//               </div>

//               {/* Package Inputs with Select Button included right inside Edit Mode */}
//               <div className="pt-4">
//                 <h3 className="text-sm font-bold uppercase text-[#dfb557] tracking-wider mb-4">⚙️ Edit Website Packages & Test Select</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {Object.keys(tempPackages).map((key) => {
//                     const pkg = tempPackages[key];
//                     return (
//                       <div key={key} className="bg-zinc-900 border-2 border-[#dfb557]/40 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4">
//                         <div className="space-y-3">
//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Tier Title</label>
//                             <input 
//                               value={pkg.tier || ''} 
//                               onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, tier: e.target.value}})}
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold uppercase text-[#dfb557]"
//                             />
//                           </div>

//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Package Name</label>
//                             <input 
//                               value={pkg.name || ''} 
//                               onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, name: e.target.value}})}
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-serif font-bold text-lg"
//                             />
//                           </div>

//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Price (ዋጋ)</label>
//                             <input 
//                               value={pkg.price || ''} 
//                               onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, price: e.target.value}})}
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold text-[#dfb557]"
//                             />
//                           </div>

//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Description (መግለጺ)</label>
//                             <textarea 
//                               rows="2"
//                               value={pkg.desc || ''} 
//                               onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, desc: e.target.value}})}
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-300 font-light"
//                             />
//                           </div>

//                           {pkg.services && (
//                             <div>
//                               <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Services (Newline separated)</label>
//                               <textarea 
//                                 rows="3"
//                                 value={(pkg.services || []).join('\n')} 
//                                 onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, services: e.target.value.split('\n')}})}
//                                 className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               />
//                             </div>
//                           )}

//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Features (Newline separated)</label>
//                             <textarea 
//                               rows="4"
//                               value={(pkg.features || []).join('\n')} 
//                               onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, features: e.target.value.split('\n')}})}
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                             />
//                           </div>
//                         </div>

//                         {/* Select Button inside Edit Mode for testing / recording bookings */}
//                         <button 
//                           onClick={() => handleSelectPackageClick(key, true)}
//                           className="w-full bg-[#dfb557] text-black py-2.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-md cursor-pointer"
//                         >
//                           Select {pkg.name} ➔
//                         </button>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               <div className="flex justify-end gap-4 pt-4 border-t border-zinc-900">
//                 <button onClick={handleCancelEdit} className="px-6 py-3 bg-zinc-900 text-zinc-300 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all">Cancel</button>
//                 <button onClick={handleSaveAndExit} className="px-6 py-3 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45] transition-all">Save Changes</button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">
//             <div className="flex justify-end mb-4">
//               {!isEditGateOpen ? (
//                 <div className="flex flex-col items-end">
//                   <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-[#dfb557]/40 shadow-lg">
//                     <input 
//                       type="password"
//                       placeholder="Admin Code"
//                       value={adminPasscode}
//                       onChange={(e) => setAdminPasscode(e.target.value)}
//                       className="bg-transparent text-zinc-100 text-xs px-2 focus:outline-none w-28"
//                     />
//                     <button onClick={handleEditGateSubmit} className="px-3 py-1.5 bg-[#dfb557] text-black rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#c99f45] transition-all">Unlock</button>
//                   </div>
//                   {adminError && <p className="text-red-400 text-[10px] mt-1 font-medium">Wrong Admin Code!</p>}
//                 </div>
//               ) : (
//                 <button onClick={() => setIsEditMode(true)} className="px-4 py-2 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-semibold tracking-widest shadow-md hover:bg-[#c99f45] transition-all">Enter Edit Mode ⚙️</button>
//               )}
//             </div>

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">Investment & Tiers</span>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">Our Professional Packages</h1>
//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>
//             <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
//               ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ደረጃታት እቲ ንደለይዎ ምረጹ።
//             </p>
            
//             {/* Non-Edit Customer View (Clean Display View) */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              
//               {/* 1. Premium Package */}
//               <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between">
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">{packages.premium.tier}</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.premium.name}</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.premium.price}</p>
//                   <p className="text-xs sm:text-sm text-zinc-300 mb-6 font-light leading-relaxed">{packages.premium.desc}</p>
//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-4 font-light">
//                     {(packages.premium.features || []).map((feat, idx) => (
//                       <li key={idx} className="flex items-center gap-2">{feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* 2. Gold Package */}
//               <div className="bg-zinc-950 border-2 border-[#dfb557] p-6 sm:p-8 rounded-2xl shadow-2xl relative flex flex-col justify-between">
//                 <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
//                   {packages.gold.tier}
//                 </span>
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">Exclusive</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.gold.name}</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.gold.price}</p>
                  
//                   {packages.gold.desc && (
//                     <p className="text-xs text-zinc-300 mb-4 font-light">{packages.gold.desc}</p>
//                   )}

//                   {packages.gold.services && packages.gold.services.length > 0 && (
//                     <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
//                       <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
//                       <ul className="space-y-1 pl-1">
//                         {packages.gold.services.map((srv, idx) => (
//                           <li key={idx}>{srv}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light">
//                     {(packages.gold.features || []).map((feat, idx) => (
//                       <li key={idx} className="flex items-center gap-2">{feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* 3. Silver Package */}
//               <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between">
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">{packages.silver.tier}</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.silver.name}</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.silver.price}</p>
                  
//                   {packages.silver.desc && (
//                     <p className="text-xs text-zinc-300 mb-4 font-light">{packages.silver.desc}</p>
//                   )}

//                   {packages.silver.services && packages.silver.services.length > 0 && (
//                     <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
//                       <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
//                       <ul className="space-y-1 pl-1">
//                         {packages.silver.services.map((srv, idx) => (
//                           <li key={idx}>{srv}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light">
//                     {(packages.silver.features || []).map((feat, idx) => (
//                       <li key={idx} className="flex items-center gap-2">{feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* 4. Standard Package */}
//               <div className="bg-zinc-950/70 border-2 border-[#dfb557]/30 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-400">{packages.standard.tier}</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.standard.name}</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.standard.price}</p>
                  
//                   {packages.standard.desc && (
//                     <p className="text-xs text-zinc-300 mb-4 font-light">{packages.standard.desc}</p>
//                   )}

//                   {packages.standard.services && packages.standard.services.length > 0 && (
//                     <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
//                       <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
//                       <ul className="space-y-1 pl-1">
//                         {packages.standard.services.map((srv, idx) => (
//                           <li key={idx}>{srv}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}

//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light">
//                     {(packages.standard.features || []).map((feat, idx) => (
//                       <li key={idx} className="flex items-center gap-2">{feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//             </div>
//           </div>
//         )}
//       </div>

//       {/* --- Booking Form & Price Customization Modal --- */}
//       {isBookingModalOpen && selectedPackage && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-zinc-950 border-2 border-[#dfb557]/50 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
//             <span className="text-[9px] uppercase tracking-[0.3em] text-[#dfb557] font-semibold block mb-1">Confirmation & Customization Form</span>
//             <h3 className="text-2xl font-serif text-zinc-100 mb-2">Book / Edit {selectedPackage.name} Package</h3>
//             <p className="text-xs text-zinc-400 mb-6">እቲ ዝተመረጸ ፓኬኬጅ ዋጋን መግለጺን ክትቅይርዎ (ከተጉድልዎ ወይ ክትውስኽዎ) ትኽክሉ ኢኹም።</p>

//             <form onSubmit={handleBookingSubmit} className="space-y-4 text-left">
//               <div>
//                 <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">Full Name (ስም ዓሚል)</label>
//                 <input 
//                   type="text"
//                   required
//                   placeholder="ኣብነት፦ ሃብቶም ዮውሃንስ"
//                   value={customerName}
//                   onChange={(e) => setCustomerName(e.target.value)}
//                   className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                 />
//               </div>

//               <div>
//                 <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">Event Date (ዕለት መደብ/ቆጸራ)</label>
//                 <input 
//                   type="date"
//                   required
//                   value={bookingDate}
//                   onChange={(e) => setBookingDate(e.target.value)}
//                   className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                 />
//               </div>

//               <div>
//                 <label className="text-[10px] uppercase text-[#dfb557] font-semibold block mb-1">Package Price (ዋጋ - ክትቅንሶ ወይ ክትውስኾ ትኽእል)</label>
//                 <input 
//                   type="text"
//                   required
//                   value={customizedPrice}
//                   onChange={(e) => setCustomizedPrice(e.target.value)}
//                   className="w-full bg-zinc-900 border border-[#dfb557]/50 p-3 rounded-xl text-xs text-[#dfb557] font-bold focus:outline-none focus:border-[#dfb557]"
//                 />
//               </div>

//               <div>
//                 <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">Description (መግለጺ)</label>
//                 <textarea 
//                   rows="3"
//                   value={customizedDesc}
//                   onChange={(e) => setCustomizedDesc(e.target.value)}
//                   className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-[#dfb557] font-light"
//                 />
//               </div>

//               <div className="flex gap-3 pt-4">
//                 <button 
//                   type="button"
//                   onClick={() => setIsBookingModalOpen(false)}
//                   className="flex-1 bg-zinc-900 text-zinc-300 py-3 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all"
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   type="submit"
//                   className="flex-1 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45] transition-all shadow-lg"
//                 >
//                   {editingNoteId !== null ? 'Update Booking' : 'Save to Notebook'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// }

// export default Price;


// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// function Price() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [passcode, setPasscode] = useState('');
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [adminPasscode, setAdminPasscode] = useState('');
//   const [isEditGateOpen, setIsEditGateOpen] = useState(false);
//   const [adminError, setAdminError] = useState(false);

//   // --- Customer Selection & Booking Form Modal State ---
//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
//   const [customerName, setCustomerName] = useState('');
//   const [bookingDate, setBookingDate] = useState('');

//   // --- Editable Fields Inside Modal / Notebook Booking ---
//   const [customizedPrice, setCustomizedPrice] = useState('');

//   // --- Admin Notebook State ---
//   const [notebookList, setNotebookList] = useState([]);
//   const [editingNoteId, setEditingNoteId] = useState(null);

//   const defaultPackages = {
//     premium: {
//       tier: 'Ultimate VIP',
//       name: 'Premium',
//       price: '$1,000+',
//       services: [
//         '• ቪድዮ ቀረጻ (Unlimited)',
//         '• ክልተ ኤክስፐርት ካሜራማን',
//         '• Cinematic Color Grading & VFX'
//       ],
//       features: [
//         '✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)',
//         '✓ ክልተ ኤክስፐርት ካሜራማን',
//         '✓ Cinematic Color Grading & VFX',
//         '🎁 ቦናስ: ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር'
//       ]
//     },
//     gold: {
//       tier: 'Top Tier',
//       name: 'Gold',
//       price: '300,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (5 ካሜራ: 4 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)',
//         '• ኩሉ ሶፍት ኮፒ (All Soft Copy)'
//       ],
//       features: [
//         '✓ 800 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)',
//         '✓ 2 ሳይን ቦርድ (30×45)',
//         '✓ 3 ቦርድ (50×80, 40×60, 30×45)',
//         '✓ 400 ምስጋና ካርድ (Thank You Card)',
//         '✓ 8 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)'
//       ]
//     },
//     silver: {
//       tier: 'Advanced',
//       name: 'Silver',
//       price: '240,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)'
//       ],
//       features: [
//         '✓ 500 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 2 ቦርድ (50×80 & 40×60)',
//         '✓ 250 ምስጋና ካርድ (Thank You Card)',
//         '✓ 6 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)'
//       ]
//     },
//     standard: {
//       tier: 'Standard',
//       name: 'Standard',
//       price: '190,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)'
//       ],
//       features: [
//         '✓ 300 ፎቶዎች (10×15)',
//         '✓ 1 ላሚኔትድ ፎቶ (30×90)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 1 ቦርድ (50×80)',
//         '✓ 200 ምስጋና ካርድ (Thank You Card)',
//         '✓ 4 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)'
//       ]
//     },
//   };

//   const [packages, setPackages] = useState(defaultPackages);
//   const [tempPackages, setTempPackages] = useState(defaultPackages);

//   useEffect(() => {
//     fetch('https://habesha-film-production-server.onrender.com/api/packages')
//       .then(res => res.json())
//       .then(data => {
//         if (data) {
//           const mergedData = {
//             premium: { ...defaultPackages.premium, ...data.premium },
//             gold: { ...defaultPackages.gold, ...data.gold },
//             silver: { ...defaultPackages.silver, ...data.silver },
//             standard: { ...defaultPackages.standard, ...data.standard },
//           };
//           setPackages(mergedData);
//           setTempPackages(mergedData);
//         }
//       })
//       .catch(err => console.log("Failed to fetch packages:", err));

//     const authData = localStorage.getItem('priceAuthData');
//     if (authData) {
//       try {
//         const { expiry } = JSON.parse(authData);
//         if (new Date().getTime() < expiry) {
//           setIsAuthenticated(true);
//         } else {
//           localStorage.removeItem('priceAuthData');
//           setIsAuthenticated(false);
//         }
//       } catch (e) {
//         localStorage.removeItem('priceAuthData');
//       }
//     }

//     const savedNotes = localStorage.getItem('adminNotebookListPersistent');
//     if (savedNotes) {
//       try {
//         setNotebookList(JSON.parse(savedNotes));
//       } catch (e) {
//         console.log("Error parsing saved notes");
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
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ passcode }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsAuthenticated(true);
//         const expiryDuration = 10 * 60 * 1000;
//         const authData = { value: 'true', expiry: new Date().getTime() + expiryDuration };
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

//   const handleEditGateSubmit = (e) => {
//     e.preventDefault();
//     if (adminPasscode === 'ADMIN2026') {
//       setIsEditGateOpen(true);
//       setIsEditMode(true);
//       setAdminError(false);
//       setAdminPasscode('');
//     } else {
//       setAdminError(true);
//     }
//   };

//   const handleSelectPackageClick = (pkgKey, isFromEdit = false) => {
//     const sourcePackages = isFromEdit ? tempPackages : packages;
//     const pkg = sourcePackages[pkgKey];
//     setSelectedPackage(pkg);
//     setCustomerName('');
//     setBookingDate('');
//     setCustomizedPrice(pkg.price);
//     setEditingNoteId(null);
//     setIsBookingModalOpen(true);
//   };

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();
//     if (!customerName.trim() || !bookingDate || !selectedPackage) return;

//     const newBookingRecord = {
//       id: editingNoteId !== null ? editingNoteId : Date.now(),
//       customerName: customerName.trim(),
//       bookingDate,
//       packageName: selectedPackage.name,
//       packagePrice: customizedPrice,
//       tier: selectedPackage.tier,
//       packageServices: selectedPackage.services || [],
//       packageFeatures: selectedPackage.features || [],
//       timestamp: new Date().toLocaleString()
//     };

//     if (editingNoteId !== null) {
//       const updatedList = notebookList.map(item =>
//         item.id === editingNoteId ? newBookingRecord : item
//       );
//       setNotebookList(updatedList);
//       localStorage.setItem('adminNotebookListPersistent', JSON.stringify(updatedList));
//     } else {
//       const updatedList = [newBookingRecord, ...notebookList];
//       setNotebookList(updatedList);
//       localStorage.setItem('adminNotebookListPersistent', JSON.stringify(updatedList));
//     }

//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);
//     alert("ብሰላም ኣብ Admin Notebook ተዓቂቡ እዩ!");
//   };

//   const handleEditNoteItem = (note) => {
//     const foundKey = Object.keys(packages).find(k => packages[k].name === note.packageName) || 'gold';
//     const pkg = packages[foundKey] || packages.gold;
//     setSelectedPackage(pkg);
//     setCustomerName(note.customerName);
//     setBookingDate(note.bookingDate);
//     setCustomizedPrice(note.packagePrice);
//     setEditingNoteId(note.id);
//     setIsBookingModalOpen(true);
//   };

//   const handleDeleteNote = (id) => {
//     const updatedList = notebookList.filter(note => note.id !== id);
//     setNotebookList(updatedList);
//     localStorage.setItem('adminNotebookListPersistent', JSON.stringify(updatedList));
//   };

//   const handleShareReceipt = (note) => {
//     const receiptText =
//       `┌────────────────────────────────────────┐\n` +
//       `│    ✨ HABESHA FILM PRODUCTION ✨    │\n` +
//       `└────────────────────────────────────────┘\n\n` +
//       `👤 ስም ዓሚል: ${note.customerName}\n` +
//       `📅 ዕለት መደብ: ${note.bookingDate}\n` +
//       `📦 ፓኬኬጅ: ${note.packageName} (${note.tier})\n` +
//       `💰 ዋጋ: ${note.packagePrice}\n\n` +
//       `────────────────────────────────────────\n` +
//       `🛠 ናይ ቀረጻ ኣገልግሎታት:\n` +
//       (note.packageServices && note.packageServices.length > 0
//         ? note.packageServices.map(s => `  ${s}`).join('\n')
//         : '  • ሕጂ ንጊዜው ዝተወሰነ ኣገልግሎት የለን') + `\n\n` +
//       `✨ ባህርያት/ረብሓታት:\n` +
//       (note.packageFeatures && note.packageFeatures.length > 0
//         ? note.packageFeatures.map(f => `  ${f}`).join('\n')
//         : '  • የለዉን') + `\n\n` +
//       `────────────────────────────────────────\n` +
//       `🌐 Habesha Film Production Studio\n` +
//       `✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ!`;

//     if (navigator.share) {
//       navigator.share({
//         title: 'Booking Receipt - Habesha Film Production',
//         text: receiptText,
//       }).catch(err => console.log("Error sharing", err));
//     } else {
//       navigator.clipboard.writeText(receiptText);
//       alert("ደረሰኝ (Receipt) ናብ ክሊፕቦርድ ገዲዳ ኣላ! ንዓማዊል ክትልእክዋ ትኽክሉ ኢኹም።");
//     }
//   };

//   const handleSaveAndExit = async () => {
//     try {
//       const response = await fetch('https://habesha-film-production-server.onrender.com/api/packages/update', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(tempPackages),
//       });

//       if (response.ok) {
//         setPackages(tempPackages);
//         alert("ዳታ ብሰላም ተሰዲዱ ኣብ ኩሉ ዲቫይስ ክረአ እዩ!");
//       } else {
//         alert("ሰርቨር ጌጋ ኣለዎ።");
//       }
//     } catch (err) {
//       console.error("Error saving to server:", err);
//       alert("ዳታ ናብ ሰርቨር ምልኣኽ ኣይከኣለን።");
//     }

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   const handleCancelEdit = () => {
//     setTempPackages(packages);
//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden flex flex-col justify-between">
//       <Navbar />

//       <div className="flex-grow flex items-center justify-center px-4 py-32">
//         {!isAuthenticated ? (
//           <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center relative">
//             <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">Secure Access</span>
//             <h2 className="text-2xl md:text-3xl font-serif mb-3 text-zinc-100">Protected Price Page</h2>
//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>
//             <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።</p>

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
//         ) : isEditMode ? (
//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">
//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">Administration Mode</span>
//             <h1 className="text-3xl font-serif mb-4 text-zinc-100">Edit Packages & Admin Notebook</h1>
//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-8"></div>

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl space-y-8 text-left shadow-2xl">

//               {/* --- Admin Notebook / Bookings List Section --- */}
//               <div className="bg-zinc-900 p-6 rounded-xl border border-[#dfb557]/30 space-y-4 shadow-inner">
//                 <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
//                   <h3 className="text-xs font-bold uppercase text-[#dfb557] tracking-wider">📝 Admin Notebook & Customer Bookings</h3>
//                   <span className="text-[10px] text-zinc-400 font-light">ዋጋ፣ ኣገልግሎትን ባህርያትን ሒዙ ካብ ከይድምሰስ ዝዕቀብ</span>
//                 </div>

//                 <div className="space-y-4 pt-2 max-h-[500px] overflow-y-auto">
//                   {notebookList.length === 0 ? (
//                     <p className="text-zinc-500 text-xs italic text-center py-4">ዝኾነ ዝተመዝገበ ዓሚል ወይ ኖት የልቦን። ካብቲ ኣብ ታሕቲ ዘሎ ኤዲት ሙድ ጌርካ ድማ "Select" ብምባል ክትምዝግቡ ትኽክሉ ኢኹም።</p>
//                   ) : (
//                     notebookList.map((note) => (
//                       <div key={note.id} className="bg-zinc-950 border border-zinc-800 p-5 rounded-xl space-y-4 shadow-md">

//                         {/* Header: Customer Name & Date */}
//                         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-zinc-900 pb-3">
//                           <div className="flex items-center gap-3">
//                             <span className="text-base font-serif font-bold text-[#dfb557]">{note.customerName}</span>
//                             <span className="text-[10px] bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md text-zinc-300 font-semibold">📅 ዕለት: {note.bookingDate}</span>
//                           </div>
//                           <span className="text-[9px] text-zinc-500">ተመዝጊቡሉ: {note.timestamp}</span>
//                         </div>

//                         {/* Package Details Layout Inside Notebook */}
//                         <div className="bg-zinc-900/80 border border-[#dfb557]/30 p-4 rounded-xl space-y-3">
//                           <div className="flex justify-between items-center">
//                             <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#dfb557]">{note.tier}</span>
//                             <span className="text-lg font-serif font-bold text-[#dfb557]">{note.packagePrice}</span>
//                           </div>

//                           <h4 className="text-xl font-serif text-white">{note.packageName} Package</h4>

//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-zinc-800 text-xs">
//                             {note.packageServices && note.packageServices.length > 0 && (
//                               <div className="space-y-1">
//                                 <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">ናይ ቀረጻ ኣገልግሎታት:</span>
//                                 <ul className="space-y-1 text-zinc-300 font-light">
//                                   {note.packageServices.map((s, i) => <li key={i}>{s}</li>)}
//                                 </ul>
//                               </div>
//                             )}

//                             <div className="space-y-1">
//                               <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">ባህርያትን ረብሓታትን:</span>
//                               <ul className="space-y-1 text-zinc-300 font-light">
//                                 {note.packageFeatures && note.packageFeatures.map((f, i) => <li key={i} className="flex items-center gap-2">{f}</li>)}
//                               </ul>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex justify-end items-center gap-2 pt-2 border-t border-zinc-900">
//                           <button
//                             onClick={() => handleShareReceipt(note)}
//                             className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-[10px] uppercase font-semibold transition-all flex items-center gap-1"
//                           >
//                             Share 🔗
//                           </button>
//                           <button
//                             onClick={() => handleEditNoteItem(note)}
//                             className="px-3 py-1.5 bg-[#dfb557]/20 hover:bg-[#dfb557]/40 text-[#dfb557] rounded text-[10px] uppercase font-semibold transition-all"
//                           >
//                             Edit (ዋጋ)
//                           </button>
//                           <button
//                             onClick={() => handleDeleteNote(note.id)}
//                             className="px-3 py-1.5 bg-red-950/60 hover:bg-red-900 text-red-300 rounded text-[10px] uppercase font-semibold transition-all"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </div>
//                     ))
//                   )}
//                 </div>
//               </div>

//               {/* Package Inputs with Select Button included right inside Edit Mode */}
//               <div className="pt-4">
//                 <h3 className="text-sm font-bold uppercase text-[#dfb557] tracking-wider mb-4">⚙️ Edit Website Packages & Test Select</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {Object.keys(tempPackages).map((key) => {
//                     const pkg = tempPackages[key];
//                     return (
//                       <div key={key} className="bg-zinc-900 border-2 border-[#dfb557]/40 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4">
//                         <div className="space-y-3">
//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Tier Title</label>
//                             <input
//                               value={pkg.tier || ''}
//                               onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, tier: e.target.value}})}
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold uppercase text-[#dfb557]"
//                             />
//                           </div>

//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Package Name</label>
//                             <input
//                               value={pkg.name || ''}
//                               onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, name: e.target.value}})}
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-serif font-bold text-lg"
//                             />
//                           </div>

//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Price (ዋጋ)</label>
//                             <input
//                               value={pkg.price || ''}
//                               onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, price: e.target.value}})}
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold text-[#dfb557]"
//                             />
//                           </div>

//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Services (Newline separated)</label>
//                             <textarea
//                               rows="3"
//                               value={(pkg.services || []).join('\n')}
//                               onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, services: e.target.value.split('\n')}})}
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                             />
//                           </div>

//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Features (Newline separated)</label>
//                             <textarea
//                               rows="4"
//                               value={(pkg.features || []).join('\n')}
//                               onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, features: e.target.value.split('\n')}})}
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                             />
//                           </div>
//                         </div>

//                         {/* Select Button inside Edit Mode for testing / recording bookings */}
//                         <button
//                           onClick={() => handleSelectPackageClick(key, true)}
//                           className="w-full bg-[#dfb557] text-black py-2.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-md cursor-pointer"
//                         >
//                           Select {pkg.name} ➔
//                         </button>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               <div className="flex justify-end gap-4 pt-4 border-t border-zinc-900">
//                 <button onClick={handleCancelEdit} className="px-6 py-3 bg-zinc-900 text-zinc-300 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all">Cancel</button>
//                 <button onClick={handleSaveAndExit} className="px-6 py-3 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45] transition-all">Save Changes</button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">
//             <div className="flex justify-end mb-4">
//               {!isEditGateOpen ? (
//                 <div className="flex flex-col items-end">
//                   <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-[#dfb557]/40 shadow-lg">
//                     <input
//                       type="password"
//                       placeholder="Admin Code"
//                       value={adminPasscode}
//                       onChange={(e) => setAdminPasscode(e.target.value)}
//                       className="bg-transparent text-zinc-100 text-xs px-2 focus:outline-none w-28"
//                     />
//                     <button onClick={handleEditGateSubmit} className="px-3 py-1.5 bg-[#dfb557] text-black rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#c99f45] transition-all">Unlock</button>
//                   </div>
//                   {adminError && <p className="text-red-400 text-[10px] mt-1 font-medium">Wrong Admin Code!</p>}
//                 </div>
//               ) : (
//                 <button onClick={() => setIsEditMode(true)} className="px-4 py-2 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-semibold tracking-widest shadow-md hover:bg-[#c99f45] transition-all">Enter Edit Mode ⚙️</button>
//               )}
//             </div>

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">Investment & Tiers</span>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">Our Professional Packages</h1>
//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>
//             <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
//               ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ደረጃታት እቲ ንደለይዎ ምረጹ።
//             </p>

//             {/* Non-Edit Customer View (Clean Display View) */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

//               {/* 1. Premium Package */}
//               <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between">
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">{packages.premium.tier}</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.premium.name}</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.premium.price}</p>
                  
//                   {packages.premium.services && packages.premium.services.length > 0 && (
//                     <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">
//                       {packages.premium.services.map((serv, idx) => (
//                         <p key={idx}>{serv}</p>
//                       ))}
//                     </div>
//                   )}

//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-6 font-light">
//                     {(packages.premium.features || []).map((feat, idx) => (
//                       <li key={idx} className="flex items-center gap-2">{feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <button
//                   onClick={() => handleSelectPackageClick('premium')}
//                   className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-lg cursor-pointer"
//                 >
//                   Select Ultimate VIP ➔
//                 </button>
//               </div>

//               {/* 2. Gold Package */}
//               <div className="bg-zinc-950 border-2 border-[#dfb557] p-6 sm:p-8 rounded-2xl shadow-2xl relative flex flex-col justify-between">
//                 <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
//                   {packages.gold.tier}
//                 </span>
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">Exclusive</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.gold.name}</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.gold.price}</p>

//                   {packages.gold.services && packages.gold.services.length > 0 && (
//                     <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">
//                       {packages.gold.services.map((serv, idx) => (
//                         <p key={idx}>{serv}</p>
//                       ))}
//                     </div>
//                   )}

//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-6 font-light">
//                     {(packages.gold.features || []).map((feat, idx) => (
//                       <li key={idx} className="flex items-center gap-2">{feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <button
//                   onClick={() => handleSelectPackageClick('gold')}
//                   className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-lg cursor-pointer"
//                 >
//                   Select Gold ➔
//                 </button>
//               </div>

//               {/* 3. Silver Package */}
//               <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between">
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">{packages.silver.tier}</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.silver.name}</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.silver.price}</p>

//                   {packages.silver.services && packages.silver.services.length > 0 && (
//                     <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">
//                       {packages.silver.services.map((serv, idx) => (
//                         <p key={idx}>{serv}</p>
//                       ))}
//                     </div>
//                   )}

//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-6 font-light">
//                     {(packages.silver.features || []).map((feat, idx) => (
//                       <li key={idx} className="flex items-center gap-2">{feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <button
//                   onClick={() => handleSelectPackageClick('silver')}
//                   className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-lg cursor-pointer"
//                 >
//                   Select Silver ➔
//                 </button>
//               </div>

//               {/* 4. Standard Package */}
//               <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between">
//                 <div>
//                   <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">{packages.standard.tier}</span>
//                   <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.standard.name}</h3>
//                   <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.standard.price}</p>

//                   {packages.standard.services && packages.standard.services.length > 0 && (
//                     <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">
//                       {packages.standard.services.map((serv, idx) => (
//                         <p key={idx}>{serv}</p>
//                       ))}
//                     </div>
//                   )}

//                   <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-6 font-light">
//                     {(packages.standard.features || []).map((feat, idx) => (
//                       <li key={idx} className="flex items-center gap-2">{feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <button
//                   onClick={() => handleSelectPackageClick('standard')}
//                   className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-lg cursor-pointer"
//                 >
//                   Select Standard ➔
//                 </button>
//               </div>

//             </div>
//           </div>
//         )}
//       </div>

//       {/* Booking & Customization Modal */}
//       {isBookingModalOpen && selectedPackage && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl max-w-md w-full shadow-2xl space-y-6">
//             <div className="flex justify-between items-center border-b border-zinc-900 pb-3">
//               <h3 className="text-lg font-serif text-[#dfb557]">ዝርዝር መረጻ ንዓሚል ምዝገባ</h3>
//               <button 
//                 onClick={() => setIsBookingModalOpen(false)}
//                 className="text-zinc-400 hover:text-white text-sm font-bold"
//               >
//                 ✕
//               </button>
//             </div>

//             <form onSubmit={handleBookingSubmit} className="space-y-4">
//               <div>
//                 <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">ስም ዓሚል (Customer Name)</label>
//                 <input
//                   type="text"
//                   required
//                   placeholder="ኣብነት: ኣቤል ዳዊት"
//                   value={customerName}
//                   onChange={(e) => setCustomerName(e.target.value)}
//                   className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                 />
//               </div>

//               <div>
//                 <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">ዕለት መደብ (Booking Date)</label>
//                 <input
//                   type="date"
//                   required
//                   value={bookingDate}
//                   onChange={(e) => setBookingDate(e.target.value)}
//                   className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                 />
//               </div>

//               <div>
//                 <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">ዝተመረጸ ፓኬኬጅ (Package)</label>
//                 <input
//                   type="text"
//                   disabled
//                   value={`${selectedPackage.name} (${selectedPackage.tier})`}
//                   className="w-full bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl text-xs text-zinc-400 cursor-not-allowed"
//                 />
//               </div>

//               <div>
//                 <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">ዋጋ (Customizable Price)</label>
//                 <input
//                   type="text"
//                   required
//                   value={customizedPrice}
//                   onChange={(e) => setCustomizedPrice(e.target.value)}
//                   className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-[#dfb557] font-bold focus:outline-none focus:border-[#dfb557]"
//                 />
//               </div>

//               <div className="flex gap-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={() => setIsBookingModalOpen(false)}
//                   className="w-1/2 bg-zinc-900 text-zinc-300 py-3 rounded-xl text-xs uppercase font-bold hover:bg-zinc-800 transition-all"
//                 >
//                   ሰርዝ
//                 </button>
//                 <button
//                   type="submit"
//                   className="w-1/2 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold hover:bg-[#c99f45] transition-all shadow-lg"
//                 >
//                   ኣቐመጥ (Save)
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

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
  const [isEditMode, setIsEditMode] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [adminPasscode, setAdminPasscode] = useState('');
  const [isEditGateOpen, setIsEditGateOpen] = useState(false);
  const [adminError, setAdminError] = useState(false);

  // --- Customer Selection & Booking Form Modal State ---
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  // --- Editable Fields Inside Modal / Notebook Booking ---
  const [customizedPrice, setCustomizedPrice] = useState('');

  // --- Admin Notebook State ---
  const [notebookList, setNotebookList] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);

  const defaultPackages = {
    premium: {
      tier: 'Ultimate VIP',
      name: 'Premium',
      price: '$1,000+',
      services: [
        '• ቪድዮ ቀረጻ (Unlimited)',
        '• ክልተ ኤክስፐርት ካሜራማን',
        '• Cinematic Color Grading & VFX'
      ],
      features: [
        '✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)',
        '✓ ክልተ ኤክስፐርት ካሜራማን',
        '✓ Cinematic Color Grading & VFX',
        '🎁 ቦናስ: ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር'
      ]
    },
    gold: {
      tier: 'Top Tier',
      name: 'Gold',
      price: '300,000',
      services: [
        '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
        '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
        '• መዓልቲ መርዓ (5 ካሜራ: 4 ቪድዮ፣ 1 ፎቶ)',
        '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)',
        '• ኩሉ ሶፍት ኮፒ (All Soft Copy)'
      ],
      features: [
        '✓ 800 ፎቶዎች (10×15)',
        '✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)',
        '✓ 2 ሳይን ቦርድ (30×45)',
        '✓ 3 ቦርድ (50×80, 40×60, 30×45)',
        '✓ 400 ምስጋና ካርድ (Thank You Card)',
        '✓ 8 ዩኤስቢ ፍላሽ (64 GB)',
        '✓ 2 ባነር',
        '✓ 2 ራማ / ቆብዕ (Cap)'
      ]
    },
    silver: {
      tier: 'Advanced',
      name: 'Silver',
      price: '240,000',
      services: [
        '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
        '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
        '• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)',
        '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)'
      ],
      features: [
        '✓ 500 ፎቶዎች (10×15)',
        '✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)',
        '✓ 1 ሳይን ቦርድ (30×45)',
        '✓ 2 ቦርድ (50×80 & 40×60)',
        '✓ 250 ምስጋና ካርድ (Thank You Card)',
        '✓ 6 ዩኤስቢ ፍላሽ (64 GB)',
        '✓ 2 ባነር',
        '✓ 2 ራማ / ቆብዕ (Cap)'
      ]
    },
    standard: {
      tier: 'Standard',
      name: 'Standard',
      price: '190,000',
      services: [
        '• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)',
        '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
        '• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)',
        '• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)'
      ],
      features: [
        '✓ 300 ፎቶዎች (10×15)',
        '✓ 1 ላሚኔትድ ፎቶ (30×90)',
        '✓ 1 ሳይን ቦርድ (30×45)',
        '✓ 1 ቦርድ (50×80)',
        '✓ 200 ምስጋና ካርድ (Thank You Card)',
        '✓ 4 ዩኤስቢ ፍላሽ (64 GB)',
        '✓ 2 ባነር',
        '✓ 2 ራማ / ቆብዕ (Cap)'
      ]
    },
  };

  const [packages, setPackages] = useState(defaultPackages);
  const [tempPackages, setTempPackages] = useState(defaultPackages);

  useEffect(() => {
    fetch('https://habesha-film-production-server.onrender.com/api/packages')
      .then(res => res.json())
      .then(data => {
        if (data) {
          const mergedData = {
            premium: { ...defaultPackages.premium, ...data.premium },
            gold: { ...defaultPackages.gold, ...data.gold },
            silver: { ...defaultPackages.silver, ...data.silver },
            standard: { ...defaultPackages.standard, ...data.standard },
          };
          setPackages(mergedData);
          setTempPackages(mergedData);
        }
      })
      .catch(err => console.log("Failed to fetch packages:", err));

    const authData = localStorage.getItem('priceAuthData');
    if (authData) {
      try {
        const { expiry } = JSON.parse(authData);
        if (new Date().getTime() < expiry) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('priceAuthData');
          setIsAuthenticated(false);
        }
      } catch (e) {
        localStorage.removeItem('priceAuthData');
      }
    }

    const savedNotes = localStorage.getItem('adminNotebookListPersistent');
    if (savedNotes) {
      try {
        setNotebookList(JSON.parse(savedNotes));
      } catch (e) {
        console.log("Error parsing saved notes");
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsAuthenticated(true);
        const expiryDuration = 10 * 60 * 1000;
        const authData = { value: 'true', expiry: new Date().getTime() + expiryDuration };
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

  const handleEditGateSubmit = (e) => {
    e.preventDefault();
    if (adminPasscode === 'ADMIN2026') {
      setIsEditGateOpen(true);
      setIsEditMode(true);
      setAdminError(false);
      setAdminPasscode('');
    } else {
      setAdminError(true);
    }
  };

  const handleSelectPackageClick = (pkgKey, isFromEdit = false) => {
    const sourcePackages = isFromEdit ? tempPackages : packages;
    const pkg = sourcePackages[pkgKey];
    setSelectedPackage(pkg);
    setCustomerName('');
    setBookingDate('');
    setCustomizedPrice(pkg.price);
    setEditingNoteId(null);
    setIsBookingModalOpen(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!customerName.trim() || !bookingDate || !selectedPackage) return;

    const newBookingRecord = {
      id: editingNoteId !== null ? editingNoteId : Date.now(),
      customerName: customerName.trim(),
      bookingDate,
      packageName: selectedPackage.name,
      packagePrice: customizedPrice,
      tier: selectedPackage.tier,
      packageServices: selectedPackage.services || [],
      packageFeatures: selectedPackage.features || [],
      timestamp: new Date().toLocaleString()
    };

    if (editingNoteId !== null) {
      const updatedList = notebookList.map(item =>
        item.id === editingNoteId ? newBookingRecord : item
      );
      setNotebookList(updatedList);
      localStorage.setItem('adminNotebookListPersistent', JSON.stringify(updatedList));
    } else {
      const updatedList = [newBookingRecord, ...notebookList];
      setNotebookList(updatedList);
      localStorage.setItem('adminNotebookListPersistent', JSON.stringify(updatedList));
    }

    setIsBookingModalOpen(false);
    setSelectedPackage(null);
    setEditingNoteId(null);
    alert("ብሰላም ኣብ Admin Notebook ተዓቂቡ እዩ!");
  };

  const handleEditNoteItem = (note) => {
    const foundKey = Object.keys(packages).find(k => packages[k].name === note.packageName) || 'gold';
    const pkg = packages[foundKey] || packages.gold;
    setSelectedPackage(pkg);
    setCustomerName(note.customerName);
    setBookingDate(note.bookingDate);
    setCustomizedPrice(note.packagePrice);
    setEditingNoteId(note.id);
    setIsBookingModalOpen(true);
  };

  const handleDeleteNote = (id) => {
    const updatedList = notebookList.filter(note => note.id !== id);
    setNotebookList(updatedList);
    localStorage.setItem('adminNotebookListPersistent', JSON.stringify(updatedList));
  };

  const handleShareReceipt = (note) => {
    const receiptText =
      `┌────────────────────────────────────────┐\n` +
      `│    ✨ HABESHA FILM PRODUCTION ✨    │\n` +
      `└────────────────────────────────────────┘\n\n` +
      `👤 ስም ዓሚል: ${note.customerName}\n` +
      `📅 ዕለት መደብ: ${note.bookingDate}\n` +
      `📦 ፓኬኬጅ: ${note.packageName} (${note.tier})\n` +
      `💰 ዋጋ: ${note.packagePrice}\n\n` +
      `────────────────────────────────────────\n` +
      `🛠 ናይ ቀረጻ ኣገልግሎታት:\n` +
      (note.packageServices && note.packageServices.length > 0
        ? note.packageServices.map(s => `  ${s}`).join('\n')
        : '  • ሕጂ ንጊዜው ዝተወሰነ ኣገልግሎት የለን') + `\n\n` +
      `✨ ባህርያት/ረብሓታት:\n` +
      (note.packageFeatures && note.packageFeatures.length > 0
        ? note.packageFeatures.map(f => `  ${f}`).join('\n')
        : '  • የለዉን') + `\n\n` +
      `────────────────────────────────────────\n` +
      `🌐 Habesha Film Production Studio\n` +
      `✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ!`;

    if (navigator.share) {
      navigator.share({
        title: 'Booking Receipt - Habesha Film Production',
        text: receiptText,
      }).catch(err => console.log("Error sharing", err));
    } else {
      navigator.clipboard.writeText(receiptText);
      alert("ደረሰኝ (Receipt) ናብ ክሊፕቦርድ ገዲዳ ኣላ! ንዓማዊል ክትልእክዋ ትኽክሉ ኢኹም።");
    }
  };

  const handleSaveAndExit = async () => {
    try {
      const response = await fetch('https://habesha-film-production-server.onrender.com/api/packages/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tempPackages),
      });

      if (response.ok) {
        setPackages(tempPackages);
        alert("ዳታ ብሰላም ተሰዲዱ ኣብ ኩሉ ዲቫይስ ክረአ እዩ!");
      } else {
        alert("ሰርቨር ጌጋ ኣለዎ።");
      }
    } catch (err) {
      console.error("Error saving to server:", err);
      alert("ዳታ ናብ ሰርቨር ምልኣኽ ኣይከኣለን።");
    }

    setIsEditMode(false);
    setIsEditGateOpen(false);
  };

  const handleCancelEdit = () => {
    setTempPackages(packages);
    setIsEditMode(false);
    setIsEditGateOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden flex flex-col justify-between">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4 py-32">
        {!isAuthenticated ? (
          <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center relative">
            <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">Secure Access</span>
            <h2 className="text-2xl md:text-3xl font-serif mb-3 text-zinc-100">Protected Price Page</h2>
            <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>
            <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።</p>

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
        ) : isEditMode ? (
          <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">
            <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">Administration Mode</span>
            <h1 className="text-3xl font-serif mb-4 text-zinc-100">Edit Packages & Admin Notebook</h1>
            <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-8"></div>

            <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl space-y-8 text-left shadow-2xl">

              {/* --- Admin Notebook / Bookings List Section --- */}
              <div className="bg-zinc-900 p-6 rounded-xl border border-[#dfb557]/30 space-y-4 shadow-inner">
                <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                  <h3 className="text-xs font-bold uppercase text-[#dfb557] tracking-wider">📝 Admin Notebook & Customer Bookings</h3>
                  <span className="text-[10px] text-zinc-400 font-light">ዋጋ፣ ኣገልግሎትን ባህርያትን ሒዙ ካብ ከይድምሰስ ዝዕቀብ</span>
                </div>

                <div className="space-y-4 pt-2 max-h-[500px] overflow-y-auto">
                  {notebookList.length === 0 ? (
                    <p className="text-zinc-500 text-xs italic text-center py-4">ዝኾነ ዝተመዝገበ ዓሚል ወይ ኖት የልቦን። ካብቲ ኣብ ታሕቲ ዘሎ ኤዲት ሙድ ጌርካ ድማ "Select" ብምባል ክትምዝግቡ ትኽክሉ ኢኹም።</p>
                  ) : (
                    notebookList.map((note) => (
                      <div key={note.id} className="bg-zinc-950 border border-zinc-800 p-5 rounded-xl space-y-4 shadow-md">

                        {/* Header: Customer Name & Date */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-zinc-900 pb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-base font-serif font-bold text-[#dfb557]">{note.customerName}</span>
                            <span className="text-[10px] bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md text-zinc-300 font-semibold">📅 ዕለት: {note.bookingDate}</span>
                          </div>
                          <span className="text-[9px] text-zinc-500">ተመዝጊቡሉ: {note.timestamp}</span>
                        </div>

                        {/* Package Details Layout Inside Notebook */}
                        <div className="bg-zinc-900/80 border border-[#dfb557]/30 p-4 rounded-xl space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#dfb557]">{note.tier}</span>
                            <span className="text-lg font-serif font-bold text-[#dfb557]">{note.packagePrice}</span>
                          </div>

                          <h4 className="text-xl font-serif text-white">{note.packageName} Package</h4>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-zinc-800 text-xs">
                            {note.packageServices && note.packageServices.length > 0 && (
                              <div className="space-y-1">
                                <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">ናይ ቀረጻ ኣገልግሎታት:</span>
                                <ul className="space-y-1 text-zinc-300 font-light">
                                  {note.packageServices.map((s, i) => <li key={i}>{s}</li>)}
                                </ul>
                              </div>
                            )}

                            <div className="space-y-1">
                              <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">ባህርያትን ረብሓታትን:</span>
                              <ul className="space-y-1 text-zinc-300 font-light">
                                {note.packageFeatures && note.packageFeatures.map((f, i) => <li key={i} className="flex items-center gap-2">{f}</li>)}
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end items-center gap-2 pt-2 border-t border-zinc-900">
                          <button
                            onClick={() => handleShareReceipt(note)}
                            className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-[10px] uppercase font-semibold transition-all flex items-center gap-1"
                          >
                            Share 🔗
                          </button>
                          <button
                            onClick={() => handleEditNoteItem(note)}
                            className="px-3 py-1.5 bg-[#dfb557]/20 hover:bg-[#dfb557]/40 text-[#dfb557] rounded text-[10px] uppercase font-semibold transition-all"
                          >
                            Edit (ዋጋ)
                          </button>
                          <button
                            onClick={() => handleDeleteNote(note.id)}
                            className="px-3 py-1.5 bg-red-950/60 hover:bg-red-900 text-red-300 rounded text-[10px] uppercase font-semibold transition-all"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Package Inputs with Select Button included right inside Edit Mode */}
              <div className="pt-4">
                <h3 className="text-sm font-bold uppercase text-[#dfb557] tracking-wider mb-4">⚙️ Edit Website Packages & Test Select</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.keys(tempPackages).map((key) => {
                    const pkg = tempPackages[key];
                    return (
                      <div key={key} className="bg-zinc-900 border-2 border-[#dfb557]/40 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                          <div>
                            <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Tier Title</label>
                            <input
                              value={pkg.tier || ''}
                              onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, tier: e.target.value}})}
                              className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold uppercase text-[#dfb557]"
                            />
                          </div>

                          <div>
                            <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Package Name</label>
                            <input
                              value={pkg.name || ''}
                              onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, name: e.target.value}})}
                              className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-serif font-bold text-lg"
                            />
                          </div>

                          <div>
                            <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Price (ዋጋ)</label>
                            <input
                              value={pkg.price || ''}
                              onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, price: e.target.value}})}
                              className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold text-[#dfb557]"
                            />
                          </div>

                          <div>
                            <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Services (Newline separated)</label>
                            <textarea
                              rows="3"
                              value={(pkg.services || []).join('\n')}
                              onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, services: e.target.value.split('\n')}})}
                              className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
                            />
                          </div>

                          <div>
                            <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">Features (Newline separated)</label>
                            <textarea
                              rows="4"
                              value={(pkg.features || []).join('\n')}
                              onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, features: e.target.value.split('\n')}})}
                              className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
                            />
                          </div>
                        </div>

                        {/* Select Button inside Edit Mode for testing / recording bookings */}
                        <button
                          onClick={() => handleSelectPackageClick(key, true)}
                          className="w-full bg-[#dfb557] text-black py-2.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-md cursor-pointer"
                        >
                          Select {pkg.name} ➔
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t border-zinc-900">
                <button onClick={handleCancelEdit} className="px-6 py-3 bg-zinc-900 text-zinc-300 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all">Cancel</button>
                <button onClick={handleSaveAndExit} className="px-6 py-3 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45] transition-all">Save Changes</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">
            <div className="flex justify-end mb-4">
              {!isEditGateOpen ? (
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-[#dfb557]/40 shadow-lg">
                    <input
                      type="password"
                      placeholder="Admin Code"
                      value={adminPasscode}
                      onChange={(e) => setAdminPasscode(e.target.value)}
                      className="bg-transparent text-zinc-100 text-xs px-2 focus:outline-none w-28"
                    />
                    <button onClick={handleEditGateSubmit} className="px-3 py-1.5 bg-[#dfb557] text-black rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#c99f45] transition-all">Unlock</button>
                  </div>
                  {adminError && <p className="text-red-400 text-[10px] mt-1 font-medium">Wrong Admin Code!</p>}
                </div>
              ) : (
                <button onClick={() => setIsEditMode(true)} className="px-4 py-2 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-semibold tracking-widest shadow-md hover:bg-[#c99f45] transition-all">Enter Edit Mode ⚙️</button>
              )}
            </div>

            <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">Investment & Tiers</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">Our Professional Packages</h1>
            <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>
            <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
              ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ደረጃታት እቲ ንደለይዎ ምረጹ።
            </p>

            {/* Non-Edit Customer View (Clean Display View) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

              {/* 1. Premium Package */}
              <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">{packages.premium.tier}</span>
                  <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.premium.name}</h3>
                  <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.premium.price}</p>
                  
                  {packages.premium.services && packages.premium.services.length > 0 && (
                    <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">
                      {packages.premium.services.map((serv, idx) => (
                        <p key={idx}>{serv}</p>
                      ))}
                    </div>
                  )}

                  <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-6 font-light">
                    {(packages.premium.features || []).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">{feat}</li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleSelectPackageClick('premium')}
                  className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-lg cursor-pointer"
                >
                  Select Ultimate VIP ➔
                </button>
              </div>

              {/* 2. Gold Package */}
              <div className="bg-zinc-950 border-2 border-[#dfb557] p-6 sm:p-8 rounded-2xl shadow-2xl relative flex flex-col justify-between">
                <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
                  {packages.gold.tier}
                </span>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">Exclusive</span>
                  <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.gold.name}</h3>
                  <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.gold.price}</p>

                  {packages.gold.services && packages.gold.services.length > 0 && (
                    <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">
                      {packages.gold.services.map((serv, idx) => (
                        <p key={idx}>{serv}</p>
                      ))}
                    </div>
                  )}

                  <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-6 font-light">
                    {(packages.gold.features || []).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">{feat}</li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleSelectPackageClick('gold')}
                  className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-lg cursor-pointer"
                >
                  Select Gold ➔
                </button>
              </div>

              {/* 3. Silver Package */}
              <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">{packages.silver.tier}</span>
                  <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.silver.name}</h3>
                  <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.silver.price}</p>

                  {packages.silver.services && packages.silver.services.length > 0 && (
                    <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">
                      {packages.silver.services.map((serv, idx) => (
                        <p key={idx}>{serv}</p>
                      ))}
                    </div>
                  )}

                  <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-6 font-light">
                    {(packages.silver.features || []).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">{feat}</li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleSelectPackageClick('silver')}
                  className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-lg cursor-pointer"
                >
                  Select Silver ➔
                </button>
              </div>

              {/* 4. Standard Package */}
              <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">{packages.standard.tier}</span>
                  <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.standard.name}</h3>
                  <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.standard.price}</p>

                  {packages.standard.services && packages.standard.services.length > 0 && (
                    <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">
                      {packages.standard.services.map((serv, idx) => (
                        <p key={idx}>{serv}</p>
                      ))}
                    </div>
                  )}

                  <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-6 font-light">
                    {(packages.standard.features || []).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">{feat}</li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleSelectPackageClick('standard')}
                  className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-lg cursor-pointer"
                >
                  Select Standard ➔
                </button>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Booking & Customization Modal */}
      {isBookingModalOpen && selectedPackage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl max-w-md w-full shadow-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-zinc-900 pb-3">
              <h3 className="text-lg font-serif text-[#dfb557]">ዝርዝር መረጻ ንዓሚል ምዝገባ</h3>
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="text-zinc-400 hover:text-white text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">ስም ዓሚል (Customer Name)</label>
                <input
                  type="text"
                  required
                  placeholder="ኣብነት: ኣቤል ዳዊት"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">ዕለት መደብ (Booking Date)</label>
                <input
                  type="date"
                  required
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">ዝተመረጸ ፓኬኬጅ (Package)</label>
                <input
                  type="text"
                  disabled
                  value={`${selectedPackage.name} (${selectedPackage.tier})`}
                  className="w-full bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl text-xs text-zinc-400 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">ዋጋ (Customizable Price)</label>
                <input
                  type="text"
                  required
                  value={customizedPrice}
                  onChange={(e) => setCustomizedPrice(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-[#dfb557] font-bold focus:outline-none focus:border-[#dfb557]"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="w-1/2 bg-zinc-900 text-zinc-300 py-3 rounded-xl text-xs uppercase font-bold hover:bg-zinc-800 transition-all"
                >
                  ሰርዝ
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold hover:bg-[#c99f45] transition-all shadow-lg"
                >
                  ኣቐመጥ (Save)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Price;