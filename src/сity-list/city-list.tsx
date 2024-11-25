import { useLayoutEffect, useState } from 'react';
import { CITIES } from '../constans';
import { OffersType } from '../types/offers';
import TabItem from './tab-item';
type MainScreenProps = {
  offers: OffersType;
}
const filterOffersByCity = (offers: OffersType, city: string): OffersType => (
  offers?.filter((offer) => offer.city.name === city)
);

const CityList = ({offers}: MainScreenProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState('');
  const [filteredOffers, setFilteredOffers] = useState<OffersType>([]);


  useLayoutEffect(() => {
    setActiveTab('Amsterdam');
    setFilteredOffers(filterOffersByCity(offers, 'Amsterdam'));
  }, [offers]);
  const handleTabClick = (city: string) => {
    setActiveTab(city);
    setFilteredOffers(filterOffersByCity(offers, city));
  };
  return(
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => (
              <TabItem
                city={city}
                key={city}
                onTabClick={handleTabClick}
                activeTab={activeTab}
              />))}
          </ul>
        </section>
      </div>
    </>
  );

};

export default CityList;
