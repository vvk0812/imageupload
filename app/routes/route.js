const express = require('express')
const TaskController = require('../controllers/Task')
const {imageFile,compressedImg} = require('../middleware/image')
const router = express.Router();


router.post('/createblog',imageFile.single('image'),TaskController.createblog);
router.delete('/Deleteblog',TaskController.Deleteblog)

module.exports = router


