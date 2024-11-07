const WeatherData =({data})=>{
    const {conditions,time}= data;// if you didn't do this it would be (data.conditions, data.time)

    return(
       <div>
    
    <p><span>conditions: </span>{conditions}</p>
    <p><span>time: </span>{time}</p>
    </div> 
    )
}


export default WeatherData