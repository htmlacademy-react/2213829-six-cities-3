import CitiesMap from '../cities-map/cities-map.tsx';
import {offers} from '../../mocks/offers.ts';
import OfferCard from '../offer-card/offer-card.tsx';
import {Offer} from '../../types/Offer.ts';

type OffersNearbyProps = {
  selectedOfferId: string;
}

export function OffersNearby({...props}: OffersNearbyProps) {
  function omitSelectedOffer(offersToFilter: Offer[], selectedOfferId: string) {
    return offersToFilter.filter((offer) => offer.id !== selectedOfferId);
  }

  return (
    <>
      <CitiesMap
        offers={offers}
        city={offers[0].city}
        selectedOfferId={props.selectedOfferId}
        isNearbyOffersMap
      />
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            {omitSelectedOffer(offers, props.selectedOfferId).map((offer) => (
              <OfferCard
                isNearbyOfferCard
                key={offer.id}
                id={offer.id}
                title={offer.title}
                type={offer.type}
                price={offer.price}
                isPremium={offer.isPremium}
                rating={offer.rating}
                previewImage={offer.previewImage}
                onHover={() => {}}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
