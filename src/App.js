import {Home} from './pages/Home'
import { NavBar } from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {DailyWeatherFunction} from './pages/DailyWeather'
import { useState } from 'react';
import { createContext } from "react";
import { CurrentAirQuality } from './pages/CurrentAirQuality';
import {HealthAdvice} from './pages/HealthAdvice'
import {RegistrationForm} from './Login&Register/Register'
import {LoginForm} from './Login&Register/Login'

export const MyContext = createContext()




const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  const [GlobalCityName, setGlobalCityName] = useState('London')
  const [units, setUnits] = useState('metric')
  return (
    <MyContext.Provider value={{GlobalCityName, setGlobalCityName, units, setUnits, isLoggedIn, setIsLoggedIn,username, setUsername}}>
    <BrowserRouter >
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/pages/DailyWeather/DailyWeather' element={<DailyWeatherFunction/>}/>
      <Route
            path="/pages/CurrentAirQuality"
            element={<CurrentAirQuality />}
          />
      <Route path='/pages/HealthAdvice' element={<HealthAdvice/>}/>
      <Route path='/Register' element={<RegistrationForm/>}/>
      <Route path='/Login' element={<LoginForm/>}/>
      </Routes>
      </BrowserRouter>

   </MyContext.Provider>
  

  );
};

export default App;
