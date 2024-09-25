import { Outlet } from "react-router-dom";
import Navber from "../../pages/sharedPage/Navber";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addReview } from "../../redux/features/reviewsSlice";
import Footer from "../../pages/sharedPage/Footer";

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
      <div className="mt-44">
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
