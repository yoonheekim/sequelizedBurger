// DB
var db = require("../models");

// Express
var express = require("express");
var router = express.Router();

//Create the router for the app, and export the router at the end of your file.
router.get("/", function(req, res){
    db.Burger.findAll({
        include: [db.Customer]
    }).
    then(function(burger){
        console.log(burger);
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
        devoured: req.body.devoured,
        CustomerId : req.body.CustomerId
    },{
        where : {
            id : req.params.id
        }
    }).
    then(function(burger){
        res.json(burger);
    });
});

router.post("/api/customers", function(req, res){
    db.Customer.create({
        customerName : req.body.customerName
    })
    .then(function(dbCustomer){
        console.log("================================");
        console.log(dbCustomer.dataValues.id);
        return res.json(dbCustomer.dataValues.id);
    });


});

module.exports = router;

