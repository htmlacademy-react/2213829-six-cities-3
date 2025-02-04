import OfferCard from '../offer-card/offer-card.tsx';
import {Offer} from '../../types/Offer.ts';
import { Cities } from '../../const.ts';
import { useAppSelector } from '../../hooks/index.ts';
import { RootState } from '../../store/index.ts';
import { useState } from 'react';

type OffersListProps = {
  offers: Offer[] | null;
  onHover: ((offerId: string | null) => void);
  currentCity: Cities;
  currentAmountOfOffers: number | undefined;
  sortOption: string;
}

function OffersList({...props}: OffersListProps) {
  const [sortOption, setSortOption] = useState<string>(props.sortOption);

  function handleChangeSortOption(newSortOption: string) {
    setSortOption(newSortOption);
  }

  function sortOffers(offersToSort: Offer[] | null, sortOptionToUse: string) {
    if (!offersToSort) {
      return null;
    }
    switch (sortOptionToUse) {
      case 'Popular':
        return offersToSort;
      case 'PriceLowToHigh':
        return [...offersToSort].sort((a, b) => a.price - b.price);
      case 'PriceHighToLow':
        return [...offersToSort].sort((a, b) => b.price - a.price);
      case 'TopRated':
        return [...offersToSort].sort((a, b) => b.rating - a.rating);
      default:
        return offersToSort;
    }
  }
};

function OffersList({...props}: OffersListProps): JSX.Element {
  const error = useAppSelector((state: RootState) => state.error);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      {error && <div className="error-message">{error}</div>}
      <b className="places__found">{props.currentAmountOfOffers} places to stay in {props.currentCity}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          {sortOption}
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
        {props.offers && sortOffers(props.offers, sortOption)?.map((offer) => (
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
        ))}
      </div>
    </section>
  );
}

export default OffersList;
