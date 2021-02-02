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
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function (table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;
		queryString += " (" + cols.toString() + ") ";
		queryString += "VALUES (" + printQuestionMarks(vals.length) + ")";

		console.log(queryString);
		connection.query(queryString, vals, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function (table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;
		queryString += " SET " + objToSql(objColVals);
		queryString += " WHERE " + condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		})
	}
};

// Export ORM
module.exports = orm;