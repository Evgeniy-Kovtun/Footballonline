const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PlayersModel = new Schema({
    Name: String,
    PDate:String,
    Country: String,
    Club: String,
    Role: String
});
const StadiumsModel = new Schema({
    SName: String,
    SCountry: String,
    SCity: String,
    SCapacity: String
});
const CoutchsModel = new Schema({
    CName: String,
    CCountry: String,
    CAge: String,
    CZan: String
});
const connection = mongoose.createConnection('mongodb://localhost:27017/football-online');
const Players = connection.model('Players', PlayersModel);
const Stadiums = connection.model('Stadiums', StadiumsModel);
const Coutchs = connection.model('Coutchs', CoutchsModel);
module.exports.Players = Players;
module.exports.Stadiums = Stadiums;
module.exports.Coutchs = Coutchs;


