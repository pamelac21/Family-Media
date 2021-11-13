const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    // checks user credentials upon login
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password)
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        // user must sign up with email that has not already been used, and model will check if it is an email
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // password will accept string of between 5 and 35 characters
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5,35]
            }
        }
    },
    {
        hooks: {
            // hashes password upon creation of new user
            async beforeCreate(newUser) {
                newUser.password = await bcrypt.hash(newUser.password, 10);
                return newUser;
            },
            // hashes password upon user updating there password
            async beforeUpdate(updatedUser) {
                updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
                return updatedUser;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;