import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between max-sm:px-2">
        <span className="text-xl md:text-3xl text-white font-bold tracking-tight">
          <Link to="/">GreenHolidays.com</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="text-blue-600 font-bold px-3 py-2 rounded-md hover:bg-gray-100 flex items-center text-sm md:text-lg"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
