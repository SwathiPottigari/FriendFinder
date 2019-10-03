var express=require("express");
var app=express();

var PORT=process.env.PORT||3000;

//setup app to parse post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Starts the server to begin listening
app.listen(PORT,function(){});