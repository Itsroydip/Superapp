import React, { useEffect, useState } from 'react'
import fetchWeather from '../api/fetchWeather'

const Weather = () => {
    const [weatherData, setWeatherData] = useState({});

    useEffect(()=>{
        fetchWeather()
        .then((data)=>{
            const { temp_c, condition, pressure_mb, wind_kph, humidity } = data.current;            
            setWeatherData({
                temperature: temp_c,
                condition: condition.text,
                thumbnail: condition.icon,
                pressure: pressure_mb,
                wind: wind_kph,
                humidity,
            });
            
        })


    },[])

  return (
    <div className='p-3 flex justify-evenly'>
        <div className='flex flex-col justify-normal items-center'>
            <img src={weatherData.thumbnail} className='h-28'/>
            <p className='text-lg'>{weatherData.condition}</p>
        </div>

         <img src="images/line.png" className='h-1/3 my-auto'/>

        <div className='flex flex-col justify-evenly '>
            <p className='text-5xl font-normal'>{weatherData.temperature}°C</p>
            <div className='flex justify-center items-center'>
                <img src="images/pressure.png" className='h-8 mr-2'/> 
                <span>{weatherData.pressure} mbar <p className='font-semibold'>Pressure</p></span>
            </div>
        </div>

        <img src="images/line.png" className='h-1/3 my-auto'/>

        <div className='flex flex-col justify-evenly '> 
            <div className='flex justify-evenly items-center'>
                <img src="images/wind.png" className='h-7 mr-2'/>
                <span>{weatherData.wind}Km/h <p className='font-semibold'>Wind</p></span>
            </div>
            <div className='flex justify-evenly items-center'>
                <img src="images/humidity.png" className='h-7 mr-2'/>
                <span>{weatherData.humidity}% <p className='font-semibold'>Humidity</p></span>
            </div>
        </div>
    </div>
    
  )
}

export default Weather