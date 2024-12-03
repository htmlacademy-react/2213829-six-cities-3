import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillOffers} from './action.ts';
import {offers} from '../mocks/offers.ts';
import {Cities} from '../const.ts';

const initialState = {
  city: Cities.Paris,
  offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});
