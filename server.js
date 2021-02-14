// Requiring necessary npm packages
// *** Dependencies
let express = require("express");
var path = require("path");

// Setting up port and requiring models for syncing
let PORT = process.env.PORT || 2303;

// Creating express app and configuring middleware needed for authentication
let app = express();

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
