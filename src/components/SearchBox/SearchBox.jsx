import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.searchWrapper}>
      <p className={s.searchName}>Find contacts by name</p>
      <input
        className={s.searchInput}
        type="text"
        placeholder="Search contacts..."
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
