import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from '../../assets/styles/components/products/NewArrival.module.css'
import handbag1 from '../../assets/images/products/bags/handbag1.png'
import handbag2 from '../../assets/images/products/bags/handbag2.png'
import handbag3 from '../../assets/images/products/bags/handbag3.png'
import handbag4 from '../../assets/images/products/bags/handbag4.png'
import handbag5 from '../../assets/images/products/bags/handbag5.png'


function NewArrival(){
    const products = [
      { id: 1, image: handbag1, type: 'Professional Carryall', name: 'Leather Work Essential', price: '$79.99' },
      { id: 2, image: handbag2, type: 'Casual Companion', name: 'Canvas Everyday Bag', price: '$89.99' },
      { id: 3, image: handbag3, type: 'Signature Designer', name: 'Monogrammed Fashion Statement', price: '$99.99' },
      { id: 4, image: handbag4, type: 'Explorer Adventure', name: "Traveler's Expedition Bag", price: '$129.99' },
      { id: 5, image: handbag5, type: 'Chic Multi-Pochette Carry', name: 'Fashionista Must-Have', price: '$69.99' },
    ];
    return(
        <>
        <div className={styles.ProductArrivalContainer}>
        <div className={styles.ProductArrivalRow}>
          {products.map((product) => (
            <div key={product.id} className={styles.ProductCard}>
                <div className={styles.ProductWrapper}>

              <img className={styles.ProductImage} src={product.image} alt="" />
              <div className={styles.ProductContent}>
                <p className={styles.ProductTypeText}>{product.type}</p>
                <p className={styles.ProductNameText}>{product.name}</p>
                <small className={styles.ProductPrice}>{product.price}</small>
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

export default NewArrival;
