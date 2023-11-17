import React, {useState, useEffect} from 'react'

import styles from '../../assets/styles/components/Ads/Spotlight.module.css'


import spotlight1 from '../../assets/images/ads/spotlight1.png'
import spotlight2 from '../../assets/images/ads/spotlight2.png'


function Spotlight(){
  const [activeContent, setActiveContent] = useState(0)

  const contents = [
    {
      contentImage:spotlight1,
       contentTitle:'Summer Collection',
       contentParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  veniam,',
        contentBtn:'Shop Now'
    },
        {
            contentImage:spotlight2,
            contentTitle:'Holiday Gifts',
             contentParagraph: 'Ed eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet,  inim veniam,',
             contentBtn:'Shop Now'
          }

      ]


  useEffect(() =>{
    const changeContents = setInterval(() =>{
      setActiveContent((prevContent) =>
      prevContent === 0 ? 1 :0

         )
    }, 3000)
    return  () => clearInterval(changeContents)

}, [])



    return(

    <>
         <div className={styles.SpotlightContainer}>
             <div className={styles.SpotlightRow}>
         <div className={styles.SpotlightLeftContent}>
             < img src= {contents[activeContent].contentImage} alt=""/>
        </div>
       <div className={styles.SpotlightRightContent}>
          <div className={styles.SpotlightContent}>
            <h2>{contents[activeContent].contentTitle}</h2>
            <p>{contents[activeContent].contentParagraph}</p>
            <button>{contents[activeContent].contentBtn}</button>
      </div>
      </div>
      </div>
    </div>
        </>
    )
}

export default Spotlight
