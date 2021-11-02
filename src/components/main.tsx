import React, { useEffect } from "react";
import { getCurrent } from "../api/current-weather";
import { WeatherData } from "../types/weather-types";
import CitySelector from "./city-selector";
import { Header, MainDiv } from "./styles";

const Main = () => {
  const [city, setCity] = React.useState("Tirana");

  const [weatherData, setWeatherData] = React.useState<WeatherData | null>(
    null
  );

  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    getCurrent(city).then((r) => {
      setWeatherData(r);
      setLoading(false);
    });
  }, [city]);

  const handleChange = (c: string) => {
    setCity(c);
  };

  return (
    <div>
      <Header>Weather App</Header>
      <MainDiv>
        <CitySelector onChange={handleChange} city={city} />
        {loading || !weatherData ? (
          "Loading"
        ) : (
          <div>
            <div>
              Temperature in <strong>{city}</strong> is {weatherData.main.temp}{" "}
              °C{" "}
            </div>
            <div />
            <div>
              Humidity in {city} today will be{" "}
              <strong>{weatherData.main.humidity}</strong>
            </div>
            <div />
            <div>
              Feels like<strong> {weatherData.main.feels_like}°C</strong>
              <div />
              <div>
                Temperatures are expected to vary from{" "}
                <strong>{weatherData.main.temp_min}°C </strong> to{" "}
                <strong>{weatherData.main.temp_max}°C</strong>
              </div>
              <div />
              <div>
                The wind is expected to travel at an average speed of{" "}
                <strong>{weatherData.wind.speed} km/h</strong>
              </div>
            </div>
          </div>
        )}
      </MainDiv>
    </div>
  );
};

export default Main;
