import {Router} from "express";
import {addPost, getAllBooks} from "../controllers/book";
export const router = Router();

router.route('/').get(getAllBooks).post(addPost);
