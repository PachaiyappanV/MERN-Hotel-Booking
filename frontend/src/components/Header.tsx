import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl md:text-3xl text-white font-bold tracking-tight">
          <Link to="/">GreenHolidays.com</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="text-blue-600 font-bold px-2 py-1 rounded-sm hover:bg-gray-100 "
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
