// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// function ClientSelection() {
//   const [portals, setPortals] = useState([]);
//   const [project, setProject] = useState(null);
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [fetchingPortals, setFetchingPortals] = useState(true);
//   const [error, setError] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   // ኩሎም ንጡፋት ፖርታልስ ካብ ሰርቨር ንምጽዋዕ
//   useEffect(() => {
//     fetchPortals();
//   }, []);

//   const fetchPortals = async () => {
//     try {
//       const response = await fetch('https://habesha-film-production-server.onrender.com/api/client/portals');
//       if (response.ok) {
//         const data = await response.json();
//         setPortals(data);
//       } else {
//         setError('ፖርታልስ ከተጽውዕ ኣይከኣለን።');
//       }
//     } catch (err) {
//       console.error("Error fetching portals:", err);
//       setError('ሰርቨር ጌጋ ኣጋጢሙ ኣሎ።');
//     } finally {
//       setFetchingPortals(false);
//     }
//   };

//   // ሓደ ከስተመር ሽሙ ምስ ጠወቐ ቀጥታ ናብቲ ናቱ ፖርታል ንምእታው
//   const handleSelectClient = (portal) => {
//     setProject(portal);
//     setSelectedImages(portal.selectedImages || []);
//   };

//   const handleCheckboxChange = (imageUrl) => {
//     if (selectedImages.includes(imageUrl)) {
//       setSelectedImages(selectedImages.filter(img => img !== imageUrl));
//     } else {
//       setSelectedImages([...selectedImages, imageUrl]);
//     }
//   };

