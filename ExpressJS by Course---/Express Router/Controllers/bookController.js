let books = [
  { id: 1, title: "Book1", author: "Author1" },
  { id: 2, title: "Book2", author: "Author2" },
  { id: 3, title: "Book3", author: "Author3" },
  { id: 4, title: "Book4", author: "Author4" },
];

//? Get Method
const getBooks = (req, res) => {
  res.json(books);
};

//? POST Method
const postBooks = (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };
  books.push(newBook);
  res.status(201).json(books);
};

module.exports={
    getBooks,
    postBooks
}