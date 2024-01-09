import './NavBar.css';
import {Link} from 'react-router-dom'
export const NavBar = () => {
  return (
    <div className="menu-container">
      <input type="checkbox" id="openmenu" className="hamburger-checkbox" />

      <div className="hamburger-icon">
        <label htmlFor="openmenu" id="hamburger-label">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="menu-pane">
        <div className='ButtonToPages'>
      <Link to='/'>
        <button>Current Weather</button>
        </Link>
        <Link to='../pages/HourlyWeather/HourlyWeather' ><button>Hourly Weather</button></Link>
        <Link to='../pages/DailyWeather/DailyWeather'><button >Daily Weather</button></Link>
        <button>Weekly Weather</button>
        <button>Air quality Data</button>
        <button>Health Advice</button>
       </div>
      </div>
     
    </div>
  );
};
