import React from 'react'
import styles from '../../assets/styles/Main/Main.module.css'
import Highlight from '../../components/Nav/Highlight';
import Nav from '../../components/Nav/Nav';
import Banner from '../../components/Banner/Banner';
import Overview from '../../components/Products/ProductOverview/Overview';
import NewArrival from '../../components/Products/NewArrival';
import Ads from '../../components/Ads/Spotlight';
import Categories from '../../components/Categories/Categories';
import FeaturedProduct from '../../components/Featured/FeaturedProduct';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faIconName } from '@fortawesome/free-solid-svg-icons';


function Main (){

  return (
        <>
        < Highlight />
        < Nav />
        <div className={styles.mainContainer}>
        <Banner />

      </div>
      <NewArrival />

      <div>
        < Overview />
      </div>
      <div className={styles.SpotlightSection}>
        < Ads />
      </div>
      <div className={styles.CategoriesSection}>
      <h2>Categories</h2>
        < Categories />
      </div>
      <div className={styles.FeaturedSection}>

        <h2>Featured Product</h2>
        < FeaturedProduct />
      </div>
      <div>
        < Footer />
      </div>
        </>
    )
}

export default Main;
