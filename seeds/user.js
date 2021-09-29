const { User } = require('../models');

const userData = [
    {
        userName: 'slongy7',
        twitter: 'JustinLong',
        github: 'slongy7',
        email: 'slongy7@yahoo.com',
        password: 'passWord7'
        
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;