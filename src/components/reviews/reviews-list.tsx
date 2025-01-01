import PlaceReviewForm from '../place-review-form/place-review-form.tsx';
import {Review} from '../../types/Review.ts';
import {ReviewItem} from './review-item.tsx';

type ReviewsListProps = {
  reviews: Review[];
}

export function ReviewsList({...props}: ReviewsListProps){
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{props.reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {props.reviews.map((review) => (
          <ReviewItem
            review={review}
            key={review.id}
          />
        ))}
      </ul>
      <PlaceReviewForm/>
    </section>
  );
}
