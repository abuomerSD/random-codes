import { Router } from "express";
import { addBook, getAllBooks } from "../controllers/book";
export const router = Router();

router.route("/").get(getAllBooks).post(addBook);
