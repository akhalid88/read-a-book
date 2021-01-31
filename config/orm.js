// Import MySQL connection
var connection = require("./connection.js");

//ORM Object
var orm = {
	selectAll: function (tableInput, cb) {
		// Add select all code here
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function () {
		// Add insert one code here
	},
	updateOne: function () {
		// Add update one code here
	}
};

// Export ORM
module.exports = orm;