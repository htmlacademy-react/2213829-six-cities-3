import {Offer} from '../types/Offer.ts';

export const offersNearby: Offer[] = [
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3731,
        longitude: 4.8923,
        zoom: 1,
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 1,
    },
    isFavorite: true,
    isPremium: false,
    previewImage: 'img/room.jpg',
    rating: 4,
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3731,
        longitude: 4.8923,
        zoom: 1,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 1,
    },
    isFavorite: false,
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    rating: 4,
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3731,
        longitude: 4.8923,
        zoom: 1,
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 1,
    },
    isFavorite: false,
    isPremium: true,
    previewImage: 'img/apartment-03.jpg',
    rating: 5,
  },
];
