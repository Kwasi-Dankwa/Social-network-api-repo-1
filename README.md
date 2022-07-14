### Socia Network Api

The goal of this project is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

### User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

### Author
Kwasi Dankwa
<br>
edankwa14@gmail.com

### Contributors
N/A

### Technologies
Javascript, Node.js, MongoDB, Express.js, Insomnia, Mongoose

## Installation:  
1. Download the repo files from the link below
2. You must have mongoDB and Compass installed
3. Run the following at the CLI
```
    - npm init -y
    - npm install express
    - npm install mongoose
    - npm install moment
```
4. Start the server
```
    $ npm start
```
### Usage
Insomnia is used to test the API routes after the mongoose models are synched with MongoDB.

### Screenshot
<img width="960" alt="image" src="https://user-images.githubusercontent.com/104780360/178887829-a6d5834b-a7a9-4965-bc4b-e0d53bdf24a1.png">
<br>
<img width="960" alt="image" src="https://user-images.githubusercontent.com/104780360/178888023-707d4cab-42ea-4f8a-9575-2fcd2894857e.png">

## Tests

Insomnia is used to test REST API calls. Please see the walk-through demonstration videos
On Insomnia, the following API routes have been created and used to add, update, or remove users, friends, thoughts, and reactions in the user's database.

📁 **USER**

- Create a new user: `POST /api/users`
- Get all users: `GET /api/users`
- Get a single user by its `id`: `GET /api/users/:userId`
- Walkthrough video - https://drive.google.com/file/d/1q_e8sjZRLGyRo9M2eluarYNPp6RCY1tU/view

- Update a user by its `id`: `PUT /api/users/:userId`

- Delete a user by its `id`: `DELETE /api/user/:userId`
- Walkthrough video - https://drive.google.com/file/d/1q_e8sjZRLGyRo9M2eluarYNPp6RCY1tU/view

📁 **FRIEND**

- Add a new friend to a user's friend list: `POST /api/users/:userid/friends/:friendId`
- Delete a friend from a user's friend list: `DELETE /api/users/:userid/friends/:friendId`
- Walthrough video - https://drive.google.com/file/d/1SOjo5T-_VaoivRBr21hVy92YoDvE3nSu/view

📁 **THOUGHT**

- Create a new thought: `POST /api/thoughts/`
- Get all thoughts: `GET /api/thoughts/`
- Get a single thought by its `id`: `GET /api/thoughts/:thoughtId`
- Update a thought by its `id`: `PUT /api/thoughts/:thoughtId`
- Delete a thought by its `id`: `DELETE /api/thoughts/:thoughtId`
- Video - https://drive.google.com/file/d/1UIArdd1AtYWON6I44F6Xon3HCCydSvcE/view
📁 **REACTION**

- Create a reaction: `POST /api/thoughts/:thoughtId/reactions`
- Delete a reaction by the `reactionId`: `DEL /api/thoughts/:thoughtId/reactions/:reactionId`
- Video - https://drive.google.com/file/d/1bNTrM0wIeqBUTlRR1_1piB_C7PJZ0Gj4/view

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Kwasi-Dankwa/social-network-API/blob/main/LICENSE)
MIT License

Copyright (c) 2022 Kwasi Dankwa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


