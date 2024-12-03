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
        <input
          onClick={() => (handleRatingChange(5))}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={5}
          id="5-stars"
          type="radio"
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
        <input
          onClick={() => (handleRatingChange(4))}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={4}
          id="4-stars"
          type="radio"
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
        <input
          onClick={() => (handleRatingChange(3))}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={3}
          id="3-stars"
          type="radio"
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
        <input
          onClick={() => (handleRatingChange(2))}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={2}
          id="2-stars"
          type="radio"
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
        <input
          onClick={() => (handleRatingChange(1))}
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={1}
          id="1-star"
          type="radio"
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star"/>
          </svg>
        </label>
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
