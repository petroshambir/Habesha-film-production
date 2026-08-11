

// import React, { useState, useEffect } from 'react';
// import JSZip from 'jszip';

// const sectionsConfig = [
//   { title: 'Weddings', storageKey: 'portfolio_weddings' },
//   { title: 'Bridal Shoots', storageKey: 'portfolio_bridal' },
//   { title: 'Baby Shower & Baptism', storageKey: 'portfolio_babyshower' }
// ];

// function AdminDashboard() {
//   const [sectionsData, setSectionsData] = useState({});

//   // ንኮሚሽን/ምርጫ ካስተመራት ዝምልከት ስቴት
//   const [clientName, setClientName] = useState('');
//   const [portalNumber, setPortalNumber] = useState('');
//   const [clientImages, setClientImages] = useState([]);
//   const [portalsList, setPortalsList] = useState([]);
//   const [creatingPortal, setCreatingPortal] = useState(false);

//   // ሓድሽ ንዝተመረጹ ስእሊታት ዝርእየሉ ሞዳል (Modal) ዝምልከት ስቴት
//   const [viewingPortalSelections, setViewingPortalSelections] = useState(null);

//   // ናይ ሳድባር ንጡፍ ክፋል ንምምራጽ (Active Tab State)
//   const [activeTab, setActiveTab] = useState('manager'); // 'manager', 'portal', or section title

//   useEffect(() => {
//     fetch('https://habesha-film-production-server.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => {
//         const dataMap = {};
//         data.forEach(item => {
//           let parsedDescriptions = [];
//           let parsedHeadings = [];
          
//           try {
//             if (typeof item.description === 'string' && item.description.includes('||DESCS||')) {
//               const parts = item.description.split('||DESCS||');
//               parsedDescriptions = JSON.parse(parts[1] || '[]');
//               parsedHeadings = JSON.parse(parts[2] || '[]');
//             }
//           } catch (e) {
//             console.log("Parsing error", e);
//           }

//           dataMap[item.title] = {
//             ...item,
//             desc: item.desc || item.description || '',
//             descriptions: item.descriptions || parsedDescriptions,
//             headings: item.headings || parsedHeadings,
//             images: item.images || []
//           };
//         });
//         setSectionsData(dataMap);
//       })
//       .catch(err => console.error("Error loading admin data:", err));

//     fetchPortals();
//   }, []);

//   const fetchPortals = async () => {
//     try {
//       const res = await fetch('https://habesha-film-production-server.onrender.com/api/client/portals');
//       if (res.ok) {
//         const data = await res.json();
//         setPortalsList(data);
//       }
//     } catch (err) {
//       console.error("Error fetching portals:", err);
//     }
//   };

//   const handleCreatePortal = async (e) => {
//     e.preventDefault();
//     if (!clientName || !portalNumber || clientImages.length === 0) {
//       alert('በጃኹም ሽም ካስተመር፡ ቑጽሪ ፖርታል፡ ከምኡውን ብዘይውሕድ ሓደ ስእሊ ኣእትዉ!');
//       return;
//     }

//     setCreatingPortal(true);
//     try {
//       const res = await fetch('https://habesha-film-production-server.onrender.com/api/client/create-portal', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ clientName: clientName.trim(), portalNumber: portalNumber.trim(), images: clientImages })
//       });

//       const data = await res.json();
//       if (res.ok && data.success) {
//         alert(`ፖርታል ብሰላም ተፈጢሩ! ፓስኮድ: [ ${data.passcode} ]`);
//         setClientName('');
//         setPortalNumber('');
//         setClientImages([]);
//         fetchPortals();
//       } else {
//         alert(data.message || 'ፖርታል ምፍጣር ኣይከኣለን።');
//       }
//     } catch (err) {
//       console.error("Error creating portal:", err);
//       alert('ሰርቨር ጌጋ ኣጋጢሙ ኣሎ።');
//     } finally {
//       setCreatingPortal(false);
//     }
//   };

//   const handleClientImageUpload = async (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length === 0) return;

//     const formData = new FormData();
//     files.forEach(file => {
//       formData.append('images', file);
//     });

//     try {
//       const res = await fetch('https://habesha-film-production-server.onrender.com/api/client/upload-image', {
//         method: 'POST',
//         body: formData
//       });

//       if (res.ok) {
//         const data = await res.json();
//         const newUrls = data.images || (data.imageUrl ? [data.imageUrl] : []);
        
//         if (newUrls.length > 0) {
//           setClientImages(prev => [...prev, ...newUrls]);
//           alert(`${newUrls.length} ስእሊታት ብሰላም ተሰቒሎም ኣለዉ!`);
//         } else {
//           alert('ስእሊታት ተሰቒሎም ግን ሊንክ ኣይተረኽበን።');
//         }
//       } else {
//         const errData = await res.json();
//         alert(errData.message || 'ስእሊ ክስቀል ኣይከኣለን።');
//       }
//     } catch (err) {
//       console.error("Error uploading client images:", err);
//       alert('ሰርቨር ጌጋ ኣጋጢሙ ኣሎ። F12 Console ርአ።');
//     }
//   };

//   const handleDeletePortal = async (id) => {
//     if (!window.confirm('ነዚ ፖርታል ከተጥፍኦ ትደል ኢኻ?')) return;
//     try {
//       const res = await fetch(`https://habesha-film-production-server.onrender.com/api/client/delete-portal/${id}`, {
//         method: 'DELETE'
//       });
//       if (res.ok) {
//         setPortalsList(portalsList.filter(p => p._id !== id));
//         alert('ፖርታል ተደምሲሱ ኣሎ!');
//       }
//     } catch (err) {
//       console.error("Delete error:", err);
//     }
//   };

//   const handleSave = async (title, data) => {
//     try {
//       const combinedPayloadString = `${data.desc || ''}||DESCS||${JSON.stringify(data.descriptions || [])}||DESCS||${JSON.stringify(data.headings || [])}`;

//       const payload = {
//         ...data,
//         description: combinedPayloadString,
//         desc: data.desc,
//         descriptions: data.descriptions,
//         headings: data.headings
//       };

//       const res = await fetch(`https://habesha-film-production-server.onrender.com/api/projects/${title}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });
      
//       if (!res.ok) throw new Error("Failed to save");
//       alert(`ብሰላም ናብ ዳታቤዝ ተዓቂቡ ኣሎ! (${title})`);
//     } catch (err) {
//       console.error("Error saving to DB", err);
//       alert("ዓወት ኣይተረኽበን! መርመሮ (F12 Console)");
//     }
//   };

//   return (
//     <div className="bg-zinc-950 min-h-screen text-white flex flex-col md:flex-row relative">
      
//       {/* ─── ጸጋማይ ወገን ፕሮፌሽናል ሳድባር (Left Sidebar) - Mobile Responsive ─── */}
//       <aside className="w-full md:w-72 bg-zinc-900 border-b md:border-r border-zinc-800 p-4 md:p-6 flex flex-col justify-between shrink-0 md:sticky md:top-0 md:h-screen z-20">
//         <div>
//           <div className="flex items-center gap-3 mb-6 md:mb-8">
//             <div className="bg-amber-500 text-black p-2 rounded-xl font-black text-xl">HF</div>
//             <div>
//               <h1 className="text-lg font-bold text-amber-500 leading-tight">Admin Portal</h1>
//               <p className="text-xs text-zinc-400">Habesha Film Production</p>
//             </div>
//           </div>

//           <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-none">
//             <button
//               onClick={() => setActiveTab('manager')}
//               className={`whitespace-nowrap px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-between ${
//                 activeTab === 'manager' 
//                   ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20' 
//                   : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
//               }`}
//             >
//               <span>📊 Dashboard Overview</span>
//             </button>

//             <button
//               onClick={() => setActiveTab('portal')}
//               className={`whitespace-nowrap px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-between ${
//                 activeTab === 'portal' 
//                   ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20' 
//                   : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
//               }`}
//             >
//               <span>👥 Client Portals</span>
//               <span className={`text-xs px-2 py-0.5 rounded-full ml-2 ${activeTab === 'portal' ? 'bg-black text-amber-400' : 'bg-zinc-800 text-zinc-400'}`}>
//                 {portalsList.length}
//               </span>
//             </button>

//             <div className="hidden md:block pt-4 pb-2">
//               <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold px-3">Portfolio Sections</p>
//             </div>

//             {sectionsConfig.map((sec) => (
//               <button
//                 key={sec.title}
//                 onClick={() => setActiveTab(sec.title)}
//                 className={`whitespace-nowrap px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-between ${
//                   activeTab === sec.title 
//                     ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20' 
//                     : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
//                 }`}
//               >
//                 <span>✨ {sec.title}</span>
//               </button>
//             ))}
//           </nav>
//         </div>

//         <div className="hidden md:block pt-6 border-t border-zinc-800 mt-6 text-xs text-zinc-500 text-center">
//           Admin Panel v2.5 &bull; Secure Access
//         </div>
//       </aside>

//       {/* ─── ማእከላይ መርአዪ ክፍሊ (Main Content Display Area) ─── */}
//       <main className="flex-1 p-4 md:p-10 overflow-y-auto max-w-full">
        
