import { Outlet } from "react-router-dom";
import Navber from "../ui/Navber";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addReview } from "../../redux/features/reviewsSlice";
import Footer from "../ui/Footer";

const MainLayout = () => {
  const reviews = useAppSelector((state) => state.reviews.reviews);
  const dispatch = useAppDispatch();

  const handleReviewSubmit = (rating: number, feedback: string) => {
    dispatch(addReview({ rating, feedback }));
  };

  return (
    <>
      <Navber />
      <Outlet context={{ reviews, handleReviewSubmit }} />
      <Footer />
    </>
  );
};

export default MainLayout;
