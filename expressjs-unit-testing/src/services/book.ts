import { Book } from "../models/book";


export async function saveBook(book :Book): Promise<Book> {
    const savedBook = await Book.create(Object.create(book));
    return savedBook;
}