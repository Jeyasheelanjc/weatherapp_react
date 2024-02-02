import React from 'react'
import Clouds from './img/Clouds.png'
import ClearSky from './img/ClearSky.png'
import FewClouds from './img/FewClouds.png';
import Rain from './img/Rain.png';
import Snow from './img/Snow.png';
import Mist from './img/Mist.png';

function WeatherIcon( {weather_detail} ){
    const weather={
        "Clear": ClearSky,
        "Clouds": Clouds,
        "Few Clouds": FewClouds,
        "Rain": Rain,
        "Snow": Snow,
        "Mist": Mist,
        "Fog": Mist,
        "Haze": Mist,
    }
const weatherCheck=weather_detail.weather[0].main
const iconSrc=weather[weatherCheck]

    return(
        <div className='wimg'>
            <img src={iconSrc}/>
        </div>
    )
}

export default WeatherIcon