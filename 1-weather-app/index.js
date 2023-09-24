const apiKey = "661b00acd264609f1453387bd2a422fd"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

// object
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  // fetch data 
  const response = await fetch(apiUrl +`&q=${city}` + `&appid=${apiKey}`);
  // 404
  if (response.status === 404) {
    // update error css for INVALID CITY NAME
    document.querySelector('.error').style.display = "block";
    // update weather css
    document.querySelector('.weather').style.display = "none";
  } else {
    let data = await response.json();
    // console.log(data);
  
    // update values
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.temp').textContent = Math.round(data.main.temp) +'°C';
    document.querySelector('.humidity').textContent = data.main.humidity + '%';
    document.querySelector('.wind').textContent = data.wind.speed + 'km/h';
  
    // update weather icon
    if (data.weather[0].main === 'Clouds') {
      weatherIcon.src = 'images/clouds.png';
    } else if (data.weather[0].main === 'Clear') {
      weatherIcon.src = 'images/clear.png';
    } else if (data.weather[0].main === 'Rain') {
      weatherIcon.src = 'images/rain.png';
    } else if (data.weather[0].main === 'Drizzle') {
      weatherIcon.src = 'images/drizzle.png';
    } else if (data.weather[0].main === 'Mist') {
      weatherIcon.src = 'images/mist.png';
    }
  
    // update weather and error display css 
    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";
  }
}

// called when button is clicked
searchBtn.addEventListener('click',()=>{
  checkWeather(searchBox.value);
})



