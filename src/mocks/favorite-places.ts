import {FavoritePlace} from '../types/FavoritePlace.ts';
import {Cities} from '../const.ts';

export const favoritePlaces: FavoritePlace[] = [
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    city: {
      name: Cities.Amsterdam,
      location: {
        latitude: 123,
        longitude: 123,
        zoom: 1,
      }
    },
    location: {
      latitude: 123,
      longitude: 123,
      zoom: 1,
    },
    isFavorite: true,
    isPremium: false,
    previewImage: 'img/room.jpg',
    rating: 4,
  },
];
