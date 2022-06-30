import moment from 'moment'
import React from 'react'


function Weather({weatherData}){

    const myIcon = {
        "01d": "/img/clearsky1.png",
        "01n": "/img/clearsky.png",
        "02d": "/img/fewcloud.png",
        "02n": "/img/fewcloud1.png",
        "03d": "/img/scattercloud.png",
        "03n": "/img/scattercloud1.png",
        "04d": "/img/brokencloud1.png",
        "04n": "/img/brokencloud.png",
        "09d": "img/showerrain.png",
        "09n": "img/showerrain1.png",
        "10d": "img/rain.png",
        "10n": "img/rain1.png",
        "11d": "img/thunderstorm.png",
        "11n": "img/thunderstrom1.png",
        "13d": "img/snow.png",
        "13n": "img/snow1.png",
        "50d": "img/smoke1.png",
        "50n": "/img/smoke.png",  
    }
    

    const refresh = () =>{
        window.location.reload()
    }


    return(
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6 mx-auto mb-5">
                        
                        <div className="card">
                            <div className="card-header myhead">
                               <span>{weatherData.name} | {weatherData.sys.country}</span> 
                               <span><i class="far fa-clock"></i> {weatherData.timezone}</span>
                               
                            </div>
                            <div className="card-body mybody">
                                <div className="DivImg">
                                <img src={myIcon[weatherData.weather[0].icon]} className="myImg" />
                                </div>

                                <div className="main_main">
                                <div className="subMain">
                                    <div className="Icon-col">
                                    <span><i class="fas fa-wind myIcons" style={{marginRight: '20px'}}></i> Wind</span>
                                    <span> {Math.round(weatherData.wind.speed * 3.6)} Km/h </span>
                                    </div>

                                    <div className="Icon-col">
                                   <span><i class="far fa-eye-slash myIcons"></i>Visibility</span>
                                   <span> {weatherData.visibility / 1000} km</span>
                                   </div>

                                   <div className="Icon-col">
                                   <span><i class="fas fa-water myIcons"></i> Humidity</span> 
                                    <span>{weatherData.main.humidity}%</span>
                                    </div>

                                </div>

                                <div className="subMain">
                                <div className="Icon-col">
                                    <span><i class="fas fa-temperature-high myIcons"></i>Maximum </span>
                                    <span>{Math.floor(weatherData.main.temp_max)} &deg;C</span>
                                    </div>

                                    <div className="Icon-col">
                                    <span><i class="fas fa-temperature-low myIcons"></i>Minimum </span>
                                    <span>{Math.floor(weatherData.main.temp_min)} &deg;C</span>
                                    </div>
                                    </div>
                                </div>

                                <div className="temperature">
                                    {Math.floor(weatherData.main.temp)} &deg;C
                                </div>

                                <div className="feelslike">
                                    Feels Like: {Math.floor(weatherData.main.feels_like)} &deg;C
                                </div>
                                

                                <div className="min">
                                   <p>Description:</p>  
                                    {weatherData.weather[0].main}
                                </div>

          

                                <div className="min">
                                    <p>Sunrise:</p> 
                                    {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('EN-US')}
                                </div>

                                <div className="min">
                                    <p>Sunset:</p> 
                                    {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('EN-US')}
                                </div>

                                <div className="min">
                                    <p>Day:</p> 
                                    {moment().format('dddd')}
                                </div>

                                <div className="min">
                                    <p>Date:</p> 
                                    {moment().format('LL')}
                                </div>

                                <div className="min">
                                   <p>Time:</p>  
                                   {moment().format('LTS')}
                                </div>

                                <button className="btn btn-dark myBtn" onClick={refresh}>
                                <i class="fas fa-sync-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Weather