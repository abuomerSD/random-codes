"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = exports.getAllBooks = void 0;
const book_1 = require("../models/book");
// return all books as json
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getAllBooks = getAllBooks;
// save book to the database
const addBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, author, category } = req.body;
    const book = new book_1.Book();
    const savedBook = yield book_1.Book.create({ title, author, category });
    res.status(201).json({
        status: "success",
        data: book,
    });
});
exports.addBook = addBook;
