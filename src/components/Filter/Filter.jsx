import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <label className={css.formAddBook__label}>
      Find contacts by name
      <input
        className={css.formAddBook__input}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
