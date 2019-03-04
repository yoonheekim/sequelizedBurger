var express = require("express");
var router = express.Router();

var db = require("../models");

router.post("/api/customers", function(req, res){
    db.Customer.create({
        customerName : req.body.customerName
    })
    .then(function(dbCustomer){
        console.log("================================");
        console.log(dbCustomer);
        return res.json(dbCustomer);
    });


});

module.exports = router;
