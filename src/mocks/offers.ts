export type OfferType = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: {
    name: string;
    location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
    };
    location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: [string];
    host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
    };
    images: string[];
    maxAdults: number;
    }

export const OffersStatic: OfferType = {
  'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
  'price': 130,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isFavorite: false,
  isPremium: false,
  rating: 4,
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  bedrooms: 3,
  goods: [
    'Heating'
  ],
  host: {
    name: 'Oliver Conner',
    avatarUrl: 'https://url-to-image/image.png',
    isPro: false
  },
  images: [
    'img/apartment-01.jpg',
    'img/apartment-01.jpg'
  ],
  maxAdults: 4
};
