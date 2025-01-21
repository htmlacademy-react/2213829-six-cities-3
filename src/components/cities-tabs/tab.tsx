import {Cities} from '../../const.ts';
import { Link } from 'react-router-dom';

type TabProps = {
  title: Cities;
  isActive: boolean;
  handleClick: (city: Cities) => void;
}

export function Tab({...props}: TabProps) {
  return (
    <li className="locations__item">
      <Link
        className={props.isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
        to="#"
        onClick={() => props.handleClick(props.title)}
      >
        <span>{props.title}</span>
      </Link>
    </li>
  );
}
