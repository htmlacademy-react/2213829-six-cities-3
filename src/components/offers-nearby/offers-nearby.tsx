import CitiesMap from '../cities-map/cities-map.tsx';
import OfferCard from '../offer-card/offer-card.tsx';
import {Offer} from '../../types/Offer.ts';
import { useAppSelector } from '../../hooks';
import { Cities } from '../../const.ts';
import { City } from '../../types/City.ts';
import { useEffect } from 'react';

type OffersNearbyProps = {
  city: Cities;
  offers: Offer[];
  selectedOfferId: string | null;
  hoveredOfferId: string | null;
  isNearbyOffersMap: boolean;
}

const getCityObject = (cityName: Cities): City => ({
  name: cityName,
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 10
  },
});

const fetchOffersForCity = async (city: Cities): Promise<Offer[]> => {
  const response = await fetch(`/api/offers?city=${city}`);

  if (!response.ok) {
    const errorText = await response.text(); 
    console.error('Error fetching offers:', errorText);
    throw new Error('Failed to fetch offers for the selected city');
  }

  return await response.json();
};

const OffersNearby = ({ city, offers, selectedOfferId, hoveredOfferId, isNearbyOffersMap }: OffersNearbyProps) => {
  const nearbyOffers = useAppSelector((state) => state.currentNearbyOffers);
  const currentOffer = useAppSelector((state) => state.currentOffer);

  useEffect(() => {
    const fetchNearbyOffers = async () => {
      try {
        const newOffers = await fetchOffersForCity(city);
        // Update state or dispatch action to store nearby offers
      } catch (error) {
        console.error(error);
      }
    };

    fetchNearbyOffers();
  }, [city]); // Fetch when city changes

  function omitSelectedOffer(offersToFilter: Offer[], idToFilter: string | undefined) {
    return offersToFilter.filter((offer) => offer.id !== idToFilter);
  }

  return (
    <>
      <CitiesMap
        city={city}
        offers={offers}
        selectedOfferId={selectedOfferId}
        hoveredOfferId={hoveredOfferId}
        isNearbyOffersMap={isNearbyOffersMap}
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
};

export default OffersNearby;
