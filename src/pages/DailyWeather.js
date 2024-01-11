import normal from "../assets/normal.webp";
import cold from '../assets/cold.webp'
import { useContext } from "react";
import { MyContext } from "../App";
import { useEffect, useState } from "react";
import './DailyWeather.css'


import { DailyWeather } from '../WeatherService'


export const DailyWeatherFunction = () => {

  const [dailyWeatherState, setDailyWeatherState] = useState([])
  const [cityNameState, setCityNameState] = useState("")
  const [CountryNameState, setCountryNameState] = useState('')

  const { GlobalCityName ,units, setUnits} = useContext(MyContext)

  useEffect(() => {
    const HandleDailyWeatherData = async()=>{
    const [DailyWeatherLink, name,country] = await DailyWeather(GlobalCityName, units)
  

    setDailyWeatherState(DailyWeatherLink)
    setCityNameState(name)
    setCountryNameState(country)

    }
    HandleDailyWeatherData()
   
  }, [GlobalCityName, units])



  return (
    <div className='HomeBg' style={{ backgroundImage: `url(${normal})`, backgroundSize: 'cover', height: '1000px', width: '100%' }}>
      <div style={{backgroundImage:`url(${cold})`,backgroundSize:'cover', position:'relative', top: '100%'}}>
      <div className='overlay'>
    



        <div className='dailyWeatherSection'>
          <div className='DailyWeatherHeading'>
           <h1>{cityNameState},{CountryNameState}</h1>   <h2>  5 Day Forcast</h2></div>

            <hr style={{height:'3px',borderWidth:0,fill:'white',backgroundColor:'white', width: "100%", position:'relative',top:'-300px'}}/>
          

          {dailyWeatherState.map((weather) => <div className='dailyWeatherBoxes'>    
            <div style={{display:'flex', justifyContent:'center', gap:'80px'}}>
            <div className='Dailydate'>
              <p>{weather.dt_txt}</p></div>
              
            <div className='dailyweatherDescription'>
              <h4>icon</h4>

              <p>{weather.description}</p>
            </div><div className='DailyTemperature'>
              <h1>{Math.round(weather.temp_max)}{units==='metric'?' °C':' °F'}</h1>
            </div></div>
            <div style={{display:'flex', justifyContent:'flex-end', gap:'60px',margin:'0px',padding:'0px', position:'relative', left:'100px' }}>
            <div className='DailyPrecipitation'>
              <p>precepitaion icon</p>
              <p >{weather.humidity}</p>
            </div>
            <div>
              <p>Wind icon</p>
              <p>NW {weather.speed} {units==='metric'?' kmph':'   mph'}</p>
            </div>

            </div>
   
   
            <div style={{height:'1.5px',borderWidth:0,fill:'white',backgroundColor:'white', width: "1150px", position:'relative',top:'80px', left:'50px'}}>
        
            </div>
    
           
           

          </div>
          ) 
          }
          


      


        </div>
      </div>
</div>
    </div>
  )
}


