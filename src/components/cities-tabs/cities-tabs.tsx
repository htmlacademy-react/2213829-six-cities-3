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
