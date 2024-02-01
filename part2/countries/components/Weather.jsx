import axios from 'axios'
import { useState, useEffect } from 'react'

const weather_api_key = import.meta.env.VITE_WEATHER_API_KEY
const URL = 'https://api.openweathermap.org/data/2.5/weather'

const Weather = ({data}) => {
    const capital = data.capital
    const lat = data.latlng[0]
    const lng = data.latlng[1]
    const urlJson = URL + '?lat=' + lat + '&lon=' + lng + '&appid=' + weather_api_key

    const [weather,setWeather] = useState(null)

     const hook = () => {
        console.log("effect");
        axios.get(urlJson).then((response) => {
          console.log("promise fullfilled",response.data);
          setWeather(response.data);
        });
      };
    
      useEffect(hook, []) 

      if(!weather) return null

      //console.log('setting temp var', weather)
      const temp = Math.floor(weather.main.temp - 273.15)
      const hum = weather.main.humidity
      const wind = weather.wind.speed


    return(
        <div>
            <h2>Wheather in {capital}</h2>
            <p><b>temperature:</b> {temp} Celsius</p>
            <p><b>wind:</b> {wind} m/s</p>
            <p><b>humidity:</b> {hum} %</p>
        </div>
    )
}

export default Weather