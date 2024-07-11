/* eslint-disable react/prop-types */
import weatherCodeMapping from "../scripts/weatherCodeMap";

const CurrentWeather = ({weather, city}) => {
  const weatherDetails = weatherCodeMapping[weather.current.weather_code] || {
    description: 'Unavailable',
    icon: '01d'};

  if(!weather) {
    return null;
  }
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-yellow-400">{city.toUpperCase()}</h2>
      <p className="text-2xl">
        {Math.round(weather.current.temperature_2m)}{weather.current_units.temperature_2m}
      </p>
      <img src={`https://openweathermap.org/img/wn/${weatherDetails.icon}@2x.png`} alt="Weather Icon" className="mx-auto"/>
      <p className="capitalize text-sm">{weatherDetails.description}</p>
      {weather.current.apparent_temperature && <p className="text-lg pt-3">Feels Like: {Math.round(weather.current.apparent_temperature)}{weather.current_units.apparent_temperature}</p>}
      <div className="mt-4 flex justify-center gap-4">
      <p className="text-lg">Humidity: {weather.current.relative_humidity_2m}%</p>
      <p className="text-lg">Wind: {Math.round(weather.current.wind_speed_10m)} {weather.current_units.wind_speed_10m}</p>
      {weather.current.precipitation > 0 && <p>Precipitation: {weather.current.precipitation} {weather.current_units.precipitation}</p>}
      </div>
    </div>
  );
};
export default CurrentWeather;
