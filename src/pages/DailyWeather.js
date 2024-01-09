import normal from "../assets/normal.webp";
import cold from '../assets/cold.webp'
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

  const demoData = [
    {day: "Wed, 10", temp: 10, icon: "icon", description: "some weather", precipIcon: "icon", precipPercent: "5%", windIcon: "icon", windDirection: "NW", windSpeed: "13"},
    {day: "Wed, 10", temp: 10, icon: "icon", description: "some weather", precipIcon: "icon", precipPercent: "5%", windIcon: "icon", windDirection: "NW", windSpeed: "13"},
    {day: "Wed, 10", temp: 10, icon: "icon", description: "some weather", precipIcon: "icon", precipPercent: "5%", windIcon: "icon", windDirection: "NW", windSpeed: "13"},
    {day: "Wed, 10", temp: 10, icon: "icon", description: "some weather", precipIcon: "icon", precipPercent: "5%", windIcon: "icon", windDirection: "NW", windSpeed: "13"},
    {day: "Wed, 10", temp: 10, icon: "icon", description: "some weather", precipIcon: "icon", precipPercent: "5%", windIcon: "icon", windDirection: "NW", windSpeed: "13"},
    {day: "Wed, 10", temp: 10, icon: "icon", description: "some weather", precipIcon: "icon", precipPercent: "5%", windIcon: "icon", windDirection: "NW", windSpeed: "13"},
    {day: "Wed, 10", temp: 10, icon: "icon", description: "some weather", precipIcon: "icon", precipPercent: "5%", windIcon: "icon", windDirection: "NW", windSpeed: "13"},
    {day: "Wed, 10", temp: 10, icon: "icon", description: "some weather", precipIcon: "icon", precipPercent: "5%", windIcon: "icon", windDirection: "NW", windSpeed: "13"},
    {day: "Wed, 10", temp: 10, icon: "icon", description: "some weather", precipIcon: "icon", precipPercent: "5%", windIcon: "icon", windDirection: "NW", windSpeed: "13"},
    {day: "Wed, 10", temp: 10, icon: "icon", description: "some weather", precipIcon: "icon", precipPercent: "5%", windIcon: "icon", windDirection: "NW", windSpeed: "13"},
  ]
const [showDetailDaily, setDetailDaily] = useState()

  return (
    <div className='HomeBg' style={{ backgroundImage: `url(${normal})`, backgroundSize: 'cover', height: '1000px', width: '100%' }}>
      <div style={{backgroundImage:`url(${cold})`,backgroundSize:'cover', position:'relative', top: '100%'}}>
      <div className='overlay'>



        <div className='dailyWeatherSection'>
          {
            demoData.map((data, i) => <div className='dailyWeatherBoxes'>
            <div style={{display:'flex', justifyContent:'center', gap:'80px'}}>
            <div className='Dailydate'>
              <p>{data.day}</p></div>
              <div className='DailyTemperature'>
              <p>Temp</p>
            </div>
            <div className='dailyweatherDescription'>
              <h4>icon</h4>

              <p>description</p>
            </div></div>
            <div style={{display:'flex', justifyContent:'flex-end', gap:'60px',margin:'0px',padding:'0px', position:'relative', left:'180px' }}>
            <div className='DailyPrecipitation'>
              <p>precepitaion icon</p>
              <p >3%</p>
            </div>
            <div>
              <p>Wind icon</p>
              <p>NW 13 mph</p>
            </div>

            </div>
            <button onClick={}style={{margin:'0px',padding:'0px', position:'relative', right:'-60px'}}> arrow</button>
           
           

          </div>
          ) 
          }
          


      


        </div>
      </div>
</div>
    </div>
  )
}


