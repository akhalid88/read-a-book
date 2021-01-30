var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

// Provide access to static content from public directory
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());