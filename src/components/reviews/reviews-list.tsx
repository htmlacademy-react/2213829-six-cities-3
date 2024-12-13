import PlaceReviewForm from '../place-review-form/place-review-form.tsx';
import {ReviewItem} from './review-item.tsx';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const.ts';

export function ReviewsList() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const currentOfferComments = useAppSelector((state) => state.currentOfferComments);
  const listReviews = currentOfferComments.slice().sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime())).slice(0, 10);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{currentOfferComments.length}</span>
      </h2>
      <ul className="reviews__list">
        {listReviews.map((review) => (
          <ReviewItem
            review={review}
            key={review.id}
          />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth &&
        <PlaceReviewForm/>}
    </section>
  );
}
