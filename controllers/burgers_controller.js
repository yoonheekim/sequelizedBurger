// DB
var db = require("../models");

// Express
var express = require("express");
var router = express.Router();


// Create the router for the app, and export the router at the end of your file.
router.get("/", function(req, res){
    db.Buger.selectAll({}).then(function(bugerObject){
        console.log(bugerObject)
        res.render("index", bugerObject);
    });    
})


router.post("/api/burgers", function(req,res){
    db.Buger.create(req.body).
    then(function(bugerObject){
        res.json(bugerObject);
    });
});

router.put("/api/burgers/:id", function(req, res){

    db.Buger.update({
        devoured: req.body.devoured,
        where : {
            id : req.params.id
        }
    }).
    then(function(bugerObject){
        res.json(bugerObject);
    });
});

module.exports = router;

