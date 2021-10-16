const users = require('../user.json')

async function findUser(username){
    return new Promise((resolve,reject) => {
        const user = users.find((u) => u.username === username)
        resolve(user)
    })
}


module.exports = {findUser}