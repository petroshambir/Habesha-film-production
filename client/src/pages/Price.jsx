
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

  // ሓድሽ: ንናይ ዓሚል መዝገብ (Booking Notebook) ዝሕዝ ስቴት
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [customNotes, setCustomNotes] = useState('');
  const [savedBookings, setSavedBookings] = useState([]);

  const defaultPackages = {
    premium: { 
      tier: 'Ultimate VIP', 
      name: 'Premium', 
      price: '$1,000+', 
      desc: 'ዝለዓለ ደረጃ ሞያዊ ክእለትን ብርክት ዝበሉ መሳርሒታትን ተጠቒምካ ዝስራሕ ቪአይፒ ኣገልግሎት።', 
      services: [], 
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
      desc: '', 
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
      desc: '', 
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
      desc: '', 
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

  // ሓድሽ: ሓደ ዓሚል ክመርጽ ከሎ ናብ ኖትቡክ (Booking Form) መእተዊ ንምኽፋት
  const handleSelectPackage = (pkgKey) => {
    setSelectedPackageForBooking(packages[pkgKey]);
  };

  // ሓድሽ: ናይ ዓሚል መዝገብ ናብ ሰርቨር ንምልኣኽን ኣብ ሎካል ንምቕማጥን
  const handleSaveBooking = async (e) => {
    e.preventDefault();
    if (!customerName || !eventDate) {
      alert("ብጃኹም ሽም ዓሚልን ዕለትን ኣእትዉ።");
      return;
    }

    const newBooking = {
      customerName,
      eventDate,
      packageName: selectedPackageForBooking.name,
      packagePrice: selectedPackageForBooking.price,
      customNotes,
      createdAt: new Date().toISOString()
    };

    try {
      const response = await fetch('https://habesha-film-production-server.onrender.com/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBooking),
      });

      if (response.ok) {
        alert("ናይ ዓሚል መዝገብ ብሰላም ተመዝጊቡ!");
      } else {
        alert("ግን ናብ ሰርቨር ክሰድድ ከሎ ጌጋ ኣጋጢሙ።");
      }
    } catch (err) {
      console.error("Error saving booking:", err);
    }

    setSavedBookings([...savedBookings, newBooking]);
    // ፎርም ድሕሪ ምዝገባ ምጽራይ
    setCustomerName('');
    setEventDate('');
    setCustomNotes('');
  };

  // ሓድሽ: ናብ ዋትሳፕ ወይ ቴሌግራም ሼር ንምግባር
  const handleShareWhatsApp = (booking) => {
    const text = `*Habesha Film Production - Booking Summary*\n\n` +
                 `👤 *Customer:* ${booking.customerName}\n` +
                 `📅 *Event Date:* ${booking.eventDate}\n` +
                 `📦 *Package:* ${booking.packageName} (${booking.packagePrice})\n` +
                 `📝 *Notes:* ${booking.customNotes || 'None'}\n\n` +
                 `ኣብ ሰዓቱ ስለዝመረጽኩምና ንመስግን!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
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
          <div className="max-w-5xl mx-auto text-center px-4 py-12 w-full">
            <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">Administration Mode</span>
            <h1 className="text-3xl font-serif mb-4 text-zinc-100">Edit Packages & Prices</h1>
            <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-8"></div>
            
            <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl space-y-6 text-left shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.keys(tempPackages).map((key) => {
                  const pkg = tempPackages[key];
                  return (
                    <div key={key} className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 space-y-3">
                      <h3 className="text-sm font-bold uppercase text-[#dfb557]">{key} Package</h3>
                      
                      <div>
                        <label className="text-[10px] uppercase text-zinc-400 font-semibold block">Tier Title</label>
                        <input 
                          value={pkg.tier || ''} 
                          onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, tier: e.target.value}})}
                          className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase text-zinc-400 font-semibold block">Name</label>
                        <input 
                          value={pkg.name || ''} 
                          onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, name: e.target.value}})}
                          className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase text-zinc-400 font-semibold block">Price</label>
                        <input 
                          value={pkg.price || ''} 
                          onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, price: e.target.value}})}
                          className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold text-[#dfb557]"
                        />
                      </div>

                      {key === 'premium' && (
                        <div>
                          <label className="text-[10px] uppercase text-zinc-400 font-semibold block">Description</label>
                          <textarea 
                            rows="2"
                            value={pkg.desc || ''} 
                            onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, desc: e.target.value}})}
                            className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100"
                          />
                        </div>
                      )}

                      {pkg.services && (
                        <div>
                          <label className="text-[10px] uppercase text-zinc-400 font-semibold block">Services (Newline separated)</label>
                          <textarea 
                            rows="4"
                            value={(pkg.services || []).join('\n')} 
                            onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, services: e.target.value.split('\n')}})}
                            className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100"
                          />
                        </div>
                      )}

                      <div>
                        <label className="text-[10px] uppercase text-zinc-400 font-semibold block">Features List (Newline separated)</label>
                        <textarea 
                          rows="5"
                          value={(pkg.features || []).join('\n')} 
                          onChange={(e) => setTempPackages({...tempPackages, [key]: {...pkg, features: e.target.value.split('\n')}})}
                          className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t border-zinc-900">
                <button onClick={handleCancelEdit} className="px-6 py-3 bg-zinc-900 text-zinc-300 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all">Cancel</button>
                <button onClick={handleSaveAndExit} className="px-6 py-3 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45] transition-all">Save Changes</button>
              </div>
            </div>
          </div>
        ) : selectedPackageForBooking ? (
          /* ሓድሽ: ናይ ዓሚል መዝገብ ቅጽ (Customer Booking Notebook / Form) */
          <div className="max-w-xl mx-auto bg-zinc-950 border border-[#dfb557]/50 p-8 rounded-2xl shadow-2xl text-left w-full">
            <span className="text-[10px] uppercase tracking-widest text-[#dfb557] font-bold">Booking Notebook</span>
            <h2 className="text-2xl font-serif text-zinc-100 mt-1 mb-2">Register: {selectedPackageForBooking.name}</h2>
            <p className="text-sm text-[#dfb557] font-bold mb-6">Price: {selectedPackageForBooking.price}</p>

            <form onSubmit={handleSaveBooking} className="space-y-4">
              <div>
                <label className="text-xs uppercase text-zinc-400 font-semibold block mb-1">Customer Name (ሽም ዓሚል)</label>
                <input 
                  type="text"
                  placeholder="ሙሉእ ሽም ዓሚል"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded-xl text-sm text-zinc-100 focus:outline-none focus:border-[#dfb557]"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-zinc-400 font-semibold block mb-1">Event Date (ዕለት መረቓ/መርዓ)</label>
                <input 
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded-xl text-sm text-zinc-100 focus:outline-none focus:border-[#dfb557]"
                />
              </div>

              <div>
                <label className="text-xs uppercase text-zinc-400 font-semibold block mb-1">Custom Notes / Adjustments (ተወሰኽቲ ሓበሬታ)</label>
                <textarea 
                  rows="3"
                  placeholder="ዝኾነ ክስተኻኸል ወይ ክውሰኽ ዝደልዎ..."
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded-xl text-sm text-zinc-100 focus:outline-none focus:border-[#dfb557]"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={() => setSelectedPackageForBooking(null)}
                  className="w-1/2 bg-zinc-900 text-zinc-300 py-3 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800"
                >
                  Back
                </button>
                <button 
                  type="submit" 
                  className="w-1/2 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45]"
                >
                  Save & Share 💾
                </button>
              </div>
            </form>

            {/* ዝተመዝገቡ ዓማኢት ዝረኣዩሉን ናብ ዋትሳፕ ሼር ዝብሉሉ ቦታ */}
            {savedBookings.length > 0 && (
              <div className="mt-8 pt-6 border-t border-zinc-900 space-y-4">
                <h3 className="text-xs uppercase tracking-widest text-[#dfb557] font-bold">Saved Bookings (ዝተመዝገቡ)</h3>
                {savedBookings.map((b, idx) => (
                  <div key={idx} className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-zinc-100">{b.customerName}</p>
                      <p className="text-xs text-zinc-400">Date: {b.eventDate} | Pkg: {b.packageName}</p>
                    </div>
                    <button 
                      onClick={() => handleShareWhatsApp(b)}
                      className="px-3 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1"
                    >
                      Share 📱
                    </button>
                  </div>
                ))}
              </div>
            )}
                  {/* ንሕና ኣብ ነፍሲ ወከፍ ፓኬጅ (ማለት፦ Premium, Gold, Silver, Standard) እዚ ጠውፊ እዚ ኣእቲናዮ ኣለና */}
<button 
  onClick={() => handleSelectPackage('premium')} // ንኣብነት ንፕሪሚየም
  className="w-full bg-zinc-900 border border-[#dfb557]/50 text-zinc-100 py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#dfb557] hover:text-black transition-all duration-300 rounded-xl shadow-md"
>
  Select {packages.premium.name}
</button>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              
              {/* 1. Premium Package */}
              <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between transition-transform hover:-translate-y-1">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">{packages.premium.tier}</span>
                  <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.premium.name}</h3>
                  <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.premium.price}</p>
                  <p className="text-xs sm:text-sm text-zinc-300 mb-6 font-light leading-relaxed">{packages.premium.desc}</p>
                  <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-8 font-light">
                    {(packages.premium.features || []).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">{feat}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={() => handleSelectPackage('premium')}
                  className="w-full bg-zinc-900 border border-[#dfb557]/50 text-zinc-100 py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#dfb557] hover:text-black transition-all duration-300 rounded-xl shadow-md"
                >
                  Select {packages.premium.name}
                </button>
              </div>

              {/* 2. Gold Package */}
              <div className="bg-zinc-950 border-2 border-[#dfb557] p-6 sm:p-8 rounded-2xl shadow-2xl relative flex flex-col justify-between transition-transform hover:-translate-y-1">
                <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
                  {packages.gold.tier}
                </span>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">Exclusive</span>
                  <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.gold.name}</h3>
                  <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.gold.price}</p>
                  
                  {packages.gold.services && packages.gold.services.length > 0 && (
                    <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
                      <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
                      <ul className="space-y-1 pl-1">
                        {packages.gold.services.map((srv, idx) => (
                          <li key={idx}>{srv}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-8 font-light">
                    {(packages.gold.features || []).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">{feat}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={() => handleSelectPackage('gold')}
                  className="w-full bg-[#dfb557] text-black py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 rounded-xl shadow-lg"
                >
                  Select {packages.gold.name}
                </button>
              </div>

              {/* 3. Silver Package */}
              <div className="bg-zinc-950/90 border-2 border-[#dfb557]/50 p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between transition-transform hover:-translate-y-1">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">{packages.silver.tier}</span>
                  <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.silver.name}</h3>
                  <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.silver.price}</p>
                  
                  {packages.silver.services && packages.silver.services.length > 0 && (
                    <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
                      <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
                      <ul className="space-y-1 pl-1">
                        {packages.silver.services.map((srv, idx) => (
                          <li key={idx}>{srv}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-8 font-light">
                    {(packages.silver.features || []).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">{feat}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={() => handleSelectPackage('silver')}
                  className="w-full bg-zinc-900 border border-[#dfb557]/50 text-zinc-100 py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#dfb557] hover:text-black transition-all duration-300 rounded-xl shadow-md"
                >
                  Select {packages.silver.name}
                </button>
              </div>

              {/* 4. Standard Package */}
              <div className="bg-zinc-950/70 border-2 border-[#dfb557]/30 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between transition-transform hover:-translate-y-1">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-400">{packages.standard.tier}</span>
                  <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">{packages.standard.name}</h3>
                  <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">{packages.standard.price}</p>
                  
                  {packages.standard.services && packages.standard.services.length > 0 && (
                    <div className="text-xs sm:text-sm text-zinc-300 mb-4 font-light space-y-1.5 border-b border-zinc-800 pb-3">
                      <p className="text-[#dfb557] font-semibold uppercase tracking-wider text-[10px]">ናይ ቀረጻ ኣገልግሎታት:</p>
                      <ul className="space-y-1 pl-1">
                        {packages.standard.services.map((srv, idx) => (
                          <li key={idx}>{srv}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <ul className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-8 font-light">
                    {(packages.standard.features || []).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">{feat}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={() => handleSelectPackage('standard')}
                  className="w-full bg-zinc-900 border border-[#dfb557]/50 text-zinc-100 py-3 text-[11px] uppercase font-bold tracking-[0.3em] hover:bg-[#dfb557] hover:text-black transition-all duration-300 rounded-xl shadow-md"
                >
                  Select {packages.standard.name}
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