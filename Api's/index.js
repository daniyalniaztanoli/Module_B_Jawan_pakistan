const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' }
];

app.use(bodyParser.json());

app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json({ message: 'Book added successfully' });
});

app.put('/books/:id', (req, res) => {
    const id = req.params.id;
    const updatedBook = req.body;
    books = books.map(book => {
        if (book.id == id) {
            return { ...book, ...updatedBook };
        }
        return book;
    });
    res.json({ message: 'Book updated successfully' });
});

app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    books = books.filter(book => book.id != id);
    res.json({ message: 'Book deleted successfully' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
