import { useEffect , useState} from 'react'
import {HourlyData} from '../WeatherService'

export const DailyWeather= ()=>{


    useEffect(()=>{
const handleHourlyData = async()=>{
const HourlyWeatherForcast = await HourlyData(city, units)

}

    }, [city, units])

    return(

        <div>
            


        </div>
    )
}