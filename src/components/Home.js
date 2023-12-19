import { useEffect, useState } from 'react';
import { FormattedData } from '../WeatherService';
import Descriptions from '../components/descriptions';
import './Home.css'
export const HomePage = () => {

  const [city, setCity] = useState('London')
  const [useWeather, setUseWeather] = useState(null)
  const [units, setUnits] = useState('metric')


  useEffect(() => {

    const handleFormattedData = async () => {
      const data = await FormattedData(city, units)
      setUseWeather(data)
    }
    handleFormattedData()
  }, [units, city])


  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value)
      e.target.blur()
    }
  }
  return (

    <div className="App" style={{ height: '1000px', backgroundImage: `url('https://images.pexels.com/photos/267149/pexels-photo-267149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}>
      <div className='overlay'>
        {

          useWeather && (
            <div className='contanier'>



              <div className='section section__inputs'>
                <input onKeyDown={onKeyDown} tyle={{ height: '25px', width: '200px', textSize: '30px' }} type='text' name='city' placeholder='enter city...' /><button className='buttonunits'>C°</button>

              </div>

              <div className='section section_temperature'>
                <div className='icon'>
                  <h3 style={{ color: 'white' }}>{`${useWeather.name}, ${useWeather.country}`}</h3>
                  <img src='https://openweathermap.org/img/wn/02d@2x.png' alt='sunny' />
                  <h3 style={{ color: 'white' }}>{`${useWeather.description}`}</h3>

                </div>
                <div className='temperature'>
                  <h1 style={{ color: 'white' }}>{`${useWeather.temp.toFixed()} °${units === 'metric' ? 'C' : 'F'}`}</h1>

                </div>

              </div>
              <Descriptions weather={useWeather} units={units} />


            </div>
          )
        }

      </div>

    </div>



  );
}