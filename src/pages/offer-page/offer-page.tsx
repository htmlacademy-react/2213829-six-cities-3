import ReviewsList from '../../components/reviews/reviews-list.tsx';
import OffersNearby from '../../components/offers-nearby/offers-nearby.tsx';
import { Header } from '../../components/header/header.tsx';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchOffersForCity } from '../../services/api';


function OfferPage(): JSX.Element {
  const currentOffer = useAppSelector((state) => state.currentOffer);
  const comments = currentOffer ? currentOffer.comments : [];
  const city = useAppSelector((state) => state.city);
  const nearbyOffers = useAppSelector((state) => state.currentNearbyOffers);
  const selectedOfferId = '1';
  const hoveredOfferId = null;

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const offers = await fetchOffersForCity(city);
        // Update state or dispatch action to store offers
      } catch (error) {
        console.error(error);
      }
    };

    fetchOffers();
  }, [city]); // Fetch when city changes

  return(
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        {currentOffer && (
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {currentOffer.images.map((image) => (
                  <div
                    key={image}
                    className="offer__image-wrapper"
                  >
                    <img
                      className="offer__image"
                      src={image}
                      alt="Photo studio"
                    />
                  </div>))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {currentOffer.isPremium &&
                  (
                    <div className="offer__mark">
                      <span>Premium</span>
                    </div>
                  )}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {currentOffer.title}
                  </h1>
                  <button className="offer__bookmark-button button" type="button">
                    <svg className="offer__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: `${currentOffer.rating * 20}%`}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    Type: {currentOffer.type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    Amount of bedrooms: {currentOffer.bedrooms}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max adults: {currentOffer.maxAdults}
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">{currentOffer.price} €</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {currentOffer.goods.map((good) => (
                      <li key={good} className="offer__inside-item">{good}</li>
                    ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="offer__avatar user__avatar"
                        src={currentOffer.host.avatarUrl}
                        width={74}
                        height={74}
                        alt="User avatar"
                      />
                    </div>
                    <span className="offer__user-name">{currentOffer.host.name}</span>
                    {currentOffer.host.isPro &&
                      <span className="offer__user-status">Pro</span>}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
              </div>
              <ReviewsList reviews={comments} />
            </div>
          </section>
        )}
        <OffersNearby
          city={city}
          offers={nearbyOffers}
          selectedOfferId={selectedOfferId}
          hoveredOfferId={hoveredOfferId}
          isNearbyOffersMap={true}
        />
      </main>
    </div>
  );
}

export default OfferPage;
