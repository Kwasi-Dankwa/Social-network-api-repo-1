const mongoose = require('mongoose');
// Wrap Mongoose around local connection to MongoDB
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Export Connection
module.exports = connection;