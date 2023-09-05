import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const totalRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li className="star" key={`rating-key${i}`}>
          <FaStar />
        </li>
      );
    } else {
      totalRating.push(
        <li className="star-o" key={`rating-key${i}`}>
          <FaStar />
        </li>
      );
    }
  }

  return (
    <div className="rating">
      <ul>{totalRating}</ul>
    </div>
  );
};

export default Rating;
