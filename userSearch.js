//needs a constructor showing name, location, date arguments


//(methods) getWeather, writeRecord


//getWeather would call writeRecord when done


// * UserSearch

//   * The UserSearch component allows users to search for the weather in a given location.


// We're incorporating an npm package for doing weather searches.
var weather = require("weather-js");

// Creates a UserSearch Constructor
var UserSearch = function(name, location) {
  this.name = name;
  this.location = location;
  this.date = new Date().toLocaleString();

  this.getWeather = function() {

    weather.find({ search: this.location, degreeType: "F" }, function(err, result) {
      if (err) {
          throw err;
      }  
      var temp = result[0].current.temperature;

      console.log(JSON.stringify(temp, null, 2));
    
    });

  };

};

module.exports = UserSearch;