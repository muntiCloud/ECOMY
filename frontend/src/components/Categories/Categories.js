import React from 'react'
import styles from '../../assets/styles/components/products/Categories.module.css'
import shoes from '../../assets/images/products/categories/shoes.png'
import men from '../../assets/images/products/categories/men.png'
import skincare from '../../assets/images/products/categories/skincare.png'
import accessories from '../../assets/images/products/categories/accessories.png'
import gifts from '../../assets/images/products/categories/gifts.png'

function Categories(){


    const categories = [
        { id: 1, image: shoes, categoryType: 'Shoes' },
        { id: 2, image: men, categoryType: 'Men' },
        { id: 3, image: skincare, categoryType: 'Skin Care' },
        { id: 4, image: accessories, categoryType: 'Accessories' },
        { id: 5, image: gifts, categoryType: 'Gifts' },

      ];

    return(
        <>
        <div className={styles.CategoriesContainerWrapper}>
        <div className={styles.CategoriesContainer}>
            {categories.map((category) => (
        <div className={styles.CategoriesRow}>
        <div className={styles.CategoriesCard}>
            <img src={category.image} alt=""/>
        <div className={styles.CategoriesContent}>
            <h2>{category.categoryType}</h2>
     </div>
</div>

</div>
))}
</div>

</div>

 </>
    )
}

export default Categories;
