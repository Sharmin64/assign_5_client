import { Outlet } from "react-router-dom";
import Navber from "../ui/Navber";
import { useState } from "react";

interface Review {
  rating: number;
  feedback: string;
}

const MainLayout = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleReviewSubmit = (rating: number, feedback: string) => {
    setReviews([{ rating, feedback }, ...reviews]);
  };
  return (
    <>
      <Navber />
      <Outlet context={{ reviews, handleReviewSubmit }} />
    </>
  );
};

export default MainLayout;
