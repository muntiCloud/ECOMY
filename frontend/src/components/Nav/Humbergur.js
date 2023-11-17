// import React, {useState, useEffect} from 'react'

// import styles from '../../assets/styles/Nav/Nav.module.css'



// function Hamburger (){

//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//       setIsMenuOpen(!isMenuOpen);
//     };


//     return (
//         <>
//         <div className={styles.HamburgerContainer}>

//         <nav className={styles.HamburgerResponsiveNav}>
//             <ul className={styles.HamburgerNavUlWrap}>
//                 <li className={styles.HamburgerNavList}>Home</li>
//                 <li className={styles.HamburgerNavList}>Women
//                     <ul className={styles.HamburgerNavNestedUl}>
//                         <li className={styles.HamburgerNavNestedList}>Handbag</li>
//                         <li  className={styles.HamburgerNavNestedList}>Dress</li>
//                         <li  className={styles.HamburgerNavNestedList}>Shoes</li>
//                     </ul>
//                 </li>
//                 <li className={styles.HamburgerNavList}>Men
//                 <ul className={styles.HamburgerNavNestedUl}>
//                         <li  className={styles.HamburgerNavNestedList}>Bags</li>
//                         <li  className={styles.HamburgerNavNestedList}>Casual</li>
//                         <li  className={styles.HamburgerNavNestedList}>Shoes</li>
//                     </ul>
//                 </li>
//                 <li className={styles.HamburgerNavList}>Beauty
//                 <ul className={styles.HamburgerNavNestedUl}>
//                         <li  className={styles.HamburgerNavNestedList}>Skincare</li>
//                         <li  className={styles.HamburgerNavNestedList}>Make Up</li>
//                         <li  className={styles.HamburgerNavNestedList}>Fragrance</li>
//                     </ul>
//                 </li>
//                 <li className={styles.HamburgerNavList}>Accessories</li>
//             </ul>
//         </nav>
//         </div>

//         </>
//     )
// }

// export default Hamburger;

















// Hamburger.js
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
