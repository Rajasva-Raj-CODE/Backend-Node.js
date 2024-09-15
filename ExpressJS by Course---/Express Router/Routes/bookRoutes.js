const express = require("express");

const bookController = require("../Controllers/bookController");

const router = express.Router();

router.get("/books", bookController.getBooks);
router.post("/books", bookController.postBooks);

module.exports = router;
