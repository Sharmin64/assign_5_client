/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch } from "react-redux";
import Navber from "../sharedPage/Navber";
import { useLoginUserMutation } from "../../redux/api/baseApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setUserToken } from "../../redux/features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await loginUser({ email, password }).unwrap();
      dispatch(setUserToken(response.token)); // Save token to Redux store
      navigate("/latest-review-list"); // Redirect to reviews section
    } catch (err) {
      setError("Invalid email or password");
    }
  };
  return (
    <>
      <Navber />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ffdd00] to-[#4141ff]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#5656ff]">
            Login
          </h2>
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5656ff]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5656ff]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#5656ff] text-white p-3 rounded-lg font-semibold transition-colors duration-300 hover:bg-[#4141ff] focus:outline-none focus:ring-2 focus:ring-[#5656ff]"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">New here?</p>
            <a
              href="/register"
              className="text-[#5656ff] font-semibold hover:text-[#4141ff]"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
