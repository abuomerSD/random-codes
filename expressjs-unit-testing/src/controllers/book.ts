import { Request, Response } from "express";
import { Book } from "../models/book";

// return all books as json
export const getAllBooks = async (req: Request, res: Response) => {};

// save book to the database
export const addBook = async (req: Request, res: Response) => {
  const { title, author, category } = req.body;

  const book = await Book.create({ title, author, category });
  res.status(201).json({
    status: "success",
    data: book,
  });
};
