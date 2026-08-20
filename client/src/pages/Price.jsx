
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
//   const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
//   const [receiptToShare, setReceiptToShare] = useState(null);
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

//   const buildReceiptText = (note) => {
//     return (
//       `┌────────────────────────────────────────┐\n` +
//       `│       ✨ HABESHA FILM PRODUCTION ✨     │\n` +
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
//       `✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ!`
//     );
//   };

//   const handleShareReceipt = (note) => {
//     setReceiptToShare(note);
//     setIsReceiptModalOpen(true);
//   };

//   const handleNativeShareReceipt = async () => {
//     if (!receiptToShare) return;

//     const receiptText = buildReceiptText(receiptToShare);

//     try {
//       if (navigator.share) {
//         await navigator.share({
//           title: 'Booking Receipt - Habesha Film Production',
//           text: receiptText,
//         });
//       } else if (navigator.clipboard) {
//         await navigator.clipboard.writeText(receiptText);
//         alert("ደረሰኝ (Receipt) ናብ ክሊፕቦርድ ተቐዲሑ ኣሎ! ንዓሚል ክትልእኮ ትኽእል ኢኻ።");
//       }
//     } catch (err) {
//       if (err?.name !== 'AbortError') {
//         console.error("Error sharing receipt:", err);
//       }
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

//               {/* Package Services & Features — visible when Select is used from Admin Edit Mode */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {selectedPackage.services && selectedPackage.services.length > 0 && (
//                   <div className="bg-zinc-900 border border-[#dfb557]/25 rounded-xl p-4">
//                     <span className="text-[10px] uppercase text-[#dfb557] font-bold tracking-wider block mb-2">
//                       ናይ ቀረጻ ኣገልግሎታት
//                     </span>
//                     <ul className="space-y-1.5 text-[11px] text-zinc-300">
//                       {selectedPackage.services.map((service, index) => (
//                         <li key={index}>{service}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {selectedPackage.features && selectedPackage.features.length > 0 && (
//                   <div className="bg-zinc-900 border border-[#dfb557]/25 rounded-xl p-4">
//                     <span className="text-[10px] uppercase text-[#dfb557] font-bold tracking-wider block mb-2">
//                       ባህርያትን ረብሓታትን
//                     </span>
//                     <ul className="space-y-1.5 text-[11px] text-zinc-300">
//                       {selectedPackage.features.map((feature, index) => (
//                         <li key={index}>{feature}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
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

//       {/* Premium Black & Gold Receipt Preview / Share Modal */}
//       {isReceiptModalOpen && receiptToShare && (
//         <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60] flex items-center justify-center p-4 overflow-y-auto">
//           <div className="w-full max-w-2xl my-8">
//             <div className="relative bg-black text-white border-2 border-[#dfb557] rounded-2xl shadow-[0_0_50px_rgba(223,181,87,0.18)] overflow-hidden">
//               {/* Gold decorative header */}
//               <div className="absolute top-0 left-0 right-0 h-1 bg-[#dfb557]"></div>
//               <div className="absolute top-3 left-3 w-10 h-10 border-l border-t border-[#dfb557]/60 rounded-tl-lg"></div>
//               <div className="absolute top-3 right-3 w-10 h-10 border-r border-t border-[#dfb557]/60 rounded-tr-lg"></div>
//               <div className="absolute bottom-3 left-3 w-10 h-10 border-l border-b border-[#dfb557]/60 rounded-bl-lg"></div>
//               <div className="absolute bottom-3 right-3 w-10 h-10 border-r border-b border-[#dfb557]/60 rounded-br-lg"></div>

//               <div className="p-6 md:p-10">
//                 <div className="text-center border-b border-[#dfb557]/30 pb-6 mb-6">
//                   <div className="text-[#dfb557] text-2xl mb-2">✦</div>
//                   <p className="text-[10px] uppercase tracking-[0.45em] text-[#dfb557] font-semibold">
//                     HABESHA FILM PRODUCTION
//                   </p>
//                   <h3 className="text-2xl md:text-3xl font-serif text-white mt-2">
//                     Booking Receipt
//                   </h3>
//                   <div className="w-16 h-px bg-[#dfb557] mx-auto mt-3"></div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//                   <div className="bg-zinc-950 border border-[#dfb557]/20 rounded-xl p-4">
//                     <span className="text-[9px] uppercase tracking-wider text-[#dfb557] block mb-1">Customer</span>
//                     <span className="text-sm text-white">{receiptToShare.customerName}</span>
//                   </div>
//                   <div className="bg-zinc-950 border border-[#dfb557]/20 rounded-xl p-4">
//                     <span className="text-[9px] uppercase tracking-wider text-[#dfb557] block mb-1">Booking Date</span>
//                     <span className="text-sm text-white">{receiptToShare.bookingDate}</span>
//                   </div>
//                   <div className="bg-zinc-950 border border-[#dfb557]/20 rounded-xl p-4">
//                     <span className="text-[9px] uppercase tracking-wider text-[#dfb557] block mb-1">Package</span>
//                     <span className="text-sm text-white">{receiptToShare.packageName}</span>
//                   </div>
//                   <div className="bg-zinc-950 border border-[#dfb557]/20 rounded-xl p-4">
//                     <span className="text-[9px] uppercase tracking-wider text-[#dfb557] block mb-1">Price</span>
//                     <span className="text-lg font-bold text-[#dfb557]">{receiptToShare.packagePrice}</span>
//                   </div>
//                 </div>

//                 <div className="space-y-5">
//                   <div>
//                     <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#dfb557] font-bold border-b border-[#dfb557]/20 pb-2 mb-3">
//                       ናይ ቀረጻ ኣገልግሎታት
//                     </h4>
//                     <div className="space-y-1.5 text-sm text-white">
//                       {(receiptToShare.packageServices || []).map((service, index) => (
//                         <p key={index}>{service}</p>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#dfb557] font-bold border-b border-[#dfb557]/20 pb-2 mb-3">
//                       ባህርያትን ረብሓታትን
//                     </h4>
//                     <div className="space-y-1.5 text-sm text-white">
//                       {(receiptToShare.packageFeatures || []).map((feature, index) => (
//                         <p key={index}>{feature}</p>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t border-[#dfb557]/30 mt-7 pt-5 text-center">
//                   <p className="text-[10px] text-[#dfb557] uppercase tracking-[0.25em]">
//                     Habesha Film Production Studio
//                   </p>
//                   <p className="text-xs text-zinc-300 mt-2">
//                     ✦ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ! ✦
//                   </p>
//                 </div>

//                 <div className="flex gap-3 mt-7">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setIsReceiptModalOpen(false);
//                       setReceiptToShare(null);
//                     }}
//                     className="w-1/2 bg-zinc-900 border border-zinc-700 text-white py-3 rounded-xl text-xs uppercase font-bold hover:bg-zinc-800 transition-all"
//                   >
//                     Close
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleNativeShareReceipt}
//                     className="w-1/2 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold tracking-wider hover:bg-[#c99f45] transition-all shadow-lg"
//                   >
//                     Share Receipt 🔗
//                   </button>
//                 </div>
//               </div>
//             </div>
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
// import html2canvas from 'html2canvas';

// // Receipt sharing uses html2canvas (window.html2canvas) to share the exact black/white/gold PNG design.

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
//   const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
//   const [receiptToShare, setReceiptToShare] = useState(null);
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

//   const buildReceiptText = (note) => {
//     return (
//       `┌────────────────────────────────────────┐\n` +
//       `│       ✨ HABESHA FILM PRODUCTION ✨     │\n` +
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
//       `✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ!`
//     );
//   };

//   const handleShareReceipt = async (note) => {
//     const escapeHtml = (value) =>
//       String(value ?? '')
//         .replace(/&/g, '&amp;')
//         .replace(/</g, '&lt;')
//         .replace(/>/g, '&gt;')
//         .replace(/"/g, '&quot;')
//         .replace(/'/g, '&#039;')
//         window.html2canvas(...);

//     const servicesHtml =
//       note.packageServices && note.packageServices.length > 0
//         ? note.packageServices
//             .map((service) => `<li>${escapeHtml(service)}</li>`)
//             .join('')
//         : '<li>ሕጂ ንጊዜው ዝተወሰነ ኣገልግሎት የለን</li>';

//     const featuresHtml =
//       note.packageFeatures && note.packageFeatures.length > 0
//         ? note.packageFeatures
//             .map((feature) => `<li>${escapeHtml(feature)}</li>`)
//             .join('')
//         : '<li>የለን</li>';

//     // Create the exact black/white/gold receipt as an off-screen HTML document.
//     // It is then converted to a PNG so the recipient sees the same design.
//     const receiptHtml = `
//       <div id="receipt-share-card" style="
//         width: 900px;
//         box-sizing: border-box;
//         background: #050505;
//         color: #ffffff;
//         padding: 42px;
//         font-family: Arial, 'Noto Sans Ethiopic', sans-serif;
//         border: 4px solid #dfb557;
//         border-radius: 24px;
//         position: relative;
//         overflow: hidden;
//       ">
//         <div style="
//           position:absolute;
//           inset:14px;
//           border:1px solid rgba(223,181,87,.45);
//           border-radius:16px;
//           pointer-events:none;
//         "></div>

//         <div style="text-align:center; position:relative; z-index:1;">
//           <div style="
//             color:#dfb557;
//             font-size:18px;
//             font-weight:700;
//             letter-spacing:5px;
//             margin-bottom:10px;
//           ">HABESHA FILM PRODUCTION</div>

//           <div style="
//             color:#ffffff;
//             font-size:28px;
//             font-weight:700;
//             margin-bottom:8px;
//           ">BOOKING RECEIPT</div>

//           <div style="
//             width:90px;
//             height:3px;
//             background:#dfb557;
//             margin:0 auto 26px;
//           "></div>
//         </div>

//         <div style="
//           position:relative;
//           z-index:1;
//           border:1px solid rgba(223,181,87,.55);
//           border-radius:16px;
//           padding:24px;
//           background:#0b0b0b;
//         ">
//           <div style="display:flex; justify-content:space-between; gap:24px; margin-bottom:16px;">
//             <div>
//               <div style="color:#dfb557; font-size:12px; font-weight:700; letter-spacing:2px; margin-bottom:6px;">
//                 CUSTOMER NAME
//               </div>
//               <div style="font-size:22px; font-weight:700; color:#ffffff;">
//                 ${escapeHtml(note.customerName)}
//               </div>
//             </div>

//             <div style="text-align:right;">
//               <div style="color:#dfb557; font-size:12px; font-weight:700; letter-spacing:2px; margin-bottom:6px;">
//                 BOOKING DATE
//               </div>
//               <div style="font-size:18px; font-weight:600; color:#ffffff;">
//                 ${escapeHtml(note.bookingDate)}
//               </div>
//             </div>
//           </div>

//           <div style="
//             height:1px;
//             background:rgba(223,181,87,.35);
//             margin:18px 0;
//           "></div>

//           <div style="display:flex; justify-content:space-between; align-items:center; gap:20px;">
//             <div>
//               <div style="color:#dfb557; font-size:11px; font-weight:700; letter-spacing:2px; margin-bottom:6px;">
//                 PACKAGE
//               </div>
//               <div style="font-size:25px; font-weight:700; color:#ffffff;">
//                 ${escapeHtml(note.packageName)}
//               </div>
//               <div style="font-size:13px; color:#dfb557; margin-top:5px;">
//                 ${escapeHtml(note.tier)}
//               </div>
//             </div>

//             <div style="
//               color:#dfb557;
//               font-size:28px;
//               font-weight:800;
//               white-space:nowrap;
//             ">
//               ${escapeHtml(note.packagePrice)}
//             </div>
//           </div>

//           <div style="
//             height:1px;
//             background:rgba(223,181,87,.35);
//             margin:22px 0;
//           "></div>

//           <div style="display:grid; grid-template-columns:1fr 1fr; gap:28px;">
//             <div>
//               <div style="
//                 color:#dfb557;
//                 font-size:13px;
//                 font-weight:700;
//                 letter-spacing:1.5px;
//                 margin-bottom:10px;
//               ">SERVICES</div>
//               <ul style="
//                 margin:0;
//                 padding-left:20px;
//                 color:#ffffff;
//                 font-size:14px;
//                 line-height:1.7;
//               ">
//                 ${servicesHtml}
//               </ul>
//             </div>

//             <div>
//               <div style="
//                 color:#dfb557;
//                 font-size:13px;
//                 font-weight:700;
//                 letter-spacing:1.5px;
//                 margin-bottom:10px;
//               ">FEATURES</div>
//               <ul style="
//                 margin:0;
//                 padding-left:20px;
//                 color:#ffffff;
//                 font-size:14px;
//                 line-height:1.7;
//               ">
//                 ${featuresHtml}
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div style="
//           text-align:center;
//           position:relative;
//           z-index:1;
//           margin-top:24px;
//           color:#ffffff;
//           font-size:13px;
//           line-height:1.7;
//         ">
//           <div style="color:#dfb557; font-weight:700; letter-spacing:2px;">
//             HABESHA FILM PRODUCTION STUDIO
//           </div>
//           <div>✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ! ✨</div>
//         </div>
//       </div>
//     `;

//     let container = null;

//     try {
//       // html2canvas must be available in the project.
//       if (typeof window.html2canvas !== 'function') {
//         alert(
//           "Receipt image ንምፍጣር html2canvas የድሊ። ኣብ project ኣእትዎ፣ ድሕሪኡ Share Receipt እንደገና ፈትን።"
//         );
//         return;
//       }

//       container = document.createElement('div');
//       container.style.position = 'fixed';
//       container.style.left = '-100000px';
//       container.style.top = '0';
//       container.style.width = '900px';
//       container.style.zIndex = '-1';
//       container.innerHTML = receiptHtml;
//       document.body.appendChild(container);

//       const receiptElement = container.querySelector('#receipt-share-card');

//       // Wait for browser layout/fonts before rendering the PNG.
//       await new Promise((resolve) => requestAnimationFrame(resolve));

//       const canvas = await window.html2canvas(receiptElement, {
//         backgroundColor: '#050505',
//         scale: 2,
//         useCORS: true,
//         logging: false,
//       });

//       const blob = await new Promise((resolve) =>
//         canvas.toBlob(resolve, 'image/png', 1)
//       );

//       if (!blob) {
//         throw new Error('Could not create receipt image.');
//       }

//       const file = new File(
//         [blob],
//         `Habesha-Film-Receipt-${Date.now()}.png`,
//         { type: 'image/png' }
//       );

//       // Native share with the actual PNG file.
//       if (
//         navigator.share &&
//         (!navigator.canShare || navigator.canShare({ files: [file] }))
//       ) {
//         await navigator.share({
//           title: 'Habesha Film Production - Booking Receipt',
//           text: 'Booking Receipt - Habesha Film Production',
//           files: [file],
//         });
//       } else {
//         // Fallback: download the exact image if file sharing is unsupported.
//         const imageUrl = URL.createObjectURL(blob);
//         const link = document.createElement('a');
//         link.href = imageUrl;
//         link.download = file.name;
//         document.body.appendChild(link);
//         link.click();
//         link.remove();
//         URL.revokeObjectURL(imageUrl);

//         alert(
//           "እቲ Receipt ብPNG ስእሊ ተዳልዩ ኣሎ። እቲ ስእሊ ኣብ WhatsApp ወይ ካልእ app ክትልእኮ ትኽእል።"
//         );
//       }
//     } catch (err) {
//       console.error('Error creating/sharing receipt image:', err);

//       // If the user closes the native share dialog, do not show an error.
//       if (err?.name !== 'AbortError') {
//         alert("Receipt ስእሊ ምፍጣር ወይ ምስዳድ ኣይተዓወተን።");
//       }
//     } finally {
//       if (container && container.parentNode) {
//         container.parentNode.removeChild(container);
//       }
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

//               {/* Package Services & Features — visible when Select is used from Admin Edit Mode */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {selectedPackage.services && selectedPackage.services.length > 0 && (
//                   <div className="bg-zinc-900 border border-[#dfb557]/25 rounded-xl p-4">
//                     <span className="text-[10px] uppercase text-[#dfb557] font-bold tracking-wider block mb-2">
//                       ናይ ቀረጻ ኣገልግሎታት
//                     </span>
//                     <ul className="space-y-1.5 text-[11px] text-zinc-300">
//                       {selectedPackage.services.map((service, index) => (
//                         <li key={index}>{service}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {selectedPackage.features && selectedPackage.features.length > 0 && (
//                   <div className="bg-zinc-900 border border-[#dfb557]/25 rounded-xl p-4">
//                     <span className="text-[10px] uppercase text-[#dfb557] font-bold tracking-wider block mb-2">
//                       ባህርያትን ረብሓታትን
//                     </span>
//                     <ul className="space-y-1.5 text-[11px] text-zinc-300">
//                       {selectedPackage.features.map((feature, index) => (
//                         <li key={index}>{feature}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
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

//       {/* Premium Black & Gold Receipt Preview / Share Modal */}
//       {isReceiptModalOpen && receiptToShare && (
//         <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60] flex items-center justify-center p-4 overflow-y-auto">
//           <div className="w-full max-w-2xl my-8">
//             <div className="relative bg-black text-white border-2 border-[#dfb557] rounded-2xl shadow-[0_0_50px_rgba(223,181,87,0.18)] overflow-hidden">
//               {/* Gold decorative header */}
//               <div className="absolute top-0 left-0 right-0 h-1 bg-[#dfb557]"></div>
//               <div className="absolute top-3 left-3 w-10 h-10 border-l border-t border-[#dfb557]/60 rounded-tl-lg"></div>
//               <div className="absolute top-3 right-3 w-10 h-10 border-r border-t border-[#dfb557]/60 rounded-tr-lg"></div>
//               <div className="absolute bottom-3 left-3 w-10 h-10 border-l border-b border-[#dfb557]/60 rounded-bl-lg"></div>
//               <div className="absolute bottom-3 right-3 w-10 h-10 border-r border-b border-[#dfb557]/60 rounded-br-lg"></div>

//               <div className="p-6 md:p-10">
//                 <div className="text-center border-b border-[#dfb557]/30 pb-6 mb-6">
//                   <div className="text-[#dfb557] text-2xl mb-2">✦</div>
//                   <p className="text-[10px] uppercase tracking-[0.45em] text-[#dfb557] font-semibold">
//                     HABESHA FILM PRODUCTION
//                   </p>
//                   <h3 className="text-2xl md:text-3xl font-serif text-white mt-2">
//                     Booking Receipt
//                   </h3>
//                   <div className="w-16 h-px bg-[#dfb557] mx-auto mt-3"></div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//                   <div className="bg-zinc-950 border border-[#dfb557]/20 rounded-xl p-4">
//                     <span className="text-[9px] uppercase tracking-wider text-[#dfb557] block mb-1">Customer</span>
//                     <span className="text-sm text-white">{receiptToShare.customerName}</span>
//                   </div>
//                   <div className="bg-zinc-950 border border-[#dfb557]/20 rounded-xl p-4">
//                     <span className="text-[9px] uppercase tracking-wider text-[#dfb557] block mb-1">Booking Date</span>
//                     <span className="text-sm text-white">{receiptToShare.bookingDate}</span>
//                   </div>
//                   <div className="bg-zinc-950 border border-[#dfb557]/20 rounded-xl p-4">
//                     <span className="text-[9px] uppercase tracking-wider text-[#dfb557] block mb-1">Package</span>
//                     <span className="text-sm text-white">{receiptToShare.packageName}</span>
//                   </div>
//                   <div className="bg-zinc-950 border border-[#dfb557]/20 rounded-xl p-4">
//                     <span className="text-[9px] uppercase tracking-wider text-[#dfb557] block mb-1">Price</span>
//                     <span className="text-lg font-bold text-[#dfb557]">{receiptToShare.packagePrice}</span>
//                   </div>
//                 </div>

//                 <div className="space-y-5">
//                   <div>
//                     <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#dfb557] font-bold border-b border-[#dfb557]/20 pb-2 mb-3">
//                       ናይ ቀረጻ ኣገልግሎታት
//                     </h4>
//                     <div className="space-y-1.5 text-sm text-white">
//                       {(receiptToShare.packageServices || []).map((service, index) => (
//                         <p key={index}>{service}</p>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#dfb557] font-bold border-b border-[#dfb557]/20 pb-2 mb-3">
//                       ባህርያትን ረብሓታትን
//                     </h4>
//                     <div className="space-y-1.5 text-sm text-white">
//                       {(receiptToShare.packageFeatures || []).map((feature, index) => (
//                         <p key={index}>{feature}</p>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t border-[#dfb557]/30 mt-7 pt-5 text-center">
//                   <p className="text-[10px] text-[#dfb557] uppercase tracking-[0.25em]">
//                     Habesha Film Production Studio
//                   </p>
//                   <p className="text-xs text-zinc-300 mt-2">
//                     ✦ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ! ✦
//                   </p>
//                 </div>

//                 <div className="flex gap-3 mt-7">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setIsReceiptModalOpen(false);
//                       setReceiptToShare(null);
//                     }}
//                     className="w-1/2 bg-zinc-900 border border-zinc-700 text-white py-3 rounded-xl text-xs uppercase font-bold hover:bg-zinc-800 transition-all"
//                   >
//                     Close
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleNativeShareReceipt}
//                     className="w-1/2 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold tracking-wider hover:bg-[#c99f45] transition-all shadow-lg"
//                   >
//                     Share Receipt 🔗
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// }
// export default Price;


// import React, { useState, useEffect } from 'react';
// import html2canvas from 'html2canvas';
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

//   const handleShareReceipt = async (note) => {
//     const escapeHtml = (value) =>
//       String(value ?? '')
//         .replace(/&/g, '&amp;')
//         .replace(/</g, '&lt;')
//         .replace(/>/g, '&gt;')
//         .replace(/"/g, '&quot;')
//         .replace(/'/g, '&#039;');

//     const servicesHtml =
//       note.packageServices && note.packageServices.length > 0
//         ? note.packageServices
//             .map((service) => `<li>${escapeHtml(service)}</li>`)
//             .join('')
//         : '<li>ሕጂ ንጊዜው ዝተወሰነ ኣገልግሎት የለን</li>';

//     const featuresHtml =
//       note.packageFeatures && note.packageFeatures.length > 0
//         ? note.packageFeatures
//             .map((feature) => `<li>${escapeHtml(feature)}</li>`)
//             .join('')
//         : '<li>የለን</li>';

//     const receiptHtml = `
//       <div id="receipt-share-card" style="
//         width: 900px;
//         box-sizing: border-box;
//         background: #050505;
//         color: #ffffff;
//         padding: 42px;
//         font-family: Arial, 'Noto Sans Ethiopic', sans-serif;
//         border: 4px solid #dfb557;
//         border-radius: 24px;
//         position: relative;
//         overflow: hidden;
//       ">
//         <div style="
//           position:absolute;
//           inset:14px;
//           border:1px solid rgba(223,181,87,.45);
//           border-radius:16px;
//           pointer-events:none;
//         "></div>

//         <div style="text-align:center; position:relative; z-index:1;">
//           <div style="
//             color:#dfb557;
//             font-size:18px;
//             font-weight:700;
//             letter-spacing:5px;
//             margin-bottom:10px;
//           ">HABESHA FILM PRODUCTION</div>

//           <div style="
//             color:#ffffff;
//             font-size:28px;
//             font-weight:700;
//             margin-bottom:8px;
//           ">BOOKING RECEIPT</div>

//           <div style="
//             width:90px;
//             height:3px;
//             background:#dfb557;
//             margin:0 auto 26px;
//           "></div>
//         </div>

//         <div style="
//           position:relative;
//           z-index:1;
//           border:1px solid rgba(223,181,87,.55);
//           border-radius:16px;
//           padding:24px;
//           background:#0b0b0b;
//         ">
//           <div style="display:flex; justify-content:space-between; gap:24px; margin-bottom:16px;">
//             <div>
//               <div style="color:#dfb557; font-size:12px; font-weight:700; letter-spacing:2px; margin-bottom:6px;">
//                 CUSTOMER NAME
//               </div>
//               <div style="font-size:22px; font-weight:700; color:#ffffff;">
//                 ${escapeHtml(note.customerName)}
//               </div>
//             </div>

//             <div style="text-align:right;">
//               <div style="color:#dfb557; font-size:12px; font-weight:700; letter-spacing:2px; margin-bottom:6px;">
//                 BOOKING DATE
//               </div>
//               <div style="font-size:18px; font-weight:600; color:#ffffff;">
//                 ${escapeHtml(note.bookingDate)}
//               </div>
//             </div>
//           </div>

//           <div style="height:1px; background:rgba(223,181,87,.35); margin:18px 0;"></div>

//           <div style="display:flex; justify-content:space-between; align-items:center; gap:20px;">
//             <div>
//               <div style="color:#dfb557; font-size:11px; font-weight:700; letter-spacing:2px; margin-bottom:6px;">
//                 PACKAGE
//               </div>
//               <div style="font-size:25px; font-weight:700; color:#ffffff;">
//                 ${escapeHtml(note.packageName)}
//               </div>
//               <div style="font-size:13px; color:#dfb557; margin-top:5px;">
//                 ${escapeHtml(note.tier)}
//               </div>
//             </div>

//             <div style="
//               color:#dfb557;
//               font-size:28px;
//               font-weight:800;
//               white-space:nowrap;
//             ">
//               ${escapeHtml(note.packagePrice)}
//             </div>
//           </div>

//           <div style="height:1px; background:rgba(223,181,87,.35); margin:22px 0;"></div>

//           <div style="display:grid; grid-template-columns:1fr 1fr; gap:28px;">
//             <div>
//               <div style="
//                 color:#dfb557;
//                 font-size:13px;
//                 font-weight:700;
//                 letter-spacing:1.5px;
//                 margin-bottom:10px;
//               ">SERVICES</div>
//               <ul style="
//                 margin:0;
//                 padding-left:20px;
//                 color:#ffffff;
//                 font-size:14px;
//                 line-height:1.7;
//               ">
//                 ${servicesHtml}
//               </ul>
//             </div>

//             <div>
//               <div style="
//                 color:#dfb557;
//                 font-size:13px;
//                 font-weight:700;
//                 letter-spacing:1.5px;
//                 margin-bottom:10px;
//               ">FEATURES</div>
//               <ul style="
//                 margin:0;
//                 padding-left:20px;
//                 color:#ffffff;
//                 font-size:14px;
//                 line-height:1.7;
//               ">
//                 ${featuresHtml}
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div style="
//           text-align:center;
//           position:relative;
//           z-index:1;
//           margin-top:24px;
//           color:#ffffff;
//           font-size:13px;
//           line-height:1.7;
//         ">
//           <div style="color:#dfb557; font-weight:700; letter-spacing:2px;">
//             HABESHA FILM PRODUCTION STUDIO
//           </div>
//           <div>✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ! ✨</div>
//         </div>
//       </div>
//     `;

//     let container = null;

//     try {
//       container = document.createElement('div');
//       container.style.position = 'fixed';
//       container.style.left = '-100000px';
//       container.style.top = '0';
//       container.style.width = '900px';
//       container.style.zIndex = '-1';
//       container.innerHTML = receiptHtml;
//       document.body.appendChild(container);

//       const receiptElement = container.querySelector('#receipt-share-card');

//       await new Promise((resolve) => requestAnimationFrame(resolve));

//       const canvas = await html2canvas(receiptElement, {
//         backgroundColor: '#050505',
//         scale: 2,
//         useCORS: true,
//         logging: false,
//       });

//       const blob = await new Promise((resolve) =>
//         canvas.toBlob(resolve, 'image/png', 1)
//       );

//       if (!blob) {
//         throw new Error('Could not create receipt image.');
//       }

//       const file = new File(
//         [blob],
//         `Habesha-Film-Receipt-${Date.now()}.png`,
//         { type: 'image/png' }
//       );

//       if (
//         navigator.share &&
//         (!navigator.canShare || navigator.canShare({ files: [file] }))
//       ) {
//         await navigator.share({
//           title: 'Booking Receipt - Habesha Film Production',
//           text: 'Booking Receipt - Habesha Film Production',
//           files: [file],
//         });
//       } else {
//         const imageUrl = URL.createObjectURL(blob);
//         const link = document.createElement('a');
//         link.href = imageUrl;
//         link.download = file.name;
//         document.body.appendChild(link);
//         link.click();
//         link.remove();
//         URL.revokeObjectURL(imageUrl);

//         alert(
//           "እቲ Receipt ብPNG ስእሊ ተዳልዩ ኣሎ። እቲ ስእሊ ኣብ WhatsApp ወይ ካልእ app ክትልእኮ ትኽእል።"
//         );
//       }
//     } catch (err) {
//       console.error("Error creating/sharing receipt:", err);

//       if (err?.name !== 'AbortError') {
//         alert("Receipt ስእሊ ምፍጣር ወይ ምስዳድ ኣይተዓወተን።");
//       }
//     } finally {
//       if (container && container.parentNode) {
//         container.parentNode.removeChild(container);
//       }
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
//             <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">እዚ ገጽ ብሚስጥራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።</p>

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

// import React, { useState, useEffect } from 'react';
// import html2canvas from 'html2canvas';
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

//   // Customer / Booking
//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
//   const [customerName, setCustomerName] = useState('');
//   const [bookingDate, setBookingDate] = useState('');
//   const [customizedPrice, setCustomizedPrice] = useState('');

//   // Booking edit state
//   const [editingNoteId, setEditingNoteId] = useState(null);

//   // Admin notebook
//   const [notebookList, setNotebookList] = useState([]);

//   const defaultPackages = {
//     premium: {
//       tier: 'Ultimate VIP',
//       name: 'Premium',
//       price: '$1,000+',
//       services: [
//         '• ቪድዮ ቀረጻ (Unlimited)',
//         '• ክልተ ኤክስፐርት ካሜራማን',
//         '• Cinematic Color Grading & VFX',
//       ],
//       features: [
//         '✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)',
//         '✓ ክልተ ኤክስፐርት ካሜራማን',
//         '✓ Cinematic Color Grading & VFX',
//         '🎁 ቦናስ: ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር',
//       ],
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
//         '• ኩሉ ሶፍት ኮፒ (All Soft Copy)',
//       ],
//       features: [
//         '✓ 800 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)',
//         '✓ 2 ሳይን ቦርድ (30×45)',
//         '✓ 3 ቦርድ (50×80, 40×60, 30×45)',
//         '✓ 400 ምስጋና ካርድ (Thank You Card)',
//         '✓ 8 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     silver: {
//       tier: 'Advanced',
//       name: 'Silver',
//       price: '240,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)',
//       ],
//       features: [
//         '✓ 500 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 2 ቦርድ (50×80 & 40×60)',
//         '✓ 250 ምስጋና ካርድ (Thank You Card)',
//         '✓ 6 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     standard: {
//       tier: 'Standard',
//       name: 'Standard',
//       price: '190,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)',
//       ],
//       features: [
//         '✓ 300 ፎቶዎች (10×15)',
//         '✓ 1 ላሚኔትድ ፎቶ (30×90)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 1 ቦርድ (50×80)',
//         '✓ 200 ምስጋና ካርድ (Thank You Card)',
//         '✓ 4 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },
//   };

//   const [packages, setPackages] = useState(defaultPackages);
//   const [tempPackages, setTempPackages] = useState(defaultPackages);

//   // =========================================================
//   // LOAD DATA
//   // =========================================================

//   useEffect(() => {
//     fetch(
//       'https://habesha-film-production-server.onrender.com/api/packages'
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           const mergedData = {
//             premium: {
//               ...defaultPackages.premium,
//               ...data.premium,
//               services: Array.isArray(data.premium?.services)
//                 ? data.premium.services
//                 : defaultPackages.premium.services,
//               features: Array.isArray(data.premium?.features)
//                 ? data.premium.features
//                 : defaultPackages.premium.features,
//             },

//             gold: {
//               ...defaultPackages.gold,
//               ...data.gold,
//               services: Array.isArray(data.gold?.services)
//                 ? data.gold.services
//                 : defaultPackages.gold.services,
//               features: Array.isArray(data.gold?.features)
//                 ? data.gold.features
//                 : defaultPackages.gold.features,
//             },

//             silver: {
//               ...defaultPackages.silver,
//               ...data.silver,
//               services: Array.isArray(data.silver?.services)
//                 ? data.silver.services
//                 : defaultPackages.silver.services,
//               features: Array.isArray(data.silver?.features)
//                 ? data.silver.features
//                 : defaultPackages.silver.features,
//             },

//             standard: {
//               ...defaultPackages.standard,
//               ...data.standard,
//               services: Array.isArray(data.standard?.services)
//                 ? data.standard.services
//                 : defaultPackages.standard.services,
//               features: Array.isArray(data.standard?.features)
//                 ? data.standard.features
//                 : defaultPackages.standard.features,
//             },
//           };

//           setPackages(mergedData);
//           setTempPackages(mergedData);
//         }
//       })
//       .catch((err) => {
//         console.log('Failed to fetch packages:', err);
//       });

//     // Authentication
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

//     // Notebook
//     const savedNotes = localStorage.getItem(
//       'adminNotebookListPersistent'
//     );

//     if (savedNotes) {
//       try {
//         const parsedNotes = JSON.parse(savedNotes);

//         if (Array.isArray(parsedNotes)) {
//           setNotebookList(parsedNotes);
//         }
//       } catch (e) {
//         console.log('Error parsing saved notes');
//       }
//     }
//   }, []);

//   // =========================================================
//   // LOGIN
//   // =========================================================

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setError(false);

//     try {
//       const response = await fetch(
//         'https://habesha-film-production-server.onrender.com/api/auth/verify-passcode',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             passcode,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsAuthenticated(true);

//         const expiryDuration = 10 * 60 * 1000;

//         const authData = {
//           value: 'true',
//           expiry: new Date().getTime() + expiryDuration,
//         };

//         localStorage.setItem(
//           'priceAuthData',
//           JSON.stringify(authData)
//         );
//       } else {
//         setError(true);
//       }
//     } catch (err) {
//       console.error('Error verifying passcode:', err);
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================================
//   // ADMIN EDIT GATE
//   // =========================================================

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

//   // =========================================================
//   // SELECT PACKAGE
//   // IMPORTANT:
//   // SERVICES + FEATURES ARE NOW INCLUDED
//   // =========================================================

//   const handleSelectPackageClick = (
//     pkgKey,
//     isFromEdit = false
//   ) => {
//     const sourcePackages = isFromEdit
//       ? tempPackages
//       : packages;

//     const pkg = sourcePackages[pkgKey];

//     if (!pkg) {
//       console.error('Package not found:', pkgKey);
//       return;
//     }

//     const completePackage = {
//       ...pkg,

//       services: Array.isArray(pkg.services)
//         ? [...pkg.services]
//         : [],

//       features: Array.isArray(pkg.features)
//         ? [...pkg.features]
//         : [],
//     };

//     setSelectedPackage(completePackage);

//     setCustomerName('');
//     setBookingDate('');

//     setCustomizedPrice(
//       completePackage.price || ''
//     );

//     setEditingNoteId(null);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // SAVE BOOKING
//   // =========================================================

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !customerName.trim() ||
//       !bookingDate ||
//       !selectedPackage
//     ) {
//       return;
//     }

//     const newBookingRecord = {
//       id:
//         editingNoteId !== null
//           ? editingNoteId
//           : Date.now(),

//       customerName: customerName.trim(),

//       bookingDate,

//       packageName: selectedPackage.name,

//       packagePrice: customizedPrice,

//       tier: selectedPackage.tier,

//       // IMPORTANT
//       packageServices: Array.isArray(
//         selectedPackage.services
//       )
//         ? [...selectedPackage.services]
//         : [],

//       // IMPORTANT
//       packageFeatures: Array.isArray(
//         selectedPackage.features
//       )
//         ? [...selectedPackage.features]
//         : [],

//       timestamp: new Date().toLocaleString(),
//     };

//     let updatedList;

//     if (editingNoteId !== null) {
//       updatedList = notebookList.map((item) =>
//         item.id === editingNoteId
//           ? newBookingRecord
//           : item
//       );
//     } else {
//       updatedList = [
//         newBookingRecord,
//         ...notebookList,
//       ];
//     }

//     setNotebookList(updatedList);

//     localStorage.setItem(
//       'adminNotebookListPersistent',
//       JSON.stringify(updatedList)
//     );

//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);

//     alert(
//       'ብሰላም ኣብ Admin Notebook ተዓቂቡ እዩ!'
//     );
//   };

//   // =========================================================
//   // EDIT NOTE
//   // =========================================================

//   const handleEditNoteItem = (note) => {
//     const foundKey = Object.keys(packages).find(
//       (key) =>
//         packages[key].name === note.packageName
//     );

//     const pkg =
//       packages[foundKey] ||
//       packages.gold;

//     const completePackage = {
//       ...pkg,

//       services: Array.isArray(
//         note.packageServices
//       )
//         ? [...note.packageServices]
//         : Array.isArray(pkg.services)
//         ? [...pkg.services]
//         : [],

//       features: Array.isArray(
//         note.packageFeatures
//       )
//         ? [...note.packageFeatures]
//         : Array.isArray(pkg.features)
//         ? [...pkg.features]
//         : [],
//     };

//     setSelectedPackage(
//       completePackage
//     );

//     setCustomerName(
//       note.customerName || ''
//     );

//     setBookingDate(
//       note.bookingDate || ''
//     );

//     setCustomizedPrice(
//       note.packagePrice || ''
//     );

//     setEditingNoteId(note.id);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // DELETE NOTE
//   // =========================================================

//   const handleDeleteNote = (id) => {
//     const updatedList =
//       notebookList.filter(
//         (note) => note.id !== id
//       );

//     setNotebookList(updatedList);

//     localStorage.setItem(
//       'adminNotebookListPersistent',
//       JSON.stringify(updatedList)
//     );
//   };

//   // =========================================================
//   // ESCAPE HTML
//   // =========================================================

//   const escapeHtml = (value) =>
//     String(value ?? '')
//       .replace(/&/g, '&amp;')
//       .replace(/</g, '&lt;')
//       .replace(/>/g, '&gt;')
//       .replace(/"/g, '&quot;')
//       .replace(/'/g, '&#039;');

//   // =========================================================
//   // SHARE RECEIPT
//   // =========================================================

//   const handleShareReceipt = async (note) => {
//     const servicesHtml =
//       Array.isArray(note.packageServices) &&
//       note.packageServices.length > 0
//         ? note.packageServices
//             .map(
//               (service) =>
//                 `<li>${escapeHtml(service)}</li>`
//             )
//             .join('')
//         : '<li>ሕጂ ንጊዜው ዝተወሰነ ኣገልግሎት የለን</li>';

//     const featuresHtml =
//       Array.isArray(note.packageFeatures) &&
//       note.packageFeatures.length > 0
//         ? note.packageFeatures
//             .map(
//               (feature) =>
//                 `<li>${escapeHtml(feature)}</li>`
//             )
//             .join('')
//         : '<li>የለን</li>';

//     const receiptHtml = `
//       <div
//         id="receipt-share-card"
//         style="
//           width:900px;
//           box-sizing:border-box;
//           background:#050505;
//           color:#ffffff;
//           padding:42px;
//           font-family:Arial,'Noto Sans Ethiopic',sans-serif;
//           border:4px solid #dfb557;
//           border-radius:24px;
//           position:relative;
//           overflow:hidden;
//         "
//       >

//         <div
//           style="
//             position:absolute;
//             inset:14px;
//             border:1px solid rgba(223,181,87,.45);
//             border-radius:16px;
//             pointer-events:none;
//           "
//         ></div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//           "
//         >

//           <div
//             style="
//               color:#dfb557;
//               font-size:18px;
//               font-weight:700;
//               letter-spacing:5px;
//               margin-bottom:10px;
//             "
//           >
//             HABESHA FILM PRODUCTION
//           </div>

//           <div
//             style="
//               color:#ffffff;
//               font-size:28px;
//               font-weight:700;
//               margin-bottom:8px;
//             "
//           >
//             BOOKING RECEIPT
//           </div>

//           <div
//             style="
//               width:90px;
//               height:3px;
//               background:#dfb557;
//               margin:0 auto 26px;
//             "
//           ></div>
//         </div>

//         <div
//           style="
//             position:relative;
//             z-index:1;
//             border:1px solid rgba(223,181,87,.55);
//             border-radius:16px;
//             padding:24px;
//             background:#0b0b0b;
//           "
//         >

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               gap:24px;
//               margin-bottom:16px;
//             "
//           >

//             <div>
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 CUSTOMER NAME
//               </div>

//               <div
//                 style="
//                   font-size:22px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.customerName)}
//               </div>
//             </div>

//             <div style="text-align:right;">
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 BOOKING DATE
//               </div>

//               <div
//                 style="
//                   font-size:18px;
//                   font-weight:600;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.bookingDate)}
//               </div>
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:18px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               align-items:center;
//               gap:20px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:11px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 PACKAGE
//               </div>

//               <div
//                 style="
//                   font-size:25px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.packageName)}
//               </div>

//               <div
//                 style="
//                   font-size:13px;
//                   color:#dfb557;
//                   margin-top:5px;
//                 "
//               >
//                 ${escapeHtml(note.tier)}
//               </div>

//             </div>

//             <div
//               style="
//                 color:#dfb557;
//                 font-size:28px;
//                 font-weight:800;
//                 white-space:nowrap;
//               "
//             >
//               ${escapeHtml(note.packagePrice)}
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:22px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:grid;
//               grid-template-columns:1fr 1fr;
//               gap:28px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 SERVICES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${servicesHtml}
//               </ul>

//             </div>

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 FEATURES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${featuresHtml}
//               </ul>

//             </div>

//           </div>

//         </div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//             margin-top:24px;
//             color:#ffffff;
//             font-size:13px;
//             line-height:1.7;
//           "
//         >

//           <div
//             style="
//               color:#dfb557;
//               font-weight:700;
//               letter-spacing:2px;
//             "
//           >
//             HABESHA FILM PRODUCTION STUDIO
//           </div>

//           <div>
//             ✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ! ✨
//           </div>

//         </div>

//       </div>
//     `;

//     let container = null;

//     try {
//       container = document.createElement('div');

//       container.style.position = 'fixed';
//       container.style.left = '-100000px';
//       container.style.top = '0';
//       container.style.width = '900px';
//       container.style.zIndex = '-1';

//       container.innerHTML = receiptHtml;

//       document.body.appendChild(container);

//       const receiptElement =
//         container.querySelector(
//           '#receipt-share-card'
//         );

//       await new Promise((resolve) =>
//         requestAnimationFrame(resolve)
//       );

//       const canvas = await html2canvas(
//         receiptElement,
//         {
//           backgroundColor: '#050505',
//           scale: 2,
//           useCORS: true,
//           logging: false,
//         }
//       );

//       const blob = await new Promise(
//         (resolve) =>
//           canvas.toBlob(
//             resolve,
//             'image/png',
//             1
//           )
//       );

//       if (!blob) {
//         throw new Error(
//           'Could not create receipt image.'
//         );
//       }

//       const file = new File(
//         [blob],
//         `Habesha-Film-Receipt-${Date.now()}.png`,
//         {
//           type: 'image/png',
//         }
//       );

//       if (
//         navigator.share &&
//         (!navigator.canShare ||
//           navigator.canShare({
//             files: [file],
//           }))
//       ) {
//         await navigator.share({
//           title:
//             'Booking Receipt - Habesha Film Production',
//           text:
//             'Booking Receipt - Habesha Film Production',
//           files: [file],
//         });
//       } else {
//         const imageUrl =
//           URL.createObjectURL(blob);

//         const link =
//           document.createElement('a');

//         link.href = imageUrl;
//         link.download = file.name;

//         document.body.appendChild(link);

//         link.click();

//         link.remove();

//         URL.revokeObjectURL(imageUrl);

//         alert(
//           'እቲ Receipt ብPNG ስእሊ ተዳልዩ ኣሎ። እቲ ስእሊ ኣብ WhatsApp ወይ ካልእ app ክትልእኮ ትኽእል።'
//         );
//       }
//     } catch (err) {
//       console.error(
//         'Error creating/sharing receipt:',
//         err
//       );

//       if (err?.name !== 'AbortError') {
//         alert(
//           'Receipt ስእሊ ምፍጣር ወይ ምስዳድ ኣይተዓወተን።'
//         );
//       }
//     } finally {
//       if (
//         container &&
//         container.parentNode
//       ) {
//         container.parentNode.removeChild(
//           container
//         );
//       }
//     }
//   };

//   // =========================================================
//   // SAVE WEBSITE PACKAGES
//   // =========================================================

//   const handleSaveAndExit = async () => {
//     try {
//       const response = await fetch(
//         'https://habesha-film-production-server.onrender.com/api/packages/update',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(
//             tempPackages
//           ),
//         }
//       );

//       if (response.ok) {
//         setPackages(tempPackages);

//         alert(
//           'ዳታ ብሰላም ተሰዲዱ ኣብ ኩሉ ዲቫይስ ክረአ እዩ!'
//         );
//       } else {
//         alert(
//           'ሰርቨር ጌጋ ኣለዎ።'
//         );
//       }
//     } catch (err) {
//       console.error(
//         'Error saving to server:',
//         err
//       );

//       alert(
//         'ዳታ ናብ ሰርቨር ምልኣኽ ኣይከኣለን።'
//       );
//     }

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CANCEL EDIT MODE
//   // =========================================================

//   const handleCancelEdit = () => {
//     setTempPackages(packages);

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CLOSE BOOKING MODAL
//   // =========================================================

//   const handleCloseBookingModal = () => {
//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);
//   };

//   // =========================================================
//   // PACKAGE EDIT HELPERS
//   // =========================================================

//   const updateTempPackageField = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages((prev) => ({
//       ...prev,

//       [key]: {
//         ...prev[key],
//         [field]: value,
//       },
//     }));
//   };

//   const updateTempPackageArray = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages((prev) => ({
//       ...prev,

//       [key]: {
//         ...prev[key],

//         [field]: value
//           .split('\n')
//           .map((item) => item.trim())
//           .filter(
//             (item) => item.length > 0
//           ),
//       },
//     }));
//   };

//   // =========================================================
//   // RENDER
//   // =========================================================

//   return (
//     <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden flex flex-col justify-between">

//       <Navbar />

//       <div className="flex-grow flex items-center justify-center px-4 py-32">

//         {/* =====================================================
//             LOGIN
//         ===================================================== */}

//         {!isAuthenticated ? (
//           <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center relative">

//             <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">
//               Secure Access
//             </span>

//             <h2 className="text-2xl md:text-3xl font-serif mb-3 text-zinc-100">
//               Protected Price Page
//             </h2>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>

//             <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">
//               እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።
//             </p>

//             <form
//               onSubmit={handleLogin}
//               className="space-y-4"
//             >

//               <input
//                 type="password"
//                 placeholder="Enter Passcode"
//                 value={passcode}
//                 onChange={(e) =>
//                   setPasscode(
//                     e.target.value
//                   )
//                 }
//                 className="w-full px-4 py-3 bg-zinc-900 border border-[#dfb557]/50 rounded-xl focus:outline-none focus:border-[#dfb557] text-center tracking-widest text-lg text-zinc-100 placeholder-zinc-500 shadow-inner"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 disabled:opacity-50 rounded-xl shadow-lg"
//               >
//                 {loading
//                   ? 'Checking...'
//                   : 'Submit'}
//               </button>

//               {error && (
//                 <p className="text-red-400 text-xs mt-2 font-medium">
//                   ጌጋ ፓስኮድ! ደጊምካ ፈትን።
//                 </p>
//               )}

//             </form>
//           </div>

//         ) : isEditMode ? (

//           /* =====================================================
//              ADMIN EDIT MODE
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Administration Mode
//             </span>

//             <h1 className="text-3xl font-serif mb-4 text-zinc-100">
//               Edit Packages & Admin Notebook
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-8"></div>

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl space-y-8 text-left shadow-2xl">

//               {/* =================================================
//                   NOTEBOOK
//               ================================================= */}

//               <div className="bg-zinc-900 p-6 rounded-xl border border-[#dfb557]/30 space-y-4 shadow-inner">

//                 <div className="flex justify-between items-center border-b border-zinc-800 pb-3">

//                   <h3 className="text-xs font-bold uppercase text-[#dfb557] tracking-wider">
//                     📝 Admin Notebook & Customer Bookings
//                   </h3>

//                   <span className="text-[10px] text-zinc-400 font-light">
//                     ዋጋ፣ ኣገልግሎትን ባህርያትን ሒዙ ይዕቀብ
//                   </span>

//                 </div>

//                 <div className="space-y-4 pt-2 max-h-[500px] overflow-y-auto">

//                   {notebookList.length === 0 ? (

//                     <p className="text-zinc-500 text-xs italic text-center py-4">
//                       ዝኾነ ዝተመዝገበ ዓሚል የልቦን። ካብቲ ኣብ ታሕቲ ዘሎ Edit Mode ጌርካ Select ብምባል ክትምዝግብ ትኽእል።
//                     </p>

//                   ) : (

//                     notebookList.map((note) => (

//                       <div
//                         key={note.id}
//                         className="bg-zinc-950 border border-zinc-800 p-5 rounded-xl space-y-4 shadow-md"
//                       >

//                         {/* Customer Header */}

//                         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-zinc-900 pb-3">

//                           <div className="flex items-center gap-3 flex-wrap">

//                             <span className="text-base font-serif font-bold text-[#dfb557]">
//                               {note.customerName}
//                             </span>

//                             <span className="text-[10px] bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md text-zinc-300 font-semibold">
//                               📅 ዕለት: {note.bookingDate}
//                             </span>

//                           </div>

//                           <span className="text-[9px] text-zinc-500">
//                             ተመዝጊቡሉ: {note.timestamp}
//                           </span>

//                         </div>

//                         {/* Package */}

//                         <div className="bg-zinc-900/80 border border-[#dfb557]/30 p-4 rounded-xl space-y-4">

//                           <div className="flex justify-between items-center">

//                             <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#dfb557]">
//                               {note.tier}
//                             </span>

//                             <span className="text-lg font-serif font-bold text-[#dfb557]">
//                               {note.packagePrice}
//                             </span>

//                           </div>

//                           <h4 className="text-xl font-serif text-white">
//                             {note.packageName} Package
//                           </h4>

//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3 border-t border-zinc-800">

//                             {/* SERVICES */}

//                             <div className="space-y-2">

//                               <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                 SERVICES
//                               </span>

//                               <ul className="space-y-1 text-xs text-zinc-300">

//                                 {Array.isArray(
//                                   note.packageServices
//                                 ) &&
//                                 note.packageServices.length > 0 ? (

//                                   note.packageServices.map(
//                                     (service, index) => (
//                                       <li
//                                         key={index}
//                                       >
//                                         {service}
//                                       </li>
//                                     )
//                                   )

//                                 ) : (
//                                   <li className="text-zinc-500">
//                                     የለን
//                                   </li>
//                                 )}

//                               </ul>

//                             </div>

//                             {/* FEATURES */}

//                             <div className="space-y-2">

//                               <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                 FEATURES
//                               </span>

//                               <ul className="space-y-1 text-xs text-zinc-300">

//                                 {Array.isArray(
//                                   note.packageFeatures
//                                 ) &&
//                                 note.packageFeatures.length > 0 ? (

//                                   note.packageFeatures.map(
//                                     (feature, index) => (
//                                       <li
//                                         key={index}
//                                       >
//                                         {feature}
//                                       </li>
//                                     )
//                                   )

//                                 ) : (
//                                   <li className="text-zinc-500">
//                                     የለን
//                                   </li>
//                                 )}

//                               </ul>

//                             </div>

//                           </div>

//                         </div>

//                         {/* Actions */}

//                         <div className="flex justify-end items-center gap-2 pt-2 border-t border-zinc-900">

//                           <button
//                             onClick={() =>
//                               handleShareReceipt(
//                                 note
//                               )
//                             }
//                             className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-[10px] uppercase font-semibold transition-all flex items-center gap-1"
//                           >
//                             Share 🔗
//                           </button>

//                           <button
//                             onClick={() =>
//                               handleEditNoteItem(
//                                 note
//                               )
//                             }
//                             className="px-3 py-1.5 bg-[#dfb557]/20 hover:bg-[#dfb557]/40 text-[#dfb557] rounded text-[10px] uppercase font-semibold transition-all"
//                           >
//                             Edit
//                           </button>

//                           <button
//                             onClick={() =>
//                               handleDeleteNote(
//                                 note.id
//                               )
//                             }
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

//               {/* =================================================
//                   WEBSITE PACKAGE EDIT
//               ================================================= */}

//               <div className="pt-4">

//                 <h3 className="text-sm font-bold uppercase text-[#dfb557] tracking-wider mb-4">
//                   ⚙️ Edit Website Packages & Test Select
//                 </h3>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

//                   {Object.keys(
//                     tempPackages
//                   ).map((key) => {

//                     const pkg =
//                       tempPackages[key];

//                     return (

//                       <div
//                         key={key}
//                         className="bg-zinc-900 border-2 border-[#dfb557]/40 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4"
//                       >

//                         <div className="space-y-3">

//                           {/* Tier */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Tier Title
//                             </label>

//                             <input
//                               value={
//                                 pkg.tier || ''
//                               }
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'tier',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold"
//                             />

//                           </div>

//                           {/* Name */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Package Name
//                             </label>

//                             <input
//                               value={
//                                 pkg.name || ''
//                               }
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'name',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-serif font-bold text-lg"
//                             />

//                           </div>

//                           {/* Price */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Price (ዋጋ)
//                             </label>

//                             <input
//                               value={
//                                 pkg.price || ''
//                               }
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'price',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-[#dfb557] font-bold"
//                             />

//                           </div>

//                           {/* SERVICES */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Services
//                             </label>

//                             <textarea
//                               rows="5"
//                               value={(
//                                 pkg.services || []
//                               ).join('\n')}
//                               onChange={(e) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'services',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One service per line"
//                             />

//                           </div>

//                           {/* FEATURES */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Features
//                             </label>

//                             <textarea
//                               rows="6"
//                               value={(
//                                 pkg.features || []
//                               ).join('\n')}
//                               onChange={(e) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'features',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One feature per line"
//                             />

//                           </div>

//                         </div>

//                         {/* SELECT */}

//                         <button
//                           onClick={() =>
//                             handleSelectPackageClick(
//                               key,
//                               true
//                             )
//                           }
//                           className="w-full bg-[#dfb557] text-black py-2.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-md cursor-pointer"
//                         >
//                           Select{' '}
//                           {pkg.name} ➔
//                         </button>

//                       </div>

//                     );
//                   })}

//                 </div>

//               </div>

//               {/* SAVE / CANCEL */}

//               <div className="flex justify-end gap-4 pt-4 border-t border-zinc-900">

//                 <button
//                   onClick={
//                     handleCancelEdit
//                   }
//                   className="px-6 py-3 bg-zinc-900 text-zinc-300 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   onClick={
//                     handleSaveAndExit
//                   }
//                   className="px-6 py-3 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45] transition-all"
//                 >
//                   Save Changes
//                 </button>

//               </div>

//             </div>
//           </div>

//         ) : (

//           /* =====================================================
//              CUSTOMER VIEW
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">

//             {/* ADMIN ACCESS */}

//             <div className="flex justify-end mb-4">

//               {!isEditGateOpen ? (

//                 <div className="flex flex-col items-end">

//                   <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-[#dfb557]/40 shadow-lg">

//                     <input
//                       type="password"
//                       placeholder="Admin Code"
//                       value={
//                         adminPasscode
//                       }
//                       onChange={(e) =>
//                         setAdminPasscode(
//                           e.target.value
//                         )
//                       }
//                       className="bg-transparent text-zinc-100 text-xs px-2 focus:outline-none w-28"
//                     />

//                     <button
//                       onClick={
//                         handleEditGateSubmit
//                       }
//                       className="px-3 py-1.5 bg-[#dfb557] text-black rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#c99f45] transition-all"
//                     >
//                       Unlock
//                     </button>

//                   </div>

//                   {adminError && (
//                     <p className="text-red-400 text-[10px] mt-1 font-medium">
//                       Wrong Admin Code!
//                     </p>
//                   )}

//                 </div>

//               ) : (

//                 <button
//                   onClick={() =>
//                     setIsEditMode(true)
//                   }
//                   className="px-4 py-2 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-semibold tracking-widest shadow-md hover:bg-[#c99f45] transition-all"
//                 >
//                   Enter Edit Mode ⚙️
//                 </button>

//               )}

//             </div>

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Investment & Tiers
//             </span>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">
//               Our Professional Packages
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>

//             <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
//               ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ደረጃታት እቲ ንደለይዎ ምረጹ።
//             </p>

//             {/* PACKAGES */}

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

//               {Object.keys(
//                 packages
//               ).map((key) => {

//                 const pkg =
//                   packages[key];

//                 return (

//                   <div
//                     key={key}
//                     className={`bg-zinc-950/90 border-2 ${
//                       key === 'gold'
//                         ? 'border-[#dfb557]'
//                         : 'border-[#dfb557]/50'
//                     } p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between relative`}
//                   >

//                     {key === 'gold' && (
//                       <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
//                         {pkg.tier}
//                       </span>
//                     )}

//                     <div>

//                       <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">
//                         {key === 'gold'
//                           ? 'Exclusive'
//                           : pkg.tier}
//                       </span>

//                       <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">
//                         {pkg.name}
//                       </h3>

//                       <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">
//                         {pkg.price}
//                       </p>

//                       {/* SERVICES */}

//                       {pkg.services &&
//                         pkg.services.length >
//                           0 && (
//                           <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">

//                             {pkg.services.map(
//                               (
//                                 service,
//                                 index
//                               ) => (
//                                 <p
//                                   key={
//                                     index
//                                   }
//                                 >
//                                   {
//                                     service
//                                   }
//                                 </p>
//                               )
//                             )}

//                           </div>
//                         )}

//                       {/* FEATURES */}

//                       <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-6 font-light">

//                         {(
//                           pkg.features || []
//                         ).map(
//                           (
//                             feature,
//                             index
//                           ) => (
//                             <li
//                               key={
//                                 index
//                               }
//                               className="flex items-center gap-2"
//                             >
//                               {
//                                 feature
//                               }
//                             </li>
//                           )
//                         )}

//                       </ul>

//                     </div>

//                     {/* SELECT BUTTON */}

//                     <button
//                       onClick={() =>
//                         handleSelectPackageClick(
//                           key,
//                           false
//                         )
//                       }
//                       className="w-full bg-[#dfb557] text-black py-3 rounded-xl text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all shadow-lg"
//                     >
//                       Select {pkg.name} ➔
//                     </button>

//                   </div>

//                 );
//               })}

//             </div>

//           </div>
//         )}

//       </div>

//       {/* =======================================================
//           BOOKING MODAL
//       ======================================================= */}

//       {isBookingModalOpen &&
//         selectedPackage && (

//           <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl max-w-3xl w-full shadow-2xl space-y-6 my-8">

//               {/* MODAL HEADER */}

//               <div className="flex justify-between items-center border-b border-zinc-900 pb-3">

//                 <div>

//                   <h3 className="text-lg font-serif text-[#dfb557]">
//                     ዝርዝር መረጻ ንዓሚል ምዝገባ
//                   </h3>

//                   {editingNoteId !==
//                     null && (
//                     <span className="text-[10px] text-zinc-500">
//                       Edit existing booking
//                     </span>
//                   )}

//                 </div>

//                 <button
//                   onClick={
//                     handleCloseBookingModal
//                   }
//                   className="text-zinc-400 hover:text-white text-sm font-bold"
//                 >
//                   ✕
//                 </button>

//               </div>

//               <form
//                 onSubmit={
//                   handleBookingSubmit
//                 }
//                 className="space-y-5"
//               >

//                 {/* CUSTOMER NAME + DATE */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ስም ዓሚል (Customer Name)
//                     </label>

//                     <input
//                       type="text"
//                       required
//                       placeholder="ኣብነት: ኣቤል ዳዊት"
//                       value={
//                         customerName
//                       }
//                       onChange={(e) =>
//                         setCustomerName(
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ዕለት መደብ (Booking Date)
//                     </label>

//                     <input
//                       type="date"
//                       required
//                       value={
//                         bookingDate
//                       }
//                       onChange={(e) =>
//                         setBookingDate(
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* PACKAGE + PRICE */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ዝተመረጸ ፓኬኬጅ
//                     </label>

//                     <input
//                       type="text"
//                       disabled
//                       value={`${selectedPackage.name} (${selectedPackage.tier})`}
//                       className="w-full bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl text-xs text-zinc-400 cursor-not-allowed"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ዋጋ (Customizable Price)
//                     </label>

//                     <input
//                       type="text"
//                       required
//                       value={
//                         customizedPrice
//                       }
//                       onChange={(e) =>
//                         setCustomizedPrice(
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-[#dfb557] font-bold focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* =================================================
//                     SERVICES + FEATURES
//                 ================================================= */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   {/* SERVICES */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-5">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         SERVICES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage.services?.length || 0}{' '}
//                         items
//                       </span>

//                     </div>

//                     {selectedPackage.services &&
//                     selectedPackage.services.length >
//                       0 ? (

//                       <ul className="space-y-2 text-xs text-zinc-300">

//                         {selectedPackage.services.map(
//                           (
//                             service,
//                             index
//                           ) => (

//                             <li
//                               key={
//                                 index
//                               }
//                               className="flex gap-2 items-start"
//                             >

//                               <span className="text-[#dfb557] shrink-0">
//                                 •
//                               </span>

//                               <span>
//                                 {
//                                   service
//                                 }
//                               </span>

//                             </li>

//                           )
//                         )}

//                       </ul>

//                     ) : (

//                       <p className="text-xs text-zinc-500">
//                         ናይ Services መረጃ የለን።
//                       </p>

//                     )}

//                   </div>

//                   {/* FEATURES */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-5">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         FEATURES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage.features?.length || 0}{' '}
//                         items
//                       </span>

//                     </div>

//                     {selectedPackage.features &&
//                     selectedPackage.features.length >
//                       0 ? (

//                       <ul className="space-y-2 text-xs text-zinc-300">

//                         {selectedPackage.features.map(
//                           (
//                             feature,
//                             index
//                           ) => (

//                             <li
//                               key={
//                                 index
//                               }
//                               className="flex gap-2 items-start"
//                             >

//                               <span className="text-[#dfb557] shrink-0">
//                                 ✓
//                               </span>

//                               <span>
//                                 {
//                                   feature
//                                 }
//                               </span>

//                             </li>

//                           )
//                         )}

//                       </ul>

//                     ) : (

//                       <p className="text-xs text-zinc-500">
//                         ናይ Features መረጃ የለን።
//                       </p>

//                     )}

//                   </div>

//                 </div>

//                 {/* =================================================
//                     SAVE / CANCEL
//                 ================================================= */}

//                 <div className="flex gap-3 pt-2 border-t border-zinc-900">

//                   <button
//                     type="button"
//                     onClick={
//                       handleCloseBookingModal
//                     }
//                     className="w-1/2 bg-zinc-900 text-zinc-300 py-3 rounded-xl text-xs uppercase font-bold hover:bg-zinc-800 transition-all"
//                   >
//                     ሰርዝ
//                   </button>

//                   <button
//                     type="submit"
//                     className="w-1/2 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold hover:bg-[#c99f45] transition-all shadow-lg"
//                   >
//                     {editingNoteId !==
//                     null
//                       ? 'Update / Save'
//                       : 'ኣቐመጥ (Save)'}
//                   </button>

//                 </div>

//               </form>

//             </div>

//           </div>
//         )}

//       <Footer />

//     </div>
//   );
// }

// export default Price;

// import React, { useState, useEffect } from 'react';
// import html2canvas from 'html2canvas';
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

//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
//   const [customerName, setCustomerName] = useState('');
//   const [bookingDate, setBookingDate] = useState('');
//   const [customizedPrice, setCustomizedPrice] = useState('');

//   const [editingNoteId, setEditingNoteId] = useState(null);

//   const [notebookList, setNotebookList] = useState([]);

//   const defaultPackages = {
//     premium: {
//       tier: 'Ultimate VIP',
//       name: 'Premium',
//       price: '$1,000+',
//       services: [
//         '• ቪድዮ ቀረጻ (Unlimited)',
//         '• ክልተ ኤክስፐርት ካሜራማን',
//         '• Cinematic Color Grading & VFX',
//       ],
//       features: [
//         '✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)',
//         '✓ ክልተ ኤክስፐርት ካሜራማን',
//         '✓ Cinematic Color Grading & VFX',
//         '🎁 ቦናስ: ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር',
//       ],
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
//         '• ኩሉ ሶፍት ኮፒ (All Soft Copy)',
//       ],
//       features: [
//         '✓ 800 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)',
//         '✓ 2 ሳይን ቦርድ (30×45)',
//         '✓ 3 ቦርድ (50×80, 40×60, 30×45)',
//         '✓ 400 ምስጋና ካርድ (Thank You Card)',
//         '✓ 8 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     silver: {
//       tier: 'Advanced',
//       name: 'Silver',
//       price: '240,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)',
//       ],
//       features: [
//         '✓ 500 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 2 ቦርድ (50×80 & 40×60)',
//         '✓ 250 ምስጋና ካርድ (Thank You Card)',
//         '✓ 6 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     standard: {
//       tier: 'Standard',
//       name: 'Standard',
//       price: '190,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)',
//       ],
//       features: [
//         '✓ 300 ፎቶዎች (10×15)',
//         '✓ 1 ላሚኔትድ ፎቶ (30×90)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 1 ቦርድ (50×80)',
//         '✓ 200 ምስጋና ካርድ (Thank You Card)',
//         '✓ 4 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },
//   };

//   const [packages, setPackages] = useState(defaultPackages);
//   const [tempPackages, setTempPackages] = useState(defaultPackages);

//   // =========================================================
//   // LOAD DATA
//   // =========================================================

//   useEffect(() => {
//     fetch(
//       'https://habesha-film-production-server.onrender.com/api/packages'
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           const mergedData = {
//             premium: {
//               ...defaultPackages.premium,
//               ...data.premium,
//               services: Array.isArray(data.premium?.services)
//                 ? data.premium.services
//                 : defaultPackages.premium.services,
//               features: Array.isArray(data.premium?.features)
//                 ? data.premium.features
//                 : defaultPackages.premium.features,
//             },

//             gold: {
//               ...defaultPackages.gold,
//               ...data.gold,
//               services: Array.isArray(data.gold?.services)
//                 ? data.gold.services
//                 : defaultPackages.gold.services,
//               features: Array.isArray(data.gold?.features)
//                 ? data.gold.features
//                 : defaultPackages.gold.features,
//             },

//             silver: {
//               ...defaultPackages.silver,
//               ...data.silver,
//               services: Array.isArray(data.silver?.services)
//                 ? data.silver.services
//                 : defaultPackages.silver.services,
//               features: Array.isArray(data.silver?.features)
//                 ? data.silver.features
//                 : defaultPackages.silver.features,
//             },

//             standard: {
//               ...defaultPackages.standard,
//               ...data.standard,
//               services: Array.isArray(data.standard?.services)
//                 ? data.standard.services
//                 : defaultPackages.standard.services,
//               features: Array.isArray(data.standard?.features)
//                 ? data.standard.features
//                 : defaultPackages.standard.features,
//             },
//           };

//           setPackages(mergedData);
//           setTempPackages(mergedData);
//         }
//       })
//       .catch((err) => {
//         console.log('Failed to fetch packages:', err);
//       });

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

//     const savedNotes = localStorage.getItem(
//       'adminNotebookListPersistent'
//     );

//     if (savedNotes) {
//       try {
//         const parsedNotes = JSON.parse(savedNotes);

//         if (Array.isArray(parsedNotes)) {
//           setNotebookList(parsedNotes);
//         }
//       } catch (e) {
//         console.log('Error parsing saved notes');
//       }
//     }
//   }, []);

//   // =========================================================
//   // LOGIN
//   // =========================================================

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setError(false);

//     try {
//       const response = await fetch(
//         'https://habesha-film-production-server.onrender.com/api/auth/verify-passcode',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             passcode,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsAuthenticated(true);

//         const expiryDuration = 10 * 60 * 1000;

//         const authData = {
//           value: 'true',
//           expiry: new Date().getTime() + expiryDuration,
//         };

//         localStorage.setItem(
//           'priceAuthData',
//           JSON.stringify(authData)
//         );
//       } else {
//         setError(true);
//       }
//     } catch (err) {
//       console.error('Error verifying passcode:', err);
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================================
//   // ADMIN EDIT GATE
//   // =========================================================

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

//   // =========================================================
//   // SELECT PACKAGE
//   // IMPORTANT:
//   // SELECT IS ONLY USED FROM ADMIN EDIT MODE
//   // =========================================================

//   const handleSelectPackageClick = (pkgKey) => {
//     if (!isEditMode) {
//       return;
//     }

//     const pkg = tempPackages[pkgKey];

//     if (!pkg) {
//       console.error('Package not found:', pkgKey);
//       return;
//     }

//     const completePackage = {
//       ...pkg,

//       services: Array.isArray(pkg.services)
//         ? [...pkg.services]
//         : [],

//       features: Array.isArray(pkg.features)
//         ? [...pkg.features]
//         : [],
//     };

//     setSelectedPackage(completePackage);

//     setCustomerName('');
//     setBookingDate('');

//     setCustomizedPrice(
//       completePackage.price || ''
//     );

//     setEditingNoteId(null);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // SAVE BOOKING
//   // =========================================================

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !customerName.trim() ||
//       !bookingDate ||
//       !selectedPackage
//     ) {
//       return;
//     }

//     const newBookingRecord = {
//       id:
//         editingNoteId !== null
//           ? editingNoteId
//           : Date.now(),

//       customerName: customerName.trim(),

//       bookingDate,

//       packageName: selectedPackage.name,

//       packagePrice: customizedPrice,

//       tier: selectedPackage.tier,

//       packageServices: Array.isArray(
//         selectedPackage.services
//       )
//         ? [...selectedPackage.services]
//         : [],

//       packageFeatures: Array.isArray(
//         selectedPackage.features
//       )
//         ? [...selectedPackage.features]
//         : [],

//       timestamp: new Date().toLocaleString(),
//     };

//     let updatedList;

//     if (editingNoteId !== null) {
//       updatedList = notebookList.map((item) =>
//         item.id === editingNoteId
//           ? newBookingRecord
//           : item
//       );
//     } else {
//       updatedList = [
//         newBookingRecord,
//         ...notebookList,
//       ];
//     }

//     setNotebookList(updatedList);

//     localStorage.setItem(
//       'adminNotebookListPersistent',
//       JSON.stringify(updatedList)
//     );

//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);

//     alert(
//       'ብሰላም ኣብ Admin Notebook ተዓቂቡ እዩ!'
//     );
//   };

//   // =========================================================
//   // EDIT NOTE
//   // =========================================================

//   const handleEditNoteItem = (note) => {
//     const foundKey = Object.keys(packages).find(
//       (key) =>
//         packages[key].name === note.packageName
//     );

//     const pkg =
//       packages[foundKey] ||
//       packages.gold;

//     const completePackage = {
//       ...pkg,

//       services: Array.isArray(
//         note.packageServices
//       )
//         ? [...note.packageServices]
//         : Array.isArray(pkg.services)
//         ? [...pkg.services]
//         : [],

//       features: Array.isArray(
//         note.packageFeatures
//       )
//         ? [...note.packageFeatures]
//         : Array.isArray(pkg.features)
//         ? [...pkg.features]
//         : [],
//     };

//     setSelectedPackage(
//       completePackage
//     );

//     setCustomerName(
//       note.customerName || ''
//     );

//     setBookingDate(
//       note.bookingDate || ''
//     );

//     setCustomizedPrice(
//       note.packagePrice || ''
//     );

//     setEditingNoteId(note.id);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // DELETE NOTE
//   // =========================================================

//   const handleDeleteNote = (id) => {
//     const updatedList =
//       notebookList.filter(
//         (note) => note.id !== id
//       );

//     setNotebookList(updatedList);

//     localStorage.setItem(
//       'adminNotebookListPersistent',
//       JSON.stringify(updatedList)
//     );
//   };

//   // =========================================================
//   // ESCAPE HTML
//   // =========================================================

//   const escapeHtml = (value) =>
//     String(value ?? '')
//       .replace(/&/g, '&amp;')
//       .replace(/</g, '&lt;')
//       .replace(/>/g, '&gt;')
//       .replace(/"/g, '&quot;')
//       .replace(/'/g, '&#039;');

//   // =========================================================
//   // SHARE RECEIPT
//   // =========================================================

//   const handleShareReceipt = async (note) => {
//     const servicesHtml =
//       Array.isArray(note.packageServices) &&
//       note.packageServices.length > 0
//         ? note.packageServices
//             .map(
//               (service) =>
//                 `<li>${escapeHtml(service)}</li>`
//             )
//             .join('')
//         : '<li>ሕጂ ንጊዜው ዝተወሰነ ኣገልግሎት የለን</li>';

//     const featuresHtml =
//       Array.isArray(note.packageFeatures) &&
//       note.packageFeatures.length > 0
//         ? note.packageFeatures
//             .map(
//               (feature) =>
//                 `<li>${escapeHtml(feature)}</li>`
//             )
//             .join('')
//         : '<li>የለን</li>';

//     const receiptHtml = `
//       <div
//         id="receipt-share-card"
//         style="
//           width:900px;
//           box-sizing:border-box;
//           background:#050505;
//           color:#ffffff;
//           padding:42px;
//           font-family:Arial,'Noto Sans Ethiopic',sans-serif;
//           border:4px solid #dfb557;
//           border-radius:24px;
//           position:relative;
//           overflow:hidden;
//         "
//       >

//         <div
//           style="
//             position:absolute;
//             inset:14px;
//             border:1px solid rgba(223,181,87,.45);
//             border-radius:16px;
//             pointer-events:none;
//           "
//         ></div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//           "
//         >

//           <div
//             style="
//               color:#dfb557;
//               font-size:18px;
//               font-weight:700;
//               letter-spacing:5px;
//               margin-bottom:10px;
//             "
//           >
//             HABESHA FILM PRODUCTION
//           </div>

//           <div
//             style="
//               color:#ffffff;
//               font-size:28px;
//               font-weight:700;
//               margin-bottom:8px;
//             "
//           >
//             BOOKING RECEIPT
//           </div>

//           <div
//             style="
//               width:90px;
//               height:3px;
//               background:#dfb557;
//               margin:0 auto 26px;
//             "
//           ></div>
//         </div>

//         <div
//           style="
//             position:relative;
//             z-index:1;
//             border:1px solid rgba(223,181,87,.55);
//             border-radius:16px;
//             padding:24px;
//             background:#0b0b0b;
//           "
//         >

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               gap:24px;
//               margin-bottom:16px;
//             "
//           >

//             <div>
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 CUSTOMER NAME
//               </div>

//               <div
//                 style="
//                   font-size:22px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.customerName)}
//               </div>
//             </div>

//             <div style="text-align:right;">
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 BOOKING DATE
//               </div>

//               <div
//                 style="
//                   font-size:18px;
//                   font-weight:600;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.bookingDate)}
//               </div>
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:18px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               align-items:center;
//               gap:20px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:11px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 PACKAGE
//               </div>

//               <div
//                 style="
//                   font-size:25px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.packageName)}
//               </div>

//               <div
//                 style="
//                   font-size:13px;
//                   color:#dfb557;
//                   margin-top:5px;
//                 "
//               >
//                 ${escapeHtml(note.tier)}
//               </div>

//             </div>

//             <div
//               style="
//                 color:#dfb557;
//                 font-size:28px;
//                 font-weight:800;
//                 white-space:nowrap;
//               "
//             >
//               ${escapeHtml(note.packagePrice)}
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:22px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:grid;
//               grid-template-columns:1fr 1fr;
//               gap:28px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 SERVICES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${servicesHtml}
//               </ul>

//             </div>

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 FEATURES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${featuresHtml}
//               </ul>

//             </div>

//           </div>

//         </div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//             margin-top:24px;
//             color:#ffffff;
//             font-size:13px;
//             line-height:1.7;
//           "
//         >

//           <div
//             style="
//               color:#dfb557;
//               font-weight:700;
//               letter-spacing:2px;
//             "
//           >
//             HABESHA FILM PRODUCTION STUDIO
//           </div>

//           <div>
//             ✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ! ✨
//           </div>

//         </div>

//       </div>
//     `;

//     let container = null;

//     try {
//       container = document.createElement('div');

//       container.style.position = 'fixed';
//       container.style.left = '-100000px';
//       container.style.top = '0';
//       container.style.width = '900px';
//       container.style.zIndex = '-1';

//       container.innerHTML = receiptHtml;

//       document.body.appendChild(container);

//       const receiptElement =
//         container.querySelector(
//           '#receipt-share-card'
//         );

//       await new Promise((resolve) =>
//         requestAnimationFrame(resolve)
//       );

//       const canvas = await html2canvas(
//         receiptElement,
//         {
//           backgroundColor: '#050505',
//           scale: 2,
//           useCORS: true,
//           logging: false,
//         }
//       );

//       const blob = await new Promise(
//         (resolve) =>
//           canvas.toBlob(
//             resolve,
//             'image/png',
//             1
//           )
//       );

//       if (!blob) {
//         throw new Error(
//           'Could not create receipt image.'
//         );
//       }

//       const file = new File(
//         [blob],
//         `Habesha-Film-Receipt-${Date.now()}.png`,
//         {
//           type: 'image/png',
//         }
//       );

//       if (
//         navigator.share &&
//         (!navigator.canShare ||
//           navigator.canShare({
//             files: [file],
//           }))
//       ) {
//         await navigator.share({
//           title:
//             'Booking Receipt - Habesha Film Production',
//           text:
//             'Booking Receipt - Habesha Film Production',
//           files: [file],
//         });
//       } else {
//         const imageUrl =
//           URL.createObjectURL(blob);

//         const link =
//           document.createElement('a');

//         link.href = imageUrl;

//         link.download = file.name;

//         document.body.appendChild(link);

//         link.click();

//         link.remove();

//         URL.revokeObjectURL(imageUrl);

//         alert(
//           'እቲ Receipt ብPNG ስእሊ ተዳልዩ ኣሎ። እቲ ስእሊ ኣብ WhatsApp ወይ ካልእ app ክትልእኮ ትኽእል።'
//         );
//       }
//     } catch (err) {
//       console.error(
//         'Error creating/sharing receipt:',
//         err
//       );

//       if (err?.name !== 'AbortError') {
//         alert(
//           'Receipt ስእሊ ምፍጣር ወይ ምስዳድ ኣይተዓወተን።'
//         );
//       }
//     } finally {
//       if (
//         container &&
//         container.parentNode
//       ) {
//         container.parentNode.removeChild(
//           container
//         );
//       }
//     }
//   };

//   // =========================================================
//   // SAVE WEBSITE PACKAGES
//   // =========================================================

//   const handleSaveAndExit = async () => {
//     try {
//       const response = await fetch(
//         'https://habesha-film-production-server.onrender.com/api/packages/update',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(
//             tempPackages
//           ),
//         }
//       );

//       if (response.ok) {
//         setPackages(tempPackages);

//         alert(
//           'ዳታ ብሰላም ተሰዲዱ ኣብ ኩሉ ዲቫይስ ክረአ እዩ!'
//         );
//       } else {
//         alert(
//           'ሰርቨር ጌጋ ኣለዎ።'
//         );
//       }
//     } catch (err) {
//       console.error(
//         'Error saving to server:',
//         err
//       );

//       alert(
//         'ዳታ ናብ ሰርቨር ምልኣኽ ኣይከኣለን።'
//       );
//     }

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CANCEL EDIT MODE
//   // =========================================================

//   const handleCancelEdit = () => {
//     setTempPackages(packages);

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CLOSE BOOKING MODAL
//   // =========================================================

//   const handleCloseBookingModal = () => {
//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);
//   };

//   // =========================================================
//   // PACKAGE EDIT HELPERS
//   // =========================================================

//   const updateTempPackageField = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages((prev) => ({
//       ...prev,

//       [key]: {
//         ...prev[key],
//         [field]: value,
//       },
//     }));
//   };

//   const updateTempPackageArray = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages((prev) => ({
//       ...prev,

//       [key]: {
//         ...prev[key],

//         [field]: value
//           .split('\n')
//           .map((item) => item.trim())
//           .filter(
//             (item) => item.length > 0
//           ),
//       },
//     }));
//   };

//   // =========================================================
//   // RENDER
//   // =========================================================

//   return (
//     <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden flex flex-col justify-between">

//       <Navbar />

//       <div className="flex-grow flex items-center justify-center px-4 py-32">

//         {/* =====================================================
//             LOGIN
//         ===================================================== */}

//         {!isAuthenticated ? (

//           <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center relative">

//             <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">
//               Secure Access
//             </span>

//             <h2 className="text-2xl md:text-3xl font-serif mb-3 text-zinc-100">
//               Protected Price Page
//             </h2>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>

//             <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">
//               እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።
//             </p>

//             <form
//               onSubmit={handleLogin}
//               className="space-y-4"
//             >

//               <input
//                 type="password"
//                 placeholder="Enter Passcode"
//                 value={passcode}
//                 onChange={(e) =>
//                   setPasscode(
//                     e.target.value
//                   )
//                 }
//                 className="w-full px-4 py-3 bg-zinc-900 border border-[#dfb557]/50 rounded-xl focus:outline-none focus:border-[#dfb557] text-center tracking-widest text-lg text-zinc-100 placeholder-zinc-500 shadow-inner"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 disabled:opacity-50 rounded-xl shadow-lg"
//               >
//                 {loading
//                   ? 'Checking...'
//                   : 'Submit'}
//               </button>

//               {error && (
//                 <p className="text-red-400 text-xs mt-2 font-medium">
//                   ጌጋ ፓስኮድ! ደጊምካ ፈትን።
//                 </p>
//               )}

//             </form>

//           </div>

//         ) : isEditMode ? (

//           /* =====================================================
//              ADMIN EDIT MODE
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Administration Mode
//             </span>

//             <h1 className="text-3xl font-serif mb-4 text-zinc-100">
//               Edit Packages & Admin Notebook
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-8"></div>

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl space-y-8 text-left shadow-2xl">

//               {/* =================================================
//                   NOTEBOOK
//               ================================================= */}

//               <div className="bg-zinc-900 p-6 rounded-xl border border-[#dfb557]/30 space-y-4 shadow-inner">

//                 <div className="flex justify-between items-center border-b border-zinc-800 pb-3">

//                   <h3 className="text-xs font-bold uppercase text-[#dfb557] tracking-wider">
//                     📝 Admin Notebook & Customer Bookings
//                   </h3>

//                   <span className="text-[10px] text-zinc-400 font-light">
//                     ዋጋ፣ ኣገልግሎትን ባህርያትን ሒዙ ይዕቀብ
//                   </span>

//                 </div>

//                 <div className="space-y-4 pt-2 max-h-[500px] overflow-y-auto">

//                   {notebookList.length === 0 ? (

//                     <p className="text-zinc-500 text-xs italic text-center py-4">
//                       ዝኾነ ዝተመዝገበ ዓሚል የልቦን። ካብቲ ኣብ ታሕቲ ዘሎ Edit Mode ጌርካ Select ብምባል ክትምዝግብ ትኽእል።
//                     </p>

//                   ) : (

//                     notebookList.map((note) => (

//                       <div
//                         key={note.id}
//                         className="bg-zinc-950 border border-zinc-800 p-5 rounded-xl space-y-4 shadow-md"
//                       >

//                         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-zinc-900 pb-3">

//                           <div className="flex items-center gap-3 flex-wrap">

//                             <span className="text-base font-serif font-bold text-[#dfb557]">
//                               {note.customerName}
//                             </span>

//                             <span className="text-[10px] bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md text-zinc-300 font-semibold">
//                               📅 ዕለት: {note.bookingDate}
//                             </span>

//                           </div>

//                           <span className="text-[9px] text-zinc-500">
//                             ተመዝጊቡሉ: {note.timestamp}
//                           </span>

//                         </div>

//                         <div className="bg-zinc-900/80 border border-[#dfb557]/30 p-4 rounded-xl space-y-4">

//                           <div className="flex justify-between items-center">

//                             <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#dfb557]">
//                               {note.tier}
//                             </span>

//                             <span className="text-lg font-serif font-bold text-[#dfb557]">
//                               {note.packagePrice}
//                             </span>

//                           </div>

//                           <h4 className="text-xl font-serif text-white">
//                             {note.packageName} Package
//                           </h4>

//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3 border-t border-zinc-800">

//                             <div className="space-y-2">

//                               <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                 SERVICES
//                               </span>

//                               <ul className="space-y-1 text-xs text-zinc-300">

//                                 {Array.isArray(
//                                   note.packageServices
//                                 ) &&
//                                 note.packageServices.length > 0 ? (

//                                   note.packageServices.map(
//                                     (service, index) => (
//                                       <li
//                                         key={index}
//                                       >
//                                         {service}
//                                       </li>
//                                     )
//                                   )

//                                 ) : (

//                                   <li className="text-zinc-500">
//                                     የለን
//                                   </li>

//                                 )}

//                               </ul>

//                             </div>

//                             <div className="space-y-2">

//                               <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                 FEATURES
//                               </span>

//                               <ul className="space-y-1 text-xs text-zinc-300">

//                                 {Array.isArray(
//                                   note.packageFeatures
//                                 ) &&
//                                 note.packageFeatures.length > 0 ? (

//                                   note.packageFeatures.map(
//                                     (feature, index) => (
//                                       <li
//                                         key={index}
//                                       >
//                                         {feature}
//                                       </li>
//                                     )
//                                   )

//                                 ) : (

//                                   <li className="text-zinc-500">
//                                     የለን
//                                   </li>

//                                 )}

//                               </ul>

//                             </div>

//                           </div>

//                         </div>

//                         <div className="flex justify-end items-center gap-2 pt-2 border-t border-zinc-900">

//                           <button
//                             onClick={() =>
//                               handleShareReceipt(note)
//                             }
//                             className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-[10px] uppercase font-semibold transition-all flex items-center gap-1"
//                           >
//                             Share 🔗
//                           </button>

//                           <button
//                             onClick={() =>
//                               handleEditNoteItem(note)
//                             }
//                             className="px-3 py-1.5 bg-[#dfb557]/20 hover:bg-[#dfb557]/40 text-[#dfb557] rounded text-[10px] uppercase font-semibold transition-all"
//                           >
//                             Edit
//                           </button>

//                           <button
//                             onClick={() =>
//                               handleDeleteNote(note.id)
//                             }
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

//               {/* =================================================
//                   WEBSITE PACKAGE EDIT
//               ================================================= */}

//               <div className="pt-4">

//                 <h3 className="text-sm font-bold uppercase text-[#dfb557] tracking-wider mb-4">
//                   ⚙️ Edit Website Packages & Test Select
//                 </h3>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

//                   {Object.keys(
//                     tempPackages
//                   ).map((key) => {

//                     const pkg =
//                       tempPackages[key];

//                     return (

//                       <div
//                         key={key}
//                         className="bg-zinc-900 border-2 border-[#dfb557]/40 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4"
//                       >

//                         <div className="space-y-3">

//                           {/* TIER */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Tier Title
//                             </label>

//                             <input
//                               value={
//                                 pkg.tier || ''
//                               }
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'tier',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold"
//                             />

//                           </div>

//                           {/* NAME */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Package Name
//                             </label>

//                             <input
//                               value={
//                                 pkg.name || ''
//                               }
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'name',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-serif font-bold text-lg"
//                             />

//                           </div>

//                           {/* PRICE */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Price (ዋጋ)
//                             </label>

//                             <input
//                               value={
//                                 pkg.price || ''
//                               }
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'price',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-[#dfb557] font-bold"
//                             />

//                           </div>

//                           {/* SERVICES */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Services
//                             </label>

//                             <textarea
//                               rows="5"
//                               value={(
//                                 pkg.services || []
//                               ).join('\n')}
//                               onChange={(e) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'services',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One service per line"
//                             />

//                           </div>

//                           {/* FEATURES */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Features
//                             </label>

//                             <textarea
//                               rows="6"
//                               value={(
//                                 pkg.features || []
//                               ).join('\n')}
//                               onChange={(e) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'features',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One feature per line"
//                             />

//                           </div>

//                         </div>

//                         {/* =================================================
//                             SELECT EXISTS ONLY INSIDE ADMIN EDIT MODE
//                         ================================================= */}

//                         <button
//                           type="button"
//                           onClick={() =>
//                             handleSelectPackageClick(key)
//                           }
//                           className="w-full bg-[#dfb557] text-black py-2.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-md cursor-pointer"
//                         >
//                           Select {pkg.name} ➔
//                         </button>

//                       </div>

//                     );
//                   })}

//                 </div>

//               </div>

//               {/* SAVE / CANCEL */}

//               <div className="flex justify-end gap-4 pt-4 border-t border-zinc-900">

//                 <button
//                   type="button"
//                   onClick={handleCancelEdit}
//                   className="px-6 py-3 bg-zinc-900 text-zinc-300 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="button"
//                   onClick={handleSaveAndExit}
//                   className="px-6 py-3 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45] transition-all"
//                 >
//                   Save Changes
//                 </button>

//               </div>

//             </div>

//           </div>

//         ) : (

//           /* =====================================================
//              CUSTOMER VIEW
//              IMPORTANT:
//              THERE IS NO SELECT BUTTON HERE
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">

//             {/* ADMIN ACCESS */}

//             <div className="flex justify-end mb-4">

//               {!isEditGateOpen ? (

//                 <div className="flex flex-col items-end">

//                   <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-[#dfb557]/40 shadow-lg">

//                     <input
//                       type="password"
//                       placeholder="Admin Code"
//                       value={adminPasscode}
//                       onChange={(e) =>
//                         setAdminPasscode(
//                           e.target.value
//                         )
//                       }
//                       className="bg-transparent text-zinc-100 text-xs px-2 focus:outline-none w-28"
//                     />

//                     <button
//                       type="button"
//                       onClick={
//                         handleEditGateSubmit
//                       }
//                       className="px-3 py-1.5 bg-[#dfb557] text-black rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#c99f45] transition-all"
//                     >
//                       Unlock
//                     </button>

//                   </div>

//                   {adminError && (
//                     <p className="text-red-400 text-[10px] mt-1 font-medium">
//                       Wrong Admin Code!
//                     </p>
//                   )}

//                 </div>

//               ) : (

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setIsEditMode(true)
//                   }
//                   className="px-4 py-2 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-semibold tracking-widest shadow-md hover:bg-[#c99f45] transition-all"
//                 >
//                   Enter Edit Mode ⚙️
//                 </button>

//               )}

//             </div>

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Investment & Tiers
//             </span>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">
//               Our Professional Packages
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>

//             <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
//               ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ደረጃታት እቲ ንደለይዎ ምረጹ።
//             </p>

//             {/* =====================================================
//                 CUSTOMER PACKAGES
//                 NO SELECT BUTTON
//             ===================================================== */}

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

//               {Object.keys(
//                 packages
//               ).map((key) => {

//                 const pkg =
//                   packages[key];

//                 return (

//                   <div
//                     key={key}
//                     className={`bg-zinc-950/90 border-2 ${
//                       key === 'gold'
//                         ? 'border-[#dfb557]'
//                         : 'border-[#dfb557]/50'
//                     } p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between relative`}
//                   >

//                     {key === 'gold' && (
//                       <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
//                         {pkg.tier}
//                       </span>
//                     )}

//                     <div>

//                       <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">
//                         {key === 'gold'
//                           ? 'Exclusive'
//                           : pkg.tier}
//                       </span>

//                       <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">
//                         {pkg.name}
//                       </h3>

//                       <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">
//                         {pkg.price}
//                       </p>

//                       {/* SERVICES */}

//                       {pkg.services &&
//                         pkg.services.length >
//                           0 && (

//                           <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">

//                             {pkg.services.map(
//                               (
//                                 service,
//                                 index
//                               ) => (

//                                 <p
//                                   key={index}
//                                 >
//                                   {service}
//                                 </p>

//                               )
//                             )}

//                           </div>

//                         )}

//                       {/* FEATURES */}

//                       <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-6 font-light">

//                         {(pkg.features || []).map(
//                           (
//                             feature,
//                             index
//                           ) => (

//                             <li
//                               key={index}
//                               className="flex items-center gap-2"
//                             >
//                               {feature}
//                             </li>

//                           )
//                         )}

//                       </ul>

//                     </div>

//                     {/* =================================================
//                         SELECT BUTTON REMOVED FROM CUSTOMER VIEW
//                     ================================================= */}

//                   </div>

//                 );

//               })}

//             </div>

//           </div>

//         )}

//       </div>

//       {/* =======================================================
//           BOOKING / EDIT MODAL
//       ======================================================= */}

//       {isBookingModalOpen &&
//         selectedPackage && (

//           <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl max-w-3xl w-full shadow-2xl space-y-6 my-8">

//               <div className="flex justify-between items-center border-b border-zinc-900 pb-3">

//                 <div>

//                   <h3 className="text-lg font-serif text-[#dfb557]">
//                     ዝርዝር መረጻ ንዓሚል ምዝገባ
//                   </h3>

//                   {editingNoteId !== null && (

//                     <span className="text-[10px] text-zinc-500">
//                       Edit existing booking
//                     </span>

//                   )}

//                 </div>

//                 <button
//                   type="button"
//                   onClick={
//                     handleCloseBookingModal
//                   }
//                   className="text-zinc-400 hover:text-white text-sm font-bold"
//                 >
//                   ✕
//                 </button>

//               </div>

//               <form
//                 onSubmit={
//                   handleBookingSubmit
//                 }
//                 className="space-y-5"
//               >

//                 {/* CUSTOMER NAME + DATE */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ስም ዓሚል (Customer Name)
//                     </label>

//                     <input
//                       type="text"
//                       required
//                       placeholder="ኣብነት: ኣቤል ዳዊት"
//                       value={
//                         customerName
//                       }
//                       onChange={(e) =>
//                         setCustomerName(
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ዕለት መደብ (Booking Date)
//                     </label>

//                     <input
//                       type="date"
//                       required
//                       value={
//                         bookingDate
//                       }
//                       onChange={(e) =>
//                         setBookingDate(
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* PACKAGE + PRICE */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ዝተመረጸ ፓኬኬጅ
//                     </label>

//                     <input
//                       type="text"
//                       disabled
//                       value={`${selectedPackage.name} (${selectedPackage.tier})`}
//                       className="w-full bg-zinc-900/50 border border-zinc-800 p-3 rounded-xl text-xs text-zinc-400 cursor-not-allowed"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ዋጋ (Customizable Price)
//                     </label>

//                     <input
//                       type="text"
//                       required
//                       value={
//                         customizedPrice
//                       }
//                       onChange={(e) =>
//                         setCustomizedPrice(
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-[#dfb557] font-bold focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* SERVICES + FEATURES */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   {/* SERVICES */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-5">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         SERVICES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage.services?.length || 0}{' '}
//                         items
//                       </span>

//                     </div>

//                     {selectedPackage.services &&
//                     selectedPackage.services.length >
//                       0 ? (

//                       <ul className="space-y-2 text-xs text-zinc-300">

//                         {selectedPackage.services.map(
//                           (
//                             service,
//                             index
//                           ) => (

//                             <li
//                               key={index}
//                               className="flex gap-2 items-start"
//                             >

//                               <span className="text-[#dfb557] shrink-0">
//                                 •
//                               </span>

//                               <span>
//                                 {service}
//                               </span>

//                             </li>

//                           )
//                         )}

//                       </ul>

//                     ) : (

//                       <p className="text-xs text-zinc-500">
//                         ናይ Services መረጃ የለን።
//                       </p>

//                     )}

//                   </div>

//                   {/* FEATURES */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-5">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         FEATURES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage.features?.length || 0}{' '}
//                         items
//                       </span>

//                     </div>

//                     {selectedPackage.features &&
//                     selectedPackage.features.length >
//                       0 ? (

//                       <ul className="space-y-2 text-xs text-zinc-300">

//                         {selectedPackage.features.map(
//                           (
//                             feature,
//                             index
//                           ) => (

//                             <li
//                               key={index}
//                               className="flex gap-2 items-start"
//                             >

//                               <span className="text-[#dfb557] shrink-0">
//                                 ✓
//                               </span>

//                               <span>
//                                 {feature}
//                               </span>

//                             </li>

//                           )
//                         )}

//                       </ul>

//                     ) : (

//                       <p className="text-xs text-zinc-500">
//                         ናይ Features መረጃ የለን።
//                       </p>

//                     )}

//                   </div>

//                 </div>

//                 {/* SAVE / CANCEL */}

//                 <div className="flex gap-3 pt-2 border-t border-zinc-900">

//                   <button
//                     type="button"
//                     onClick={
//                       handleCloseBookingModal
//                     }
//                     className="w-1/2 bg-zinc-900 text-zinc-300 py-3 rounded-xl text-xs uppercase font-bold hover:bg-zinc-800 transition-all"
//                   >
//                     ሰርዝ
//                   </button>

//                   <button
//                     type="submit"
//                     className="w-1/2 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold hover:bg-[#c99f45] transition-all shadow-lg"
//                   >
//                     {editingNoteId !== null
//                       ? 'Update / Save'
//                       : 'ኣቐመጥ (Save)'}
//                   </button>

//                 </div>

//               </form>

//             </div>

//           </div>

//         )}

//       <Footer />

//     </div>
//   );
// }

// // export default Price;


// import React, { useState, useEffect } from 'react';
// import html2canvas from 'html2canvas';
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

//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
//   const [customerName, setCustomerName] = useState('');
//   const [bookingDate, setBookingDate] = useState('');
//   const [customizedPrice, setCustomizedPrice] = useState('');

//   const [editingNoteId, setEditingNoteId] = useState(null);

//   const [notebookList, setNotebookList] = useState([]);

//   const defaultPackages = {
//     premium: {
//       tier: 'Ultimate VIP',
//       name: 'Premium',
//       price: '$1,000+',
//       services: [
//         '• ቪድዮ ቀረጻ (Unlimited)',
//         '• ክልተ ኤክስፐርት ካሜራማን',
//         '• Cinematic Color Grading & VFX',
//       ],
//       features: [
//         '✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)',
//         '✓ ክልተ ኤክስፐርት ካሜራማን',
//         '✓ Cinematic Color Grading & VFX',
//         '🎁 ቦናስ: ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር',
//       ],
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
//         '• ኩሉ ሶፍት ኮፒ (All Soft Copy)',
//       ],
//       features: [
//         '✓ 800 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)',
//         '✓ 2 ሳይን ቦርድ (30×45)',
//         '✓ 3 ቦርድ (50×80, 40×60, 30×45)',
//         '✓ 400 ምስጋና ካርድ (Thank You Card)',
//         '✓ 8 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     silver: {
//       tier: 'Advanced',
//       name: 'Silver',
//       price: '240,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)',
//       ],
//       features: [
//         '✓ 500 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 2 ቦርድ (50×80 & 40×60)',
//         '✓ 250 ምስጋና ካርድ (Thank You Card)',
//         '✓ 6 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     standard: {
//       tier: 'Standard',
//       name: 'Standard',
//       price: '190,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)',
//       ],
//       features: [
//         '✓ 300 ፎቶዎች (10×15)',
//         '✓ 1 ላሚኔትድ ፎቶ (30×90)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 1 ቦርድ (50×80)',
//         '✓ 200 ምስጋና ካርድ (Thank You Card)',
//         '✓ 4 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },
//   };

//   const [packages, setPackages] = useState(defaultPackages);
//   const [tempPackages, setTempPackages] = useState(defaultPackages);

//   // =========================================================
//   // LOAD DATA
//   // =========================================================

//   useEffect(() => {
//     fetch(
//       'https://habesha-film-production-server.onrender.com/api/packages'
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           const mergedData = {
//             premium: {
//               ...defaultPackages.premium,
//               ...data.premium,
//               services: Array.isArray(data.premium?.services)
//                 ? data.premium.services
//                 : defaultPackages.premium.services,
//               features: Array.isArray(data.premium?.features)
//                 ? data.premium.features
//                 : defaultPackages.premium.features,
//             },

//             gold: {
//               ...defaultPackages.gold,
//               ...data.gold,
//               services: Array.isArray(data.gold?.services)
//                 ? data.gold.services
//                 : defaultPackages.gold.services,
//               features: Array.isArray(data.gold?.features)
//                 ? data.gold.features
//                 : defaultPackages.gold.features,
//             },

//             silver: {
//               ...defaultPackages.silver,
//               ...data.silver,
//               services: Array.isArray(data.silver?.services)
//                 ? data.silver.services
//                 : defaultPackages.silver.services,
//               features: Array.isArray(data.silver?.features)
//                 ? data.silver.features
//                 : defaultPackages.silver.features,
//             },

//             standard: {
//               ...defaultPackages.standard,
//               ...data.standard,
//               services: Array.isArray(data.standard?.services)
//                 ? data.standard.services
//                 : defaultPackages.standard.services,
//               features: Array.isArray(data.standard?.features)
//                 ? data.standard.features
//                 : defaultPackages.standard.features,
//             },
//           };

//           setPackages(mergedData);
//           setTempPackages(mergedData);
//         }
//       })
//       .catch((err) => {
//         console.log('Failed to fetch packages:', err);
//       });

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

//     const savedNotes = localStorage.getItem(
//       'adminNotebookListPersistent'
//     );

//     if (savedNotes) {
//       try {
//         const parsedNotes = JSON.parse(savedNotes);

//         if (Array.isArray(parsedNotes)) {
//           setNotebookList(parsedNotes);
//         }
//       } catch (e) {
//         console.log('Error parsing saved notes');
//       }
//     }
//   }, []);

//   // =========================================================
//   // LOGIN
//   // =========================================================

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setError(false);

//     try {
//       const response = await fetch(
//         'https://habesha-film-production-server.onrender.com/api/auth/verify-passcode',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             passcode,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsAuthenticated(true);

//         const expiryDuration = 10 * 60 * 1000;

//         const authData = {
//           value: 'true',
//           expiry: new Date().getTime() + expiryDuration,
//         };

//         localStorage.setItem(
//           'priceAuthData',
//           JSON.stringify(authData)
//         );
//       } else {
//         setError(true);
//       }
//     } catch (err) {
//       console.error('Error verifying passcode:', err);
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================================
//   // ADMIN EDIT GATE
//   // =========================================================

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

//   // =========================================================
//   // SELECT PACKAGE
//   // IMPORTANT:
//   // SELECT ONLY WORKS INSIDE ADMIN EDIT MODE
//   // ALL PACKAGE DATA IS COPIED FOR EDITING
//   // =========================================================

//   const handleSelectPackageClick = (pkgKey) => {
//     if (!isEditMode) {
//       return;
//     }

//     const pkg = tempPackages[pkgKey];

//     if (!pkg) {
//       console.error('Package not found:', pkgKey);
//       return;
//     }

//     const completePackage = {
//       key: pkgKey,

//       tier: pkg.tier || '',
//       name: pkg.name || '',
//       price: pkg.price || '',

//       // IMPORTANT:
//       // Make NEW arrays so editing cannot accidentally
//       // change the original package directly.
//       services: Array.isArray(pkg.services)
//         ? [...pkg.services]
//         : [],

//       features: Array.isArray(pkg.features)
//         ? [...pkg.features]
//         : [],
//     };

//     setSelectedPackage(completePackage);

//     setCustomerName('');
//     setBookingDate('');

//     setCustomizedPrice(
//       completePackage.price || ''
//     );

//     setEditingNoteId(null);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // UPDATE SELECTED PACKAGE
//   // NEW:
//   // SERVICES + FEATURES CAN NOW BE EDITED
//   // =========================================================

//   const updateSelectedPackageField = (
//     field,
//     value
//   ) => {
//     setSelectedPackage((prev) => {
//       if (!prev) {
//         return prev;
//       }

//       return {
//         ...prev,
//         [field]: value,
//       };
//     });
//   };

//   const updateSelectedPackageArray = (
//     field,
//     value
//   ) => {
//     const arrayValue = value
//       .split('\n')
//       .map((item) => item.trim())
//       .filter((item) => item.length > 0);

//     setSelectedPackage((prev) => {
//       if (!prev) {
//         return prev;
//       }

//       return {
//         ...prev,
//         [field]: arrayValue,
//       };
//     });
//   };

//   // =========================================================
//   // SYNC SELECTED PACKAGE BACK TO TEMP PACKAGES
//   // IMPORTANT:
//   // THIS IS WHAT MAKES SELECTED PACKAGE EDITS AVAILABLE
//   // TO THE MAIN EDIT MODE
//   // =========================================================

//   const syncSelectedPackageToTempPackages = () => {
//     if (!selectedPackage?.key) {
//       return;
//     }

//     const packageKey = selectedPackage.key;

//     setTempPackages((prev) => ({
//       ...prev,

//       [packageKey]: {
//         ...prev[packageKey],

//         tier: selectedPackage.tier || '',
//         name: selectedPackage.name || '',
//         price: customizedPrice || selectedPackage.price || '',

//         services: Array.isArray(
//           selectedPackage.services
//         )
//           ? [...selectedPackage.services]
//           : [],

//         features: Array.isArray(
//           selectedPackage.features
//         )
//           ? [...selectedPackage.features]
//           : [],
//       },
//     }));
//   };

//   // =========================================================
//   // SAVE BOOKING / NOTE
//   // =========================================================

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !customerName.trim() ||
//       !bookingDate ||
//       !selectedPackage
//     ) {
//       return;
//     }

//     // IMPORTANT:
//     // Save the CURRENTLY EDITED values,
//     // including services and features.
//     const currentServices = Array.isArray(
//       selectedPackage.services
//     )
//       ? [...selectedPackage.services]
//       : [];

//     const currentFeatures = Array.isArray(
//       selectedPackage.features
//     )
//       ? [...selectedPackage.features]
//       : [];

//     const newBookingRecord = {
//       id:
//         editingNoteId !== null
//           ? editingNoteId
//           : Date.now(),

//       customerName: customerName.trim(),

//       bookingDate,

//       packageName:
//         selectedPackage.name || '',

//       packagePrice:
//         customizedPrice ||
//         selectedPackage.price ||
//         '',

//       tier:
//         selectedPackage.tier || '',

//       packageServices:
//         currentServices,

//       packageFeatures:
//         currentFeatures,

//       timestamp: new Date().toLocaleString(),
//     };

//     let updatedList;

//     if (editingNoteId !== null) {
//       updatedList = notebookList.map((item) =>
//         item.id === editingNoteId
//           ? newBookingRecord
//           : item
//       );
//     } else {
//       updatedList = [
//         newBookingRecord,
//         ...notebookList,
//       ];
//     }

//     setNotebookList(updatedList);

//     localStorage.setItem(
//       'adminNotebookListPersistent',
//       JSON.stringify(updatedList)
//     );

//     // IMPORTANT:
//     // Also update the temporary package so when
//     // user returns to the main Edit Mode,
//     // the edited Services/Features are still there.
//     if (selectedPackage.key) {
//       setTempPackages((prev) => ({
//         ...prev,

//         [selectedPackage.key]: {
//           ...prev[selectedPackage.key],

//           tier:
//             selectedPackage.tier || '',

//           name:
//             selectedPackage.name || '',

//           price:
//             customizedPrice ||
//             selectedPackage.price ||
//             '',

//           services:
//             currentServices,

//           features:
//             currentFeatures,
//         },
//       }));
//     }

//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);

//     alert(
//       'ብሰላም ኣብ Admin Notebook ተዓቂቡ እዩ!'
//     );
//   };

//   // =========================================================
//   // EDIT NOTE
//   // IMPORTANT:
//   // PREVIOUSLY SAVED SERVICES + FEATURES ARE LOADED
//   // AND MADE EDITABLE AGAIN.
//   // =========================================================

//   const handleEditNoteItem = (note) => {
//     const foundKey = Object.keys(packages).find(
//       (key) =>
//         packages[key].name === note.packageName
//     );

//     const packageKey =
//       foundKey ||
//       Object.keys(packages).find(
//         (key) =>
//           packages[key].name === note.packageName
//       ) ||
//       'gold';

//     const pkg =
//       packages[packageKey] ||
//       packages.gold;

//     const completePackage = {
//       key: packageKey,

//       tier:
//         note.tier ||
//         pkg.tier ||
//         '',

//       name:
//         note.packageName ||
//         pkg.name ||
//         '',

//       price:
//         note.packagePrice ||
//         pkg.price ||
//         '',

//       // IMPORTANT:
//       // Prefer the saved notebook services.
//       services:
//         Array.isArray(note.packageServices)
//           ? [...note.packageServices]
//           : Array.isArray(pkg.services)
//           ? [...pkg.services]
//           : [],

//       // IMPORTANT:
//       // Prefer the saved notebook features.
//       features:
//         Array.isArray(note.packageFeatures)
//           ? [...note.packageFeatures]
//           : Array.isArray(pkg.features)
//           ? [...pkg.features]
//           : [],
//     };

//     setSelectedPackage(
//       completePackage
//     );

//     setCustomerName(
//       note.customerName || ''
//     );

//     setBookingDate(
//       note.bookingDate || ''
//     );

//     setCustomizedPrice(
//       note.packagePrice ||
//       pkg.price ||
//       ''
//     );

//     setEditingNoteId(note.id);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // DELETE NOTE
//   // =========================================================

//   const handleDeleteNote = (id) => {
//     const updatedList =
//       notebookList.filter(
//         (note) => note.id !== id
//       );

//     setNotebookList(updatedList);

//     localStorage.setItem(
//       'adminNotebookListPersistent',
//       JSON.stringify(updatedList)
//     );
//   };

//   // =========================================================
//   // ESCAPE HTML
//   // =========================================================

//   const escapeHtml = (value) =>
//     String(value ?? '')
//       .replace(/&/g, '&amp;')
//       .replace(/</g, '&lt;')
//       .replace(/>/g, '&gt;')
//       .replace(/"/g, '&quot;')
//       .replace(/'/g, '&#039;');

//   // =========================================================
//   // SHARE RECEIPT
//   // =========================================================

//   const handleShareReceipt = async (note) => {
//     const servicesHtml =
//       Array.isArray(note.packageServices) &&
//       note.packageServices.length > 0
//         ? note.packageServices
//             .map(
//               (service) =>
//                 `<li>${escapeHtml(service)}</li>`
//             )
//             .join('')
//         : '<li>ሕጂ ንጊዜው ዝተወሰነ ኣገልግሎት የለን</li>';

//     const featuresHtml =
//       Array.isArray(note.packageFeatures) &&
//       note.packageFeatures.length > 0
//         ? note.packageFeatures
//             .map(
//               (feature) =>
//                 `<li>${escapeHtml(feature)}</li>`
//             )
//             .join('')
//         : '<li>የለን</li>';

//     const receiptHtml = `
//       <div
//         id="receipt-share-card"
//         style="
//           width:900px;
//           box-sizing:border-box;
//           background:#050505;
//           color:#ffffff;
//           padding:42px;
//           font-family:Arial,'Noto Sans Ethiopic',sans-serif;
//           border:4px solid #dfb557;
//           border-radius:24px;
//           position:relative;
//           overflow:hidden;
//         "
//       >

//         <div
//           style="
//             position:absolute;
//             inset:14px;
//             border:1px solid rgba(223,181,87,.45);
//             border-radius:16px;
//             pointer-events:none;
//           "
//         ></div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//           "
//         >

//           <div
//             style="
//               color:#dfb557;
//               font-size:18px;
//               font-weight:700;
//               letter-spacing:5px;
//               margin-bottom:10px;
//             "
//           >
//             HABESHA FILM PRODUCTION
//           </div>

//           <div
//             style="
//               color:#ffffff;
//               font-size:28px;
//               font-weight:700;
//               margin-bottom:8px;
//             "
//           >
//             BOOKING RECEIPT
//           </div>

//           <div
//             style="
//               width:90px;
//               height:3px;
//               background:#dfb557;
//               margin:0 auto 26px;
//             "
//           ></div>
//         </div>

//         <div
//           style="
//             position:relative;
//             z-index:1;
//             border:1px solid rgba(223,181,87,.55);
//             border-radius:16px;
//             padding:24px;
//             background:#0b0b0b;
//           "
//         >

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               gap:24px;
//               margin-bottom:16px;
//             "
//           >

//             <div>
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 CUSTOMER NAME
//               </div>

//               <div
//                 style="
//                   font-size:22px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.customerName)}
//               </div>
//             </div>

//             <div style="text-align:right;">
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 BOOKING DATE
//               </div>

//               <div
//                 style="
//                   font-size:18px;
//                   font-weight:600;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.bookingDate)}
//               </div>
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:18px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               align-items:center;
//               gap:20px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:11px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 PACKAGE
//               </div>

//               <div
//                 style="
//                   font-size:25px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.packageName)}
//               </div>

//               <div
//                 style="
//                   font-size:13px;
//                   color:#dfb557;
//                   margin-top:5px;
//                 "
//               >
//                 ${escapeHtml(note.tier)}
//               </div>

//             </div>

//             <div
//               style="
//                 color:#dfb557;
//                 font-size:28px;
//                 font-weight:800;
//                 white-space:nowrap;
//               "
//             >
//               ${escapeHtml(note.packagePrice)}
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:22px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:grid;
//               grid-template-columns:1fr 1fr;
//               gap:28px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 SERVICES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${servicesHtml}
//               </ul>

//             </div>

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 FEATURES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${featuresHtml}
//               </ul>

//             </div>

//           </div>

//         </div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//             margin-top:24px;
//             color:#ffffff;
//             font-size:13px;
//             line-height:1.7;
//           "
//         >

//           <div
//             style="
//               color:#dfb557;
//               font-weight:700;
//               letter-spacing:2px;
//             "
//           >
//             HABESHA FILM PRODUCTION STUDIO
//           </div>

//           <div>
//             ✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ! ✨
//           </div>

//         </div>

//       </div>
//     `;

//     let container = null;

//     try {
//       container = document.createElement('div');

//       container.style.position = 'fixed';
//       container.style.left = '-100000px';
//       container.style.top = '0';
//       container.style.width = '900px';
//       container.style.zIndex = '-1';

//       container.innerHTML = receiptHtml;

//       document.body.appendChild(container);

//       const receiptElement =
//         container.querySelector(
//           '#receipt-share-card'
//         );

//       await new Promise((resolve) =>
//         requestAnimationFrame(resolve)
//       );

//       const canvas = await html2canvas(
//         receiptElement,
//         {
//           backgroundColor: '#050505',
//           scale: 2,
//           useCORS: true,
//           logging: false,
//         }
//       );

//       const blob = await new Promise(
//         (resolve) =>
//           canvas.toBlob(
//             resolve,
//             'image/png',
//             1
//           )
//       );

//       if (!blob) {
//         throw new Error(
//           'Could not create receipt image.'
//         );
//       }

//       const file = new File(
//         [blob],
//         `Habesha-Film-Receipt-${Date.now()}.png`,
//         {
//           type: 'image/png',
//         }
//       );

//       if (
//         navigator.share &&
//         (!navigator.canShare ||
//           navigator.canShare({
//             files: [file],
//           }))
//       ) {
//         await navigator.share({
//           title:
//             'Booking Receipt - Habesha Film Production',
//           text:
//             'Booking Receipt - Habesha Film Production',
//           files: [file],
//         });
//       } else {
//         const imageUrl =
//           URL.createObjectURL(blob);

//         const link =
//           document.createElement('a');

//         link.href = imageUrl;

//         link.download = file.name;

//         document.body.appendChild(link);

//         link.click();

//         link.remove();

//         URL.revokeObjectURL(imageUrl);

//         alert(
//           'እቲ Receipt ብPNG ስእሊ ተዳልዩ ኣሎ። እቲ ስእሊ ኣብ WhatsApp ወይ ካልእ app ክትልእኮ ትኽእል።'
//         );
//       }
//     } catch (err) {
//       console.error(
//         'Error creating/sharing receipt:',
//         err
//       );

//       if (err?.name !== 'AbortError') {
//         alert(
//           'Receipt ስእሊ ምፍጣር ወይ ምስዳድ ኣይተዓወተን።'
//         );
//       }
//     } finally {
//       if (
//         container &&
//         container.parentNode
//       ) {
//         container.parentNode.removeChild(
//           container
//         );
//       }
//     }
//   };

//   // =========================================================
//   // SAVE WEBSITE PACKAGES
//   // =========================================================

//   const handleSaveAndExit = async () => {
//     try {
//       // Make sure latest selected package edits are included
//       // before saving website packages.
//       if (selectedPackage?.key) {
//         const updatedTempPackages = {
//           ...tempPackages,

//           [selectedPackage.key]: {
//             ...tempPackages[selectedPackage.key],

//             tier:
//               selectedPackage.tier || '',

//             name:
//               selectedPackage.name || '',

//             price:
//               customizedPrice ||
//               selectedPackage.price ||
//               '',

//             services:
//               Array.isArray(
//                 selectedPackage.services
//               )
//                 ? [...selectedPackage.services]
//                 : [],

//             features:
//               Array.isArray(
//                 selectedPackage.features
//               )
//                 ? [...selectedPackage.features]
//                 : [],
//           },
//         };

//         setTempPackages(
//           updatedTempPackages
//         );

//         const response = await fetch(
//           'https://habesha-film-production-server.onrender.com/api/packages/update',
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type':
//                 'application/json',
//             },
//             body: JSON.stringify(
//               updatedTempPackages
//             ),
//           }
//         );

//         if (response.ok) {
//           setPackages(
//             updatedTempPackages
//           );

//           alert(
//             'ዳታ ብሰላም ተሰዲዱ ኣብ ኩሉ ዲቫይስ ክረአ እዩ!'
//           );
//         } else {
//           alert(
//             'ሰርቨር ጌጋ ኣለዎ።'
//           );
//         }
//       } else {
//         const response = await fetch(
//           'https://habesha-film-production-server.onrender.com/api/packages/update',
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type':
//                 'application/json',
//             },
//             body: JSON.stringify(
//               tempPackages
//             ),
//           }
//         );

//         if (response.ok) {
//           setPackages(tempPackages);

//           alert(
//             'ዳታ ብሰላም ተሰዲዱ ኣብ ኩሉ ዲቫይስ ክረአ እዩ!'
//           );
//         } else {
//           alert(
//             'ሰርቨር ጌጋ ኣለዎ።'
//           );
//         }
//       }
//     } catch (err) {
//       console.error(
//         'Error saving to server:',
//         err
//       );

//       alert(
//         'ዳታ ናብ ሰርቨር ምልኣኽ ኣይከኣለን።'
//       );
//     }

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CANCEL EDIT MODE
//   // =========================================================

//   const handleCancelEdit = () => {
//     setTempPackages(packages);

//     setSelectedPackage(null);

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CLOSE BOOKING / EDIT MODAL
//   // =========================================================

//   const handleCloseBookingModal = () => {
//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);
//   };

//   // =========================================================
//   // PACKAGE EDIT HELPERS
//   // =========================================================

//   const updateTempPackageField = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages((prev) => ({
//       ...prev,

//       [key]: {
//         ...prev[key],
//         [field]: value,
//       },
//     }));
//   };

//   const updateTempPackageArray = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages((prev) => ({
//       ...prev,

//       [key]: {
//         ...prev[key],

//         [field]: value
//           .split('\n')
//           .map((item) => item.trim())
//           .filter(
//             (item) => item.length > 0
//           ),
//       },
//     }));
//   };

//   // =========================================================
//   // RENDER
//   // =========================================================

//   return (
//     <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden flex flex-col justify-between">

//       <Navbar />

//       <div className="flex-grow flex items-center justify-center px-4 py-32">

//         {/* =====================================================
//             LOGIN
//         ===================================================== */}

//         {!isAuthenticated ? (

//           <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center relative">

//             <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">
//               Secure Access
//             </span>

//             <h2 className="text-2xl md:text-3xl font-serif mb-3 text-zinc-100">
//               Protected Price Page
//             </h2>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>

//             <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">
//               እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።
//             </p>

//             <form
//               onSubmit={handleLogin}
//               className="space-y-4"
//             >

//               <input
//                 type="password"
//                 placeholder="Enter Passcode"
//                 value={passcode}
//                 onChange={(e) =>
//                   setPasscode(
//                     e.target.value
//                   )
//                 }
//                 className="w-full px-4 py-3 bg-zinc-900 border border-[#dfb557]/50 rounded-xl focus:outline-none focus:border-[#dfb557] text-center tracking-widest text-lg text-zinc-100 placeholder-zinc-500 shadow-inner"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 disabled:opacity-50 rounded-xl shadow-lg"
//               >
//                 {loading
//                   ? 'Checking...'
//                   : 'Submit'}
//               </button>

//               {error && (
//                 <p className="text-red-400 text-xs mt-2 font-medium">
//                   ጌጋ ፓስኮድ! ደጊምካ ፈትን።
//                 </p>
//               )}

//             </form>

//           </div>

//         ) : isEditMode ? (

//           /* =====================================================
//              ADMIN EDIT MODE
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Administration Mode
//             </span>

//             <h1 className="text-3xl font-serif mb-4 text-zinc-100">
//               Edit Packages & Admin Notebook
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-8"></div>

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl space-y-8 text-left shadow-2xl">

//               {/* =================================================
//                   NOTEBOOK
//               ================================================= */}

//               <div className="bg-zinc-900 p-6 rounded-xl border border-[#dfb557]/30 space-y-4 shadow-inner">

//                 <div className="flex justify-between items-center border-b border-zinc-800 pb-3">

//                   <h3 className="text-xs font-bold uppercase text-[#dfb557] tracking-wider">
//                     📝 Admin Notebook & Customer Bookings
//                   </h3>

//                   <span className="text-[10px] text-zinc-400 font-light">
//                     ዋጋ፣ ኣገልግሎትን ባህርያትን ሒዙ ይዕቀብ
//                   </span>

//                 </div>

//                 <div className="space-y-4 pt-2 max-h-[500px] overflow-y-auto">

//                   {notebookList.length === 0 ? (

//                     <p className="text-zinc-500 text-xs italic text-center py-4">
//                       ዝኾነ ዝተመዝገበ ዓሚል የልቦን። ካብቲ ኣብ ታሕቲ ዘሎ Edit Mode ጌርካ Select ብምባል ክትምዝግብ ትኽእል።
//                     </p>

//                   ) : (

//                     notebookList.map((note) => (

//                       <div
//                         key={note.id}
//                         className="bg-zinc-950 border border-zinc-800 p-5 rounded-xl space-y-4 shadow-md"
//                       >

//                         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-zinc-900 pb-3">

//                           <div className="flex items-center gap-3 flex-wrap">

//                             <span className="text-base font-serif font-bold text-[#dfb557]">
//                               {note.customerName}
//                             </span>

//                             <span className="text-[10px] bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md text-zinc-300 font-semibold">
//                               📅 ዕለት: {note.bookingDate}
//                             </span>

//                           </div>

//                           <span className="text-[9px] text-zinc-500">
//                             ተመዝጊቡሉ: {note.timestamp}
//                           </span>

//                         </div>

//                         <div className="bg-zinc-900/80 border border-[#dfb557]/30 p-4 rounded-xl space-y-4">

//                           <div className="flex justify-between items-center">

//                             <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#dfb557]">
//                               {note.tier}
//                             </span>

//                             <span className="text-lg font-serif font-bold text-[#dfb557]">
//                               {note.packagePrice}
//                             </span>

//                           </div>

//                           <h4 className="text-xl font-serif text-white">
//                             {note.packageName} Package
//                           </h4>

//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3 border-t border-zinc-800">

//                             <div className="space-y-2">

//                               <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                 SERVICES
//                               </span>

//                               <ul className="space-y-1 text-xs text-zinc-300">

//                                 {Array.isArray(
//                                   note.packageServices
//                                 ) &&
//                                 note.packageServices.length > 0 ? (

//                                   note.packageServices.map(
//                                     (service, index) => (
//                                       <li key={index}>
//                                         {service}
//                                       </li>
//                                     )
//                                   )

//                                 ) : (

//                                   <li className="text-zinc-500">
//                                     የለን
//                                   </li>

//                                 )}

//                               </ul>

//                             </div>

//                             <div className="space-y-2">

//                               <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                 FEATURES
//                               </span>

//                               <ul className="space-y-1 text-xs text-zinc-300">

//                                 {Array.isArray(
//                                   note.packageFeatures
//                                 ) &&
//                                 note.packageFeatures.length > 0 ? (

//                                   note.packageFeatures.map(
//                                     (feature, index) => (
//                                       <li key={index}>
//                                         {feature}
//                                       </li>
//                                     )
//                                   )

//                                 ) : (

//                                   <li className="text-zinc-500">
//                                     የለን
//                                   </li>

//                                 )}

//                               </ul>

//                             </div>

//                           </div>

//                         </div>

//                         <div className="flex justify-end items-center gap-2 pt-2 border-t border-zinc-900">

//                           <button
//                             onClick={() =>
//                               handleShareReceipt(note)
//                             }
//                             className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-[10px] uppercase font-semibold transition-all flex items-center gap-1"
//                           >
//                             Share 🔗
//                           </button>

//                           <button
//                             onClick={() =>
//                               handleEditNoteItem(note)
//                             }
//                             className="px-3 py-1.5 bg-[#dfb557]/20 hover:bg-[#dfb557]/40 text-[#dfb557] rounded text-[10px] uppercase font-semibold transition-all"
//                           >
//                             Edit
//                           </button>

//                           <button
//                             onClick={() =>
//                               handleDeleteNote(note.id)
//                             }
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

//               {/* =================================================
//                   WEBSITE PACKAGE EDIT
//               ================================================= */}

//               <div className="pt-4">

//                 <h3 className="text-sm font-bold uppercase text-[#dfb557] tracking-wider mb-4">
//                   ⚙️ Edit Website Packages & Test Select
//                 </h3>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

//                   {Object.keys(
//                     tempPackages
//                   ).map((key) => {

//                     const pkg =
//                       tempPackages[key];

//                     return (

//                       <div
//                         key={key}
//                         className="bg-zinc-900 border-2 border-[#dfb557]/40 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4"
//                       >

//                         <div className="space-y-3">

//                           {/* TIER */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Tier Title
//                             </label>

//                             <input
//                               value={
//                                 pkg.tier || ''
//                               }
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'tier',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold"
//                             />

//                           </div>

//                           {/* NAME */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Package Name
//                             </label>

//                             <input
//                               value={
//                                 pkg.name || ''
//                               }
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'name',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-serif font-bold text-lg"
//                             />

//                           </div>

//                           {/* PRICE */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Price (ዋጋ)
//                             </label>

//                             <input
//                               value={
//                                 pkg.price || ''
//                               }
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'price',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-[#dfb557] font-bold"
//                             />

//                           </div>

//                           {/* SERVICES */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Services
//                             </label>

//                             <textarea
//                               rows="5"
//                               value={(
//                                 pkg.services || []
//                               ).join('\n')}
//                               onChange={(e) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'services',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One service per line"
//                             />

//                           </div>

//                           {/* FEATURES */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Features
//                             </label>

//                             <textarea
//                               rows="6"
//                               value={(
//                                 pkg.features || []
//                               ).join('\n')}
//                               onChange={(e) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'features',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One feature per line"
//                             />

//                           </div>

//                         </div>

//                         {/* =================================================
//                             SELECT
//                         ================================================= */}

//                         <button
//                           type="button"
//                           onClick={() =>
//                             handleSelectPackageClick(key)
//                           }
//                           className="w-full bg-[#dfb557] text-black py-2.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-md cursor-pointer"
//                         >
//                           Select {pkg.name} ➔
//                         </button>

//                       </div>

//                     );
//                   })}

//                 </div>

//               </div>

//               {/* SAVE / CANCEL */}

//               <div className="flex justify-end gap-4 pt-4 border-t border-zinc-900">

//                 <button
//                   type="button"
//                   onClick={handleCancelEdit}
//                   className="px-6 py-3 bg-zinc-900 text-zinc-300 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="button"
//                   onClick={handleSaveAndExit}
//                   className="px-6 py-3 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45] transition-all"
//                 >
//                   Save Changes
//                 </button>

//               </div>

//             </div>

//           </div>

//         ) : (

//           /* =====================================================
//              CUSTOMER VIEW
//              NO SELECT BUTTON
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">

//             {/* ADMIN ACCESS */}

//             <div className="flex justify-end mb-4">

//               {!isEditGateOpen ? (

//                 <div className="flex flex-col items-end">

//                   <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-[#dfb557]/40 shadow-lg">

//                     <input
//                       type="password"
//                       placeholder="Admin Code"
//                       value={adminPasscode}
//                       onChange={(e) =>
//                         setAdminPasscode(
//                           e.target.value
//                         )
//                       }
//                       className="bg-transparent text-zinc-100 text-xs px-2 focus:outline-none w-28"
//                     />

//                     <button
//                       type="button"
//                       onClick={
//                         handleEditGateSubmit
//                       }
//                       className="px-3 py-1.5 bg-[#dfb557] text-black rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#c99f45] transition-all"
//                     >
//                       Unlock
//                     </button>

//                   </div>

//                   {adminError && (
//                     <p className="text-red-400 text-[10px] mt-1 font-medium">
//                       Wrong Admin Code!
//                     </p>
//                   )}

//                 </div>

//               ) : (

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setIsEditMode(true)
//                   }
//                   className="px-4 py-2 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-semibold tracking-widest shadow-md hover:bg-[#c99f45] transition-all"
//                 >
//                   Enter Edit Mode ⚙️
//                 </button>

//               )}

//             </div>

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Investment & Tiers
//             </span>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">
//               Our Professional Packages
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4"></div>

//             <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
//               ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ደረጃታት እቲ ንደለይዎ ምረጹ።
//             </p>

//             {/* CUSTOMER PACKAGES */}

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

//               {Object.keys(
//                 packages
//               ).map((key) => {

//                 const pkg =
//                   packages[key];

//                 return (

//                   <div
//                     key={key}
//                     className={`bg-zinc-950/90 border-2 ${
//                       key === 'gold'
//                         ? 'border-[#dfb557]'
//                         : 'border-[#dfb557]/50'
//                     } p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between relative`}
//                   >

//                     {key === 'gold' && (
//                       <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
//                         {pkg.tier}
//                       </span>
//                     )}

//                     <div>

//                       <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">
//                         {key === 'gold'
//                           ? 'Exclusive'
//                           : pkg.tier}
//                       </span>

//                       <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">
//                         {pkg.name}
//                       </h3>

//                       <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">
//                         {pkg.price}
//                       </p>

//                       {/* SERVICES */}

//                       {pkg.services &&
//                         pkg.services.length >
//                           0 && (

//                           <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">

//                             {pkg.services.map(
//                               (
//                                 service,
//                                 index
//                               ) => (

//                                 <p
//                                   key={index}
//                                 >
//                                   {service}
//                                 </p>

//                               )
//                             )}

//                           </div>

//                         )}

//                       {/* FEATURES */}

//                       <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-6 font-light">

//                         {(pkg.features || []).map(
//                           (
//                             feature,
//                             index
//                           ) => (

//                             <li
//                               key={index}
//                               className="flex items-center gap-2"
//                             >
//                               {feature}
//                             </li>

//                           )
//                         )}

//                       </ul>

//                     </div>

//                   </div>

//                 );

//               })}

//             </div>

//           </div>

//         )}

//       </div>

//       {/* =======================================================
//           BOOKING / EDIT MODAL
//       ======================================================= */}

//       {isBookingModalOpen &&
//         selectedPackage && (

//           <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl max-w-4xl w-full shadow-2xl space-y-6 my-8">

//               <div className="flex justify-between items-center border-b border-zinc-900 pb-3">

//                 <div>

//                   <h3 className="text-lg font-serif text-[#dfb557]">
//                     {editingNoteId !== null
//                       ? 'ነባር ምዝገባ ኣስተካክል'
//                       : 'ዝርዝር መረጻ ንዓሚል ምዝገባ'}
//                   </h3>

//                   {editingNoteId !== null && (

//                     <span className="text-[10px] text-zinc-500">
//                       Edit existing booking
//                     </span>

//                   )}

//                 </div>

//                 <button
//                   type="button"
//                   onClick={
//                     handleCloseBookingModal
//                   }
//                   className="text-zinc-400 hover:text-white text-sm font-bold"
//                 >
//                   ✕
//                 </button>

//               </div>

//               <form
//                 onSubmit={
//                   handleBookingSubmit
//                 }
//                 className="space-y-5"
//               >

//                 {/* CUSTOMER NAME + DATE */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ስም ዓሚል (Customer Name)
//                     </label>

//                     <input
//                       type="text"
//                       required
//                       placeholder="ኣብነት: ኣቤል ዳዊት"
//                       value={
//                         customerName
//                       }
//                       onChange={(e) =>
//                         setCustomerName(
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ዕለት መደብ (Booking Date)
//                     </label>

//                     <input
//                       type="date"
//                       required
//                       value={
//                         bookingDate
//                       }
//                       onChange={(e) =>
//                         setBookingDate(
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* PACKAGE NAME + TIER + PRICE */}

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       Package Name
//                     </label>

//                     <input
//                       type="text"
//                       value={
//                         selectedPackage.name || ''
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageField(
//                           'name',
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 font-bold focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       Tier
//                     </label>

//                     <input
//                       type="text"
//                       value={
//                         selectedPackage.tier || ''
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageField(
//                           'tier',
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ዋጋ (Price)
//                     </label>

//                     <input
//                       type="text"
//                       required
//                       value={
//                         customizedPrice
//                       }
//                       onChange={(e) => {
//                         const value =
//                           e.target.value;

//                         setCustomizedPrice(
//                           value
//                         );

//                         updateSelectedPackageField(
//                           'price',
//                           value
//                         );
//                       }}
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-[#dfb557] font-bold focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* =====================================================
//                     EDITABLE SERVICES + FEATURES
//                     THIS IS THE MAIN FIX
//                 ===================================================== */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   {/* SERVICES EDITOR */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-5">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         SERVICES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage.services?.length || 0}{' '}
//                         items
//                       </span>

//                     </div>

//                     <textarea
//                       rows="8"
//                       value={(
//                         selectedPackage.services ||
//                         []
//                       ).join('\n')}
//                       onChange={(e) =>
//                         updateSelectedPackageArray(
//                           'services',
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-950 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-[#dfb557]"
//                       placeholder="One service per line"
//                     />

//                     <p className="text-[9px] text-zinc-500 mt-2">
//                       ነፍሲ ወከፍ Service ኣብ ሓደ መስመር ጽሓፍ።
//                     </p>

//                   </div>

//                   {/* FEATURES EDITOR */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-5">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         FEATURES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage.features?.length || 0}{' '}
//                         items
//                       </span>

//                     </div>

//                     <textarea
//                       rows="8"
//                       value={(
//                         selectedPackage.features ||
//                         []
//                       ).join('\n')}
//                       onChange={(e) =>
//                         updateSelectedPackageArray(
//                           'features',
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-950 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-[#dfb557]"
//                       placeholder="One feature per line"
//                     />

//                     <p className="text-[9px] text-zinc-500 mt-2">
//                       ነፍሲ ወከፍ Feature ኣብ ሓደ መስመር ጽሓፍ።
//                     </p>

//                   </div>

//                 </div>

//                 {/* CURRENT PREVIEW */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">

//                     <h5 className="text-[9px] uppercase tracking-widest text-[#dfb557] font-bold mb-3">
//                       Current Services
//                     </h5>

//                     <ul className="space-y-1 text-xs text-zinc-300">

//                       {selectedPackage.services?.length ? (

//                         selectedPackage.services.map(
//                           (service, index) => (
//                             <li key={index}>
//                               {service}
//                             </li>
//                           )
//                         )

//                       ) : (

//                         <li className="text-zinc-500">
//                           የለን
//                         </li>

//                       )}

//                     </ul>

//                   </div>

//                   <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">

//                     <h5 className="text-[9px] uppercase tracking-widest text-[#dfb557] font-bold mb-3">
//                       Current Features
//                     </h5>

//                     <ul className="space-y-1 text-xs text-zinc-300">

//                       {selectedPackage.features?.length ? (

//                         selectedPackage.features.map(
//                           (feature, index) => (
//                             <li key={index}>
//                               {feature}
//                             </li>
//                           )
//                         )

//                       ) : (

//                         <li className="text-zinc-500">
//                           የለን
//                         </li>

//                       )}

//                     </ul>

//                   </div>

//                 </div>

//                 {/* SAVE / CANCEL */}

//                 <div className="flex gap-3 pt-2 border-t border-zinc-900">

//                   <button
//                     type="button"
//                     onClick={
//                       handleCloseBookingModal
//                     }
//                     className="w-1/2 bg-zinc-900 text-zinc-300 py-3 rounded-xl text-xs uppercase font-bold hover:bg-zinc-800 transition-all"
//                   >
//                     ሰርዝ
//                   </button>

//                   <button
//                     type="submit"
//                     className="w-1/2 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold hover:bg-[#c99f45] transition-all shadow-lg"
//                   >
//                     {editingNoteId !== null
//                       ? 'Update / Save'
//                       : 'ኣቐመጥ (Save)'}
//                   </button>

//                 </div>

//               </form>

//             </div>

//           </div>

//         )}

//       <Footer />

//     </div>
//   );
// }

// export default Price;

// import React, { useState, useEffect } from 'react';
// import html2canvas from 'html2canvas';
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

//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

//   const [customerName, setCustomerName] = useState('');
//   const [bookingDate, setBookingDate] = useState('');
//   const [customizedPrice, setCustomizedPrice] = useState('');

//   const [editingNoteId, setEditingNoteId] = useState(null);

//   const [notebookList, setNotebookList] = useState([]);

//   const defaultPackages = {
//     premium: {
//       tier: 'Ultimate VIP',
//       name: 'Premium',
//       price: '$1,000+',
//       services: [
//         '• ቪድዮ ቀረጻ (Unlimited)',
//         '• ክልተ ኤክስፐርት ካሜራማን',
//         '• Cinematic Color Grading & VFX',
//       ],
//       features: [
//         '✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)',
//         '✓ ክልተ ኤክስፐርት ካሜራማን',
//         '✓ Cinematic Color Grading & VFX',
//         '🎁 ቦናስ: ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር',
//       ],
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
//         '• ኩሉ ሶፍት ኮፒ (All Soft Copy)',
//       ],
//       features: [
//         '✓ 800 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)',
//         '✓ 2 ሳይን ቦርድ (30×45)',
//         '✓ 3 ቦርድ (50×80, 40×60, 30×45)',
//         '✓ 400 ምስጋና ካርድ (Thank You Card)',
//         '✓ 8 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     silver: {
//       tier: 'Advanced',
//       name: 'Silver',
//       price: '240,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)',
//       ],
//       features: [
//         '✓ 500 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 2 ቦርድ (50×80 & 40×60)',
//         '✓ 250 ምስጋና ካርድ (Thank You Card)',
//         '✓ 6 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     standard: {
//       tier: 'Standard',
//       name: 'Standard',
//       price: '190,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)',
//       ],
//       features: [
//         '✓ 300 ፎቶዎች (10×15)',
//         '✓ 1 ላሚኔትድ ፎቶ (30×90)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 1 ቦርድ (50×80)',
//         '✓ 200 ምስጋና ካርድ (Thank You Card)',
//         '✓ 4 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },
//   };

//   const [packages, setPackages] = useState(defaultPackages);
//   const [tempPackages, setTempPackages] = useState(defaultPackages);

//   // =========================================================
//   // LOAD DATA
//   // =========================================================

//   useEffect(() => {
//     fetch(
//       'https://habesha-film-production-server.onrender.com/api/packages'
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           const mergedData = {
//             premium: {
//               ...defaultPackages.premium,
//               ...data.premium,
//               services: Array.isArray(data.premium?.services)
//                 ? data.premium.services
//                 : defaultPackages.premium.services,
//               features: Array.isArray(data.premium?.features)
//                 ? data.premium.features
//                 : defaultPackages.premium.features,
//             },

//             gold: {
//               ...defaultPackages.gold,
//               ...data.gold,
//               services: Array.isArray(data.gold?.services)
//                 ? data.gold.services
//                 : defaultPackages.gold.services,
//               features: Array.isArray(data.gold?.features)
//                 ? data.gold.features
//                 : defaultPackages.gold.features,
//             },

//             silver: {
//               ...defaultPackages.silver,
//               ...data.silver,
//               services: Array.isArray(data.silver?.services)
//                 ? data.silver.services
//                 : defaultPackages.silver.services,
//               features: Array.isArray(data.silver?.features)
//                 ? data.silver.features
//                 : defaultPackages.silver.features,
//             },

//             standard: {
//               ...defaultPackages.standard,
//               ...data.standard,
//               services: Array.isArray(data.standard?.services)
//                 ? data.standard.services
//                 : defaultPackages.standard.services,
//               features: Array.isArray(data.standard?.features)
//                 ? data.standard.features
//                 : defaultPackages.standard.features,
//             },
//           };

//           setPackages(mergedData);
//           setTempPackages(mergedData);
//         }
//       })
//       .catch((err) => {
//         console.log('Failed to fetch packages:', err);
//       });

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

//     const savedNotes = localStorage.getItem(
//       'adminNotebookListPersistent'
//     );

//     if (savedNotes) {
//       try {
//         const parsedNotes = JSON.parse(savedNotes);

//         if (Array.isArray(parsedNotes)) {
//           setNotebookList(parsedNotes);
//         }
//       } catch (e) {
//         console.log('Error parsing saved notes');
//       }
//     }
//   }, []);

//   // =========================================================
//   // LOGIN
//   // =========================================================

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setError(false);

//     try {
//       const response = await fetch(
//         'https://habesha-film-production-server.onrender.com/api/auth/verify-passcode',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             passcode,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsAuthenticated(true);

//         const expiryDuration = 10 * 60 * 1000;

//         const authData = {
//           value: 'true',
//           expiry: new Date().getTime() + expiryDuration,
//         };

//         localStorage.setItem(
//           'priceAuthData',
//           JSON.stringify(authData)
//         );
//       } else {
//         setError(true);
//       }
//     } catch (err) {
//       console.error('Error verifying passcode:', err);
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================================
//   // ADMIN EDIT GATE
//   // =========================================================

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

//   // =========================================================
//   // SELECT PACKAGE
//   //
//   // IMPORTANT:
//   // This creates an INDEPENDENT COPY.
//   // It does NOT modify tempPackages.
//   // =========================================================

//   const handleSelectPackageClick = (pkgKey) => {
//     if (!isEditMode) return;

//     const pkg = tempPackages[pkgKey];

//     if (!pkg) {
//       console.error('Package not found:', pkgKey);
//       return;
//     }

//     const independentPackageCopy = {
//       tier: pkg.tier || '',
//       name: pkg.name || '',
//       price: pkg.price || '',

//       services: Array.isArray(pkg.services)
//         ? [...pkg.services]
//         : [],

//       features: Array.isArray(pkg.features)
//         ? [...pkg.features]
//         : [],
//     };

//     setSelectedPackage(independentPackageCopy);

//     setCustomerName('');
//     setBookingDate('');
//     setCustomizedPrice(independentPackageCopy.price);

//     setEditingNoteId(null);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // UPDATE SELECTED NOTE PACKAGE ONLY
//   //
//   // IMPORTANT:
//   // These functions NEVER update tempPackages.
//   // =========================================================

//   const updateSelectedPackageField = (field, value) => {
//     setSelectedPackage((prev) => {
//       if (!prev) return prev;

//       return {
//         ...prev,
//         [field]: value,
//       };
//     });
//   };

//   const updateSelectedPackageArray = (
//     field,
//     value
//   ) => {
//     setSelectedPackage((prev) => {
//       if (!prev) return prev;

//       return {
//         ...prev,

//         [field]: value
//           .split('\n')
//           .map((item) => item.trim())
//           .filter((item) => item.length > 0),
//       };
//     });
//   };

//   // =========================================================
//   // SAVE NOTEBOOK
//   // =========================================================

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !customerName.trim() ||
//       !bookingDate ||
//       !selectedPackage
//     ) {
//       return;
//     }

//     const newBookingRecord = {
//       id:
//         editingNoteId !== null
//           ? editingNoteId
//           : Date.now(),

//       customerName: customerName.trim(),

//       bookingDate,

//       packageName: selectedPackage.name || '',

//       packagePrice: customizedPrice,

//       tier: selectedPackage.tier || '',

//       packageServices: Array.isArray(
//         selectedPackage.services
//       )
//         ? [...selectedPackage.services]
//         : [],

//       packageFeatures: Array.isArray(
//         selectedPackage.features
//       )
//         ? [...selectedPackage.features]
//         : [],

//       timestamp:
//         editingNoteId !== null
//           ? notebookList.find(
//               (item) => item.id === editingNoteId
//             )?.timestamp ||
//             new Date().toLocaleString()
//           : new Date().toLocaleString(),
//     };

//     let updatedList;

//     if (editingNoteId !== null) {
//       updatedList = notebookList.map((item) =>
//         item.id === editingNoteId
//           ? newBookingRecord
//           : item
//       );
//     } else {
//       updatedList = [
//         newBookingRecord,
//         ...notebookList,
//       ];
//     }

//     setNotebookList(updatedList);

//     localStorage.setItem(
//       'adminNotebookListPersistent',
//       JSON.stringify(updatedList)
//     );

//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);

//     alert(
//       editingNoteId !== null
//         ? 'ዝነበረ Notebook ብሰላም ተስተካኺሉ እዩ!'
//         : 'ብሰላም ኣብ Admin Notebook ተዓቂቡ እዩ!'
//     );
//   };

//   // =========================================================
//   // EDIT NOTEBOOK
//   //
//   // IMPORTANT:
//   // The notebook gets its OWN COPY.
//   // The main package is NEVER modified.
//   // =========================================================

//   const handleEditNoteItem = (note) => {
//     const foundKey = Object.keys(packages).find(
//       (key) =>
//         packages[key].name === note.packageName
//     );

//     const pkg =
//       packages[foundKey] || packages.gold;

//     const independentNotebookCopy = {
//       tier:
//         note.tier ||
//         pkg.tier ||
//         '',

//       name:
//         note.packageName ||
//         pkg.name ||
//         '',

//       price:
//         note.packagePrice ||
//         pkg.price ||
//         '',

//       services: Array.isArray(
//         note.packageServices
//       )
//         ? [...note.packageServices]
//         : Array.isArray(pkg.services)
//         ? [...pkg.services]
//         : [],

//       features: Array.isArray(
//         note.packageFeatures
//       )
//         ? [...note.packageFeatures]
//         : Array.isArray(pkg.features)
//         ? [...pkg.features]
//         : [],
//     };

//     setSelectedPackage(
//       independentNotebookCopy
//     );

//     setCustomerName(
//       note.customerName || ''
//     );

//     setBookingDate(
//       note.bookingDate || ''
//     );

//     setCustomizedPrice(
//       note.packagePrice || ''
//     );

//     setEditingNoteId(note.id);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // DELETE NOTE
//   // =========================================================

//   const handleDeleteNote = (id) => {
//     const updatedList =
//       notebookList.filter(
//         (note) => note.id !== id
//       );

//     setNotebookList(updatedList);

//     localStorage.setItem(
//       'adminNotebookListPersistent',
//       JSON.stringify(updatedList)
//     );
//   };

//   // =========================================================
//   // ESCAPE HTML
//   // =========================================================

//   const escapeHtml = (value) =>
//     String(value ?? '')
//       .replace(/&/g, '&amp;')
//       .replace(/</g, '&lt;')
//       .replace(/>/g, '&gt;')
//       .replace(/"/g, '&quot;')
//       .replace(/'/g, '&#039;');

//   // =========================================================
//   // SHARE RECEIPT
//   // =========================================================

//   const handleShareReceipt = async (note) => {
//     const servicesHtml =
//       Array.isArray(note.packageServices) &&
//       note.packageServices.length > 0
//         ? note.packageServices
//             .map(
//               (service) =>
//                 `<li>${escapeHtml(service)}</li>`
//             )
//             .join('')
//         : '<li>ሕጂ ንጊዜው ዝተወሰነ ኣገልግሎት የለን</li>';

//     const featuresHtml =
//       Array.isArray(note.packageFeatures) &&
//       note.packageFeatures.length > 0
//         ? note.packageFeatures
//             .map(
//               (feature) =>
//                 `<li>${escapeHtml(feature)}</li>`
//             )
//             .join('')
//         : '<li>የለን</li>';

//     const receiptHtml = `
//       <div
//         id="receipt-share-card"
//         style="
//           width:900px;
//           box-sizing:border-box;
//           background:#050505;
//           color:#ffffff;
//           padding:42px;
//           font-family:Arial,'Noto Sans Ethiopic',sans-serif;
//           border:4px solid #dfb557;
//           border-radius:24px;
//           position:relative;
//           overflow:hidden;
//         "
//       >

//         <div
//           style="
//             position:absolute;
//             inset:14px;
//             border:1px solid rgba(223,181,87,.45);
//             border-radius:16px;
//             pointer-events:none;
//           "
//         ></div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//           "
//         >
//           <div
//             style="
//               color:#dfb557;
//               font-size:18px;
//               font-weight:700;
//               letter-spacing:5px;
//               margin-bottom:10px;
//             "
//           >
//             HABESHA FILM PRODUCTION
//           </div>

//           <div
//             style="
//               color:#ffffff;
//               font-size:28px;
//               font-weight:700;
//               margin-bottom:8px;
//             "
//           >
//             BOOKING RECEIPT
//           </div>

//           <div
//             style="
//               width:90px;
//               height:3px;
//               background:#dfb557;
//               margin:0 auto 26px;
//             "
//           ></div>
//         </div>

//         <div
//           style="
//             position:relative;
//             z-index:1;
//             border:1px solid rgba(223,181,87,.55);
//             border-radius:16px;
//             padding:24px;
//             background:#0b0b0b;
//           "
//         >

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               gap:24px;
//               margin-bottom:16px;
//             "
//           >

//             <div>
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 CUSTOMER NAME
//               </div>

//               <div
//                 style="
//                   font-size:22px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.customerName)}
//               </div>
//             </div>

//             <div style="text-align:right;">
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 BOOKING DATE
//               </div>

//               <div
//                 style="
//                   font-size:18px;
//                   font-weight:600;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.bookingDate)}
//               </div>
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:18px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               align-items:center;
//               gap:20px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:11px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 PACKAGE
//               </div>

//               <div
//                 style="
//                   font-size:25px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.packageName)}
//               </div>

//               <div
//                 style="
//                   font-size:13px;
//                   color:#dfb557;
//                   margin-top:5px;
//                 "
//               >
//                 ${escapeHtml(note.tier)}
//               </div>

//             </div>

//             <div
//               style="
//                 color:#dfb557;
//                 font-size:28px;
//                 font-weight:800;
//                 white-space:nowrap;
//               "
//             >
//               ${escapeHtml(note.packagePrice)}
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:22px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:grid;
//               grid-template-columns:1fr 1fr;
//               gap:28px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 SERVICES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${servicesHtml}
//               </ul>

//             </div>

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 FEATURES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${featuresHtml}
//               </ul>

//             </div>

//           </div>

//         </div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//             margin-top:24px;
//             color:#ffffff;
//             font-size:13px;
//             line-height:1.7;
//           "
//         >

//           <div
//             style="
//               color:#dfb557;
//               font-weight:700;
//               letter-spacing:2px;
//             "
//           >
//             HABESHA FILM PRODUCTION STUDIO
//           </div>

//           <div>
//             ✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ! ✨
//           </div>

//         </div>

//       </div>
//     `;

//     let container = null;

//     try {
//       container = document.createElement('div');

//       container.style.position = 'fixed';
//       container.style.left = '-100000px';
//       container.style.top = '0';
//       container.style.width = '900px';
//       container.style.zIndex = '-1';

//       container.innerHTML = receiptHtml;

//       document.body.appendChild(container);

//       const receiptElement =
//         container.querySelector(
//           '#receipt-share-card'
//         );

//       await new Promise((resolve) =>
//         requestAnimationFrame(resolve)
//       );

//       const canvas = await html2canvas(
//         receiptElement,
//         {
//           backgroundColor: '#050505',
//           scale: 2,
//           useCORS: true,
//           logging: false,
//         }
//       );

//       const blob = await new Promise(
//         (resolve) =>
//           canvas.toBlob(
//             resolve,
//             'image/png',
//             1
//           )
//       );

//       if (!blob) {
//         throw new Error(
//           'Could not create receipt image.'
//         );
//       }

//       const file = new File(
//         [blob],
//         `Habesha-Film-Receipt-${Date.now()}.png`,
//         {
//           type: 'image/png',
//         }
//       );

//       if (
//         navigator.share &&
//         (!navigator.canShare ||
//           navigator.canShare({
//             files: [file],
//           }))
//       ) {
//         await navigator.share({
//           title:
//             'Booking Receipt - Habesha Film Production',
//           text:
//             'Booking Receipt - Habesha Film Production',
//           files: [file],
//         });
//       } else {
//         const imageUrl =
//           URL.createObjectURL(blob);

//         const link =
//           document.createElement('a');

//         link.href = imageUrl;
//         link.download = file.name;

//         document.body.appendChild(link);

//         link.click();

//         link.remove();

//         URL.revokeObjectURL(imageUrl);

//         alert(
//           'እቲ Receipt ብPNG ስእሊ ተዳልዩ ኣሎ። እቲ ስእሊ ኣብ WhatsApp ወይ ካልእ app ክትልእኮ ትኽእል።'
//         );
//       }
//     } catch (err) {
//       console.error(
//         'Error creating/sharing receipt:',
//         err
//       );

//       if (err?.name !== 'AbortError') {
//         alert(
//           'Receipt ስእሊ ምፍጣር ወይ ምስዳድ ኣይተዓወተን።'
//         );
//       }
//     } finally {
//       if (
//         container &&
//         container.parentNode
//       ) {
//         container.parentNode.removeChild(
//           container
//         );
//       }
//     }
//   };

//   // =========================================================
//   // SAVE MAIN WEBSITE PACKAGES
//   //
//   // ONLY THIS FUNCTION changes the main packages.
//   // =========================================================

//   const handleSaveAndExit = async () => {
//     try {
//       const response = await fetch(
//         'https://habesha-film-production-server.onrender.com/api/packages/update',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(tempPackages),
//         }
//       );

//       if (response.ok) {
//         setPackages(tempPackages);

//         alert(
//           'ዳታ ብሰላም ተሰዲዱ ኣብ ኩሉ ዲቫይስ ክረአ እዩ!'
//         );
//       } else {
//         alert('ሰርቨር ጌጋ ኣለዎ።');
//       }
//     } catch (err) {
//       console.error(
//         'Error saving to server:',
//         err
//       );

//       alert(
//         'ዳታ ናብ ሰርቨር ምልኣኽ ኣይከኣለን።'
//       );
//     }

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CANCEL MAIN EDIT MODE
//   // =========================================================

//   const handleCancelEdit = () => {
//     setTempPackages(packages);

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CLOSE BOOKING / NOTEBOOK MODAL
//   // =========================================================

//   const handleCloseBookingModal = () => {
//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);
//   };

//   // =========================================================
//   // MAIN PACKAGE EDIT HELPERS
//   //
//   // These are ONLY for the main website packages.
//   // Notebook editing does NOT use these functions.
//   // =========================================================

//   const updateTempPackageField = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages((prev) => ({
//       ...prev,

//       [key]: {
//         ...prev[key],
//         [field]: value,
//       },
//     }));
//   };

//   const updateTempPackageArray = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages((prev) => ({
//       ...prev,

//       [key]: {
//         ...prev[key],

//         [field]: value
//           .split('\n')
//           .map((item) => item.trim())
//           .filter(
//             (item) => item.length > 0
//           ),
//       },
//     }));
//   };

//   // =========================================================
//   // RENDER
//   // =========================================================

//   return (
//     <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden flex flex-col justify-between">

//       <Navbar />

//       <div className="flex-grow flex items-center justify-center px-4 py-32">

//         {/* LOGIN */}

//         {!isAuthenticated ? (

//           <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center relative">

//             <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">
//               Secure Access
//             </span>

//             <h2 className="text-2xl md:text-3xl font-serif mb-3 text-zinc-100">
//               Protected Price Page
//             </h2>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4" />

//             <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">
//               እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።
//             </p>

//             <form
//               onSubmit={handleLogin}
//               className="space-y-4"
//             >

//               <input
//                 type="password"
//                 placeholder="Enter Passcode"
//                 value={passcode}
//                 onChange={(e) =>
//                   setPasscode(e.target.value)
//                 }
//                 className="w-full px-4 py-3 bg-zinc-900 border border-[#dfb557]/50 rounded-xl focus:outline-none focus:border-[#dfb557] text-center tracking-widest text-lg text-zinc-100 placeholder-zinc-500 shadow-inner"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 disabled:opacity-50 rounded-xl shadow-lg"
//               >
//                 {loading
//                   ? 'Checking...'
//                   : 'Submit'}
//               </button>

//               {error && (
//                 <p className="text-red-400 text-xs mt-2 font-medium">
//                   ጌጋ ፓስኮድ! ደጊምካ ፈትን።
//                 </p>
//               )}

//             </form>

//           </div>

//         ) : isEditMode ? (

//           /* =====================================================
//              ADMIN EDIT MODE
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Administration Mode
//             </span>

//             <h1 className="text-3xl font-serif mb-4 text-zinc-100">
//               Edit Packages & Admin Notebook
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-8" />

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl space-y-8 text-left shadow-2xl">

//               {/* =================================================
//                   NOTEBOOK
//               ================================================= */}

//               <div className="bg-zinc-900 p-6 rounded-xl border border-[#dfb557]/30 space-y-4 shadow-inner">

//                 <div className="flex justify-between items-center border-b border-zinc-800 pb-3">

//                   <h3 className="text-xs font-bold uppercase text-[#dfb557] tracking-wider">
//                     📝 Admin Notebook & Customer Bookings
//                   </h3>

//                   <span className="text-[10px] text-zinc-400 font-light">
//                     ዋጋ፣ ኣገልግሎትን ባህርያትን ሒዙ ይዕቀብ
//                   </span>

//                 </div>

//                 <div className="space-y-4 pt-2 max-h-[500px] overflow-y-auto">

//                   {notebookList.length === 0 ? (

//                     <p className="text-zinc-500 text-xs italic text-center py-4">
//                       ዝኾነ ዝተመዝገበ ዓሚል የልቦን። ካብቲ ኣብ ታሕቲ ዘሎ Edit Mode ጌርካ Select ብምባል ክትምዝግብ ትኽእል።
//                     </p>

//                   ) : (

//                     notebookList.map((note) => (

//                       <div
//                         key={note.id}
//                         className="bg-zinc-950 border border-zinc-800 p-5 rounded-xl space-y-4 shadow-md"
//                       >

//                         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-zinc-900 pb-3">

//                           <div className="flex items-center gap-3 flex-wrap">

//                             <span className="text-base font-serif font-bold text-[#dfb557]">
//                               {note.customerName}
//                             </span>

//                             <span className="text-[10px] bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md text-zinc-300 font-semibold">
//                               📅 ዕለት: {note.bookingDate}
//                             </span>

//                           </div>

//                           <span className="text-[9px] text-zinc-500">
//                             ተመዝጊቡሉ: {note.timestamp}
//                           </span>

//                         </div>

//                         <div className="bg-zinc-900/80 border border-[#dfb557]/30 p-4 rounded-xl space-y-4">

//                           <div className="flex justify-between items-center">

//                             <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#dfb557]">
//                               {note.tier}
//                             </span>

//                             <span className="text-lg font-serif font-bold text-[#dfb557]">
//                               {note.packagePrice}
//                             </span>

//                           </div>

//                           <h4 className="text-xl font-serif text-white">
//                             {note.packageName} Package
//                           </h4>

//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3 border-t border-zinc-800">

//                             <div className="space-y-2">

//                               <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                 SERVICES
//                               </span>

//                               <ul className="space-y-1 text-xs text-zinc-300">

//                                 {Array.isArray(
//                                   note.packageServices
//                                 ) &&
//                                 note.packageServices.length > 0 ? (

//                                   note.packageServices.map(
//                                     (service, index) => (
//                                       <li key={index}>
//                                         {service}
//                                       </li>
//                                     )
//                                   )

//                                 ) : (

//                                   <li className="text-zinc-500">
//                                     የለን
//                                   </li>

//                                 )}

//                               </ul>

//                             </div>

//                             <div className="space-y-2">

//                               <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                 FEATURES
//                               </span>

//                               <ul className="space-y-1 text-xs text-zinc-300">

//                                 {Array.isArray(
//                                   note.packageFeatures
//                                 ) &&
//                                 note.packageFeatures.length > 0 ? (

//                                   note.packageFeatures.map(
//                                     (feature, index) => (
//                                       <li key={index}>
//                                         {feature}
//                                       </li>
//                                     )
//                                   )

//                                 ) : (

//                                   <li className="text-zinc-500">
//                                     የለን
//                                   </li>

//                                 )}

//                               </ul>

//                             </div>

//                           </div>

//                         </div>

//                         <div className="flex justify-end items-center gap-2 pt-2 border-t border-zinc-900">

//                           <button
//                             onClick={() =>
//                               handleShareReceipt(note)
//                             }
//                             className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-[10px] uppercase font-semibold transition-all flex items-center gap-1"
//                           >
//                             Share 🔗
//                           </button>

//                           <button
//                             onClick={() =>
//                               handleEditNoteItem(note)
//                             }
//                             className="px-3 py-1.5 bg-[#dfb557]/20 hover:bg-[#dfb557]/40 text-[#dfb557] rounded text-[10px] uppercase font-semibold transition-all"
//                           >
//                             Edit
//                           </button>

//                           <button
//                             onClick={() =>
//                               handleDeleteNote(note.id)
//                             }
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

//               {/* =================================================
//                   MAIN WEBSITE PACKAGE EDIT
//               ================================================= */}

//               <div className="pt-4">

//                 <h3 className="text-sm font-bold uppercase text-[#dfb557] tracking-wider mb-4">
//                   ⚙️ Edit Website Packages & Test Select
//                 </h3>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

//                   {Object.keys(tempPackages).map((key) => {

//                     const pkg = tempPackages[key];

//                     return (

//                       <div
//                         key={key}
//                         className="bg-zinc-900 border-2 border-[#dfb557]/40 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4"
//                       >

//                         <div className="space-y-3">

//                           {/* TIER */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Tier Title
//                             </label>

//                             <input
//                               value={pkg.tier || ''}
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'tier',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold"
//                             />

//                           </div>

//                           {/* NAME */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Package Name
//                             </label>

//                             <input
//                               value={pkg.name || ''}
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'name',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-serif font-bold text-lg"
//                             />

//                           </div>

//                           {/* PRICE */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Price (ዋጋ)
//                             </label>

//                             <input
//                               value={pkg.price || ''}
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'price',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-[#dfb557] font-bold"
//                             />

//                           </div>

//                           {/* SERVICES */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Services
//                             </label>

//                             <textarea
//                               rows="5"
//                               value={(pkg.services || []).join('\n')}
//                               onChange={(e) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'services',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One service per line"
//                             />

//                           </div>

//                           {/* FEATURES */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Features
//                             </label>

//                             <textarea
//                               rows="6"
//                               value={(pkg.features || []).join('\n')}
//                               onChange={(e) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'features',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One feature per line"
//                             />

//                           </div>

//                         </div>

//                         <button
//                           type="button"
//                           onClick={() =>
//                             handleSelectPackageClick(key)
//                           }
//                           className="w-full bg-[#dfb557] text-black py-2.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-md cursor-pointer"
//                         >
//                           Select {pkg.name} ➔
//                         </button>

//                       </div>

//                     );
//                   })}

//                 </div>

//               </div>

//               {/* SAVE / CANCEL MAIN PACKAGE EDIT */}

//               <div className="flex justify-end gap-4 pt-4 border-t border-zinc-900">

//                 <button
//                   type="button"
//                   onClick={handleCancelEdit}
//                   className="px-6 py-3 bg-zinc-900 text-zinc-300 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="button"
//                   onClick={handleSaveAndExit}
//                   className="px-6 py-3 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45] transition-all"
//                 >
//                   Save Changes
//                 </button>

//               </div>

//             </div>

//           </div>

//         ) : (

//           /* =====================================================
//              CUSTOMER VIEW
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">

//             <div className="flex justify-end mb-4">

//               {!isEditGateOpen ? (

//                 <div className="flex flex-col items-end">

//                   <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-[#dfb557]/40 shadow-lg">

//                     <input
//                       type="password"
//                       placeholder="Admin Code"
//                       value={adminPasscode}
//                       onChange={(e) =>
//                         setAdminPasscode(
//                           e.target.value
//                         )
//                       }
//                       className="bg-transparent text-zinc-100 text-xs px-2 focus:outline-none w-28"
//                     />

//                     <button
//                       type="button"
//                       onClick={
//                         handleEditGateSubmit
//                       }
//                       className="px-3 py-1.5 bg-[#dfb557] text-black rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#c99f45] transition-all"
//                     >
//                       Unlock
//                     </button>

//                   </div>

//                   {adminError && (
//                     <p className="text-red-400 text-[10px] mt-1 font-medium">
//                       Wrong Admin Code!
//                     </p>
//                   )}

//                 </div>

//               ) : (

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setIsEditMode(true)
//                   }
//                   className="px-4 py-2 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-semibold tracking-widest shadow-md hover:bg-[#c99f45] transition-all"
//                 >
//                   Enter Edit Mode ⚙️
//                 </button>

//               )}

//             </div>

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Investment & Tiers
//             </span>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">
//               Our Professional Packages
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4" />

//             <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
//               ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ደረጃታት እቲ ንደለይዎ ምረጹ።
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

//               {Object.keys(packages).map((key) => {

//                 const pkg = packages[key];

//                 return (

//                   <div
//                     key={key}
//                     className={`bg-zinc-950/90 border-2 ${
//                       key === 'gold'
//                         ? 'border-[#dfb557]'
//                         : 'border-[#dfb557]/50'
//                     } p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between relative`}
//                   >

//                     {key === 'gold' && (
//                       <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
//                         {pkg.tier}
//                       </span>
//                     )}

//                     <div>

//                       <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">
//                         {key === 'gold'
//                           ? 'Exclusive'
//                           : pkg.tier}
//                       </span>

//                       <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">
//                         {pkg.name}
//                       </h3>

//                       <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">
//                         {pkg.price}
//                       </p>

//                       {pkg.services &&
//                         pkg.services.length > 0 && (

//                           <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">

//                             {pkg.services.map(
//                               (service, index) => (

//                                 <p key={index}>
//                                   {service}
//                                 </p>

//                               )
//                             )}

//                           </div>

//                         )}

//                       <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-6 font-light">

//                         {(pkg.features || []).map(
//                           (feature, index) => (

//                             <li
//                               key={index}
//                               className="flex items-center gap-2"
//                             >
//                               {feature}
//                             </li>

//                           )
//                         )}

//                       </ul>

//                     </div>

//                   </div>

//                 );
//               })}

//             </div>

//           </div>

//         )}

//       </div>

//       {/* =======================================================
//           NOTEBOOK / EDIT MODAL

//           IMPORTANT:
//           Everything inside this modal belongs to the
//           INDEPENDENT selectedPackage copy.

//           It does NOT modify tempPackages.
//       ======================================================= */}

//       {isBookingModalOpen &&
//         selectedPackage && (

//           <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl max-w-4xl w-full shadow-2xl space-y-6 my-8">

//               <div className="flex justify-between items-center border-b border-zinc-900 pb-3">

//                 <div>

//                   <h3 className="text-lg font-serif text-[#dfb557]">
//                     {editingNoteId !== null
//                       ? '✏️ Edit Admin Notebook'
//                       : 'ዝርዝር መረጻ ንዓሚል ምዝገባ'}
//                   </h3>

//                   <span className="text-[10px] text-zinc-500">
//                     {editingNoteId !== null
//                       ? 'ዝርዝር ናይዚ Notebook ጥራሕ እዩ ዝቕየር'
//                       : 'Selected package is an independent copy'}
//                   </span>

//                 </div>

//                 <button
//                   type="button"
//                   onClick={
//                     handleCloseBookingModal
//                   }
//                   className="text-zinc-400 hover:text-white text-sm font-bold"
//                 >
//                   ✕
//                 </button>

//               </div>

//               <form
//                 onSubmit={
//                   handleBookingSubmit
//                 }
//                 className="space-y-5"
//               >

//                 {/* CUSTOMER NAME + DATE */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ስም ዓሚል (Customer Name)
//                     </label>

//                     <input
//                       type="text"
//                       required
//                       placeholder="ኣብነት: ኣቤል ዳዊት"
//                       value={customerName}
//                       onChange={(e) =>
//                         setCustomerName(
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ዕለት መደብ (Booking Date)
//                     </label>

//                     <input
//                       type="date"
//                       required
//                       value={bookingDate}
//                       onChange={(e) =>
//                         setBookingDate(
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* PACKAGE NAME + TIER */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       Package Name
//                     </label>

//                     <input
//                       type="text"
//                       value={
//                         selectedPackage.name || ''
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageField(
//                           'name',
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 font-bold focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       Tier
//                     </label>

//                     <input
//                       type="text"
//                       value={
//                         selectedPackage.tier || ''
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageField(
//                           'tier',
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 font-bold focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* PRICE */}

//                 <div>

//                   <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                     ዋጋ (Customizable Price)
//                   </label>

//                   <input
//                     type="text"
//                     required
//                     value={customizedPrice}
//                     onChange={(e) => {
//                       setCustomizedPrice(
//                         e.target.value
//                       );

//                       updateSelectedPackageField(
//                         'price',
//                         e.target.value
//                       );
//                     }}
//                     className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-[#dfb557] font-bold focus:outline-none focus:border-[#dfb557]"
//                   />

//                 </div>

//                 {/* =================================================
//                     SERVICES + FEATURES EDITABLE
//                 ================================================= */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   {/* SERVICES */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-5">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         SERVICES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage.services?.length || 0}{' '}
//                         items
//                       </span>

//                     </div>

//                     <textarea
//                       rows="12"
//                       value={
//                         (
//                           selectedPackage.services ||
//                           []
//                         ).join('\n')
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageArray(
//                           'services',
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-950 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-[#dfb557] resize-y"
//                       placeholder="One service per line"
//                     />

//                     <p className="text-[9px] text-zinc-500 mt-2">
//                       ነፍሲ ወከፍ Service ኣብ ሓደ መስመር ጽሓፍ።
//                     </p>

//                   </div>

//                   {/* FEATURES */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-5">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         FEATURES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage.features?.length || 0}{' '}
//                         items
//                       </span>

//                     </div>

//                     <textarea
//                       rows="12"
//                       value={
//                         (
//                           selectedPackage.features ||
//                           []
//                         ).join('\n')
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageArray(
//                           'features',
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-950 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-[#dfb557] resize-y"
//                       placeholder="One feature per line"
//                     />

//                     <p className="text-[9px] text-zinc-500 mt-2">
//                       ነፍሲ ወከፍ Feature ኣብ ሓደ መስመር ጽሓፍ።
//                     </p>

//                   </div>

//                 </div>

//                 {/* =================================================
//                     PREVIEW OF CURRENT NOTE
//                 ================================================= */}

//                 <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">

//                   <div className="flex justify-between items-center mb-4">

//                     <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                       Notebook Preview
//                     </h4>

//                     <span className="text-[9px] text-zinc-500">
//                       እዚ ናይ Notebook copy ጥራሕ እዩ
//                     </span>

//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Customer
//                       </p>

//                       <p className="text-sm text-white font-semibold">
//                         {customerName || '—'}
//                       </p>

//                     </div>

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Date
//                       </p>

//                       <p className="text-sm text-white">
//                         {bookingDate || '—'}
//                       </p>

//                     </div>

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Package
//                       </p>

//                       <p className="text-sm text-white font-semibold">
//                         {selectedPackage.name || '—'}
//                       </p>

//                     </div>

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Price
//                       </p>

//                       <p className="text-sm text-[#dfb557] font-bold">
//                         {customizedPrice || '—'}
//                       </p>

//                     </div>

//                   </div>

//                 </div>

//                 {/* SAVE / CANCEL */}

//                 <div className="flex gap-3 pt-2 border-t border-zinc-900">

//                   <button
//                     type="button"
//                     onClick={
//                       handleCloseBookingModal
//                     }
//                     className="w-1/2 bg-zinc-900 text-zinc-300 py-3 rounded-xl text-xs uppercase font-bold hover:bg-zinc-800 transition-all"
//                   >
//                     ሰርዝ
//                   </button>

//                   <button
//                     type="submit"
//                     className="w-1/2 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold hover:bg-[#c99f45] transition-all shadow-lg"
//                   >
//                     {editingNoteId !== null
//                       ? 'Update / Save'
//                       : 'ኣቐመጥ (Save)'}
//                   </button>

//                 </div>

//               </form>

//             </div>

//           </div>

//         )}

//       <Footer />

//     </div>
//   );
// }

// export default Price;

// import React, { useState, useEffect } from 'react';
// import html2canvas from 'html2canvas';
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

//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

//   const [customerName, setCustomerName] = useState('');
//   const [bookingDate, setBookingDate] = useState('');
//   const [customizedPrice, setCustomizedPrice] = useState('');

//   const [editingNoteId, setEditingNoteId] = useState(null);

//   const [notebookList, setNotebookList] = useState([]);

//   // =========================================================
//   // MOBILE NOTEBOOK OPEN / CLOSE
//   // =========================================================

//   const [isNotebookOpen, setIsNotebookOpen] = useState(false);

//   const defaultPackages = {
//     premium: {
//       tier: 'Ultimate VIP',
//       name: 'Premium',
//       price: '$1,000+',
//       services: [
//         '• ቪድዮ ቀረጻ (Unlimited)',
//         '• ክልተ ኤክስፐርት ካሜራማን',
//         '• Cinematic Color Grading & VFX',
//       ],
//       features: [
//         '✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)',
//         '✓ ክልተ ኤክስፐርት ካሜራማን',
//         '✓ Cinematic Color Grading & VFX',
//         '🎁 ቦናስ: ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር',
//       ],
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
//         '• ኩሉ ሶፍት ኮፒ (All Soft Copy)',
//       ],
//       features: [
//         '✓ 800 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)',
//         '✓ 2 ሳይን ቦርድ (30×45)',
//         '✓ 3 ቦርድ (50×80, 40×60, 30×45)',
//         '✓ 400 ምስጋና ካርድ (Thank You Card)',
//         '✓ 8 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     silver: {
//       tier: 'Advanced',
//       name: 'Silver',
//       price: '240,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)',
//       ],
//       features: [
//         '✓ 500 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 2 ቦርድ (50×80 & 40×60)',
//         '✓ 250 ምስጋና ካርድ (Thank You Card)',
//         '✓ 6 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     standard: {
//       tier: 'Standard',
//       name: 'Standard',
//       price: '190,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)',
//       ],
//       features: [
//         '✓ 300 ፎቶዎች (10×15)',
//         '✓ 1 ላሚኔትድ ፎቶ (30×90)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 1 ቦርድ (50×80)',
//         '✓ 200 ምስጋና ካርድ (Thank You Card)',
//         '✓ 4 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },
//   };

//   const [packages, setPackages] = useState(defaultPackages);
//   const [tempPackages, setTempPackages] = useState(defaultPackages);

//   // =========================================================
//   // LOAD DATA
//   // =========================================================

//   useEffect(() => {
//     fetch(
//       'https://habesha-film-production-server.onrender.com/api/packages'
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           const mergedData = {
//             premium: {
//               ...defaultPackages.premium,
//               ...data.premium,
//               services: Array.isArray(data.premium?.services)
//                 ? data.premium.services
//                 : defaultPackages.premium.services,
//               features: Array.isArray(data.premium?.features)
//                 ? data.premium.features
//                 : defaultPackages.premium.features,
//             },

//             gold: {
//               ...defaultPackages.gold,
//               ...data.gold,
//               services: Array.isArray(data.gold?.services)
//                 ? data.gold.services
//                 : defaultPackages.gold.services,
//               features: Array.isArray(data.gold?.features)
//                 ? data.gold.features
//                 : defaultPackages.gold.features,
//             },

//             silver: {
//               ...defaultPackages.silver,
//               ...data.silver,
//               services: Array.isArray(data.silver?.services)
//                 ? data.silver.services
//                 : defaultPackages.silver.services,
//               features: Array.isArray(data.silver?.features)
//                 ? data.silver.features
//                 : defaultPackages.silver.features,
//             },

//             standard: {
//               ...defaultPackages.standard,
//               ...data.standard,
//               services: Array.isArray(data.standard?.services)
//                 ? data.standard.services
//                 : defaultPackages.standard.services,
//               features: Array.isArray(data.standard?.features)
//                 ? data.standard.features
//                 : defaultPackages.standard.features,
//             },
//           };

//           setPackages(mergedData);
//           setTempPackages(mergedData);
//         }
//       })
//       .catch((err) => {
//         console.log('Failed to fetch packages:', err);
//       });

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

//     const savedNotes = localStorage.getItem(
//       'adminNotebookListPersistent'
//     );

//     if (savedNotes) {
//       try {
//         const parsedNotes = JSON.parse(savedNotes);

//         if (Array.isArray(parsedNotes)) {
//           setNotebookList(parsedNotes);
//         }
//       } catch (e) {
//         console.log('Error parsing saved notes');
//       }
//     }
//   }, []);

//   // =========================================================
//   // LOGIN
//   // =========================================================

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setError(false);

//     try {
//       const response = await fetch(
//         'https://habesha-film-production-server.onrender.com/api/auth/verify-passcode',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             passcode,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsAuthenticated(true);

//         const expiryDuration = 10 * 60 * 1000;

//         const authData = {
//           value: 'true',
//           expiry: new Date().getTime() + expiryDuration,
//         };

//         localStorage.setItem(
//           'priceAuthData',
//           JSON.stringify(authData)
//         );
//       } else {
//         setError(true);
//       }
//     } catch (err) {
//       console.error('Error verifying passcode:', err);
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================================
//   // ADMIN EDIT GATE
//   // =========================================================

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

//   // =========================================================
//   // SELECT PACKAGE
//   // =========================================================

//   const handleSelectPackageClick = (pkgKey) => {
//     if (!isEditMode) return;

//     const pkg = tempPackages[pkgKey];

//     if (!pkg) {
//       console.error('Package not found:', pkgKey);
//       return;
//     }

//     const independentPackageCopy = {
//       tier: pkg.tier || '',
//       name: pkg.name || '',
//       price: pkg.price || '',

//       services: Array.isArray(pkg.services)
//         ? [...pkg.services]
//         : [],

//       features: Array.isArray(pkg.features)
//         ? [...pkg.features]
//         : [],
//     };

//     setSelectedPackage(independentPackageCopy);

//     setCustomerName('');
//     setBookingDate('');
//     setCustomizedPrice(independentPackageCopy.price);

//     setEditingNoteId(null);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // UPDATE SELECTED NOTE PACKAGE ONLY
//   // =========================================================

//   const updateSelectedPackageField = (field, value) => {
//     setSelectedPackage((prev) => {
//       if (!prev) return prev;

//       return {
//         ...prev,
//         [field]: value,
//       };
//     });
//   };

//   const updateSelectedPackageArray = (
//     field,
//     value
//   ) => {
//     setSelectedPackage((prev) => {
//       if (!prev) return prev;

//       return {
//         ...prev,

//         [field]: value
//           .split('\n')
//           .map((item) => item.trim())
//           .filter((item) => item.length > 0),
//       };
//     });
//   };

//   // =========================================================
//   // SAVE NOTEBOOK
//   // =========================================================

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !customerName.trim() ||
//       !bookingDate ||
//       !selectedPackage
//     ) {
//       return;
//     }

//     const newBookingRecord = {
//       id:
//         editingNoteId !== null
//           ? editingNoteId
//           : Date.now(),

//       customerName: customerName.trim(),

//       bookingDate,

//       packageName: selectedPackage.name || '',

//       packagePrice: customizedPrice,

//       tier: selectedPackage.tier || '',

//       packageServices: Array.isArray(
//         selectedPackage.services
//       )
//         ? [...selectedPackage.services]
//         : [],

//       packageFeatures: Array.isArray(
//         selectedPackage.features
//       )
//         ? [...selectedPackage.features]
//         : [],

//       timestamp:
//         editingNoteId !== null
//           ? notebookList.find(
//               (item) => item.id === editingNoteId
//             )?.timestamp ||
//             new Date().toLocaleString()
//           : new Date().toLocaleString(),
//     };

//     let updatedList;

//     if (editingNoteId !== null) {
//       updatedList = notebookList.map((item) =>
//         item.id === editingNoteId
//           ? newBookingRecord
//           : item
//       );
//     } else {
//       updatedList = [
//         newBookingRecord,
//         ...notebookList,
//       ];
//     }

//     setNotebookList(updatedList);

//     localStorage.setItem(
//       'adminNotebookListPersistent',
//       JSON.stringify(updatedList)
//     );

//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);

//     alert(
//       editingNoteId !== null
//         ? 'ዝነበረ Notebook ብሰላም ተስተካኺሉ እዩ!'
//         : 'ብሰላም ኣብ Admin Notebook ተዓቂቡ እዩ!'
//     );
//   };

//   // =========================================================
//   // EDIT NOTEBOOK
//   // =========================================================

//   const handleEditNoteItem = (note) => {
//     const foundKey = Object.keys(packages).find(
//       (key) =>
//         packages[key].name === note.packageName
//     );

//     const pkg =
//       packages[foundKey] || packages.gold;

//     const independentNotebookCopy = {
//       tier:
//         note.tier ||
//         pkg.tier ||
//         '',

//       name:
//         note.packageName ||
//         pkg.name ||
//         '',

//       price:
//         note.packagePrice ||
//         pkg.price ||
//         '',

//       services: Array.isArray(
//         note.packageServices
//       )
//         ? [...note.packageServices]
//         : Array.isArray(pkg.services)
//         ? [...pkg.services]
//         : [],

//       features: Array.isArray(
//         note.packageFeatures
//       )
//         ? [...note.packageFeatures]
//         : Array.isArray(pkg.features)
//         ? [...pkg.features]
//         : [],
//     };

//     setSelectedPackage(
//       independentNotebookCopy
//     );

//     setCustomerName(
//       note.customerName || ''
//     );

//     setBookingDate(
//       note.bookingDate || ''
//     );

//     setCustomizedPrice(
//       note.packagePrice || ''
//     );

//     setEditingNoteId(note.id);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // DELETE NOTE
//   // =========================================================

//   const handleDeleteNote = (id) => {
//     const updatedList =
//       notebookList.filter(
//         (note) => note.id !== id
//       );

//     setNotebookList(updatedList);

//     localStorage.setItem(
//       'adminNotebookListPersistent',
//       JSON.stringify(updatedList)
//     );
//   };

//   // =========================================================
//   // ESCAPE HTML
//   // =========================================================

//   const escapeHtml = (value) =>
//     String(value ?? '')
//       .replace(/&/g, '&amp;')
//       .replace(/</g, '&lt;')
//       .replace(/>/g, '&gt;')
//       .replace(/"/g, '&quot;')
//       .replace(/'/g, '&#039;');

//   // =========================================================
//   // SHARE RECEIPT
//   // =========================================================

//   const handleShareReceipt = async (note) => {
//     const servicesHtml =
//       Array.isArray(note.packageServices) &&
//       note.packageServices.length > 0
//         ? note.packageServices
//             .map(
//               (service) =>
//                 `<li>${escapeHtml(service)}</li>`
//             )
//             .join('')
//         : '<li>ሕጂ ንጊዜው ዝተወሰነ ኣገልግሎት የለን</li>';

//     const featuresHtml =
//       Array.isArray(note.packageFeatures) &&
//       note.packageFeatures.length > 0
//         ? note.packageFeatures
//             .map(
//               (feature) =>
//                 `<li>${escapeHtml(feature)}</li>`
//             )
//             .join('')
//         : '<li>የለን</li>';

//     const receiptHtml = `
//       <div
//         id="receipt-share-card"
//         style="
//           width:900px;
//           box-sizing:border-box;
//           background:#050505;
//           color:#ffffff;
//           padding:42px;
//           font-family:Arial,'Noto Sans Ethiopic',sans-serif;
//           border:4px solid #dfb557;
//           border-radius:24px;
//           position:relative;
//           overflow:hidden;
//         "
//       >

//         <div
//           style="
//             position:absolute;
//             inset:14px;
//             border:1px solid rgba(223,181,87,.45);
//             border-radius:16px;
//             pointer-events:none;
//           "
//         ></div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//           "
//         >
//           <div
//             style="
//               color:#dfb557;
//               font-size:18px;
//               font-weight:700;
//               letter-spacing:5px;
//               margin-bottom:10px;
//             "
//           >
//             HABESHA FILM PRODUCTION
//           </div>

//           <div
//             style="
//               color:#ffffff;
//               font-size:28px;
//               font-weight:700;
//               margin-bottom:8px;
//             "
//           >
//             BOOKING RECEIPT
//           </div>

//           <div
//             style="
//               width:90px;
//               height:3px;
//               background:#dfb557;
//               margin:0 auto 26px;
//             "
//           ></div>
//         </div>

//         <div
//           style="
//             position:relative;
//             z-index:1;
//             border:1px solid rgba(223,181,87,.55);
//             border-radius:16px;
//             padding:24px;
//             background:#0b0b0b;
//           "
//         >

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               gap:24px;
//               margin-bottom:16px;
//             "
//           >

//             <div>
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 CUSTOMER NAME
//               </div>

//               <div
//                 style="
//                   font-size:22px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.customerName)}
//               </div>
//             </div>

//             <div style="text-align:right;">
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 BOOKING DATE
//               </div>

//               <div
//                 style="
//                   font-size:18px;
//                   font-weight:600;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.bookingDate)}
//               </div>
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:18px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               align-items:center;
//               gap:20px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:11px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 PACKAGE
//               </div>

//               <div
//                 style="
//                   font-size:25px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.packageName)}
//               </div>

//               <div
//                 style="
//                   font-size:13px;
//                   color:#dfb557;
//                   margin-top:5px;
//                 "
//               >
//                 ${escapeHtml(note.tier)}
//               </div>

//             </div>

//             <div
//               style="
//                 color:#dfb557;
//                 font-size:28px;
//                 font-weight:800;
//                 white-space:nowrap;
//               "
//             >
//               ${escapeHtml(note.packagePrice)}
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:22px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:grid;
//               grid-template-columns:1fr 1fr;
//               gap:28px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 SERVICES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${servicesHtml}
//               </ul>

//             </div>

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 FEATURES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${featuresHtml}
//               </ul>

//             </div>

//           </div>

//         </div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//             margin-top:24px;
//             color:#ffffff;
//             font-size:13px;
//             line-height:1.7;
//           "
//         >

//           <div
//             style="
//               color:#dfb557;
//               font-weight:700;
//               letter-spacing:2px;
//             "
//           >
//             HABESHA FILM PRODUCTION STUDIO
//           </div>

//           <div>
//             ✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ! ✨
//           </div>

//         </div>

//       </div>
//     `;

//     let container = null;

//     try {
//       container = document.createElement('div');

//       container.style.position = 'fixed';
//       container.style.left = '-100000px';
//       container.style.top = '0';
//       container.style.width = '900px';
//       container.style.zIndex = '-1';

//       container.innerHTML = receiptHtml;

//       document.body.appendChild(container);

//       const receiptElement =
//         container.querySelector(
//           '#receipt-share-card'
//         );

//       await new Promise((resolve) =>
//         requestAnimationFrame(resolve)
//       );

//       const canvas = await html2canvas(
//         receiptElement,
//         {
//           backgroundColor: '#050505',
//           scale: 2,
//           useCORS: true,
//           logging: false,
//         }
//       );

//       const blob = await new Promise(
//         (resolve) =>
//           canvas.toBlob(
//             resolve,
//             'image/png',
//             1
//           )
//       );

//       if (!blob) {
//         throw new Error(
//           'Could not create receipt image.'
//         );
//       }

//       const file = new File(
//         [blob],
//         `Habesha-Film-Receipt-${Date.now()}.png`,
//         {
//           type: 'image/png',
//         }
//       );

//       if (
//         navigator.share &&
//         (!navigator.canShare ||
//           navigator.canShare({
//             files: [file],
//           }))
//       ) {
//         await navigator.share({
//           title:
//             'Booking Receipt - Habesha Film Production',
//           text:
//             'Booking Receipt - Habesha Film Production',
//           files: [file],
//         });
//       } else {
//         const imageUrl =
//           URL.createObjectURL(blob);

//         const link =
//           document.createElement('a');

//         link.href = imageUrl;

//         link.download = file.name;

//         document.body.appendChild(link);

//         link.click();

//         link.remove();

//         URL.revokeObjectURL(imageUrl);

//         alert(
//           'እቲ Receipt ብPNG ስእሊ ተዳልዩ ኣሎ። እቲ ስእሊ ኣብ WhatsApp ወይ ካልእ app ክትልእኮ ትኽእል።'
//         );
//       }
//     } catch (err) {
//       console.error(
//         'Error creating/sharing receipt:',
//         err
//       );

//       if (err?.name !== 'AbortError') {
//         alert(
//           'Receipt ስእሊ ምፍጣር ወይ ምስዳድ ኣይተዓወተን።'
//         );
//       }
//     } finally {
//       if (
//         container &&
//         container.parentNode
//       ) {
//         container.parentNode.removeChild(
//           container
//         );
//       }
//     }
//   };

//   // =========================================================
//   // SAVE MAIN WEBSITE PACKAGES
//   // =========================================================

//   const handleSaveAndExit = async () => {
//     try {
//       const response = await fetch(
//         'https://habesha-film-production-server.onrender.com/api/packages/update',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(tempPackages),
//         }
//       );

//       if (response.ok) {
//         setPackages(tempPackages);

//         alert(
//           'ዳታ ብሰላም ተሰዲዱ ኣብ ኩሉ ዲቫይስ ክረአ እዩ!'
//         );
//       } else {
//         alert('ሰርቨር ጌጋ ኣለዎ።');
//       }
//     } catch (err) {
//       console.error(
//         'Error saving to server:',
//         err
//       );

//       alert(
//         'ዳታ ናብ ሰርቨር ምልኣኽ ኣይከኣለን።'
//       );
//     }

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CANCEL MAIN EDIT MODE
//   // =========================================================

//   const handleCancelEdit = () => {
//     setTempPackages(packages);

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CLOSE BOOKING / NOTEBOOK MODAL
//   // =========================================================

//   const handleCloseBookingModal = () => {
//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);
//   };

//   // =========================================================
//   // MAIN PACKAGE EDIT HELPERS
//   // =========================================================

//   const updateTempPackageField = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages((prev) => ({
//       ...prev,

//       [key]: {
//         ...prev[key],
//         [field]: value,
//       },
//     }));
//   };

//   const updateTempPackageArray = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages((prev) => ({
//       ...prev,

//       [key]: {
//         ...prev[key],

//         [field]: value
//           .split('\n')
//           .map((item) => item.trim())
//           .filter(
//             (item) => item.length > 0
//           ),
//       },
//     }));
//   };

//   // =========================================================
//   // RENDER
//   // =========================================================

//   return (
//     <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden flex flex-col justify-between">

//       <Navbar />

//       <div className="flex-grow flex items-center justify-center px-4 py-32">

//         {/* LOGIN */}

//         {!isAuthenticated ? (

//           <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center relative">

//             <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">
//               Secure Access
//             </span>

//             <h2 className="text-2xl md:text-3xl font-serif mb-3 text-zinc-100">
//               Protected Price Page
//             </h2>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4" />

//             <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">
//               እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።
//             </p>

//             <form
//               onSubmit={handleLogin}
//               className="space-y-4"
//             >

//               <input
//                 type="password"
//                 placeholder="Enter Passcode"
//                 value={passcode}
//                 onChange={(e) =>
//                   setPasscode(e.target.value)
//                 }
//                 className="w-full px-4 py-3 bg-zinc-900 border border-[#dfb557]/50 rounded-xl focus:outline-none focus:border-[#dfb557] text-center tracking-widest text-lg text-zinc-100 placeholder-zinc-500 shadow-inner"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 disabled:opacity-50 rounded-xl shadow-lg"
//               >
//                 {loading
//                   ? 'Checking...'
//                   : 'Submit'}
//               </button>

//               {error && (
//                 <p className="text-red-400 text-xs mt-2 font-medium">
//                   ጌጋ ፓስኮድ! ደጊምካ ፈትን።
//                 </p>
//               )}

//             </form>

//           </div>

//         ) : isEditMode ? (

//           /* =====================================================
//              ADMIN EDIT MODE
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Administration Mode
//             </span>

//             <h1 className="text-3xl font-serif mb-4 text-zinc-100">
//               Edit Packages & Admin Notebook
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-8" />

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl space-y-8 text-left shadow-2xl">

//               {/* =================================================
//                   NOTEBOOK
//                   COLLAPSED BY DEFAULT
//               ================================================= */}

//               <div className="bg-zinc-900 rounded-xl border border-[#dfb557]/30 shadow-inner overflow-hidden">

//                 {/* NOTEBOOK HEADER / TOGGLE */}

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setIsNotebookOpen(
//                       (prev) => !prev
//                     )
//                   }
//                   className="w-full flex justify-between items-center gap-4 p-6 text-left hover:bg-zinc-800/60 transition-all"
//                 >

//                   <div className="flex items-center gap-3 min-w-0">

//                     <span className="text-xs font-bold uppercase text-[#dfb557] tracking-wider">
//                       📝 Admin Notebook & Customer Bookings
//                     </span>

//                     <span className="hidden sm:inline text-[10px] text-zinc-400 font-light">
//                       ዋጋ፣ ኣገልግሎትን ባህርያትን ሒዙ ይዕቀብ
//                     </span>

//                   </div>

//                   <span
//                     className={`flex-shrink-0 text-[#dfb557] text-sm transition-transform duration-300 ${
//                       isNotebookOpen
//                         ? 'rotate-180'
//                         : ''
//                     }`}
//                   >
//                     ▼
//                   </span>

//                 </button>

//                 {/* NOTEBOOK CONTENT */}

//                 {isNotebookOpen && (

//                   <div className="px-6 pb-6 pt-2 border-t border-zinc-800">

//                     <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">

//                       {notebookList.length === 0 ? (

//                         <p className="text-zinc-500 text-xs italic text-center py-4">
//                           ዝኾነ ዝተመዝገበ ዓሚል የልቦን። ካብቲ ኣብ ታሕቲ ዘሎ Edit Mode ጌርካ Select ብምባል ክትምዝግብ ትኽእል።
//                         </p>

//                       ) : (

//                         notebookList.map((note) => (

//                           <div
//                             key={note.id}
//                             className="bg-zinc-950 border border-zinc-800 p-5 rounded-xl space-y-4 shadow-md"
//                           >

//                             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-zinc-900 pb-3">

//                               <div className="flex items-center gap-3 flex-wrap">

//                                 <span className="text-base font-serif font-bold text-[#dfb557]">
//                                   {note.customerName}
//                                 </span>

//                                 <span className="text-[10px] bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md text-zinc-300 font-semibold">
//                                   📅 ዕለት: {note.bookingDate}
//                                 </span>

//                               </div>

//                               <span className="text-[9px] text-zinc-500">
//                                 ተመዝጊቡሉ: {note.timestamp}
//                               </span>

//                             </div>

//                             <div className="bg-zinc-900/80 border border-[#dfb557]/30 p-4 rounded-xl space-y-4">

//                               <div className="flex justify-between items-center">

//                                 <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#dfb557]">
//                                   {note.tier}
//                                 </span>

//                                 <span className="text-lg font-serif font-bold text-[#dfb557]">
//                                   {note.packagePrice}
//                                 </span>

//                               </div>

//                               <h4 className="text-xl font-serif text-white">
//                                 {note.packageName} Package
//                               </h4>

//                               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3 border-t border-zinc-800">

//                                 <div className="space-y-2">

//                                   <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                     SERVICES
//                                   </span>

//                                   <ul className="space-y-1 text-xs text-zinc-300">

//                                     {Array.isArray(
//                                       note.packageServices
//                                     ) &&
//                                     note.packageServices.length > 0 ? (

//                                       note.packageServices.map(
//                                         (service, index) => (
//                                           <li key={index}>
//                                             {service}
//                                           </li>
//                                         )
//                                       )

//                                     ) : (

//                                       <li className="text-zinc-500">
//                                         የለን
//                                       </li>

//                                     )}

//                                   </ul>

//                                 </div>

//                                 <div className="space-y-2">

//                                   <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                     FEATURES
//                                   </span>

//                                   <ul className="space-y-1 text-xs text-zinc-300">

//                                     {Array.isArray(
//                                       note.packageFeatures
//                                     ) &&
//                                     note.packageFeatures.length > 0 ? (

//                                       note.packageFeatures.map(
//                                         (feature, index) => (
//                                           <li key={index}>
//                                             {feature}
//                                           </li>
//                                         )
//                                       )

//                                     ) : (

//                                       <li className="text-zinc-500">
//                                         የለን
//                                       </li>

//                                     )}

//                                   </ul>

//                                 </div>

//                               </div>

//                             </div>

//                             <div className="flex justify-end items-center gap-2 pt-2 border-t border-zinc-900">

//                               <button
//                                 onClick={() =>
//                                   handleShareReceipt(note)
//                                 }
//                                 className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-[10px] uppercase font-semibold transition-all flex items-center gap-1"
//                               >
//                                 Share 🔗
//                               </button>

//                               <button
//                                 onClick={() =>
//                                   handleEditNoteItem(note)
//                                 }
//                                 className="px-3 py-1.5 bg-[#dfb557]/20 hover:bg-[#dfb557]/40 text-[#dfb557] rounded text-[10px] uppercase font-semibold transition-all"
//                               >
//                                 Edit
//                               </button>

//                               <button
//                                 onClick={() =>
//                                   handleDeleteNote(note.id)
//                                 }
//                                 className="px-3 py-1.5 bg-red-950/60 hover:bg-red-900 text-red-300 rounded text-[10px] uppercase font-semibold transition-all"
//                               >
//                                 Delete
//                               </button>

//                             </div>

//                           </div>

//                         ))
//                       )}

//                     </div>

//                   </div>

//                 )}

//               </div>

//               {/* =================================================
//                   MAIN WEBSITE PACKAGE EDIT
//               ================================================= */}

//               <div className="pt-4">

//                 <h3 className="text-sm font-bold uppercase text-[#dfb557] tracking-wider mb-4">
//                   ⚙️ Edit Website Packages & Test Select
//                 </h3>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

//                   {Object.keys(tempPackages).map((key) => {

//                     const pkg = tempPackages[key];

//                     return (

//                       <div
//                         key={key}
//                         className="bg-zinc-900 border-2 border-[#dfb557]/40 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4"
//                       >

//                         <div className="space-y-3">

//                           {/* TIER */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Tier Title
//                             </label>

//                             <input
//                               value={pkg.tier || ''}
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'tier',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold"
//                             />

//                           </div>

//                           {/* NAME */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Package Name
//                             </label>

//                             <input
//                               value={pkg.name || ''}
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'name',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-serif font-bold text-lg"
//                             />

//                           </div>

//                           {/* PRICE */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Price (ዋጋ)
//                             </label>

//                             <input
//                               value={pkg.price || ''}
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'price',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-[#dfb557] font-bold"
//                             />

//                           </div>

//                           {/* SERVICES */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Services
//                             </label>

//                             <textarea
//                               rows="5"
//                               value={(pkg.services || []).join('\n')}
//                               onChange={(e) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'services',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One service per line"
//                             />

//                           </div>

//                           {/* FEATURES */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Features
//                             </label>

//                             <textarea
//                               rows="6"
//                               value={(pkg.features || []).join('\n')}
//                               onChange={(e) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'features',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One feature per line"
//                             />

//                           </div>

//                         </div>

//                         <button
//                           type="button"
//                           onClick={() =>
//                             handleSelectPackageClick(key)
//                           }
//                           className="w-full bg-[#dfb557] text-black py-2.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-md cursor-pointer"
//                         >
//                           Select {pkg.name} ➔
//                         </button>

//                       </div>

//                     );
//                   })}

//                 </div>

//               </div>

//               {/* SAVE / CANCEL MAIN PACKAGE EDIT */}

//               <div className="flex justify-end gap-4 pt-4 border-t border-zinc-900">

//                 <button
//                   type="button"
//                   onClick={handleCancelEdit}
//                   className="px-6 py-3 bg-zinc-900 text-zinc-300 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="button"
//                   onClick={handleSaveAndExit}
//                   className="px-6 py-3 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45] transition-all"
//                 >
//                   Save Changes
//                 </button>

//               </div>

//             </div>

//           </div>

//         ) : (

//           /* =====================================================
//              CUSTOMER VIEW
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-4 py-12 w-full">

//             <div className="flex justify-end mb-4">

//               {!isEditGateOpen ? (

//                 <div className="flex flex-col items-end">

//                   <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-[#dfb557]/40 shadow-lg">

//                     <input
//                       type="password"
//                       placeholder="Admin Code"
//                       value={adminPasscode}
//                       onChange={(e) =>
//                         setAdminPasscode(
//                           e.target.value
//                         )
//                       }
//                       className="bg-transparent text-zinc-100 text-xs px-2 focus:outline-none w-28"
//                     />

//                     <button
//                       type="button"
//                       onClick={
//                         handleEditGateSubmit
//                       }
//                       className="px-3 py-1.5 bg-[#dfb557] text-black rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#c99f45] transition-all"
//                     >
//                       Unlock
//                     </button>

//                   </div>

//                   {adminError && (
//                     <p className="text-red-400 text-[10px] mt-1 font-medium">
//                       Wrong Admin Code!
//                     </p>
//                   )}

//                 </div>

//               ) : (

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setIsEditMode(true)
//                   }
//                   className="px-4 py-2 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-semibold tracking-widest shadow-md hover:bg-[#c99f45] transition-all"
//                 >
//                   Enter Edit Mode ⚙️
//                 </button>

//               )}

//             </div>

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Investment & Tiers
//             </span>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">
//               Our Professional Packages
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4" />

//             <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
//               ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ደረጃታት እቲ ንደለይዎ ምረጹ።
//             </p>

//             {/* =====================================================
//                 MOBILE:
//                 HORIZONTAL PRICE CARD SCROLL
//                 DESKTOP:
//                 ORIGINAL GRID
//             ===================================================== */}

//             <div className="flex lg:grid lg:grid-cols-4 gap-5 lg:gap-6 text-left overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none pb-5 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-thin scrollbar-thumb-[#dfb557]/50 scrollbar-track-zinc-900">

//               {Object.keys(packages).map((key) => {

//                 const pkg = packages[key];

//                 return (

//                   <div
//                     key={key}
//                     className={`flex-none w-[82vw] sm:w-[65vw] md:w-[45vw] lg:w-auto snap-start bg-zinc-950/90 border-2 ${
//                       key === 'gold'
//                         ? 'border-[#dfb557]'
//                         : 'border-[#dfb557]/50'
//                     } p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between relative`}
//                   >

//                     {key === 'gold' && (
//                       <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
//                         {pkg.tier}
//                       </span>
//                     )}

//                     <div>

//                       <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">
//                         {key === 'gold'
//                           ? 'Exclusive'
//                           : pkg.tier}
//                       </span>

//                       <h3 className="text-2xl font-serif mt-1 mb-2 text-zinc-100">
//                         {pkg.name}
//                       </h3>

//                       <p className="text-3xl font-serif font-bold text-[#dfb557] mb-6">
//                         {pkg.price}
//                       </p>

//                       {pkg.services &&
//                         pkg.services.length > 0 && (

//                           <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">

//                             {pkg.services.map(
//                               (service, index) => (

//                                 <p key={index}>
//                                   {service}
//                                 </p>

//                               )
//                             )}

//                           </div>

//                         )}

//                       <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-6 font-light">

//                         {(pkg.features || []).map(
//                           (feature, index) => (

//                             <li
//                               key={index}
//                               className="flex items-center gap-2"
//                             >
//                               {feature}
//                             </li>

//                           )
//                         )}

//                       </ul>

//                     </div>

//                   </div>

//                 );
//               })}

//             </div>

//             {/* SMALL MOBILE SCROLL HINT */}

//             <div className="lg:hidden flex items-center justify-center gap-2 mt-2 text-[9px] text-zinc-500 uppercase tracking-[0.2em]">
//               <span>←</span>
//               <span>Swipe to view packages</span>
//               <span>→</span>
//             </div>

//           </div>

//         )}

//       </div>

//       {/* =======================================================
//           NOTEBOOK / EDIT MODAL
//       ======================================================= */}

//       {isBookingModalOpen &&
//         selectedPackage && (

//           <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-6 md:p-8 rounded-2xl max-w-4xl w-full shadow-2xl space-y-6 my-8">

//               <div className="flex justify-between items-center border-b border-zinc-900 pb-3">

//                 <div>

//                   <h3 className="text-lg font-serif text-[#dfb557]">
//                     {editingNoteId !== null
//                       ? '✏️ Edit Admin Notebook'
//                       : 'ዝርዝር መረጻ ንዓሚል ምዝገባ'}
//                   </h3>

//                   <span className="text-[10px] text-zinc-500">
//                     {editingNoteId !== null
//                       ? 'ዝርዝር ናይዚ Notebook ጥራሕ እዩ ዝቕየር'
//                       : 'Selected package is an independent copy'}
//                   </span>

//                 </div>

//                 <button
//                   type="button"
//                   onClick={
//                     handleCloseBookingModal
//                   }
//                   className="text-zinc-400 hover:text-white text-sm font-bold"
//                 >
//                   ✕
//                 </button>

//               </div>

//               <form
//                 onSubmit={
//                   handleBookingSubmit
//                 }
//                 className="space-y-5"
//               >

//                 {/* CUSTOMER NAME + DATE */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ስም ዓሚል (Customer Name)
//                     </label>

//                     <input
//                       type="text"
//                       required
//                       placeholder="ኣብነት: ኣቤል ዳዊት"
//                       value={customerName}
//                       onChange={(e) =>
//                         setCustomerName(
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ዕለት መደብ (Booking Date)
//                     </label>

//                     <input
//                       type="date"
//                       required
//                       value={bookingDate}
//                       onChange={(e) =>
//                         setBookingDate(
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* PACKAGE NAME + TIER */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       Package Name
//                     </label>

//                     <input
//                       type="text"
//                       value={
//                         selectedPackage.name || ''
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageField(
//                           'name',
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 font-bold focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       Tier
//                     </label>

//                     <input
//                       type="text"
//                       value={
//                         selectedPackage.tier || ''
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageField(
//                           'tier',
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 font-bold focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* PRICE */}

//                 <div>

//                   <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                     ዋጋ (Customizable Price)
//                   </label>

//                   <input
//                     type="text"
//                     required
//                     value={customizedPrice}
//                     onChange={(e) => {
//                       setCustomizedPrice(
//                         e.target.value
//                       );

//                       updateSelectedPackageField(
//                         'price',
//                         e.target.value
//                       );
//                     }}
//                     className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-[#dfb557] font-bold focus:outline-none focus:border-[#dfb557]"
//                   />

//                 </div>

//                 {/* SERVICES + FEATURES EDITABLE */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                   {/* SERVICES */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-5">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         SERVICES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage.services?.length || 0}{' '}
//                         items
//                       </span>

//                     </div>

//                     <textarea
//                       rows="12"
//                       value={
//                         (
//                           selectedPackage.services ||
//                           []
//                         ).join('\n')
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageArray(
//                           'services',
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-950 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-[#dfb557] resize-y"
//                       placeholder="One service per line"
//                     />

//                     <p className="text-[9px] text-zinc-500 mt-2">
//                       ነፍሲ ወከፍ Service ኣብ ሓደ መስመር ጽሓፍ።
//                     </p>

//                   </div>

//                   {/* FEATURES */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-5">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         FEATURES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage.features?.length || 0}{' '}
//                         items
//                       </span>

//                     </div>

//                     <textarea
//                       rows="12"
//                       value={
//                         (
//                           selectedPackage.features ||
//                           []
//                         ).join('\n')
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageArray(
//                           'features',
//                           e.target.value
//                         )
//                       }
//                       className="w-full bg-zinc-950 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-[#dfb557] resize-y"
//                       placeholder="One feature per line"
//                     />

//                     <p className="text-[9px] text-zinc-500 mt-2">
//                       ነፍሲ ወከፍ Feature ኣብ ሓደ መስመር ጽሓፍ።
//                     </p>

//                   </div>

//                 </div>

//                 {/* PREVIEW */}

//                 <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5">

//                   <div className="flex justify-between items-center mb-4">

//                     <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                       Notebook Preview
//                     </h4>

//                     <span className="text-[9px] text-zinc-500">
//                       እዚ ናይ Notebook copy ጥራሕ እዩ
//                     </span>

//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Customer
//                       </p>

//                       <p className="text-sm text-white font-semibold">
//                         {customerName || '—'}
//                       </p>

//                     </div>

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Date
//                       </p>

//                       <p className="text-sm text-white">
//                         {bookingDate || '—'}
//                       </p>

//                     </div>

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Package
//                       </p>

//                       <p className="text-sm text-white font-semibold">
//                         {selectedPackage.name || '—'}
//                       </p>

//                     </div>

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Price
//                       </p>

//                       <p className="text-sm text-[#dfb557] font-bold">
//                         {customizedPrice || '—'}
//                       </p>

//                     </div>

//                   </div>

//                 </div>

//                 {/* SAVE / CANCEL */}

//                 <div className="flex gap-3 pt-2 border-t border-zinc-900">

//                   <button
//                     type="button"
//                     onClick={
//                       handleCloseBookingModal
//                     }
//                     className="w-1/2 bg-zinc-900 text-zinc-300 py-3 rounded-xl text-xs uppercase font-bold hover:bg-zinc-800 transition-all"
//                   >
//                     ሰርዝ
//                   </button>

//                   <button
//                     type="submit"
//                     className="w-1/2 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold hover:bg-[#c99f45] transition-all shadow-lg"
//                   >
//                     {editingNoteId !== null
//                       ? 'Update / Save'
//                       : 'ኣቐመጥ (Save)'}
//                   </button>

//                 </div>

//               </form>

//             </div>

//           </div>

//         )}

//       <Footer />

//     </div>
//   );
// }

// export default Price;

// import React, { useState, useEffect } from 'react';
// import html2canvas from 'html2canvas';
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

//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

//   const [customerName, setCustomerName] = useState('');
//   const [bookingDate, setBookingDate] = useState('');
//   const [customizedPrice, setCustomizedPrice] = useState('');

//   const [editingNoteId, setEditingNoteId] = useState(null);

//   const [notebookList, setNotebookList] = useState([]);

//   // =========================================================
//   // MOBILE NOTEBOOK OPEN / CLOSE
//   // =========================================================

//   const [isNotebookOpen, setIsNotebookOpen] = useState(false);

//   const defaultPackages = {
//     premium: {
//       tier: 'Ultimate VIP',
//       name: 'Premium',
//       price: '$1,000+',
//       services: [
//         '• ቪድዮ ቀረጻ (Unlimited)',
//         '• ክልተ ኤክስፐርት ካሜራማን',
//         '• Cinematic Color Grading & VFX',
//       ],
//       features: [
//         '✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)',
//         '✓ ክልተ ኤክስፐርት ካሜራማን',
//         '✓ Cinematic Color Grading & VFX',
//         '🎁 ቦናስ: ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር',
//       ],
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
//         '• ኩሉ ሶፍት ኮፒ (All Soft Copy)',
//       ],
//       features: [
//         '✓ 800 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)',
//         '✓ 2 ሳይን ቦርድ (30×45)',
//         '✓ 3 ቦርድ (50×80, 40×60, 30×45)',
//         '✓ 400 ምስጋና ካርድ (Thank You Card)',
//         '✓ 8 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     silver: {
//       tier: 'Advanced',
//       name: 'Silver',
//       price: '240,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)',
//       ],
//       features: [
//         '✓ 500 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 2 ቦርድ (50×80 & 40×60)',
//         '✓ 250 ምስጋና ካርድ (Thank You Card)',
//         '✓ 6 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     standard: {
//       tier: 'Standard',
//       name: 'Standard',
//       price: '190,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)',
//       ],
//       features: [
//         '✓ 300 ፎቶዎች (10×15)',
//         '✓ 1 ላሚኔትድ ፎቶ (30×90)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 1 ቦርድ (50×80)',
//         '✓ 200 ምስጋና ካርድ (Thank You Card)',
//         '✓ 4 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },
//   };

//   const [packages, setPackages] = useState(defaultPackages);
//   const [tempPackages, setTempPackages] = useState(defaultPackages);

//   // =========================================================
//   // LOAD DATA
//   // =========================================================

//   useEffect(() => {
//     fetch(
//       'https://habesha-film-production-server.onrender.com/api/packages'
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           const mergedData = {
//             premium: {
//               ...defaultPackages.premium,
//               ...data.premium,
//               services: Array.isArray(data.premium?.services)
//                 ? data.premium.services
//                 : defaultPackages.premium.services,
//               features: Array.isArray(data.premium?.features)
//                 ? data.premium.features
//                 : defaultPackages.premium.features,
//             },

//             gold: {
//               ...defaultPackages.gold,
//               ...data.gold,
//               services: Array.isArray(data.gold?.services)
//                 ? data.gold.services
//                 : defaultPackages.gold.services,
//               features: Array.isArray(data.gold?.features)
//                 ? data.gold.features
//                 : defaultPackages.gold.features,
//             },

//             silver: {
//               ...defaultPackages.silver,
//               ...data.silver,
//               services: Array.isArray(data.silver?.services)
//                 ? data.silver.services
//                 : defaultPackages.silver.services,
//               features: Array.isArray(data.silver?.features)
//                 ? data.silver.features
//                 : defaultPackages.silver.features,
//             },

//             standard: {
//               ...defaultPackages.standard,
//               ...data.standard,
//               services: Array.isArray(data.standard?.services)
//                 ? data.standard.services
//                 : defaultPackages.standard.services,
//               features: Array.isArray(data.standard?.features)
//                 ? data.standard.features
//                 : defaultPackages.standard.features,
//             },
//           };

//           setPackages(mergedData);
//           setTempPackages(mergedData);
//         }
//       })
//       .catch((err) => {
//         console.log('Failed to fetch packages:', err);
//       });

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

//     const savedNotes = localStorage.getItem(
//       'adminNotebookListPersistent'
//     );

//     if (savedNotes) {
//       try {
//         const parsedNotes = JSON.parse(savedNotes);

//         if (Array.isArray(parsedNotes)) {
//           setNotebookList(parsedNotes);
//         }
//       } catch (e) {
//         console.log('Error parsing saved notes');
//       }
//     }
//   }, []);

//   // =========================================================
//   // LOGIN
//   // =========================================================

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setError(false);

//     try {
//       const response = await fetch(
//         'https://habesha-film-production-server.onrender.com/api/auth/verify-passcode',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             passcode,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsAuthenticated(true);

//         const expiryDuration = 10 * 60 * 1000;

//         const authData = {
//           value: 'true',
//           expiry: new Date().getTime() + expiryDuration,
//         };

//         localStorage.setItem(
//           'priceAuthData',
//           JSON.stringify(authData)
//         );
//       } else {
//         setError(true);
//       }
//     } catch (err) {
//       console.error('Error verifying passcode:', err);
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================================
//   // ADMIN EDIT GATE
//   // =========================================================

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

//   // =========================================================
//   // SELECT PACKAGE
//   // =========================================================

//   const handleSelectPackageClick = (pkgKey) => {
//     if (!isEditMode) return;

//     const pkg = tempPackages[pkgKey];

//     if (!pkg) {
//       console.error('Package not found:', pkgKey);
//       return;
//     }

//     const independentPackageCopy = {
//       tier: pkg.tier || '',
//       name: pkg.name || '',
//       price: pkg.price || '',

//       services: Array.isArray(pkg.services)
//         ? [...pkg.services]
//         : [],

//       features: Array.isArray(pkg.features)
//         ? [...pkg.features]
//         : [],
//     };

//     setSelectedPackage(independentPackageCopy);

//     setCustomerName('');
//     setBookingDate('');
//     setCustomizedPrice(independentPackageCopy.price);

//     setEditingNoteId(null);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // UPDATE SELECTED NOTE PACKAGE ONLY
//   // =========================================================

//   const updateSelectedPackageField = (field, value) => {
//     setSelectedPackage((prev) => {
//       if (!prev) return prev;

//       return {
//         ...prev,
//         [field]: value,
//       };
//     });
//   };

//   const updateSelectedPackageArray = (
//     field,
//     value
//   ) => {
//     setSelectedPackage((prev) => {
//       if (!prev) return prev;

//       return {
//         ...prev,

//         [field]: value
//           .split('\n')
//           .map((item) => item.trim())
//           .filter((item) => item.length > 0),
//       };
//     });
//   };

//   // =========================================================
//   // SAVE NOTEBOOK
//   // =========================================================

//   const handleBookingSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !customerName.trim() ||
//       !bookingDate ||
//       !selectedPackage
//     ) {
//       return;
//     }

//     const newBookingRecord = {
//       id:
//         editingNoteId !== null
//           ? editingNoteId
//           : Date.now(),

//       customerName: customerName.trim(),

//       bookingDate,

//       packageName: selectedPackage.name || '',

//       packagePrice: customizedPrice,

//       tier: selectedPackage.tier || '',

//       packageServices: Array.isArray(
//         selectedPackage.services
//       )
//         ? [...selectedPackage.services]
//         : [],

//       packageFeatures: Array.isArray(
//         selectedPackage.features
//       )
//         ? [...selectedPackage.features]
//         : [],

//       timestamp:
//         editingNoteId !== null
//           ? notebookList.find(
//               (item) => item.id === editingNoteId
//             )?.timestamp ||
//             new Date().toLocaleString()
//           : new Date().toLocaleString(),
//     };

//     let updatedList;

//     if (editingNoteId !== null) {
//       updatedList = notebookList.map((item) =>
//         item.id === editingNoteId
//           ? newBookingRecord
//           : item
//       );
//     } else {
//       updatedList = [
//         newBookingRecord,
//         ...notebookList,
//       ];
//     }

//     setNotebookList(updatedList);

//     localStorage.setItem(
//       'adminNotebookListPersistent',
//       JSON.stringify(updatedList)
//     );

//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);

//     alert(
//       editingNoteId !== null
//         ? 'ዝነበረ Notebook ብሰላም ተስተካኺሉ እዩ!'
//         : 'ብሰላም ኣብ Admin Notebook ተዓቂቡ እዩ!'
//     );
//   };
 

//   // =========================================================
//   // EDIT NOTEBOOK
//   // =========================================================

//   const handleEditNoteItem = (note) => {
//     const foundKey = Object.keys(packages).find(
//       (key) =>
//         packages[key].name === note.packageName
//     );

//     const pkg =
//       packages[foundKey] || packages.gold;

//     const independentNotebookCopy = {
//       tier:
//         note.tier ||
//         pkg.tier ||
//         '',

//       name:
//         note.packageName ||
//         pkg.name ||
//         '',

//       price:
//         note.packagePrice ||
//         pkg.price ||
//         '',

//       services: Array.isArray(
//         note.packageServices
//       )
//         ? [...note.packageServices]
//         : Array.isArray(pkg.services)
//         ? [...pkg.services]
//         : [],

//       features: Array.isArray(
//         note.packageFeatures
//       )
//         ? [...note.packageFeatures]
//         : Array.isArray(pkg.features)
//         ? [...pkg.features]
//         : [],
//     };

//     setSelectedPackage(
//       independentNotebookCopy
//     );

//     setCustomerName(
//       note.customerName || ''
//     );

//     setBookingDate(
//       note.bookingDate || ''
//     );

//     setCustomizedPrice(
//       note.packagePrice || ''
//     );

//     setEditingNoteId(note.id);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // DELETE NOTE
//   // =========================================================

//   const handleDeleteNote = (id) => {
//     const updatedList =
//       notebookList.filter(
//         (note) => note.id !== id
//       );

//     setNotebookList(updatedList);

//     localStorage.setItem(
//       'adminNotebookListPersistent',
//       JSON.stringify(updatedList)
//     );
//   };

//   // =========================================================
//   // ESCAPE HTML
//   // =========================================================

//   const escapeHtml = (value) =>
//     String(value ?? '')
//       .replace(/&/g, '&amp;')
//       .replace(/</g, '&lt;')
//       .replace(/>/g, '&gt;')
//       .replace(/"/g, '&quot;')
//       .replace(/'/g, '&#039;');

//   // =========================================================
//   // SHARE RECEIPT
//   // =========================================================

//   const handleShareReceipt = async (note) => {
//     const servicesHtml =
//       Array.isArray(note.packageServices) &&
//       note.packageServices.length > 0
//         ? note.packageServices
//             .map(
//               (service) =>
//                 `<li>${escapeHtml(service)}</li>`
//             )
//             .join('')
//         : '<li>ሕጂ ንጊዜው ዝተወሰነ ኣገልግሎት የለን</li>';

//     const featuresHtml =
//       Array.isArray(note.packageFeatures) &&
//       note.packageFeatures.length > 0
//         ? note.packageFeatures
//             .map(
//               (feature) =>
//                 `<li>${escapeHtml(feature)}</li>`
//             )
//             .join('')
//         : '<li>የለን</li>';

//     const receiptHtml = `
//       <div
//         id="receipt-share-card"
//         style="
//           width:900px;
//           box-sizing:border-box;
//           background:#050505;
//           color:#ffffff;
//           padding:42px;
//           font-family:Arial,'Noto Sans Ethiopic',sans-serif;
//           border:4px solid #dfb557;
//           border-radius:24px;
//           position:relative;
//           overflow:hidden;
//         "
//       >

//         <div
//           style="
//             position:absolute;
//             inset:14px;
//             border:1px solid rgba(223,181,87,.45);
//             border-radius:16px;
//             pointer-events:none;
//           "
//         ></div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//           "
//         >
//           <div
//             style="
//               color:#dfb557;
//               font-size:18px;
//               font-weight:700;
//               letter-spacing:5px;
//               margin-bottom:10px;
//             "
//           >
//             HABESHA FILM PRODUCTION
//           </div>

//           <div
//             style="
//               color:#ffffff;
//               font-size:28px;
//               font-weight:700;
//               margin-bottom:8px;
//             "
//           >
//             BOOKING RECEIPT
//           </div>

//           <div
//             style="
//               width:90px;
//               height:3px;
//               background:#dfb557;
//               margin:0 auto 26px;
//             "
//           ></div>
//         </div>

//         <div
//           style="
//             position:relative;
//             z-index:1;
//             border:1px solid rgba(223,181,87,.55);
//             border-radius:16px;
//             padding:24px;
//             background:#0b0b0b;
//           "
//         >

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               gap:24px;
//               margin-bottom:16px;
//             "
//           >

//             <div>
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 CUSTOMER NAME
//               </div>

//               <div
//                 style="
//                   font-size:22px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.customerName)}
//               </div>
//             </div>

//             <div style="text-align:right;">
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 BOOKING DATE
//               </div>

//               <div
//                 style="
//                   font-size:18px;
//                   font-weight:600;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.bookingDate)}
//               </div>
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:18px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               align-items:center;
//               gap:20px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:11px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 PACKAGE
//               </div>

//               <div
//                 style="
//                   font-size:25px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.packageName)}
//               </div>

//               <div
//                 style="
//                   font-size:13px;
//                   color:#dfb557;
//                   margin-top:5px;
//                 "
//               >
//                 ${escapeHtml(note.tier)}
//               </div>

//             </div>

//             <div
//               style="
//                 color:#dfb557;
//                 font-size:28px;
//                 font-weight:800;
//                 white-space:nowrap;
//               "
//             >
//               ${escapeHtml(note.packagePrice)}
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:22px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:grid;
//               grid-template-columns:1fr 1fr;
//               gap:28px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 SERVICES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${servicesHtml}
//               </ul>

//             </div>

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 FEATURES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${featuresHtml}
//               </ul>

//             </div>

//           </div>

//         </div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//             margin-top:24px;
//             color:#ffffff;
//             font-size:13px;
//             line-height:1.7;
//           "
//         >

//           <div
//             style="
//               color:#dfb557;
//               font-weight:700;
//               letter-spacing:2px;
//             "
//           >
//             HABESHA FILM PRODUCTION STUDIO
//           </div>

//           <div>
//             ✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ! ✨
//           </div>

//         </div>

//       </div>
//     `;

//     let container = null;

//     try {
//       container = document.createElement('div');

//       container.style.position = 'fixed';
//       container.style.left = '-100000px';
//       container.style.top = '0';
//       container.style.width = '900px';
//       container.style.zIndex = '-1';

//       container.innerHTML = receiptHtml;

//       document.body.appendChild(container);

//       const receiptElement =
//         container.querySelector(
//           '#receipt-share-card'
//         );

//       await new Promise((resolve) =>
//         requestAnimationFrame(resolve)
//       );

//       const canvas = await html2canvas(
//         receiptElement,
//         {
//           backgroundColor: '#050505',
//           scale: 2,
//           useCORS: true,
//           logging: false,
//         }
//       );

//       const blob = await new Promise(
//         (resolve) =>
//           canvas.toBlob(
//             resolve,
//             'image/png',
//             1
//           )
//       );

//       if (!blob) {
//         throw new Error(
//           'Could not create receipt image.'
//         );
//       }

//       const file = new File(
//         [blob],
//         `Habesha-Film-Receipt-${Date.now()}.png`,
//         {
//           type: 'image/png',
//         }
//       );

//       if (
//         navigator.share &&
//         (!navigator.canShare ||
//           navigator.canShare({
//             files: [file],
//           }))
//       ) {
//         await navigator.share({
//           title:
//             'Booking Receipt - Habesha Film Production',
//           text:
//             'Booking Receipt - Habesha Film Production',
//           files: [file],
//         });
//       } else {
//         const imageUrl =
//           URL.createObjectURL(blob);

//         const link =
//           document.createElement('a');

//         link.href = imageUrl;

//         link.download = file.name;

//         document.body.appendChild(link);

//         link.click();

//         link.remove();

//         URL.revokeObjectURL(imageUrl);

//         alert(
//           'እቲ Receipt ብPNG ስእሊ ተዳልዩ ኣሎ። እቲ ስእሊ ኣብ WhatsApp ወይ ካልእ app ክትልእኮ ትኽእል።'
//         );
//       }
//     } catch (err) {
//       console.error(
//         'Error creating/sharing receipt:',
//         err
//       );

//       if (err?.name !== 'AbortError') {
//         alert(
//           'Receipt ስእሊ ምፍጣር ወይ ምስዳድ ኣይተዓወተን።'
//         );
//       }
//     } finally {
//       if (
//         container &&
//         container.parentNode
//       ) {
//         container.parentNode.removeChild(
//           container
//         );
//       }
//     }
//   };

//   // =========================================================
//   // SAVE MAIN WEBSITE PACKAGES
//   // =========================================================

//   const handleSaveAndExit = async () => {
//     try {
//       const response = await fetch(
//         'https://habesha-film-production-server.onrender.com/api/packages/update',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(tempPackages),
//         }
//       );

//       if (response.ok) {
//         setPackages(tempPackages);

//         alert(
//           'ዳታ ብሰላም ተሰዲዱ ኣብ ኩሉ ዲቫይስ ክረአ እዩ!'
//         );
//       } else {
//         alert('ሰርቨር ጌጋ ኣለዎ።');
//       }
//     } catch (err) {
//       console.error(
//         'Error saving to server:',
//         err
//       );

//       alert(
//         'ዳታ ናብ ሰርቨር ምልኣኽ ኣይከኣለን።'
//       );
//     }

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CANCEL MAIN EDIT MODE
//   // =========================================================

//   const handleCancelEdit = () => {
//     setTempPackages(packages);

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CLOSE BOOKING / NOTEBOOK MODAL
//   // =========================================================

//   const handleCloseBookingModal = () => {
//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);
//   };

//   // =========================================================
//   // MAIN PACKAGE EDIT HELPERS
//   // =========================================================

//   const updateTempPackageField = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages((prev) => ({
//       ...prev,

//       [key]: {
//         ...prev[key],
//         [field]: value,
//       },
//     }));
//   };

//   const updateTempPackageArray = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages((prev) => ({
//       ...prev,

//       [key]: {
//         ...prev[key],

//         [field]: value
//           .split('\n')
//           .map((item) => item.trim())
//           .filter(
//             (item) => item.length > 0
//           ),
//       },
//     }));
//   };

//   // =========================================================
//   // RENDER
//   // =========================================================

//   return (
//     <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden flex flex-col justify-between">

//       <Navbar />

//       <div className="flex-grow flex items-center justify-center px-4 py-32">

//         {/* LOGIN */}

//         {!isAuthenticated ? (

//           <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center relative">

//             <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">
//               Secure Access
//             </span>

//             <h2 className="text-2xl md:text-3xl font-serif mb-3 text-zinc-100">
//               Protected Price Page
//             </h2>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4" />

//             <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">
//               እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።
//             </p>

//             <form
//               onSubmit={handleLogin}
//               className="space-y-4"
//             >

//               <input
//                 type="password"
//                 placeholder="Enter Passcode"
//                 value={passcode}
//                 onChange={(e) =>
//                   setPasscode(e.target.value)
//                 }
//                 className="w-full px-4 py-3 bg-zinc-900 border border-[#dfb557]/50 rounded-xl focus:outline-none focus:border-[#dfb557] text-center tracking-widest text-lg text-zinc-100 placeholder-zinc-500 shadow-inner"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 disabled:opacity-50 rounded-xl shadow-lg"
//               >
//                 {loading
//                   ? 'Checking...'
//                   : 'Submit'}
//               </button>

//               {error && (
//                 <p className="text-red-400 text-xs mt-2 font-medium">
//                   ጌጋ ፓስኮድ! ደጊምካ ፈትን።
//                 </p>
//               )}

//             </form>

//           </div>

//         ) : isEditMode ? (

//           /* =====================================================
//              ADMIN EDIT MODE
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-2 sm:px-4 py-6 sm:py-12 w-full min-w-0">

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Administration Mode
//             </span>

//             <h1 className="text-3xl font-serif mb-4 text-zinc-100">
//               Edit Packages & Admin Notebook
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-8" />

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-3 sm:p-6 md:p-8 rounded-2xl space-y-6 sm:space-y-8 text-left shadow-2xl min-w-0">

//               {/* =================================================
//                   NOTEBOOK
//                   COLLAPSED BY DEFAULT
//               ================================================= */}

//               <div className="bg-zinc-900 rounded-xl border border-[#dfb557]/30 shadow-inner overflow-hidden min-w-0">

//                 {/* NOTEBOOK HEADER / TOGGLE */}

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setIsNotebookOpen(
//                       (prev) => !prev
//                     )
//                   }
//                   className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-6 text-left hover:bg-zinc-800/60 transition-all"
//                 >

//                   <div className="flex items-start sm:items-center gap-2 sm:gap-3 min-w-0 pr-2">

//                     <span className="text-xs font-bold uppercase text-[#dfb557] tracking-wider">
//                       📝 Admin Notebook & Customer Bookings
//                     </span>

//                     <span className="hidden sm:inline text-[10px] text-zinc-400 font-light">
//                       ዋጋ፣ ኣገልግሎትን ባህርያትን ሒዙ ይዕቀብ
//                     </span>

//                   </div>

//                   <span
//                     className={`flex-shrink-0 text-[#dfb557] text-sm transition-transform duration-300 ${
//                       isNotebookOpen
//                         ? 'rotate-180'
//                         : ''
//                     }`}
//                   >
//                     ▼
//                   </span>

//                 </button>

//                 {/* NOTEBOOK CONTENT */}

//                 {isNotebookOpen && (

//                   <div className="px-3 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-zinc-800">

//                     <div className="space-y-3 sm:space-y-4 max-h-[60vh] sm:max-h-[500px] overflow-y-auto pr-0 sm:pr-1 overscroll-contain">

//                       {notebookList.length === 0 ? (

//                         <p className="text-zinc-500 text-xs italic text-center py-4">
//                           ዝኾነ ዝተመዝገበ ዓሚል የልቦን። ካብቲ ኣብ ታሕቲ ዘሎ Edit Mode ጌርካ Select ብምባል ክትምዝግብ ትኽእል።
//                         </p>

//                       ) : (

//                         notebookList.map((note) => (

//                           <div
//                             key={note.id}
//                             className="bg-zinc-950 border border-zinc-800 p-3 sm:p-5 rounded-xl space-y-3 sm:space-y-4 shadow-md min-w-0"
//                           >

//                             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3 border-b border-zinc-900 pb-3 min-w-0">

//                               <div className="flex items-center gap-2 sm:gap-3 flex-wrap min-w-0">

//                                 <span className="text-base font-serif font-bold text-[#dfb557]">
//                                   {note.customerName}
//                                 </span>

//                                 <span className="text-[10px] bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md text-zinc-300 font-semibold">
//                                   📅 ዕለት: {note.bookingDate}
//                                 </span>

//                               </div>

//                               <span className="text-[9px] text-zinc-500">
//                                 ተመዝጊቡሉ: {note.timestamp}
//                               </span>

//                             </div>

//                             <div className="bg-zinc-900/80 border border-[#dfb557]/30 p-3 sm:p-4 rounded-xl space-y-3 sm:space-y-4 min-w-0 overflow-hidden">

//                               <div className="flex justify-between items-start sm:items-center gap-3">

//                                 <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#dfb557]">
//                                   {note.tier}
//                                 </span>

//                                 <span className="text-lg font-serif font-bold text-[#dfb557]">
//                                   {note.packagePrice}
//                                 </span>

//                               </div>

//                               <h4 className="text-lg sm:text-xl font-serif text-white break-words">
//                                 {note.packageName} Package
//                               </h4>

//                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-3 border-t border-zinc-800">

//                                 <div className="space-y-2">

//                                   <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                     SERVICES
//                                   </span>

//                                   <ul className="space-y-1 text-xs text-zinc-300">

//                                     {Array.isArray(
//                                       note.packageServices
//                                     ) &&
//                                     note.packageServices.length > 0 ? (

//                                       note.packageServices.map(
//                                         (service, index) => (
//                                           <li key={index}>
//                                             {service}
//                                           </li>
//                                         )
//                                       )

//                                     ) : (

//                                       <li className="text-zinc-500">
//                                         የለን
//                                       </li>

//                                     )}

//                                   </ul>

//                                 </div>

//                                 <div className="space-y-2">

//                                   <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                     FEATURES
//                                   </span>

//                                   <ul className="space-y-1 text-xs text-zinc-300">

//                                     {Array.isArray(
//                                       note.packageFeatures
//                                     ) &&
//                                     note.packageFeatures.length > 0 ? (

//                                       note.packageFeatures.map(
//                                         (feature, index) => (
//                                           <li key={index}>
//                                             {feature}
//                                           </li>
//                                         )
//                                       )

//                                     ) : (

//                                       <li className="text-zinc-500">
//                                         የለን
//                                       </li>

//                                     )}

//                                   </ul>

//                                 </div>

//                               </div>

//                             </div>

//                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-zinc-900">

//                               <button
//                                 onClick={() =>
//                                   handleShareReceipt(note)
//                                 }
//                                 className="w-full px-3 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-[10px] uppercase font-semibold transition-all flex items-center justify-center gap-1 min-h-[42px]"
//                               >
//                                 Share 🔗
//                               </button>

//                               <button
//                                 onClick={() =>
//                                   handleEditNoteItem(note)
//                                 }
//                                 className="w-full px-3 py-2.5 bg-[#dfb557]/20 hover:bg-[#dfb557]/40 text-[#dfb557] rounded-lg text-[10px] uppercase font-semibold transition-all min-h-[42px]"
//                               >
//                                 Edit
//                               </button>

//                               <button
//                                 onClick={() =>
//                                   handleDeleteNote(note.id)
//                                 }
//                                 className="w-full px-3 py-2.5 bg-red-950/60 hover:bg-red-900 text-red-300 rounded-lg text-[10px] uppercase font-semibold transition-all min-h-[42px]"
//                               >
//                                 Delete
//                               </button>

//                             </div>

//                           </div>

//                         ))
//                       )}

//                     </div>

//                   </div>

//                 )}

//               </div>

//               {/* =================================================
//                   MAIN WEBSITE PACKAGE EDIT
//               ================================================= */}

//               <div className="pt-2 sm:pt-4">

//                 <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
//                   <h3 className="text-sm font-bold uppercase text-[#dfb557] tracking-wider">
//                     ⚙️ Edit Website Packages & Test Select
//                   </h3>
//                   <span className="lg:hidden text-[9px] text-zinc-500 uppercase tracking-[0.16em]">← Swipe packages →</span>
//                 </div>

//                 <div className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none pb-4 lg:pb-0 -mx-1 sm:-mx-0 px-1 sm:px-0 overscroll-x-contain">

//                   {Object.keys(tempPackages).map((key) => {

//                     const pkg = tempPackages[key];

//                     return (

//                       <div
//                         key={key}
//                         className="flex-none w-[86vw] sm:w-[68vw] md:w-[48vw] lg:w-auto snap-start bg-zinc-900 border-2 border-[#dfb557]/40 p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4 min-w-0"
//                       >

//                         <div className="space-y-3">

//                           {/* TIER */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Tier Title
//                             </label>

//                             <input
//                               value={pkg.tier || ''}
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'tier',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold"
//                             />

//                           </div>

//                           {/* NAME */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Package Name
//                             </label>

//                             <input
//                               value={pkg.name || ''}
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'name',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-serif font-bold text-lg"
//                             />

//                           </div>

//                           {/* PRICE */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Price (ዋጋ)
//                             </label>

//                             <input
//                               value={pkg.price || ''}
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'price',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-[#dfb557] font-bold"
//                             />

//                           </div>

//                           {/* SERVICES */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Services
//                             </label>

//                             <textarea
//                               rows="5"
//                               value={(pkg.services || []).join('\n')}
//                               onChange={(e) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'services',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One service per line"
//                             />

//                           </div>

//                           {/* FEATURES */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Features
//                             </label>

//                             <textarea
//                               rows="6"
//                               value={(pkg.features || []).join('\n')}
//                               onChange={(e) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'features',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One feature per line"
//                             />

//                           </div>

//                         </div>

//                         <button
//                           type="button"
//                           onClick={() =>
//                             handleSelectPackageClick(key)
//                           }
//                           className="w-full bg-[#dfb557] text-black py-2.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-md cursor-pointer"
//                         >
//                           Select {pkg.name} ➔
//                         </button>

//                       </div>

//                     );
//                   })}

//                 </div>

//               </div>

//               {/* SAVE / CANCEL MAIN PACKAGE EDIT */}

//               <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-4 pt-4 border-t border-zinc-900">

//                 <button
//                   type="button"
//                   onClick={handleCancelEdit}
//                   className="w-full sm:w-auto px-6 py-3 bg-zinc-900 text-zinc-300 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="button"
//                   onClick={handleSaveAndExit}
//                   className="w-full sm:w-auto px-6 py-3 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45] transition-all"
//                 >
//                   Save Changes
//                 </button>

//               </div>

//             </div>

//           </div>

//         ) : (

//           /* =====================================================
//              CUSTOMER VIEW
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-2 sm:px-4 py-6 sm:py-12 w-full min-w-0">

//             <div className="flex justify-end mb-4">

//               {!isEditGateOpen ? (

//                 <div className="flex flex-col items-end">

//                   <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-[#dfb557]/40 shadow-lg">

//                     <input
//                       type="password"
//                       placeholder="Admin Code"
//                       value={adminPasscode}
//                       onChange={(e) =>
//                         setAdminPasscode(
//                           e.target.value
//                         )
//                       }
//                       className="bg-transparent text-zinc-100 text-xs px-2 focus:outline-none w-28"
//                     />

//                     <button
//                       type="button"
//                       onClick={
//                         handleEditGateSubmit
//                       }
//                       className="px-3 py-1.5 bg-[#dfb557] text-black rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#c99f45] transition-all"
//                     >
//                       Unlock
//                     </button>

//                   </div>

//                   {adminError && (
//                     <p className="text-red-400 text-[10px] mt-1 font-medium">
//                       Wrong Admin Code!
//                     </p>
//                   )}

//                 </div>

//               ) : (

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setIsEditMode(true)
//                   }
//                   className="px-4 py-2 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-semibold tracking-widest shadow-md hover:bg-[#c99f45] transition-all"
//                 >
//                   Enter Edit Mode ⚙️
//                 </button>

//               )}

//             </div>

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Investment & Tiers
//             </span>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">
//               Our Professional Packages
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4" />

//             <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
//               ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ደረጃታት እቲ ንደለይዎ ምረጹ።
//             </p>

//             {/* =====================================================
//                 MOBILE:
//                 HORIZONTAL PRICE CARD SCROLL
//                 DESKTOP:
//                 ORIGINAL GRID
//             ===================================================== */}

//             <div className="flex lg:grid lg:grid-cols-4 gap-5 lg:gap-6 text-left overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none pb-5 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-thin scrollbar-thumb-[#dfb557]/50 scrollbar-track-zinc-900">

//               {Object.keys(packages).map((key) => {

//                 const pkg = packages[key];

//                 return (

//                   <div
//                     key={key}
//                     className={`flex-none w-[82vw] sm:w-[65vw] md:w-[45vw] lg:w-auto snap-start bg-zinc-950/90 border-2 ${
//                       key === 'gold'
//                         ? 'border-[#dfb557]'
//                         : 'border-[#dfb557]/50'
//                     } p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between relative`}
//                   >

//                     {key === 'gold' && (
//                       <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
//                         {pkg.tier}
//                       </span>
//                     )}

//                     <div>

//                       <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">
//                         {key === 'gold'
//                           ? 'Exclusive'
//                           : pkg.tier}
//                       </span>

//                       <h3 className="text-xl sm:text-2xl font-serif mt-1 mb-2 text-zinc-100 break-words">
//                         {pkg.name}
//                       </h3>

//                       <p className="text-2xl sm:text-3xl font-serif font-bold text-[#dfb557] mb-6 break-words">
//                         {pkg.price}
//                       </p>

//                       {pkg.services &&
//                         pkg.services.length > 0 && (

//                           <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">

//                             {pkg.services.map(
//                               (service, index) => (

//                                 <p key={index}>
//                                   {service}
//                                 </p>

//                               )
//                             )}

//                           </div>

//                         )}

//                       <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-6 font-light">

//                         {(pkg.features || []).map(
//                           (feature, index) => (

//                             <li
//                               key={index}
//                               className="flex items-center gap-2"
//                             >
//                               {feature}
//                             </li>

//                           )
//                         )}

//                       </ul>

//                     </div>

//                   </div>

//                 );
//               })}

//             </div>

//             {/* SMALL MOBILE SCROLL HINT */}

//             <div className="lg:hidden flex items-center justify-center gap-2 mt-2 text-[9px] text-zinc-500 uppercase tracking-[0.2em]">
//               <span>←</span>
//               <span>Swipe to view packages</span>
//               <span>→</span>
//             </div>

//           </div>

//         )}

//       </div>

//       {/* =======================================================
//           NOTEBOOK / EDIT MODAL
//       ======================================================= */}

//       {isBookingModalOpen &&
//         selectedPackage && (

//           <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto overscroll-contain">

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-4 sm:p-6 md:p-8 rounded-2xl max-w-5xl w-full max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)] overflow-y-auto shadow-2xl space-y-5 sm:space-y-6 my-0 sm:my-8">

//               <div className="flex justify-between items-start gap-3 border-b border-zinc-900 pb-3">

//                 <div>

//                   <h3 className="text-base sm:text-lg font-serif text-[#dfb557] leading-snug">
//                     {editingNoteId !== null
//                       ? '✏️ Edit Admin Notebook'
//                       : 'ዝርዝር መረጻ ንዓሚል ምዝገባ'}
//                   </h3>

//                   <span className="text-[10px] text-zinc-500">
//                     {editingNoteId !== null
//                       ? 'ዝርዝር ናይዚ Notebook ጥራሕ እዩ ዝቕየር'
//                       : 'Selected package is an independent copy'}
//                   </span>

//                 </div>

//                 <button
//                   type="button"
//                   onClick={
//                     handleCloseBookingModal
//                   }
//                   className="text-zinc-400 hover:text-white text-sm font-bold"
//                 >
//                   ✕
//                 </button>

//               </div>

//               <form
//                 onSubmit={
//                   handleBookingSubmit
//                 }
//                 className="space-y-5"
//               >

//                 {/* CUSTOMER NAME + DATE */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ስም ዓሚል (Customer Name)
//                     </label>

//                     <input
//                       type="text"
//                       required
//                       placeholder="ኣብነት: ኣቤል ዳዊት"
//                       value={customerName}
//                       onChange={(e) =>
//                         setCustomerName(
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ዕለት መደብ (Booking Date)
//                     </label>

//                     <input
//                       type="date"
//                       required
//                       value={bookingDate}
//                       onChange={(e) =>
//                         setBookingDate(
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* PACKAGE NAME + TIER */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       Package Name
//                     </label>

//                     <input
//                       type="text"
//                       value={
//                         selectedPackage.name || ''
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageField(
//                           'name',
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 font-bold focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       Tier
//                     </label>

//                     <input
//                       type="text"
//                       value={
//                         selectedPackage.tier || ''
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageField(
//                           'tier',
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 font-bold focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* PRICE */}

//                 <div>

//                   <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                     ዋጋ (Customizable Price)
//                   </label>

//                   <input
//                     type="text"
//                     required
//                     value={customizedPrice}
//                     onChange={(e) => {
//                       setCustomizedPrice(
//                         e.target.value
//                       );

//                       updateSelectedPackageField(
//                         'price',
//                         e.target.value
//                       );
//                     }}
//                     className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-[#dfb557] font-bold focus:outline-none focus:border-[#dfb557]"
//                   />

//                 </div>

//                 {/* SERVICES + FEATURES EDITABLE */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

//                   {/* SERVICES */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-3 sm:p-5 min-w-0">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         SERVICES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage.services?.length || 0}{' '}
//                         items
//                       </span>

//                     </div>

//                     <textarea
//                       rows="12"
//                       value={
//                         (
//                           selectedPackage.services ||
//                           []
//                         ).join('\n')
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageArray(
//                           'services',
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-950 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-[#dfb557] resize-y"
//                       placeholder="One service per line"
//                     />

//                     <p className="text-[9px] text-zinc-500 mt-2">
//                       ነፍሲ ወከፍ Service ኣብ ሓደ መስመር ጽሓፍ።
//                     </p>

//                   </div>

//                   {/* FEATURES */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-3 sm:p-5 min-w-0">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         FEATURES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage.features?.length || 0}{' '}
//                         items
//                       </span>

//                     </div>

//                     <textarea
//                       rows="12"
//                       value={
//                         (
//                           selectedPackage.features ||
//                           []
//                         ).join('\n')
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageArray(
//                           'features',
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-950 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-[#dfb557] resize-y"
//                       placeholder="One feature per line"
//                     />

//                     <p className="text-[9px] text-zinc-500 mt-2">
//                       ነፍሲ ወከፍ Feature ኣብ ሓደ መስመር ጽሓፍ።
//                     </p>

//                   </div>

//                 </div>

//                 {/* PREVIEW */}

//                 <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 sm:p-5">

//                   <div className="flex justify-between items-center mb-4">

//                     <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                       Notebook Preview
//                     </h4>

//                     <span className="text-[9px] text-zinc-500">
//                       እዚ ናይ Notebook copy ጥራሕ እዩ
//                     </span>

//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Customer
//                       </p>

//                       <p className="text-sm text-white font-semibold">
//                         {customerName || '—'}
//                       </p>

//                     </div>

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Date
//                       </p>

//                       <p className="text-sm text-white">
//                         {bookingDate || '—'}
//                       </p>

//                     </div>

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Package
//                       </p>

//                       <p className="text-sm text-white font-semibold">
//                         {selectedPackage.name || '—'}
//                       </p>

//                     </div>

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Price
//                       </p>

//                       <p className="text-sm text-[#dfb557] font-bold">
//                         {customizedPrice || '—'}
//                       </p>

//                     </div>

//                   </div>

//                 </div>

//                 {/* SAVE / CANCEL */}

//                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 border-t border-zinc-900">

//                   <button
//                     type="button"
//                     onClick={
//                       handleCloseBookingModal
//                     }
//                     className="w-full sm:w-1/2 bg-zinc-900 text-zinc-300 py-3 rounded-xl text-xs uppercase font-bold hover:bg-zinc-800 transition-all min-h-[44px]"
//                   >
//                     ሰርዝ
//                   </button>

//                   <button
//                     type="submit"
//                     className="w-full sm:w-1/2 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold hover:bg-[#c99f45] transition-all shadow-lg min-h-[44px]"
//                   >
//                     {editingNoteId !== null
//                       ? 'Update / Save'
//                       : 'ኣቐመጥ (Save)'}
//                   </button>

//                 </div>

//               </form>

//             </div>

//           </div>

//         )}

//       <Footer />

//     </div>
//   );
// }

// export default Price;

// import React, { useState, useEffect } from 'react';
// import html2canvas from 'html2canvas';
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

//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

//   const [customerName, setCustomerName] = useState('');
//   const [bookingDate, setBookingDate] = useState('');
//   const [customizedPrice, setCustomizedPrice] = useState('');

//   const [editingNoteId, setEditingNoteId] = useState(null);

//   const [notebookList, setNotebookList] = useState([]);

//   // =========================================================
//   // MOBILE NOTEBOOK OPEN / CLOSE
//   // =========================================================

//   const [isNotebookOpen, setIsNotebookOpen] = useState(false);

//   // =========================================================
//   // NOTEBOOK API
//   // =========================================================

//   const NOTEBOOK_API =
//     'https://habesha-film-production-server.onrender.com/api/notebook';

//   const defaultPackages = {
//     premium: {
//       tier: 'Ultimate VIP',
//       name: 'Premium',
//       price: '$1,000+',
//       services: [
//         '• ቪድዮ ቀረጻ (Unlimited)',
//         '• ክልተ ኤክስፐርት ካሜራማን',
//         '• Cinematic Color Grading & VFX',
//       ],
//       features: [
//         '✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)',
//         '✓ ክልተ ኤክስፐርት ካሜራማን',
//         '✓ Cinematic Color Grading & VFX',
//         '🎁 ቦናስ: ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር',
//       ],
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
//         '• ኩሉ ሶፍት ኮፒ (All Soft Copy)',
//       ],
//       features: [
//         '✓ 800 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)',
//         '✓ 2 ሳይን ቦርድ (30×45)',
//         '✓ 3 ቦርድ (50×80, 40×60, 30×45)',
//         '✓ 400 ምስጋና ካርድ (Thank You Card)',
//         '✓ 8 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     silver: {
//       tier: 'Advanced',
//       name: 'Silver',
//       price: '240,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)',
//       ],
//       features: [
//         '✓ 500 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 2 ቦርድ (50×80 & 40×60)',
//         '✓ 250 ምስጋና ካርድ (Thank You Card)',
//         '✓ 6 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     standard: {
//       tier: 'Standard',
//       name: 'Standard',
//       price: '190,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)',
//       ],
//       features: [
//         '✓ 300 ፎቶዎች (10×15)',
//         '✓ 1 ላሚኔትድ ፎቶ (30×90)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 1 ቦርድ (50×80)',
//         '✓ 200 ምስጋና ካርድ (Thank You Card)',
//         '✓ 4 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },
//   };

//   const [packages, setPackages] = useState(defaultPackages);
//   const [tempPackages, setTempPackages] = useState(defaultPackages);

//   // =========================================================
//   // LOAD DATA
//   // =========================================================

//   useEffect(() => {
//     fetch(
//       'https://habesha-film-production-server.onrender.com/api/packages'
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           const mergedData = {
//             premium: {
//               ...defaultPackages.premium,
//               ...data.premium,
//               services: Array.isArray(data.premium?.services)
//                 ? data.premium.services
//                 : defaultPackages.premium.services,
//               features: Array.isArray(data.premium?.features)
//                 ? data.premium.features
//                 : defaultPackages.premium.features,
//             },

//             gold: {
//               ...defaultPackages.gold,
//               ...data.gold,
//               services: Array.isArray(data.gold?.services)
//                 ? data.gold.services
//                 : defaultPackages.gold.services,
//               features: Array.isArray(data.gold?.features)
//                 ? data.gold.features
//                 : defaultPackages.gold.features,
//             },

//             silver: {
//               ...defaultPackages.silver,
//               ...data.silver,
//               services: Array.isArray(data.silver?.services)
//                 ? data.silver.services
//                 : defaultPackages.silver.services,
//               features: Array.isArray(data.silver?.features)
//                 ? data.silver.features
//                 : defaultPackages.silver.features,
//             },

//             standard: {
//               ...defaultPackages.standard,
//               ...data.standard,
//               services: Array.isArray(data.standard?.services)
//                 ? data.standard.services
//                 : defaultPackages.standard.services,
//               features: Array.isArray(data.standard?.features)
//                 ? data.standard.features
//                 : defaultPackages.standard.features,
//             },
//           };

//           setPackages(mergedData);
//           setTempPackages(mergedData);
//         }
//       })
//       .catch((err) => {
//         console.log('Failed to fetch packages:', err);
//       });

//     // =======================================================
//     // AUTH DATA
//     // =======================================================

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

//     // =======================================================
//     // LOAD NOTEBOOK FROM MONGODB
//     // =======================================================

//     fetch(NOTEBOOK_API)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(
//             `Notebook API error: ${res.status}`
//           );
//         }

//         return res.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setNotebookList(data);
//         } else if (Array.isArray(data?.notebooks)) {
//           setNotebookList(data.notebooks);
//         } else {
//           setNotebookList([]);
//         }
//       })
//       .catch((err) => {
//         console.error(
//           'Failed to load Admin Notebook from MongoDB:',
//           err
//         );

//         setNotebookList([]);
//       });
//   }, []);

//   // =========================================================
//   // LOGIN
//   // =========================================================

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setError(false);

//     try {
//       const response = await fetch(
//         'https://habesha-film-production-server.onrender.com/api/auth/verify-passcode',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             passcode,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsAuthenticated(true);

//         const expiryDuration = 10 * 60 * 1000;

//         const authData = {
//           value: 'true',
//           expiry: new Date().getTime() + expiryDuration,
//         };

//         localStorage.setItem(
//           'priceAuthData',
//           JSON.stringify(authData)
//         );
//       } else {
//         setError(true);
//       }
//     } catch (err) {
//       console.error('Error verifying passcode:', err);
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================================
//   // ADMIN EDIT GATE
//   // =========================================================

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

//   // =========================================================
//   // SELECT PACKAGE
//   // =========================================================

//   const handleSelectPackageClick = (pkgKey) => {
//     if (!isEditMode) return;

//     const pkg = tempPackages[pkgKey];

//     if (!pkg) {
//       console.error('Package not found:', pkgKey);
//       return;
//     }

//     const independentPackageCopy = {
//       tier: pkg.tier || '',
//       name: pkg.name || '',
//       price: pkg.price || '',

//       services: Array.isArray(pkg.services)
//         ? [...pkg.services]
//         : [],

//       features: Array.isArray(pkg.features)
//         ? [...pkg.features]
//         : [],
//     };

//     setSelectedPackage(independentPackageCopy);

//     setCustomerName('');
//     setBookingDate('');
//     setCustomizedPrice(independentPackageCopy.price);

//     setEditingNoteId(null);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // UPDATE SELECTED NOTE PACKAGE ONLY
//   // =========================================================

//   const updateSelectedPackageField = (field, value) => {
//     setSelectedPackage((prev) => {
//       if (!prev) return prev;

//       return {
//         ...prev,
//         [field]: value,
//       };
//     });
//   };

//   const updateSelectedPackageArray = (
//     field,
//     value
//   ) => {
//     setSelectedPackage((prev) => {
//       if (!prev) return prev;

//       return {
//         ...prev,

//         [field]: value
//           .split('\n')
//           .map((item) => item.trim())
//           .filter((item) => item.length > 0),
//       };
//     });
//   };

//   // =========================================================
//   // SAVE NOTEBOOK TO MONGODB
//   // =========================================================

//   const handleBookingSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !customerName.trim() ||
//       !bookingDate ||
//       !selectedPackage
//     ) {
//       return;
//     }

//     const newBookingRecord = {
//       id:
//         editingNoteId !== null
//           ? editingNoteId
//           : Date.now(),

//       customerName: customerName.trim(),

//       bookingDate,

//       packageName: selectedPackage.name || '',

//       packagePrice: customizedPrice,

//       tier: selectedPackage.tier || '',

//       packageServices: Array.isArray(
//         selectedPackage.services
//       )
//         ? [...selectedPackage.services]
//         : [],

//       packageFeatures: Array.isArray(
//         selectedPackage.features
//       )
//         ? [...selectedPackage.features]
//         : [],

//       timestamp:
//         editingNoteId !== null
//           ? notebookList.find(
//               (item) => item.id === editingNoteId
//             )?.timestamp ||
//             new Date().toLocaleString()
//           : new Date().toLocaleString(),
//     };

//     try {
//       // =====================================================
//       // UPDATE EXISTING NOTE
//       // =====================================================

//       if (editingNoteId !== null) {
//         const response = await fetch(
//           `${NOTEBOOK_API}/${editingNoteId}`,
//           {
//             method: 'PUT',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newBookingRecord),
//           }
//         );

//         if (!response.ok) {
//           throw new Error(
//             `Failed to update notebook: ${response.status}`
//           );
//         }

//         const data = await response.json();

//         const updatedNote =
//           data?.notebook ||
//           data?.note ||
//           data;

//         const updatedList = notebookList.map((item) =>
//           String(item.id) === String(editingNoteId)
//             ? updatedNote
//             : item
//         );

//         setNotebookList(updatedList);

//         alert(
//           'ዝነበረ Notebook ብሰላም ተስተካኺሉ እዩ!'
//         );
//       }

//       // =====================================================
//       // CREATE NEW NOTE
//       // =====================================================

//       else {
//         const response = await fetch(
//           NOTEBOOK_API,
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(
//               newBookingRecord
//             ),
//           }
//         );

//         if (!response.ok) {
//           throw new Error(
//             `Failed to save notebook: ${response.status}`
//           );
//         }

//         const data = await response.json();

//         const savedNote =
//           data?.notebook ||
//           data?.note ||
//           data;

//         setNotebookList((prev) => [
//           savedNote,
//           ...prev,
//         ]);

//         alert(
//           'ብሰላም ኣብ Admin Notebook ኣብ MongoDB ተዓቂቡ እዩ!'
//         );
//       }

//       setIsBookingModalOpen(false);
//       setSelectedPackage(null);
//       setEditingNoteId(null);
//     } catch (err) {
//       console.error(
//         'Error saving notebook to MongoDB:',
//         err
//       );

//       alert(
//         'Notebook ናብ MongoDB ምዕቃብ ኣይተዓወተን። በጃኻ Backend API ኣረጋግጽ።'
//       );
//     }
//   };

//   // =========================================================
//   // EDIT NOTEBOOK
//   // =========================================================

//   const handleEditNoteItem = (note) => {
//     const foundKey = Object.keys(packages).find(
//       (key) =>
//         packages[key].name === note.packageName
//     );

//     const pkg =
//       packages[foundKey] || packages.gold;

//     const independentNotebookCopy = {
//       tier:
//         note.tier ||
//         pkg.tier ||
//         '',

//       name:
//         note.packageName ||
//         pkg.name ||
//         '',

//       price:
//         note.packagePrice ||
//         pkg.price ||
//         '',

//       services: Array.isArray(
//         note.packageServices
//       )
//         ? [...note.packageServices]
//         : Array.isArray(pkg.services)
//         ? [...pkg.services]
//         : [],

//       features: Array.isArray(
//         note.packageFeatures
//       )
//         ? [...note.packageFeatures]
//         : Array.isArray(pkg.features)
//         ? [...pkg.features]
//         : [],
//     };

//     setSelectedPackage(
//       independentNotebookCopy
//     );

//     setCustomerName(
//       note.customerName || ''
//     );

//     setBookingDate(
//       note.bookingDate || ''
//     );

//     setCustomizedPrice(
//       note.packagePrice || ''
//     );

//     setEditingNoteId(note.id);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // DELETE NOTE FROM MONGODB
//   // =========================================================

//   const handleDeleteNote = async (id) => {
//     const confirmDelete = window.confirm(
//       'እዚ Notebook ብርግጸኝነት ክትድምስሶ ትደሊዶ?'
//     );

//     if (!confirmDelete) {
//       return;
//     }

//     try {
//       const response = await fetch(
//         `${NOTEBOOK_API}/${id}`,
//         {
//           method: 'DELETE',
//         }
//       );

//       if (!response.ok) {
//         throw new Error(
//           `Failed to delete notebook: ${response.status}`
//         );
//       }

//       setNotebookList((prev) =>
//         prev.filter(
//           (note) =>
//             String(note.id) !== String(id)
//         )
//       );
//     } catch (err) {
//       console.error(
//         'Error deleting notebook from MongoDB:',
//         err
//       );

//       alert(
//         'Notebook ካብ MongoDB ምድምሳስ ኣይተዓወተን።'
//       );
//     }
//   };

//   // =========================================================
//   // ESCAPE HTML
//   // =========================================================

//   const escapeHtml = (value) =>
//     String(value ?? '')
//       .replace(/&/g, '&amp;')
//       .replace(/</g, '&lt;')
//       .replace(/>/g, '&gt;')
//       .replace(/"/g, '&quot;')
//       .replace(/'/g, '&#039;');

//   // =========================================================
//   // SHARE RECEIPT
//   // =========================================================

//   const handleShareReceipt = async (note) => {
//     const servicesHtml =
//       Array.isArray(note.packageServices) &&
//       note.packageServices.length > 0
//         ? note.packageServices
//             .map(
//               (service) =>
//                 `<li>${escapeHtml(service)}</li>`
//             )
//             .join('')
//         : '<li>ሕጂ ንጊዜው ዝተወሰነ ኣገልግሎት የለን</li>';

//     const featuresHtml =
//       Array.isArray(note.packageFeatures) &&
//       note.packageFeatures.length > 0
//         ? note.packageFeatures
//             .map(
//               (feature) =>
//                 `<li>${escapeHtml(feature)}</li>`
//             )
//             .join('')
//         : '<li>የለን</li>';

//     const receiptHtml = `
//       <div
//         id="receipt-share-card"
//         style="
//           width:900px;
//           box-sizing:border-box;
//           background:#050505;
//           color:#ffffff;
//           padding:42px;
//           font-family:Arial,'Noto Sans Ethiopic',sans-serif;
//           border:4px solid #dfb557;
//           border-radius:24px;
//           position:relative;
//           overflow:hidden;
//         "
//       >

//         <div
//           style="
//             position:absolute;
//             inset:14px;
//             border:1px solid rgba(223,181,87,.45);
//             border-radius:16px;
//             pointer-events:none;
//           "
//         ></div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//           "
//         >
//           <div
//             style="
//               color:#dfb557;
//               font-size:18px;
//               font-weight:700;
//               letter-spacing:5px;
//               margin-bottom:10px;
//             "
//           >
//             HABESHA FILM PRODUCTION
//           </div>

//           <div
//             style="
//               color:#ffffff;
//               font-size:28px;
//               font-weight:700;
//               margin-bottom:8px;
//             "
//           >
//             BOOKING RECEIPT
//           </div>

//           <div
//             style="
//               width:90px;
//               height:3px;
//               background:#dfb557;
//               margin:0 auto 26px;
//             "
//           ></div>
//         </div>

//         <div
//           style="
//             position:relative;
//             z-index:1;
//             border:1px solid rgba(223,181,87,.55);
//             border-radius:16px;
//             padding:24px;
//             background:#0b0b0b;
//           "
//         >

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               gap:24px;
//               margin-bottom:16px;
//             "
//           >

//             <div>
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 CUSTOMER NAME
//               </div>

//               <div
//                 style="
//                   font-size:22px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.customerName)}
//               </div>
//             </div>

//             <div style="text-align:right;">
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 BOOKING DATE
//               </div>

//               <div
//                 style="
//                   font-size:18px;
//                   font-weight:600;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.bookingDate)}
//               </div>
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:18px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               align-items:center;
//               gap:20px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:11px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 PACKAGE
//               </div>

//               <div
//                 style="
//                   font-size:25px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(note.packageName)}
//               </div>

//               <div
//                 style="
//                   font-size:13px;
//                   color:#dfb557;
//                   margin-top:5px;
//                 "
//               >
//                 ${escapeHtml(note.tier)}
//               </div>

//             </div>

//             <div
//               style="
//                 color:#dfb557;
//                 font-size:28px;
//                 font-weight:800;
//                 white-space:nowrap;
//               "
//             >
//               ${escapeHtml(note.packagePrice)}
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:22px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:grid;
//               grid-template-columns:1fr 1fr;
//               gap:28px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 SERVICES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${servicesHtml}
//               </ul>

//             </div>

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 FEATURES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${featuresHtml}
//               </ul>

//             </div>

//           </div>

//         </div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//             margin-top:24px;
//             color:#ffffff;
//             font-size:13px;
//             line-height:1.7;
//           "
//         >

//           <div
//             style="
//               color:#dfb557;
//               font-weight:700;
//               letter-spacing:2px;
//             "
//           >
//             HABESHA FILM PRODUCTION STUDIO
//           </div>

//           <div>
//             ✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ! ✨
//           </div>

//         </div>

//       </div>
//     `;

//     let container = null;

//     try {
//       container = document.createElement('div');

//       container.style.position = 'fixed';
//       container.style.left = '-100000px';
//       container.style.top = '0';
//       container.style.width = '900px';
//       container.style.zIndex = '-1';

//       container.innerHTML = receiptHtml;

//       document.body.appendChild(container);

//       const receiptElement =
//         container.querySelector(
//           '#receipt-share-card'
//         );

//       await new Promise((resolve) =>
//         requestAnimationFrame(resolve)
//       );

//       const canvas = await html2canvas(
//         receiptElement,
//         {
//           backgroundColor: '#050505',
//           scale: 2,
//           useCORS: true,
//           logging: false,
//         }
//       );

//       const blob = await new Promise(
//         (resolve) =>
//           canvas.toBlob(
//             resolve,
//             'image/png',
//             1
//           )
//       );

//       if (!blob) {
//         throw new Error(
//           'Could not create receipt image.'
//         );
//       }

//       const file = new File(
//         [blob],
//         `Habesha-Film-Receipt-${Date.now()}.png`,
//         {
//           type: 'image/png',
//         }
//       );

//       if (
//         navigator.share &&
//         (!navigator.canShare ||
//           navigator.canShare({
//             files: [file],
//           }))
//       ) {
//         await navigator.share({
//           title:
//             'Booking Receipt - Habesha Film Production',
//           text:
//             'Booking Receipt - Habesha Film Production',
//           files: [file],
//         });
//       } else {
//         const imageUrl =
//           URL.createObjectURL(blob);

//         const link =
//           document.createElement('a');

//         link.href = imageUrl;

//         link.download = file.name;

//         document.body.appendChild(link);

//         link.click();

//         link.remove();

//         URL.revokeObjectURL(imageUrl);

//         alert(
//           'እቲ Receipt ብPNG ስእሊ ተዳልዩ ኣሎ። እቲ ስእሊ ኣብ WhatsApp ወይ ካልእ app ክትልእኮ ትኽእል።'
//         );
//       }
//     } catch (err) {
//       console.error(
//         'Error creating/sharing receipt:',
//         err
//       );

//       if (err?.name !== 'AbortError') {
//         alert(
//           'Receipt ስእሊ ምፍጣር ወይ ምስዳድ ኣይተዓወተን።'
//         );
//       }
//     } finally {
//       if (
//         container &&
//         container.parentNode
//       ) {
//         container.parentNode.removeChild(
//           container
//         );
//       }
//     }
//   };

//   // =========================================================
//   // SAVE MAIN WEBSITE PACKAGES
//   // =========================================================

//   const handleSaveAndExit = async () => {
//     try {
//       const response = await fetch(
//         'https://habesha-film-production-server.onrender.com/api/packages/update',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(tempPackages),
//         }
//       );

//       if (response.ok) {
//         setPackages(tempPackages);

//         alert(
//           'ዳታ ብሰላም ተሰዲዱ ኣብ ኩሉ ዲቫይስ ክረአ እዩ!'
//         );
//       } else {
//         alert('ሰርቨር ጌጋ ኣለዎ።');
//       }
//     } catch (err) {
//       console.error(
//         'Error saving to server:',
//         err
//       );

//       alert(
//         'ዳታ ናብ ሰርቨር ምልኣኽ ኣይከኣለን።'
//       );
//     }

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CANCEL MAIN EDIT MODE
//   // =========================================================

//   const handleCancelEdit = () => {
//     setTempPackages(packages);

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CLOSE BOOKING / NOTEBOOK MODAL
//   // =========================================================

//   const handleCloseBookingModal = () => {
//     setIsBookingModalOpen(false);
//     setSelectedPackage(null);
//     setEditingNoteId(null);
//   };

//   // =========================================================
//   // MAIN PACKAGE EDIT HELPERS
//   // =========================================================

//   const updateTempPackageField = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages((prev) => ({
//       ...prev,

//       [key]: {
//         ...prev[key],
//         [field]: value,
//       },
//     }));
//   };

//   const updateTempPackageArray = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages((prev) => ({
//       ...prev,

//       [key]: {
//         ...prev[key],

//         [field]: value
//           .split('\n')
//           .map((item) => item.trim())
//           .filter(
//             (item) => item.length > 0
//           ),
//       },
//     }));
//   };

//   // =========================================================
//   // RENDER
//   // =========================================================

//   return (
//     <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden flex flex-col justify-between">

//       <Navbar />

//       <div className="flex-grow flex items-center justify-center px-4 py-32">

//         {/* LOGIN */}

//         {!isAuthenticated ? (

//           <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center relative">

//             <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">
//               Secure Access
//             </span>

//             <h2 className="text-2xl md:text-3xl font-serif mb-3 text-zinc-100">
//               Protected Price Page
//             </h2>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4" />

//             <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">
//               እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።
//             </p>

//             <form
//               onSubmit={handleLogin}
//               className="space-y-4"
//             >

//               <input
//                 type="password"
//                 placeholder="Enter Passcode"
//                 value={passcode}
//                 onChange={(e) =>
//                   setPasscode(e.target.value)
//                 }
//                 className="w-full px-4 py-3 bg-zinc-900 border border-[#dfb557]/50 rounded-xl focus:outline-none focus:border-[#dfb557] text-center tracking-widest text-lg text-zinc-100 placeholder-zinc-500 shadow-inner"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 disabled:opacity-50 rounded-xl shadow-lg"
//               >
//                 {loading
//                   ? 'Checking...'
//                   : 'Submit'}
//               </button>

//               {error && (
//                 <p className="text-red-400 text-xs mt-2 font-medium">
//                   ጌጋ ፓስኮድ! ደጊምካ ፈትን።
//                 </p>
//               )}

//             </form>

//           </div>

//         ) : isEditMode ? (

//           /* =====================================================
//              ADMIN EDIT MODE
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-2 sm:px-4 py-6 sm:py-12 w-full min-w-0">

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Administration Mode
//             </span>

//             <h1 className="text-3xl font-serif mb-4 text-zinc-100">
//               Edit Packages & Admin Notebook
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-8" />

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-3 sm:p-6 md:p-8 rounded-2xl space-y-6 sm:space-y-8 text-left shadow-2xl min-w-0">

//               {/* =================================================
//                   NOTEBOOK
//               ================================================= */}

//               <div className="bg-zinc-900 rounded-xl border border-[#dfb557]/30 shadow-inner overflow-hidden min-w-0">

//                 {/* NOTEBOOK HEADER / TOGGLE */}

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setIsNotebookOpen(
//                       (prev) => !prev
//                     )
//                   }
//                   className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-6 text-left hover:bg-zinc-800/60 transition-all"
//                 >

//                   <div className="flex items-start sm:items-center gap-2 sm:gap-3 min-w-0 pr-2">

//                     <span className="text-xs font-bold uppercase text-[#dfb557] tracking-wider">
//                       📝 Admin Notebook & Customer Bookings
//                     </span>

//                     <span className="hidden sm:inline text-[10px] text-zinc-400 font-light">
//                       ዋጋ፣ ኣገልግሎትን ባህርያትን ሒዙ ይዕቀብ
//                     </span>

//                   </div>

//                   <span
//                     className={`flex-shrink-0 text-[#dfb557] text-sm transition-transform duration-300 ${
//                       isNotebookOpen
//                         ? 'rotate-180'
//                         : ''
//                     }`}
//                   >
//                     ▼
//                   </span>

//                 </button>

//                 {/* NOTEBOOK CONTENT */}

//                 {isNotebookOpen && (

//                   <div className="px-3 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-zinc-800">

//                     <div className="space-y-3 sm:space-y-4 max-h-[60vh] sm:max-h-[500px] overflow-y-auto pr-0 sm:pr-1 overscroll-contain">

//                       {notebookList.length === 0 ? (

//                         <p className="text-zinc-500 text-xs italic text-center py-4">
//                           ዝኾነ ዝተመዝገበ ዓሚል የልቦን። ካብቲ ኣብ ታሕቲ ዘሎ Edit Mode ጌርካ Select ብምባል ክትምዝግብ ትኽእል።
//                         </p>

//                       ) : (

//                         notebookList.map((note) => (

//                           <div
//                             key={note.id}
//                             className="bg-zinc-950 border border-zinc-800 p-3 sm:p-5 rounded-xl space-y-3 sm:space-y-4 shadow-md min-w-0"
//                           >

//                             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3 border-b border-zinc-900 pb-3 min-w-0">

//                               <div className="flex items-center gap-2 sm:gap-3 flex-wrap min-w-0">

//                                 <span className="text-base font-serif font-bold text-[#dfb557]">
//                                   {note.customerName}
//                                 </span>

//                                 <span className="text-[10px] bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md text-zinc-300 font-semibold">
//                                   📅 ዕለት: {note.bookingDate}
//                                 </span>

//                               </div>

//                               <span className="text-[9px] text-zinc-500">
//                                 ተመዝጊቡሉ: {note.timestamp}
//                               </span>

//                             </div>

//                             <div className="bg-zinc-900/80 border border-[#dfb557]/30 p-3 sm:p-4 rounded-xl space-y-3 sm:space-y-4 min-w-0 overflow-hidden">

//                               <div className="flex justify-between items-start sm:items-center gap-3">

//                                 <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#dfb557]">
//                                   {note.tier}
//                                 </span>

//                                 <span className="text-lg font-serif font-bold text-[#dfb557]">
//                                   {note.packagePrice}
//                                 </span>

//                               </div>

//                               <h4 className="text-lg sm:text-xl font-serif text-white break-words">
//                                 {note.packageName} Package
//                               </h4>

//                               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-3 border-t border-zinc-800">

//                                 <div className="space-y-2">

//                                   <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                     SERVICES
//                                   </span>

//                                   <ul className="space-y-1 text-xs text-zinc-300">

//                                     {Array.isArray(
//                                       note.packageServices
//                                     ) &&
//                                     note.packageServices.length > 0 ? (

//                                       note.packageServices.map(
//                                         (service, index) => (
//                                           <li key={index}>
//                                             {service}
//                                           </li>
//                                         )
//                                       )

//                                     ) : (

//                                       <li className="text-zinc-500">
//                                         የለን
//                                       </li>

//                                     )}

//                                   </ul>

//                                 </div>

//                                 <div className="space-y-2">

//                                   <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                     FEATURES
//                                   </span>

//                                   <ul className="space-y-1 text-xs text-zinc-300">

//                                     {Array.isArray(
//                                       note.packageFeatures
//                                     ) &&
//                                     note.packageFeatures.length > 0 ? (

//                                       note.packageFeatures.map(
//                                         (feature, index) => (
//                                           <li key={index}>
//                                             {feature}
//                                           </li>
//                                         )
//                                       )

//                                     ) : (

//                                       <li className="text-zinc-500">
//                                         የለን
//                                       </li>

//                                     )}

//                                   </ul>

//                                 </div>

//                               </div>

//                             </div>

//                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-zinc-900">

//                               <button
//                                 onClick={() =>
//                                   handleShareReceipt(note)
//                                 }
//                                 className="w-full px-3 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-[10px] uppercase font-semibold transition-all flex items-center justify-center gap-1 min-h-[42px]"
//                               >
//                                 Share 🔗
//                               </button>

//                               <button
//                                 onClick={() =>
//                                   handleEditNoteItem(note)
//                                 }
//                                 className="w-full px-3 py-2.5 bg-[#dfb557]/20 hover:bg-[#dfb557]/40 text-[#dfb557] rounded-lg text-[10px] uppercase font-semibold transition-all min-h-[42px]"
//                               >
//                                 Edit
//                               </button>

//                               <button
//                                 onClick={() =>
//                                   handleDeleteNote(note.id)
//                                 }
//                                 className="w-full px-3 py-2.5 bg-red-950/60 hover:bg-red-900 text-red-300 rounded-lg text-[10px] uppercase font-semibold transition-all min-h-[42px]"
//                               >
//                                 Delete
//                               </button>

//                             </div>

//                           </div>

//                         ))
//                       )}

//                     </div>

//                   </div>

//                 )}

//               </div>

//               {/* =================================================
//                   MAIN WEBSITE PACKAGE EDIT
//               ================================================= */}

//               <div className="pt-2 sm:pt-4">

//                 <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">

//                   <h3 className="text-sm font-bold uppercase text-[#dfb557] tracking-wider">
//                     ⚙️ Edit Website Packages & Test Select
//                   </h3>

//                   <span className="lg:hidden text-[9px] text-zinc-500 uppercase tracking-[0.16em]">
//                     ← Swipe packages →
//                   </span>

//                 </div>

//                 <div className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none pb-4 lg:pb-0 -mx-1 sm:-mx-0 px-1 sm:px-0 overscroll-x-contain">

//                   {Object.keys(tempPackages).map((key) => {

//                     const pkg = tempPackages[key];

//                     return (

//                       <div
//                         key={key}
//                         className="flex-none w-[86vw] sm:w-[68vw] md:w-[48vw] lg:w-auto snap-start bg-zinc-900 border-2 border-[#dfb557]/40 p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4 min-w-0"
//                       >

//                         <div className="space-y-3">

//                           {/* TIER */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Tier Title
//                             </label>

//                             <input
//                               value={pkg.tier || ''}
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'tier',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold"
//                             />

//                           </div>

//                           {/* NAME */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Package Name
//                             </label>

//                             <input
//                               value={pkg.name || ''}
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'name',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-serif font-bold text-lg"
//                             />

//                           </div>

//                           {/* PRICE */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Price (ዋጋ)
//                             </label>

//                             <input
//                               value={pkg.price || ''}
//                               onChange={(e) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'price',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-[#dfb557] font-bold"
//                             />

//                           </div>

//                           {/* SERVICES */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Services
//                             </label>

//                             <textarea
//                               rows="5"
//                               value={(pkg.services || []).join('\n')}
//                               onChange={(e) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'services',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One service per line"
//                             />

//                           </div>

//                           {/* FEATURES */}

//                           <div>

//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Features
//                             </label>

//                             <textarea
//                               rows="6"
//                               value={(pkg.features || []).join('\n')}
//                               onChange={(e) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'features',
//                                   e.target.value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One feature per line"
//                             />

//                           </div>

//                         </div>

//                         <button
//                           type="button"
//                           onClick={() =>
//                             handleSelectPackageClick(key)
//                           }
//                           className="w-full bg-[#dfb557] text-black py-2.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-md cursor-pointer"
//                         >
//                           Select {pkg.name} ➔
//                         </button>

//                       </div>

//                     );
//                   })}

//                 </div>

//               </div>

//               {/* SAVE / CANCEL MAIN PACKAGE EDIT */}

//               <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-4 pt-4 border-t border-zinc-900">

//                 <button
//                   type="button"
//                   onClick={handleCancelEdit}
//                   className="w-full sm:w-auto px-6 py-3 bg-zinc-900 text-zinc-300 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="button"
//                   onClick={handleSaveAndExit}
//                   className="w-full sm:w-auto px-6 py-3 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45] transition-all"
//                 >
//                   Save Changes
//                 </button>

//               </div>

//             </div>

//           </div>

//         ) : (

//           /* =====================================================
//              CUSTOMER VIEW
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-2 sm:px-4 py-6 sm:py-12 w-full min-w-0">

//             <div className="flex justify-end mb-4">

//               {!isEditGateOpen ? (

//                 <div className="flex flex-col items-end">

//                   <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-[#dfb557]/40 shadow-lg">

//                     <input
//                       type="password"
//                       placeholder="Admin Code"
//                       value={adminPasscode}
//                       onChange={(e) =>
//                         setAdminPasscode(
//                           e.target.value
//                         )
//                       }
//                       className="bg-transparent text-zinc-100 text-xs px-2 focus:outline-none w-28"
//                     />

//                     <button
//                       type="button"
//                       onClick={
//                         handleEditGateSubmit
//                       }
//                       className="px-3 py-1.5 bg-[#dfb557] text-black rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#c99f45] transition-all"
//                     >
//                       Unlock
//                     </button>

//                   </div>

//                   {adminError && (
//                     <p className="text-red-400 text-[10px] mt-1 font-medium">
//                       Wrong Admin Code!
//                     </p>
//                   )}

//                 </div>

//               ) : (

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setIsEditMode(true)
//                   }
//                   className="px-4 py-2 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-semibold tracking-widest shadow-md hover:bg-[#c99f45] transition-all"
//                 >
//                   Enter Edit Mode ⚙️
//                 </button>

//               )}

//             </div>

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Investment & Tiers
//             </span>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">
//               Our Professional Packages
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4" />

//             <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
//               ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ደረጃታት እቲ ንደለይዎ ምረጹ።
//             </p>

//             <div className="flex lg:grid lg:grid-cols-4 gap-5 lg:gap-6 text-left overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none pb-5 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-thin scrollbar-thumb-[#dfb557]/50 scrollbar-track-zinc-900">

//               {Object.keys(packages).map((key) => {

//                 const pkg = packages[key];

//                 return (

//                   <div
//                     key={key}
//                     className={`flex-none w-[82vw] sm:w-[65vw] md:w-[45vw] lg:w-auto snap-start bg-zinc-950/90 border-2 ${
//                       key === 'gold'
//                         ? 'border-[#dfb557]'
//                         : 'border-[#dfb557]/50'
//                     } p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between relative`}
//                   >

//                     {key === 'gold' && (
//                       <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
//                         {pkg.tier}
//                       </span>
//                     )}

//                     <div>

//                       <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">
//                         {key === 'gold'
//                           ? 'Exclusive'
//                           : pkg.tier}
//                       </span>

//                       <h3 className="text-xl sm:text-2xl font-serif mt-1 mb-2 text-zinc-100 break-words">
//                         {pkg.name}
//                       </h3>

//                       <p className="text-2xl sm:text-3xl font-serif font-bold text-[#dfb557] mb-6 break-words">
//                         {pkg.price}
//                       </p>

//                       {pkg.services &&
//                         pkg.services.length > 0 && (

//                           <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">

//                             {pkg.services.map(
//                               (service, index) => (

//                                 <p key={index}>
//                                   {service}
//                                 </p>

//                               )
//                             )}

//                           </div>

//                         )}

//                       <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-6 font-light">

//                         {(pkg.features || []).map(
//                           (feature, index) => (

//                             <li
//                               key={index}
//                               className="flex items-center gap-2"
//                             >
//                               {feature}
//                             </li>

//                           )
//                         )}

//                       </ul>

//                     </div>

//                   </div>

//                 );
//               })}

//             </div>

//             <div className="lg:hidden flex items-center justify-center gap-2 mt-2 text-[9px] text-zinc-500 uppercase tracking-[0.2em]">
//               <span>←</span>
//               <span>Swipe to view packages</span>
//               <span>→</span>
//             </div>

//           </div>

//         )}

//       </div>

//       {/* =======================================================
//           NOTEBOOK / EDIT MODAL
//       ======================================================= */}

//       {isBookingModalOpen &&
//         selectedPackage && (

//           <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto overscroll-contain">

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-4 sm:p-6 md:p-8 rounded-2xl max-w-5xl w-full max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)] overflow-y-auto shadow-2xl space-y-5 sm:space-y-6 my-0 sm:my-8">

//               <div className="flex justify-between items-start gap-3 border-b border-zinc-900 pb-3">

//                 <div>

//                   <h3 className="text-base sm:text-lg font-serif text-[#dfb557] leading-snug">
//                     {editingNoteId !== null
//                       ? '✏️ Edit Admin Notebook'
//                       : 'ዝርዝር መረጻ ንዓሚል ምዝገባ'}
//                   </h3>

//                   <span className="text-[10px] text-zinc-500">
//                     {editingNoteId !== null
//                       ? 'ዝርዝር ናይዚ Notebook ጥራሕ እዩ ዝቕየር'
//                       : 'Selected package is an independent copy'}
//                   </span>

//                 </div>

//                 <button
//                   type="button"
//                   onClick={
//                     handleCloseBookingModal
//                   }
//                   className="text-zinc-400 hover:text-white text-sm font-bold"
//                 >
//                   ✕
//                 </button>

//               </div>

//               <form
//                 onSubmit={
//                   handleBookingSubmit
//                 }
//                 className="space-y-5"
//               >

//                 {/* CUSTOMER NAME + DATE */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ስም ዓሚል (Customer Name)
//                     </label>

//                     <input
//                       type="text"
//                       required
//                       placeholder="ኣብነት: ኣቤል ዳዊት"
//                       value={customerName}
//                       onChange={(e) =>
//                         setCustomerName(
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ዕለት መደብ (Booking Date)
//                     </label>

//                     <input
//                       type="date"
//                       required
//                       value={bookingDate}
//                       onChange={(e) =>
//                         setBookingDate(
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* PACKAGE NAME + TIER */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       Package Name
//                     </label>

//                     <input
//                       type="text"
//                       value={
//                         selectedPackage.name || ''
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageField(
//                           'name',
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 font-bold focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       Tier
//                     </label>

//                     <input
//                       type="text"
//                       value={
//                         selectedPackage.tier || ''
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageField(
//                           'tier',
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 font-bold focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* PRICE */}

//                 <div>

//                   <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                     ዋጋ (Customizable Price)
//                   </label>

//                   <input
//                     type="text"
//                     required
//                     value={customizedPrice}
//                     onChange={(e) => {
//                       setCustomizedPrice(
//                         e.target.value
//                       );

//                       updateSelectedPackageField(
//                         'price',
//                         e.target.value
//                       );
//                     }}
//                     className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-[#dfb557] font-bold focus:outline-none focus:border-[#dfb557]"
//                   />

//                 </div>

//                 {/* SERVICES + FEATURES EDITABLE */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

//                   {/* SERVICES */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-3 sm:p-5 min-w-0">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         SERVICES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage.services?.length || 0}{' '}
//                         items
//                       </span>

//                     </div>

//                     <textarea
//                       rows="12"
//                       value={
//                         (
//                           selectedPackage.services ||
//                           []
//                         ).join('\n')
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageArray(
//                           'services',
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-950 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-[#dfb557] resize-y"
//                       placeholder="One service per line"
//                     />

//                     <p className="text-[9px] text-zinc-500 mt-2">
//                       ነፍሲ ወከፍ Service ኣብ ሓደ መስመር ጽሓፍ።
//                     </p>

//                   </div>

//                   {/* FEATURES */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-3 sm:p-5 min-w-0">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         FEATURES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage.features?.length || 0}{' '}
//                         items
//                       </span>

//                     </div>

//                     <textarea
//                       rows="12"
//                       value={
//                         (
//                           selectedPackage.features ||
//                           []
//                         ).join('\n')
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageArray(
//                           'features',
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-950 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-[#dfb557] resize-y"
//                       placeholder="One feature per line"
//                     />

//                     <p className="text-[9px] text-zinc-500 mt-2">
//                       ነፍሲ ወከፍ Feature ኣብ ሓደ መስመር ጽሓፍ።
//                     </p>

//                   </div>

//                 </div>

//                 {/* PREVIEW */}

//                 <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 sm:p-5">

//                   <div className="flex justify-between items-center mb-4">

//                     <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                       Notebook Preview
//                     </h4>

//                     <span className="text-[9px] text-zinc-500">
//                       እዚ ናይ Notebook copy ጥራሕ እዩ
//                     </span>

//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Customer
//                       </p>

//                       <p className="text-sm text-white font-semibold">
//                         {customerName || '—'}
//                       </p>

//                     </div>

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Date
//                       </p>

//                       <p className="text-sm text-white">
//                         {bookingDate || '—'}
//                       </p>

//                     </div>

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Package
//                       </p>

//                       <p className="text-sm text-white font-semibold">
//                         {selectedPackage.name || '—'}
//                       </p>

//                     </div>

//                     <div>

//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Price
//                       </p>

//                       <p className="text-sm text-[#dfb557] font-bold">
//                         {customizedPrice || '—'}
//                       </p>

//                     </div>

//                   </div>

//                 </div>

//                 {/* SAVE / CANCEL */}

//                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 border-t border-zinc-900">

//                   <button
//                     type="button"
//                     onClick={
//                       handleCloseBookingModal
//                     }
//                     className="w-full sm:w-1/2 bg-zinc-900 text-zinc-300 py-3 rounded-xl text-xs uppercase font-bold hover:bg-zinc-800 transition-all min-h-[44px]"
//                   >
//                     ሰርዝ
//                   </button>

//                   <button
//                     type="submit"
//                     className="w-full sm:w-1/2 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold hover:bg-[#c99f45] transition-all shadow-lg min-h-[44px]"
//                   >
//                     {editingNoteId !== null
//                       ? 'Update / Save'
//                       : 'ኣቐመጥ (Save)'}
//                   </button>

//                 </div>

//               </form>

//             </div>

//           </div>

//         )}

//       <Footer />

//     </div>
//   );
// }
// //
// export default Price;

// import React, { useState, useEffect } from 'react';
// import html2canvas from 'html2canvas';
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

//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

//   const [customerName, setCustomerName] = useState('');
//   const [bookingDate, setBookingDate] = useState('');
//   const [customizedPrice, setCustomizedPrice] = useState('');

//   const [editingNoteId, setEditingNoteId] = useState(null);

//   const [notebookList, setNotebookList] = useState([]);

//   // =========================================================
//   // MOBILE NOTEBOOK OPEN / CLOSE
//   // =========================================================

//   const [isNotebookOpen, setIsNotebookOpen] = useState(false);

//   // =========================================================
//   // NOTEBOOK API
//   // =========================================================

//   const NOTEBOOK_API =
//     'https://habesha-film-production-server.onrender.com/api/notebook';

//   const PACKAGES_API =
//     'https://habesha-film-production-server.onrender.com/api/packages';

//   const PACKAGES_UPDATE_API =
//     'https://habesha-film-production-server.onrender.com/api/packages/update';

//   const AUTH_API =
//     'https://habesha-film-production-server.onrender.com/api/auth/verify-passcode';

//   // =========================================================
//   // DEFAULT PACKAGES
//   // =========================================================

//   const defaultPackages = {
//     premium: {
//       tier: 'Ultimate VIP',
//       name: 'Premium',
//       price: '$1,000+',
//       services: [
//         '• ቪድዮ ቀረጻ (Unlimited)',
//         '• ክልተ ኤክስፐርት ካሜራማን',
//         '• Cinematic Color Grading & VFX',
//       ],
//       features: [
//         '✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)',
//         '✓ ክልተ ኤክስፐርት ካሜራማን',
//         '✓ Cinematic Color Grading & VFX',
//         '🎁 ቦናስ: ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር',
//       ],
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
//         '• ኩሉ ሶፍት ኮፒ (All Soft Copy)',
//       ],
//       features: [
//         '✓ 800 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)',
//         '✓ 2 ሳይን ቦርድ (30×45)',
//         '✓ 3 ቦርድ (50×80, 40×60, 30×45)',
//         '✓ 400 ምስጋና ካርድ (Thank You Card)',
//         '✓ 8 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     silver: {
//       tier: 'Advanced',
//       name: 'Silver',
//       price: '240,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)',
//       ],
//       features: [
//         '✓ 500 ፎቶዎች (10×15)',
//         '✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 2 ቦርድ (50×80 & 40×60)',
//         '✓ 250 ምስጋና ካርድ (Thank You Card)',
//         '✓ 6 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },

//     standard: {
//       tier: 'Standard',
//       name: 'Standard',
//       price: '190,000',
//       services: [
//         '• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)',
//         '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
//         '• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)',
//         '• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)',
//       ],
//       features: [
//         '✓ 300 ፎቶዎች (10×15)',
//         '✓ 1 ላሚኔትድ ፎቶ (30×90)',
//         '✓ 1 ሳይን ቦርድ (30×45)',
//         '✓ 1 ቦርድ (50×80)',
//         '✓ 200 ምስጋና ካርድ (Thank You Card)',
//         '✓ 4 ዩኤስቢ ፍላሽ (64 GB)',
//         '✓ 2 ባነር',
//         '✓ 2 ራማ / ቆብዕ (Cap)',
//       ],
//     },
//   };

//   const [packages, setPackages] = useState(defaultPackages);
//   const [tempPackages, setTempPackages] = useState(defaultPackages);

//   // =========================================================
//   // IMPORTANT NOTEBOOK HELPERS
//   // =========================================================

//   /*
//     MongoDB backend ካብ ዝተፈላለየ response shape እንተመለሰ
//     ኩሉ ክንቅበሎ ኢና።
//   */

//   const normalizeNotebook = (note) => {
//     if (!note || typeof note !== 'object') {
//       return null;
//     }

//     const normalizedId =
//       note.id ??
//       note._id ??
//       note._id?.$oid ??
//       note.id?.$oid ??
//       null;

//     return {
//       ...note,

//       /*
//         MongoDB _id እንተኾይኑ ን id እውን ንምልኣኽ ንጥቀመሉ።
//         _id ግን ኣይንድምስሶን።
//       */
//       id: normalizedId,

//       _id: note._id ?? normalizedId,

//       customerName: note.customerName || '',

//       bookingDate: note.bookingDate || '',

//       packageName: note.packageName || '',

//       packagePrice: note.packagePrice || '',

//       tier: note.tier || '',

//       packageServices: Array.isArray(note.packageServices)
//         ? note.packageServices
//         : [],

//       packageFeatures: Array.isArray(note.packageFeatures)
//         ? note.packageFeatures
//         : [],

//       timestamp:
//         note.timestamp ||
//         note.createdAt ||
//         new Date().toLocaleString(),
//     };
//   };

//   /*
//     Backend response እዞም ኩሎም ክኾኑ ይኽእሉ፦

//     []
//     { notebooks: [] }
//     { notes: [] }
//     { data: [] }
//     { bookings: [] }
//     { result: [] }
//   */

//   const extractNotebookArray = (data) => {
//     if (Array.isArray(data)) {
//       return data;
//     }

//     if (Array.isArray(data?.notebooks)) {
//       return data.notebooks;
//     }

//     if (Array.isArray(data?.notes)) {
//       return data.notes;
//     }

//     if (Array.isArray(data?.bookings)) {
//       return data.bookings;
//     }

//     if (Array.isArray(data?.data)) {
//       return data.data;
//     }

//     if (Array.isArray(data?.result)) {
//       return data.result;
//     }

//     return [];
//   };

//   const getNotebookId = (note) => {
//     return (
//       note?.id ??
//       note?._id ??
//       note?._id?.$oid ??
//       note?.id?.$oid ??
//       null
//     );
//   };

//   // =========================================================
//   // LOAD DATA
//   // =========================================================

//   useEffect(() => {
//     let isMounted = true;

//     // =======================================================
//     // LOAD PACKAGES
//     // =======================================================

//     fetch(PACKAGES_API, {
//       method: 'GET',
//       cache: 'no-store',
//       headers: {
//         Accept: 'application/json',
//         'Cache-Control': 'no-cache',
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (!isMounted) return;

//         if (data) {
//           const mergedData = {
//             premium: {
//               ...defaultPackages.premium,
//               ...data.premium,
//               services: Array.isArray(data.premium?.services)
//                 ? data.premium.services
//                 : defaultPackages.premium.services,
//               features: Array.isArray(data.premium?.features)
//                 ? data.premium.features
//                 : defaultPackages.premium.features,
//             },

//             gold: {
//               ...defaultPackages.gold,
//               ...data.gold,
//               services: Array.isArray(data.gold?.services)
//                 ? data.gold.services
//                 : defaultPackages.gold.services,
//               features: Array.isArray(data.gold?.features)
//                 ? data.gold.features
//                 : defaultPackages.gold.features,
//             },

//             silver: {
//               ...defaultPackages.silver,
//               ...data.silver,
//               services: Array.isArray(data.silver?.services)
//                 ? data.silver.services
//                 : defaultPackages.silver.services,
//               features: Array.isArray(data.silver?.features)
//                 ? data.silver.features
//                 : defaultPackages.silver.features,
//             },

//             standard: {
//               ...defaultPackages.standard,
//               ...data.standard,
//               services: Array.isArray(data.standard?.services)
//                 ? data.standard.services
//                 : defaultPackages.standard.services,
//               features: Array.isArray(data.standard?.features)
//                 ? data.standard.features
//                 : defaultPackages.standard.features,
//             },
//           };

//           setPackages(mergedData);
//           setTempPackages(mergedData);
//         }
//       })
//       .catch((err) => {
//         console.log('Failed to fetch packages:', err);
//       });

//     // =======================================================
//     // AUTH DATA
//     // =======================================================

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

//     // =======================================================
//     // LOAD NOTEBOOK FROM MONGODB
//     // =======================================================

//     const loadNotebook = async () => {
//       try {
//         const response = await fetch(NOTEBOOK_API, {
//           method: 'GET',

//           /*
//             IMPORTANT:
//             Browser cache ከም ዘይጥቀም ንገብሮ።
//           */
//           cache: 'no-store',

//           headers: {
//             Accept: 'application/json',
//             'Cache-Control': 'no-cache',
//             Pragma: 'no-cache',
//           },
//         });

//         if (!response.ok) {
//           throw new Error(
//             `Notebook API error: ${response.status}`
//           );
//         }

//         const data = await response.json();

//         console.log('Notebook GET response:', data);

//         const rawList = extractNotebookArray(data);

//         const normalizedList = rawList
//           .map(normalizeNotebook)
//           .filter(Boolean);

//         console.log(
//           'Notebook records loaded from MongoDB:',
//           normalizedList
//         );

//         if (isMounted) {
//           setNotebookList(normalizedList);
//         }
//       } catch (err) {
//         console.error(
//           'Failed to load Admin Notebook from MongoDB:',
//           err
//         );

//         /*
//           ኣብ error ጥራይ [] ኣይንገብሮን።
//           ስለዚ ኣብ transient network/server error
//           ኣብ UI ዝነበረ data ኣይጠፍእን።
//         */
//       }
//     };

//     loadNotebook();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   // =========================================================
//   // LOGIN
//   // =========================================================

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setError(false);

//     try {
//       const response = await fetch(AUTH_API, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           passcode,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsAuthenticated(true);

//         const expiryDuration = 10 * 60 * 1000;

//         const authData = {
//           value: 'true',
//           expiry: new Date().getTime() + expiryDuration,
//         };

//         localStorage.setItem(
//           'priceAuthData',
//           JSON.stringify(authData)
//         );
//       } else {
//         setError(true);
//       }
//     } catch (err) {
//       console.error(
//         'Error verifying passcode:',
//         err
//       );

//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================================
//   // ADMIN EDIT GATE
//   // =========================================================

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

//   // =========================================================
//   // SELECT PACKAGE
//   // =========================================================

//   const handleSelectPackageClick = (pkgKey) => {
//     if (!isEditMode) return;

//     const pkg = tempPackages[pkgKey];

//     if (!pkg) {
//       console.error(
//         'Package not found:',
//         pkgKey
//       );

//       return;
//     }

//     const independentPackageCopy = {
//       tier: pkg.tier || '',
//       name: pkg.name || '',
//       price: pkg.price || '',

//       services: Array.isArray(pkg.services)
//         ? [...pkg.services]
//         : [],

//       features: Array.isArray(pkg.features)
//         ? [...pkg.features]
//         : [],
//     };

//     setSelectedPackage(
//       independentPackageCopy
//     );

//     setCustomerName('');
//     setBookingDate('');
//     setCustomizedPrice(
//       independentPackageCopy.price
//     );

//     setEditingNoteId(null);

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // UPDATE SELECTED NOTE PACKAGE ONLY
//   // =========================================================

//   const updateSelectedPackageField = (
//     field,
//     value
//   ) => {
//     setSelectedPackage((prev) => {
//       if (!prev) return prev;

//       return {
//         ...prev,
//         [field]: value,
//       };
//     });
//   };

//   const updateSelectedPackageArray = (
//     field,
//     value
//   ) => {
//     setSelectedPackage((prev) => {
//       if (!prev) return prev;

//       return {
//         ...prev,

//         [field]: value
//           .split('\n')
//           .map((item) => item.trim())
//           .filter(
//             (item) => item.length > 0
//           ),
//       };
//     });
//   };

//   // =========================================================
//   // SAVE NOTEBOOK TO MONGODB
//   // =========================================================

//   const handleBookingSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !customerName.trim() ||
//       !bookingDate ||
//       !selectedPackage
//     ) {
//       return;
//     }

//     /*
//       IMPORTANT:
//       Existing MongoDB ID እንተሃልዩ ንዕኡ ንጥቀም።
//       New record ከኣ local unique ID ንህቦ፣ backend MongoDB
//       _id እንተፈጠረ ካብ response ንወስዶ።
//     */

//     const currentEditingId =
//       editingNoteId !== null
//         ? editingNoteId
//         : null;

//     const newBookingRecord = {
//       id:
//         currentEditingId !== null
//           ? currentEditingId
//           : Date.now(),

//       customerName:
//         customerName.trim(),

//       bookingDate,

//       packageName:
//         selectedPackage.name || '',

//       packagePrice:
//         customizedPrice,

//       tier:
//         selectedPackage.tier || '',

//       packageServices:
//         Array.isArray(
//           selectedPackage.services
//         )
//           ? [...selectedPackage.services]
//           : [],

//       packageFeatures:
//         Array.isArray(
//           selectedPackage.features
//         )
//           ? [...selectedPackage.features]
//           : [],

//       timestamp:
//         currentEditingId !== null
//           ? notebookList.find(
//               (item) =>
//                 String(
//                   getNotebookId(item)
//                 ) ===
//                 String(currentEditingId)
//             )?.timestamp ||
//             new Date().toLocaleString()
//           : new Date().toLocaleString(),
//     };

//     try {
//       // =====================================================
//       // UPDATE EXISTING NOTE
//       // =====================================================

//       if (currentEditingId !== null) {
//         const response = await fetch(
//           `${NOTEBOOK_API}/${encodeURIComponent(
//             currentEditingId
//           )}`,
//           {
//             method: 'PUT',

//             headers: {
//               'Content-Type':
//                 'application/json',

//               Accept:
//                 'application/json',
//             },

//             body: JSON.stringify(
//               newBookingRecord
//             ),
//           }
//         );

//         if (!response.ok) {
//           throw new Error(
//             `Failed to update notebook: ${response.status}`
//           );
//         }

//         const data =
//           await response.json();

//         console.log(
//           'Notebook PUT response:',
//           data
//         );

//         const updatedNote =
//           normalizeNotebook(
//             data?.notebook ||
//               data?.note ||
//               data?.data ||
//               data
//           );

//         if (!updatedNote) {
//           throw new Error(
//             'Updated notebook response is empty.'
//           );
//         }

//         const updatedList =
//           notebookList.map((item) => {
//             const itemId =
//               getNotebookId(item);

//             return String(itemId) ===
//               String(currentEditingId)
//               ? updatedNote
//               : item;
//           });

//         setNotebookList(
//           updatedList
//         );

//         alert(
//           'ዝነበረ Notebook ብሰላም ተስተካኺሉ እዩ!'
//         );
//       }

//       // =====================================================
//       // CREATE NEW NOTE
//       // =====================================================

//       else {
//         const response = await fetch(
//           NOTEBOOK_API,
//           {
//             method: 'POST',

//             headers: {
//               'Content-Type':
//                 'application/json',

//               Accept:
//                 'application/json',
//             },

//             body: JSON.stringify(
//               newBookingRecord
//             ),
//           }
//         );

//         if (!response.ok) {
//           throw new Error(
//             `Failed to save notebook: ${response.status}`
//           );
//         }

//         const data =
//           await response.json();

//         console.log(
//           'Notebook POST response:',
//           data
//         );

//         const savedNote =
//           normalizeNotebook(
//             data?.notebook ||
//               data?.note ||
//               data?.data ||
//               data
//           );

//         if (!savedNote) {
//           throw new Error(
//             'Saved notebook response is empty.'
//           );
//         }

//         setNotebookList(
//           (prev) => [
//             savedNote,
//             ...prev,
//           ]
//         );

//         alert(
//           'ብሰላም ኣብ Admin Notebook ኣብ MongoDB ተዓቂቡ እዩ!'
//         );
//       }

//       setIsBookingModalOpen(false);
//       setSelectedPackage(null);
//       setEditingNoteId(null);
//     } catch (err) {
//       console.error(
//         'Error saving notebook to MongoDB:',
//         err
//       );

//       alert(
//         'Notebook ናብ MongoDB ምዕቃብ ኣይተዓወተን። በጃኻ Backend API ኣረጋግጽ።'
//       );
//     }
//   };

//   // =========================================================
//   // EDIT NOTEBOOK
//   // =========================================================

//   const handleEditNoteItem = (note) => {
//     const foundKey =
//       Object.keys(packages).find(
//         (key) =>
//           packages[key].name ===
//           note.packageName
//       );

//     const pkg =
//       packages[foundKey] ||
//       packages.gold;

//     const independentNotebookCopy = {
//       tier:
//         note.tier ||
//         pkg.tier ||
//         '',

//       name:
//         note.packageName ||
//         pkg.name ||
//         '',

//       price:
//         note.packagePrice ||
//         pkg.price ||
//         '',

//       services:
//         Array.isArray(
//           note.packageServices
//         )
//           ? [...note.packageServices]
//           : Array.isArray(
//               pkg.services
//             )
//           ? [...pkg.services]
//           : [],

//       features:
//         Array.isArray(
//           note.packageFeatures
//         )
//           ? [...note.packageFeatures]
//           : Array.isArray(
//               pkg.features
//             )
//           ? [...pkg.features]
//           : [],
//     };

//     setSelectedPackage(
//       independentNotebookCopy
//     );

//     setCustomerName(
//       note.customerName || ''
//     );

//     setBookingDate(
//       note.bookingDate || ''
//     );

//     setCustomizedPrice(
//       note.packagePrice || ''
//     );

//     /*
//       IMPORTANT:
//       MongoDB _id እንተኾይኑ እውን ንስኻ
//       ክትedit ክትክእል ኢኻ።
//     */
//     setEditingNoteId(
//       getNotebookId(note)
//     );

//     setIsBookingModalOpen(true);
//   };

//   // =========================================================
//   // DELETE NOTE FROM MONGODB
//   // =========================================================

//   const handleDeleteNote = async (id) => {
//     const confirmDelete =
//       window.confirm(
//         'እዚ Notebook ብርግጸኝነት ክትድምስሶ ትደሊዶ?'
//       );

//     if (!confirmDelete) {
//       return;
//     }

//     try {
//       const response = await fetch(
//         `${NOTEBOOK_API}/${encodeURIComponent(
//           id
//         )}`,
//         {
//           method: 'DELETE',

//           headers: {
//             Accept:
//               'application/json',
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(
//           `Failed to delete notebook: ${response.status}`
//         );
//       }

//       console.log(
//         'Notebook deleted:',
//         id
//       );

//       setNotebookList(
//         (prev) =>
//           prev.filter((note) => {
//             const noteId =
//               getNotebookId(note);

//             return (
//               String(noteId) !==
//               String(id)
//             );
//           })
//       );
//     } catch (err) {
//       console.error(
//         'Error deleting notebook from MongoDB:',
//         err
//       );

//       alert(
//         'Notebook ካብ MongoDB ምድምሳስ ኣይተዓወተን።'
//       );
//     }
//   };

//   // =========================================================
//   // ESCAPE HTML
//   // =========================================================

//   const escapeHtml = (value) =>
//     String(value ?? '')
//       .replace(
//         /&/g,
//         '&amp;'
//       )
//       .replace(
//         /</g,
//         '&lt;'
//       )
//       .replace(
//         />/g,
//         '&gt;'
//       )
//       .replace(
//         /"/g,
//         '&quot;'
//       )
//       .replace(
//         /'/g,
//         '&#039;'
//       );

//   // =========================================================
//   // SHARE RECEIPT
//   // =========================================================

//   const handleShareReceipt = async (
//     note
//   ) => {
//     const servicesHtml =
//       Array.isArray(
//         note.packageServices
//       ) &&
//       note.packageServices.length > 0
//         ? note.packageServices
//             .map(
//               (service) =>
//                 `<li>${escapeHtml(
//                   service
//                 )}</li>`
//             )
//             .join('')
//         : '<li>ሕጂ ንጊዜው ዝተወሰነ ኣገልግሎት የለን</li>';

//     const featuresHtml =
//       Array.isArray(
//         note.packageFeatures
//       ) &&
//       note.packageFeatures.length > 0
//         ? note.packageFeatures
//             .map(
//               (feature) =>
//                 `<li>${escapeHtml(
//                   feature
//                 )}</li>`
//             )
//             .join('')
//         : '<li>የለን</li>';

//     const receiptHtml = `
//       <div
//         id="receipt-share-card"
//         style="
//           width:900px;
//           box-sizing:border-box;
//           background:#050505;
//           color:#ffffff;
//           padding:42px;
//           font-family:Arial,'Noto Sans Ethiopic',sans-serif;
//           border:4px solid #dfb557;
//           border-radius:24px;
//           position:relative;
//           overflow:hidden;
//         "
//       >

//         <div
//           style="
//             position:absolute;
//             inset:14px;
//             border:1px solid rgba(223,181,87,.45);
//             border-radius:16px;
//             pointer-events:none;
//           "
//         ></div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//           "
//         >
//           <div
//             style="
//               color:#dfb557;
//               font-size:18px;
//               font-weight:700;
//               letter-spacing:5px;
//               margin-bottom:10px;
//             "
//           >
//             HABESHA FILM PRODUCTION
//           </div>

//           <div
//             style="
//               color:#ffffff;
//               font-size:28px;
//               font-weight:700;
//               margin-bottom:8px;
//             "
//           >
//             BOOKING RECEIPT
//           </div>

//           <div
//             style="
//               width:90px;
//               height:3px;
//               background:#dfb557;
//               margin:0 auto 26px;
//             "
//           ></div>
//         </div>

//         <div
//           style="
//             position:relative;
//             z-index:1;
//             border:1px solid rgba(223,181,87,.55);
//             border-radius:16px;
//             padding:24px;
//             background:#0b0b0b;
//           "
//         >

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               gap:24px;
//               margin-bottom:16px;
//             "
//           >

//             <div>
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 CUSTOMER NAME
//               </div>

//               <div
//                 style="
//                   font-size:22px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(
//                   note.customerName
//                 )}
//               </div>
//             </div>

//             <div style="text-align:right;">
//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:12px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 BOOKING DATE
//               </div>

//               <div
//                 style="
//                   font-size:18px;
//                   font-weight:600;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(
//                   note.bookingDate
//                 )}
//               </div>
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:18px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:flex;
//               justify-content:space-between;
//               align-items:center;
//               gap:20px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:11px;
//                   font-weight:700;
//                   letter-spacing:2px;
//                   margin-bottom:6px;
//                 "
//               >
//                 PACKAGE
//               </div>

//               <div
//                 style="
//                   font-size:25px;
//                   font-weight:700;
//                   color:#ffffff;
//                 "
//               >
//                 ${escapeHtml(
//                   note.packageName
//                 )}
//               </div>

//               <div
//                 style="
//                   font-size:13px;
//                   color:#dfb557;
//                   margin-top:5px;
//                 "
//               >
//                 ${escapeHtml(
//                   note.tier
//                 )}
//               </div>

//             </div>

//             <div
//               style="
//                 color:#dfb557;
//                 font-size:28px;
//                 font-weight:800;
//                 white-space:nowrap;
//               "
//             >
//               ${escapeHtml(
//                 note.packagePrice
//               )}
//             </div>

//           </div>

//           <div
//             style="
//               height:1px;
//               background:rgba(223,181,87,.35);
//               margin:22px 0;
//             "
//           ></div>

//           <div
//             style="
//               display:grid;
//               grid-template-columns:1fr 1fr;
//               gap:28px;
//             "
//           >

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 SERVICES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${servicesHtml}
//               </ul>

//             </div>

//             <div>

//               <div
//                 style="
//                   color:#dfb557;
//                   font-size:13px;
//                   font-weight:700;
//                   letter-spacing:1.5px;
//                   margin-bottom:10px;
//                 "
//               >
//                 FEATURES
//               </div>

//               <ul
//                 style="
//                   margin:0;
//                   padding-left:20px;
//                   color:#ffffff;
//                   font-size:14px;
//                   line-height:1.7;
//                 "
//               >
//                 ${featuresHtml}
//               </ul>

//             </div>

//           </div>

//         </div>

//         <div
//           style="
//             text-align:center;
//             position:relative;
//             z-index:1;
//             margin-top:24px;
//             color:#ffffff;
//             font-size:13px;
//             line-height:1.7;
//           "
//         >

//           <div
//             style="
//               color:#dfb557;
//               font-weight:700;
//               letter-spacing:2px;
//             "
//           >
//             HABESHA FILM PRODUCTION STUDIO
//           </div>

//           <div>
//             ✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ! ✨
//           </div>

//         </div>

//       </div>
//     `;

//     let container = null;

//     try {
//       container =
//         document.createElement(
//           'div'
//         );

//       container.style.position =
//         'fixed';

//       container.style.left =
//         '-100000px';

//       container.style.top = '0';

//       container.style.width =
//         '900px';

//       container.style.zIndex =
//         '-1';

//       container.innerHTML =
//         receiptHtml;

//       document.body.appendChild(
//         container
//       );

//       const receiptElement =
//         container.querySelector(
//           '#receipt-share-card'
//         );

//       await new Promise(
//         (resolve) =>
//           requestAnimationFrame(
//             resolve
//           )
//       );

//       const canvas =
//         await html2canvas(
//           receiptElement,
//           {
//             backgroundColor:
//               '#050505',

//             scale: 2,

//             useCORS: true,

//             logging: false,
//           }
//         );

//       const blob =
//         await new Promise(
//           (resolve) =>
//             canvas.toBlob(
//               resolve,
//               'image/png',
//               1
//             )
//         );

//       if (!blob) {
//         throw new Error(
//           'Could not create receipt image.'
//         );
//       }

//       const file =
//         new File(
//           [blob],
//           `Habesha-Film-Receipt-${Date.now()}.png`,
//           {
//             type: 'image/png',
//           }
//         );

//       if (
//         navigator.share &&
//         (!navigator.canShare ||
//           navigator.canShare({
//             files: [file],
//           }))
//       ) {
//         await navigator.share({
//           title:
//             'Booking Receipt - Habesha Film Production',

//           text:
//             'Booking Receipt - Habesha Film Production',

//           files: [file],
//         });
//       } else {
//         const imageUrl =
//           URL.createObjectURL(
//             blob
//           );

//         const link =
//           document.createElement(
//             'a'
//           );

//         link.href = imageUrl;

//         link.download =
//           file.name;

//         document.body.appendChild(
//           link
//         );

//         link.click();

//         link.remove();

//         URL.revokeObjectURL(
//           imageUrl
//         );

//         alert(
//           'እቲ Receipt ብPNG ስእሊ ተዳልዩ ኣሎ። እቲ ስእሊ ኣብ WhatsApp ወይ ካልእ app ክትልእኮ ትኽእል።'
//         );
//       }
//     } catch (err) {
//       console.error(
//         'Error creating/sharing receipt:',
//         err
//       );

//       if (
//         err?.name !==
//         'AbortError'
//       ) {
//         alert(
//           'Receipt ስእሊ ምፍጣር ወይ ምስዳድ ኣይተዓወተን።'
//         );
//       }
//     } finally {
//       if (
//         container &&
//         container.parentNode
//       ) {
//         container.parentNode.removeChild(
//           container
//         );
//       }
//     }
//   };

//   // =========================================================
//   // SAVE MAIN WEBSITE PACKAGES
//   // =========================================================

//   const handleSaveAndExit =
//     async () => {
//       try {
//         const response =
//           await fetch(
//             PACKAGES_UPDATE_API,
//             {
//               method: 'POST',

//               headers: {
//                 'Content-Type':
//                   'application/json',
//               },

//               body: JSON.stringify(
//                 tempPackages
//               ),
//             }
//           );

//         if (response.ok) {
//           setPackages(
//             tempPackages
//           );

//           alert(
//             'ዳታ ብሰላም ተሰዲዱ ኣብ ኩሉ ዲቫይስ ክረአ እዩ!'
//           );
//         } else {
//           alert(
//             'ሰርቨር ጌጋ ኣለዎ።'
//           );
//         }
//       } catch (err) {
//         console.error(
//           'Error saving to server:',
//           err
//         );

//         alert(
//           'ዳታ ናብ ሰርቨር ምልኣኽ ኣይከኣለን።'
//         );
//       }

//       setIsEditMode(false);
//       setIsEditGateOpen(false);
//     };

//   // =========================================================
//   // CANCEL MAIN EDIT MODE
//   // =========================================================

//   const handleCancelEdit = () => {
//     setTempPackages(
//       packages
//     );

//     setIsEditMode(false);
//     setIsEditGateOpen(false);
//   };

//   // =========================================================
//   // CLOSE BOOKING / NOTEBOOK MODAL
//   // =========================================================

//   const handleCloseBookingModal =
//     () => {
//       setIsBookingModalOpen(
//         false
//       );

//       setSelectedPackage(
//         null
//       );

//       setEditingNoteId(
//         null
//       );
//     };

//   // =========================================================
//   // MAIN PACKAGE EDIT HELPERS
//   // =========================================================

//   const updateTempPackageField = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages(
//       (prev) => ({
//         ...prev,

//         [key]: {
//           ...prev[key],

//           [field]: value,
//         },
//       })
//     );
//   };

//   const updateTempPackageArray = (
//     key,
//     field,
//     value
//   ) => {
//     setTempPackages(
//       (prev) => ({
//         ...prev,

//         [key]: {
//           ...prev[key],

//           [field]: value
//             .split('\n')
//             .map(
//               (item) =>
//                 item.trim()
//             )
//             .filter(
//               (item) =>
//                 item.length > 0
//             ),
//         },
//       })
//     );
//   };

//   // =========================================================
//   // RENDER
//   // =========================================================

//   return (
//     <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#dfb557]/30 selection:text-[#dfb557] overflow-x-hidden flex flex-col justify-between">

//       <Navbar />

//       <div className="flex-grow flex items-center justify-center px-4 py-32">

//         {/* LOGIN */}

//         {!isAuthenticated ? (
//           <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center relative">

//             <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">
//               Secure Access
//             </span>

//             <h2 className="text-2xl md:text-3xl font-serif mb-3 text-zinc-100">
//               Protected Price Page
//             </h2>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4" />

//             <p className="text-xs md:text-sm text-zinc-400 mb-6 font-light">
//               እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።
//             </p>

//             <form
//               onSubmit={
//                 handleLogin
//               }
//               className="space-y-4"
//             >

//               <input
//                 type="password"
//                 placeholder="Enter Passcode"
//                 value={passcode}
//                 onChange={(e) =>
//                   setPasscode(
//                     e.target.value
//                   )
//                 }
//                 className="w-full px-4 py-3 bg-zinc-900 border border-[#dfb557]/50 rounded-xl focus:outline-none focus:border-[#dfb557] text-center tracking-widest text-lg text-zinc-100 placeholder-zinc-500 shadow-inner"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.3em] hover:bg-[#c99f45] transition-all duration-300 disabled:opacity-50 rounded-xl shadow-lg"
//               >
//                 {loading
//                   ? 'Checking...'
//                   : 'Submit'}
//               </button>

//               {error && (
//                 <p className="text-red-400 text-xs mt-2 font-medium">
//                   ጌጋ ፓስኮድ! ደጊምካ ፈትን።
//                 </p>
//               )}

//             </form>
//           </div>
//         ) : isEditMode ? (

//           /* =====================================================
//              ADMIN EDIT MODE
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-2 sm:px-4 py-6 sm:py-12 w-full min-w-0">

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Administration Mode
//             </span>

//             <h1 className="text-3xl font-serif mb-4 text-zinc-100">
//               Edit Packages & Admin Notebook
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-8" />

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-3 sm:p-6 md:p-8 rounded-2xl space-y-6 sm:space-y-8 text-left shadow-2xl min-w-0">

//               {/* =================================================
//                   NOTEBOOK
//               ================================================= */}

//               <div className="bg-zinc-900 rounded-xl border border-[#dfb557]/30 shadow-inner overflow-hidden min-w-0">

//                 {/* NOTEBOOK HEADER */}

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setIsNotebookOpen(
//                       (prev) =>
//                         !prev
//                     )
//                   }
//                   className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-6 text-left hover:bg-zinc-800/60 transition-all"
//                 >

//                   <div className="flex items-start sm:items-center gap-2 sm:gap-3 min-w-0 pr-2">

//                     <span className="text-xs font-bold uppercase text-[#dfb557] tracking-wider">
//                       📝 Admin Notebook & Customer Bookings
//                     </span>

//                     <span className="hidden sm:inline text-[10px] text-zinc-400 font-light">
//                       ዋጋ፣ ኣገልግሎትን ባህርያትን ሒዙ ይዕቀብ
//                     </span>

//                   </div>

//                   <span
//                     className={`flex-shrink-0 text-[#dfb557] text-sm transition-transform duration-300 ${
//                       isNotebookOpen
//                         ? 'rotate-180'
//                         : ''
//                     }`}
//                   >
//                     ▼
//                   </span>

//                 </button>

//                 {/* NOTEBOOK CONTENT */}

//                 {isNotebookOpen && (
//                   <div className="px-3 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-zinc-800">

//                     <div className="space-y-3 sm:space-y-4 max-h-[60vh] sm:max-h-[500px] overflow-y-auto pr-0 sm:pr-1 overscroll-contain">

//                       {notebookList.length ===
//                       0 ? (
//                         <p className="text-zinc-500 text-xs italic text-center py-4">
//                           ዝኾነ ዝተመዝገበ ዓሚል የልቦን። ካብቲ ኣብ ታሕቲ ዘሎ Edit Mode ጌርካ Select ብምባል ክትምዝግብ ትኽእል።
//                         </p>
//                       ) : (
//                         notebookList.map(
//                           (note) => (
//                             <div
//                               key={String(
//                                 getNotebookId(
//                                   note
//                                 )
//                               )}
//                               className="bg-zinc-950 border border-zinc-800 p-3 sm:p-5 rounded-xl space-y-3 sm:space-y-4 shadow-md min-w-0"
//                             >

//                               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3 border-b border-zinc-900 pb-3 min-w-0">

//                                 <div className="flex items-center gap-2 sm:gap-3 flex-wrap min-w-0">

//                                   <span className="text-base font-serif font-bold text-[#dfb557]">
//                                     {
//                                       note.customerName
//                                     }
//                                   </span>

//                                   <span className="text-[10px] bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md text-zinc-300 font-semibold">
//                                     📅 ዕለት:{' '}
//                                     {
//                                       note.bookingDate
//                                     }
//                                   </span>

//                                 </div>

//                                 <span className="text-[9px] text-zinc-500">
//                                   ተመዝጊቡሉ:{' '}
//                                   {
//                                     note.timestamp
//                                   }
//                                 </span>

//                               </div>

//                               <div className="bg-zinc-900/80 border border-[#dfb557]/30 p-3 sm:p-4 rounded-xl space-y-3 sm:space-y-4 min-w-0 overflow-hidden">

//                                 <div className="flex justify-between items-start sm:items-center gap-3">

//                                   <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#dfb557]">
//                                     {note.tier}
//                                   </span>

//                                   <span className="text-lg font-serif font-bold text-[#dfb557]">
//                                     {
//                                       note.packagePrice
//                                     }
//                                   </span>

//                                 </div>

//                                 <h4 className="text-lg sm:text-xl font-serif text-white break-words">
//                                   {
//                                     note.packageName
//                                   }{' '}
//                                   Package
//                                 </h4>

//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-3 border-t border-zinc-800">

//                                   <div className="space-y-2">

//                                     <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                       SERVICES
//                                     </span>

//                                     <ul className="space-y-1 text-xs text-zinc-300">

//                                       {Array.isArray(
//                                         note.packageServices
//                                       ) &&
//                                       note.packageServices
//                                         .length >
//                                         0 ? (
//                                         note.packageServices.map(
//                                           (
//                                             service,
//                                             index
//                                           ) => (
//                                             <li
//                                               key={
//                                                 index
//                                               }
//                                             >
//                                               {
//                                                 service
//                                               }
//                                             </li>
//                                           )
//                                         )
//                                       ) : (
//                                         <li className="text-zinc-500">
//                                           የለን
//                                         </li>
//                                       )}

//                                     </ul>

//                                   </div>

//                                   <div className="space-y-2">

//                                     <span className="text-[10px] text-[#dfb557] font-semibold uppercase block">
//                                       FEATURES
//                                     </span>

//                                     <ul className="space-y-1 text-xs text-zinc-300">

//                                       {Array.isArray(
//                                         note.packageFeatures
//                                       ) &&
//                                       note.packageFeatures
//                                         .length >
//                                         0 ? (
//                                         note.packageFeatures.map(
//                                           (
//                                             feature,
//                                             index
//                                           ) => (
//                                             <li
//                                               key={
//                                                 index
//                                               }
//                                             >
//                                               {
//                                                 feature
//                                               }
//                                             </li>
//                                           )
//                                         )
//                                       ) : (
//                                         <li className="text-zinc-500">
//                                           የለን
//                                         </li>
//                                       )}

//                                     </ul>

//                                   </div>

//                                 </div>

//                               </div>

//                               <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-zinc-900">

//                                 <button
//                                   onClick={() =>
//                                     handleShareReceipt(
//                                       note
//                                     )
//                                   }
//                                   className="w-full px-3 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg text-[10px] uppercase font-semibold transition-all flex items-center justify-center gap-1 min-h-[42px]"
//                                 >
//                                   Share 🔗
//                                 </button>

//                                 <button
//                                   onClick={() =>
//                                     handleEditNoteItem(
//                                       note
//                                     )
//                                   }
//                                   className="w-full px-3 py-2.5 bg-[#dfb557]/20 hover:bg-[#dfb557]/40 text-[#dfb557] rounded-lg text-[10px] uppercase font-semibold transition-all min-h-[42px]"
//                                 >
//                                   Edit
//                                 </button>

//                                 <button
//                                   onClick={() =>
//                                     handleDeleteNote(
//                                       getNotebookId(
//                                         note
//                                       )
//                                     )
//                                   }
//                                   className="w-full px-3 py-2.5 bg-red-950/60 hover:bg-red-900 text-red-300 rounded-lg text-[10px] uppercase font-semibold transition-all min-h-[42px]"
//                                 >
//                                   Delete
//                                 </button>

//                               </div>

//                             </div>
//                           )
//                         )
//                       )}

//                     </div>

//                   </div>
//                 )}

//               </div>

//               {/* =================================================
//                   MAIN WEBSITE PACKAGE EDIT
//               ================================================= */}

//               <div className="pt-2 sm:pt-4">

//                 <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">

//                   <h3 className="text-sm font-bold uppercase text-[#dfb557] tracking-wider">
//                     ⚙️ Edit Website Packages & Test Select
//                   </h3>

//                   <span className="lg:hidden text-[9px] text-zinc-500 uppercase tracking-[0.16em]">
//                     ← Swipe packages →
//                   </span>

//                 </div>

//                 <div className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none pb-4 lg:pb-0 -mx-1 sm:-mx-0 px-1 sm:px-0 overscroll-x-contain">

//                   {Object.keys(
//                     tempPackages
//                   ).map((key) => {
//                     const pkg =
//                       tempPackages[
//                         key
//                       ];

//                     return (
//                       <div
//                         key={key}
//                         className="flex-none w-[86vw] sm:w-[68vw] md:w-[48vw] lg:w-auto snap-start bg-zinc-900 border-2 border-[#dfb557]/40 p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-4 min-w-0"
//                       >

//                         <div className="space-y-3">

//                           {/* TIER */}

//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Tier Title
//                             </label>

//                             <input
//                               value={
//                                 pkg.tier ||
//                                 ''
//                               }
//                               onChange={(
//                                 e
//                               ) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'tier',
//                                   e.target
//                                     .value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-bold"
//                             />
//                           </div>

//                           {/* NAME */}

//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Package Name
//                             </label>

//                             <input
//                               value={
//                                 pkg.name ||
//                                 ''
//                               }
//                               onChange={(
//                                 e
//                               ) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'name',
//                                   e.target
//                                     .value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-zinc-100 font-serif font-bold text-lg"
//                             />
//                           </div>

//                           {/* PRICE */}

//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Price (ዋጋ)
//                             </label>

//                             <input
//                               value={
//                                 pkg.price ||
//                                 ''
//                               }
//                               onChange={(
//                                 e
//                               ) =>
//                                 updateTempPackageField(
//                                   key,
//                                   'price',
//                                   e.target
//                                     .value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-[#dfb557] font-bold"
//                             />
//                           </div>

//                           {/* SERVICES */}

//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Services
//                             </label>

//                             <textarea
//                               rows="5"
//                               value={(
//                                 pkg.services ||
//                                 []
//                               ).join(
//                                 '\n'
//                               )}
//                               onChange={(
//                                 e
//                               ) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'services',
//                                   e.target
//                                     .value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One service per line"
//                             />
//                           </div>

//                           {/* FEATURES */}

//                           <div>
//                             <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
//                               Features
//                             </label>

//                             <textarea
//                               rows="6"
//                               value={(
//                                 pkg.features ||
//                                 []
//                               ).join(
//                                 '\n'
//                               )}
//                               onChange={(
//                                 e
//                               ) =>
//                                 updateTempPackageArray(
//                                   key,
//                                   'features',
//                                   e.target
//                                     .value
//                                 )
//                               }
//                               className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px] text-zinc-300"
//                               placeholder="One feature per line"
//                             />
//                           </div>

//                         </div>

//                         <button
//                           type="button"
//                           onClick={() =>
//                             handleSelectPackageClick(
//                               key
//                             )
//                           }
//                           className="w-full bg-[#dfb557] text-black py-2.5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-[#c99f45] transition-all rounded-xl shadow-md cursor-pointer"
//                         >
//                           Select{' '}
//                           {pkg.name}{' '}
//                           ➔
//                         </button>

//                       </div>
//                     );
//                   })}

//                 </div>

//               </div>

//               {/* SAVE / CANCEL */}

//               <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-4 pt-4 border-t border-zinc-900">

//                 <button
//                   type="button"
//                   onClick={
//                     handleCancelEdit
//                   }
//                   className="w-full sm:w-auto px-6 py-3 bg-zinc-900 text-zinc-300 rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-all"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="button"
//                   onClick={
//                     handleSaveAndExit
//                   }
//                   className="w-full sm:w-auto px-6 py-3 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-bold tracking-widest hover:bg-[#c99f45] transition-all"
//                 >
//                   Save Changes
//                 </button>

//               </div>

//             </div>
//           </div>

//         ) : (

//           /* =====================================================
//              CUSTOMER VIEW
//           ===================================================== */

//           <div className="max-w-7xl mx-auto text-center px-2 sm:px-4 py-6 sm:py-12 w-full min-w-0">

//             <div className="flex justify-end mb-4">

//               {!isEditGateOpen ? (
//                 <div className="flex flex-col items-end">

//                   <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-[#dfb557]/40 shadow-lg">

//                     <input
//                       type="password"
//                       placeholder="Admin Code"
//                       value={
//                         adminPasscode
//                       }
//                       onChange={(e) =>
//                         setAdminPasscode(
//                           e.target.value
//                         )
//                       }
//                       className="bg-transparent text-zinc-100 text-xs px-2 focus:outline-none w-28"
//                     />

//                     <button
//                       type="button"
//                       onClick={
//                         handleEditGateSubmit
//                       }
//                       className="px-3 py-1.5 bg-[#dfb557] text-black rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#c99f45] transition-all"
//                     >
//                       Unlock
//                     </button>

//                   </div>

//                   {adminError && (
//                     <p className="text-red-400 text-[10px] mt-1 font-medium">
//                       Wrong Admin Code!
//                     </p>
//                   )}

//                 </div>
//               ) : (
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setIsEditMode(
//                       true
//                     )
//                   }
//                   className="px-4 py-2 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-semibold tracking-widest shadow-md hover:bg-[#c99f45] transition-all"
//                 >
//                   Enter Edit Mode ⚙️
//                 </button>
//               )}

//             </div>

//             <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] font-medium block mb-2">
//               Investment & Tiers
//             </span>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 text-zinc-100">
//               Our Professional Packages
//             </h1>

//             <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4" />

//             <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto font-light">
//               ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ደረጃታት እቲ ንደለይዎ ምረጹ።
//             </p>

//             <div className="flex lg:grid lg:grid-cols-4 gap-5 lg:gap-6 text-left overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none pb-5 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-thin scrollbar-thumb-[#dfb557]/50 scrollbar-track-zinc-900">

//               {Object.keys(
//                 packages
//               ).map((key) => {
//                 const pkg =
//                   packages[key];

//                 return (
//                   <div
//                     key={key}
//                     className={`flex-none w-[82vw] sm:w-[65vw] md:w-[45vw] lg:w-auto snap-start bg-zinc-950/90 border-2 ${
//                       key === 'gold'
//                         ? 'border-[#dfb557]'
//                         : 'border-[#dfb557]/50'
//                     } p-6 sm:p-8 rounded-2xl shadow-2xl flex flex-col justify-between relative`}
//                   >

//                     {key === 'gold' && (
//                       <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold tracking-[0.3em] px-3 py-1 rounded-full shadow-md">
//                         {pkg.tier}
//                       </span>
//                     )}

//                     <div>

//                       <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">
//                         {key === 'gold'
//                           ? 'Exclusive'
//                           : pkg.tier}
//                       </span>

//                       <h3 className="text-xl sm:text-2xl font-serif mt-1 mb-2 text-zinc-100 break-words">
//                         {pkg.name}
//                       </h3>

//                       <p className="text-2xl sm:text-3xl font-serif font-bold text-[#dfb557] mb-6 break-words">
//                         {pkg.price}
//                       </p>

//                       {pkg.services &&
//                         pkg.services.length >
//                           0 && (
//                           <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 font-light border-b border-zinc-900 pb-4">

//                             {pkg.services.map(
//                               (
//                                 service,
//                                 index
//                               ) => (
//                                 <p
//                                   key={
//                                     index
//                                   }
//                                 >
//                                   {
//                                     service
//                                   }
//                                 </p>
//                               )
//                             )}

//                           </div>
//                         )}

//                       <ul className="text-xs sm:text-sm text-zinc-300 space-y-3 mb-6 font-light">

//                         {(
//                           pkg.features ||
//                           []
//                         ).map(
//                           (
//                             feature,
//                             index
//                           ) => (
//                             <li
//                               key={
//                                 index
//                               }
//                               className="flex items-center gap-2"
//                             >
//                               {
//                                 feature
//                               }
//                             </li>
//                           )
//                         )}

//                       </ul>

//                     </div>

//                   </div>
//                 );
//               })}

//             </div>

//             <div className="lg:hidden flex items-center justify-center gap-2 mt-2 text-[9px] text-zinc-500 uppercase tracking-[0.2em]">
//               <span>←</span>
//               <span>
//                 Swipe to view packages
//               </span>
//               <span>→</span>
//             </div>

//           </div>
//         )}

//       </div>

//       {/* =======================================================
//           NOTEBOOK / EDIT MODAL
//       ======================================================= */}

//       {isBookingModalOpen &&
//         selectedPackage && (
//           <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto overscroll-contain">

//             <div className="bg-zinc-950 border border-[#dfb557]/40 p-4 sm:p-6 md:p-8 rounded-2xl max-w-5xl w-full max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)] overflow-y-auto shadow-2xl space-y-5 sm:space-y-6 my-0 sm:my-8">

//               <div className="flex justify-between items-start gap-3 border-b border-zinc-900 pb-3">

//                 <div>

//                   <h3 className="text-base sm:text-lg font-serif text-[#dfb557] leading-snug">
//                     {editingNoteId !==
//                     null
//                       ? '✏️ Edit Admin Notebook'
//                       : 'ዝርዝር መረጻ ንዓሚል ምዝገባ'}
//                   </h3>

//                   <span className="text-[10px] text-zinc-500">
//                     {editingNoteId !==
//                     null
//                       ? 'ዝርዝር ናይዚ Notebook ጥራሕ እዩ ዝቕየር'
//                       : 'Selected package is an independent copy'}
//                   </span>

//                 </div>

//                 <button
//                   type="button"
//                   onClick={
//                     handleCloseBookingModal
//                   }
//                   className="text-zinc-400 hover:text-white text-sm font-bold"
//                 >
//                   ✕
//                 </button>

//               </div>

//               <form
//                 onSubmit={
//                   handleBookingSubmit
//                 }
//                 className="space-y-5"
//               >

//                 {/* CUSTOMER NAME + DATE */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ስም ዓሚል (Customer Name)
//                     </label>

//                     <input
//                       type="text"
//                       required
//                       placeholder="ኣብነት: ኣቤል ዳዊት"
//                       value={
//                         customerName
//                       }
//                       onChange={(e) =>
//                         setCustomerName(
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       ዕለት መደብ (Booking Date)
//                     </label>

//                     <input
//                       type="date"
//                       required
//                       value={
//                         bookingDate
//                       }
//                       onChange={(e) =>
//                         setBookingDate(
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* PACKAGE NAME + TIER */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       Package Name
//                     </label>

//                     <input
//                       type="text"
//                       value={
//                         selectedPackage.name ||
//                         ''
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageField(
//                           'name',
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 font-bold focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                   <div>

//                     <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                       Tier
//                     </label>

//                     <input
//                       type="text"
//                       value={
//                         selectedPackage.tier ||
//                         ''
//                       }
//                       onChange={(e) =>
//                         updateSelectedPackageField(
//                           'tier',
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-100 font-bold focus:outline-none focus:border-[#dfb557]"
//                     />

//                   </div>

//                 </div>

//                 {/* PRICE */}

//                 <div>

//                   <label className="text-[10px] uppercase text-zinc-400 font-semibold block mb-1">
//                     ዋጋ (Customizable Price)
//                   </label>

//                   <input
//                     type="text"
//                     required
//                     value={
//                       customizedPrice
//                     }
//                     onChange={(e) => {
//                       setCustomizedPrice(
//                         e.target.value
//                       );

//                       updateSelectedPackageField(
//                         'price',
//                         e.target.value
//                       );
//                     }}
//                     className="w-full min-w-0 bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-[#dfb557] font-bold focus:outline-none focus:border-[#dfb557]"
//                   />

//                 </div>

//                 {/* SERVICES + FEATURES */}

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

//                   {/* SERVICES */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-3 sm:p-5 min-w-0">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         SERVICES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage
//                           .services
//                           ?.length ||
//                           0}{' '}
//                         items
//                       </span>

//                     </div>

//                     <textarea
//                       rows="12"
//                       value={(
//                         selectedPackage.services ||
//                         []
//                       ).join(
//                         '\n'
//                       )}
//                       onChange={(e) =>
//                         updateSelectedPackageArray(
//                           'services',
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-950 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-[#dfb557] resize-y"
//                       placeholder="One service per line"
//                     />

//                     <p className="text-[9px] text-zinc-500 mt-2">
//                       ነፍሲ ወከፍ Service ኣብ ሓደ መስመር ጽሓፍ።
//                     </p>

//                   </div>

//                   {/* FEATURES */}

//                   <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-3 sm:p-5 min-w-0">

//                     <div className="flex justify-between items-center mb-3">

//                       <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                         FEATURES
//                       </h4>

//                       <span className="text-[9px] text-zinc-500">
//                         {selectedPackage
//                           .features
//                           ?.length ||
//                           0}{' '}
//                         items
//                       </span>

//                     </div>

//                     <textarea
//                       rows="12"
//                       value={(
//                         selectedPackage.features ||
//                         []
//                       ).join(
//                         '\n'
//                       )}
//                       onChange={(e) =>
//                         updateSelectedPackageArray(
//                           'features',
//                           e.target.value
//                         )
//                       }
//                       className="w-full min-w-0 bg-zinc-950 border border-zinc-700 p-3 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-[#dfb557] resize-y"
//                       placeholder="One feature per line"
//                     />

//                     <p className="text-[9px] text-zinc-500 mt-2">
//                       ነፍሲ ወከፍ Feature ኣብ ሓደ መስመር ጽሓፍ።
//                     </p>

//                   </div>

//                 </div>

//                 {/* PREVIEW */}

//                 <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 sm:p-5">

//                   <div className="flex justify-between items-center mb-4">

//                     <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#dfb557]">
//                       Notebook Preview
//                     </h4>

//                     <span className="text-[9px] text-zinc-500">
//                       እዚ ናይ Notebook copy ጥራሕ እዩ
//                     </span>

//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

//                     <div>
//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Customer
//                       </p>

//                       <p className="text-sm text-white font-semibold">
//                         {customerName ||
//                           '—'}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Date
//                       </p>

//                       <p className="text-sm text-white">
//                         {bookingDate ||
//                           '—'}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Package
//                       </p>

//                       <p className="text-sm text-white font-semibold">
//                         {selectedPackage.name ||
//                           '—'}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-[9px] text-zinc-500 uppercase mb-1">
//                         Price
//                       </p>

//                       <p className="text-sm text-[#dfb557] font-bold">
//                         {customizedPrice ||
//                           '—'}
//                       </p>
//                     </div>

//                   </div>

//                 </div>

//                 {/* SAVE / CANCEL */}

//                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 border-t border-zinc-900">

//                   <button
//                     type="button"
//                     onClick={
//                       handleCloseBookingModal
//                     }
//                     className="w-full sm:w-1/2 bg-zinc-900 text-zinc-300 py-3 rounded-xl text-xs uppercase font-bold hover:bg-zinc-800 transition-all min-h-[44px]"
//                   >
//                     ሰርዝ
//                   </button>

//                   <button
//                     type="submit"
//                     className="w-full sm:w-1/2 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold hover:bg-[#c99f45] transition-all shadow-lg min-h-[44px]"
//                   >
//                     {editingNoteId !==
//                     null
//                       ? 'Update / Save'
//                       : 'ኣቐመጥ (Save)'}
//                   </button>

//                 </div>

//               </form>

//             </div>
//           </div>
//         )}

//       <Footer />

//     </div>
//   );
// }

// export default Price;

import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
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

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const [customerName, setCustomerName] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [customizedPrice, setCustomizedPrice] = useState('');

  const [editingNoteId, setEditingNoteId] = useState(null);

  const [notebookList, setNotebookList] = useState([]);
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);

  const [isSavingPackages, setIsSavingPackages] = useState(false);
  const [packageSaveError, setPackageSaveError] = useState('');

  // =========================================================
  // API
  // =========================================================

  const API_BASE =
    'https://habesha-film-production-server.onrender.com';

  const NOTEBOOK_API = `${API_BASE}/api/notebook`;
  const PACKAGES_API = `${API_BASE}/api/packages`;
  const PACKAGES_UPDATE_API = `${API_BASE}/api/packages/update`;
  const AUTH_API = `${API_BASE}/api/auth/verify-passcode`;

  // =========================================================
  // DEFAULT PACKAGES
  // =========================================================

  const defaultPackages = {
    premium: {
      tier: 'Ultimate VIP',
      name: 'Premium',
      price: '$1,000+',
      services: [
        '• ቪድዮ ቀረጻ (Unlimited)',
        '• ክልተ ኤክስፐርት ካሜራማን',
        '• Cinematic Color Grading & VFX',
      ],
      features: [
        '✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)',
        '✓ ክልተ ኤክስፐርት ካሜራማን',
        '✓ Cinematic Color Grading & VFX',
        '🎁 ቦናስ: ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር',
      ],
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
        '• ኩሉ ሶፍት ኮፒ (All Soft Copy)',
      ],
      features: [
        '✓ 800 ፎቶዎች (10×15)',
        '✓ 2 ላሚኔትድ ፎቶ (30×90 & 30×60)',
        '✓ 2 ሳይን ቦርድ (30×45)',
        '✓ 3 ቦርድ (50×80, 40×60, 30×45)',
        '✓ 400 ምስጋና ካርድ (Thank You Card)',
        '✓ 8 ዩኤስቢ ፍላሽ (64 GB)',
        '✓ 2 ባነር',
        '✓ 2 ራማ / ቆብዕ (Cap)',
      ],
    },

    silver: {
      tier: 'Advanced',
      name: 'Silver',
      price: '240,000',
      services: [
        '• ስቱዲዮ / ኣብ መስክ (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
        '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
        '• መዓልቲ መርዓ (4 ካሜራ: 3 ቪድዮ፣ 1 ፎቶ)',
        '• ሓማውቲ (1 ቪድዮ፣ 1 ፎቶ)',
      ],
      features: [
        '✓ 500 ፎቶዎች (10×15)',
        '✓ 2 ላሚኔትድ ፎቶ (30×90 & 40×60)',
        '✓ 1 ሳይን ቦርድ (30×45)',
        '✓ 2 ቦርድ (50×80 & 40×60)',
        '✓ 250 ምስጋና ካርድ (Thank You Card)',
        '✓ 6 ዩኤስቢ ፍላሽ (64 GB)',
        '✓ 2 ባነር',
        '✓ 2 ራማ / ቆብዕ (Cap)',
      ],
    },

    standard: {
      tier: 'Standard',
      name: 'Standard',
      price: '190,000',
      services: [
        '• ስቱዲዮ / ኣብ መስክ (1 ቪድዮ፣ 1 ፎቶ)',
        '• ቃል ኪዳን (2 ካሜራ: 1 ቪድዮ፣ 1 ፎቶ)',
        '• መዓልቲ መርዓ (3 ካሜራ: 2 ቪድዮ፣ 1 ፎቶ)',
        '• ሓማውቲ (2 ካሜራ: 1 ፎቶ፣ 1 ቪድዮ)',
      ],
      features: [
        '✓ 300 ፎቶዎች (10×15)',
        '✓ 1 ላሚኔትድ ፎቶ (30×90)',
        '✓ 1 ሳይን ቦርድ (30×45)',
        '✓ 1 ቦርድ (50×80)',
        '✓ 200 ምስጋና ካርድ (Thank You Card)',
        '✓ 4 ዩኤስቢ ፍላሽ (64 GB)',
        '✓ 2 ባነር',
        '✓ 2 ራማ / ቆብዕ (Cap)',
      ],
    },
  };

  const [packages, setPackages] = useState(defaultPackages);
  const [tempPackages, setTempPackages] = useState(defaultPackages);

  // =========================================================
  // PACKAGE NORMALIZER
  // =========================================================

  const normalizePackage = (pkg, fallback) => {
    return {
      ...(fallback || {}),
      ...(pkg || {}),
      tier:
        typeof pkg?.tier === 'string'
          ? pkg.tier
          : fallback?.tier || '',
      name:
        typeof pkg?.name === 'string'
          ? pkg.name
          : fallback?.name || '',
      price:
        typeof pkg?.price === 'string'
          ? pkg.price
          : fallback?.price || '',
      services: Array.isArray(pkg?.services)
        ? pkg.services
        : fallback?.services || [],
      features: Array.isArray(pkg?.features)
        ? pkg.features
        : fallback?.features || [],
    };
  };

  const normalizePackagesResponse = (data) => {
    let source = data;

    if (data?.packages) {
      source = data.packages;
    } else if (data?.data) {
      source = data.data;
    } else if (data?.result) {
      source = data.result;
    }

    return {
      premium: normalizePackage(
        source?.premium,
        defaultPackages.premium
      ),

      gold: normalizePackage(
        source?.gold,
        defaultPackages.gold
      ),

      silver: normalizePackage(
        source?.silver,
        defaultPackages.silver
      ),

      standard: normalizePackage(
        source?.standard,
        defaultPackages.standard
      ),
    };
  };

  // =========================================================
  // NOTEBOOK HELPERS
  // =========================================================

  const normalizeNotebook = (note) => {
    if (!note || typeof note !== 'object') {
      return null;
    }

    const normalizedId =
      note.id ??
      note._id?.$oid ??
      note._id ??
      note.id?.$oid ??
      null;

    return {
      ...note,
      id: normalizedId,
      _id: note._id ?? normalizedId,

      customerName: note.customerName || '',
      bookingDate: note.bookingDate || '',
      packageName: note.packageName || '',
      packagePrice: note.packagePrice || '',
      tier: note.tier || '',

      packageServices: Array.isArray(note.packageServices)
        ? note.packageServices
        : [],

      packageFeatures: Array.isArray(note.packageFeatures)
        ? note.packageFeatures
        : [],

      timestamp:
        note.timestamp ||
        note.createdAt ||
        new Date().toLocaleString(),
    };
  };

  const extractNotebookArray = (data) => {
    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray(data?.notes)) {
      return data.notes;
    }

    if (Array.isArray(data?.notebooks)) {
      return data.notebooks;
    }

    if (Array.isArray(data?.bookings)) {
      return data.bookings;
    }

    if (Array.isArray(data?.data)) {
      return data.data;
    }

    if (Array.isArray(data?.result)) {
      return data.result;
    }

    if (data?.note) {
      return [data.note];
    }

    return [];
  };

  const getNotebookId = (note) => {
    return (
      note?.id ??
      note?._id?.$oid ??
      note?._id ??
      note?.id?.$oid ??
      null
    );
  };

  // =========================================================
  // LOAD PACKAGES + NOTEBOOK
  // =========================================================

  useEffect(() => {
    let mounted = true;

    const loadPackages = async () => {
      try {
        const response = await fetch(PACKAGES_API, {
          method: 'GET',
          cache: 'no-store',
          headers: {
            Accept: 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            Pragma: 'no-cache',
          },
        });

        if (!response.ok) {
          throw new Error(
            `Packages API error: ${response.status}`
          );
        }

        const data = await response.json();

        console.log('Packages GET response:', data);

        const normalizedPackages =
          normalizePackagesResponse(data);

        if (mounted) {
          setPackages(normalizedPackages);
          setTempPackages(normalizedPackages);
        }
      } catch (err) {
        console.error(
          'Failed to load packages:',
          err
        );

        /*
          እንተ GET ኣይሰርሐን፣ default packages
          ኣይንሓድስን። ዘሎ state ንሕሉ።
        */
      }
    };

    const loadNotebook = async () => {
      try {
        const response = await fetch(NOTEBOOK_API, {
          method: 'GET',
          cache: 'no-store',
          headers: {
            Accept: 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            Pragma: 'no-cache',
          },
        });

        if (!response.ok) {
          throw new Error(
            `Notebook API error: ${response.status}`
          );
        }

        const data = await response.json();

        const notes = extractNotebookArray(data)
          .map(normalizeNotebook)
          .filter(Boolean);

        if (mounted) {
          setNotebookList(notes);
        }

        console.log('Notebook loaded:', notes);
      } catch (err) {
        console.error(
          'Failed to load notebook:',
          err
        );
      }
    };

    const loadAuth = () => {
      const authData =
        localStorage.getItem('priceAuthData');

      if (!authData) {
        return;
      }

      try {
        const parsed = JSON.parse(authData);

        if (
          parsed?.expiry &&
          Date.now() < Number(parsed.expiry)
        ) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem(
            'priceAuthData'
          );
          setIsAuthenticated(false);
        }
      } catch {
        localStorage.removeItem(
          'priceAuthData'
        );
      }
    };

    loadPackages();
    loadNotebook();
    loadAuth();

    return () => {
      mounted = false;
    };
  }, []);

  // =========================================================
  // LOGIN
  // =========================================================

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    try {
      const response = await fetch(AUTH_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          passcode: passcode.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data?.success) {
        setIsAuthenticated(true);

        const expiryDuration =
          10 * 60 * 1000;

        localStorage.setItem(
          'priceAuthData',
          JSON.stringify({
            value: 'true',
            expiry: Date.now() + expiryDuration,
          })
        );

        setPasscode('');
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(
        'Error verifying passcode:',
        err
      );

      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // ADMIN GATE
  // =========================================================

  const handleEditGateSubmit = (e) => {
    e.preventDefault();

    if (adminPasscode.trim() === 'ADMIN2026') {
      setAdminError(false);
      setAdminPasscode('');
      setIsEditGateOpen(true);
      setIsEditMode(true);

      /*
        ናይ database ዝመጸ packages ናብ temp ንሕድሶ፣
        እንተ cancel ከኣ ናብ እቲ saved version ክንምለስ።
      */
      setTempPackages(
        JSON.parse(JSON.stringify(packages))
      );
    } else {
      setAdminError(true);
    }
  };

  // =========================================================
  // PACKAGE FIELD UPDATE
  // =========================================================

  const updateTempPackageField = (
    key,
    field,
    value
  ) => {
    setTempPackages((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value,
      },
    }));
  };

  const updateTempPackageArray = (
    key,
    field,
    value
  ) => {
    const arrayValue = String(value)
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean);

    setTempPackages((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: arrayValue,
      },
    }));
  };

  // =========================================================
  // SAVE WEBSITE PACKAGES
  // =========================================================

  const handleSaveAndExit = async () => {
    if (isSavingPackages) {
      return;
    }

    setIsSavingPackages(true);
    setPackageSaveError('');

    try {
      /*
        Deep copy ንልኣኽ። React state reference ቀጥታ
        ከይተላእከ ንሕዶር።
      */
      const payload = JSON.parse(
        JSON.stringify(tempPackages)
      );

      console.log(
        'Saving packages to MongoDB:',
        payload
      );

      const response = await fetch(
        PACKAGES_UPDATE_API,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Cache-Control': 'no-cache',
          },
          body: JSON.stringify(payload),
        }
      );

      let data = null;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      console.log(
        'Packages UPDATE response:',
        response.status,
        data
      );

      if (!response.ok) {
        throw new Error(
          data?.message ||
          `Package update failed: ${response.status}`
        );
      }

      /*
        Backend ዝልእኾ packages እንተሎ
        እቲ saved version ንጥቀመሉ።
      */
      const returnedPackages =
        data?.packages ||
        data?.data?.packages ||
        data?.data ||
        null;

      const finalPackages =
        returnedPackages &&
        typeof returnedPackages === 'object' &&
        !Array.isArray(returnedPackages)
          ? normalizePackagesResponse(
              returnedPackages
            )
          : normalizePackagesResponse(
              payload
            );

      /*
        ኣገዳሲ:
        ብቐዳምነት packages ንtempPackages እውን
        ንሕድሶ። ምኽንያቱ Cancel ወይ Edit ድሕሪ Save
        እቲ old state ከይተርፍ።
      */
      setPackages(finalPackages);
      setTempPackages(
        JSON.parse(JSON.stringify(finalPackages))
      );

      alert(
        '✅ ዳታ ብሰላም ተዓቂቡ። ካብ MongoDB እውን ክምለስ እዩ።'
      );

      /*
        Edit Mode ካብ successful save ጥራይ
        ንዕጾ።
      */
      setIsEditMode(false);
      setIsEditGateOpen(false);
    } catch (err) {
      console.error(
        'Error saving packages:',
        err
      );

      setPackageSaveError(
        err?.message ||
        'Package data could not be saved.'
      );

      /*
        ኣብ SAVE ERROR Edit Mode ኣይንዕጾን።
        እዚ እዩ ካብ ቀደም ዝነበረ ዓቢ ጉዳይ።
      */
      alert(
        `❌ Save ኣይተዓወተን።\n\n${
          err?.message || 'Server error'
        }`
      );
    } finally {
      setIsSavingPackages(false);
    }
  };

  // =========================================================
  // CANCEL EDIT
  // =========================================================

  const handleCancelEdit = () => {
    setTempPackages(
      JSON.parse(JSON.stringify(packages))
    );

    setPackageSaveError('');
    setIsEditMode(false);
    setIsEditGateOpen(false);
  };

  // =========================================================
  // SELECT PACKAGE FOR NOTEBOOK
  // =========================================================

  const handleSelectPackageClick = (pkgKey) => {
    if (!isEditMode) {
      return;
    }

    const pkg = tempPackages?.[pkgKey];

    if (!pkg) {
      console.error(
        'Package not found:',
        pkgKey
      );
      return;
    }

    const independentPackageCopy = {
      tier: pkg.tier || '',
      name: pkg.name || '',
      price: pkg.price || '',
      services: Array.isArray(pkg.services)
        ? [...pkg.services]
        : [],
      features: Array.isArray(pkg.features)
        ? [...pkg.features]
        : [],
    };

    setSelectedPackage(
      independentPackageCopy
    );

    setCustomerName('');
    setBookingDate('');
    setCustomizedPrice(
      independentPackageCopy.price
    );

    setEditingNoteId(null);
    setIsBookingModalOpen(true);
  };

  // =========================================================
  // NOTEBOOK MODAL FIELD HELPERS
  // =========================================================

  const updateSelectedPackageField = (
    field,
    value
  ) => {
    setSelectedPackage((prev) => {
      if (!prev) {
        return prev;
      }

      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const updateSelectedPackageArray = (
    field,
    value
  ) => {
    const arrayValue = String(value)
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean);

    setSelectedPackage((prev) => {
      if (!prev) {
        return prev;
      }

      return {
        ...prev,
        [field]: arrayValue,
      };
    });
  };

  // =========================================================
  // SAVE NOTEBOOK
  // =========================================================

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    if (
      !customerName.trim() ||
      !bookingDate ||
      !selectedPackage
    ) {
      return;
    }

    const currentEditingId =
      editingNoteId !== null
        ? editingNoteId
        : null;

    const existingNote =
      currentEditingId !== null
        ? notebookList.find(
            (item) =>
              String(
                getNotebookId(item)
              ) ===
              String(currentEditingId)
          )
        : null;

    const bookingPayload = {
      customerName:
        customerName.trim(),

      bookingDate,

      packageName:
        selectedPackage.name || '',

      packagePrice:
        customizedPrice || '',

      tier:
        selectedPackage.tier || '',

      packageServices:
        Array.isArray(
          selectedPackage.services
        )
          ? [...selectedPackage.services]
          : [],

      packageFeatures:
        Array.isArray(
          selectedPackage.features
        )
          ? [...selectedPackage.features]
          : [],

      timestamp:
        existingNote?.timestamp ||
        new Date().toLocaleString(),
    };

    try {
      if (currentEditingId !== null) {
        const response = await fetch(
          `${NOTEBOOK_API}/${encodeURIComponent(
            currentEditingId
          )}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type':
                'application/json',
              Accept:
                'application/json',
            },
            body: JSON.stringify(
              bookingPayload
            ),
          }
        );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data?.message ||
            `Failed to update notebook: ${response.status}`
          );
        }

        const updatedNote =
          normalizeNotebook(
            data?.note ||
              data?.notebook ||
              data?.data ||
              data
          );

        if (!updatedNote) {
          throw new Error(
            'Updated notebook response is empty.'
          );
        }

        setNotebookList((prev) =>
          prev.map((item) =>
            String(
              getNotebookId(item)
            ) ===
            String(currentEditingId)
              ? updatedNote
              : item
          )
        );

        alert(
          '✅ Notebook ብሰላም ተስተካኺሉ።'
        );
      } else {
        const response = await fetch(
          NOTEBOOK_API,
          {
            method: 'POST',
            headers: {
              'Content-Type':
                'application/json',
              Accept:
                'application/json',
            },
            body: JSON.stringify(
              bookingPayload
            ),
          }
        );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data?.message ||
            `Failed to save notebook: ${response.status}`
          );
        }

        const savedNote =
          normalizeNotebook(
            data?.note ||
              data?.notebook ||
              data?.data ||
              data
          );

        if (!savedNote) {
          throw new Error(
            'Saved notebook response is empty.'
          );
        }

        setNotebookList((prev) => [
          savedNote,
          ...prev,
        ]);

        alert(
          '✅ Notebook ኣብ MongoDB ብሰላም ተዓቂቡ።'
        );
      }

      setIsBookingModalOpen(false);
      setSelectedPackage(null);
      setEditingNoteId(null);
    } catch (err) {
      console.error(
        'Notebook save error:',
        err
      );

      alert(
        `❌ Notebook ምዕቃብ ኣይተዓወተን።\n\n${
          err?.message || 'Server error'
        }`
      );
    }
  };

  // =========================================================
  // EDIT NOTEBOOK
  // =========================================================

  const handleEditNoteItem = (note) => {
    const foundKey =
      Object.keys(packages).find(
        (key) =>
          packages[key]?.name ===
          note.packageName
      );

    const pkg =
      packages[foundKey] ||
      packages.gold;

    const copy = {
      tier:
        note.tier ||
        pkg?.tier ||
        '',

      name:
        note.packageName ||
        pkg?.name ||
        '',

      price:
        note.packagePrice ||
        pkg?.price ||
        '',

      services:
        Array.isArray(
          note.packageServices
        )
          ? [...note.packageServices]
          : Array.isArray(pkg?.services)
          ? [...pkg.services]
          : [],

      features:
        Array.isArray(
          note.packageFeatures
        )
          ? [...note.packageFeatures]
          : Array.isArray(pkg?.features)
          ? [...pkg.features]
          : [],
    };

    setSelectedPackage(copy);
    setCustomerName(
      note.customerName || ''
    );
    setBookingDate(
      note.bookingDate || ''
    );
    setCustomizedPrice(
      note.packagePrice || ''
    );

    setEditingNoteId(
      getNotebookId(note)
    );

    setIsBookingModalOpen(true);
  };

  // =========================================================
  // DELETE NOTEBOOK
  // =========================================================

  const handleDeleteNote = async (id) => {
    if (!id) {
      alert(
        'Notebook ID ኣይተረኽበን።'
      );
      return;
    }

    const confirmed =
      window.confirm(
        'እዚ Notebook ብርግጸኝነት ክትድምስሶ ትደሊዶ?'
      );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        `${NOTEBOOK_API}/${encodeURIComponent(
          id
        )}`,
        {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
          `Delete failed: ${response.status}`
        );
      }

      setNotebookList((prev) =>
        prev.filter(
          (note) =>
            String(
              getNotebookId(note)
            ) !== String(id)
        )
      );

      alert(
        '✅ Notebook ተደምሲሱ።'
      );
    } catch (err) {
      console.error(
        'Delete notebook error:',
        err
      );

      alert(
        `❌ Notebook ምድምሳስ ኣይተዓወተን።\n\n${
          err?.message || 'Server error'
        }`
      );
    }
  };

  // =========================================================
  // CLOSE NOTEBOOK MODAL
  // =========================================================

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedPackage(null);
    setEditingNoteId(null);
  };

  // =========================================================
  // ESCAPE HTML
  // =========================================================

  const escapeHtml = (value) =>
    String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

  // =========================================================
  // SHARE RECEIPT
  // =========================================================

  const handleShareReceipt = async (
    note
  ) => {
    const servicesHtml =
      Array.isArray(
        note.packageServices
      ) &&
      note.packageServices.length
        ? note.packageServices
            .map(
              (service) =>
                `<li>${escapeHtml(
                  service
                )}</li>`
            )
            .join('')
        : '<li>ኣገልግሎት የለን</li>';

    const featuresHtml =
      Array.isArray(
        note.packageFeatures
      ) &&
      note.packageFeatures.length
        ? note.packageFeatures
            .map(
              (feature) =>
                `<li>${escapeHtml(
                  feature
                )}</li>`
            )
            .join('')
        : '<li>የለን</li>';

    const receiptHtml = `
      <div
        id="receipt-share-card"
        style="
          width:900px;
          box-sizing:border-box;
          background:#050505;
          color:#ffffff;
          padding:42px;
          font-family:Arial,'Noto Sans Ethiopic',sans-serif;
          border:4px solid #dfb557;
          border-radius:24px;
          position:relative;
          overflow:hidden;
        "
      >
        <div
          style="
            position:absolute;
            inset:14px;
            border:1px solid rgba(223,181,87,.45);
            border-radius:16px;
          "
        ></div>

        <div
          style="
            text-align:center;
            position:relative;
            z-index:1;
          "
        >
          <div
            style="
              color:#dfb557;
              font-size:18px;
              font-weight:700;
              letter-spacing:5px;
              margin-bottom:10px;
            "
          >
            HABESHA FILM PRODUCTION
          </div>

          <div
            style="
              color:#ffffff;
              font-size:28px;
              font-weight:700;
              margin-bottom:8px;
            "
          >
            BOOKING RECEIPT
          </div>

          <div
            style="
              width:90px;
              height:3px;
              background:#dfb557;
              margin:0 auto 26px;
            "
          ></div>
        </div>

        <div
          style="
            position:relative;
            z-index:1;
            border:1px solid rgba(223,181,87,.55);
            border-radius:16px;
            padding:24px;
            background:#0b0b0b;
          "
        >
          <div
            style="
              display:flex;
              justify-content:space-between;
              gap:24px;
              margin-bottom:16px;
            "
          >
            <div>
              <div
                style="
                  color:#dfb557;
                  font-size:12px;
                  font-weight:700;
                  margin-bottom:6px;
                "
              >
                CUSTOMER NAME
              </div>

              <div
                style="
                  font-size:22px;
                  font-weight:700;
                "
              >
                ${escapeHtml(
                  note.customerName
                )}
              </div>
            </div>

            <div style="text-align:right;">
              <div
                style="
                  color:#dfb557;
                  font-size:12px;
                  font-weight:700;
                  margin-bottom:6px;
                "
              >
                BOOKING DATE
              </div>

              <div
                style="
                  font-size:18px;
                  font-weight:600;
                "
              >
                ${escapeHtml(
                  note.bookingDate
                )}
              </div>
            </div>
          </div>

          <div
            style="
              height:1px;
              background:rgba(223,181,87,.35);
              margin:18px 0;
            "
          ></div>

          <div
            style="
              display:flex;
              justify-content:space-between;
              gap:20px;
            "
          >
            <div>
              <div
                style="
                  color:#dfb557;
                  font-size:11px;
                  font-weight:700;
                  margin-bottom:6px;
                "
              >
                PACKAGE
              </div>

              <div
                style="
                  font-size:25px;
                  font-weight:700;
                "
              >
                ${escapeHtml(
                  note.packageName
                )}
              </div>

              <div
                style="
                  font-size:13px;
                  color:#dfb557;
                  margin-top:5px;
                "
              >
                ${escapeHtml(
                  note.tier
                )}
              </div>
            </div>

            <div
              style="
                color:#dfb557;
                font-size:28px;
                font-weight:800;
              "
            >
              ${escapeHtml(
                note.packagePrice
              )}
            </div>
          </div>

          <div
            style="
              height:1px;
              background:rgba(223,181,87,.35);
              margin:22px 0;
            "
          ></div>

          <div
            style="
              display:grid;
              grid-template-columns:1fr 1fr;
              gap:28px;
            "
          >
            <div>
              <div
                style="
                  color:#dfb557;
                  font-size:13px;
                  font-weight:700;
                  margin-bottom:10px;
                "
              >
                SERVICES
              </div>

              <ul
                style="
                  margin:0;
                  padding-left:20px;
                  font-size:14px;
                  line-height:1.7;
                "
              >
                ${servicesHtml}
              </ul>
            </div>

            <div>
              <div
                style="
                  color:#dfb557;
                  font-size:13px;
                  font-weight:700;
                  margin-bottom:10px;
                "
              >
                FEATURES
              </div>

              <ul
                style="
                  margin:0;
                  padding-left:20px;
                  font-size:14px;
                  line-height:1.7;
                "
              >
                ${featuresHtml}
              </ul>
            </div>
          </div>
        </div>

        <div
          style="
            text-align:center;
            position:relative;
            z-index:1;
            margin-top:24px;
            font-size:13px;
            line-height:1.7;
          "
        >
          <div
            style="
              color:#dfb557;
              font-weight:700;
            "
          >
            HABESHA FILM PRODUCTION STUDIO
          </div>

          <div>
            ✨ መጻኢ ፕሮጀክትታትኩም ብሉጽ ብዝኾነ ኣገባብ ነሰርሕ! ✨
          </div>
        </div>
      </div>
    `;

    let container = null;

    try {
      container =
        document.createElement('div');

      container.style.position = 'fixed';
      container.style.left = '-100000px';
      container.style.top = '0';
      container.style.width = '900px';
      container.style.zIndex = '-1';

      container.innerHTML =
        receiptHtml;

      document.body.appendChild(
        container
      );

      const receiptElement =
        container.querySelector(
          '#receipt-share-card'
        );

      await new Promise((resolve) =>
        requestAnimationFrame(resolve)
      );

      const canvas =
        await html2canvas(
          receiptElement,
          {
            backgroundColor: '#050505',
            scale: 2,
            useCORS: true,
            logging: false,
          }
        );

      const blob =
        await new Promise((resolve) =>
          canvas.toBlob(
            resolve,
            'image/png',
            1
          )
        );

      if (!blob) {
        throw new Error(
          'Could not create receipt image.'
        );
      }

      const file = new File(
        [blob],
        `Habesha-Film-Receipt-${Date.now()}.png`,
        {
          type: 'image/png',
        }
      );

      if (
        navigator.share &&
        (!navigator.canShare ||
          navigator.canShare({
            files: [file],
          }))
      ) {
        await navigator.share({
          title:
            'Booking Receipt - Habesha Film Production',
          text:
            'Booking Receipt - Habesha Film Production',
          files: [file],
        });
      } else {
        const imageUrl =
          URL.createObjectURL(
            blob
          );

        const link =
          document.createElement('a');

        link.href = imageUrl;
        link.download = file.name;

        document.body.appendChild(
          link
        );

        link.click();
        link.remove();

        URL.revokeObjectURL(
          imageUrl
        );

        alert(
          'Receipt PNG ተዳልዩ ኣሎ።'
        );
      }
    } catch (err) {
      console.error(
        'Receipt error:',
        err
      );

      if (
        err?.name !== 'AbortError'
      ) {
        alert(
          'Receipt ምፍጣር ኣይተዓወተን።'
        );
      }
    } finally {
      if (
        container &&
        container.parentNode
      ) {
        container.parentNode.removeChild(
          container
        );
      }
    }
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans overflow-x-hidden flex flex-col justify-between">

      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4 py-32">

        {/* =====================================================
            LOGIN
        ===================================================== */}

        {!isAuthenticated ? (
          <div className="bg-zinc-950 p-8 md:p-12 shadow-2xl border-2 border-[#dfb557]/40 rounded-2xl max-w-md w-full text-center">

            <span className="text-[10px] tracking-[0.4em] uppercase text-[#dfb557] font-semibold block mb-2">
              Secure Access
            </span>

            <h2 className="text-2xl md:text-3xl font-serif mb-3">
              Protected Price Page
            </h2>

            <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4" />

            <p className="text-xs md:text-sm text-zinc-400 mb-6">
              እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ።
            </p>

            <form
              onSubmit={handleLogin}
              className="space-y-4"
            >
              <input
                type="password"
                placeholder="Enter Passcode"
                value={passcode}
                onChange={(e) =>
                  setPasscode(
                    e.target.value
                  )
                }
                className="w-full px-4 py-3 bg-zinc-900 border border-[#dfb557]/50 rounded-xl focus:outline-none focus:border-[#dfb557] text-center tracking-widest text-lg"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#dfb557] text-black py-3 uppercase text-xs font-bold tracking-[0.3em] rounded-xl disabled:opacity-50"
              >
                {loading
                  ? 'Checking...'
                  : 'Submit'}
              </button>

              {error && (
                <p className="text-red-400 text-xs">
                  ጌጋ ፓስኮድ! ደጊምካ ፈትን።
                </p>
              )}
            </form>
          </div>

        ) : isEditMode ? (

          /* ===================================================
             ADMIN EDIT MODE
          =================================================== */

          <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-12 w-full">

            <div className="text-center mb-8">

              <span className="text-[10px] tracking-[0.5em] uppercase text-[#dfb557]">
                Administration Mode
              </span>

              <h1 className="text-3xl font-serif mt-2">
                Edit Packages & Admin Notebook
              </h1>
            </div>

            <div className="bg-zinc-950 border border-[#dfb557]/40 p-3 sm:p-6 md:p-8 rounded-2xl space-y-8 shadow-2xl">

              {/* =================================================
                  NOTEBOOK
              ================================================= */}

              <div className="bg-zinc-900 rounded-xl border border-[#dfb557]/30 overflow-hidden">

                <button
                  type="button"
                  onClick={() =>
                    setIsNotebookOpen(
                      (prev) =>
                        !prev
                    )
                  }
                  className="w-full flex justify-between items-center gap-4 p-4 sm:p-6 text-left hover:bg-zinc-800/60"
                >
                  <div>
                    <span className="text-xs font-bold uppercase text-[#dfb557]">
                      📝 Admin Notebook & Customer Bookings
                    </span>

                    <span className="hidden sm:block text-[10px] text-zinc-400 mt-1">
                      ዋጋ፣ ኣገልግሎትን ባህርያትን ሒዙ ይዕቀብ
                    </span>
                  </div>

                  <span
                    className={`text-[#dfb557] transition-transform ${
                      isNotebookOpen
                        ? 'rotate-180'
                        : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isNotebookOpen && (
                  <div className="px-3 sm:px-6 pb-6 border-t border-zinc-800">

                    <div className="space-y-4 max-h-[60vh] overflow-y-auto pt-4">

                      {notebookList.length === 0 ? (
                        <p className="text-zinc-500 text-xs italic text-center py-4">
                          ዝኾነ ዝተመዝገበ ዓሚል የልቦን።
                        </p>
                      ) : (
                        notebookList.map(
                          (note) => (
                            <div
                              key={String(
                                getNotebookId(
                                  note
                                )
                              )}
                              className="bg-zinc-950 border border-zinc-800 p-3 sm:p-5 rounded-xl space-y-4"
                            >

                              <div className="flex flex-col sm:flex-row justify-between gap-2 border-b border-zinc-900 pb-3">

                                <div className="flex items-center gap-3 flex-wrap">

                                  <span className="text-base font-serif font-bold text-[#dfb557]">
                                    {note.customerName}
                                  </span>

                                  <span className="text-[10px] bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md">
                                    📅 {note.bookingDate}
                                  </span>

                                </div>

                                <span className="text-[9px] text-zinc-500">
                                  {note.timestamp}
                                </span>

                              </div>

                              <div className="bg-zinc-900/80 border border-[#dfb557]/30 p-3 sm:p-4 rounded-xl space-y-4">

                                <div className="flex justify-between items-start gap-3">

                                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#dfb557]">
                                    {note.tier}
                                  </span>

                                  <span className="text-lg font-serif font-bold text-[#dfb557]">
                                    {note.packagePrice}
                                  </span>

                                </div>

                                <h4 className="text-lg sm:text-xl font-serif break-words">
                                  {note.packageName}{' '}
                                  Package
                                </h4>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3 border-t border-zinc-800">

                                  <div>
                                    <span className="text-[10px] text-[#dfb557] font-semibold uppercase block mb-2">
                                      SERVICES
                                    </span>

                                    <ul className="space-y-1 text-xs text-zinc-300">
                                      {note.packageServices.length >
                                      0 ? (
                                        note.packageServices.map(
                                          (
                                            item,
                                            index
                                          ) => (
                                            <li
                                              key={
                                                index
                                              }
                                            >
                                              {
                                                item
                                              }
                                            </li>
                                          )
                                        )
                                      ) : (
                                        <li className="text-zinc-500">
                                          የለን
                                        </li>
                                      )}
                                    </ul>
                                  </div>

                                  <div>
                                    <span className="text-[10px] text-[#dfb557] font-semibold uppercase block mb-2">
                                      FEATURES
                                    </span>

                                    <ul className="space-y-1 text-xs text-zinc-300">
                                      {note.packageFeatures.length >
                                      0 ? (
                                        note.packageFeatures.map(
                                          (
                                            item,
                                            index
                                          ) => (
                                            <li
                                              key={
                                                index
                                              }
                                            >
                                              {
                                                item
                                              }
                                            </li>
                                          )
                                        )
                                      ) : (
                                        <li className="text-zinc-500">
                                          የለን
                                        </li>
                                      )}
                                    </ul>
                                  </div>

                                </div>

                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">

                                <button
                                  type="button"
                                  onClick={() =>
                                    handleShareReceipt(
                                      note
                                    )
                                  }
                                  className="px-3 py-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-[10px] uppercase font-semibold"
                                >
                                  Share 🔗
                                </button>

                                <button
                                  type="button"
                                  onClick={() =>
                                    handleEditNoteItem(
                                      note
                                    )
                                  }
                                  className="px-3 py-2.5 bg-[#dfb557]/20 hover:bg-[#dfb557]/40 text-[#dfb557] rounded-lg text-[10px] uppercase font-semibold"
                                >
                                  Edit
                                </button>

                                <button
                                  type="button"
                                  onClick={() =>
                                    handleDeleteNote(
                                      getNotebookId(
                                        note
                                      )
                                    )
                                  }
                                  className="px-3 py-2.5 bg-red-950/60 hover:bg-red-900 text-red-300 rounded-lg text-[10px] uppercase font-semibold"
                                >
                                  Delete
                                </button>

                              </div>

                            </div>
                          )
                        )
                      )}

                    </div>
                  </div>
                )}
              </div>

              {/* =================================================
                  WEBSITE PACKAGES
              ================================================= */}

              <div>

                <div className="flex justify-between items-center mb-4">

                  <h3 className="text-sm font-bold uppercase text-[#dfb557] tracking-wider">
                    ⚙️ Edit Website Packages
                  </h3>

                  <span className="lg:hidden text-[9px] text-zinc-500">
                    ← Swipe →
                  </span>

                </div>

                <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto lg:overflow-x-visible pb-4">

                  {Object.keys(
                    tempPackages
                  ).map((key) => {
                    const pkg =
                      tempPackages[key];

                    return (
                      <div
                        key={key}
                        className="flex-none w-[86vw] sm:w-[68vw] md:w-[48vw] lg:w-auto bg-zinc-900 border-2 border-[#dfb557]/40 p-4 sm:p-6 rounded-2xl shadow-xl space-y-4"
                      >

                        <div className="space-y-3">

                          <div>
                            <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
                              Tier Title
                            </label>

                            <input
                              value={
                                pkg.tier ||
                                ''
                              }
                              onChange={(e) =>
                                updateTempPackageField(
                                  key,
                                  'tier',
                                  e.target.value
                                )
                              }
                              className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs"
                            />
                          </div>

                          <div>
                            <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
                              Package Name
                            </label>

                            <input
                              value={
                                pkg.name ||
                                ''
                              }
                              onChange={(e) =>
                                updateTempPackageField(
                                  key,
                                  'name',
                                  e.target.value
                                )
                              }
                              className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs font-serif font-bold text-lg"
                            />
                          </div>

                          <div>
                            <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
                              Price
                            </label>

                            <input
                              value={
                                pkg.price ||
                                ''
                              }
                              onChange={(e) =>
                                updateTempPackageField(
                                  key,
                                  'price',
                                  e.target.value
                                )
                              }
                              className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-xs text-[#dfb557] font-bold"
                            />
                          </div>

                          <div>
                            <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
                              Services
                            </label>

                            <textarea
                              rows={5}
                              value={(
                                pkg.services ||
                                []
                              ).join('\n')}
                              onChange={(e) =>
                                updateTempPackageArray(
                                  key,
                                  'services',
                                  e.target.value
                                )
                              }
                              className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px]"
                            />
                          </div>

                          <div>
                            <label className="text-[9px] uppercase text-zinc-400 font-semibold block mb-1">
                              Features
                            </label>

                            <textarea
                              rows={6}
                              value={(
                                pkg.features ||
                                []
                              ).join('\n')}
                              onChange={(e) =>
                                updateTempPackageArray(
                                  key,
                                  'features',
                                  e.target.value
                                )
                              }
                              className="w-full bg-zinc-950 border border-zinc-700 p-2 rounded-lg text-[11px]"
                            />
                          </div>

                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            handleSelectPackageClick(
                              key
                            )
                          }
                          className="w-full bg-[#dfb557] text-black py-2.5 rounded-xl text-[10px] uppercase font-bold"
                        >
                          Select {pkg.name} ➔
                        </button>

                      </div>
                    );
                  })}

                </div>
              </div>

              {packageSaveError && (
                <div className="bg-red-950/40 border border-red-500/40 text-red-300 p-3 rounded-xl text-xs">
                  {packageSaveError}
                </div>
              )}

              {/* =================================================
                  SAVE / CANCEL
              ================================================= */}

              <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-4 border-t border-zinc-900">

                <button
                  type="button"
                  onClick={
                    handleCancelEdit
                  }
                  disabled={isSavingPackages}
                  className="w-full sm:w-auto px-6 py-3 bg-zinc-900 text-zinc-300 rounded-xl text-xs uppercase font-bold disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={
                    handleSaveAndExit
                  }
                  disabled={isSavingPackages}
                  className="w-full sm:w-auto px-6 py-3 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-bold disabled:opacity-50"
                >
                  {isSavingPackages
                    ? 'Saving...'
                    : 'Save Changes'}
                </button>

              </div>

            </div>
          </div>

        ) : (

          /* =====================================================
             CUSTOMER VIEW
          ===================================================== */

          <div className="max-w-7xl mx-auto text-center px-2 sm:px-4 py-6 sm:py-12 w-full">

            <div className="flex justify-end mb-4">

              {!isEditGateOpen ? (
                <div className="flex flex-col items-end">

                  <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-[#dfb557]/40">

                    <input
                      type="password"
                      placeholder="Admin Code"
                      value={adminPasscode}
                      onChange={(e) =>
                        setAdminPasscode(
                          e.target.value
                        )
                      }
                      className="bg-transparent text-zinc-100 text-xs px-2 focus:outline-none w-28"
                    />

                    <button
                      type="button"
                      onClick={
                        handleEditGateSubmit
                      }
                      className="px-3 py-1.5 bg-[#dfb557] text-black rounded-lg text-[10px] font-bold uppercase"
                    >
                      Unlock
                    </button>

                  </div>

                  {adminError && (
                    <p className="text-red-400 text-[10px] mt-1">
                      Wrong Admin Code!
                    </p>
                  )}

                </div>
              ) : (
                <button
                  type="button"
                  onClick={() =>
                    setIsEditMode(true)
                  }
                  className="px-4 py-2 bg-[#dfb557] text-black rounded-xl text-xs uppercase font-semibold"
                >
                  Enter Edit Mode ⚙️
                </button>
              )}

            </div>

            <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-[#dfb557] block mb-2">
              Investment & Tiers
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
              Our Professional Packages
            </h1>

            <div className="w-12 h-[1px] bg-[#dfb557]/40 mx-auto mb-4" />

            <p className="text-zinc-400 text-sm md:text-base mb-16 max-w-2xl mx-auto">
              ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት።
            </p>

            <div className="flex lg:grid lg:grid-cols-4 gap-5 lg:gap-6 text-left overflow-x-auto lg:overflow-x-visible pb-5">

              {Object.keys(
                packages
              ).map((key) => {
                const pkg =
                  packages[key];

                return (
                  <div
                    key={key}
                    className={`flex-none w-[82vw] sm:w-[65vw] md:w-[45vw] lg:w-auto bg-zinc-950/90 border-2 ${
                      key === 'gold'
                        ? 'border-[#dfb557]'
                        : 'border-[#dfb557]/50'
                    } p-6 sm:p-8 rounded-2xl shadow-2xl relative`}
                  >

                    {key === 'gold' && (
                      <span className="absolute -top-3 right-6 bg-[#dfb557] text-black text-[9px] uppercase font-bold px-3 py-1 rounded-full">
                        {pkg.tier}
                      </span>
                    )}

                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#dfb557]">
                      {key === 'gold'
                        ? 'Exclusive'
                        : pkg.tier}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-serif mt-1 mb-2 break-words">
                      {pkg.name}
                    </h3>

                    <p className="text-2xl sm:text-3xl font-serif font-bold text-[#dfb557] mb-6 break-words">
                      {pkg.price}
                    </p>

                    {pkg.services?.length > 0 && (
                      <div className="text-xs sm:text-sm text-zinc-300 space-y-2 mb-4 border-b border-zinc-900 pb-4">
                        {pkg.services.map(
                          (
                            service,
                            index
                          ) => (
                            <p
                              key={
                                index
                              }
                            >
                              {service}
                            </p>
                          )
                        )}
                      </div>
                    )}

                    <ul className="text-xs sm:text-sm text-zinc-300 space-y-3">

                      {(pkg.features || []).map(
                        (
                          feature,
                          index
                        ) => (
                          <li
                            key={
                              index
                            }
                          >
                            {feature}
                          </li>
                        )
                      )}

                    </ul>

                  </div>
                );
              })}

            </div>

          </div>
        )}

      </div>

      {/* =======================================================
          NOTEBOOK MODAL
      ======================================================= */}

      {isBookingModalOpen &&
        selectedPackage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto">

            <div className="bg-zinc-950 border border-[#dfb557]/40 p-4 sm:p-6 md:p-8 rounded-2xl max-w-5xl w-full max-h-[calc(100dvh-1rem)] sm:max-h-[calc(100dvh-2rem)] overflow-y-auto shadow-2xl">

              <div className="flex justify-between items-start gap-3 border-b border-zinc-900 pb-3 mb-5">

                <div>
                  <h3 className="text-base sm:text-lg font-serif text-[#dfb557]">
                    {editingNoteId !== null
                      ? '✏️ Edit Admin Notebook'
                      : 'ዝርዝር መረጻ ንዓሚል ምዝገባ'}
                  </h3>

                  <span className="text-[10px] text-zinc-500">
                    {editingNoteId !== null
                      ? 'ናይዚ Notebook ጥራሕ እዩ ዝቕየር'
                      : 'Selected package is an independent copy'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={
                    handleCloseBookingModal
                  }
                  className="text-zinc-400 hover:text-white"
                >
                  ✕
                </button>

              </div>

              <form
                onSubmit={
                  handleBookingSubmit
                }
                className="space-y-5"
              >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div>
                    <label className="text-[10px] uppercase text-zinc-400 block mb-1">
                      ስም ዓሚል
                    </label>

                    <input
                      required
                      type="text"
                      value={customerName}
                      onChange={(e) =>
                        setCustomerName(
                          e.target.value
                        )
                      }
                      className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs focus:outline-none focus:border-[#dfb557]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-zinc-400 block mb-1">
                      ዕለት መደብ
                    </label>

                    <input
                      required
                      type="date"
                      value={bookingDate}
                      onChange={(e) =>
                        setBookingDate(
                          e.target.value
                        )
                      }
                      className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs focus:outline-none focus:border-[#dfb557]"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div>
                    <label className="text-[10px] uppercase text-zinc-400 block mb-1">
                      Package Name
                    </label>

                    <input
                      type="text"
                      value={
                        selectedPackage.name ||
                        ''
                      }
                      onChange={(e) =>
                        updateSelectedPackageField(
                          'name',
                          e.target.value
                        )
                      }
                      className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-zinc-400 block mb-1">
                      Tier
                    </label>

                    <input
                      type="text"
                      value={
                        selectedPackage.tier ||
                        ''
                      }
                      onChange={(e) =>
                        updateSelectedPackageField(
                          'tier',
                          e.target.value
                        )
                      }
                      className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs"
                    />
                  </div>

                </div>

                <div>
                  <label className="text-[10px] uppercase text-zinc-400 block mb-1">
                    ዋጋ
                  </label>

                  <input
                    required
                    type="text"
                    value={
                      customizedPrice
                    }
                    onChange={(e) => {
                      setCustomizedPrice(
                        e.target.value
                      );

                      updateSelectedPackageField(
                        'price',
                        e.target.value
                      );
                    }}
                    className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-xl text-xs text-[#dfb557] font-bold"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-4">

                    <h4 className="text-[10px] uppercase font-bold text-[#dfb557] mb-3">
                      SERVICES
                    </h4>

                    <textarea
                      rows={12}
                      value={(
                        selectedPackage.services ||
                        []
                      ).join('\n')}
                      onChange={(e) =>
                        updateSelectedPackageArray(
                          'services',
                          e.target.value
                        )
                      }
                      className="w-full bg-zinc-950 border border-zinc-700 p-3 rounded-xl text-xs"
                    />

                  </div>

                  <div className="bg-zinc-900 border border-[#dfb557]/30 rounded-xl p-4">

                    <h4 className="text-[10px] uppercase font-bold text-[#dfb557] mb-3">
                      FEATURES
                    </h4>

                    <textarea
                      rows={12}
                      value={(
                        selectedPackage.features ||
                        []
                      ).join('\n')}
                      onChange={(e) =>
                        updateSelectedPackageArray(
                          'features',
                          e.target.value
                        )
                      }
                      className="w-full bg-zinc-950 border border-zinc-700 p-3 rounded-xl text-xs"
                    />

                  </div>

                </div>

                <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4">

                  <h4 className="text-[10px] uppercase font-bold text-[#dfb557] mb-4">
                    Notebook Preview
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div>
                      <span className="text-[9px] text-zinc-500 uppercase">
                        Customer
                      </span>

                      <p className="text-sm font-semibold">
                        {customerName || '—'}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] text-zinc-500 uppercase">
                        Date
                      </span>

                      <p className="text-sm">
                        {bookingDate || '—'}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] text-zinc-500 uppercase">
                        Package
                      </span>

                      <p className="text-sm font-semibold">
                        {selectedPackage.name ||
                          '—'}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] text-zinc-500 uppercase">
                        Price
                      </span>

                      <p className="text-sm text-[#dfb557] font-bold">
                        {customizedPrice ||
                          '—'}
                      </p>
                    </div>

                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-zinc-900">

                  <button
                    type="button"
                    onClick={
                      handleCloseBookingModal
                    }
                    className="w-full sm:w-1/2 bg-zinc-900 text-zinc-300 py-3 rounded-xl text-xs uppercase font-bold"
                  >
                    ሰርዝ
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-1/2 bg-[#dfb557] text-black py-3 rounded-xl text-xs uppercase font-bold"
                  >
                    {editingNoteId !== null
                      ? 'Update / Save'
                      : 'ኣቐመጥ (Save)'}
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