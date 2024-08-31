/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate, useOutletContext } from "react-router-dom";

interface Review {
  rating: number;
  feedback: string;
}

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = () => {
  const context = useOutletContext<{ reviews: Review[] } | null>();
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const navigate = useNavigate();

  const reviews = context?.reviews || [];

  useEffect(() => {
    if (reviews.length > 0) {
      const totalRating = reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      setAverageRating(totalRating / reviews.length);
    } else {
      setAverageRating(null);
    }
  }, [reviews]);

  return (
    <>
      <div className="max-w-6xl mx-auto py-12">
        {averageRating !== null && (
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold">
              Overall Rating: {averageRating.toFixed(1)} / 5
            </h3>
          </div>
        )}

        <div className="mt-8">
          <h3 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-[#2c2cff] to-[#e6c700] text-transparent bg-clip-text uppercase">
            Recent Reviews
          </h3>
          {reviews.slice(0, 2).map((review, index) => (
            <div key={index} className="mb-4 p-4 border rounded-lg shadow-md">
              <div className="flex items-center mb-2 ">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={20}
                    className={`${
                      review.rating > i ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[#4141ff] text-3xl text-right items-center bottom-3">
                {review.feedback}
              </p>
            </div>
          ))}
        </div>
        {reviews.length > 2 && (
          <div className="text-center mt-8">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
              onClick={() => navigate("/latest-review-list")}
            >
              See All Reviews
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ReviewList;
