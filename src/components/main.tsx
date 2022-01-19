import React, { useEffect, useState } from "react";
import { getCurrent } from "../api/current-weather";
import { WeatherData } from "../types/weather-types";
import CitySelector from "./city-selector";
import { DataDiv, GifDiv, Header, MainDiv } from "./styles";

const Main = () => {
  const [city, setCity] = React.useState("Tirana");

  const [weatherData, setWeatherData] = React.useState<WeatherData | null>(
    null
  );
  const [locationSearch, setLocationSearch] = useState("");

  const [locations, setLocations] = useState<string[]>([]);

  const [loading, setLoading] = React.useState(false);

  const disableSearch = locationSearch.trim() === "";

  const addLocation = () => {
    setLocations([locationSearch, ...locations]);
    setLocationSearch("");
  };

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
      <GifDiv>
        <Header>Weather App</Header>
        <div>
          <iframe
            title="This is a title"
            src="https://giphy.com/embed/S9E9aC1U3nPHSC5bMz"
            width="100"
            height="150"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </GifDiv>
      <br />
      <div>
        <input
          type="text"
          value={locationSearch}
          onChange={(e) => setLocationSearch(e.target.value)}
        />

        <button onClick={addLocation} disabled={disableSearch}>
          Search
        </button>
      </div>
      <MainDiv>
        <CitySelector onChange={handleChange} city={city} />
        {loading || !weatherData ? (
          "Loading"
        ) : (
          <DataDiv>
            <div>
              Temperature in <strong>{city}</strong> is{" "}
              <strong>{weatherData.main.temp} </strong>
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
            </div>
          </DataDiv>
        )}
      </MainDiv>
      <div>
        <h2>Locations</h2>
        <tbody>
          {locations.map((location, index) => (
            <tr key={index}>
              <td>{location}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default Main;
