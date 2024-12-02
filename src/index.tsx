import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers.ts';
import {favoritePlaces} from './mocks/favorite-places.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers} favoritePlaces={favoritePlaces} />
  </React.StrictMode>,
);
