const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URI).then(function(){
    console.log("Connected to Mongodb");
})

let db = mongoose.connection;
module.exports = db;


