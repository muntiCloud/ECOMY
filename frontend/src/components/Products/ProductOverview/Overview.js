import React from 'react'
import styles from '../../../assets/styles/components/products/Overview.module.css'
// import Sidebar from '../../Sidebar/Sidebar'
import ProductSidebar from './ProductSidebar'
import ProductMain from './ProductMain'
function Overview (){


return(

    <>
 < div className={styles.OverviewContainer}>
     {/* <div className={styles.OverviewRow} >
    <div className={styles.Sidebar}> */}
      < ProductSidebar />
     {/* </div>
    <div className={styles.MainProductOverview}> */}
      < ProductMain />
    {/* </div>


    </div> */}
    </div>



    </>
   )

}

export default Overview

















{/* <sidebar /> */}
// Popular Trendy
// < Popular />
// Your Seasonal collection
// < SeasonalCollection />

// Perfect Gift
// < PerfectGift />
