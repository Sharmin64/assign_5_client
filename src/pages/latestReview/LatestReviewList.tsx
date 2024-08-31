import React from "react";
import { useOutletContext } from "react-router-dom";

interface Review {
  rating: number;
  feedback: string;
}

const LatestReviewList: React.FC = () => {
  const { reviews } = useOutletContext<{ reviews: Review[] }>();

  return (
    <div className="w-1/3 bg-inherit mx-auto bg-[#fffce6] mt-4 border-spacing-8 border-l-8 border-[#4141ff]">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index}>
            <p>Rating: {review.rating}</p>
            <p>Feedback: {review.feedback}</p>
          </div>
        ))
      ) : (
        <p className="text-[#5656ff] text-4xl text-wrap">No reviews yet.</p>
      )}
    </div>
  );
};

export default LatestReviewList;
