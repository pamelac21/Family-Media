const { User } = require('../models');

const userData = [{
        username: 'Johnny',
        email: 'Johnny@uncc.edu',
        password: 'john'

    },
    {
        username: 'Jakey',
        email: 'Jakey@uncc.edu',
        password: 'jake'
    },
    {
        username: 'Joel',
        email: 'Joel@UNCC.edu',
        password: 'joe'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;