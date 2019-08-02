var express = require("express");
var router = express.Router();
var path = require("path");

// Send json with all info
router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "/../dataSend.json"));
});

// Send all images
router.get("/images/:image", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/../images/", req.params.image));
});

module.exports = router;
