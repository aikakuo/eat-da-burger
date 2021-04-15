var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    
    burger.all(function (burgerData) {
        res.render("index", { burger_data: burgerData });
    });
});

router.post("/burgers/create", function (req, res) {
    console.log(req.body.burger_name)
    burger.create(
        ["burger_name"],
        [req.body.burger_name], 
        function (result) {
        console.log(result);
        res.redirect("/");
    }
    );
});

router.put("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update({
        devoured : true
    },
        condition,
        function (result) {
     
        console.log(result);
        
        res.sendStatus(200);
    });
});

    router.delete("/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);
    
        burger.delete(condition, function() {
            
        });
    });

  
    



module.exports = router;