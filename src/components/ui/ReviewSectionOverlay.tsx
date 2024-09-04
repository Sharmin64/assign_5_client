import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ReviewSectionOverlay: React.FC = () => {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.user.token);

  if (token) {
    return null; // If user is logged in, don't show the overlay
  }

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-85 flex justify-center items-center">
      <button
        onClick={handleLoginClick}
        className="bg-white text-black px-6 py-2 rounded text-lg"
      >
        Login to view reviews
      </button>
    </div>
  );
};

export default ReviewSectionOverlay;
