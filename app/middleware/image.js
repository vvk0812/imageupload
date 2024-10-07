const express = require('express');
const multer = require('multer');
//const sharp = require('sharp');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    dir = "./app/src/image";
    cb(null, dir);
  },
  filename: (req, file, cb) => {
   
    const extension = file.originalname.split('.').pop();
    
    const uniqueFilename = `${Date.now()}.${extension}`;
    cb(null, uniqueFilename);
  },
});

const imageFile = multer({ storage: storage });

const compressedImg = async (req, res, next) => {
  try {
    await sharp('/app/src/image/121.jpg')
      .resize({
        width: 150,
        height: 97,
      })
      .toFormat('jpeg', { mozjpeg: true })
      .toFile('./app/src/resizeimage/121-resized.jpg');
    next();
  } catch (error) {
    next();
    console.log(error);
  }
};

module.exports = {imageFile , compressedImg}


