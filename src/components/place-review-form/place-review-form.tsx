import {ChangeEvent, useState} from 'react';

function PlaceReviewForm(): JSX.Element {
  const [reviewRating, setReviewRating] = useState<number | null>(null);
  const [reviewDescription, setReviewDescription] = useState<string | null>(null);

  const handleRatingChange = (rating: number) => {
    setReviewRating(rating);
  };

  const handleTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewDescription(evt.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((rating) => (
          <>
            <input
              onClick={() => handleRatingChange(rating)}
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={rating}
              id={`${rating}-stars`}
              type="radio"
            />
            <label
              htmlFor={`${rating}-stars`}
              className="reviews__rating-label form__rating-label"
              title={
                rating === 5 ? 'perfect' :
                rating === 4 ? 'good' :
                rating === 3 ? 'not bad' :
                rating === 2 ? 'badly' : 'terribly'
              }
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea
        onChange={handleTextChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
      <p>Your review rating: {reviewRating}</p>
      <p>Your review description: {reviewDescription}</p>
    </form>
  );
}

export default PlaceReviewForm;
