const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Todo = require('./Todo');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Todo, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

Todo.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
 
Todo.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Post, Comment, Todo }