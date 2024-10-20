import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../app/app.tsx';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';

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
    element: <Favorites />
  },
  {
    path: 'offer/:id',
    element: <Offer />
  }
];

export const router = createBrowserRouter(routes);
