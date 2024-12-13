import OffersList from '../../components/offers-list/offers-list.tsx';
import {Cities} from '../../const.ts';
import CitiesMap from '../../components/cities-map/cities-map.tsx';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import {Offer} from '../../types/Offer.ts';
import {CitiesTabs} from '../../components/cities-tabs/cities-tabs.tsx';
import {Header} from '../../components/header/header.tsx';

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
      <Header />
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