//         {/* Tab 1: Dashboard Overview */}
//         {activeTab === 'manager' && (
//           <div className="space-y-6">
//             <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl">
//               <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-2">Welcome to Admin Control Panel</h2>
//               <p className="text-zinc-400 text-sm">
//                 መረብካ (Website) ንምምሕዳር ካብዚ ሳድባር ዝደለኻዮ ክፍሊ ብምጥዋቕ ብቐሊሉ ክትእርምን ስእሊታት ክተሰቅልን ትኽእል።
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//               <div onClick={() => setActiveTab('portal')} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl cursor-pointer hover:border-amber-500/50 transition-all group">
//                 <h3 className="text-lg font-bold text-amber-300 group-hover:text-amber-400 mb-1">Active Client Portals</h3>
//                 <p className="text-2xl font-black text-white mt-2">{portalsList.length}</p>
//                 <p className="text-xs text-zinc-500 mt-2">ካስተመራት ዝመረጽዎ ስእሊታትን ፓስኮድን መርመሮ</p>
//               </div>

//               {sectionsConfig.map(sec => (
//                 <div key={sec.title} onClick={() => setActiveTab(sec.title)} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl cursor-pointer hover:border-amber-500/50 transition-all group">
//                   <h3 className="text-lg font-bold text-amber-300 group-hover:text-amber-400 mb-1">{sec.title}</h3>
//                   <p className="text-2xl font-black text-white mt-2">
//                     {sectionsData[sec.title]?.images?.length || 0} Photos
//                   </p>
//                   <p className="text-xs text-zinc-500 mt-2">ናיዚ ክፍሊ መግለጫን ስእሊታትን ኣስተኻኽል</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Tab 2: Client Selection Portals Management */}
//         {activeTab === 'portal' && (
//           <div className="space-y-8">
//             <div className="p-4 md:p-6 border border-amber-500/50 rounded-2xl bg-zinc-900 shadow-2xl">
//               <h2 className="text-xl md:text-2xl font-bold text-amber-400 mb-6">Create Client Selection Portal</h2>
//               <form onSubmit={handleCreatePortal} className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-zinc-400 mb-1 text-sm">Client Name (ሽም ካስተመር):</label>
//                     <input 
//                       type="text" 
//                       value={clientName}
//                       onChange={(e) => setClientName(e.target.value)}
//                       placeholder="ንኣብነት: Dawit & Meron"
//                       className="bg-zinc-800 border border-zinc-700 p-3 rounded-lg w-full text-white text-sm"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-zinc-400 mb-1 text-sm">Portal Number (ቑጽሪ ፖርታል):</label>
//                     <input 
//                       type="text" 
//                       value={portalNumber}
//                       onChange={(e) => setPortalNumber(e.target.value)}
//                       placeholder="ንኣብነት: 01 ወይ 102"
//                       className="bg-zinc-800 border border-zinc-700 p-3 rounded-lg w-full text-white text-sm"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-zinc-400 mb-1 text-sm">Upload Client Photos (ስእሊታት ምጽዓን):</label>
//                   <input 
//                     type="file" 
//                     multiple
//                     onChange={handleClientImageUpload}
//                     className="text-zinc-400 text-xs file:mr-2 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-amber-500 file:text-black hover:file:bg-amber-400 w-full bg-zinc-800 p-2 rounded-lg" 
//                   />
//                   <p className="text-xs text-zinc-500 mt-1">ዝተመረጹ ስእሊታት ቑጽሪ: {clientImages.length}</p>
//                 </div>

//                 {clientImages.length > 0 && (
//                   <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-4 p-3 bg-zinc-950 rounded-xl border border-zinc-800 max-h-40 overflow-y-auto">
//                     {clientImages.map((url, i) => (
//                       <div key={i} className="relative aspect-square rounded overflow-hidden border border-zinc-700">
//                         <img src={url} alt="preview" className="w-full h-full object-cover" />
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 <button 
//                   type="submit" 
//                   disabled={creatingPortal}
//                   className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg w-full transition-colors text-sm"
//                 >
//                   {creatingPortal ? 'Generating Portal & Passcode...' : 'Create Portal & Generate Passcode'}
//                 </button>
//               </form>

//               <div className="mt-8">
//                 <h3 className="text-lg font-semibold text-zinc-300 mb-4">Active Client Portals ({portalsList.length})</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {portalsList.map(portal => {
//                     const hasSubmitted = portal.selectedImages && portal.selectedImages.length > 0;
//                     return (
//                       <div key={portal._id} className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 flex flex-col justify-between gap-3">
//                         <div>
//                           <div className="flex justify-between items-start gap-2">
//                             <h4 className="font-bold text-amber-300 truncate">{portal.clientName}</h4>
//                             {hasSubmitted && (
//                               <span className="bg-green-500/20 text-green-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-green-500/30 shrink-0">
//                                 Submitted ({portal.selectedImages.length})
//                               </span>
//                             )}
//                           </div>
//                           <p className="text-xs text-zinc-400">Portal #{portal.portalNumber}</p>
//                           <p className="text-xs text-amber-400/80 font-mono mt-1">Passcode: {portal.passcode}</p>
//                         </div>

//                         <div className="flex items-center gap-2 pt-2 border-t border-zinc-700/50">
//                           {hasSubmitted ? (
//                             <button 
//                               onClick={() => setViewingPortalSelections(portal)}
//                               className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded text-xs font-bold flex-1 transition-colors truncate"
//                             >
//                               View Selections ({portal.selectedImages.length})
//                             </button>
//                           ) : (
//                             <span className="text-[11px] text-zinc-500 italic flex-1">No selection yet</span>
//                           )}
//                           <button 
//                             onClick={() => handleDeletePortal(portal._id)}
//                             className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded text-xs font-bold shrink-0"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Dynamic Sections */}
//         {sectionsConfig.map((sec) => {
//           if (activeTab !== sec.title) return null;
//           const currentData = sectionsData[sec.title] || { names: '', desc: '', images: [], descriptions: [], headings: [] };

//           return (
//             <SectionRenderer 
//               key={sec.title}
//               title={sec.title} 
//               data={currentData} 
//               setData={(newData) => setSectionsData({ ...sectionsData, [sec.title]: newData })} 
//               onSave={() => handleSave(sec.title, currentData)} 
//             />
//           );
//         })}
//       </main>

//       {/* Modal for View Selections */}
//       {viewingPortalSelections && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 md:p-4">
//           <div className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-4xl w-full p-4 md:p-6 max-h-[95vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-3 gap-2">
//               <div className="overflow-hidden">
//                 <h3 className="text-lg md:text-xl font-bold text-amber-400 truncate">{viewingPortalSelections.clientName} - Selected Photos</h3>
//                 <p className="text-xs text-zinc-400">Portal #{viewingPortalSelections.portalNumber} (Total: {viewingPortalSelections.selectedImages.length})</p>
//               </div>
//               <button 
//                 onClick={() => setViewingPortalSelections(null)}
//                 className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold px-3 py-1.5 rounded-lg text-xs shrink-0"
//               >
//                 ✕ Close
//               </button>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 mb-6 p-3 md:p-4 bg-zinc-800/60 rounded-xl border border-zinc-700 items-stretch sm:items-center justify-between">
//               <div className="text-xs text-zinc-300">
//                 ማዕቀብ: <span className="text-amber-400 font-bold">{viewingPortalSelections.selectedImages.length} ስእሊታት</span> ተመርጺዮም ኣለዉ።
//               </div>
//               <div className="flex flex-col sm:flex-row gap-2">
//                 <button 
//                   onClick={async () => {
//                     const defaultFolderName = `${viewingPortalSelections.clientName}_Selected_Photos`.replace(/\s+/g, '_');
//                     const folderName = prompt("ናይቲ ፎልደር ሽም ኣእቱ (Enter Folder Name):", defaultFolderName);
//                     if (!folderName) return;

//                     alert('ስእሊታት ተኣኪቦም ዚፕ (Zip) ክሳብ ዝለኣኹ በጃኹም ቁሩብ ጽንሑ...');

//                     try {
//                       const zip = new JSZip();
//                       const folder = zip.folder(folderName);

//                       for (let i = 0; i < viewingPortalSelections.selectedImages.length; i++) {
//                         const url = viewingPortalSelections.selectedImages[i];
//                         try {
//                           const response = await fetch(url);
//                           const blob = await response.blob();
//                           const extension = url.split('.').pop().split('?')[0] || 'jpg';
//                           folder.file(`photo_${i + 1}.${extension}`, blob);
//                         } catch (err) {
//                           console.error(`Error fetching image ${i}:`, err);
//                         }
//                       }

//                       const content = await zip.generateAsync({ type: 'blob' });
//                       const blobUrl = window.URL.createObjectURL(content);
//                       const link = document.createElement('a');
//                       link.href = blobUrl;
//                       link.download = `${folderName}.zip`;
//                       document.body.appendChild(link);
//                       link.click();
//                       document.body.removeChild(link);
//                       window.URL.revokeObjectURL(blobUrl);

//                       alert('ኩሎም ስእሊታት ብሓደ ፎልደር (Zip) ብሰላም ወሪዶም!');
//                     } catch (err) {
//                       console.error("Zip generation error:", err);
//                       alert('ስእሊታት ከውርድ እንተሎ ጌጋ ኣጋጢሙ።');
//                     }
//                   }}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
//                 >
//                   📦 Download All as Zip
//                 </button>

