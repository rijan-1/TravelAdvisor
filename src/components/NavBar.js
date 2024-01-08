import './NavBar.css';

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
      <button>Current Weather</button>
        <button>Hourly Weather</button>
        <button>Daily Weather</button>
        <button>Weekly Weather</button>
        <button>Air quality Data</button>
        <button>Health Advice</button>
       </div>
      </div>
     
    </div>
  );
};
