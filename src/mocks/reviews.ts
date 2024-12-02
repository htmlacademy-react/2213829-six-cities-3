import {Review} from '../types/Review.ts';

export const reviews: Review[] = [
  {
    id: '1',
    date: '2019-06-08T14:13:56.569Z',
    user: {
      name: 'Max',
      avatarUrl: '../markup/img/avatar-max.jpg',
      isPro: false,
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
];
