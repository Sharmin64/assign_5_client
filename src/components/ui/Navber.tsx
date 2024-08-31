import { useState } from "react";
import { Link } from "react-router-dom";
import iconImage from "../../assets/icons/car-wash.png";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="bg-gray-100 p-4 shadow-md w-full">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          {/* Logo */}
          <Link to={"/"} className="text-lg font-bold">
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
            <li>
              <Link
                to="/service"
                className="text-gray-700 font-semibold hover:text-blue-500"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className="text-gray-700 font-semibold hover:text-blue-500"
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-gray-700 font-semibold hover:text-blue-500"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-gray-700 font-semibold hover:text-blue-500"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/latest-review-list"
                className="text-gray-700 font-semibold hover:text-blue-500"
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
