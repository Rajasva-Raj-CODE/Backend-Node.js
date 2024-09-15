const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}))

let books = [
  { id: 1, title: "Book1", author: "Author1" },
  { id: 2, title: "Book2", author: "Author2" },
  { id: 3, title: "Book3", author: "Author3" },
  { id: 4, title: "Book4", author: "Author4" },
];

//? Get Method
app.get("/books", (req, res) => {
  res.json(books);
});

//? POST Method
app.post("/books", (req, res) => {
  const newBook = {
    id:books.length+1,
    title:req.body.title,
    author:req.body.author
  }
  books.push(newBook)
  res.status(201).json(books)
});


app.listen(3000, (err) => {
  if (err) throw err;
  console.log("started");
});
