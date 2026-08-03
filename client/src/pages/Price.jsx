// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// function Price() {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     sessionStorage.getItem('priceAuth') === 'true'
//   );
//   const [passcode, setPasscode] = useState('');
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(false);

//     try {
//       // ናብቲ ናይ Backend ሰርቨርካ እንሰዶ ሓበሬታ
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
//         sessionStorage.setItem('priceAuth', 'true');
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
//     <div className="min-h-screen bg-[#fcfbf9] text-zinc-900 font-sans flex flex-col justify-between">
//       <Navbar />

//       <div className="flex-grow flex items-center justify-center px-4 py-32">
//         {!isAuthenticated ? (
//           <div className="bg-white p-8 md:p-12 shadow-2xl border border-zinc-200 max-w-md w-full text-center">
//             <h2 className="text-2xl font-serif mb-4 text-zinc-900">Protected Price Page</h2>
//             <p className="text-sm text-zinc-600 mb-6">እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ።</p>
            
//             <form onSubmit={handleLogin} className="space-y-4">
//               <input 
//                 type="password"
//                 placeholder="Enter Passcode"
//                 value={passcode}
//                 onChange={(e) => setPasscode(e.target.value)}
//                 className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-zinc-900 text-center tracking-widest text-lg"
//               />
//               <button 
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-zinc-900 text-white py-3 uppercase text-xs font-bold tracking-widest hover:bg-zinc-800 transition-colors disabled:opacity-50"
//               >
//                 {loading ? 'Checking...' : 'Submit'}
//               </button>
//               {error && <p className="text-red-500 text-xs mt-2">ጌጋ ፓስኮድ! ደጊምካ ፈትን።</p>}
//             </form>
//           </div>
//         ) : (
//           /* ትሕዝቶ ናይ Price */
//           <div className="max-w-4xl mx-auto text-center px-6">
//             <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Pricing Plans</h1>
//             <p className="text-zinc-600 text-lg mb-12">እንቋዕ ብደሓን መጻእኩም! ዋጋታትና ኣብዚ ታሕቲ ኣለዉ።</p>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="p-8 border border-zinc-200 bg-white shadow-lg">
//                 <h3 className="font-bold text-xl mb-2">Basic Package</h3>
//                 <p className="text-3xl font-serif mb-4">$500</p>
//               </div>
//               <div className="p-8 border border-zinc-900 bg-zinc-900 text-white shadow-lg">
//                 <h3 className="font-bold text-xl mb-2">Standard Package</h3>
//                 <p className="text-3xl font-serif mb-4">$1000</p>
//               </div>
//               <div className="p-8 border border-zinc-200 bg-white shadow-lg">
//                 <h3 className="font-bold text-xl mb-2">Premium Package</h3>
//                 <p className="text-3xl font-serif mb-4">$1500</p>
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

  // ገጽ ምስ ተኸፈተ ግዜ (10 ደቓይቕ) ምርካብን ምጽራይን
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

        // ን10 ደቓይቕ ዝጸንሕ ግዜ ቐምጥ (10 mins * 60 secs * 1000 ms)
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

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-zinc-900 font-sans flex flex-col justify-between">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4 py-32">
        {!isAuthenticated ? (
          <div className="bg-white p-8 md:p-12 shadow-2xl border border-zinc-200 max-w-md w-full text-center">
            <h2 className="text-2xl font-serif mb-4 text-zinc-900">Protected Price Page</h2>
            <p className="text-sm text-zinc-600 mb-6">እዚ ገጽ ብሚጢራዊ ፓስኮድ ዝተዓጸወ እዩ። በጃኹም ፓስኮድ ኣእትዉ።</p>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <input 
                type="password"
                placeholder="Enter Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 border border-zinc-300 focus:outline-none focus:border-zinc-900 text-center tracking-widest text-lg"
              />
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-zinc-900 text-white py-3 uppercase text-xs font-bold tracking-widest hover:bg-zinc-800 transition-colors disabled:opacity-50"
              >
                {loading ? 'Checking...' : 'Submit'}
              </button>
              {error && <p className="text-red-500 text-xs mt-2">ጌጋ ፓስኮድ! ደጊምካ ፈትን።</p>}
            </form>
          </div>
        ) : (
          /* ትሕዝቶ ናይ Professional Pricing Packages (4 ደረጃታት) */
          <div className="max-w-7xl mx-auto text-center px-6 py-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-zinc-900">Our Professional Packages</h1>
            <p className="text-zinc-600 text-lg mb-16 max-w-2xl mx-auto">
              ንመጻኢ ፕሮጀክትታትኩም ዝኸውን ዝተፈላለየ ሞያዊ ኣገልግሎታት። ካብቶም ማእከላይ ደረጃታት ክሳብቲ ፍሉይ ወርቃውን ፕሪሚየምን ጽፍሕታት ምረጹ።
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              
              {/* 1. Basic Package */}
              <div className="bg-white border border-zinc-200 p-8 shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-zinc-400">Starter</span>
                  <h3 className="text-2xl font-serif mt-1 mb-3 text-zinc-900">Basic</h3>
                  <p className="text-3xl font-serif font-bold text-zinc-900 mb-6">$300</p>
                  <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                    ንንእሽቱ ስራሕቲ ዝኸውን ቀሊልን ጽሩይን ናይ ቀረጻን ምድላውን ኣገልግሎት።
                  </p>
                  <ul className="text-sm text-zinc-600 space-y-3 mb-8">
                    <li className="flex items-center gap-2">✓ 1 ቀን ቀረጻ</li>
                    <li className="flex items-center gap-2">✓ ሓደ ቀሊል ቪድዮ ኤዲቲንግ</li>
                    <li className="flex items-center gap-2 text-zinc-400">✕ ከይዲ ድምጺ ምምሕያሽ (Advanced Audio)</li>
                    <li className="flex items-center gap-2 text-zinc-400">✕ ቦናስ ዲጂታል ፖስተር</li>
                  </ul>
                </div>
                <button className="w-full bg-zinc-100 text-zinc-900 py-3 text-xs uppercase font-bold tracking-widest hover:bg-zinc-900 hover:text-white transition-colors">
                  Select Package
                </button>
              </div>

              {/* 2. Standard Package */}
              <div className="bg-white border border-zinc-200 p-8 shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-600">Popular</span>
                  <h3 className="text-2xl font-serif mt-1 mb-3 text-zinc-900">Standard</h3>
                  <p className="text-3xl font-serif font-bold text-zinc-900 mb-6">$600</p>
                  <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                    ንመብዛሕትኡ ስራሕቲ ዝኸውን ማእከላይ ደረጃ ዘለዎ ምሉእ ኣገልግሎት ቀረጻ።
                  </p>
                  <ul className="text-sm text-zinc-600 space-y-3 mb-8">
                    <li className="flex items-center gap-2">✓ 2 መዓልቲ ቀረጻ</li>
                    <li className="flex items-center gap-2">✓ ክልተ ናይ ኤዲቲንግ ሪቪዥን</li>
                    <li className="flex items-center gap-2">✓ ጽሩይ ናይ ስቱድዮ ድምጺ</li>
                    <li className="flex items-center gap-2 text-zinc-400">✕ ቦናስ ዲጂታል ፖስተር</li>
                  </ul>
                </div>
                <button className="w-full bg-zinc-100 text-zinc-900 py-3 text-xs uppercase font-bold tracking-widest hover:bg-zinc-900 hover:text-white transition-colors">
                  Select Package
                </button>
              </div>

              {/* 3. Gold Package */}
              <div className="bg-white border-2 border-amber-500 p-8 shadow-xl relative flex flex-col justify-between transition-transform hover:-translate-y-1">
                <span className="absolute -top-3 right-6 bg-amber-500 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                  Best Value
                </span>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-600">Advanced</span>
                  <h3 className="text-2xl font-serif mt-1 mb-3 text-zinc-900">Gold</h3>
                  <p className="text-3xl font-serif font-bold text-zinc-900 mb-6">$1,200</p>
                  <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                    ንዓበይቲ ስራሕቲን መርዓታትን ዝተዳለወ ሰፊሕ ቀረጻን ፍሉይ ትሕዝቶን።
                  </p>
                  <ul className="text-sm text-zinc-700 space-y-3 mb-8 font-medium">
                    <li className="flex items-center gap-2">✓ ምሉእ መዓልቲ ሰፊሕ ቀረጻ</li>
                    <li className="flex items-center gap-2">✓ 4K Ultra HD ቪድዮ ኳሊቲ</li>
                    <li className="flex items-center gap-2">✓ <b>Drone Footage</b> (ናይ ኣየር ቀረጻ)</li>
                    <li className="flex items-center gap-2 text-amber-600 font-bold">🎁 <b>ቦናስ:</b> 2 ነጻ ሰሻል ሚድያ ማርኬቲንግ ቪድዮታት</li>
                  </ul>
                </div>
                <button className="w-full bg-amber-500 text-white py-3 text-xs uppercase font-bold tracking-widest hover:bg-amber-600 transition-colors">
                  Select Gold
                </button>
              </div>

              {/* 4. Premium Package */}
              <div className="bg-zinc-900 text-white border border-zinc-900 p-8 shadow-xl flex flex-col justify-between transition-transform hover:-translate-y-1">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Ultimate VIP</span>
                  <h3 className="text-2xl font-serif mt-1 mb-3 text-white">Premium</h3>
                  <p className="text-3xl font-serif font-bold text-amber-400 mb-6">$2,000+</p>
                  <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                    ዝለዓለ ደረጃ ሞያዊ ክእለትን ብርክት ዝበሉ መሳርሒታትን ተጠቒምካ ዝስራሕ ቪአይፒ ኣገልግሎት።
                  </p>
                  <ul className="text-sm text-zinc-300 space-y-3 mb-8">
                    <li className="flex items-center gap-2">✓ ዘይተወሰነ ሰዓታት ቀረጻ (Unlimited)</li>
                    <li className="flex items-center gap-2">✓ ክልተ ኤክስፐርት ካሜራማን</li>
                    <li className="flex items-center gap-2">✓ <b>Cinematic Color Grading</b> & VFX</li>
                    <li className="flex items-center gap-2 text-amber-400 font-bold">🎁 <b>ቦናስ:</b> ምሉእ ድሮን ቀረጻ + ሓደ ነጻ ዌብሳይት ባነር</li>
                  </ul>
                </div>
                <button className="w-full bg-amber-500 text-white py-3 text-xs uppercase font-bold tracking-widest hover:bg-amber-400 hover:text-zinc-900 transition-colors">
                  Select Premium
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