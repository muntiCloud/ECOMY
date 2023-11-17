import React from 'react'
import shoes1 from '../../../assets/images/products/shoes/shoes1.png'
import shoes2 from '../../../assets/images/products/shoes/shoes2.png'
import shoes3 from '../../../assets/images/products/shoes/shoes3.png'
import shoes4 from '../../../assets/images/products/shoes/shoes4.png'
import shoes5 from '../../../assets/images/products/shoes/shoes5.png'
import styles from '../../../assets/styles/components/products/Overview.module.css'


function ProductSidebar(){

    const products = [
        { image: shoes1, name: 'Elegant Low Heel', popularity: 'shoes', price: '$600' },
        { image: shoes2, name: 'Strappy High Heel', popularity: 'shoes', price: '$3000' },
        { image: shoes3, name: 'Occasion Clutch Heels', popularity: 'shoes', price: '$400' },
        { image: shoes4, name: 'Carpet Spotlight Pumps', popularity: 'shoes', price: '$500' },
        { image: shoes5, name: 'Timeless Classic Heels', popularity: '', price: 'shoes', price: '$750' },
    ]

return(

<>

    <div className={styles.SidebarProductContainer}>
        <h2>Designer Product</h2>
        {products.map((product) => (
        <div className={styles.SidebarProductCard} >

           <div className={styles.SidebarProductWrap} >
            <img className={styles.SidebarProductImg} src={product.image} alt='' />

          <div className={styles.SidebarProductContent} >
              <h3>{product.name}</h3>
              <small>{product.popularity}</small>
              <p>{product.price}</p>
        </div>

         </div>

        </div>
        ))}


   </div>
</>
)

}

export default ProductSidebar;
