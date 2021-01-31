var orm = require("../config/orm.js");

var book = {
	all: function(){
		orm.selectAll();
	},
	create: function() {
		orm.insertOne();
	},
	update: function() {
		orm.updateOne();
	}
};

// Export database functions for the controller
modules.export = book;