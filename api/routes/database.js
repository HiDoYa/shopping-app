var express = require("express");
var router = express.Router();
var fs = require("fs");

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
        if (err) {
            res.send(err);
        }
        res.send(rows);
    });
});

router.get("/:product", (req, res, next) => {
    if (err) {
        res.send(err);
    }
    connection.query(`SELECT * FROM product WHERE prod_name = "${req.params.product}"`, (err, rows, fields) => {
        res.send(rows);
    });
});

router.put("/:product", (req, res, next) => {
    if (req.body.price && req.body.price <= 0) {
        res.send("Error: Product cannot be free or negative cost.");
        return;
    }

    // Set params
    let params = "";
    if (req.body.price) {
        params += `price=${req.body.price} `;
    }
    if (req.body.name) {
        params += `prod_name="${req.body.name}" `;
    }
    if (req.body.category) {
        params += `category="${req.body.category}" `;
    }
    if (req.body.image_path) {
        params += `image_path="${req.body.image_path}" `;
    }

    // Check that params exist
    if (params === "") {
        res.send("Invalid or nonexistent parameters");
        return;
    }

    connection.query(`UPDATE product SET ${params} WHERE prod_name="${req.params.product}"`, (err, rows, fields) => {
        if (err) {
            res.send(err);
            return;
        }

        connection.query(`SELECT * FROM product WHERE prod_name = "${req.params.product}"`, (err, rows, fields) => {
            res.send(rows);
        });
    });
});

router.post("/", (req, res, next) => {
    if (!(req.body.prod_name || req.body.price || req.body.category || req.body.image_path)) {
        res.send("All values need to be initialized.");
        return;
    }

    connection.query(
        `INSERT INTO product VALUES ("${req.body.prod_name}", ${req.body.price}, "${req.body.category}", "${
            req.body.image_path
        }")`,
        (err, rows, fields) => {
            if (err) {
                res.send(err);
            }

            connection.query(`SELECT * FROM product WHERE prod_name = "${req.body.prod_name}"`, (err, rows, fields) => {
                res.send(rows);
            });
        }
    );
});

router.delete("/:product", (req, res, next) => {
    connection.query(`DELETE FROM product WHERE prod_name="${req.params.product}"`, (err, rows, fields) => {
        if (err) {
            res.send(err);
            return;
        }

        connection.query(`SELECT * FROM product`, (err, rows, fields) => {
            res.send(rows);
        });
    });
});

module.exports = router;
