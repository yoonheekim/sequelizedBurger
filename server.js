var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout : "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// require("./controllers/burgers_controller.js")(app);

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

var db = require("./models");

db.sequelize.sync({ force: true }).then(function(){
    app.listen(PORT, function(){
        console.log("Server listening on: http://localhost:" + PORT)
    })
})

