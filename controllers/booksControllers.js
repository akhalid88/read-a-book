var express = require('express');

var router = express.Router();

// Import book model
var book = require("../models/book.js");

router.get("/", function (req, res) {
	// Add code here
	book.all(function (data) {
		var hbsObject = {
			books: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/books", function (req, res) {
	// Add code here
	book.create([
		"book_name", "devoured"
	], [
		req.body.book_name, req.body.devoured
	], function (result) {
		console.log({ id: result.insertId })
		res.json({ id: result.insertId });
	});
});

router.put("/api/books/:id", function (req, res) {
	// Add code here
});

// Export routes
module.exports = router;
