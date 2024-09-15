const express = require("express");
const app = express();

const logger = (req, res, next) => {
  console.log(`${new Date()}. Request[${req.method}], [${req.url}]`);
  next();
};

const authorize = (req, res, next) => {
    console.log("i m 2nd one");
    next();
  };

app.use([authorize,logger]);

app.get("/", (req, res) => {
  res.send("home"); 
});


app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("contact");
});

app.get("/download", (req, res) => {
  res.send("Download");
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("started");
});
