const { Post } = require('../models');

const postData = [{
        title: 'Title',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1

    },
    {   
        title: 'Title',
        body: 'Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Mauris egestas enim eget odio eleifend dignissim.',
        user_id: 2
    },
    {   
        title: 'Title',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lectus vel ante dapibus hendrerit. Ut commodo quam ipsum, id aliquet turpis bibendum posuere. Phasellus in diam massa.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;