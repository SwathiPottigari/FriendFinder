var express = require("express");
var router = express.Router();
var path = require("path");

// This method redirects to the home page
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname,'../public/home.html'));
    
});

// This method redirects to the home page
router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports=router;