
# Travel Planner App Backend
This backend service is the heart of our Travel Planner application, providing the necessary functionality to create, manage, and retrieve travel plans.

#### Trello: 
https://trello.com/b/HFDgCYOP/trip-advisor

## Routes
POST /auth/register: Register a new user.<br>
POST /auth/login: Authenticate a user and get an access token.<br>
GET /plans: Retrieve a list of travel plans.<br>
POST /plans: Create a new travel plan.<br>
GET /plans/:planId: Retrieve a specific travel plan.<br>
PUT /plans/:planId: Update a travel plan.<br>
DELETE /plans/:planId: Delete a travel plan.<br>

## Models
![**Project 2 Model**](images/models.jpeg)

## Built Withmodel
-Node.js<br>
-NPM<br>
-MongoDB