const express = require("express");
const app = express();
const phone = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1> <a href='/api/phone'>Phone</a>");
});

//! param
// app.get("/api/phone/:phoneID", (req, res) => {
//   const { phoneID } = req.params;
//   console.log(req.params);

//   const singleProducts = phone.find(
//     (product) => product.id === Number(phoneID)
//   );
//   if(!singleProducts){
//     res.status(404).send('product is not found...')
//   }
//   res.json(singleProducts);
// });

//! query string
app.get("/api/v1/query", (req, res) => {
  let sortedPhone = [...phone];
  const { search, limit } = req.query;

  if (search) {
    sortedPhone = sortedPhone.filter((product) => {
      return product.name.toLowerCase().startsWith(search);
    });
  }

  res.json(sortedPhone);
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("server is running on port no 3000");
});
