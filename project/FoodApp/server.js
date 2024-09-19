const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");




//! dot env configuration
dotenv.config();

//! DBconnection
connectDB();

//! rest object
const app = express();

//! middleware
app.use(express.json())

//! route
app.use("/api/v1/test",require("./routes/testRoutes"))
app.use("/api/v1/auth",require("./routes/authRoutes"))

app.get("/", (req, res) => {
  return res.status(200).send("<h1>welcome to Food Server</h1>");
});

//! PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server running on ${PORT}`.bgMagenta);
});
