import {Tab} from './tab.tsx';
import {Cities} from '../../const.ts';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action.ts';
import { Offer } from '../../types/Offer.ts';

type CitiesTabsProps = {
  currentCity: Cities;
  handleCitySelect: (city: Cities) => void;
  updateOffers: (offers: Offer[]) => void;
}

export function CitiesTabs({ currentCity }: CitiesTabsProps) {
  const dispatch = useAppDispatch();
  
  const handleChangeCity = (city: Cities) => {
    dispatch(changeCity(city));
  };

  const fetchOffersForCity = async (city: Cities): Promise<Offer[]> => {
    const response = await fetch(`/api/offers?city=${city}`);

    if (!response.ok) {
      const errorText = await response.text(); 
      console.error('Error fetching offers:', errorText);
      throw new Error('Failed to fetch offers for the selected city');
    }

    return await response.json();
  };

  const cityKeys = Object.keys(Cities) as Array<keyof typeof Cities>;

  const handleCitySelect = async (selectedCity: Cities) => {
    handleChangeCity(selectedCity);
    
    try {
      const newOffers = await fetchOffersForCity(selectedCity); 
      props.updateOffers(newOffers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <Tab
            title={Cities.Paris}
            isActive={props.currentCity === Cities.Paris}
            handleClick={handleChangeCity}
          />
          <Tab
            title={Cities.Cologne}
            isActive={props.currentCity === Cities.Cologne}
            handleClick={handleChangeCity}
          />
          <Tab
            title={Cities.Brussels}
            isActive={props.currentCity === Cities.Brussels}
            handleClick={handleChangeCity}
          />
          <Tab
            title={Cities.Amsterdam}
            isActive={props.currentCity === Cities.Amsterdam}
            handleClick={handleChangeCity}
          />
          <Tab
            title={Cities.Hamburg}
            isActive={props.currentCity === Cities.Hamburg}
            handleClick={handleChangeCity}
          />
          <Tab
            title={Cities.Dusseldorf}
            isActive={props.currentCity === Cities.Dusseldorf}
            handleClick={handleChangeCity}
          />
        </ul>
      </section>
    </div>
  );
}
