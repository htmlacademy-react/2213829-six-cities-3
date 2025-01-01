import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus} from './action.ts';
import {AuthorizationStatus, Cities} from '../const.ts';
import {Offer} from '../types/Offer.ts';

type InitalState = {
  city: Cities;
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
}

const initialState: InitalState = {
  city: Cities.Paris,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
