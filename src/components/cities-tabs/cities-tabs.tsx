import {Tab} from './tab.tsx';
import {Cities} from '../../const.ts';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action.ts';

type CitiesTabsProps = {
  currentCity: Cities;
}

export function CitiesTabs({...props}: CitiesTabsProps) {
  const dispatch = useAppDispatch();
  const handleChangeCity = (city: Cities) => {
    dispatch(changeCity(city));
  };

  const cityKeys = Object.keys(Cities) as Array<keyof typeof Cities>;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityKeys.map((cityKey) => (
            <Tab
              key={cityKey}
              title={Cities[cityKey]}
              isActive={props.currentCity === Cities[cityKey]}
              handleClick={handleChangeCity}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
