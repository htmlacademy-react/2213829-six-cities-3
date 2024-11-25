
import Card from '../card/card.tsx';
import Header from '../header/header.tsx';
import CityList from '../сity-list/city-list.tsx';
import { offersListData } from '../mocks/offers-list.ts';
import Map from '../map/map.tsx';
import { OffersType } from '../types/offers.ts';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Screen } from '../constans.ts';
import { extractPoints } from './utils';

type MainScreenProps = {
  offers: OffersType;
}

// const filterOffersByCity = (offersData: OffersType, city: string): OffersType => (
//   offersData.filter((offer) => offer.city.name === city)
// );

// const findCityInfo = (offersData: OffersType, activeTab: string): CityType => (
//   offersData.find((offer) => offer.city.name === activeTab)!.city
// );


const Home = ({offers}: MainScreenProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState('');
  const [filteredOffers, setFilteredOffers] = useState<OffersType>([]);
  const [activeOfferID, setActiveOfferID] = useState<number | null>(null);

  // const getTitle = (numberOfOffers: number) => (
  //   `${numberOfOffers} ${numberOfOffers === 1 ? 'place' : 'places'} to stay in ${activeTab}`
  // );
  // Фильтруем офферы по активному городу
  useEffect(() => {
    setFilteredOffers(offers.filter((offer) => offer.city.name === activeTab));
  }, [activeTab, offers]);
  const mainClassName = cn('page__main page__main--index', {
    'page__main--index-empty': Boolean(filteredOffers?.length),
  });

  // Извлекаем информацию о текущем городе
  const cityInfo = offers.find((offer) => offer.city.name === activeTab)?.city;
  if (!cityInfo) {
    return <div>No city info available</div>;
  }

  const points = extractPoints(filteredOffers);
  return (
    <>
      <Header/>
      <main className={mainClassName}>
        <CityList offers={points}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found"> places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" >Popular</li>
                  <li className="places__option" >Price: low to high</li>
                  <li className="places__option">Price: high to low</li>
                  <li className="places__option">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <Card offersData={offersListData}/>
              </div>
            </section>
            <Map
              cityInfo={cityInfo} // Информация о городе
              points={points} // Отфильтрованные предложения
              activeOfferID={activeOfferID} // ID активного предложения
              screenClass={Screen.main} // Класс для CSS
            />


          </div>
        </div>
      </main>
    </>
  );

};

export default Home;
