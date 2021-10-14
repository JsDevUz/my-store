const products = require('../data.json')

const {v4: uuid} = require('uuid')

findAll = () => {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

findById = (id) => {
    return new Promise((resolve,request) => {
        const product = products.find(p => p.id === id)
        resolve(product)
    })
}

module.exports = {findAll,findById}