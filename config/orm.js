// Import MySQL connection
var connection = require("./connection.js");

function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("?");
	}
	return arr.toString();
}

function objToSql(obj) {
	var arr = [];

	for (var key in obj) {
		var value = obj[key];
		if (Object.hasOwnProperty.call(obj, key)) {
			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}
			arr.push(key + "=" + value);
		}
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
	updateOne: function (table, objColVals, condition, cb) {
		// Add update one code here
		var queryString = "UPDATE " + table;
		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		})
	}
};

// Export ORM
module.exports = orm;