
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import Location from "./components/Location";

import useWeatherData from "./hooks/useWeatherData";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";

const App = () => {
  const {
    weather,
    forecast,
    loading,
    fetchCoordinates,
    fetchWeather,
    fetchForecast,
    setForecast,
    setLoading,
    setWeather
  } = useWeatherData();
  const [city, setCity] = useState("");
  const [displayCity, setDisplayCity] = useState("");

  const handleCity = async () => {
    setForecast(null);
    setWeather(null);

    const coordinates = await fetchCoordinates(city);
    if (coordinates) {
      setDisplayCity(coordinates.name);
      fetchWeather(coordinates.latitude, coordinates.longitude);
      fetchForecast(coordinates.latitude, coordinates.longitude);
    } else {
      setLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleCity();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCity();
  };

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-md">
      <Header />
      <form onSubmit={handleSubmit}>
        <Location
          city={city}
          setCity={setCity}
          handleKeyPress={handleKeyPress}
        />
      </form>
      <ToastContainer position="top-center" theme="colored" />
      {loading && (
        <div className="flex justify-center my-4">
          <ReactLoading
            type={"spinningBubbles"}
            color={"#ffffff"}
            height={50}
            width={50}
          />
        </div>
      )}
      {weather && <CurrentWeather weather={weather} city={displayCity} />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
};
export default App;
