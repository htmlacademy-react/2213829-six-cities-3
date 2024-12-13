import {Offer} from '../../types/Offer.ts';
import {Point} from '../../types/Point.ts';
import Map from '../map/map.tsx';

type CitiesMapProps = {
  offers: Offer[] | null;
  selectedOfferId: string | null;
  isNearbyOffersMap: boolean;
}

function CitiesMap({...props}: CitiesMapProps) {
  function getPointsFromOffers(offersList: Offer[]): Point[] {
    return offersList.map((offer): Point => ({
      id: offer.id,
      title: offer.title,
      lat: offer.location.latitude,
      lng: offer.location.longitude
    }));
  }

  function getSelectedPointFromOffers(offers: Offer[], selectedOfferId: string | null): Point | undefined {
    const selectedOffer = offers.find((offer) => offer.id === selectedOfferId);
    if (selectedOffer) {
      return {
        id: selectedOffer.id,
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
