import css from './ContactElement.module.css';
import PropTypes from 'prop-types';

export const ContactElement = ({ id, name, number, onDeleteBtn }) => {
  return (
    <li className={css.contact__item}>
      <span className={css.contact__name}>
        {name}: {number}
      </span>
      <button type="button" onClick={() => onDeleteBtn(id)}>
        Delete
      </button>
    </li>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteBtn: PropTypes.func.isRequired,
}
