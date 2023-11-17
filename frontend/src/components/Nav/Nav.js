import React, {useState} from 'react'
import styles from '../../assets/styles/Nav/Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Hamburger from './Humbergur';


function Nav (){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
    <header className={styles.Header} >
        <div className={styles.Logo}>EcomY</div>

        <nav className={`${styles.Nav} ${styles.ResponsiveNav}`}>
            <ul className={styles.NavUlWrap}>
                <li className={styles.NavList}>Home</li>
                <li className={styles.NavList}>Women
                    <ul className={styles.NavNestedUl}>
                        <li className={styles.NavNestedList}>Handbag</li>
                        <li  className={styles.NavNestedList}>Dress</li>
                        <li  className={styles.NavNestedList}>Shoes</li>
                    </ul>
                </li>
                <li className={styles.NavList}>Men
                <ul className={styles.NavNestedUl}>
                        <li  className={styles.NavNestedList}>Bags</li>
                        <li  className={styles.NavNestedList}>Casual</li>
                        <li  className={styles.NavNestedList}>Shoes</li>
                    </ul>
                </li>
                <li className={styles.NavList}>Beauty
                <ul className={styles.NavNestedUl}>
                        <li  className={styles.NavNestedList}>Skincare</li>
                        <li  className={styles.NavNestedList}>Make Up</li>
                        <li  className={styles.NavNestedList}>Fragrance</li>
                    </ul>
                </li>
                <li className={styles.NavList}>Accessories</li>
            </ul>
        </nav>

        <div className={styles.NavIcon}>
            <div  className={styles.SearchIcon}> <FontAwesomeIcon icon={faSearch} /></div>
            <div className={styles.UserIcon}>   <FontAwesomeIcon icon={faUser} /></div>
            <div className={styles.CartIcon}>   <FontAwesomeIcon icon={faShoppingCart} /></div>
        </div>


        <Hamburger onClick={toggleMenu} />

    </header>


        </>
    )
}

export default Nav;
