import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/Offer.ts';
import {AuthorizationStatus, Cities} from '../const.ts';

export const setError = createAction<string | null>('game/setError');

export const changeCity = createAction<Cities>('city/change');

export const loadOffers = createAction<Offer[]>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
