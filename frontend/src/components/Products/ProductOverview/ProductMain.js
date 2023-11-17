import React, { useState } from 'react';
import dressonefirstview from '../../../assets/images/products/main/dressonefirstview.png';
import dressonesecondview from '../../../assets/images/products/main/dressonesecondview.png';
import dresstwofirstview from '../../../assets/images/products/main/dresstwofirstview.png';
import dresstwosecondview from '../../../assets/images/products/main/dresstwosecondview.png';
import dressthreefirstview from '../../../assets/images/products/main/dressthreefirstview.png';
import dressthreesecondview from '../../../assets/images/products/main/dressthreesecondview.png';
import dressfourfirstview from '../../../assets/images/products/main/dressfourfirstview.png';
import dressfoursecondview from '../../../assets/images/products/main/dressfoursecondview.png';
import seasonalonefirstview from '../../../assets/images/products/seasonal/seasonalonefirstview.png';
import seasonalonesecondview from '../../../assets/images/products/seasonal/seasonalonesecondview.png';
import seasonaltwofirstview from '../../../assets/images/products/seasonal/seasonaltwofirstview.png';
import seasonaltwosecondview from '../../../assets/images/products/seasonal/seasonaltwosecondview.png';
import seasonalthirdfirstview from '../../../assets/images/products/seasonal/seasonalthirdfirstview.png';
import seasonalthirdsecondview from '../../../assets/images/products/seasonal/seasonalthirdsecondview.png';
import seasonalfourthfirstview from '../../../assets/images/products/seasonal/seasonalfourthfirstview.png';
import seasonalforthsecondview from '../../../assets/images/products/seasonal/seasonalfourthsecondview.png';
import styles from '../../../assets/styles/components/products/Overview.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function ProductMain() {
  const [hoveredProducts, setHoveredProducts] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);



  const products = {
    Popular: [
      { frontImage: dresstwofirstview, backImage: dresstwosecondview, name: 'Sunflower Sundress', popularity: 'dress', price: '$1200' },
      { frontImage: dressthreefirstview, backImage: dressthreesecondview, name: 'Evening Mesh', popularity: 'dress', price: '$450' },
      { frontImage: dressonefirstview, backImage: dressonesecondview, name: 'Sapphire Soiree', popularity: 'dress', price: '$590' },
      { frontImage: dressfourfirstview, backImage: dressfoursecondview, name: 'Elegantte Flowy', popularity: 'dress', price: '$800' },
    ],
    Seasonal: [
      { frontImage: seasonalonefirstview, backImage: seasonalonesecondview, name: 'Winter Whisper Sweater', popularity: 'sweater', price: '$250' },
      { frontImage: seasonaltwofirstview, backImage: seasonaltwosecondview, name: 'Fireside Classic Pullover', popularity: 'sweater', price: '$170' },
      { frontImage: seasonalthirdfirstview, backImage: seasonalthirdsecondview, name: 'Weekend Comfort Cardigan', popularity: 'sweater', price: '$180' },
      { frontImage: seasonalfourthfirstview, backImage: seasonalforthsecondview, name: 'Arctic Adventure', popularity: 'sweater', price: '$248' },

    ],
  };

  const handleMouseEnter = (category, productName) => {
    setHoveredProducts((prevHoveredProducts) => ({
      ...prevHoveredProducts,
      [category]: productName,
    }));

    setHoveredCard(productName);

  };

  const handleMouseLeave = () => {
    setHoveredProducts({});
    setHoveredCard(null);

  };

  return (
    <>
      <div className={styles.MainProductContainer}>
        {Object.keys(products).map((category) => (
          <div className={styles.MainProductRow} key={category}>
            <h2 className={styles.CategoryLabel}>{category}</h2>
            <div className={styles.MainProductWrapper}>
              {products[category].map((product) => (
                <div
                  className={styles.MainProductCard}
                  key={product.name}
                  onMouseEnter={() => handleMouseEnter(category, product.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    className={styles.MainProductImg}
                    src={
                      hoveredProducts[category] === product.name
                        ? product.backImage
                        : product.frontImage
                    }
                    alt=''
                  />
                  <div className={styles.MainProductContent}>
                    <h3>{product.name}</h3>
                    <small>{product.popularity}</small>
                    <p>{product.price}</p>
                  </div>

                  {hoveredCard === product.name && (
  <div className={styles.ProductIcons}>
    <small className={styles.ProductWishlist}>
      <FontAwesomeIcon icon={faHeart} />
    </small>
    <small className={styles.ProductCart}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </small>
  </div>
)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductMain;
