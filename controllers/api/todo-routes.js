const router = require('express').Router();
//const sequelize = require('../config/connection');
const { Post, User, Comment, Todo } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
    Todo.findAll({
        attributes: [
            'id',
            'title',
            'created_at',
          ],
          include: [
            {
              model: Todo,
              attributes: ['id', 'list', 'post_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['username']
              }
            },
            {
              model: User,
              attributes: ['username']
            }
          ]
    })
    .then(dbTodoData => res.json(dbTodoData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//
router.post('/', withAuth, (req, res) => {

    Todo.create({
      list: req.body.list,
      user_id: req.session.user_id,
      post_id: req.body.post_id
    })
      .then(dbTodoData => res.json(dbTodoData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
//
router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Todo.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbTodoData => {
        if (!dbTodoData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbTodoData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;