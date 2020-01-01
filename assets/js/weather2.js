/* 
d7a3d11d2bbd5c820ec01744141c20e2
*/

const fl = function() {
  let city = "ocala,fl";
  let queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&APPID=d7a3d11d2bbd5c820ec01744141c20e2";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var tBody = $("tbody");
    var tRow = $("<tr>");
    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var titleTd = $("<td>").text(response.Title);
    var yearTd = $("<td>").text(response.Year);
    var actorsTd = $("<td>").text(response.Actors);
    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    tBody.append(tRow);
  });
};

const flWeather = function() {
  let city = "orlando";
  let queryWeather =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&APPID=d7a3d11d2bbd5c820ec01744141c20e2";

  $.ajax({
    url: queryWeather,
    method: "GET"
  }).then(function(response) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + response.main);
    var tBody = $("tbody");
    var tRow = $("<tr>");
    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its

    var cityTd = $("<td>").text("Orlando");
    var titleTd = $("<td>").text(response.main.temp);

    var yearTd = $("<td>").text(response.main.humidity + "%");
    var actorsTd = $("<td>").text(response.wind.speed);
    // Append the newly created table data to the table row
    tRow.append(cityTd, titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    tBody.append(tRow);
  });
};
const londonWeather = function() {
  let city = "london,uk";
  let queryWeather =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&APPID=d7a3d11d2bbd5c820ec01744141c20e2";

  $.ajax({
    url: queryWeather,
    method: "GET"
  }).then(function(response) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + response.main);
    var tBody = $("tbody");
    var tRow = $("<tr>");
    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its

    var cityTd = $("<td>").text("London");
    var titleTd = $("<td>").text(response.main.temp);
    var yearTd = $("<td>").text(response.main.humidity + "%");
    var actorsTd = $("<td>").text(response.wind.speed);
    // Append the newly created table data to the table row
    tRow.append(cityTd, titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    tBody.append(tRow);
  });
};
const bostonWeather = function() {
  let city = "boston";
  let queryWeather =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&APPID=d7a3d11d2bbd5c820ec01744141c20e2";

  $.ajax({
    url: queryWeather,
    method: "GET"
  }).then(function(response) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + response.main);
    var tBody = $("tbody");
    var tRow = $("<tr>");
    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its
    var cityTd = $("<td>").text("Boston");

    var titleTd = $("<td>").text(response.main.temp);
    var yearTd = $("<td>").text(response.main.humidity + "%");
    var actorsTd = $("<td>").text(response.wind.speed);
    // Append the newly created table data to the table row
    tRow.append(cityTd, titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    tBody.append(tRow);
    temp
  });
};

const callWeather = function() {
  flWeather();
  londonWeather();
  bostonWeather();
};
callWeather();
