var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Player
var Player = new Schema({
  name: {
	type : String
  },
  dateOfBirth: {
	type : Date
  },
  height: {
	type : String
  },
  isProfessional: {
	type : Boolean
  },
},{
    collection: 'players'
});

module.exports = mongoose.model('Player', Player);