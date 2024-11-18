
export type OffersListType = {
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
        previewImage: string;

}

export const offersListData: OffersListType[] =
    [
      {
        'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
        'title': 'Beautiful & luxurious studio at great location',
        'type': 'apartment',
        'price': 130,
        'city': {
          'name': 'Amsterdam',
          'location': {
            'latitude': 52.35514938496378,
            'longitude': 4.673877537499948,
            'zoom': 8
          }
        },
        'location': {
          'latitude': 52.3909553943508,
          'longitude': 4.85309666406198,
          'zoom': 8
        },
        'isFavorite': false,
        'isPremium': false,
        'rating': 4,
        'previewImage': 'https://url-to-image/image.png'
      },
      {
        'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
        'title': 'Beautiful & luxurious studio at great location',
        'type': 'apartment',
        'price': 130,
        'city': {
          'name': 'Amsterdam',
          'location': {
            'latitude': 52.35514938496378,
            'longitude': 4.673877537499948,
            'zoom': 8
          }
        },
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8
        },
        'isFavorite': false,
        'isPremium': false,
        'rating': 4,
        'previewImage': 'https://url-to-image/image.png'
      },
      {
        'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
        'title': 'Beautiful & luxurious studio at great location',
        'type': 'apartment',
        'price': 130,
        'city': {
          'name': 'Amsterdam',
          'location': {
            'latitude': 52.35514938496378,
            'longitude': 4.673877537499948,
            'zoom': 8
          }
        },
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8
        },
        'isFavorite': false,
        'isPremium': false,
        'rating': 4,
        'previewImage': 'https://url-to-image/image.png'
      },
      {
        'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
        'title': 'Beautiful & luxurious studio at great location',
        'type': 'apartment',
        'price': 130,
        'city': {
          'name': 'Amsterdam',
          'location': {
            'latitude': 52.35514938496378,
            'longitude': 4.673877537499948,
            'zoom': 8
          }
        },
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8
        },
        'isFavorite': false,
        'isPremium': false,
        'rating': 4,
        'previewImage': 'https://url-to-image/image.png'
      }
    ];
