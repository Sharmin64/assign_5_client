/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import carWashData from "../../carWash.json";

const FeaturedSec = () => {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    setServices(carWashData);
  }, []);
  return (
    <>
      <div className="max-w-6xl mx-auto py-12">
        <h2 className="text-4xl font-semibold text-center mb-8 bg-gradient-to-r from-[#2c2cff] to-[#e6c700] text-transparent bg-clip-text uppercase">
          Featured Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedSec;
