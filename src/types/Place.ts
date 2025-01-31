// src/types/Place.ts
import { Review } from './Review.ts';

export type Place = {
  id: string;
  title: string;
  description: string;
  images: string[];
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: {
    id: string;
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comments: Review[];
};
