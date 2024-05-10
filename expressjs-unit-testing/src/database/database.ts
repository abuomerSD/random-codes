import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  'postgres://asdf:""@localhost:5432/bookDb'
);

async function testDbConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export class DbConnection {
  static instance: Sequelize;
  constructor() {
    if (!DbConnection.instance) {
      DbConnection.instance = new Sequelize(
        'postgres://asdf:""@localhost:5432/bookDb'
      );
    }
    return DbConnection.instance;
  }
}
// const book = new Book();

// sequelize.sync();
