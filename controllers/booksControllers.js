//Import express module
var express = require('express');
var router = express.Router();

// Import book model
var book = require("../models/book.js");

router.get("/", function (req, res) {
	book.all(function (data) {
		var hbsObject = {
			books: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/books", function (req, res) {
	book.create([
		"book_name", "devoured"
	], [
		req.body.book_name, req.body.devoured
	], function (result) {
		res.json({ id: result.insertId });
	});
});

router.put("/api/books/:id", function (req, res) {
	var condition = "id = " + req.params.id;

	book.update({
		devoured: req.body.devoured
	}, condition, function (result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// Export routes
module.exports = router;
