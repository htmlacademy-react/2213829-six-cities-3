import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';

export const store = configureStore({reducer});
export type RootState = ReturnType<typeof reducer>;
