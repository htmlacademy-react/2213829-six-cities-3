import {City} from './City.ts';
import {Host} from './Host.ts';
import {LocationInfo} from './LocationInfo.ts';


export type Place = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: LocationInfo;
  isFavorite?: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};
