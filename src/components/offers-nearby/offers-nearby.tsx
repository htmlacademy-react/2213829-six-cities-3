import CitiesMap from '../cities-map/cities-map.tsx';
import OfferCard from '../offer-card/offer-card.tsx';
import {Offer} from '../../types/Offer.ts';
import {useAppSelector} from '../../hooks';

export function OffersNearby() {
  const nearbyOffers = useAppSelector((state) => state.currentNearbyOffers);
  const currentOffer = useAppSelector((state) => state.currentOffer);

  function omitSelectedOffer(offersToFilter: Offer[], selectedOfferId: string | undefined) {
    return offersToFilter.filter((offer) => offer.id !== selectedOfferId);
  }

  return (
    <>
      <CitiesMap
        offers={nearbyOffers}
        selectedOfferId={currentOffer?.id ?? null}
        isNearbyOffersMap
      />
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            {omitSelectedOffer(nearbyOffers, currentOffer?.id).map((offer) => (
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
