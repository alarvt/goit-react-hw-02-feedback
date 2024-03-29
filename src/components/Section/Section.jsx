import PropTypes from 'prop-types';
// import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.Prototype = {
  title: PropTypes.string,
  children: PropTypes.string,
};