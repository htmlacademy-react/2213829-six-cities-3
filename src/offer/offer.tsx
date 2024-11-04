import Header from '../header/header';
import { OfferType } from '../mocks/offers';
import Reviews from '../review/reviews';
import OffersList from '../offers-list/offers-list';
import {offersListData} from '../mocks/offers-list';

interface Data {
  offersData: OfferType;
}

const Offer = ({offersData}: Data): JSX.Element => (
  <div className="page">

    <Header />

    <div className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offersData.images.map((img)=>(
              <div className="offer__image-wrapper" key={'image'}>
                <img className="offer__image" src={img} alt="Photo studio"/>
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className="offer__mark">
              <span>Premium</span>
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {offersData.title}

              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use href="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: '80%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{offersData.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {offersData.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {offersData.bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                  Max {offersData.maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">{offersData.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                <li className="offer__inside-item">
                    Wi-Fi
                </li>
                <li className="offer__inside-item">
                    Washing machine
                </li>
                <li className="offer__inside-item">
                    Towels
                </li>
                <li className="offer__inside-item">
                    Heating
                </li>
                <li className="offer__inside-item">
                    Coffee machine
                </li>
                <li className="offer__inside-item">
                    Baby seat
                </li>
                <li className="offer__inside-item">
                    Kitchen
                </li>
                <li className="offer__inside-item">
                    Dishwasher
                </li>
                <li className="offer__inside-item">
                    Cabel TV
                </li>
                <li className="offer__inside-item">
                    Fridge
                </li>
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src={offersData.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="offer__user-name">
                  {offersData.host.name}
                </span>
                <span className="offer__user-status">
                  {offersData.host.isPro}
                </span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {offersData.description}
                </p>
                <p className="offer__text">
                  {offersData.description}
                </p>
              </div>
            </div>
            <Reviews />
          </div>
        </div>
        <section className="offer__map map"></section>
      </section>
      <OffersList offersListData={offersListData}/>
    </div>
  </div>
);
export default Offer;
