import Book from "../model/book.model.js";

// export const addBook = async (req, res) => {
//     try {
//         const book = new Book(req.body);
//         await book.save();
//         res.status(201).send({ message: "Book added successfully", book });
//     } catch (error) {
//         res.status(500).send({ message: "Error adding book", error });
//     }   
// };

export const getBooks = async (req, res) => {
    try {
        const books =  await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Error fetching books", error });
    }
};