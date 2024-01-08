import css from './Filter.module.css';

const Filter = ({ filter, onFilterChange }) => (
  <label>
    Filter contacts by name:
    <br />
    <input
      type="text"
      className={css.filterInput}
      name="filter"
      value={filter}
      onChange={onFilterChange}
    />
  </label>
);

export default Filter;
