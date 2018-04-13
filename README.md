# Completed-WeatherAdmin
Week 11, jsConstructor/ activity 11


# **Instructions**

* Create a command line interface application using Node.js (either with inquirer or process.argv).

* The application should lead the user to one of two pathways: an Admin View or a User View.

* The User View should prompt the user to provide their Name and the Location they'd like weather information for. Upon completion, the User should get the weather in Fahrenheit at that location.

* The Admin View should simply provide a list of every user's search while also including the "date" of each search. See sample below:

```
Name: Ahmed, Location: Atlanta, Date: 10-15-16
Name: Adri, Location: Newark, Date: 10-12-16
Name: Joe, Location: Omaha, Date: 10-10-16
```

---

## Notes

* In order to complete this activity you will need to make use of:

  * The weather-js npm package.

  * The moment npm package for date formatting.

  * Two constructors: One for "UserSearch" and one for "WeatherAdmin".

  * A third file called CLI.js, which will direct where users are directed to.

* This activity borrows from all of the concepts we've covered this week. Pay attention to the following activities:

  * Classroom Example (11.10)

  * Weather-js Example (10.22)


  # Weather Admin Architecture

### Components

* CLI

  * The CLI determines whether the user is an **admin** or a **user**, and configures the application accordingly.

  ![Weather Admin](Images/1-weather-admin.png)

* WeatherAdmin

  * The WeatherAdmin component encapsulates two functions.

    * `getData`, which retrieves the list of all searches users have made thusfar; and

    * `newUserSearch`, which runs a search on behalf of a user.

* UserSearch

  * The UserSearch component allows users to search for the weather in a given location.

* log.txt

  * This is simply a file we'll use to keep track of all searches users have run. We'll use this in place of a database.
