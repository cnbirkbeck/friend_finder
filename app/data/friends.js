//friends.js stores the following seed data and takes in new user input
var friendsArray = [
    {
        "name": "Harry Potter",
        "photo": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/04/15/harry-potter-philosophers-stone.jpg?w968h681",
        "scores": [
        "1",
        "2",
        "1",
        "4",
        "1",
        "4",
        "5",
        "4",
        "4",
        "1"
        ]
    },
    {
        "name": "Freddie Mercury",
        "photo": "https://media.them.us/photos/5afc954001bb27001030e020/master/w_1280,c_limit/GettyImages-75509443.jpg",
        "scores": [
        "5",
        "5",
        "1",
        "4",
        "5",
        "3",
        "1",
        "1",
        "2",
        "1"
        ]
    },
    
        
];

//this file exports the firends array to apiRoutes.html for use in survey.html
module.exports = friendsArray;