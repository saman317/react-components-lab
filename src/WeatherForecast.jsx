import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';


 const WeatherForecast =({weather}) =>{
 
    const {day, img, imgAlt,condition,time}= weather
    return  <div className="weather">
    <h2>{day}</h2>
    <WeatherIcon key={weather.id} img={img} imgAlt={imgAlt}/>
    <WeatherData key= {weather.id} data={{condition, time}}/>
  </div>
 
}




export default WeatherForecast