import React, { useState } from "react";
import UserDashboard from "./UserDashboard"; // Import the User Dashboard
import AdminDashboard from "./AdminDashboard"; // Import the Admin Dashboard
import Navber from "../../../pages/sharedPage/Navber";

const Dashboard: React.FC = () => {
  // State to toggle between user and admin views
  const [isAdmin, setIsAdmin] = useState(false);

  // Function to handle the toggle switch
  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAdmin(e.target.checked); // Switch between user and admin based on checkbox value
  };

  return (
    <>
      <Navber />
      <div className="container mx-auto p-4 mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          {isAdmin ? "Admin Dashboard" : "User Dashboard"}
        </h2>

        {/* Toggle Input */}
        <div className="flex items-center justify-center mb-6 space-x-4">
          {/* Label */}
          <span className="text-lg font-medium">
            {isAdmin ? "Admin View" : "User View"}
          </span>

          {/* Toggle Switch */}
          <input
            type="checkbox"
            className="toggle toggle-lg"
            checked={isAdmin}
            onChange={handleToggleChange} // Attach the toggle change function
          />
        </div>

        {/* Conditional Rendering based on isAdmin state */}
        {isAdmin ? <AdminDashboard /> : <UserDashboard />}
      </div>
    </>
  );
};

export default Dashboard;
