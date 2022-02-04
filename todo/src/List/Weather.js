import axios from "axios";
import {useState} from 'react';
import '../App.css';

function Weather() {
  const [weather, setWeather] = useState('');
  const [icon, setIcon] = useState('');

const request = 'http://api.openweathermap.org/data/2.5/weather?lat=37&lon=127&appid=063e75c78efb5d01065cbf64ba58ecc0'
const temp = fetch(request)
  .then((response) => response.json())
  .then((result) =>  {
    const kelbinTemp = result.main.temp;
    setWeather((kelbinTemp-273.15).toFixed(1));
    setIcon(result.weather[0].icon)
  });

  
//console.log(result.weather[0].icon)
//console.log(temp)

  return (
    <span className="row-weather">
      <div>Temp : {weather}</div>
      <img src ={`http://openweathermap.org/img/w/${icon}.png`}/>
      
    </span>
  )

  
}


export default Weather;