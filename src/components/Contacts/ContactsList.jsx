import css from './ContactsList.module.css';
import { ContactElement } from './ContactElement/ContactElement';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contact__list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactElement
            id={id}
            key={id}
            name={name}
            number={number}
            onDeleteBtn={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
