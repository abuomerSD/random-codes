const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/path/to/database.sqlite'
  });

function init(){
    createTables();
}

class Course extends Model {}

Course.init({
    id: {
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }
},{
    sequelize,
    timestamps: false,
})

function createTables() {
    sequelize.sync();
}

module.exports = {init, Course}