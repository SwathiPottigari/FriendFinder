var express=require("express");
var router = express.Router();
var path=require("path");

router.get("/home",function(req,res){
res.sendFile(path.join(__dirname,"home.html"));
});
