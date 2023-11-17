import React from 'react'
import styles from '../../assets/styles/Footer/Footer.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Update this line
import { Link } from 'react-router-dom';


function Footer(){


    return(
        <>
     <footer>
      <div className={styles.FooterContainer}>
        <div className={styles.FooterRow}>
          <div className={styles.FooterSection}>
            <h2 className={styles.FooterSectionTitle}>Explore</h2>
            <ul className={styles.FooterList}>
              <li className={styles.FooterListItem}><Link to="/">Home</Link></li>
              <li className={styles.FooterListItem}><Link to="#">Products</Link></li>
              <li className={styles.FooterListItem}><Link to="#">About Us</Link></li>
              <li className={styles.FooterListItem}><Link to="#">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.FooterSection}>
            <h2 className={styles.FooterSectionTitle}>Categories</h2>
            <ul className={styles.FooterList}>
              <li className={styles.FooterListItem}><Link to="#">Shoes</Link></li>
              <li className={styles.FooterListItem}><Link to="#">Clothing</Link></li>
              <li className={styles.FooterListItem}><Link to="#">Accessories</Link></li>
              <li className={styles.FooterListItem}><Link to="#">Sale</Link></li>
            </ul>
          </div>

          <div className={styles.FooterSection}>
            <h2 className={styles.FooterSectionTitle}>Support</h2>
            <ul className={styles.FooterList}>
              <li className={styles.FooterListItem}><Link to="#">FAQ</Link></li>
              <li className={styles.FooterListItem}><Link to="#">Shipping</Link></li>
              <li className={styles.FooterListItem}><Link to="#">Returns</Link></li>
              <li className={styles.FooterListItem}><Link to="#">Contact Us</Link></li>
            </ul>
          </div>

          {/* Add another section with additional information */}
          <div className={styles.FooterSection}>
            <h2 className={styles.FooterSectionTitle}>Company Info</h2>
            <ul className={styles.FooterList}>
              <li className={styles.FooterListItem}><Link to="/about">About Us</Link></li>
              <li className={styles.FooterListItem}><Link to="/careers">Careers</Link></li>
              <li className={styles.FooterListItem}><Link to="/social-responsibility">Social Responsibility</Link></li>
              {/* Add more items as needed */}
            </ul>
          </div>

          <div className={styles.FooterSection}>
            <h2 className={styles.FooterSectionTitle}>Membership</h2>
            <ul className={styles.FooterList}>
              <li className={styles.FooterListItem}><Link to="#">Special Gift</Link></li>
              <li className={styles.FooterListItem}><Link to="#">Coupon</Link></li>
              <li className={styles.FooterListItem}><Link to="#">Priority Delivery</Link></li>
              {/* Add more items as needed */}
            </ul>
          </div>
        </div>

        <div className={styles.SignUpForm}>
              <h2>SIGN UP FOR EMAILS & UNLOCK 20% OFF</h2>
              <form>
                  <label >Email</label>
                  <input type="email"  placeholder="email"/>
                   <button>GET 20% OFF</button>
              </form>

          </div>

          <div className={styles.SocialMediaIcons}>
              <FontAwesomeIcon icon={faFacebook} className={styles.SocialIcon} />
              <FontAwesomeIcon icon={faTwitter} className={styles.SocialIcon} />
              <FontAwesomeIcon icon={faInstagram} className={styles.SocialIcon} />
            </div>

      </div>
    </footer>

        </>
    )
}

export default Footer;
