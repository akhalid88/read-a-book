var orm = require("../config/orm.js");

var book = {
	all: function (cb) {
		orm.selectAll("books", function (res) {
			cb(res);
		});
	},
	create: function () {
		orm.insertOne();
	},
	update: function () {
		orm.updateOne();
	}
};

// Export database functions for the controller
module.exports = book;