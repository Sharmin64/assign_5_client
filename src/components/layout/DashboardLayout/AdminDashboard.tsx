/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import ServiceTable from "./ServiceTable";
import { useFetchServicesQuery } from "../../../redux/api/baseApi";
import ServiceModal from "./AddServiceModal"; // Modal for Add/Update service

const AdminDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editService, setEditService] = useState(null);

  const { data: services, isLoading, error } = useFetchServicesQuery({});

  // Convert error to a readable string format
  const errorMessage =
    error && "status" in error
      ? `Error: ${error.status} - ${JSON.stringify(error.data)}`
      : error && "message" in error
      ? `Error: ${error.message}`
      : null;

  const handleAddService = () => {
    setEditService(null); // reset for new service
    setIsModalOpen(true);
  };

  const handleEditService = (service: any) => {
    setEditService(service); // populate modal with service data for editing
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditService(null);
  };

  return (
    <>
      {/* Service Management */}
      <div className="service-management mb-10">
        <h2 className="text-2xl font-semibold mb-4">Service Management</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={handleAddService}
        >
          Add Service
        </button>
        <ServiceTable
          services={services}
          isLoading={isLoading}
          error={errorMessage}
          onEditService={handleEditService}
        />
      </div>

      {/* Service Modal */}
      {isModalOpen && (
        <ServiceModal
          service={editService} // If it's null, we're adding a new service, else editing
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default AdminDashboard;
