const router = require('express').Router();
const { Todo, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Todo.findAll({
        attributes: [
            'id',
            'title',
            'list'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbTodoData => {
            const todos = dbTodoData.map(todo => todo.get({ plain: true }));
            res.render('todo-list', {
                todos,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;