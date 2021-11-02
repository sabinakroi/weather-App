import { WeatherData } from "../types/weather-types";
import { apiKey } from "./shared";

export const getCurrent = async (city: string) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appId=${apiKey}&units=metric`
  );
  return response.json() as Promise<WeatherData>;
};
