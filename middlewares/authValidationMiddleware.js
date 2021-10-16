function validation(req,res,next){
    const {username,password} = req.body
    const errors = []
    if(!username){
        errors.push('User is required')
    }
    if(!password){
        errors.push('Password is required')
    }
    // if(username && password && username === password){ 
    //     errors.push('Username equal Password')
    // }
    if(errors.length > 0){
        res.status(400).send(errors)
    }
    next()
}

module.exports = {validation}