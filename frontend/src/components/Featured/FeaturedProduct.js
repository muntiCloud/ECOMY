import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from '../../assets/styles/components/products/Featured.module.scss'
import lancomeProduct1 from '../../assets/images/products/featured/lancomeProduct1.png'
import lancomeProduct2 from '../../assets/images/products/featured/lancomeProduct2.png'
import lancomeProduct3 from '../../assets/images/products/featured/lancomeProduct3.png'
import lancomeProduct4 from '../../assets/images/products/featured/lancomeProduct4.png'
import lancomeProduct5 from '../../assets/images/products/featured/lancomeProduct5.png'

function FeaturedProduct(){



    const products = [
        { id: 1, image: lancomeProduct1, type: 'skin care', name: 'Genifique Youth', price: '$229.99' },
        { id: 2, image: lancomeProduct2, type: 'Night Cream', name: '3-piece Hydra Zen', price: '$240.79' },
        { id: 3, image: lancomeProduct3, type: 'Moist', name: 'Lancome Visionnaire', price: '$399.00' },
        { id: 4, image: lancomeProduct4, type: 'Sun screan', name: 'Sunset Khaki ', price: '$270.17' },
        { id: 5, image: lancomeProduct5, type: 'Mist', name: 'Multi-Pochette', price: '$355.00' },
      ];
    return(
        <>
        <div className={styles.FeaturedContainer}>
        <div className={styles.FeaturedRow}>
          {products.map((product) => (
            <div key={product.id} className={styles.FeaturedProductCard}>
                <div className={styles.ProductWrapper}>

              <img className={styles.FeaturedProductImage} src={product.image} alt="" />
              <div className={styles.FeaturedProductContent}>
                <p className={styles.FeaturedProductTypeText}>{product.type}</p>
                <p className={styles.FeaturedProductTitle}>{product.name}</p>
                <small className={styles.FeaturedPrice}>{product.price}</small>
              </div>
              <div className={styles.ProductIcons}>
                <small className={styles.ProductWishlist}><FontAwesomeIcon icon={faHeart}/></small>
                <small className={styles.ProductCart}><FontAwesomeIcon icon={faShoppingCart}/></small>
              </div>
            </div>
            </div>
            //
          ))}
        </div>
        </div>
        </>
    )
}
export default FeaturedProduct;
