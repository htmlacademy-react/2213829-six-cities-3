
import { City } from '../../types/City.ts';
// import {City} from '../../types/City.ts';
import {Offer} from '../../types/Offer.ts';
import {Point} from '../../types/Point.ts';
import Map from '../map/map.tsx';

type CitiesMapProps = {
  city: City;
  offers: Offer[] | null;
  selectedOfferId: string | null;
  isNearbyOffersMap: boolean;
  hoveredOfferId: string | null; // Ensure this allows null
}

function CitiesMap({...props}: CitiesMapProps) {
  function getPointsFromOffers(offersList: Offer[]): Point[] {
    return offersList.map((offer): Point => ({
      title: offer.title,
      lat: offer.location.latitude,
      lng: offer.location.longitude
    }));
  }

  function getSelectedPointFromOffers(offers: Offer[], selectedOfferId: string | null): Point | undefined {
    const selectedOffer = offers.find((offer) => offer.id === selectedOfferId);
    if (selectedOffer) {
      return {
        title: selectedOffer.title,
        lat: selectedOffer.location.latitude,
        lng: selectedOffer.location.longitude
      };
    } else {
      return undefined;
    }
  }

  return (
    <Map
      city={(props.offers && props.offers[0]) ? props.offers[0].city : null}
      points={props.offers ? getPointsFromOffers(props.offers) : null}
      selectedPoint={props.offers ? getSelectedPointFromOffers(props.offers, props.selectedOfferId) : null}
      isNearbyOffersMap={props.isNearbyOffersMap}
    />
  );
}

export default CitiesMap;
