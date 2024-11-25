import { OffersType, OfferType } from '../types/offers';

type Data = {
  offersData: OffersType;
};

// Функция для извлечения точек
export const extractPoints = (data: Data) =>
  data.offersData.map((offer: OfferType) => ({
    id: offer.id,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
    zoom: offer.location.zoom,
  }));
