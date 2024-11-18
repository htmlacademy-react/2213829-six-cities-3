import { FC } from 'react';
import Card from '../card/card.tsx';
import Header from '../header/header.tsx';
import CityList from '../сity-list/city-list.tsx';
import { offersListData } from '../mocks/offers-list.ts';
import Map from '../map/map.tsx';

type CardProps = {
    cardItems: React.ReactNode;
}

const Home: FC<CardProps> = ({cardItems}): JSX.Element => (
  <>
    <Header/>
    <main className="page__main page__main--index">
      <CityList />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{cardItems} places to stay in Amsterdam</b>
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
          <Map city={offersListData}/>
        </div>
      </div>
    </main>
  </>
);

export default Home;
