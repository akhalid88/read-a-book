var express = require('express');

var router = express.Router();

// Import book model
var cat = require("../models/book.js");

router.get("/", function(req, res) {
	// Add code here
});

router.post("/api/books", function(req, res) {
	// Add code here
});

router.put("/api/books/:id", function(req, res) {
	// Add code here
});

// Export routes
module.exports = router;
