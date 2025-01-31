import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffers, loadNearbyOffers, loadOffer, loadOfferComments, postComment, setError, setOfferDataLoadingStatus, setOffersDataLoadingStatus} from './action.ts';
import {offers} from '../mocks/offers.ts';
import {AuthorizationStatus, Cities} from '../const.ts';
import { Offer } from '../types/Offer.ts';
import { Place } from '../types/Place.ts';
import { Review } from '../types/Review.ts';
import { PostReview } from '../types/PostReview.ts';

type InitialState = {
  city: Cities;
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
  currentOffer: Place | null;
  isOfferDataLoading: boolean;
  currentOfferComments: Review[];
  currentNearbyOffers: Offer[];
  currentPostingComment: PostReview | null;
}

const initialState: InitialState = {
  city: Cities.Amsterdam,
  offers,
  authorizationStatus: AuthorizationStatus.NoAuth,
  error: null,
  isOffersDataLoading: false,
  currentOffer: null,
  isOfferDataLoading: false,
  currentOfferComments: [],
  currentNearbyOffers: [],
  currentPostingComment: null,
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
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(loadOfferComments, (state, action) => {
      state.currentOfferComments = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.currentNearbyOffers = action.payload;
    })
    .addCase(postComment, (state, action) => {
      state.currentPostingComment = action.payload;
    });
});
