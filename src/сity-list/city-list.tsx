import { useLayoutEffect, useState } from "react";
import { CITIES } from "../constans";
import { OffersType } from "../types/offers";
import { offers } from "../mocks/offers";
import TabItem from "./tab-item";
type MainScreenProps = {
  offers: OffersType,
}

const CityList = ({offers}: MainScreenProps): JSX.Element => (
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

export default CityList;
