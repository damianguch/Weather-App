class Weather {
  constructor(city, country) {
    this.apiKey = '9bc5785d093aab783fa7755a45192afe';
    this.city = city;
    this.country = country;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`,
    );

    const responseData = await response.json();
    return responseData;
  }

  //Change Weather Location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
