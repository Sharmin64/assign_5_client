/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import {
  useCreateServiceMutation,
  useUpdateServiceMutation,
} from "../../../redux/api/baseApi";

export interface ServiceModalProps {
  service?: any;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const [name, setName] = useState(service?.name || "");
  const [price, setPrice] = useState(service?.price || "");

  const [createService, { isLoading: isCreating, error: createError }] =
    useCreateServiceMutation();
  const [updateService, { isLoading: isUpdating, error: updateError }] =
    useUpdateServiceMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceData = { name, price };

    try {
      if (service) {
        // Update service
        await updateService({ id: service.id, ...serviceData }).unwrap();
      } else {
        // Add new service
        await createService(serviceData).unwrap();
      }
      onClose();
    } catch (error) {
      console.error("Failed to save the service:", error);
    }
  };

  useEffect(() => {
    setName(service?.name || "");
    setPrice(service?.price || "");
  }, [service]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded">
        <h2 className="text-xl font-semibold mb-4">
          {service ? "Update Service" : "Add Service"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Service Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border px-2 py-1 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border px-2 py-1 w-full"
              required
            />
          </div>

          {/* Display loading spinner while adding/updating */}
          {(isCreating || isUpdating) && <p>Saving...</p>}

          {/* Show error messages */}
          {(createError || updateError) && (
            <p className="text-red-500">
              {createError
                ? "Error creating service"
                : "Error updating service"}
            </p>
          )}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 mr-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={isCreating || isUpdating}
            >
              {service ? "Update" : "Add"} Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceModal;
