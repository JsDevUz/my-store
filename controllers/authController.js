const { json } = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/authModel')

async function login(req,res){
    const secret = 'secret'
    const {username,password} = req.body

    try{
        const user = await User.findUser(username)
        if(!user){
            res.status(400).send({message: 'user no t found'})
        } 

        const isMatch = bcrypt.compare(password,user.password)

        if(!isMatch){
            res.status(400).send({message: 'password not found'})
        }

        const token = jwt.sign({userId: user.id,role: user.role}, secret, {expiresIn: '1d'})

        res.status(200).send({token: token})
    }catch(error){
        console.log(error)
    }
}

module.exports = {login}