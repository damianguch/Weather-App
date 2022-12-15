//Init Storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather class
const weather = new Weather(weatherLocation.city, weatherLocation.country); //the para should come from LS

//Init UI Class
const ui = new UI();

//Get weather on DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

//Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  //Change location from modal
  weather.changeLocation(city, country);

  //Set locationin LS
  storage.setLocationData(city, country);

  //Get and Display Weather
  getWeather();

  //Clear Modal values
  ui.clearModalFields();

  //Close Modal
  $('#locModal').modal('hide');

  e.preventDefault();
});

//Wrap In A functioon to be called when the DOM loads
function getWeather() {
  weather
    .getWeather()
    .then((results) => ui.paint(results))
    .catch((err) => console.log(err));
}
