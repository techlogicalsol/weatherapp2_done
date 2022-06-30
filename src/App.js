import { useEffect, useState } from 'react';
import './App.css';
import Weather from './Components/Weather';
import { Dimmer, Loader } from 'semantic-ui-react';

function App() {



  const API_URL = 'https://api.openweathermap.org/data/2.5'
  const API_KEY = '598f7275273fdc2ce7ecc1cdc5445d3a'
  //REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
    navigator.geolocation.getCurrentPosition(function(position){
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    });

    await fetch(`${API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`)
    .then(res => res.json())
    .then(result =>{
      setData(result)
      console.log(result)
    });
  }
  fetchData()
  }, [lat, long])


  return (
    <>

<div className="container">
  <div className="jumbotron">
      <p>
        You can see that I've included a check in the return statement. 
        If the type of data we are getting is undefined, it will show us an empty div. 
        And since the fetch data is an async function, it's mandatory to include 
        this check. It loads the function after all other functions are done executing. 
        So, if you remove this check, you will get an error.
      </p>
  </div>
      
</div>

      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        
        <div>
          <Dimmer active>
  
        <Loader size='huge'>Loading.....</Loader>
      </Dimmer>


        
        </div>
      )}

        
    </>
  );
}

export default App;
