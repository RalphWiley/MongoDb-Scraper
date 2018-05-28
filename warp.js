const mongoose = require('mongoose');
const http = require('http');
const Schema = mongoose.Schema;
let Team = mongoose.model('Team', TeamSchema);
let db = mongoose.connection;
let dbUrl = 'mongodb://heroku_nxs57bwp:ecpbtogcs960ior0fpnl7fmdi9@ds235850.mlab.com:35850/heroku_nxs57bwp';
db.on('error', function () {console.log('error');});
mongoose.connect(dbUrl, function (err) {
if (err) {  return console.log('there was a problem' + err);  }
console.log('connected!');
var team = new Team({ name: 'Nick' });
team.save(function (error, data) {
if (error) {console.log(error);} 
db.close();
process.exit();
});
});