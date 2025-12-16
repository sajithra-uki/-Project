import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = "YOUR_OPENWEATHER_API_KEY";

function Destination() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},LK&appid=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(data => setWeather(data));
  }, [city]);

  return (
    <div className="container">
      <h2>{city}</h2>
      {weather && (
        <>
          <p>🌡 Temperature: {weather.main.temp} °C</p>
          <p>☁ Weather: {weather.weather[0].description}</p>
        </>
      )}
    </div>
  );
}

export default Destination;
