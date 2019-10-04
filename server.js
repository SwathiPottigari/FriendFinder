var express=require("express");
var app=express();

var PORT=process.env.PORT||3000;

//setup app to parse post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This imports the htmlRoutes file
var htmlRoutes=require("./app/routing/htmlRoutes");
app.use(htmlRoutes);

// This imports the htmlRoutes file
var apiRoutes=require("./app/routing/apiRoutes");
app.use(apiRoutes);

// Starts the server to begin listening
app.listen(PORT,function(){
    console.log("listening at "+PORT);
});