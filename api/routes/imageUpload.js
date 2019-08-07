var express = require("express");
var router = express.Router();
var multer = require("multer");
var fs = require("fs");
var path = require("path");

const upload = multer({
    dest: "images/"
});

router.post("/", upload.array("file"), (req, res, next) => {
    let itemsProcessed = 0;
    req.files.forEach(file => {
        const oldPath = path.join(__dirname, `../${file.path}`);
        const newPath = path.join(__dirname, `../images/${file.originalname}`);
        fs.rename(oldPath, newPath, err => {
            itemsProcessed++;
            if (itemsProcessed === req.files.length) {
                res.send("SUCCESS");
            }
        });
    });
});

module.exports = router;
