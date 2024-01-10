import normal from "../assets/normal.webp";
import cold from '../assets/cold.webp'
import { useContext } from "react";
import { MyContext } from "../App";
import { useEffect, useState } from "react";
import './DailyWeather.css'


import { DailyWeather } from '../WeatherService'


export const DailyWeatherFunction = () => {

  const [dailyWeatherState, setDailyWeatherState] = useState([])

  const { GlobalCityName } = useContext(MyContext)

  useEffect(() => {
    const HandleDailyWeatherData = async()=>{
    const DailyWeatherLink = await DailyWeather(GlobalCityName)

    setDailyWeatherState(DailyWeatherLink)

    }
    HandleDailyWeatherData()
   
  }, [])



  return (
    <div className='HomeBg' style={{ backgroundImage: `url(${normal})`, backgroundSize: 'cover', height: '1000px', width: '100%' }}>
      <div style={{backgroundImage:`url(${cold})`,backgroundSize:'cover', position:'relative', top: '100%'}}>
      <div className='overlay'>
    



        <div className='dailyWeatherSection'>
          {dailyWeatherState.map((weather) => <div className='dailyWeatherBoxes'>    
            <div style={{display:'flex', justifyContent:'center', gap:'80px'}}>
            <div className='Dailydate'>
              <p>{weather.dt_txt}</p></div>
              <div className='DailyTemperature'>
              <p>{weather.temp}</p>
            </div>
            <div className='dailyweatherDescription'>
              <h4>icon</h4>

              <p>{weather.description}</p>
            </div></div>
            <div style={{display:'flex', justifyContent:'flex-end', gap:'60px',margin:'0px',padding:'0px', position:'relative', left:'180px' }}>
            <div className='DailyPrecipitation'>
              <p>precepitaion icon</p>
              <p >{weather.humidity}</p>
            </div>
            <div>
              <p>Wind icon</p>
              <p>NW {weather.speed} mph</p>
            </div>

            </div>
   
            <button style={{margin:'0px',padding:'0px', position:'relative', right:'-60px'}}> arrow</button>
    
           
           

          </div>
          ) 
          }
          


      


        </div>
      </div>
</div>
    </div>
  )
}


