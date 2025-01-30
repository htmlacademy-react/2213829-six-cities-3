import OfferCard from '../offer-card/offer-card.tsx';
import {Offer} from '../../types/Offer.ts';
import { Cities } from '../../const.ts';
import { SortOptions } from '../../const.ts';
import { useState } from 'react';

type OffersListProps = {
  offers: Offer[] | null;
  onHover: ((offerId: string | null) => void);
  currentCity: Cities;
  currentAmountOfOffers: number | undefined;
}

function OffersList({...props}: OffersListProps): JSX.Element {
  const [sortOption, setSortOption] = useState<SortOptions>(SortOptions.Popular);

  function handleChangeSortOption(newSortOption: SortOptions) {
    setSortOption(newSortOption);
  }

  function sortOffers(offersToSort: Offer[] | null, sortOptionToUse: SortOptions) {
    if (!offersToSort) {
      return null;
    }
    switch (sortOptionToUse) {
      case SortOptions.Popular:
        return offersToSort;
      case SortOptions.PriceLowToHigh:
        return [...offersToSort].sort((a, b) => a.price - b.price);
      case SortOptions.PriceHighToLow:
        return [...offersToSort].sort((a, b) => b.price - a.price);
      case SortOptions.TopRated:
        return [...offersToSort].sort((a, b) => b.rating - a.rating);
      default:
        return offersToSort;
    }
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
                Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
  {props.offers ? (
    props.offers.map((offer) => (
      <OfferCard
        key={offer.id}
        onHover={props.onHover}
        id={offer.id}
        title={offer.title}
        type={offer.type}
        isFavorite={offer.isFavorite}
        isPremium={offer.isPremium}
        price={offer.price}
        previewImage={offer.previewImage}
        rating={offer.rating}
        isNearbyOfferCard={false}
      />
    ))
  ) : (
    <div>No offers available</div> 
  )}
</div>
    </section>
  );
}

export default OffersList;
