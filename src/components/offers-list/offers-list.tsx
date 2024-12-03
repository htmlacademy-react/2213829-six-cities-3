import OfferCard from '../offer-card/offer-card.tsx';
import {Offer} from '../../types/Offer.ts';
import {Cities, SortOptions} from '../../const.ts';
import {SortingForm} from './sorting-form.tsx';
import {useState} from 'react';

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
      <b className="places__found">{props.currentAmountOfOffers ?? '0'} places to stay in {props.currentCity}</b>
      <SortingForm
        handleChangeSortOption={handleChangeSortOption}
        currentSortOption={sortOption}
      />
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
