import React from 'react';
import { Review } from '../../types/Review.ts';

type ReviewsListProps = {
  reviews: Review[];
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => (
  <div className="reviews">
    <h2 className="reviews__title">Reviews</h2>
    <ul className="reviews__list">
      {reviews.map((review) => (
        <li key={review.id} className="reviews__item">
          <p className="reviews__text">{review.comment}</p>
          <p className="reviews__rating">Rating: {review.rating}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default ReviewsList;
