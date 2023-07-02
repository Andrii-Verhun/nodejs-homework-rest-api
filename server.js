const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app')

mongoose.Promise = global.Promise;
const uriDb = process.env.DB_HOST;

const connection = mongoose.connect(uriDb)

connection
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000")
    })
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`)
    process.exit(1)
  })
