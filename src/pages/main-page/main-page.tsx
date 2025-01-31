import OffersList from '../../components/offers-list/offers-list.tsx';
import { Cities } from '../../const.ts';
import CitiesMap from '../../components/cities-map/cities-map.tsx';
import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {Offer} from '../../types/Offer.ts';
import {CitiesTabs} from '../../components/cities-tabs/cities-tabs.tsx';
import {Header} from '../../components/header/header.tsx';
import { changeCity, fillOffers } from '../../store/action';

function getOffersByCity(offers: Offer[], city: Cities | null): Offer[] {
  if (!city) return [];
  return offers.filter((offer) => offer.city.name === city);
}

const fetchOffersForCity = async (city: Cities): Promise<Offer[]> => {
  const response = await fetch(`/api/offers?city=${city}`);

  if (!response.ok) {
    throw new Error('Failed to fetch offers for the selected city');
  }

  return await response.json(); 
};

export default function MainPage(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>('popular');

  const handleCityChange = (newCity: Cities) => {
    dispatch(changeCity(newCity));
  };

  const updateOffers = (newOffers: Offer[]) => {
    dispatch(fillOffers(newOffers));
  };

  const handleCitySelect = async (selectedCity: Cities) => {
    handleCityChange(selectedCity);
    
    try {
      const newOffers = await fetchOffersForCity(selectedCity);
      updateOffers(newOffers);
    } catch (error) {
      console.error(error);
    }
  };

  // Calculate filteredOffers based on the current city
  const filteredOffers = getOffersByCity(offers, city);

  // Check for loading state
  if (!city || !offers || offers.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs currentCity={city} handleCitySelect={handleCitySelect} updateOffers={updateOffers} />
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList
              offers={filteredOffers}
              onHover={setHoveredOfferId}
              currentAmountOfOffers={filteredOffers.length}
              currentCity={city}
              sortOption={sortOption}
            />
            <div className="cities__right-section">
              <CitiesMap
                city={city}
                offers={filteredOffers}
                hoveredOfferId={hoveredOfferId}
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
