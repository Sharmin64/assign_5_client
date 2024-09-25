import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import iconImage from "../../assets/icons/car-wash.png";
import { useNavigate } from "react-router-dom";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  //  login and logout functions
  const handleLogin = () => {
    // Here you would typically set the authentication state after successful login
    setIsAuthenticated(true);
    navigate("/"); // Redirect to the home page after login
  };

  const handleLogout = () => {
    // Clear authentication state
    setIsAuthenticated(false);
    navigate("/"); // Redirect to the home page after logout
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 z-10 left-0 bg-gray-100 p-5 shadow-md w-full ">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          {/* Logo */}
          <Link to="/" className="text-lg font-bold">
            <img src={iconImage} alt="" className="w-10" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden block pb-12 text-gray-700"
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              // Cross Icon (Close Menu)
              <svg
                className="w-10 h-10 top-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon (Open Menu)
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Menu Items */}
          <ul
            className={`md:flex md:space-x-6 ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <li className="relative group">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer text-[#011794] font-semibold hover:text-blue-500 flex items-center  transition-all delay-[0.5s] duration-500 ease-in"
              >
                Service
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="absolute left-0 hidden opacity-0 transform scale-y-95 origin-top-right group group-focus:scale-y-100 group-hover:opacity-100 group-hover:block group-focus-within:block bg-white rounded-lg w-40 mt-2 mr-10 shadow-lg z-20"
              >
                <li>
                  <NavLink
                    to="/service"
                    className="block px-4 py-2 text-[#16150b] font-semibold hover:bg-gray-200 transition-transform duration-300 ease-linear"
                  >
                    Service Page
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/serviceDetails"
                    className="block px-4 py-2 text-[#16150b] font-semibold hover:bg-gray-200 transition-transform duration-300 ease-linear"
                  >
                    Service Details
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/booking"
                className="text-[#011794] font-semibold hover:text-blue-500"
              >
                Booking
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="text-[#011794] font-semibold hover:text-blue-500"
              >
                Dashboard
              </NavLink>
            </li>
            {isAuthenticated ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-[#011794] font-semibold hover:text-blue-500"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <button
                    className="text-[#011794] font-semibold hover:text-blue-500"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/latest-review-list"
                className="text-[#011794] font-semibold hover:text-blue-500"
              >
                Review List
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navber;
