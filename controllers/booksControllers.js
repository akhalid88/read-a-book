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
		res.json({ id: result.insertId });
	});
});

router.put("/api/books/:id", function (req, res) {
	// Add code here
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

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
