export const getWeatherData = city => {
    
    return{
        type: 'GET_COUTRY_SAGA',
        city: city
      }
}