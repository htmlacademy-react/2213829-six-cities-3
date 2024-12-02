import {SortOptions} from '../../const.ts';
import {useState} from 'react';

type SortingFormProps = {
  handleChangeSortOption: (sortOption: SortOptions) => void;
  currentSortOption: SortOptions;
}

export function SortingForm({...props}: SortingFormProps) {
  const [isFormOpened, setIsFormOpened] = useState<boolean>(false);

  function handleChangeFormOpened() {
    setIsFormOpened(!isFormOpened);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        onClick={handleChangeFormOpened}
        tabIndex={0}
        style={{paddingLeft: '3px'}}
      >
        {props.currentSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={
          isFormOpened ?
            'places__options places__options--custom places__options--opened' :
            'places__options places__options--custom'
        }
      >
        <li
          className={
            props.currentSortOption === SortOptions.Popular ?
              'places__option places__option--active' :
              'places__option'
          }
          onClick={() => {
            props.handleChangeSortOption(SortOptions.Popular);
            handleChangeFormOpened();
          }}
          tabIndex={0}
        >
          Popular
        </li>
        <li
          className={
            props.currentSortOption === SortOptions.PriceLowToHigh ?
              'places__option places__option--active' :
              'places__option'
          }
          onClick={() => {
            props.handleChangeSortOption(SortOptions.PriceLowToHigh);
            handleChangeFormOpened();
          }}
          tabIndex={0}
        >
          Price: low to high
        </li>
        <li
          className={
            props.currentSortOption === SortOptions.PriceHighToLow ?
              'places__option places__option--active' :
              'places__option'
          }
          onClick={() => {
            props.handleChangeSortOption(SortOptions.PriceHighToLow);
            handleChangeFormOpened();
          }}
          tabIndex={0}
        >
          Price: high to low
        </li>
        <li
          className={
            props.currentSortOption === SortOptions.TopRated ?
              'places__option places__option--active' :
              'places__option'
          }
          onClick={() => {
            props.handleChangeSortOption(SortOptions.TopRated);
            handleChangeFormOpened();
          }}
          tabIndex={0}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}
