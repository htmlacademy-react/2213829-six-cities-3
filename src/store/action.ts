import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/Offer.ts';
import {Cities} from '../const.ts';

export const changeCity = createAction<Cities>('city/change');

export const fillOffers = createAction<Offer[]>('offers/fill');

export const setError = (message: string) => ({
  type: 'SET_ERROR',
  payload: message,
});
