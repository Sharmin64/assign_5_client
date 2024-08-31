import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

interface ReviewSectionProps {
  onReviewSubmit: (rating: number, feedback: string) => void;
}

const ReviewSection: React.FC<ReviewSectionProps> = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const { handleReviewSubmit } = useOutletContext<{
    handleReviewSubmit: (rating: number, feedback: string) => void;
  }>();

  const handleSubmit = () => {
    if (rating !== null && feedback) {
      handleReviewSubmit(rating, feedback);
      //   console.log(rating, feedback);

      setRating(null);
      setFeedback("");
      alert("Thank you for your review!");
    } else {
      alert("Please provide a rating and feedback.");
    }
    // alert(`Rating: ${rating}\nFeedback: ${feedback}`);
  };

  return (
    <div
      className="relative flex items-center justify-center h-[500px] w-full bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/4xDrqyY1/360-F-484268904-SWZ39sj-Awfyeprzb-Q3-F2-A12roj-KDFV4-D.jpg")',
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Rate Our Service
        </h2>
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => {
            const starValue = i + 1;
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  value={starValue}
                  className="hidden"
                  onClick={() => setRating(starValue)}
                />
                <FaStar
                  size={40}
                  className={`cursor-pointer transition-transform transform ${
                    (hover ?? rating ?? 0) >= starValue
                      ? "text-yellow-500 scale-110"
                      : "text-gray-300"
                  }`}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <textarea
          className="w-full p-4 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all mb-6"
          placeholder="Leave your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button
          className="w-full py-3 px-6 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-600 transition-all"
          onClick={handleSubmit}
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
