import './Home.css'
import coldweather from "../assets/cold.webp";
import hotweather from "../assets/hot.webp";
import normal from "../assets/normal.webp";
import veryhot from '../assets/veryhot.webp'
import cloudyicon from "../assets/cloudy.png";
import { Descriptions } from '../components/descriptions';
import {CurrentWeather} from  '../WeatherService'
import { useEffect ,useState} from 'react';


export const Home = () => {
    const [city, setCity] = useState('London')
    const [WeatherNow, setWeatherNow] = useState([])
    const [units, setUnits] = useState('metric')
    const [error, setError] = useState('Data does not exist')
const [Bg, setBg] = useState({coldweather})

   
    
useEffect(() => {
    const CurrentWeatherData = async () => {
      try{
      const data = await CurrentWeather(city, units);
      setWeatherNow(data);
      console.log(data);

      const subZero = units ==='metric' ? 0: 32;
  
      const lowerthreshold = units === 'metric' ? 10 : 50;
      const higherthreshhold = units === 'metric'? 25 : 75
  
      if (data.temp < subZero) {
        setBg(coldweather);
      } else if (subZero< data.temp & data.temp < lowerthreshold){
        setBg(normal);
      
    } else if (lowerthreshold<data.temp & data.temp < higherthreshhold) {
        setBg(hotweather);
      
    }else if (data.temp > higherthreshhold){
      setBg(veryhot)
    }
  
  }catch(error){
      setError(error.message)
      
    }}

  
    CurrentWeatherData();
  }, [units, city]);
  

const EnteredCity =(e)=>{
    if (e.keyCode === 13){
        setCity(e.target.value)
        e.currentTarget.blur()
    }

}
const changeUnits = () => {
    {units === 'imperial'? setUnits('metric') : setUnits('imperial')}
   
  };
  
  return (

    <div className='HomeBg' style={{backgroundImage: `url(${Bg})`, backgroundSize:'cover',height:'1000px'}}>
    <div className='Overlay'>
      <div className='contanier'>
        <div className='section section_input'>
          <input onKeyDown={EnteredCity} className='searchbar' type ='text' name='city'placeholder='enter city name'  />
          <button onClick={changeUnits} className='btn'>C</button>
        </div>
        <div className='section section_temperature'>
          <div className='icon'>
            <h3>{WeatherNow.name}, {WeatherNow.country}</h3>
            <img src={cloudyicon} style={{height:'80px',width:'80px'}}alt='cloudy icon'/>
            <h3>{WeatherNow.description}</h3>
          </div>
          <div className= 'temperature'>
            <h1>{Math.round(WeatherNow.temp)} {units==='metric'? '°C': '°F'}</h1></div>           
        </div>
<Descriptions currentweather ={WeatherNow}/>
        </div> 
        
           </div>
        </div>
  )
}


