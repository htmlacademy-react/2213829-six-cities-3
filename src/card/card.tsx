import { OffersListType } from '../mocks/offers-list';

interface Data {
  offersData: OffersListType[];
}
const Card = ({offersData}: Data): JSX.Element => (
  <article className="cities__card place-card">

    {offersData.map((el)=>(
      <>
        <div className="place-card__mark">
          <span>{el.isPremium}</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper" key={'place'}>
          <a href="#">
            <img className="place-card__image" src={el.previewImage} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">{el.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use href="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span className="span" style={{width: '80%'}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{el.title}</a>
          </h2>
          <p className="place-card__type">{el.type}</p>
        </div>
      </>
    ))}

  </article>
);

export default Card;
