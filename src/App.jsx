import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const name = "bangkok";
  const apiKey = "f1526bf7197e521b723ec623b4a1aa47";

  const [city, setCity] = useState({});

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setCity(data));
  }, []);

  console.log(city.weather.main);

  const convertTemp = (k) => {
    return (k - 273).toFixed();
  };
  return (
    <div className="App">
      <section>
        <div className="location">
          <h1 className="city">{city.name}</h1>
          <p className="state">{city.sys.country}</p>
        </div>

        <div className="card">
          <div className="weather">
            <h1>{convertTemp(city.main.temp)}&deg;C</h1>
            <small>
              max : {convertTemp(city.main.temp_max)}&deg;C , min :{" "}
              {convertTemp(city.main.temp_min)}&deg;C
            </small>
          </div>
          <div className="info">
            <div className="status">{city.weather[0].main}</div>
            <div className="humadity">Humandity : {city.main.humidity}</div>
            <div className="wind">Wind Speed : {city.wind.speed}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
