# friend_finder

## Description
Friend Finder is a fullstack site which requires the user to answer 10 questions. Afterwards, it takes the answers and compares them against other user's answers saved on the server to figure out who they are most compatible with. 

## Setup
* server.js - creates an express server
* htmlRoute.js - contains the routes for home.html and survey.html
* apiRoutes.js - routes the GET and POST requests for the friends.js
* friends.js - contains an array of objects that is used to contain all user data
* home.html- Friend Finder home page
* survey.html - populates a survey for the user, then takes in their information, compares their answers to those already in the friends.js and populates a new friend match.

## Technologies Used
* HTML
* JavaScript
* CSS 
    * Materialize framework 
    * Custom Stylesheet
* Node.js
* Express.js