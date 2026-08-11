
// import 'dotenv/config'; 
// import express from 'express';
// import cors from 'cors';
// import connectDB from './Database Connection/DB.js';
// import projectRoutes from './Route/projectRoutes.js';
// import authRoutes from './Route/authRoutes.js';
// import clientRoutes from './Route/clientRoutes.js'; // ወይ ከከም መገሻ ናይቲ ፎልደርካ

// // 1. መጀመርያ app ፍጠር
// const app = express(); 

// // 2. ድሕሪኡ middleware ተጠቐመሉ
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));

// // CORS configuration
// app.use(cors({
//     origin: '*',
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }));

// // 3. ዳታቤዝ ኣራኽብ
// connectDB();

// // 4. Routes
// app.use('/api/projects', projectRoutes);
// app.use('/api/auth', authRoutes);
// // ኣብ server.js
// app.use((req, res, next) => {
//     console.log(`${req.method} request to ${req.url}`);
//     next();
// });
// app.use('/api/client', clientRoutes);
// // 5. ሰርቨር ኣበግሶ
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import connectDB from './Database Connection/DB.js';
import projectRoutes from './Route/projectRoutes.js';
import authRoutes from './Route/authRoutes.js';
import clientRoutes from './Route/clientRoutes.js';
import SitePrices from './models/sitePrices.js';

// 1. መጀመርያ app ፍጠር
const app = express(); 

// 2. ድሕሪኡ middleware ተጠቐመሉ
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// CORS configuration
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// 3. ዳታቤዝ ኣራኽብ
connectDB();

// 4. Logging Middleware (ቅድሚ ኩሎም Routes ክቐመጥ ኣለዎ!)
app.use((req, res, next) => {
    console.log(`🔥 [${req.method}] Request made to: ${req.url}`);
    next();
});
app.get('/api/prices', async (req, res) => {
    try {
        let priceData = await SitePrices.findOne({ title: 'site_prices_config' });
        if (!priceData || !priceData.packages) {
            return res.json([]);
        }
        res.json(priceData.packages);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching prices' });
    }
});

app.put('/api/prices', async (req, res) => {
    try {
        const { passcode, packages } = req.body;
        
        // (ស្រេចចិត្ត) ልክ እንደ አስፈላጊነቱ የፓስኮድ ማረጋገጫ እዚህም ማድረግ ይቻላል
        
        let priceData = await SitePrices.findOneAndUpdate(
            { title: 'site_prices_config' },
            { $set: { packages: packages } },
            { new: true, upsert: true }
        );
        res.json({ success: true, message: 'Prices updated successfully', packages: priceData.packages });
    } catch (err) {
        console.error("Error updating prices:", err);
        res.status(500).json({ message: "Error updating prices" });
    }
});
// 5. Routes
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/client', clientRoutes);

// 6. ሰርቨር ኣበግሶ
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));