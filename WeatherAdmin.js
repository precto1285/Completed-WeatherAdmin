//constructor, no arguments


//(method) getRecords - loop


//will read from a text file

// * WeatherAdmin

//   * The WeatherAdmin component encapsulates two functions.

//     * `getData`, which retrieves the list of all searches users have made thusfar; and

//     * `newUserSearch`, which runs a search on behalf of a user.

var UserSearch = require('./userSearch.js');

var name = process.argv[2];

var location = process.argv[3];

var newUser = new UserSearch(name, location);

newUser.getWeather();
