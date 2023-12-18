const API_KEY = '1a86bd2d037ea5faa1b8661f5281a8c9'

const makeIconURL = (iconId) =>
    `https://openweathermap.org/img/wn/${iconId}@2x.png`


export const FormattedData = async (city, units = 'metric') => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`

    let Data = await fetch(URL).then((res) => res.json()).then((data) => data).catch((error) => console.error(error))


    const { weather, main: { temp, feels_like, temp_min, temp_max, pressure, humidity }, wind: { speed }, sys: { country }, name, } = Data;
    const { description, icon } = weather[0]
    return {
        description,
         iconURL: makeIconURL(icon),
          temp,
           feels_like,
            temp_min,
             temp_max,
              pressure,
               humidity, 
               speed,
                country,
                 name
    }


}