import css from './Section.module.css';
import PropTypes from "prop-types";

export const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.section__title}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
}