//   const handleSubmitSelection = async () => {
//     if (selectedImages.length === 0) {
//       alert('ብዘይውሕድ ሓደ ስእሊ ክትመርጽ ኣለካ!');
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(`https://habesha-film-production-server.onrender.com/api/client/submit-selection/${project._id}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ selectedImages }),
//       });

//       const data = await response.json();
//       if (response.ok && data.success) {
//         setSubmitted(true);
//       } else {
//         alert('ምልኣክ ኣይከኣለን። ደጊምካ ፈትን።');
//       }
//     } catch (err) {
//       console.error("Submit error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#fcfbf9] text-zinc-900 font-sans flex flex-col justify-between">
//       <Navbar />

//       <div className="flex-grow flex flex-col items-center justify-center px-4 py-24">
//         {!project ? (
//           <div className="bg-white p-8 md:p-12 shadow-2xl border border-zinc-200 max-w-xl w-full text-center">
//             <h2 className="text-2xl font-serif mb-2 text-zinc-900">Client Photo Selection Portals</h2>
//             <p className="text-sm text-zinc-600 mb-6">በጃኹም ንምርጫ ስእሊታት ናይቲ ስቱድዮ ስምኩም ጠውቑ።</p>

//             {fetchingPortals ? (
//               <p className="text-sm text-zinc-400 py-6">Loading portals...</p>
//             ) : error ? (
//               <p className="text-red-500 text-xs py-4">{error}</p>
//             ) : portals.length === 0 ? (
//               <p className="text-sm text-zinc-500 py-6">ዝተዳለወ ፖርታል የለን።</p>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto p-1">
//                 {portals.map((portal) => (
//                   <button
//                     key={portal._id}
//                     onClick={() => handleSelectClient(portal)}
//                     className="p-4 border border-zinc-200 bg-zinc-50 hover:bg-zinc-900 hover:text-white transition-all text-left flex flex-col justify-between rounded-lg group shadow-sm"
//                   >
//                     <div>
//                       <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600 group-hover:text-amber-400">Portal #{portal.portalNumber}</span>
//                       <h3 className="text-base font-serif font-bold text-zinc-900 group-hover:text-white mt-1">{portal.clientName}</h3>
//                     </div>
//                     <span className="text-xs text-zinc-500 group-hover:text-zinc-300 mt-3 flex items-center gap-1 font-semibold">
//                       Select Photos &rarr;
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         ) : submitted ? (
//           <div className="bg-white p-10 shadow-xl border border-zinc-200 max-w-md w-full text-center">
//             <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
//             <h2 className="text-2xl font-serif mb-2 text-zinc-900">ምርጫኹም ብዕወት ተሰዲዱ ኣሎ!</h2>
//             <p className="text-sm text-zinc-600 mb-6">
//               ንሕና ነቲ ዝመረጽኩዎም <b>{selectedImages.length}</b> ስእሊታት ተቐቢልና ኤዲቲንግ ክንጅምር ኢና።
//             </p>
//             <button 
//               onClick={() => { setProject(null); setSubmitted(false); }}
//               className="bg-zinc-900 text-white px-6 py-2 text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-colors"
//             >
//               Back to Portals
//             </button>
//           </div>
//         ) : (
//           <div className="max-w-7xl w-full mx-auto px-4">
//             <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b pb-6 sticky top-20 bg-[#fcfbf9] z-10 py-4">
//               <div>
//                 <button 
//                   onClick={() => setProject(null)}
//                   className="text-xs uppercase font-bold tracking-widest text-zinc-500 hover:text-zinc-900 mb-2 flex items-center gap-1"
//                 >
//                   &larr; Back to Client List
//                 </button>
//                 <span className="text-xs uppercase font-bold tracking-widest text-amber-600">Welcome, {project.clientName}</span>
//                 <h1 className="text-3xl font-serif text-zinc-900">Portal #{project.portalNumber} - Photo Selection</h1>
//               </div>
              
//               <div className="mt-4 md:mt-0 flex items-center gap-4">
//                 <div className="bg-zinc-900 text-white px-6 py-3 rounded-none shadow-md text-sm font-medium">
//                   Selected Images: <span className="text-amber-400 font-bold text-lg">{selectedImages.length}</span>
//                 </div>
//                 <button 
//                   onClick={handleSubmitSelection}
//                   disabled={loading || selectedImages.length === 0}
//                   className="bg-amber-600 text-white px-6 py-3 text-xs uppercase font-bold tracking-widest hover:bg-amber-700 transition-colors disabled:opacity-50 shadow-md"
//                 >
//                   {loading ? 'Sending...' : 'Send to Studio'}
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//               {project.images.map((imgUrl, index) => {
//                 const isSelected = selectedImages.includes(imgUrl);
//                 return (
//                   <div 
//                     key={index} 
//                     onClick={() => handleCheckboxChange(imgUrl)}
//                     className={`relative group cursor-pointer overflow-hidden border-2 transition-all ${
//                       isSelected ? 'border-amber-600 shadow-lg scale-[0.98]' : 'border-transparent hover:border-zinc-300'
//                     }`}
//                   >
//                     <img 
//                       src={imgUrl} 
//                       alt={`Client photo ${index + 1}`} 
//                       className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
//                       loading="lazy"
//                     />
                    
//                     <div className="absolute top-3 right-3">
//                       <input 
//                         type="checkbox" 
//                         checked={isSelected}
//                         onChange={() => {}}
//                         className="w-5 h-5 accent-amber-600 cursor-pointer pointer-events-none"
//                       />
//                     </div>

//                     {isSelected && (
//                       <div className="absolute inset-0 bg-amber-600/20 pointer-events-none flex items-center justify-center">
//                         <span className="bg-amber-600 text-white text-[10px] uppercase font-bold px-2 py-1 tracking-widest shadow">
//                           Selected
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default ClientSelection;

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ClientSelection() {
  const [portals, setPortals] = useState([]);
  const [project, setProject] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchingPortals, setFetchingPortals] = useState(true);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // ሓድሽ ንፓስኮድ ዝምልከት ስቴት
  const [selectedPortalForPasscode, setSelectedPortalForPasscode] = useState(null);
  const [enteredPasscode, setEnteredPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');

  // ኩሎም ንጡፋት ፖርታልስ ካብ ሰርቨር ንምጽዋዕ
  useEffect(() => {
    fetchPortals();
  }, []);

  const fetchPortals = async () => {
    try {
      const response = await fetch('https://habesha-film-production-server.onrender.com/api/client/portals');
      if (response.ok) {
        const data = await response.json();
        setPortals(data);
      } else {
        setError('ፖርታልስ ከተጽውዕ ኣይከኣለን።');
      }
    } catch (err) {
      console.error("Error fetching portals:", err);
      setError('ሰርቨር ጌጋ ኣጋጢሙ ኣሎ።');
    } finally {
      setFetchingPortals(false);
    }
  };

  // ሓደ ከስተመር ሽሙ ምስ ጠወቐ ቀጥታ ናብ ስእሊ ከይሰጋገረ፡ ፓስኮድ ንምእታው ንምሕታት
  const handleSelectClient = (portal) => {
    setSelectedPortalForPasscode(portal);
    setEnteredPasscode('');
    setPasscodeError('');
  };

  // ፓስኮድ ምርጋጽ
  const handleVerifyPasscode = (e) => {
    e.preventDefault();
    if (enteredPasscode.trim() === selectedPortalForPasscode.passcode.trim()) {
      setProject(selectedPortalForPasscode);
      setSelectedImages(selectedPortalForPasscode.selectedImages || []);
      setSelectedPortalForPasscode(null); // ንፓስኮድ ፕላትፎርም መሸፈኒ ንምእላይ
    } else {
      setPasscodeError('ዝኣተውዎ ፓስኮድ ጌጋ እዩ። ደጊምካ ፈትን!');
    }
  };

  const handleCheckboxChange = (imageUrl) => {
    if (selectedImages.includes(imageUrl)) {
      setSelectedImages(selectedImages.filter(img => img !== imageUrl));
    } else {
      setSelectedImages([...selectedImages, imageUrl]);
    }
  };

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
        {/* ፓስኮድ መእተዊ ፕላትፎርም (Modal) */}
        {selectedPortalForPasscode && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full border border-zinc-200 text-center relative">
              <h3 className="text-2xl font-serif font-bold text-zinc-900 mb-2">Enter Portal Passcode</h3>
              <p className="text-sm text-zinc-600 mb-6">
                ናብ <b>{selectedPortalForPasscode.clientName}</b> ፖርታል ንምእታው በጃኹም እቲ ካብ ስቱድዮ ዝተዋህበኩም ኮድ ኣእትዉ።
              </p>

              <form onSubmit={handleVerifyPasscode} className="space-y-4">
                <input 
                  type="password"
                  maxLength="4"
                  value={enteredPasscode}
                  onChange={(e) => setEnteredPasscode(e.target.value)}
                  placeholder="**** (Passcode)"
                  className="bg-zinc-50 border border-zinc-300 p-3 rounded-lg w-full text-center text-2xl tracking-widest text-zinc-900 font-mono focus:outline-none focus:border-amber-600"
                  required
                />
                {passcodeError && <p className="text-red-500 text-xs">{passcodeError}</p>}
                
                <div className="flex gap-3 pt-2">
                  <button 
                    type="button"
                    onClick={() => setSelectedPortalForPasscode(null)}
                    className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-lg text-xs uppercase font-bold tracking-widest hover:bg-zinc-300 w-1/2"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="bg-amber-600 text-white px-4 py-2 rounded-lg text-xs uppercase font-bold tracking-widest hover:bg-amber-700 w-1/2"
                  >
                    Verify & Enter
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {!project ? (
          <div className="bg-white p-8 md:p-12 shadow-2xl border border-zinc-200 max-w-xl w-full text-center">
            <h2 className="text-2xl font-serif mb-2 text-zinc-900">Client Photo Selection Portals</h2>
            <p className="text-sm text-zinc-600 mb-6">በጃኹም ንምርጫ ስእሊታት ናይቲ ስቱድዮ ስምኩም ጠውቑ።</p>

            {fetchingPortals ? (
              <p className="text-sm text-zinc-400 py-6">Loading portals...</p>
            ) : error ? (
              <p className="text-red-500 text-xs py-4">{error}</p>
            ) : portals.length === 0 ? (
              <p className="text-sm text-zinc-500 py-6">ዝተዳለወ ፖርታል የለን።</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto p-1">
                {portals.map((portal) => (
                  <button
                    key={portal._id}
                    onClick={() => handleSelectClient(portal)}
                    className="p-4 border border-zinc-200 bg-zinc-50 hover:bg-zinc-900 hover:text-white transition-all text-left flex flex-col justify-between rounded-lg group shadow-sm"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600 group-hover:text-amber-400">Portal #{portal.portalNumber}</span>
                      <h3 className="text-base font-serif font-bold text-zinc-900 group-hover:text-white mt-1">{portal.clientName}</h3>
                    </div>
                    <span className="text-xs text-zinc-500 group-hover:text-zinc-300 mt-3 flex items-center gap-1 font-semibold">
                      Enter Passcode &rarr;
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : submitted ? (
          <div className="bg-white p-10 shadow-xl border border-zinc-200 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
            <h2 className="text-2xl font-serif mb-2 text-zinc-900">ምርጫኹም ብዕወት ተሰዲዱ ኣሎ!</h2>
            <p className="text-sm text-zinc-600 mb-6">
              ንሕና ነቲ ዝመረጽኩዎም <b>{selectedImages.length}</b> ስእሊታት ተቐቢልና ኤዲቲንግ ክንጅምር ኢና።
            </p>
            <button 
              onClick={() => { setProject(null); setSubmitted(false); }}
              className="bg-zinc-900 text-white px-6 py-2 text-xs uppercase font-bold tracking-widest hover:bg-zinc-800 transition-colors"
            >
              Back to Portals
            </button>
          </div>
        ) : (
          <div className="max-w-7xl w-full mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b pb-6 sticky top-20 bg-[#fcfbf9] z-10 py-4">
              <div>
                <button 
                  onClick={() => setProject(null)}
                  className="text-xs uppercase font-bold tracking-widest text-zinc-500 hover:text-zinc-900 mb-2 flex items-center gap-1"
                >
                  &larr; Back to Client List
                </button>
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
                    
                    <div className="absolute top-3 right-3">
                      <input 
                        type="checkbox" 
                        checked={isSelected}
                        onChange={() => {}}
                        className="w-5 h-5 accent-amber-600 cursor-pointer pointer-events-none"
                      />
                    </div>

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