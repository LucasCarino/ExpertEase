// En el componente StarsRating.js
import { useState, useEffect } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarsRating = ({ onRatingChange, reset }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    if (onRatingChange) {
      onRatingChange(rating);
    }
  }, [rating, onRatingChange]);

  useEffect(() => {
    if (reset) {
      setRating(null);
      setHover(null);
    }
  }, [reset]);

  const handleRatingClick = (currentRating) => {
    setRating(currentRating);
  };

  return (
    <div className="mt-2">
      {[...Array(5)].map((star, i) => {
        const currentRating = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={currentRating}
              onClick={() => handleRatingClick(currentRating)}
            />
            <FontAwesomeIcon
              icon={faStar}
              size="lg"
              className="mx-1"
              color={
                currentRating <= (hover || rating) ? "#ffc107" : "#a4e5e9"
              }
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarsRating;
