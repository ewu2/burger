var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/", function (req, res) {
    burger.insertOne("burger_name",
        req.body.name, function () {
            res.redirect("/");
        });
});

router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: true
    }, { id: req.params.id }, function () {
        res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;