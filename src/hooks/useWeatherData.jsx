import { useState } from "react";
import { toast } from "react-toastify";

const useWeatherData = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCoordinates = async (city) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const data = await res.json();
      setLoading(false);
      if (data.results && data.results.length > 0) {
        return data.results[0];
      } else {
        throw new Error("City not found");
      }
    } catch (error) {
      toast.error("City not found. Please check your spelling and try again.");
      return null;
    }
  };

  const fetchWeather = async (lat, long) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto`
      );
      const data = await res.json();
      setLoading(false);
      setWeather(data);
    } catch (error) {
      toast.error("Failed to fetch weather data. Please try again later.");
    }
  };

  const fetchForecast = async (lat, long) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto`
      );
      const data = await res.json();
      setLoading(false);
      setForecast(data.daily);
    } catch (error) {
      toast.error("Failed to fetch weather data. Please try again later.");
    }
  };

  return {
    weather,
    forecast,
    loading,
    fetchCoordinates,
    fetchWeather,
    fetchForecast,
    setWeather,
    setForecast,
    setLoading
  };
};
export default useWeatherData;
