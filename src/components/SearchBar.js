import { useContext } from "react"
import { MyContext } from "../App"
import './SearchBar.css'
export const SearchBar = () => {

    const {setGlobalCityName, GlobalCityName, units, setUnits} =useContext(MyContext)

    const EnteredCity =(e)=>{
        if (e.keyCode === 13){
            setGlobalCityName(e.target.value)
            e.currentTarget.blur()
         
        }
        
    
    }
    const changeUnits = () => {
        {units === 'metric'? setUnits('imperial') : setUnits('metric')}
       
      };
  return (
    <div className='SearchBarContainer'>
        
        <div className='section section_input'>
          <input onKeyDown={EnteredCity} className='searchbar' type ='text' name='city'placeholder='enter city name'  />
          <button onClick={changeUnits} className='btn'>C</button>
        </div>
      
    </div>
  )
}


