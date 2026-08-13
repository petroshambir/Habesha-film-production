
import express from 'express';
import ClientProject from '../models/ClientProject.js';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import sharp from 'sharp';

const router = express.Router();

// 🟢 Cloudinary Config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Memory Storage ን Sharp ንምጥቃም
const upload = multer({ storage: multer.memoryStorage() });

// 0. [ADMIN & CLIENT] ኩሎም ፖርታልስ ንምጽዋዕ
router.get('/portals', async (req, res) => {
    try {
        const portals = await ClientProject.find().sort({ createdAt: -1 });
        res.status(200).json(portals);
    } catch (err) {
        console.error("Error fetching portals:", err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// 🟢 0.1 [ADMIN] ንብዙሓት ስእሊታት ብባች (Batch) ምስ Sharp (ኦርጂናልን ኮምፕረስድን ብሓደ)

// router.post('/upload-image', upload.array('images', 500), async (req, res) => {
//     try {
//         console.log(`Upload request received. Total files: ${req.files ? req.files.length : 0}`);

//         if (!req.files || req.files.length === 0) {
//             return res.status(400).json({ success: false, message: "No files uploaded" });
//         }

//         const uploadPromises = req.files.map(async (file) => {
//             // 1. ኦርጂናል ስእሊ ናብ Cloudinary ምስቀል
//             const originalUpload = await new Promise((resolve, reject) => {
//                 cloudinary.uploader.upload_stream({ folder: 'client_portals' }, (error, result) => {
//                     if (error) reject(error);
//                     else resolve(result.secure_url);
//                 }).end(file.buffer);
//             });

//             // 2. ኮምፕረስ ዝኾነ ስእሊ (Sharp) ብምጥቃም ኣዳልዎ
//             const compressedBuffer = await sharp(file.buffer)
//                 .resize(800) // 800px ወርዲ
//                 .jpeg({ quality: 60 }) 
//                 .toBuffer();

//             // 3. ኮምፕረስ ዝኾነ ስእሊ ናብ Cloudinary (ፍሉይ ፎልደር) ምስቀል
//             const compressedUpload = await new Promise((resolve, reject) => {
//                 cloudinary.uploader.upload_stream({ folder: 'client_portals_compressed' }, (error, result) => {
//                     if (error) reject(error);
//                     else resolve(result.secure_url);
//                 }).end(compressedBuffer);
//             });

//             // ክልቲኡ ናብ Object ተማሊሱ ይኸይድ
//             return {
//                 original: originalUpload,
//                 compressed: compressedUpload
//             };
//         });

//         const results = await Promise.all(uploadPromises);
        
//         res.status(200).json({ 
//             success: true, 
//             imageUrl: results[0].original, // ንመቐጸርታ ድሕነት ንሓደ ኦርጂናል
//             images: results // [{ original: '...', compressed: '...' }, ...]
//         });
//     } catch (err) {
//         console.error("CRITICAL UPLOAD ERROR:", err);
//         res.status(500).json({ 
//             success: false, 
//             message: 'Server error during upload: ' + err.message 
//         });
//     }
// });

// // 1. [ADMIN] ሓድሽ ፎልደርን ፓስኮድን ምፍጣር
// router.post('/create-portal', async (req, res) => {
//     try {
//         const { clientName, portalNumber, images } = req.body;
//         const passcode = Math.floor(1000 + Math.random() * 9000).toString();

//         const newProject = new ClientProject({
//             clientName,
//             passcode,
//             portalNumber,
//             images,
//             selectedImages: []
//         });

//         await newProject.save();
//         res.status(201).json({ success: true, passcode, newProject });
//     } catch (err) {
//         console.error("Error creating portal:", err);
//         res.status(500).json({ success: false, message: 'Server error' });
//     }
// });

// // 2. [CLIENT] ብፓስኮድ ኣቲኻ ፖርታል ምርካብ (Verify Passcode)
// router.post('/verify-client-passcode', async (req, res) => {
//     try {
//         const { passcode } = req.body;
//         if (!passcode) {
//             return res.status(400).json({ success: false, message: "Passcode is required" });
//         }

//         const project = await ClientProject.findOne({ passcode: passcode.trim() });

//         if (!project) {
//             return res.status(401).json({ success: false, message: "ይቕሬታ፣ ዝኣተውዎ ፓስኮድ ቅኑዕ አይደለም (Invalid Passcode)" });
//         }

//         res.status(200).json({ success: true, project });
//     } catch (err) {
//         console.error("Error verifying client passcode:", err);
//         res.status(500).json({ success: false, message: 'Server error' });
//     }
// });
// 🟢 0.1 [ADMIN] ንብዙሓት ስእሊታት ብንኡኡስ ጉጅለ (Batch) ምስ Sharp
router.post('/upload-image', upload.array('images', 500), async (req, res) => {
    try {
        console.log(`Upload request received. Total files: ${req.files ? req.files.length : 0}`);

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ success: false, message: "No files uploaded" });
        }

        const results = [];

        // ነፍሲ ወከፍ ስእሊ በብተራ (Sequential) ንምጽዓን ሰርቨር ንዘይምጽቃጥ
        for (const file of req.files) {
            // 1. ኦርጂናል ስእሊ ናብ Cloudinary ምጽዓን
            const originalUpload = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({ folder: 'client_portals' }, (error, result) => {
                    if (error) reject(error);
                    else resolve(result.secure_url);
                }).end(file.buffer);
            });

            // 2. ኮምፕረስ ዝኾነ ስእሊ (Sharp)
            const compressedBuffer = await sharp(file.buffer)
                .resize(800)
                .jpeg({ quality: 60 })
                .toBuffer();

            // 3. ኮምፕረስ ዝኾነ ስእሊ ናብ Cloudinary ምጽዓን
            const compressedUpload = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({ folder: 'client_portals_compressed' }, (error, result) => {
                    if (error) reject(error);
                    else resolve(result.secure_url);
                }).end(compressedBuffer);
            });

            results.push({
                original: originalUpload,
                compressed: compressedUpload
            });
        }

        res.status(200).json({ 
            success: true, 
            imageUrl: results[0].original,
            images: results 
        });
    } catch (err) {
        console.error("CRITICAL UPLOAD ERROR:", err);
        res.status(500).json({ 
            success: false, 
            message: 'Server error during upload: ' + err.message 
        });
    }
});

// 3. [CLIENT] ካስተመር ዝመረጾም ስእሊታት ምልኣክ (Submit Selected Images)
router.post('/submit-selection/:id', async (req, res) => {
    try {
        const { selectedImages } = req.body;
        const project = await ClientProject.findByIdAndUpdate(
            req.params.id,
            { selectedImages, isCompleted: true },
            { new: true }
        );

        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        res.status(200).json({ success: true, message: "Selection submitted successfully", project });
    } catch (err) {
        console.error("Error submitting selection:", err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// 4. [ADMIN] ፎልደር ምድምሳስ
router.delete('/delete-portal/:id', async (req, res) => {
    try {
        const project = await ClientProject.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }
        
        res.status(200).json({ success: true, message: "Portal and images deleted successfully" });
    } catch (err) {
        console.error("Error deleting portal:", err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

export default router;