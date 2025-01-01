import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {favoritePlaces} from './mocks/favorite-places.ts';
import {Provider} from 'react-redux';
import {store} from './store';
import ErrorMessage from './components/error-message/error-message.tsx';
import {checkAuthAction, fetchOfferAction} from './store/api-actions';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App favoritePlaces={favoritePlaces} />
    </Provider>
  </React.StrictMode>,
);
