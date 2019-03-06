const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'some-folder-name', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, `${Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)}`); 
  }
});

const parser = multer({ storage: storage });

module.exports = parser;