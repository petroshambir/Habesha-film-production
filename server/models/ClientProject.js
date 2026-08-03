// import mongoose from 'mongoose';

// const clientProjectSchema = new mongoose.Schema({
//     clientName: { type: String, required: true },
//     passcode: { type: String, required: true, unique: true },
//     portalNumber: { type: Number, required: true, min: 1, max: 4 }, // 1, 2, 3 ወይ 4 መምረጺ
//     images: [{ type: String }], // ካብ Cloudinary ዝተጽዕኑ ሊንክታት ስእሊ
//     selectedImages: [{ type: String }], // ካስተመር ዝመረጾም ስእሊታት
//     isCompleted: { type: Boolean, default: false },
//     createdAt: { type: Date, default: Date.now, expires: '30d' } // ድሕሪ 30 መዓልቲ ባዕሉ ክጠፍእ ይኽእል
// });

// const ClientProject = mongoose.model('ClientProject', clientProjectSchema);
// export default ClientProject;


import mongoose from 'mongoose';

const clientProjectSchema = new mongoose.Schema({
    clientName: { type: String, required: true },
    portalNumber: { type: String, required: true },
    passcode: { type: String, required: true },
    images: [{ type: String }],
    selectedImages: [{ type: String }],
    isCompleted: { type: Boolean, default: false }
}, { timestamps: true });

const ClientProject = mongoose.model('ClientProject', clientProjectSchema);
export default ClientProject;