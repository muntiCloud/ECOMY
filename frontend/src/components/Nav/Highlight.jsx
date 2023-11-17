import React, {useState, useEffect} from 'react'
import styles from '../../assets/styles/Nav/Highlight.module.css'



function Highlight (){
    const [highlightText, setHighlightText] = useState('');


    useEffect(() => {
        //a function that will allow us to interactively change texts

        const SwitchTextInterval = setInterval(() => {
            setHighlightText((prevText) =>  // this enable use to switch
            prevText === "Sign up to get up to 30% discount!"
                ? 'Consmo New arrival coming up!'
                 : 'Sign up to get up to 30% discount!'
                 );
        }, 5000);

        //clear interval
        return () => clearInterval(SwitchTextInterval)
    }, [])


    return (
        <>
   <div className={styles['ecomm-container']}>
        <div className={styles['ecomm-highlighter']}>
          <p className={styles['highlighted-text']}>{highlightText}</p>
        </div>
      </div>
    </>
)
}
export default Highlight;



// setState((prevState) => { #is recongized as previous state as long as we use the setState(anyParamName)
//     // compute and return new state based on prevState
//   });
