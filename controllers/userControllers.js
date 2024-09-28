const User = require('../models/userModels');
const bcrypt = require('bcryptjs');

// Login controller
const loginUser = async (req,res)=>{
    const {email, password} = req.body;

    try{
        // check if User exist
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Foydalanuvchi topilmadi!!!"})
        }

        //Colmpare the password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);

        // check if password matches (For now, we'll use plain text, later we can add password hashing)
        if(!isMatch || user.email !== email){
            return res.status(400).json({message:"Parol yoki foydalanuvchi email xato!!!"})
        }

        // if credentials are correct, return success response
        res.status(200).json({
            message:"Muvaffaqiyatli tizimga kirdingiz",
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })
    }catch(error){
        res.status(500).json({message:"Error logging in:", error})
    }
}

module.exports = {loginUser}