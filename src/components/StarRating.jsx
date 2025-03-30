import React, { useState, useEffect } from "react";

const DEFAULT_VALUE = 0;
const DEFAULT_STARS = 5;

const StarRating = ({
  onChange,
  value = DEFAULT_VALUE,
  className = "",
  stars = DEFAULT_STARS,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(Math.floor(value) - 1);
  const [fillPercentages, setFillPercentages] = useState([]);
  useEffect(() => {
    calculateFillPercentages(selectedIndex + 1);
  }, [selectedIndex]);
  useEffect(() => {
    calculateFillPercentages(value);
  }, [value]);

  const calculateFillPercentages = (rating) => {
    const percentages = [];
    const fullStars = Math.floor(rating);
    const decimal = rating % 1;

    for (let i = 0; i < stars; i++) {
      if (i < fullStars) {
        percentages.push("100%");
      } else if (i === fullStars && decimal > 0) {
        percentages.push(`${decimal * 100}%`);
      } else {
        percentages.push("0%");
      }
    }
    setFillPercentages(percentages);
  };

  const handleClick = (idx) => {
    setSelectedIndex(idx);
    onChange(idx + 1);
  };

  return (
    <div className={`star_container ${className}`}>
      {[...new Array(stars)].map((_, idx) => {
        const isSelected = idx <= selectedIndex;
        const isHovered = idx <= hoveredIndex;

        let clr = "#6663ffbe";
        let percent = fillPercentages[idx] || "0%";

        if (isHovered) {
          percent = "100%";
        }

        if (isHovered && isSelected) {
          clr = "#4643fcbe";
        }

        return (
          <button
            key={idx}
            onMouseOver={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(-1)}
            onClick={() => handleClick(idx)}
            aria-label={`Rate ${idx + 1} stars`}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
            >
              <defs>
                <linearGradient
                  id={`starGradient-${idx}`}
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop stopColor={clr} offset={percent} className="F1gst1" />
                  <stop
                    stopColor="transparent"
                    offset={percent}
                    className="F1gst2"
                  />
                </linearGradient>
              </defs>
              <path
                fill={`url(#starGradient-${idx})`}
                d="M17.562 21.56a1 1 0 0 1-.465-.116L12 18.764l-5.097 2.68a1 1 0 0 1-1.45-1.053l.973-5.676-4.124-4.02a1 1 0 0 1 .554-1.705l5.699-.828 2.549-5.164a1.04 1.04 0 0 1 1.793 0l2.548 5.164 5.699.828a1 1 0 0 1 .554 1.705l-4.124 4.02.974 5.676a1 1 0 0 1-.985 1.169Z"
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
