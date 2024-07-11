/* eslint-disable react/prop-types */
import weatherCodeMapping from "../scripts/weatherCodeMap";


const colorClasses = [
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-red-200",
  "bg-purple-200",
];

const formatDate = (dateStr) => {
  const date = new Date(dateStr + 'T00:00:00');
  return {
    day: date.toLocaleDateString('en-US', { weekday: 'long' }),
    date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  };
};

const Forecast = ({ forecast }) => {
  

  if (!forecast || !forecast.time || forecast.time.length === 0) {
    return null;
  }

  return (
    <>
      <h3 className="text-2xl font-bold mb-4 text-center text-yellow-400">
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {forecast.time.slice(0, 5).map((time, index) => {
          
          const { day, date } = formatDate(time);
          const maxTemp = forecast.temperature_2m_max[index];
          const minTemp = forecast.temperature_2m_min[index];
          const weatherDetails = weatherCodeMapping[forecast.weather_code[index]]

          return (
            <div key={index} className={`${colorClasses[index % colorClasses.length]} p-4 text-gray-800 rounded-lg shadow-md text-center`}>
              <p className="font-semibold">{day}</p>
              <p>{date}</p>
              {weatherDetails.icon && <img src={`https://openweathermap.org/img/wn/${weatherDetails.icon}@2x.png`} alt="Weather Icon" className="mx-auto"/>}
              <p>{weatherDetails.description && weatherDetails.description}</p>
              <div className="mt-4 space-y-2">
              <p>High: {maxTemp}°F</p>
              <p>Low: {minTemp}°F</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Forecast;
