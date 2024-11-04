import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../app/app';
import Login from '../login/login.tsx';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import { OffersStatic } from '../mocks/offers.ts';
import { FavoritesListData } from '../mocks/favorits.ts';


interface RouteItem {
  path: string;
  element: React.ReactNode;
}

export const routes: RouteItem[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/favorites',
    element: <Favorites FavoritesList={FavoritesListData}/>
  },
  {
    path: 'offer/:id',
    element: <Offer offersData={OffersStatic} />
  }
];

export const router = createBrowserRouter(routes);
