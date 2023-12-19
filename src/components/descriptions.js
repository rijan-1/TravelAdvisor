import './descriptions.css'
import { TiWeatherWindy } from "react-icons/ti";
import { FaArrowDown,FaArrowUp  } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWeightHanging } from "react-icons/fa6";




const Descriptions = ({ weather, units }) => {

    const tempUnit = units === 'metric' ? '°C' : '°F'
    const windUnit = units === 'metric' ? 'm/s' : 'm/h'

    const cards = [

        {
            id: 1,

            title: 'min',
            data: weather.temp_min.toFixed(),
            icon: <FaArrowDown />,
         
            unit: tempUnit

        },
        {
            id: 2,

            title: 'max',
            data: weather.temp_max.toFixed(),
            icon: <FaArrowUp />,
            unit: tempUnit

        }
        ,
        {
            id: 3,

            title: 'feels like',
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        }
        ,
        {
            id: 4,

            title: 'pressure',
            data: weather.pressure,
            icon: <FaWeightHanging />,
            
            unit: 'hPa'

        },
        {
            id: 5,

            title: 'humidity',
            data: weather.humidity,
            icon: <WiHumidity />,
            unit: '%'
        },
        {
            id: 6,

            title: 'wind speed'
            , data: weather.speed.toFixed(),
            icon: <TiWeatherWindy />,
            unit: windUnit,
        }
    ]
    return (
        <div className='section__descriptions'>

            {cards.map(({ id, title, data, unit , icon})=>(
            <div key={id} className='card'>

                <div className='description__card-icon'>
                    <small>{title} {icon}</small>


                </div>
                <h2 >{`${data} ${unit}`}</h2>


            </div>

       ) )}

        </div>
    )
}


export default Descriptions