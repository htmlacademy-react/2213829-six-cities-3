import {SortOptions} from '../../const.ts';
import {useState} from 'react';

type SortingFormProps = {
  handleChangeSortOption: (sortOption: SortOptions) => void;
  currentSortOption: SortOptions;
}

export function SortingForm({ handleChangeSortOption, currentSortOption }: SortingFormProps) {
  const [isFormOpened, setIsFormOpened] = useState<boolean>(false);

  function handleChangeFormOpened() {
    setIsFormOpened(!isFormOpened);
  }
  // Объект SortOptions представила в виде массива и мапнула его

  const sortOptions = Object.entries(SortOptions).map(([key, value]) => ({
    label: value,
    value: key as keyof typeof SortOptions
  }));

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        onClick={handleChangeFormOpened}
        tabIndex={0}
        style={{paddingLeft: '3px'}}
      >
        {currentSortOption}
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
        {sortOptions.map((option) => (
          <li
            key={option.value}
            className={
              currentSortOption === SortOptions[option.value] ?
                'places__option places__option--active' :
                'places__option'
            }
            onClick={() => {
              handleChangeSortOption(SortOptions[option.value]);
              handleChangeFormOpened();
            }}
            tabIndex={0}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </form>
  );
}
