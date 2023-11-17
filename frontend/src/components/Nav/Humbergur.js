import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/styles/Nav/Nav.module.css';

const Hamburger = ({ onClick }

    ) => (
  <div className={styles.HamburgerMenu} onClick={onClick}>
    <div className={styles.HamburgerLine}></div>
    <div className={styles.HamburgerLine}></div>
    <div className={styles.HamburgerLine}></div>
  </div>
);

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Hamburger;
