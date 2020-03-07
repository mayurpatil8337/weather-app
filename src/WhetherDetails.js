import React from 'react';
import _ from 'lodash'

const WhetherDetails = (props) => {
    const { sys, weather, wind, main, name } = props.data

    const getWeatherIcon = (season = '') => {
        if (season.toLowerCase().includes('rain')) {
            return <img className="weather-icon" src="rain.png" alt="rain"/>
        } else if (season.toLowerCase().includes('haze')) {
            return <img className="weather-icon" src="haze.png" alt="haze"/>
        }
        else if (season.toLowerCase().includes('clouds')) {
            return <img className="weather-icon" src="clouds.png" alt="haze"/>
        }
        else if (season.toLowerCase().includes('clear')) {
            return <img className="weather-icon" src="clear-sky.png" alt="clear-sky"/>
        }
        else {
            return <img className="weather-icon" src="weather.png" alt="weather"/>
        }
    }

    const getTemperature = () => {
        return (<>
            {!_.isEmpty(weather) && getWeatherIcon(weather[0].description)}
            <div className="temp-data-wrap">
                <h2 className="temp-text">{(main.temp - 273.15).toFixed(2)}&#8451;</h2>
                <p className="temp-description-text">{weather[0].description}</p>

            </div>

        </>)
    }

    const getWindSpeed = () => {
        return (<>
            <img className="wind-icon" src="wind.png" alt="wind"/>
            <p className="">{wind.speed}K/H</p>
        </>)
    }

    return (
        <div>
            {!_.isEmpty(props.data) &&
                <div>

                    <div className="temp-wrap">
                        {getTemperature()}
                    </div>
                    <div className="details-wrap">
                        <div className="presure-wrap">
                            <img className="presure-icon" src="pressure.png" alt="pressure"/>
                            <p className="">{main.pressure}</p>
                        </div>
                        <div className="wind-wrap">{getWindSpeed()}</div>
                        <div className="presure-wrap">
                            <img className="presure-icon"  src="humidity.png" alt="humidity"/>
                            <p className="">{main.humidity}</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="city-name">{name} ({sys.country})</h5>
                    </div>
                </div>
            }
        </div>
    )
}

export default WhetherDetails