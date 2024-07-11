/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

const Location = ({city, setCity, handleKeyPress}) => {
  

  return (
      <div className="flex justify-center mb-12">
        <input
        onKeyDown={handleKeyPress}
          type="text"
          value={city}
          placeholder="Enter City"
          className="p-2 border border-gray-300 text-gray-700 rounded-l focus:outline-none focus: ring-2 foucs:ring-blue-500"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 bg-yellow-500 rounded-r hover:bg-yellow-600 transition focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800 font-bold"
        >
          Search
        </button>
      </div>
  );
};
export default Location;
