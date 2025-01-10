import {City} from './City.ts';
import {User} from './User.ts';
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
  host: User;
  images: string[];
  maxAdults: number;
};
