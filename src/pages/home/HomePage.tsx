import { useState } from "react";
import FeaturedSec from "../../components/ui/FeaturedSec";
import HeroSection from "../../components/ui/HeroSection";
import ReviewSection from "../../components/ui/ReviewSection";
import ReviewList from "../../components/ui/ReviewList";

interface Review {
  rating: number;
  feedback: string;
}

const HomePage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const handleReviewSubmit = (rating: number, feedback: string) => {
    setReviews([{ rating, feedback }, ...reviews]);
  };
  return (
    <>
      <HeroSection />
      <FeaturedSec />
      <ReviewSection onReviewSubmit={handleReviewSubmit} />
      <ReviewList reviews={reviews} />
    </>
  );
};

export default HomePage;
