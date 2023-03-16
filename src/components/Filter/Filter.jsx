import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.filterLabel}>Find contacts by name</label>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};
