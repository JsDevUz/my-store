function userValidation(req,res,next) {
    const errors = []
    const {username,password,age,fullName,role} = req.body
    if(!username) errors.push('username is required')
    if(!password) errors.push('passord is required')
    if(!age) errors.push('age is required')
    if(!fullName) errors.push('fullName is required') 
    if(!role) errors.push('role is required')
    if(role && !(role instanceof  Array) && role !== 'admin' && role !== 'seler') errors.push('role is required only admin or seler')

    if(errors.length > 0) res.status(400).send(errors)
    next()
}
module.exports = {userValidation}
