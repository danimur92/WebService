//Mongodb connection
var MongoClient = require('mongoose');

MongoClient.Promise = global.Promise;
MongoClient.connect("mongodb://localhost:27017/test", { useNewUrlParser: true })
module.exports = {MongoClient};
