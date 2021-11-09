const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
 
class Todo extends Model { }
 
Todo.init (
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
        list: {
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
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'todo',
                key: 'id'
            }
        }        
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'todo'
    }
);
 
module.exports = Todo;