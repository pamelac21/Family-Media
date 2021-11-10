const { User } = require('../models');

const userData = [{
    username: 'Johnny',
    email: 'Johnny@uncc.edu',
    password: 'passwordjohn'

},
{
    username: 'Jakey',
    email: 'Jakey@uncc.edu',
     password: 'passwordjake'
},
{
    username: 'Joel',
    email: 'Joel@UNCC.edu',
    password: 'passwordjoe'
}
];

const seedUsers = () => User.bulkCreate(userData);
const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers; 