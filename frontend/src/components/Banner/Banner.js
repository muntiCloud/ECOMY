import React, {useState, useEffect} from 'react'

import styles from '../../assets/styles/components/Banner.module.css'

import banner1 from '../../assets/images/banner/banner1.png'
import banner2 from '../../assets/images/banner/banner2.png'

function Banner(){

    const [bannerIndex, setBannerIndex] = useState(0);
    const banners = [{
        bannerImage:banner1,
        bannerTitle: 'Skincare Essentials',
        bannerText: 'Transform your skin with our premium skincare products. Achieve a radiant and healthy glow.',
        bannerCoupon: 'Special Offer: 10% Off',
        bannerBtn: 'Discover Now',
    },
    {
    bannerImage:banner2,
    bannerTitle:  'Summer Chic Collection',
    bannerText: 'Step into summer with our latest collection. Stay stylish and comfortable all season long.',
    bannerCoupon: 'Exclusive Deal: 20% Off',
    bannerBtn:'Shop the Look',
}]

useEffect(() =>{
    const interval = setInterval(() => {
        setBannerIndex((prevIndex ) => (prevIndex + 1) % banners.length)
    }, 6000);
    return () => clearInterval(interval);
}, []);


    return (
        <>

        <div className={styles.BannerContainer}  style={{ backgroundImage: `url(${banners[bannerIndex].bannerImage})` }}>

            <div className={styles.BannerContentWrapper}>
                <h1 className={styles.AdsHeader}>{banners[bannerIndex].bannerTitle}</h1>
                <p className={styles.AdsText}>{banners[bannerIndex].bannerText}</p>
                <p className={styles.DiscountText}>{banners[bannerIndex].bannerCoupon}</p>
                <button className={styles.ShoppingBtn}>{banners[bannerIndex].bannerBtn}</button>
           </div>
            </div>
        </>
    )
}

export default Banner;








































// import React, {useState, useEffect} from 'react'

// import styles from '../../assets/styles/components/Banner.module.css'
// import banner1 from './banner1.png'
// import banner2 from './banner2.png'

// function Banner(){

//     const [activeContent, setActiveContent] = useState(0)

//     const contents = [
//       {
//         contentImage:banner1,
//          contentTitle:'This is First Title',
//          contentParagraph: 'Lorem ipsum dolor sit amet',
//           contentBtn:'Shop Now'
//       },
//           {
//               contentImage:banner2,
//               contentTitle:'This is Second Title',
//                contentParagraph: 'Ed eiusmod tempor incididunt ut',
//                contentBtn:'Shop Now'
//             }

//         ]


//     useEffect(() =>{
//       const changeContents = setInterval(() =>{
//         setActiveContent((prevContent) =>
//         prevContent === 0 ? 1 :0

//            )
//       }, 3000)
//       return  () => clearInterval(changeContents)

//   }, [])




//     return (
//         <>

//         <div className={styles.BannerContainer}>

//             <div className={styles.BannerContentWrapper}>
//              <h2>{contents[activeContent].contentTitle}</h2>

//                 {/* <h1 className={styles.AdsHeader}>Holiday Winter Collection</h1>
//                 <p className={styles.AdsText}>Holiday Winter Collection</p>
//                 <small className={styles.DiscountText}>Discount 10%</small>
//                 <button className={styles.ShoppingBtn}>Shop Now</button> */}
//             < img src= {contents[activeContent].contentImage} alt=""/>
//             <h2 className={styles.AdsHeader} >{contents[activeContent].contentTitle}</h2>
//             <p className={styles.AdsText}>{contents[activeContent].contentParagraph}</p>
//             <button className={styles.ShoppingBtn}>{contents[activeContent].contentBtn}</button>

//            </div>
//             </div>

//           {/* <div className={styles.RightSideBanner}>


//           </div> */}



//         </>
//     )
// }

// export default Banner;
