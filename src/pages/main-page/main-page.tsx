import {Link} from 'react-router-dom';
import OffersList from '../../components/offers-list/offers-list.tsx';
import {AppRoute, Cities} from '../../const.ts';
import CitiesMap from '../../components/cities-map/cities-map.tsx';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import {Offer} from '../../types/Offer.ts';
import {CitiesTabs} from '../../components/cities-tabs/cities-tabs.tsx';

function getOffersByCity(offers: Offer[], city: Cities) {
  const filteredOffers = offers.filter((offer) => offer.city.name === city);
  return filteredOffers ?? null;
}

export default function MainPage(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = getOffersByCity(useAppSelector((state) => state.offers), city);
  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);

  const handleOfferHover = (offerId: string | null) => {
    setHoveredOfferId(offerId);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs currentCity={city} />
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList
              offers={offers}
              onHover={handleOfferHover}
              currentAmountOfOffers={offers?.length}
              currentCity={city}
            />
            <div className="cities__right-section">
              <CitiesMap
                offers={offers}
                selectedOfferId={hoveredOfferId}
                isNearbyOffersMap={false}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
