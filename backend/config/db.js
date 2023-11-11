const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('survey','root','root',{
    host: 'localhost',
    dialect:'mysql'
})

module.exports = { sequelize }