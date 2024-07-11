import logo from '../assets/logo.svg';
const Header = () => {
  return (
    <div className="flex items-baseline justify-center mb-7">
      <img src={logo} alt=''/><h1 className="text-3xl font-bold text-white">Weatherly</h1>
      </div>
  )
}
export default Header