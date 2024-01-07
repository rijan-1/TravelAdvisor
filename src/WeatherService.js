import axios from 'axios'

const APIKEY = '1843b3aeb0cb1f1701aadcce7c86d38e'


export const CurrentWeather = async (city, units)=>{

    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`
    const Data = await axios.get(URL).then(res => res.data).catch(err => console.log(err))
    
    const {name,main:{humidity, feels_like,temp, temp_max, temp_min},sys:{country},wind:{speed}} =Data
    const {description, icon} =Data.weather[0]

    return {name,description, icon, humidity, feels_like, temp, temp_max, temp_min, country, speed}
}