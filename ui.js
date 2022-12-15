class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.visibility = document.getElementById('w-visibility');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = `${weather.weather[0].description}`;
    this.string.textContent = `${weather.main.temp} K (${(
      weather.main.temp - 273.15
    ).toFixed(2)} C)`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} K (${(
      weather.main.feels_like - 273.15
    ).toFixed(2)} C)`;
    this.wind.textContent = `Wind: ${weather.wind.speed}m/s gusting to ${weather.wind.gust}m/s`;
    this.visibility.textContent = `Visibility: ${weather.visibility / 1000}km`;
  }

  //clear modal fields
  clearModalFields() {
    const city = (document.getElementById('city').value = '');
    const country = (document.getElementById('country').value = '');
  }
}
