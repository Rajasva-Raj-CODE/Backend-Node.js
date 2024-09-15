const express = require("express");
const app = express();
const phone = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1> <a href='/api/phone'>Phone</a>");
});

app.get("/api/phone", (req, res) => {
  const newItem = phone.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newItem);
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("server is running on port no 3000");
});
