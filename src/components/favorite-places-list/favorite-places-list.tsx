import FavoritePlaceCard from '../favorite-place-card/favorite-place-card.tsx';
import {Offer} from '../../types/Offer.ts';

type FavoritePlacesListProps = {
  favoritePlaces: Offer[];
}

function FavoritePlacesList({favoritePlaces}: FavoritePlacesListProps): JSX.Element {
  return (
    <div className="favorites__places">
      {favoritePlaces.map((place) => (
        <FavoritePlaceCard
          key={place.id}
          id={place.id}
          title={place.title}
          type={place.type}
          isFavorite={place.isFavorite}
          isPremium={place.isPremium}
          price={place.price}
          previewImage={place.previewImage}
          rating={place.rating}
        />
      ))}
    </div>
  );
}

export default FavoritePlacesList;
