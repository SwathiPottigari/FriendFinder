var express=require("express");
var app=express();

// make express look in the folder for assets
app.use(express.static(__dirname + '/app/public'));

var PORT=process.env.PORT||3000;

//setup app to parse post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This imports the htmlRoutes file
var htmlRoutes=require("./app/routing/htmlRoutes");
app.use(htmlRoutes);

// This imports the htmlRoutes file
var apiRoutes=require("./app/routing/apiRoutes");
app.use('/api',apiRoutes);

// Starts the server to begin listening
app.listen(PORT,function(){
    console.log("listening at "+PORT);
});