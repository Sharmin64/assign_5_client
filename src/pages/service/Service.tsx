import React from "react";
import Navber from "../../components/ui/Navber";
import { useFetchServicesQuery } from "../../redux/api/baseApi";
import { IService } from "../../types";

const Service: React.FC = () => {
  // Use the hook directly without dispatch
  const {
    data: services = [],
    isLoading,
    isError,
    error,
  } = useFetchServicesQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.toString()}</div>;

  return (
    <>
      <Navber />
      <div className="container mx-auto py-4">
        <h1 className="text-4xl font-bold mb-6">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: IService) => (
            <div key={service.id} className="p-4 border rounded-lg shadow">
              <h2 className="text-2xl font-semibold">{service.name}</h2>
              <p className="text-gray-700">{service.description}</p>
              <p className="text-gray-900 font-bold mt-2">${service.price}</p>
              <p className="text-gray-500">Duration: {service.duration} mins</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
