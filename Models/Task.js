const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PlayersModel = new Schema({
    Name: String,
    PDate:String,
    Country: String,
    Club: String,
    Role: String
});
const connection = mongoose.createConnection('mongodb://localhost:27017/football-online');
const Players = connection.model('Players', PlayersModel);
module.exports.Players = Players;

