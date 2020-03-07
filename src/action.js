export const getWeatherData = city => {
    
    return{
        type: 'GET_COUTRY_SAGA',
        city: city
      }
}
  export const setVisibilityFilter = response => {
      
      return {
        type: 'WHETHER_FETCH_SUCCEEDED',
        response
      }
  }
  export const toggleTodo = id => ({
    type: 'WHETHER_FETCH_FAILED',
    id
  })
  export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }