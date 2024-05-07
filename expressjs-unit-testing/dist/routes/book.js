"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const book_1 = require("../controllers/book");
exports.router = (0, express_1.Router)();
exports.router.route('/').get(book_1.getAllBooks).post(book_1.addPost);
