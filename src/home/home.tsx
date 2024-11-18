
import Card from '../card/card.tsx';
import Header from '../header/header.tsx';
import CityList from '../сity-list/city-list.tsx';
import { offersListData } from '../mocks/offers-list.ts';
import Map from '../map/map.tsx';
import { CityType, OffersType } from '../types/offers.ts';
import {  useState } from 'react';
import { offers } from '../mocks/offers.ts';
import cn from 'classnames'

// type CardProps = {
//     cardItems: React.ReactNode;
// }
type MainScreenProps = {
  offers: OffersType;
}

const filterOffersByCity = (offers: OffersType, city: string): OffersType => (
  offers.filter((offer) => offer.city.name === city)
);

// const findCityInfo = (offers: OffersType, activeTab: string): CityType => (
//   offers.find((offer) => offer.city.name === activeTab).city
// );
// компилятор TS не устраивала ф-ция find, пришлось писать так
const findCityInfo = (offers: OffersType, activeTab: string): CityType => (
  filterOffersByCity(offers, activeTab)[0].city
);

const Home = ({offers}: MainScreenProps): JSX.Element => (
  const [activeTab, setActiveTab] = useState('');
  const [filteredOffers, setFilteredOffers] = useState<OffersType>([]);
  const [activeOfferID, setActiveOfferID] = useState<number | null>(null);

  const getTitle = (numberOfOffers: number) => (
    `${numberOfOffers} ${numberOfOffers === 1 ? 'place' : 'places'} to stay in ${activeTab}`
  );

  const mainClassName = cn('page__main page__main--index', {
    'page__main--index-empty': Boolean(filteredOffers.length),
  });


  <>
    <Header/>
    <main className={mainClassName}>
      <CityList offers={offers}/>
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
            cityInfo={findCityInfo(offers, activeTab)}
            points={filteredOffers}
            activeOfferID={activeOfferID}
            screenClass={Screen.main}
          />
        </div>
      </div>
    </main>
  </>
);

export default Home;
