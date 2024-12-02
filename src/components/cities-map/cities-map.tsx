import {City} from '../../types/City.ts';
import {Offer} from '../../types/Offer.ts';
import {Point} from '../../types/Point.ts';
import Map from '../map/map.tsx';

type CitiesMapProps = {
  city: City;
  offers: Offer[];
  hoveredOfferId?: string;
}

function CitiesMap({...props}: CitiesMapProps) {
  function getPointsFromOffers(offersList: Offer[]): Point[] {
    return offersList.map((offer): Point => ({
      title: offer.title,
      lat: offer.location.latitude,
      lng: offer.location.longitude
    }));
  }

  function getSelectedPointFromOffers(offers: Offer[], selectedOfferId?: string): Point | undefined {
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
      city={props.city}
      points={getPointsFromOffers(props.offers)}
      selectedPoint={getSelectedPointFromOffers(props.offers, props.hoveredOfferId)}
    />
  );
}

export default CitiesMap;
