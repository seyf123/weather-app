import React from 'react'
import ForecastCard from './ForecastCard'

const Forecast = ({weatherForecast}) => {
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
          { weatherForecast&&weatherForecast.forecastday.map(weathDay =><ForecastCard weathDay={weathDay}/>)}
        </div>
    )
}

export default Forecast
