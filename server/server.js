
import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import connectDB from './Database Connection/DB.js';
import projectRoutes from './Route/projectRoutes.js';
import authRoutes from './Route/authRoutes.js';
import clientRoutes from './Route/clientRoutes.js';
import packageRoutes from './Route/packageRoutes.js';
import notebookRoutes from './Route/notebookRoutes.js';

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

// 5. Routes
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/client', clientRoutes);
app.use('/api/packages', packageRoutes);
app.use(
  '/api/notebook',
  notebookRoutes
);

// 6. ሰርቨር ኣበግሶ (ናብ server variable ለዊጥካ ኣብዚ Timeout ክትውስኾ ትኽእል)
const PORT = process.env.PORT || 5000;

// 👇 ኣብዚ ጌርካ ቐምጦ 👇
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Timeout ናብ 5 ደቓይቕ (300000 ms) ምዝላቕ
server.timeout = 300000;
server.keepAliveTimeout = 300000;