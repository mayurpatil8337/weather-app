import React, { useState } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { getWeatherData } from './action'
import WhetherDetails from './WhetherDetails';
import _ from 'lodash'
import Spinner from 'react-bootstrap/Spinner'

const App = (props) => {
  const [selectedCity, setSelectedCity] = useState()
  const {weatherData} =props


  const onInputChange = (e) => {
    setSelectedCity(e.target.value)
  }
const cityName = _.get(weatherData,'data.name')

const onClickButton = () => {
  (selectedCity!==cityName) && props.getWeatherData(selectedCity)
  }
  return (
    <div className="app container">
      <img className="weather-image" src="/weather_img.jpg" alt="weather-background-image" />

      <ul className="list-wrap row">
        {
          ["New York", "Los Angeles", "Chicago", "Houston", "Pune", "Mumbai", "Canterbury", "Shanghai", "Moscow"].map((item, i) => (
          <div  key={i} className="col-xs-3 col-sm-3 col-md-4">
            <li>
            <input id={item} type="radio" onClick={onInputChange} name="city" value={item} />
            <label htmlFor={item}>{item}</label>
          </li>
          </div>))
        }
      </ul>
      <button className="check-button" onClick={onClickButton}> {weatherData.loading?<Spinner animation="border" />:"Check"}</button>
      
      { ! weatherData.loading && (selectedCity && !_.isEmpty(props.weatherData)) &&
        <WhetherDetails selectedCity={selectedCity} {...props.weatherData} />
      }
    </div>
  );
}


const mapStateToProps = state => ({
  weatherData: state
})
const mapDispatchToProps = dispatch => ({
  getWeatherData: city => dispatch(getWeatherData(city))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
