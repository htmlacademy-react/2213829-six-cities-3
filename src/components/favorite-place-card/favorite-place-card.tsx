import {Link} from 'react-router-dom';
import {Offer} from '../../types/Offer.ts';

type FavoritePlaceProps = Omit<Offer, 'city' | 'location'>

function FavoritePlaceCard({...props}: FavoritePlaceProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {
        props.isPremium &&
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${props.id}`}>
          <img
            className="place-card__image"
            src={props.previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{props.price}</b>
            <span className="place-card__price-text">
                        /&nbsp;night
            </span>
          </div>
          <button
            className= {props.isFavorite ?
              'place-card__bookmark-button place-card__bookmark-button--active button' :
              'place-card__bookmark-button button'}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{props.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${props.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${props.id}`}>{props.title}</Link>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}

export default FavoritePlaceCard;
