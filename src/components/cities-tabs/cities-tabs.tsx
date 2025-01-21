import {Tab} from './tab.tsx';
import {Cities} from '../../const.ts';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action.ts';

type CitiesTabsProps = {
  currentCity: Cities;
}

export function CitiesTabs({ currentCity }: CitiesTabsProps) {
  const dispatch = useAppDispatch();
  const handleChangeCity = (city: Cities) => {
    dispatch(changeCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
        {Object.keys(Cities).map((cityKey) => {
            const cityKeyTyped = cityKey as keyof typeof Cities;
            return (
              <Tab
                key={cityKey}
                title={Cities[cityKeyTyped]}
                isActive={currentCity === Cities[cityKeyTyped]}
                handleClick={handleChangeCity}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}
