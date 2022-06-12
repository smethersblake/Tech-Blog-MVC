const sequelize = require('../config/connection')
const { User, Post } = require('../models')

const userdata = [
    {
        username: 'Blake',
        email: 'Blake@email.com',
        password: 'root'
    },
    {
        username: 'Bob',
        email: 'bob@email.com',
        password: 'root'
    },
    {
        username: 'Chris',
        email: 'chris@email.com',
        password: 'root'
    },
    {
        username: 'Roda',
        email: 'roda@gmail.com',
        password: 'root'
    },
    {
        username: 'Damon',
        email: 'damon@email.com',
        password: 'root'
    }
]
const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true})
module.exports = seedUsers