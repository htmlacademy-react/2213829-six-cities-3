import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../app/App';

interface RouteItem {
  path: string;
  element: React.ReactNode;
}

export const routes: RouteItem[] = [
  {
    path: '/',
    element: <App />
  }
];

export const router = createBrowserRouter(routes);