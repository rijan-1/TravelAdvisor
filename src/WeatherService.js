import axios from 'axios' 

const APIKEY = '1843b3aeb0cb1f1701aadcce7c86d38e' 

export const CurrentWeather = async (city, units)=>{ 

    const makeIconUrl = (iconId)=>  `https://openweathermap.org/img/wn/${iconId}@2x.png` 

    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}` 

    const Data = await axios.get(URL).then(res => res.data).catch(err => console.log(err)) 

    

     

    const {name,main:{humidity, feels_like,temp, temp_max, temp_min},sys:{country},wind:{speed}} =Data 

    const {description, icon} =Data.weather[0] 

  

    return {name,description, iconId:makeIconUrl(icon)  , humidity, feels_like, temp, temp_max, temp_min, country, speed} 

} 

export const ExtractIcon = async (icon)=>{ 

   const IconURL = `https://openweathermap.org/img/wn/?=${icon}` 

     const IconData = await axios.get(IconURL).then((res)=>res.data) 

    

     return IconData 

} 

export const DailyWeather = async (city, units) =>{ 

    const DailyWeatherUrl =(iconId)=> `https://openweathermap.org/img/wn/${iconId}@2x.png` 

   const DailyWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=${units}` 

   const ExtractedDailyData = await axios.get(DailyWeatherURL).then((res)=>res.data) 

   const {city: {name}} = ExtractedDailyData 

   const {city:{country}} = ExtractedDailyData 

   

 const filteredData = ExtractedDailyData.list.filter(item => item.dt_txt.includes('12:00:00')) 

 const extractedArray = filteredData.map((extractedData)=>{ 

 const {dt_txt,main:{temp_max,temp_min, humidity,pressure, feels_like},wind:{speed,}}= extractedData 

 const {main,description, icon} = extractedData.weather[0] 

return{ 

    dt_txt,temp_max,temp_min, humidity,speed,main,description, iconId:DailyWeatherUrl(icon),pressure, feels_like 

} 

}) 

return [extractedArray, name,country] 

     

     

} 