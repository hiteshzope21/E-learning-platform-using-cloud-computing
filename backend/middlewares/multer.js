import multer from "multer";

const storage = multer.memoryStorage();
console.log(storage);
const singleUpload = multer({ storage }).single("file");

export default singleUpload;
