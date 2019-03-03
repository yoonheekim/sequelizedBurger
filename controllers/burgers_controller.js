// DB
var db = require("../models");

// Express
var express = require("express");
var router = express.Router();

// module.exports = function(app){
//     app.get("/", function(req, res){
//         db.Burger.findAll({}).then(function(burgerObject){
//             console.log(burgerObject)
//             res.json(burgerObject);
//             // res.render("index", burgerObject);
//         });    
//     })
// }

//Create the router for the app, and export the router at the end of your file.
router.get("/", function(req, res){
    db.Burger.findAll({}).
    then(function(burger){
        console.log({burger});
        res.render("index", {burger});
    });    
})


router.post("/api/burgers", function(req,res){
    db.Burger.create(req.body).
    then(function(burger){
        res.json(burger);
    });
});

router.put("/api/burgers/:id", function(req, res){

    db.Burger.update({
        devoured: req.body.devoured
    },{
        where : {
            id : req.params.id
        }
    }).
    then(function(burger){
        res.json(burger);
    });
});

module.exports = router;

