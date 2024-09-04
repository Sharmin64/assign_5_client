import React from "react";
import { useOutletContext } from "react-router-dom";
import ReviewSectionOverlay from "../../components/ui/ReviewSectionOverlay";

interface Review {
  rating: number;
  feedback: string;
}

const LatestReviewList: React.FC = () => {
  const { reviews } = useOutletContext<{ reviews: Review[] }>();

  return (
    <>
      <div className="review-section relative">
        <ReviewSectionOverlay />

        {/* Review section content */}
        <div className="reviews-container p-4">
          <h2 className="text-4xl my-2 font-semibold mb-4 bg-gradient-to-r from-[#2c2cff] to-[#e6c700] text-transparent bg-clip-text uppercase">
            All Reviews
          </h2>
          <div className="w-1/3 bg-inherit mx-auto bg-[#fffce6] mt-4 border-spacing-8 border-l-8 border-[#4141ff] h-[25em] mb-5">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="p-2 border-b border-gray-300">
                  <p className="text-lg font-semibold">
                    Rating: {review.rating}
                  </p>
                  <p className="text-gray-600">Feedback: {review.feedback}</p>
                </div>
              ))
            ) : (
              <p className="text-[#5656ff] text-4xl text-wrap">
                No reviews yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestReviewList;
