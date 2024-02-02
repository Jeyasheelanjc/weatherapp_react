import React, { useState } from 'react'
import WeatherIcon from './WeatherIcon'
// import { AiFillCloud } from 'react-icons/ai';

const Weather = () => {
    const [city, setCity] = useState("")
    const [weather_detail, setDetail] = useState("")
    async function changecity() {


        const APIKEY = `4cf0f80a4888d6841c569b291036daed`
        const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
        const getApi = await fetch(APIURL)
        const data = await getApi.json()
        console.log(data);
        setDetail(data)

        // if (city == "" || city==null || city==undefined || city==404 ) {
        //     alert("enter")
        // }
        // else {
        //     return  setDetail(data)
        // }

    }
    return (
        <div className='mainConatiner'>
            <div>
                <div className='inputbox'>
                    <input onChange={(e) => setCity(e.target.value)} />
                    <button onClick={changecity}>SEARCH</button>
                </div>
                {
                    weather_detail ? (
                        <div className='container'>
                            <div className='content'>
                                <h2>{weather_detail.name}</h2>
                                <small>{weather_detail.weather[0].main}</small>
                                <p>{(weather_detail.main.temp - 273).toFixed(0) + "°C "}</p>
                            </div>
                            <div className='details'>
                                <p>Details:</p>
                                <p>Feels Like {(weather_detail.main.feels_like - 273).toFixed(0) + "°C "}</p>
                                <p>Wind {weather_detail.wind.speed + " m/s"}</p>
                                <p>Humidity {weather_detail.main.humidity + "%"}</p>
                                <p>Pressure {weather_detail.main.pressure + " hPa"}</p>
                                <WeatherIcon  weather_detail={weather_detail}></WeatherIcon>
                            </div>
                        </div>)
                        :
                        <h2>Enter the city name</h2>
                }
            </div>
        </div>

    );
}
export default Weather


