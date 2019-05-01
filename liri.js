require("dotenv").config();

// var keys = require("./keys.js")
// var spotify = new spotify(keys.spotify);

var axios = require("axios");



// axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&&tomatoes=true&apikey=trilogy").then(
//   function(response) {
//     // Then we print out the imdbRating
//     console.log("\n---------------\nTitle: " + response.data.Title+ "\nYear: "+ response.data.Year+ 
//     "\nimdb Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: "+ response.data.Ratings[1].Value +
//     "\nCountry: "+ response.data.Country + "\nLanguage: "+ response.data.Language + "\nPlot: "+ response.data.Plot +
//     "\nActors: "+  response.data.Actors);
//   }
// );


// axios.get("https://rest.bandsintown.com/artists/" + "neil young" + "/events?app_id=codingbootcamp").then(
//   function(response){
//     for (var i =0; i < response.data.length; i++){
//     console.log("\n---------------\nName of venue: "+ response.data[i].venue.name
//     + "\nLocation: "+ response.data[i].venue.city + ", "+ response.data[i].venue.state +", "+ response.data[i].venue.country+
//     "\nDate of the event: "+ response.data[i].datetime )
//   }
// }  
// )

//spotify search
// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });

//spotify request

// var Spotify = require('node-spotify-api');
 
// var spotify = new Spotify({
//   id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
 
// spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     console.log(data); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });