import { Star } from "lucide-react";
import { useState } from "react";

const StarRating = ({ starCount = 5 }) => {
  const [selectedStar, setSelectedStar] = useState(-1);
  const [hoverStar, setHoverStar] = useState(-1);

  const handleStarCount = (index, e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();

    const clickX = e.clientX - left;
    const isHalf = clickX < width / 2;

    setSelectedStar(index + (isHalf ? 0.5 : 1));
  };

  const handleMouseEvent = (index, e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - left;
    const isHalf = mouseX < width / 2;

    setHoverStar(index + (isHalf ? 0.5 : 1));
  };

  const rating = hoverStar >= 0 ? hoverStar : selectedStar;

  return (
    <div className="star-parent">
      {new Array(starCount).fill(0).map((_, index) => {
        let starType = "empty";

        if (index + 1 <= rating) {
          starType = "full";
        } else if (index < rating) {
          starType = "half";
        }

        return (
          <button
            type="button"
            key={index}
            className="star-container"
            onClick={(e) => handleStarCount(index, e)}
            onMouseEnter={(e) => handleMouseEvent(index, e)}
            onMouseLeave={() => setHoverStar(-1)}
            aria-label={`Rate ${index + 1} out of ${starCount}`}
          >
            <span className="star-wrapper">
              <Star className="star-empty" />

              {starType !== "empty" && (
                <span
                  className={`star-fill ${
                    starType === "half" ? "half" : ""
                  }`}
                >
                  <Star />
                </span>
              )}
            </span>
          </button>
        );
      })}

      <div className="rating-display-container">
        <span>
          Current Rating: {selectedStar === -1 ? 0 : selectedStar}
        </span>
      </div>

      <div className="reset-container">
        <button
          type="button"
          aria-label="reset rating"
          onClick={() => setSelectedStar(-1)}
        >
          Reset Rating
        </button>
      </div>
    </div>
  );
};

export default StarRating;