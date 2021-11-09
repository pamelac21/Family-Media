const { Todo } = require('../models');

const todoData = [{    
        title: "Lorem ipsum dolor sit amet",
        list: "psum dolor",
        user_id: 1,
        post_id: 1, 
    },
    {
        title: "Lorem ipsum dolor sit amet",
        list: "sam dolor",
        user_id: 2,
        post_id: 2,
    },
    {
        title: "Lorem ipsum dolor sit amet",
        list: "maanr dolor",
        user_id: 3,
        post_id: 1,
    }
];

const seedtodos = () => Todo.bulkCreate(todoData);

module.exports = seedtodos;