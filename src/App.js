import {Home} from './pages/Home'
import { NavBar } from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {DailyWeather} from './pages/DailyWeather/DailyWeather'

const App = () => {
  return (
    <BrowserRouter >
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/pages/DailyWeather/DailyWeather' element={<DailyWeather/>}/>
      </Routes>
      </BrowserRouter>

   
  

  );
};

export default App;
