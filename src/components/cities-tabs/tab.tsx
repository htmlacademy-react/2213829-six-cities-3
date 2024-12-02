import {Cities} from '../../const.ts';

type TabProps = {
  title: Cities;
  isActive: boolean;
  handleClick: (city: Cities) => void;
}

export function Tab({...props}: TabProps) {
  return (
    <li className="locations__item">
      <a
        className={props.isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
        href="#"
        onClick={() => props.handleClick(props.title)}
      >
        <span>{props.title}</span>
      </a>
    </li>
  );
}
