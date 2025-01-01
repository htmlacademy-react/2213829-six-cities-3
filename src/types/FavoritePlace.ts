import {City} from './City.ts';
import {LocationInfo} from './LocationInfo.ts';

export type FavoritePlace = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: LocationInfo;
  isFavorite?: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}
