// server.js
const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'), 
	cors = require('cors'),
	mongoose = require('mongoose'),
    playerRoutes = require('./src/app/expressRoutes/PlayerRoutes'),
    leagueRoutes = require('./src/app/expressRoutes/LeagueRoutes'),
    tournamentRoutes = require('./src/app/expressRoutes/TournamentRoutes'),
    matchupRoutes = require('./src/app/expressRoutes/MatchupRoutes'),
    gameRoutes = require('./src/app/expressRoutes/GameRoutes'),
	config = require('./config/mongoDb.js');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_HOST_ADDRESS || config.DB, {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000
  }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database: ' + err)}
  );

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 4000;

app.use('/Player', playerRoutes);
app.use('/League', leagueRoutes);
app.use('/Tournament', tournamentRoutes);
app.use('/Matchup', matchupRoutes);
app.use('/Game', gameRoutes);

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
