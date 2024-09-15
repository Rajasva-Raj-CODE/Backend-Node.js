const express = require("express");
const app = express();
const bookRoutes = require('./Routes/bookRoutes')
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}))

app.use('/',bookRoutes)


app.listen(3000, (err) => {
  if (err) throw err;
  console.log("started");
});
