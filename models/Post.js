const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,50]
            }
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,500]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        todo_id: {
            type:DataTypes.INTEGER,
            references: {
                model: 'todo',
                key: 'id'
            }
        },
        url: {
            type:DataTypes.STRING
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;