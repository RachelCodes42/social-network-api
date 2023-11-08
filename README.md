# Social Network API

## Description
Welcome to the Social Media API, a backend solution for your social network startup. This API is designed to manage large volumes of unstructured data by utilizing a NoSQL database, specifically MongoDB, and providing essential features to facilitate the operation of your social network. The primary goal of this API is to offer seamless interactions with your social network's users, thoughts, reactions, and friends. It ensures that your server runs smoothly, data is stored efficiently, and users can perform common actions like creating, updating, and deleting their posts and interactions.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
<!-- Add installation instructions here -->
Before you begin, make sure you have the following prerequisites in place: Node.js (v14 or higher) MongoDB installed and running Insomnia or a similar API testing tool.

1. Clone this repository to your local environment: https://github.com/RachelCodes42/social-network-api 
2. Navigate to the project directory:cd your-social-media-api 
3. Install the required dependencies: npm install 
4. Configure your environment variables. Create a .env file in the project root and add the following:MONGODB_URI=your-mongodb-connection-uriPORT=3000 
5. Start the server: npm start. Your server is now up and running, and your Mongoose models are synchronized with the MongoDB database.

## Usage
<!-- Add usage information here -->
Usage of the Social Media API is intended for developers and social media startups who wish to build and manage the backend infrastructure for their social networking platforms. The API provides essential functionality to handle user accounts, posts (thoughts), reactions, and friend lists.

API Routes:

- Users
GET /api/users: Retrieve a list of all users.
GET /api/users/:userId: Retrieve information about a specific user.
POST /api/users: Create a new user.
PUT /api/users/:userId: Update an existing user.
DELETE /api/users/:userId: Delete a user.
- Thoughts
GET /api/thoughts: Retrieve a list of all thoughts.
GET /api/thoughts/:thoughtId: Retrieve information about a specific thought.
POST /api/thoughts: Create a new thought.
PUT /api/thoughts/:thoughtId: Update an existing thought.
DELETE /api/thoughts/:thoughtId: Delete a thought.
- Reactions
POST /api/thoughts/:thoughtId/reactions: Create a new reaction for a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Delete a reaction for a thought.
- Friends
POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.

## License
<!-- Add license badge and explanation here -->
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](http://opensource.org/licenses/MIT)

## Contributing
<!-- Add contribution guidelines here -->
N/A

## Tests
<!-- Add test instructions here -->
You can use Insomnia or a similar API testing tool to test the API endpoints mentioned above. Verify that you can successfully create, update, and delete users and thoughts, as well as manage reactions and friends for users

## Questions
GitHub: [Your GitHub Profile](https://github.com/RachelCodes42)
Email: hochman.rachel@icloud.com
  