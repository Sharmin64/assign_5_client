/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchServiceDetailsQuery } from "../../redux/api/baseApi";
import Navber from "../sharedPage/Navber";
import emoImg from "../../assets/icons/sademo.png";

const ServiceDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Fetch service details using the hook from baseApi.ts
  const {
    data: serviceDetails,
    isLoading,
    isError,
    error,
  } = useFetchServiceDetailsQuery(id!);
  console.log(serviceDetails, "servide er id pawa jasse na ");

  if (isLoading)
    return (
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#ffdd00] ">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div>
        <img src={emoImg} alt="emoji face" className="w-auto mx-auto" />
        {(error as any).message}
      </div>
    );

  if (!serviceDetails)
    return (
      <div className=" text-5xl text-yellow-500 mt-36">Service not found.</div>
    );

  const availableSlots = ["10:00 AM", "11:00 AM", "1:00 PM"]; // Example data

  return (
    <>
      <Navber />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">{serviceDetails.name}</h1>
        <p className="text-gray-700">{serviceDetails.description}</p>
        <p className="text-gray-900 font-bold mt-2">${serviceDetails.price}</p>
        <p className="text-gray-500">
          Duration: {serviceDetails.duration} mins
        </p>

        <h2 className="text-2xl font-semibold mt-6">Available Time Slots</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {availableSlots.map((slot) => (
            <button
              key={slot}
              className={`p-2 rounded ${
                selectedSlot === slot ? "bg-blue-500 text-white" : "bg-gray-200"
              } hover:bg-blue-500 hover:text-white`}
              onClick={() => setSelectedSlot(slot)}
              disabled={false} // Change this logic based on availability
            >
              {slot}
            </button>
          ))}
        </div>

        {selectedSlot && (
          <button className="mt-6 bg-blue-500 text-white p-3 rounded-lg">
            Book This Service
          </button>
        )}
      </div>
    </>
  );
};

export default ServiceDetailsPage;
