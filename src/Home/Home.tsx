import React from "react"
import Card from '../Card/Card.tsx'
import Header from "../Header/Header.tsx"
import CityList from "../CityList/CityList.tsx"
const Home = ({cardItems}) => {
    return (
    <>
        <Header/>
        <main className="page__main page__main--index">
        <CityList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabindex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlink:href="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabindex="0">Popular</li>
                  <li className="places__option" tabindex="0">Price: low to high</li>
                  <li className="places__option" tabindex="0">Price: high to low</li>
                  <li className="places__option" tabindex="0">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
               <Card />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
        </main>
    </>
    )
}

export default Home