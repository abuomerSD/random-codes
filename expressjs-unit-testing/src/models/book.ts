import { DataTypes, Model, Sequelize, UUIDV4 } from "sequelize";
import { DbConnection, sequelize } from "../database/database";

// const con = new DbConnection();

export class Book extends Model {
  static id: string;
  static title: string;
  static author: string;
  static category: string;

  //   constructor(title: string, author: string, category: string) {
  //     super();
  //     this.title = title;
  //     this.author = author;
  //     this.category = category;
  //   }
}

Book.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, timestamps: false }
);

sequelize.sync({ force: true });
