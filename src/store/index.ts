import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import {createAPI} from '../services/api';

export const api = createAPI();

export const store = configureStore({reducer});
export type RootState = ReturnType<typeof store.getState>;