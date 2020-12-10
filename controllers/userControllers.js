const fs = require('fs');
const cloudinary = require('cloudinary').v2;
const User =require('../models/User')
exports.createUser = async (req, res, next) => {
  try {
      console.log(req.file);
      const file = req.file;
      cloudinary.uploader.upload(file.path, async(error,result)=>{
        console.log(result);
        console.log(`-------------------------`);
        console.log(error);
        const user = await User.create({
            name:'cc',
            photo:result.secure_url,
        })
        fs.unlinkSync(file.path);
        res.status(201).json({user});
      });
    res.status(200).json({ message: 'success' });
  } catch (err) {}
};