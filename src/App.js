import {Home} from './pages/Home'
import { NavBar } from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {DailyWeatherFunction} from './pages/DailyWeather'
import { useState } from 'react';
import { createContext } from "react";

export const MyContext = createContext()



const App = () => {

  const [GlobalCityName, setGlobalCityName] = useState('London')
  const [units, setUnits] = useState('metric')
  return (
    <MyContext.Provider value={{GlobalCityName, setGlobalCityName, units, setUnits}}>
    <BrowserRouter >
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/pages/DailyWeather/DailyWeather' element={<DailyWeatherFunction/>}/>
  
      </Routes>
      </BrowserRouter>

   </MyContext.Provider>
  

  );
};

export default App;
