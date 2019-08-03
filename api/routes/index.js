var express = require("express");
var router = express.Router();
var path = require("path");

// Setup database
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "shopping_app"
});

connection.connect();

// Send json with all info
router.get("/", (req, res, next) => {
    connection.query("SELECT * FROM product", function(err, rows, fields) {
        res.send(rows);
    });
});

// Send all images
router.get("/images/:image", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/../images/", req.params.image));
});

module.exports = router;
