const knex = require('knex')
const configuration = require('../../knexfile')
const dotenv = require('dotenv')

dotenv.config()

console.log(process.env.NODE_ENV)
let config

if(process.env.NODE_ENV !== 'production'){
  config = process.env.NODE_ENV === 'test' ?  configuration.test : configuration.development
}else{
  config = configuration.production
}

console.log(config)

const connection = knex(config)

module.exports = connection