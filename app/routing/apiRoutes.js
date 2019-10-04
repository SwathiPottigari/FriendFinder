var express = require("express");
var router = express.Router();
var friends = require("../data/friends");
var friendsMatched=[];

// Adds the new user to the Friends List and searches for the best match
router.post("/addSurvey", function (req, res) {
    var userScore=req.body.scores.split(",").reduce((prev, curr) =>parseInt(prev) + parseInt(curr));
    var bestMatch=Number.MAX_VALUE;var index;
    for (var i = 0; i < friends.length-1; i++) {
        var scoreSum = friends[i].scores.reduce((prev, curr) =>parseInt(prev) + parseInt(curr));
        console.log(Math.abs(scoreSum-userScore)<bestMatch);
        if (Math.abs(scoreSum-userScore)<=bestMatch){
            bestMatch=Math.abs(scoreSum-userScore);
            index=i;
        }
    }
    friendsMatched.push(friends[index]);
    var newFriend={
        name:req.body.name,
        photo:req.body.photo,
        scores:req.body.scores.split(",")
    }
    friends.push(newFriend);
    return res.json(friendsMatched);
});

// returns the list of all the friends 
router.get("/friendsList",function(req,res){
    return  res.json(friends);
});


module.exports = router;