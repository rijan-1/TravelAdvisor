import './NavBar.css'

import {useState} from 'react'
import { ReactComponent as MenuIcon} from '../assets/Menu icon.svg'

export const Navbar=()=>{

    const [showHide, setShowHide] = useState(true)

    const handleShowHide =()=>{

        setShowHide(!showHide)
    }
    return(
        <div style={{position: 'absolute'}}>

            <button className='MenuIcon'onClick={handleShowHide}>{<MenuIcon/>}</button>

     {showHide? null:(

       

            <bar className='navbar'>
              

                <button>
                    Hourly

                </button>

                <button>
                    Daily

                </button>
                <button>
                    Weekly

                </button>

                <button>
                    Radar
                    
                </button>
                <button>
                Air quality

                </button>

                <button>
                    Health advice
                    
                </button>

            </bar>
)}
            </div>
    )
}