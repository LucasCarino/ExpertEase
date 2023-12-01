import { useState, useEffect } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarsRating = ({
  onRatingChange,
  reset,
  initialValue,
  editable = true,
  starSize = "lg",
  starMargin = "mx-1",
}) => {
  const [rating, setRating] = useState(initialValue);
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

  const handleRatingChange = (currentRating) => {
    if (editable) {
      setRating(currentRating);
    }
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
              onChange={() => handleRatingChange(currentRating)}
            />
            <FontAwesomeIcon
              icon={faStar}
              size={starSize}
              className={starMargin}
              color={
                (editable && currentRating <= (hover || rating)) ||
                (!editable && currentRating <= initialValue)
                  ? "#ffc107"
                  : "#a4e5e9"
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
