require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');
var moment = require('moment');
var fs = require('fs');

var liriCommand = process.argv[2];
var liriParam = process.argv[3]



var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

var logResult = ""
//append output data

var addLog = function () {
  fs.appendFile("log.txt", logResult, function (err) {

    // If an error was experienced we will log it.
    if (err) {
      console.log(err);
    }

    // If no error is experienced, we'll log the phrase "Content Added" to our node console.
    else {
      console.log("Content Added!");
    }

  });
}


//create spotify function 
var playSpotify = function (liriParam) {
  spotify.search({ type: 'track', query: liriParam }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }



    for (var i = 0; i < data.tracks.items.length; i++) {


      console.log("\n---------------\nArtist: " + data.tracks.items[i].album.artists[0].name + "\nSong's name: " + data.tracks.items[i].name +
        "\nPreview link: " + data.tracks.items[i].preview_url + "\nAlbum: " + data.tracks.items[i].album.name)

      logResult = "\n---------------\nArtist: " + data.tracks.items[i].album.artists[0].name + "\nSong's name: " + data.tracks.items[i].name +
        "\nPreview link: " + data.tracks.items[i].preview_url + "\nAlbum: " + data.tracks.items[i].album.name;

      addLog(logResult);
    };
  })
}


//create omdb function
var getMovie = function (movieTitle) {
  if (movieTitle === undefined) {
    axios.get("http://www.omdbapi.com/?t=" + "Mr. Nobody" + "&y=&plot=short&&tomatoes=true&apikey=trilogy").then(
      function (response) {

        console.log("\n---------------\nTitle: " + response.data.Title + "\nYear: " + response.data.Year +
          "\nimdb Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
          "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot +
          "\nActors: " + response.data.Actors);

      })
  }

  else {
    axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&&tomatoes=true&apikey=trilogy").then(
      function (response) {

        console.log("\n---------------\nTitle: " + response.data.Title + "\nYear: " + response.data.Year +
          "\nimdb Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
          "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot +
          "\nActors: " + response.data.Actors);
      })
  }


}

//create band in town function
var getEvent = function (artist) {

  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
    function (response) {
      for (var i = 0; i < response.data.length; i++) {


        console.log("\n---------------\nName of venue: " + response.data[i].venue.name
          + "\nLocation: " + response.data[i].venue.city + ", " + response.data[i].venue.state + ", " + response.data[i].venue.country +
          "\nDate of the event: " + moment(response.data[i].datetime).format('L'))
      }
    })

}

//create read function
var readRandom = function () {
  fs.readFile("random.txt", "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
      //return: terminates function if error. none of the below runs
    }
    var dataArr = data.split(",");
    console.log(dataArr)
    if (dataArr[0] === 'concert-this') {
      getEvent(dataArr[1])
    }
    else if (dataArr[0] === 'spotify-this-song') {
      playSpotify(dataArr[1])
    }
    else if (dataArr[0] === 'movie-this') {
      getMovie(dataArr[1]);
    }
    else {
      console.log('invalid input')
    }
  });
}

var commands = function (liriCommand, liriParam) {
  if (liriCommand === "concert-this") {
    getEvent(liriParam);
  }
  else if (liriCommand === "spotify-this-song") {
    playSpotify(liriParam);
  }
  else if (liriCommand === "movie-this") {
    getMovie(liriParam);
  }

  else if (liriCommand === "do-what-it-says") {
    readRandom();

  }
  else {
    console.log("invalid input")
  }
}



//call the function

commands(liriCommand, liriParam)
