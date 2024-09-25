import { Link } from "react-router-dom";
import errorImage from "../../assets/errorpage/warning-8908707_640.webp"; // Adjust path to your image

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <img
        src={errorImage}
        alt="Error"
        className="w-auto h-auto object-contain mb-6"
      />

      <p className="text-3xl font-semibold text-gray-800 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-gray-600 mt-2 text-lg">
        It seems you've hit a dead end. Let's get you back on track!
      </p>
      <div className="mt-6 space-x-4">
        <Link
          to="/"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Go to Home
        </Link>
        <Link
          to="/login"
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Error;
