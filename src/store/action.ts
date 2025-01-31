import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/Offer.ts';
import {Cities} from '../const.ts';
import { Review } from '../types/Review.ts';
import { PostReview } from '../types/PostReview.ts';
import { Place } from '../types/Place.ts';

export const changeCity = createAction<Cities>('city/change');

export const fillOffers = createAction<Offer[]>('offers/fill');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setError = createAction<string>('error/set');
export const loadOffer = createAction<Place>('offer/load');
export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');
export const loadOfferComments = createAction<Review[]>('data/loadOfferComments');
export const loadNearbyOffers = createAction<Offer[]>('data/loadOffersNearby');
export const postComment = createAction<PostReview>('data/postComment');
