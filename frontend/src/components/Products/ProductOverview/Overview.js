import React from 'react'
import styles from '../../../assets/styles/components/products/Overview.module.css'
// import Sidebar from '../../Sidebar/Sidebar'
import ProductSidebar from './ProductSidebar'
import ProductMain from './ProductMain'
function Overview (){


return(

<>
 < div className={styles.OverviewContainer}>
      < ProductSidebar />
      < ProductMain />
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
