const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const {v4:uuid} = require('uuid')
async function createUser(req,res){
    const {username,password,age,fullName,role} = req.body
    
    const checkUser = await User.findUser(username)
    if(checkUser){ 
        res.status(400).send({message: 'User alerady exist'})  
    }else{
        const hashPassword = await bcrypt.hash(password,12)
        const newUser = {
            id: uuid(), 
            fullName,
            age,
            username,
            role,
            password: hashPassword
        }
        const user = await User.createUser(newUser)
        if(user){
            res.status(200).send({message: 'user created'})
        }else{
            res.send({message: 'db error'})
        }
    }
}

module.exports = {createUser}