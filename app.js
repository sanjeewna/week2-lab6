const express = require("express");
const app = express();
const port = 3000; // You can use any available port

// Middleware for parsing JSON data
app.use(express.json());

// Dummy data for books (for testing purposes)
let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

// Your API routes will go here

app.get("/api/books", (req, res) => {
    res.json(books);
  });

  app.post("/api/books", (req, res) => {
    const newBook = {
      id: books.length + 1,
      title: req.body.title,
      author: req.body.author,
    };

    books.push(newBook);
    res.status(201).json(newBook);
  })

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});