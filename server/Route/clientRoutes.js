// import express from 'express';
// import ClientProject from '../models/ClientProject.js';

// const router = express.Router();

// // 0. [ADMIN & CLIENT] ኩሎም ፖርታልስ ንምጽዋዕ (እቲ ዝጎድሎ ዝነበረ እዚ እዩ)
// router.get('/portals', async (req, res) => {
//     try {
//         const portals = await ClientProject.find().sort({ createdAt: -1 });
//         res.status(200).json(portals);
//     } catch (err) {
//         console.error("Error fetching portals:", err);
//         res.status(500).json({ success: false, message: 'Server error' });
//     }
// });

// // 1. [ADMIN] ሓድሽ ፎልደርን ፓስኮድን ምፍጣር (Generate Passcode & Folder)
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

// // 2. [CLIENT] ብፓስኮድ ኣቲኻ ስእሊታት ምርካብ (Login with Passcode)
// router.post('/verify-client-passcode', async (req, res) => {
//     try {
//         const { passcode } = req.body;
//         const project = await ClientProject.findOne({ passcode });

//         if (!project) {
//             return res.status(401).json({ success: false, message: "ይቕሬታ፣ ክሕለፍ ኣይፍቀድን እዩ (Invalid Passcode)" });
//         }

//         res.status(200).json({ success: true, project });
//     } catch (err) {
//         console.error("Error verifying client passcode:", err);
//         res.status(500).json({ success: false, message: 'Server error' });
//     }
// });

// // 3. [CLIENT] ካስተመር ዝመረጾም ስእሊታት ምልኣክ (Submit Selected Images)
// router.post('/submit-selection/:id', async (req, res) => {
//     try {
//         const { selectedImages } = req.body;
//         const project = await ClientProject.findByIdAndUpdate(
//             req.params.id,
//             { selectedImages, isCompleted: true },
//             { new: true }
//         );

//         if (!project) {
//             return res.status(404).json({ success: false, message: "Project not found" });
//         }

//         res.status(200).json({ success: true, message: "Selection submitted successfully", project });
//     } catch (err) {
//         console.error("Error submitting selection:", err);
//         res.status(500).json({ success: false, message: 'Server error' });
//     }
// });

// // 4. [ADMIN] ስራሕ ምስ ተወድአ ነቲ ፎልደር ምድምሳስ (Delete Folder & Free Space)
// router.delete('/delete-portal/:id', async (req, res) => {
//     try {
//         const project = await ClientProject.findByIdAndDelete(req.params.id);
//         if (!project) {
//             return res.status(404).json({ success: false, message: "Project not found" });
//         }
        
//         res.status(200).json({ success: true, message: "Portal and images deleted successfully" });
//     } catch (err) {
//         console.error("Error deleting portal:", err);
//         res.status(500).json({ success: false, message: 'Server error' });
//     }
// });

// export default router;


import express from 'express';
import ClientProject from '../models/ClientProject.js';

const router = express.Router();

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

// 1. [ADMIN] ሓድሽ ፎልደርን ፓስኮድን ምፍጣር
router.post('/create-portal', async (req, res) => {
    try {
        const { clientName, portalNumber, images } = req.body;
        const passcode = Math.floor(1000 + Math.random() * 9000).toString();

        const newProject = new ClientProject({
            clientName,
            passcode,
            portalNumber,
            images,
            selectedImages: []
        });

        await newProject.save();
        res.status(201).json({ success: true, passcode, newProject });
    } catch (err) {
        console.error("Error creating portal:", err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// 2. [CLIENT] ብፓስኮድ ኣቲኻ ፖርታል ምርካብ (Verify Passcode)
router.post('/verify-client-passcode', async (req, res) => {
    try {
        const { passcode } = req.body;
        if (!passcode) {
            return res.status(400).json({ success: false, message: "Passcode is required" });
        }

        const project = await ClientProject.findOne({ passcode: passcode.trim() });

        if (!project) {
            return res.status(401).json({ success: false, message: "ይቕሬታ፣ ዝኣተውዎ ፓስኮድ ቅኑዕ አይደለም (Invalid Passcode)" });
        }

        res.status(200).json({ success: true, project });
    } catch (err) {
        console.error("Error verifying client passcode:", err);
        res.status(500).json({ success: false, message: 'Server error' });
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