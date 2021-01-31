var orm = require("../config/orm.js");

var book = {
	all: function (cb) {
		orm.selectAll("books", function (res) {
			cb(res);
		});
	},
	create: function (cols, vals, cb) {
		orm.insertOne("books", cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.updateOne("books", objColVals, condition, function(res){
			cb(res);
		});
	}
};

// Export database functions for the controller
module.exports = book;