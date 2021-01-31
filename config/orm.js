// Import MySQL connection
var connection = require("./connection.js");

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

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
	insertOne: function (table, cols, vals, cb) {
		// Add insert one code here
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);
		connection.query(queryString, vals, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function () {
		// Add update one code here
	}
};

// Export ORM
module.exports = orm;