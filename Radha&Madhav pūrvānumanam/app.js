const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "ac18323ademshc87f5d134d95ffcp1e9eacjsn7feb1606c1ae",
    "x-rapidapi-host": "weather-api138.p.rapidapi.com",
  },
};
const getweather =(city) =>{
   let city_name = document.getElementById("city_name")
   city_name.innerHTML = city;
fetch('https://weather-api138.p.rapidapi.com/weather?city_name=${city}', options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    document.getElementById("temp").innerHTML = response.main.temp;
    document.getElementById("min_temp").innerHTML = response.main.temp_min;
    document.getElementById("max_temp").innerHTML = response.main.temp_max;
    document.getElementById("pressure").innerHTML = response.main.pressure;
    document.getElementById("humidity").innerHTML = response.main.humidity;
    document.getElementById("feels_like").innerHTML = response.main.feels_like;
    document.getElementById("speed").innerHTML = response.wind.speed;
    document.getElementById("deg").innerHTML = response.wind.deg;
    document.getElementById("sunrise").innerHTML = response.sys.sunrise;
    document.getElementById("sunset").innerHTML = response.sys.sunset;
    document.getElementById("visibility").innerHTML = response.visibility;
    document.getElementById("weather_description").innerHTML = response.weather[0].description;

  })
  .catch((err) => console.error(err));
}
document.getElementById("submit").addEventListener("click",(e) => {
   e.preventDefault()
   getweather(document.getElementById("city").value)
})


getweather("Delhi")