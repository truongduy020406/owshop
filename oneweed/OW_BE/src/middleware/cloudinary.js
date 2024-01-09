const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config()

cloudinary.config({
  cloud_name: 'dlxczbtva',
  api_key: '696564455977422',
  api_secret: 'de3vxrV99z8Bz4PuBFSe2uF8zLM'
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ['jpg', 'png','jpeg'],
  params :{
    folder :'shop'
  }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
