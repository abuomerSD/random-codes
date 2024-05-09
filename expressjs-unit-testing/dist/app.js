"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_1 = require("./routes/book");
const app = (0, express_1.default)();
const port = 3000;
app.use(book_1.router);
app.listen(port, () => {
    console.log(`server is listening for requests at port ${port}`);
});
