

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Welcome from './components/Welcome'; // ሓድሽ ኮምፖነንትካ
import Gallery from './components/Gallery'; // ኣብዚ ኮምፖነንት ኣሎ
import AdminLogin from './components/AdminLogin'; // ኣብዚ ኮምፖነንት ኣሎ
import AdminDashboard from './components/AdminDashboard'; // ኣብዚ ኮምፖነንት ኣሎ

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* መጀመርታ ናብ ዌልካም ቪዲዮ ይኣትዉ */}
        <Route path="/" element={<Welcome />} />
        
        {/* ምስ ተወድአ ወይ ክሊክ ምስ ገበሩ ናብ Home ይሓልፉ */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery/:category" element={<Gallery />} /> 
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;