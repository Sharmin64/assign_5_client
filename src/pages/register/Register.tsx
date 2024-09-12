/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useSelector } from "react-redux";
import Navber from "../../components/ui/Navber";
import { useState } from "react";
// import { signupUser } from "../../redux/features/userSlice";
// import { RootState } from "../../redux/store";
import { useSignupUserMutation } from "../../redux/api/baseApi";

const Register = () => {
  // const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const [signupUser, { isLoading, isSuccess, isError, error }] =
    useSignupUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signupUser(formData).unwrap();
      console.log("User signed up successfully");
    } catch (err) {
      console.error("Failed to sign up user: ", err);
    }
  };
  return (
    <>
      <Navber />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ffdd00] to-[#4141ff] p-6">
        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-lg transform transition-transform duration-300">
          <h2 className="text-3xl font-bold text-center text-[#5656ff] mb-8">
            Create Your Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5656ff] transition-colors duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5656ff] transition-colors duration-200"
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5656ff] transition-colors duration-200"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5656ff] transition-colors duration-200"
            />
            <input
              type="text"
              name="address"
              placeholder="Home Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5656ff] transition-colors duration-200"
            />
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#5656ff] text-white font-bold rounded-lg hover:bg-[#4343cc] hover:shadow-xl transition-transform duration-200 transform"
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
            {isError && (
              <p className="text-red-600 mt-2">
                Error:{" "}
                {"data" in error && error.data
                  ? (error.data as any).message
                  : "Failed to sign up"}
              </p>
            )}
            {isSuccess && (
              <p className="text-green-600 mt-2">Sign Up Successful!</p>
            )}
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">Already have an account?</p>
            <a
              href="/login"
              className="text-[#5656ff] font-semibold hover:text-[#4141ff]"
            >
              Go to login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
