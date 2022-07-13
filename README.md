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