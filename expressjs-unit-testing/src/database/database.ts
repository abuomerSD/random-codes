import {Sequelize} from "sequelize";

const sequelize = new Sequelize('postgres://asdf:""@localhost:5432/bookDb');

async function testDbConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export class dbConnection {
    static instance : dbConnection;
    constructor() {
        if (! dbConnection.instance) {
            dbConnection.instance = new Sequelize('postgres://asdf:""@localhost:5432/bookDb');
        }
        return dbConnection.instance;

    }
}

let obj1 = new dbConnection();
let obj2 = new dbConnection();
console.log(obj1 === obj2);
