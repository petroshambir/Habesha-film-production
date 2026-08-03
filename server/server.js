
import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import connectDB from './Database Connection/DB.js';
import projectRoutes from './Route/projectRoutes.js';
import authRoutes from './Route/authRoutes.js';
import clientRoutes from './routes/clientRoutes.js'; // ወይ ከከም መገሻ ናይቲ ፎልደርካ

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

// 4. Routes
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);
// ኣብ server.js
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});
app.use('/api/client', clientRoutes);
// 5. ሰርቨር ኣበግሶ
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));