//                 <button 
//                   onClick={() => {
//                     const targetSection = prompt("እዞም ስእሊታት ናበይ ክሰጋገሩ ትደሊ? (Weddings, Bridal Shoots, ወይ Baby Shower & Baptism ብትኽክል ጽሓፍ):");
//                     if (!targetSection) return;

//                     const currentSecData = sectionsData[targetSection];
//                     if (!currentSecData) {
//                       alert('እቲ ዝበልካዮ ሽም ክፍሊ ኣይተረኽበን። በጃኹም ብትኽክል ጽሓፍዎ።');
//                       return;
//                     }

//                     const updatedImages = [...(currentSecData.images || []), ...viewingPortalSelections.selectedImages];
//                     setSectionsData({
//                       ...sectionsData,
//                       [targetSection]: { ...currentSecData, images: updatedImages }
//                     });

//                     alert(`ስእሊታት ብሰላም ናብቲ የዕሩኽ ፖርትፎሊዮ [ ${targetSection} ] ተሰጊሮም ኣለዉ! ሕጂ 'Save' ግበሮ።`);
//                   }}
//                   className="bg-amber-500 hover:bg-amber-600 text-black px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
//                 >
//                   🚀 Send to Portfolio
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
//               {viewingPortalSelections.selectedImages.map((imgUrl, idx) => (
//                 <div key={idx} className="aspect-square bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden relative group">
//                   <img src={imgUrl} alt={`Selected ${idx}`} className="w-full h-full object-cover" />
//                   <a 
//                     href={imgUrl} 
//                     target="_blank" 
//                     rel="noreferrer" 
//                     className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-bold text-amber-300 underline p-1 text-center"
//                   >
//                     View Full
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function SectionRenderer({ title, data, setData, onSave }) {
//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('images', file);

//     try {
//       const res = await fetch(`https://habesha-film-production-server.onrender.com/api/projects/${title}/upload`, {
//         method: 'POST',
//         body: formData
//       });

//       if (!res.ok) throw new Error("Upload failed");
      
//       const result = await res.json();
//       const newImages = result.images || [];
      
//       const defaultHeading = `Featured Moment ${newImages.length}`;
//       const defaultDesc = `0${newImages.length}. A wonderful captured memory of the special day.`;

//       const updatedHeadings = [...(data.headings || []), defaultHeading];
//       const updatedDescriptions = [...(data.descriptions || []), defaultDesc];

//       const newData = {
//         ...data,
//         images: newImages,
//         headings: updatedHeadings,
//         descriptions: updatedDescriptions
//       };

//       setData(newData);
//       alert("ስእሊ ተሰቒሉ ኣሎ!");
//     } catch (err) {
//       console.error("Upload Error:", err);
//       alert("ስእሊ ክስቀል ኣይከኣለን!");
//     }
//   };

//   const deleteImage = async (imgIndex) => {
//     const updatedImages = (data.images || []).filter((_, i) => i !== imgIndex);
//     const updatedHeadings = (data.headings || []).filter((_, i) => i !== imgIndex);
//     const updatedDescriptions = (data.descriptions || []).filter((_, i) => i !== imgIndex);

//     const newData = { 
//       ...data, 
//       images: updatedImages,
//       headings: updatedHeadings,
//       descriptions: updatedDescriptions
//     };
//     setData(newData);
//   };

//   const handleHeadingChange = (index, value) => {
//     const updatedHeadings = [...(data.headings || [])];
//     updatedHeadings[index] = value;
//     setData({ ...data, headings: updatedHeadings });
//   };

//   const handleDescriptionChange = (index, value) => {
//     const updatedDescriptions = [...(data.descriptions || [])];
//     updatedDescriptions[index] = value;
//     setData({ ...data, descriptions: updatedDescriptions });
//   };

//   return (
//     <div className="p-4 md:p-8 border border-zinc-700 rounded-2xl bg-zinc-900 shadow-2xl overflow-hidden">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b border-zinc-700 pb-4 gap-4">
//         <h2 className="text-xl md:text-3xl font-bold text-amber-300">{title} Control Panel</h2>
//         <button onClick={onSave} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold w-full sm:w-auto text-sm">
//           Save {title}
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="flex flex-col w-full">
//           <label className="block text-zinc-400 mb-2 text-sm">Names / Title:</label>
//           <input 
//             type="text" 
//             value={data.names || ''}
//             onChange={(e) => setData({ ...data, names: e.target.value })}
//             className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full text-white mb-6 text-sm"
//             placeholder="ማእከላይ ሽም (ንኣብነት Sara & Robel)"
//           />

//           <label className="block text-zinc-400 mb-2 text-sm">Section Main Description (መግለጫ):</label>
//           <textarea 
//             rows="3"
//             value={data.desc || ''}
//             onChange={(e) => setData({ ...data, desc: e.target.value })}
//             className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
//             placeholder="እዚ ስራሕ እዚ ዝገልጽ ጽሑፍ ኣብዚ ጽሓፍ..."
//           />
//         </div>

//         <div className="flex flex-col w-full">
//           <label className="block text-zinc-400 mb-2 text-sm">Upload Image:</label>
//           <input 
//             type="file" 
//             onChange={handleImageUpload} 
//             className="text-zinc-400 text-xs file:mr-2 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-amber-500 file:text-black hover:file:bg-amber-400 w-full bg-zinc-800 p-2 rounded-lg" 
//           />
//         </div>
//       </div>

//       <div className="mt-8 space-y-4">
//         <h3 className="text-lg md:text-xl font-semibold text-amber-400 border-b border-zinc-800 pb-2">Manage Image Headings & Descriptions</h3>
//         {data.images && data.images.map((img, index) => {
//           const defaultHeading = `Featured Moment ${index + 1}`;
//           const defaultDesc = `0${index + 1}. A wonderful captured memory of the special day.`;

//           return (
//             <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 bg-zinc-800/50 border border-zinc-700 rounded-xl items-center">
//               <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 border border-zinc-700 rounded-lg overflow-hidden w-full sm:w-auto">
//                 <img src={img} className="w-full h-full object-cover" alt="upload" />
//                 <button onClick={() => deleteImage(index)} className="absolute top-0 right-0 bg-red-600 text-white px-2 py-0.5 text-xs font-bold">&times;</button>
//               </div>
//               <div className="flex-1 w-full space-y-3">
//                 <div>
//                   <label className="block text-xs text-zinc-400 mb-1">Image {index + 1} Heading:</label>
//                   <input 
//                     type="text"
//                     value={data.headings && data.headings[index] !== undefined ? data.headings[index] : defaultHeading}
//                     onChange={(e) => handleHeadingChange(index, e.target.value)}
//                     className="bg-zinc-900 border border-zinc-700 p-2 rounded w-full text-xs md:text-sm text-white"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs text-zinc-400 mb-1">Image {index + 1} Description:</label>
//                   <input 
//                     type="text"
//                     value={data.descriptions && data.descriptions[index] !== undefined ? data.descriptions[index] : defaultDesc}
//                     onChange={(e) => handleDescriptionChange(index, e.target.value)}
//                     className="bg-zinc-900 border border-zinc-700 p-2 rounded w-full text-xs md:text-sm text-white"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

// import React, { useState, useEffect } from 'react';
// import JSZip from 'jszip';

// const sectionsConfig = [
//   { title: 'Weddings', storageKey: 'portfolio_weddings' },
//   { title: 'Bridal Shoots', storageKey: 'portfolio_bridal' },
//   { title: 'Baby Shower & Baptism', storageKey: 'portfolio_babyshower' }
// ];

// function AdminDashboard() {
//   const [sectionsData, setSectionsData] = useState({});

//   // ንኮሚሽን/ምርጫ ካስተመራት ዝምልከት ስቴት
//   const [clientName, setClientName] = useState('');
//   const [portalNumber, setPortalNumber] = useState('');
//   const [clientImages, setClientImages] = useState([]);
//   const [portalsList, setPortalsList] = useState([]);
//   const [creatingPortal, setCreatingPortal] = useState(false);

//   // ሓድሽ ንዝተመረጹ ስእሊታት ዝርእየሉ ሞዳል (Modal) ዝምልከት ስቴት
//   const [viewingPortalSelections, setViewingPortalSelections] = useState(null);

//   // ናይ ሳድባር ንጡፍ ክፋል ንምምራጽ (Active Tab State)
//   const [activeTab, setActiveTab] = useState('manager'); // 'manager', 'portal', or section title

//   useEffect(() => {
//     fetch('https://habesha-film-production-server.onrender.com/api/projects')
//       .then(res => res.json())
//       .then(data => {
//         const dataMap = {};
//         data.forEach(item => {
//           let parsedDescriptions = [];
//           let parsedHeadings = [];
          
//           try {
//             if (typeof item.description === 'string' && item.description.includes('||DESCS||')) {
//               const parts = item.description.split('||DESCS||');
//               parsedDescriptions = JSON.parse(parts[1] || '[]');
//               parsedHeadings = JSON.parse(parts[2] || '[]');
//             }
//           } catch (e) {
//             console.log("Parsing error", e);
//           }

//           dataMap[item.title] = {
//             ...item,
//             desc: item.desc || item.description || '',
//             descriptions: item.descriptions || parsedDescriptions,
//             headings: item.headings || parsedHeadings,
//             images: item.images || []
//           };
//         });
//         setSectionsData(dataMap);
//       })
//       .catch(err => console.error("Error loading admin data:", err));

//     fetchPortals();
//   }, []);

//   const fetchPortals = async () => {
//     try {
//       const res = await fetch('https://habesha-film-production-server.onrender.com/api/client/portals');
//       if (res.ok) {
//         const data = await res.json();
//         setPortalsList(data);
//       }
//     } catch (err) {
//       console.error("Error fetching portals:", err);
//     }
//   };

//   const handleCreatePortal = async (e) => {
//     e.preventDefault();
//     if (!clientName || !portalNumber || clientImages.length === 0) {
//       alert('በጃኹም ሽም ካስተመር፡ ቑጽሪ ፖርታል፡ ከምኡውን ብዘይውሕድ ሓደ ስእሊ ኣእትዉ!');
//       return;
//     }

//     setCreatingPortal(true);
//     try {
//       const res = await fetch('https://habesha-film-production-server.onrender.com/api/client/create-portal', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ clientName: clientName.trim(), portalNumber: portalNumber.trim(), images: clientImages })
//       });

//       const data = await res.json();
//       if (res.ok && data.success) {
//         alert(`ፖርታል ብሰላም ተፈጢሩ! ፓስኮድ: [ ${data.passcode} ]`);
//         setClientName('');
//         setPortalNumber('');
//         setClientImages([]);
//         fetchPortals();
//       } else {
//         alert(data.message || 'ፖርታል ምፍጣር ኣይከኣለን።');
//       }
//     } catch (err) {
//       console.error("Error creating portal:", err);
//       alert('ሰርቨር ጌጋ ኣጋጢሙ ኣሎ።');
//     } finally {
//       setCreatingPortal(false);
//     }
//   };

//   const handleClientImageUpload = async (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length === 0) return;

//     const formData = new FormData();
//     files.forEach(file => {
//       formData.append('images', file);
//     });

//     try {
//       const res = await fetch('https://habesha-film-production-server.onrender.com/api/client/upload-image', {
//         method: 'POST',
//         body: formData
//       });

//       if (res.ok) {
//         const data = await res.json();
//         const newUrls = data.images || (data.imageUrl ? [data.imageUrl] : []);
        
//         if (newUrls.length > 0) {
//           setClientImages(prev => [...prev, ...newUrls]);
//           alert(`${newUrls.length} ስእሊታት ብሰላም ተሰቒሎም ኣለዉ!`);
//         } else {
//           alert('ስእሊታት ተሰቒሎም ግን ሊንክ ኣይተረኽበን።');
//         }
//       } else {
//         const errData = await res.json();
//         alert(errData.message || 'ስእሊ ክስቀል ኣይከኣለን።');
//       }
//     } catch (err) {
//       console.error("Error uploading client images:", err);
//       alert('ሰርቨር ጌጋ ኣጋጢሙ ኣሎ። F12 Console ርአ።');
//     }
//   };

//   const handleDeletePortal = async (id) => {
//     if (!window.confirm('ነዚ ፖርታል ከተጥፍኦ ትደል ኢኻ?')) return;
//     try {
//       const res = await fetch(`https://habesha-film-production-server.onrender.com/api/client/delete-portal/${id}`, {
//         method: 'DELETE'
//       });
//       if (res.ok) {
//         setPortalsList(portalsList.filter(p => p._id !== id));
//         alert('ፖርታል ተደምሲሱ ኣሎ!');
//       }
//     } catch (err) {
//       console.error("Delete error:", err);
//     }
//   };

//   const handleSave = async (title, data) => {
//     try {
//       const combinedPayloadString = `${data.desc || ''}||DESCS||${JSON.stringify(data.descriptions || [])}||DESCS||${JSON.stringify(data.headings || [])}`;

//       const payload = {
//         ...data,
//         description: combinedPayloadString,
//         desc: data.desc,
//         descriptions: data.descriptions,
//         headings: data.headings
//       };

//       const res = await fetch(`https://habesha-film-production-server.onrender.com/api/projects/${title}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });
      
//       if (!res.ok) throw new Error("Failed to save");
//       alert(`ብሰላም ናብ ዳታቤዝ ተዓቂቡ ኣሎ! (${title})`);
//     } catch (err) {
//       console.error("Error saving to DB", err);
//       alert("ዓወት ኣይተረኽበን! መርመሮ (F12 Console)");
//     }
//   };

//   return (
//     <div className="bg-zinc-950 min-h-screen text-white flex flex-col md:flex-row relative">
      
//       {/* ─── ጸጋማይ ወገን ፕሮፌሽናል ሳድባር (Left Sidebar) - Mobile Responsive ─── */}
//       <aside className="w-full md:w-72 bg-zinc-900 border-b md:border-r border-zinc-800 p-4 md:p-6 flex flex-col justify-between shrink-0 md:sticky md:top-0 md:h-screen z-20">
//         <div>
//           <div className="flex items-center gap-3 mb-6 md:mb-8">
//             <div className="bg-amber-500 text-black p-2 rounded-xl font-black text-xl">HF</div>
//             <div>
//               <h1 className="text-lg font-bold text-amber-500 leading-tight">Admin Portal</h1>
//               <p className="text-xs text-zinc-400">Habesha Film Production</p>
//             </div>
//           </div>

//           <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-none">
//             <button
//               onClick={() => setActiveTab('manager')}
//               className={`whitespace-nowrap px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-between ${
//                 activeTab === 'manager' 
//                   ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20' 
//                   : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
//               }`}
//             >
//               <span>📊 Dashboard Overview</span>
//             </button>

//             <button
//               onClick={() => setActiveTab('portal')}
//               className={`whitespace-nowrap px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-between ${
//                 activeTab === 'portal' 
//                   ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20' 
//                   : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
//               }`}
//             >
//               <span>👥 Client Portals</span>
//               <span className={`text-xs px-2 py-0.5 rounded-full ml-2 ${activeTab === 'portal' ? 'bg-black text-amber-400' : 'bg-zinc-800 text-zinc-400'}`}>
//                 {portalsList.length}
//               </span>
//             </button>

//             <div className="hidden md:block pt-4 pb-2">
//               <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold px-3">Portfolio Sections</p>
//             </div>

//             {sectionsConfig.map((sec) => (
//               <button
//                 key={sec.title}
//                 onClick={() => setActiveTab(sec.title)}
//                 className={`whitespace-nowrap px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-between ${
//                   activeTab === sec.title 
//                     ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20' 
//                     : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
//                 }`}
//               >
//                 <span>✨ {sec.title}</span>
//               </button>
//             ))}
//           </nav>
//         </div>

//         <div className="hidden md:block pt-6 border-t border-zinc-800 mt-6 text-xs text-zinc-500 text-center">
//           Admin Panel v2.5 &bull; Secure Access
//         </div>
//       </aside>

//       {/* ─── ማእከላይ መርአዪ ክፍሊ (Main Content Display Area) ─── */}
//       <main className="flex-1 p-4 md:p-10 overflow-y-auto max-w-full">
        
//         {/* Tab 1: Dashboard Overview */}
//         {activeTab === 'manager' && (
//           <div className="space-y-6">
//             <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl">
//               <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-2">Welcome to Admin Control Panel</h2>
//               <p className="text-zinc-400 text-sm">
//                 መረብካ (Website) ንምምሕዳር ካብዚ ሳድባር ዝደለኻዮ ክፍሊ ብምጥዋቕ ብቐሊሉ ክትእርምን ስእሊታት ክተሰቅልን ትኽእል።
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//               <div onClick={() => setActiveTab('portal')} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl cursor-pointer hover:border-amber-500/50 transition-all group">
//                 <h3 className="text-lg font-bold text-amber-300 group-hover:text-amber-400 mb-1">Active Client Portals</h3>
//                 <p className="text-2xl font-black text-white mt-2">{portalsList.length}</p>
//                 <p className="text-xs text-zinc-500 mt-2">ካስተመራት ዝመረጽዎ ስእሊታትን ፓስኮድን መርመሮ</p>
//               </div>

//               {sectionsConfig.map(sec => (
//                 <div key={sec.title} onClick={() => setActiveTab(sec.title)} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl cursor-pointer hover:border-amber-500/50 transition-all group">
//                   <h3 className="text-lg font-bold text-amber-300 group-hover:text-amber-400 mb-1">{sec.title}</h3>
//                   <p className="text-2xl font-black text-white mt-2">
//                     {sectionsData[sec.title]?.images?.length || 0} Photos
//                   </p>
//                   <p className="text-xs text-zinc-500 mt-2">ናיዚ ክፍሊ መግለጫን ስእሊታትን ኣስተኻኽል</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Tab 2: Client Selection Portals Management */}
//         {activeTab === 'portal' && (
//           <div className="space-y-8">
//             <div className="p-4 md:p-6 border border-amber-500/50 rounded-2xl bg-zinc-900 shadow-2xl">
//               <h2 className="text-xl md:text-2xl font-bold text-amber-400 mb-6">Create Client Selection Portal</h2>
//               <form onSubmit={handleCreatePortal} className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-zinc-400 mb-1 text-sm">Client Name (ሽም ካስተመር):</label>
//                     <input 
//                       type="text" 
//                       value={clientName}
//                       onChange={(e) => setClientName(e.target.value)}
//                       placeholder="ንኣብነት: Dawit & Meron"
//                       className="bg-zinc-800 border border-zinc-700 p-3 rounded-lg w-full text-white text-sm"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-zinc-400 mb-1 text-sm">Portal Number (ቑጽሪ ፖርታል):</label>
//                     <input 
//                       type="text" 
//                       value={portalNumber}
//                       onChange={(e) => setPortalNumber(e.target.value)}
//                       placeholder="ንኣብነት: 01 ወይ 102"
//                       className="bg-zinc-800 border border-zinc-700 p-3 rounded-lg w-full text-white text-sm"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-zinc-400 mb-1 text-sm">Upload Client Photos (ስእሊታት ምጽዓን):</label>
//                   <input 
//                     type="file" 
//                     multiple
//                     onChange={handleClientImageUpload}
//                     className="text-zinc-400 text-xs file:mr-2 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-amber-500 file:text-black hover:file:bg-amber-400 w-full bg-zinc-800 p-2 rounded-lg" 
//                   />
//                   <p className="text-xs text-zinc-500 mt-1">ዝተመረጹ ስእሊታት ቑጽሪ: {clientImages.length}</p>
//                 </div>

//                 {clientImages.length > 0 && (
//                   <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-4 p-3 bg-zinc-950 rounded-xl border border-zinc-800 max-h-40 overflow-y-auto">
//                     {clientImages.map((url, i) => (
//                       <div key={i} className="relative aspect-square rounded overflow-hidden border border-zinc-700">
//                         <img src={url} alt="preview" className="w-full h-full object-cover" />
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 <button 
//                   type="submit" 
//                   disabled={creatingPortal}
//                   className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg w-full transition-colors text-sm"
//                 >
//                   {creatingPortal ? 'Generating Portal & Passcode...' : 'Create Portal & Generate Passcode'}
//                 </button>
//               </form>

//               <div className="mt-8">
//                 <h3 className="text-lg font-semibold text-zinc-300 mb-4">Active Client Portals ({portalsList.length})</h3>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {portalsList.map(portal => {
//                     const hasSubmitted = portal.selectedImages && portal.selectedImages.length > 0;
//                     return (
//                       <div key={portal._id} className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 flex flex-col justify-between gap-3">
//                         <div>
//                           <div className="flex justify-between items-start gap-2">
//                             <h4 className="font-bold text-amber-300 truncate">{portal.clientName}</h4>
//                             {hasSubmitted && (
//                               <span className="bg-green-500/20 text-green-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-green-500/30 shrink-0">
//                                 Submitted ({portal.selectedImages.length})
//                               </span>
//                             )}
//                           </div>
//                           <p className="text-xs text-zinc-400">Portal #{portal.portalNumber}</p>
//                           <p className="text-xs text-amber-400/80 font-mono mt-1">Passcode: {portal.passcode}</p>
//                         </div>

//                         <div className="flex items-center gap-2 pt-2 border-t border-zinc-700/50">
//                           {hasSubmitted ? (
//                             <button 
//                               onClick={() => setViewingPortalSelections(portal)}
//                               className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded text-xs font-bold flex-1 transition-colors truncate"
//                             >
//                               View Selections ({portal.selectedImages.length})
//                             </button>
//                           ) : (
//                             <span className="text-[11px] text-zinc-500 italic flex-1">No selection yet</span>
//                           )}
//                           <button 
//                             onClick={() => handleDeletePortal(portal._id)}
//                             className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded text-xs font-bold shrink-0"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Dynamic Sections */}
//         {sectionsConfig.map((sec) => {
//           if (activeTab !== sec.title) return null;
//           const currentData = sectionsData[sec.title] || { names: '', desc: '', images: [], descriptions: [], headings: [] };

//           return (
//             <SectionRenderer 
//               key={sec.title}
//               title={sec.title} 
//               data={currentData} 
//               setData={(newData) => setSectionsData({ ...sectionsData, [sec.title]: newData })} 
//               onSave={() => handleSave(sec.title, currentData)} 
//             />
//           );
//         })}
//       </main>

//       {/* Modal for View Selections */}
//       {viewingPortalSelections && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 md:p-4">
//           <div className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-4xl w-full p-4 md:p-6 max-h-[95vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-3 gap-2">
//               <div className="overflow-hidden">
//                 <h3 className="text-lg md:text-xl font-bold text-amber-400 truncate">{viewingPortalSelections.clientName} - Selected Photos</h3>
//                 <p className="text-xs text-zinc-400">Portal #{viewingPortalSelections.portalNumber} (Total: {viewingPortalSelections.selectedImages.length})</p>
//               </div>
//               <button 
//                 onClick={() => setViewingPortalSelections(null)}
//                 className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold px-3 py-1.5 rounded-lg text-xs shrink-0"
//               >
//                 ✕ Close
//               </button>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 mb-6 p-3 md:p-4 bg-zinc-800/60 rounded-xl border border-zinc-700 items-stretch sm:items-center justify-between">
//               <div className="text-xs text-zinc-300">
//                 ማዕቀብ: <span className="text-amber-400 font-bold">{viewingPortalSelections.selectedImages.length} ስእሊታት</span> ተመርጺዮም ኣለዉ።
//               </div>
//               <div className="flex flex-col sm:flex-row gap-2">
//                 <button 
//                   onClick={async () => {
//                     const defaultFolderName = `${viewingPortalSelections.clientName}_Selected_Photos`.replace(/\s+/g, '_');
//                     const folderName = prompt("ናይቲ ፎልደር ሽም ኣእቱ (Enter Folder Name):", defaultFolderName);
//                     if (!folderName) return;

//                     alert('ስእሊታት ተኣኪቦም ዚፕ (Zip) ክሳብ ዝለኣኹ በጃኹም ቁሩብ ጽንሑ...');

//                     try {
//                       const zip = new JSZip();
//                       const folder = zip.folder(folderName);

//                       for (let i = 0; i < viewingPortalSelections.selectedImages.length; i++) {
//                         const url = viewingPortalSelections.selectedImages[i];
//                         try {
//                           const response = await fetch(url);
//                           const blob = await response.blob();
//                           const extension = url.split('.').pop().split('?')[0] || 'jpg';
//                           folder.file(`photo_${i + 1}.${extension}`, blob);
//                         } catch (err) {
//                           console.error(`Error fetching image ${i}:`, err);
//                         }
//                       }

//                       const content = await zip.generateAsync({ type: 'blob' });
//                       const blobUrl = window.URL.createObjectURL(content);
//                       const link = document.createElement('a');
//                       link.href = blobUrl;
//                       link.download = `${folderName}.zip`;
//                       document.body.appendChild(link);
//                       link.click();
//                       document.body.removeChild(link);
//                       window.URL.revokeObjectURL(blobUrl);

//                       alert('ኩሎም ስእሊታት ብሓደ ፎልደር (Zip) ብሰላም ወሪዶም!');
//                     } catch (err) {
//                       console.error("Zip generation error:", err);
//                       alert('ስእሊታት ከውርድ እንተሎ ጌጋ ኣጋጢሙ።');
//                     }
//                   }}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
//                 >
//                   📦 Download All as Zip
//                 </button>

//                 <button 
//                   onClick={() => {
//                     const targetSection = prompt("እዞም ስእሊታት ናበይ ክሰጋገሩ ትደሊ? (Weddings, Bridal Shoots, ወይ Baby Shower & Baptism ብትኽክል ጽሓፍ):");
//                     if (!targetSection) return;

//                     const currentSecData = sectionsData[targetSection];
//                     if (!currentSecData) {
//                       alert('እቲ ዝበልካዮ ሽም ክፍሊ ኣይተረኽበን። በጃኹም ብትኽክል ጽሓፍዎ።');
//                       return;
//                     }

//                     const updatedImages = [...(currentSecData.images || []), ...viewingPortalSelections.selectedImages];
//                     setSectionsData({
//                       ...sectionsData,
//                       [targetSection]: { ...currentSecData, images: updatedImages }
//                     });

//                     alert(`ስእሊታት ብሰላም ናብቲ የዕሩኽ ፖርትፎሊዮ [ ${targetSection} ] ተሰጊሮም ኣለዉ! ሕጂ 'Save' ግበሮ።`);
//                   }}
//                   className="bg-amber-500 hover:bg-amber-600 text-black px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
//                 >
//                   🚀 Send to Portfolio
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
//               {viewingPortalSelections.selectedImages.map((imgUrl, idx) => (
//                 <div key={idx} className="aspect-square bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden relative group">
//                   <img src={imgUrl} alt={`Selected ${idx}`} className="w-full h-full object-cover" />
//                   <a 
//                     href={imgUrl} 
//                     target="_blank" 
//                     rel="noreferrer" 
//                     className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-bold text-amber-300 underline p-1 text-center"
//                   >
//                     View Full
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function SectionRenderer({ title, data, setData, onSave }) {
//   const handleImageUpload = async (event) => {
//     const files = Array.from(event.target.files);
//     if (files.length === 0) return;

//     const formData = new FormData();
//     files.forEach(file => {
//       formData.append('images', file);
//     });

//     try {
//       const res = await fetch(`https://habesha-film-production-server.onrender.com/api/projects/${title}/upload`, {
//         method: 'POST',
//         body: formData
//       });

//       if (!res.ok) throw new Error("Upload failed");
      
//       const result = await res.json();
//       const newImagesFromBackend = result.images || [];
      
//       const updatedImages = [...(data.images || []), ...newImagesFromBackend];
//       const updatedHeadings = [...(data.headings || [])];
//       const updatedDescriptions = [...(data.descriptions || [])];

//       newImagesFromBackend.forEach((_, i) => {
//         const totalIdx = (data.images || []).length + i;
//         updatedHeadings.push(`Featured Moment ${totalIdx + 1}`);
//         updatedDescriptions.push(`0${totalIdx + 1}. A wonderful captured memory of the special day.`);
//       });

//       const newData = {
//         ...data,
//         images: updatedImages,
//         headings: updatedHeadings,
//         descriptions: updatedDescriptions
//       };

//       setData(newData);
//       alert(`${newImagesFromBackend.length} ስእሊ(ታት) ተሰቒሎም ኣለዉ!`);
//     } catch (err) {
//       console.error("Upload Error:", err);
//       alert("ስእሊ ክስቀል ኣይከኣለን!");
//     }
//   };

//   const deleteImage = async (imgIndex) => {
//     const updatedImages = (data.images || []).filter((_, i) => i !== imgIndex);
//     const updatedHeadings = (data.headings || []).filter((_, i) => i !== imgIndex);
//     const updatedDescriptions = (data.descriptions || []).filter((_, i) => i !== imgIndex);

//     const newData = { 
//       ...data, 
//       images: updatedImages,
//       headings: updatedHeadings,
//       descriptions: updatedDescriptions
//     };
//     setData(newData);
//   };

//   const handleHeadingChange = (index, value) => {
//     const updatedHeadings = [...(data.headings || [])];
//     updatedHeadings[index] = value;
//     setData({ ...data, headings: updatedHeadings });
//   };

//   const handleDescriptionChange = (index, value) => {
//     const updatedDescriptions = [...(data.descriptions || [])];
//     updatedDescriptions[index] = value;
//     setData({ ...data, descriptions: updatedDescriptions });
//   };

//   return (
//     <div className="p-4 md:p-8 border border-zinc-700 rounded-2xl bg-zinc-900 shadow-2xl overflow-hidden">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b border-zinc-700 pb-4 gap-4">
//         <h2 className="text-xl md:text-3xl font-bold text-amber-300">{title} Control Panel</h2>
//         <button onClick={onSave} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold w-full sm:w-auto text-sm">
//           Save {title}
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="flex flex-col w-full">
//           <label className="block text-zinc-400 mb-2 text-sm">Names / Title:</label>
//           <input 
//             type="text" 
//             value={data.names || ''}
//             onChange={(e) => setData({ ...data, names: e.target.value })}
//             className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full text-white mb-6 text-sm"
//             placeholder="ማእከላይ ሽም (ንኣብነት Sara & Robel)"
//           />

//           <label className="block text-zinc-400 mb-2 text-sm">Section Main Description (መግለጫ):</label>
//           <textarea 
//             rows="3"
//             value={data.desc || ''}
//             onChange={(e) => setData({ ...data, desc: e.target.value })}
//             className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
//             placeholder="እዚ ስራሕ እዚ ዝገልጽ ጽሑፍ ኣብዚ ጽሓፍ..."
//           />
//         </div>

//         <div className="flex flex-col w-full">
//           <label className="block text-zinc-400 mb-2 text-sm">Upload Images (Multiple Allowed):</label>
//           <input 
//             type="file" 
//             multiple
//             onChange={handleImageUpload} 
//             className="text-zinc-400 text-xs file:mr-2 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-amber-500 file:text-black hover:file:bg-amber-400 w-full bg-zinc-800 p-2 rounded-lg" 
//           />
//         </div>
//       </div>

//       <div className="mt-8 space-y-4">
//         <h3 className="text-lg md:text-xl font-semibold text-amber-400 border-b border-zinc-800 pb-2">Manage Image Headings & Descriptions</h3>
//         {data.images && data.images.map((img, index) => {
//           const defaultHeading = `Featured Moment ${index + 1}`;
//           const defaultDesc = `0${index + 1}. A wonderful captured memory of the special day.`;

//           return (
//             <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 bg-zinc-800/50 border border-zinc-700 rounded-xl items-center">
//               <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 border border-zinc-700 rounded-lg overflow-hidden w-full sm:w-auto">
//                 <img src={img} className="w-full h-full object-cover" alt="upload" />
//                 <button onClick={() => deleteImage(index)} className="absolute top-0 right-0 bg-red-600 text-white px-2 py-0.5 text-xs font-bold">&times;</button>
//               </div>
//               <div className="flex-1 w-full space-y-3">
//                 <div>
//                   <label className="block text-xs text-zinc-400 mb-1">Image {index + 1} Heading:</label>
//                   <input 
//                     type="text"
//                     value={data.headings && data.headings[index] !== undefined ? data.headings[index] : defaultHeading}
//                     onChange={(e) => handleHeadingChange(index, e.target.value)}
//                     className="bg-zinc-900 border border-zinc-700 p-2 rounded w-full text-xs md:text-sm text-white"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs text-zinc-400 mb-1">Image {index + 1} Description:</label>
//                   <input 
//                     type="text"
//                     value={data.descriptions && data.descriptions[index] !== undefined ? data.descriptions[index] : defaultDesc}
//                     onChange={(e) => handleDescriptionChange(index, e.target.value)}
//                     className="bg-zinc-900 border border-zinc-700 p-2 rounded w-full text-xs md:text-sm text-white"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';

const sectionsConfig = [
  { title: 'Weddings', storageKey: 'portfolio_weddings' },
  { title: 'Bridal Shoots', storageKey: 'portfolio_bridal' },
  { title: 'Baby Shower & Baptism', storageKey: 'portfolio_babyshower' }
];

function AdminDashboard() {
  const [sectionsData, setSectionsData] = useState({});

  // ንኮሚሽን/ምርጫ ካስተመራት ዝምልከት ስቴት
  const [clientName, setClientName] = useState('');
  const [portalNumber, setPortalNumber] = useState('');
  const [clientImages, setClientImages] = useState([]);
  const [portalsList, setPortalsList] = useState([]);
  const [creatingPortal, setCreatingPortal] = useState(false);

  // ሓድሽ ንዝተመረጹ ስእሊታት ዝርእየሉ ሞዳል (Modal) ዝምልከት ስቴት
  const [viewingPortalSelections, setViewingPortalSelections] = useState(null);

  // ናይ ሳድባር ንጡፍ ክፋል ንምምራጽ (Active Tab State)
  const [activeTab, setActiveTab] = useState('manager'); // 'manager', 'portal', or section title

  useEffect(() => {
    fetch('https://habesha-film-production-server.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => {
        const dataMap = {};
        data.forEach(item => {
          let parsedDescriptions = [];
          let parsedHeadings = [];
          
          try {
            if (typeof item.description === 'string' && item.description.includes('||DESCS||')) {
              const parts = item.description.split('||DESCS||');
              parsedDescriptions = JSON.parse(parts[1] || '[]');
              parsedHeadings = JSON.parse(parts[2] || '[]');
            }
          } catch (e) {
            console.log("Parsing error", e);
          }

          dataMap[item.title] = {
            ...item,
            desc: item.desc || item.description || '',
            descriptions: item.descriptions || parsedDescriptions,
            headings: item.headings || parsedHeadings,
            images: item.images || []
          };
        });
        setSectionsData(dataMap);
      })
      .catch(err => console.error("Error loading admin data:", err));

    fetchPortals();
  }, []);

  const fetchPortals = async () => {
    try {
      const res = await fetch('https://habesha-film-production-server.onrender.com/api/client/portals');
      if (res.ok) {
        const data = await res.json();
        setPortalsList(data);
      }
    } catch (err) {
      console.error("Error fetching portals:", err);
    }
  };

  const handleCreatePortal = async (e) => {
    e.preventDefault();
    if (!clientName || !portalNumber || clientImages.length === 0) {
      alert('በጃኹም ሽም ካስተመር፡ ቑጽሪ ፖርታል፡ ከምኡውን ብዘይውሕድ ሓደ ስእሊ ኣእትዉ!');
      return;
    }

    setCreatingPortal(true);
    try {
      const res = await fetch('https://habesha-film-production-server.onrender.com/api/client/create-portal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientName: clientName.trim(), portalNumber: portalNumber.trim(), images: clientImages })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        alert(`ፖርታል ብሰላም ተፈጢሩ! ፓስኮድ: [ ${data.passcode} ]`);
        setClientName('');
        setPortalNumber('');
        setClientImages([]);
        fetchPortals();
      } else {
        alert(data.message || 'ፖርታል ምፍጣር ኣይከኣለን።');
      }
    } catch (err) {
      console.error("Error creating portal:", err);
      alert('ሰርቨር ጌጋ ኣጋጢሙ ኣሎ።');
    } finally {
      setCreatingPortal(false);
    }
  };

  const handleClientImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach(file => {
      formData.append('images', file);
    });

    try {
      const res = await fetch('https://habesha-film-production-server.onrender.com/api/client/upload-image', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        const data = await res.json();
        const newUrls = data.images || (data.imageUrl ? [data.imageUrl] : []);
        
        if (newUrls.length > 0) {
          setClientImages(prev => [...prev, ...newUrls]);
          alert(`${newUrls.length} ስእሊታት ብሰላም ተሰቒሎም ኣለዉ!`);
        } else {
          alert('ስእሊታት ተሰቒሎም ግን ሊንክ ኣይተረኽበን።');
        }
      } else {
        const errData = await res.json();
        alert(errData.message || 'ስእሊ ክስቀል ኣይከኣለን።');
      }
    } catch (err) {
      console.error("Error uploading client images:", err);
      alert('ሰርቨር ጌጋ ኣጋጢሙ ኣሎ። F12 Console ርአ።');
    }
  };

  const handleDeletePortal = async (id) => {
    if (!window.confirm('ነዚ ፖርታል ከተጥፍኦ ትደል ኢኻ?')) return;
    try {
      const res = await fetch(`https://habesha-film-production-server.onrender.com/api/client/delete-portal/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setPortalsList(portalsList.filter(p => p._id !== id));
        alert('ፖርታል ተደምሲሱ ኣሎ!');
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleSave = async (title, data) => {
    try {
      const combinedPayloadString = `${data.desc || ''}||DESCS||${JSON.stringify(data.descriptions || [])}||DESCS||${JSON.stringify(data.headings || [])}`;

      const payload = {
        ...data,
        description: combinedPayloadString,
        desc: data.desc,
        descriptions: data.descriptions,
        headings: data.headings
      };

      const res = await fetch(`https://habesha-film-production-server.onrender.com/api/projects/${title}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!res.ok) throw new Error("Failed to save");
      alert(`ብሰላም ናብ ዳታቤዝ ተዓቂቡ ኣሎ! (${title})`);
    } catch (err) {
      console.error("Error saving to DB", err);
      alert("ዓወት ኣይተረኽበን! መርመሮ (F12 Console)");
    }
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-white flex flex-col md:flex-row relative">
      
      {/* ─── ጸጋማይ ወገን ፕሮፌሽናል ሳድባር (Left Sidebar) - Mobile Responsive ─── */}
      <aside className="w-full md:w-72 bg-zinc-900 border-b md:border-r border-zinc-800 p-4 md:p-6 flex flex-col justify-between shrink-0 md:sticky md:top-0 md:h-screen z-20">
        <div>
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="bg-amber-500 text-black p-2 rounded-xl font-black text-xl">HF</div>
            <div>
              <h1 className="text-lg font-bold text-amber-500 leading-tight">Admin Portal</h1>
              <p className="text-xs text-zinc-400">Habesha Film Production</p>
            </div>
          </div>

          <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveTab('manager')}
              className={`whitespace-nowrap px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-between ${
                activeTab === 'manager' 
                  ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20' 
                  : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              <span>📊 Dashboard Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('portal')}
              className={`whitespace-nowrap px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-between ${
                activeTab === 'portal' 
                  ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20' 
                  : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              <span>👥 Client Portals</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ml-2 ${activeTab === 'portal' ? 'bg-black text-amber-400' : 'bg-zinc-800 text-zinc-400'}`}>
                {portalsList.length}
              </span>
            </button>

            <div className="hidden md:block pt-4 pb-2">
              <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold px-3">Portfolio Sections</p>
            </div>

            {sectionsConfig.map((sec) => (
              <button
                key={sec.title}
                onClick={() => setActiveTab(sec.title)}
                className={`whitespace-nowrap px-4 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-between ${
                  activeTab === sec.title 
                    ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20' 
                    : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                <span>✨ {sec.title}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="hidden md:block pt-6 border-t border-zinc-800 mt-6 text-xs text-zinc-500 text-center">
          Admin Panel v2.5 &bull; Secure Access
        </div>
      </aside>

      {/* ─── ማእከላይ መርአዪ ክፍሊ (Main Content Display Area) ─── */}
      <main className="flex-1 p-4 md:p-10 overflow-y-auto max-w-full">
        
        {/* Tab 1: Dashboard Overview */}
        {activeTab === 'manager' && (
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-2">Welcome to Admin Control Panel</h2>
              <p className="text-zinc-400 text-sm">
                መረብካ (Website) ንምምሕዳር ካብዚ ሳድባር ዝደለኻዮ ክፍሊ ብምጥዋቕ ብቐሊሉ ክትእርምን ስእሊታት ክተሰቅልን ትኽእል።
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div onClick={() => setActiveTab('portal')} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl cursor-pointer hover:border-amber-500/50 transition-all group">
                <h3 className="text-lg font-bold text-amber-300 group-hover:text-amber-400 mb-1">Active Client Portals</h3>
                <p className="text-2xl font-black text-white mt-2">{portalsList.length}</p>
                <p className="text-xs text-zinc-500 mt-2">ካስተመራት ዝመረጽዎ ስእሊታትን ፓስኮድን መርመሮ</p>
              </div>

              {sectionsConfig.map(sec => (
                <div key={sec.title} onClick={() => setActiveTab(sec.title)} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl cursor-pointer hover:border-amber-500/50 transition-all group">
                  <h3 className="text-lg font-bold text-amber-300 group-hover:text-amber-400 mb-1">{sec.title}</h3>
                  <p className="text-2xl font-black text-white mt-2">
                    {sectionsData[sec.title]?.images?.length || 0} Photos
                  </p>
                  <p className="text-xs text-zinc-500 mt-2">ናיዚ ክፍሊ መግለጫን ስእሊታትን ኣስተኻኽል</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Client Selection Portals Management */}
        {activeTab === 'portal' && (
          <div className="space-y-8">
            <div className="p-4 md:p-6 border border-amber-500/50 rounded-2xl bg-zinc-900 shadow-2xl">
              <h2 className="text-xl md:text-2xl font-bold text-amber-400 mb-6">Create Client Selection Portal</h2>
              <form onSubmit={handleCreatePortal} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 mb-1 text-sm">Client Name (ሽም ካስተመር):</label>
                    <input 
                      type="text" 
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="ንኣብነት: Dawit & Meron"
                      className="bg-zinc-800 border border-zinc-700 p-3 rounded-lg w-full text-white text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-1 text-sm">Portal Number (ቑጽሪ ፖርታል):</label>
                    <input 
                      type="text" 
                      value={portalNumber}
                      onChange={(e) => setPortalNumber(e.target.value)}
                      placeholder="ንኣብነት: 01 ወይ 102"
                      className="bg-zinc-800 border border-zinc-700 p-3 rounded-lg w-full text-white text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1 text-sm">Upload Client Photos (ስእሊታት ምጽዓን):</label>
                  <input 
                    type="file" 
                    multiple
                    onChange={handleClientImageUpload}
                    className="text-zinc-400 text-xs file:mr-2 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-amber-500 file:text-black hover:file:bg-amber-400 w-full bg-zinc-800 p-2 rounded-lg" 
                  />
                  <p className="text-xs text-zinc-500 mt-1">ዝተመረጹ ስእሊታት ቑጽሪ: {clientImages.length}</p>
                </div>

                {clientImages.length > 0 && (
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-4 p-3 bg-zinc-950 rounded-xl border border-zinc-800 max-h-40 overflow-y-auto">
                    {clientImages.map((url, i) => (
                      <div key={i} className="relative aspect-square rounded overflow-hidden border border-zinc-700">
                        <img src={url} alt="preview" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={creatingPortal}
                  className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-lg w-full transition-colors text-sm"
                >
                  {creatingPortal ? 'Generating Portal & Passcode...' : 'Create Portal & Generate Passcode'}
                </button>
              </form>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-zinc-300 mb-4">Active Client Portals ({portalsList.length})</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {portalsList.map(portal => {
                    const hasSubmitted = portal.selectedImages && portal.selectedImages.length > 0;
                    return (
                      <div key={portal._id} className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 flex flex-col justify-between gap-3">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h4 className="font-bold text-amber-300 truncate">{portal.clientName}</h4>
                            {hasSubmitted && (
                              <span className="bg-green-500/20 text-green-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-green-500/30 shrink-0">
                                Submitted ({portal.selectedImages.length})
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-400">Portal #{portal.portalNumber}</p>
                          <p className="text-xs text-amber-400/80 font-mono mt-1">Passcode: {portal.passcode}</p>
                        </div>

                        <div className="flex items-center gap-2 pt-2 border-t border-zinc-700/50">
                          {hasSubmitted ? (
                            <button 
                              onClick={() => setViewingPortalSelections(portal)}
                              className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded text-xs font-bold flex-1 transition-colors truncate"
                            >
                              View Selections ({portal.selectedImages.length})
                            </button>
                          ) : (
                            <span className="text-[11px] text-zinc-500 italic flex-1">No selection yet</span>
                          )}
                          <button 
                            onClick={() => handleDeletePortal(portal._id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded text-xs font-bold shrink-0"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Sections */}
        {sectionsConfig.map((sec) => {
          if (activeTab !== sec.title) return null;
          const currentData = sectionsData[sec.title] || { names: '', desc: '', images: [], descriptions: [], headings: [] };

          return (
            <SectionRenderer 
              key={sec.title}
              title={sec.title} 
              data={currentData} 
              setData={(newData) => setSectionsData({ ...sectionsData, [sec.title]: newData })} 
              onSave={() => handleSave(sec.title, currentData)} 
            />
          );
        })}
      </main>

      {/* Modal for View Selections */}
      {viewingPortalSelections && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 md:p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-4xl w-full p-4 md:p-6 max-h-[95vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-3 gap-2">
              <div className="overflow-hidden">
                <h3 className="text-lg md:text-xl font-bold text-amber-400 truncate">{viewingPortalSelections.clientName} - Selected Photos</h3>
                <p className="text-xs text-zinc-400">Portal #{viewingPortalSelections.portalNumber} (Total: {viewingPortalSelections.selectedImages.length})</p>
              </div>
              <button 
                onClick={() => setViewingPortalSelections(null)}
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold px-3 py-1.5 rounded-lg text-xs shrink-0"
              >
                ✕ Close
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6 p-3 md:p-4 bg-zinc-800/60 rounded-xl border border-zinc-700 items-stretch sm:items-center justify-between">
              <div className="text-xs text-zinc-300">
                ማዕቀብ: <span className="text-amber-400 font-bold">{viewingPortalSelections.selectedImages.length} ስእሊታት</span> ተመርጺዮም ኣለዉ።
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button 
                  onClick={async () => {
                    const defaultFolderName = `${viewingPortalSelections.clientName}_Selected_Photos`.replace(/\s+/g, '_');
                    const folderName = prompt("ናይቲ ፎልደር ሽም ኣእቱ (Enter Folder Name):", defaultFolderName);
                    if (!folderName) return;

                    alert('ስእሊታት ተኣኪቦም ዚፕ (Zip) ክሳብ ዝለኣኹ በጃኹም ቁሩብ ጽንሑ...');

                    try {
                      const zip = new JSZip();
                      const folder = zip.folder(folderName);

                      for (let i = 0; i < viewingPortalSelections.selectedImages.length; i++) {
                        const url = viewingPortalSelections.selectedImages[i];
                        try {
                          const response = await fetch(url);
                          const blob = await response.blob();
                          const extension = url.split('.').pop().split('?')[0] || 'jpg';
                          folder.file(`photo_${i + 1}.${extension}`, blob);
                        } catch (err) {
                          console.error(`Error fetching image ${i}:`, err);
                        }
                      }

                      const content = await zip.generateAsync({ type: 'blob' });
                      const blobUrl = window.URL.createObjectURL(content);
                      const link = document.createElement('a');
                      link.href = blobUrl;
                      link.download = `${folderName}.zip`;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      window.URL.revokeObjectURL(blobUrl);

                      alert('ኩሎም ስእሊታት ብሓደ ፎልደር (Zip) ብሰላም ወሪዶም!');
                    } catch (err) {
                      console.error("Zip generation error:", err);
                      alert('ስእሊታት ከውርድ እንተሎ ጌጋ ኣጋጢሙ።');
                    }
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  📦 Download All as Zip
                </button>

                <button 
                  onClick={() => {
                    const targetSection = prompt("እዞም ስእሊታት ናበይ ክሰጋገሩ ትደሊ? (Weddings, Bridal Shoots, ወይ Baby Shower & Baptism ብትኽክል ጽሓፍ):");
                    if (!targetSection) return;

                    const currentSecData = sectionsData[targetSection];
                    if (!currentSecData) {
                      alert('እቲ ዝበልካዮ ሽም ክፍሊ ኣይተረኽበን። በጃኹም ብትኽክል ጽሓፍዎ።');
                      return;
                    }

                    const updatedImages = [...(currentSecData.images || []), ...viewingPortalSelections.selectedImages];
                    setSectionsData({
                      ...sectionsData,
                      [targetSection]: { ...currentSecData, images: updatedImages }
                    });

                    alert(`ስእሊታት ብሰላም ናብቲ የዕሩኽ ፖርትፎሊዮ [ ${targetSection} ] ተሰጊሮም ኣለዉ! ሕጂ 'Save' ግበሮ።`);
                  }}
                  className="bg-amber-500 hover:bg-amber-600 text-black px-3 py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  🚀 Send to Portfolio
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
              {viewingPortalSelections.selectedImages.map((imgUrl, idx) => (
                <div key={idx} className="aspect-square bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden relative group">
                  <img src={imgUrl} alt={`Selected ${idx}`} className="w-full h-full object-cover" />
                  <a 
                    href={imgUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-bold text-amber-300 underline p-1 text-center"
                  >
                    View Full
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionRenderer({ title, data, setData, onSave }) {
  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach(file => {
      formData.append('images', file);
    });

    try {
      const res = await fetch(`https://habesha-film-production-server.onrender.com/api/projects/${title}/upload`, {
        method: 'POST',
        body: formData
      });

      if (!res.ok) throw new Error("Upload failed");
      
      const result = await res.json();
      const newImagesFromBackend = result.images || [];
      
      const updatedImages = [...(data.images || []), ...newImagesFromBackend];
      const updatedHeadings = [...(data.headings || [])];
      const updatedDescriptions = [...(data.descriptions || [])];

      newImagesFromBackend.forEach((_, i) => {
        const totalIdx = (data.images || []).length + i;
        updatedHeadings.push(`Featured Moment ${totalIdx + 1}`);
        updatedDescriptions.push(`0${totalIdx + 1}. A wonderful captured memory of the special day.`);
      });

      const newData = {
        ...data,
        images: updatedImages,
        headings: updatedHeadings,
        descriptions: updatedDescriptions
      };

      setData(newData);
      alert(`${newImagesFromBackend.length} ስእሊ(ታት) ተሰቒሎም ኣለዉ!`);
    } catch (err) {
      console.error("Upload Error:", err);
      alert("ስእሊ ክስቀል ኣይከኣለን!");
    }
  };

  const deleteImage = async (imgIndex) => {
    const updatedImages = (data.images || []).filter((_, i) => i !== imgIndex);
    const updatedHeadings = (data.headings || []).filter((_, i) => i !== imgIndex);
    const updatedDescriptions = (data.descriptions || []).filter((_, i) => i !== imgIndex);

    const newData = { 
      ...data, 
      images: updatedImages,
      headings: updatedHeadings,
      descriptions: updatedDescriptions
    };
    setData(newData);
  };

  const handleHeadingChange = (index, value) => {
    const updatedHeadings = [...(data.headings || [])];
    updatedHeadings[index] = value;
    setData({ ...data, headings: updatedHeadings });
  };

  const handleDescriptionChange = (index, value) => {
    const updatedDescriptions = [...(data.descriptions || [])];
    updatedDescriptions[index] = value;
    setData({ ...data, descriptions: updatedDescriptions });
  };

  return (
    <div className="p-4 md:p-8 border border-zinc-700 rounded-2xl bg-zinc-900 shadow-2xl overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b border-zinc-700 pb-4 gap-4">
        <h2 className="text-xl md:text-3xl font-bold text-amber-300">{title} Control Panel</h2>
        <button onClick={onSave} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold w-full sm:w-auto text-sm">
          Save {title}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col w-full">
          <label className="block text-zinc-400 mb-2 text-sm">Names / Title:</label>
          <input 
            type="text" 
            value={data.names || ''}
            onChange={(e) => setData({ ...data, names: e.target.value })}
            className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full text-white mb-6 text-sm"
            placeholder="ማእከላይ ሽም (ንኣብነት Sara & Robel)"
          />

          <label className="block text-zinc-400 mb-2 text-sm">Section Main Description (መግለጫ):</label>
          <textarea 
            rows="3"
            value={data.desc || ''}
            onChange={(e) => setData({ ...data, desc: e.target.value })}
            className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
            placeholder="እዚ ስራሕ እዚ ዝገልጽ ጽሑፍ ኣብዚ ጽሓፍ..."
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="block text-zinc-400 mb-2 text-sm">Upload Images (Multiple Allowed):</label>
          <input 
            type="file" 
            multiple
            onChange={handleImageUpload} 
            className="text-zinc-400 text-xs file:mr-2 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-amber-500 file:text-black hover:file:bg-amber-400 w-full bg-zinc-800 p-2 rounded-lg" 
          />
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h3 className="text-lg md:text-xl font-semibold text-amber-400 border-b border-zinc-800 pb-2">Manage Image Headings & Descriptions</h3>
        {data.images && data.images.map((img, index) => {
          const defaultHeading = `Featured Moment ${index + 1}`;
          const defaultDesc = `0${index + 1}. A wonderful captured memory of the special day.`;

          return (
            <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 bg-zinc-800/50 border border-zinc-700 rounded-xl items-center">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 border border-zinc-700 rounded-lg overflow-hidden w-full sm:w-auto">
                <img src={img} className="w-full h-full object-cover" alt="upload" />
                <button onClick={() => deleteImage(index)} className="absolute top-0 right-0 bg-red-600 text-white px-2 py-0.5 text-xs font-bold">&times;</button>
              </div>
              <div className="flex-1 w-full space-y-3">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Image {index + 1} Heading:</label>
                  <input 
                    type="text"
                    value={data.headings && data.headings[index] !== undefined ? data.headings[index] : defaultHeading}
                    onChange={(e) => handleHeadingChange(index, e.target.value)}
                    className="bg-zinc-900 border border-zinc-700 p-2 rounded w-full text-xs md:text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Image {index + 1} Description:</label>
                  <input 
                    type="text"
                    value={data.descriptions && data.descriptions[index] !== undefined ? data.descriptions[index] : defaultDesc}
                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                    className="bg-zinc-900 border border-zinc-700 p-2 rounded w-full text-xs md:text-sm text-white"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminDashboard;