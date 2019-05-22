// Dependencies
var friendsArray = require("../data/friends.js");

//apiRoutes.jss exports the following routes to server
module.exports = function(app) {
    //gets the data stored in friends.js
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });
    //allows data to be posted to friends.js
    app.post("/api/friends", function(req, res) {
        friendsArray.push(req.body);
        res.json(true);
    });
}