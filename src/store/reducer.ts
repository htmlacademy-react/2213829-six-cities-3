import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffers,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus,
  loadOffer,
  setOfferDataLoadingStatus,
  loadOfferComments,
  loadNearbyOffers,
  postComment,
  fillOffers,
} from './action.ts';
import {AuthorizationStatus, Cities} from '../const.ts';
import {Offer} from '../types/Offer.ts';
import {Place} from '../types/Place.ts';
import {Review} from '../types/Review.ts';
import {PostReview} from '../types/PostReview.ts';

type InitialState = {
  city: Cities;
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
  currentOfferComments: Review[];
}

const initialState: InitialState = {
  city: Cities.Paris,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  currentOfferComments: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadOfferComments, (state, action) => {
      state.currentOfferComments = action.payload;
    });
});
