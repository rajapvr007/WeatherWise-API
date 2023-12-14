
const getWeatherData = (city) => {
    const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4dd9e3fd55msh0f5ed63134cd525p1787a7jsn2f0a11f704ca',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    };
  
    return fetch(url, options).then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
  
  }
  
 
  const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    const data = await getWeatherData(city)
    showWeatherData(data)
   
  
  }
  
 
  const showWeatherData = (weatherData) => {
    
    document.getElementById('city-name').innerText = weatherData.name
    document.getElementById('temp').innerText = weatherData.main.temp
    document.getElementById('weather-type').innerText = weatherData.weather[0].main
    document.getElementById('min-temp').innerText = weatherData.main.temp_min
    document.getElementById('max-temp').innerText = weatherData.main.temp_max
  
    
  }