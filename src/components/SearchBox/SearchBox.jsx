import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { CiSearch } from 'react-icons/ci';

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.searchWrapper}>
      <p className={s.searchName}>Find contacts by name or number</p>
      <div className={s.searchInputWrapper}>
        <div className={s.icon}>
          <CiSearch />
        </div>

        <input
          className={s.searchInput}
          type="text"
          placeholder="Search contacts..."
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </div>
    </div>
  );
};

export default SearchBox;
