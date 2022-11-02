import { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from "prop-types";

class Filter extends Component {
  render() {
    const { filter, changeFilter } = this.props;
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
  }
}

export { Filter };

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
}