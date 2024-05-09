"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
// const con = new DbConnection();
class Book extends sequelize_1.Model {
}
exports.Book = Book;
Book.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize_1.UUIDV4,
        primaryKey: true,
    },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    author: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    category: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, { sequelize: database_1.sequelize, timestamps: false });
database_1.sequelize.sync({ force: true });
