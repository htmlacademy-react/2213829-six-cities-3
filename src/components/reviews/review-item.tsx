import {Review} from '../../types/Review.ts';

type ReviewItemProps = {
  review?: Review;
}

export function ReviewItem({...props}: ReviewItemProps) {
  return (
    <li className="reviews__item">
      {
        props.review ? (
          <>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={props.review.user.avatarUrl}
                  width={54}
                  height={54}
                  alt="Reviewer's avatar"
                />
              </div>
              <span className="reviews__user-name">{props.review.user.name}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: `${props.review.rating * 20}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {props.review.comment}
              </p>
              <time className="reviews__time" dateTime={props.review.date}>
                {new Date(props.review.date).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </div>
          </>
        )
          : <p>There are no reviews :(</p>
      }
    </li>
  );
}
