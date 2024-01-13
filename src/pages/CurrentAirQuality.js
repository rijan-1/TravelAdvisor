import {GeoCodingApi, CurrentAirQualityAPI} from '../WeatherService'
import './CurrentAirQuality.css'
import Ellipse from '../assets/Ellipse 5.png'
import { useEffect ,useState} from 'react'


export const CurrentAirQuality = () => {

    const [CoordnatesState,setCoordnatesState] = useState(null)
    const [currentAirQualityState, setAirQualityState] = useState(null)

    const VeryPolutated = 'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    useEffect(()=>{

        const HandleGeoCodingAPI = async()=>{
            const CoordnatesWhole = await GeoCodingApi('London')
         
            setCoordnatesState(CoordnatesWhole)
            
        }
        HandleGeoCodingAPI()

    },[])

    useEffect(()=>{
        const HandleCurrentAirQualkityData = async()=>{
            if (CoordnatesState){
            const ExtractCurrentAirQuality = await CurrentAirQualityAPI(CoordnatesState)
            setAirQualityState(ExtractCurrentAirQuality)
       } }
        HandleCurrentAirQualkityData()

    },[])
  return (
    <div className='AirQualityBackGround' style={{backgroundImage:`url(${VeryPolutated})`}}>

            <div className='AirqualityMainContent'>
                <div className='Airqualityttitle'>
                    <h2 >Today air quality- Uxbridge England</h2>
                    

                </div>
                <div className='AirQualityIndex'>
<img style={{position:'relative', right:'15%',top:'18%'}} src={Ellipse} alt='ellipse'/>
<h1 style={{position:'relative', right:'0%',fontSize:'45px'}}>8 AQI</h1>
                </div>
                <div style={{position:'relative', right:'0%',top:'20%'}} className='airqualitytitle'>
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
                                <h3 style={{position:'absolute',top:'100px',left:'40px',height:'60px',width:'60px'}}>Co</h3>
                            <img style={{position:'relative',top:'30px',left:'20px',height:'80px',width:'80px'}} src={Ellipse} alt='ellipse'/>
<h4  style={{position:'relative',bottom:'50px',right:'-140px',height:'100px',width:'100px'}}>201</h4>
                            </div>
                          
                        </div>
                        
                    </div>
                 

                </div>

            </div>


    
      
    </div>
  )
}


