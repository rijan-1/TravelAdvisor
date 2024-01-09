import normal from "../assets/normal.webp";

import { useContext } from "react";
import { MyContext } from "../App";
import { useEffect, useState } from "react";
import './DailyWeather.css'


import { DailyWeather } from '../WeatherService'


export const DailyWeatherFunction = () => {

  const { GlobalCityName } = useContext(MyContext)

  useEffect(() => {
    const DailyWeatherLink = DailyWeather(GlobalCityName)
    console.log(DailyWeatherLink)
  }, [])










  return (
    <div className='HomeBg' style={{ backgroundImage: `url(${normal})`, backgroundSize: 'cover',  height: '1000px', width: '100%' }}>
      <div className='overlay'>

  

      <div className='dailyWeatherSection'>


        <div className='dailyWeatherBoxes'>
          <div className='dailyweatherDescription'>
            <h3>description</h3>

            <h3>icon</h3>

          </div>

          <div>
            <h3>Tmeperature</h3>

        </div>
        



        </div>

      

</div>
    </div>
      







    </div>
  )
}


