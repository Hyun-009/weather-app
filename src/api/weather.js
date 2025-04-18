import axios from "axios";

const API_KEY ='1a2f1b24fd6b0756a0e20118292f7900'


export const fetchWeatherByCoords =async(lat, lon)=>{

    const res =await axios.get(`https://api.openweathermap.org/data/2.5/weather`,{
        params:{
            lat,
            lon,
            units:'metric',
            lang:'kr',
            appid:API_KEY
        }
    })

    return res.data
}