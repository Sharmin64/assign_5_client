import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { useCreateBookingMutation } from "../../redux/api/baseApi"; // Import mutation from baseApi

const Booking = () => {
  const navigate = useNavigate();

  const bookingState = useSelector((state: RootState) => state.booking);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const [createBooking, { isLoading, isSuccess, error }] =
    useCreateBookingMutation(); // Use mutation

  useEffect(() => {
    // If no service or slot is selected, redirect to the services page
    if (!bookingState.serviceId || !bookingState.slotId) {
      navigate("/service");
    }
  }, [bookingState, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const bookingData = {
      ...userData,
      serviceId: bookingState.serviceId,
      slotId: bookingState.slotId,
      vehicleDetails: bookingState.vehicleDetails,
    };

    try {
      await createBooking(bookingData).unwrap(); // Unwrap the mutation result to handle success and error
      // On success, redirect to payment
      window.location.href = `https://sandbox.aamarpay.com?service=${bookingState.serviceId}&slot=${bookingState.slotId}`;
    } catch (err) {
      console.error("Booking failed:", err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-between space-x-8 p-8">
      {/* Left Side: Service Details */}
      <div className="w-1/2 bg-gray-100 p-4 rounded-md shadow-lg">
        <h2 className="text-xl font-bold">Selected Service</h2>
        <p>Service ID: {bookingState.serviceId}</p>
        <p>Slot ID: {bookingState.slotId}</p>
        {/* Display more service and slot details as needed */}
      </div>

      {/* Right Side: User Form */}
      <div className="w-1/2 bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Complete Your Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block">Selected Time Slot</label>
            <input
              type="text"
              value={bookingState.slotId ?? ""}
              className="w-full p-2 border rounded-md"
              readOnly
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded-md"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "Processing..." : "Pay Now"}
          </button>
          {error && (
            <p className="text-red-500">Booking failed. Please try again.</p>
          )}
          {isSuccess && <p className="text-green-500">Booking successful!</p>}
        </form>
      </div>
    </div>
  );
};

export default Booking;

// const Booking = () => {
//   return <div>Booking page is not right way </div>;
// };

// export default Booking;
