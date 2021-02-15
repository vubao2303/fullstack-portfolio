// Requiring necessary npm packages
// *** Dependencies
var express = require("express");
var path = require("path");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 2303;

// Creating express app and configuring middleware needed for authentication
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Requiring routes
require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// Starting our Express app
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
