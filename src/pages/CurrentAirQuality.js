import {GeoCodingApi, CurrentAirQualityAPI} from '../WeatherService'
import './CurrentAirQuality.css'
import Ellipse from '../assets/Ellipse 5.png'
import { useEffect ,useState, useContext} from 'react'
import {MyContext} from '../App'

export const CurrentAirQuality = () => {
    const {GlobalCityName} = useContext(MyContext)

    const [CoordnatesState,setCoordnatesState] = useState({})
    const [currentAirQualityState, setAirQualityState] = useState({})

    const VeryPolutated = 'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    useEffect(()=>{

        const HandleGeoCodingAPI = async()=>{
            const CoordnatesWhole = await GeoCodingApi(GlobalCityName)
         
            setCoordnatesState(CoordnatesWhole)
            
        }
        HandleGeoCodingAPI()

    },[])

    useEffect(()=>{
        const HandleCurrentAirQualkityData = async()=>{
      
            const ExtractCurrentAirQuality = await CurrentAirQualityAPI()
            setAirQualityState(ExtractCurrentAirQuality)
        }
        HandleCurrentAirQualkityData()

    },[])
  return (
    <div className='AirQualityBackGround' style={{backgroundImage:`url(${VeryPolutated})`}}>

            <div className='AirqualityMainContent'>
                <div className='Airqualityttitle'>

                    <h2 className='Airqualityttitle2'>Today air quality- {CoordnatesState.name},{CoordnatesState.country} </h2>
                    

                </div>
                <div className='AirQualityIndex'>
<img style={{position:'relative', right:'-10%',top:'18%'}} src={Ellipse} alt='ellipse'/>
<h1 style={{position:'relative', right:'-35%',fontSize:'45px'}}>{currentAirQualityState.aqi}  AQI</h1>
                </div>
                <div style={{position:'relative', right:'-5%',top:'20%'}} className='airqualitytitle'>
                    <h1>Poor</h1>
                    <h4 style={{width:'85%'}}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa</h4>

                </div>
                <hr style={{ height: '2px', borderWidth: 0, fill: 'white', backgroundColor: 'white', width: "50%", position: 'absolute',
                left:'32%', top: '450px' ,margin:'0px'}} />

                <div className='airqualityinformation'>
                    <div className='AirQualityComponent'>
                        <h2>All Pollutants</h2>
                        <div className='airqualitycomponents'>
                            <div className='airqualitycomponentname'>
                                <h3 style={{position:'absolute',top:'45px',left:'40px',height:'60px',width:'60px'}}>{Math.round(currentAirQualityState.co)}co</h3>
                            <img style={{position:'relative',top:'30px',left:'20px',height:'120px',width:'120px'}} src={Ellipse} alt='ellipse'/>

                            </div>
                            <div className='airqualitycomponentname'>
                                <h3 style={{position:'relative',top:'55px',left:'40px',height:'60px',width:'60px'}}>{Math.round(currentAirQualityState.nh3)}nh3</h3>
                            <img style={{position:'relative',top:'-74px',left:'20px',height:'120px',width:'120px'}} src={Ellipse} alt='ellipse'/>

                            </div>
                            <div className='airqualitycomponentname'>
                                <h3 style={{position:'relative',top:'55px',left:'40px',height:'60px',width:'60px'}}>{Math.round(currentAirQualityState.no)}no</h3>
                            <img style={{position:'relative',top:'-75px',left:'20px',height:'120px',width:'120px'}} src={Ellipse} alt='ellipse'/>

                            </div>
                            
                     
                        </div>
                        <div className='airqualitycomponents2'>
                            <div className='airqualitycomponentname'>
                                <h3 style={{position:'absolute',top:'50px',left:'40px',height:'60px',width:'60px'}}>{Math.round(currentAirQualityState.no2)}no2</h3>
                            <img style={{position:'relative',top:'30px',left:'20px',height:'120px',width:'120px'}} src={Ellipse} alt='ellipse'/>

                            </div>
                            <div className='airqualitycomponentname'>
                                <h3 style={{position:'relative',top:'55px',left:'40px',height:'60px',width:'60px'}}>{Math.round(currentAirQualityState.o3)}o3</h3>
                            <img style={{position:'relative',top:'-70px',left:'20px',height:'120px',width:'120px'}} src={Ellipse} alt='ellipse'/>

                            </div>
                            <div className='airqualitycomponentname'>
                                <h3 style={{position:'relative',top:'60px',left:'40px',height:'60px',width:'60px'}}>{Math.round(currentAirQualityState.so2)}so2</h3>
                            <img style={{position:'relative',top:'-70px',left:'20px',height:'120px',width:'120px'}} src={Ellipse} alt='ellipse'/>

                            </div>
                            
                          
                        </div>
                        
                    </div>
                 

                </div>

            </div>


    
      
    </div>
  )
}


