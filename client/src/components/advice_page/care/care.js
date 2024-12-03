import React from 'react';
import Footer from '../../../pages/footer/footer';

import './care.css';

const Care = () => {
    const customFooterStyles = {
        paddingTop: '220px',
    };

    return (
        <div className='jewery-container'>
            <div className='jewelry-text-container'>
                
               <h1>Забота</h1> 
               <br></br>
               <h2> Регулярно протирайте украшения замшей, фланелью или специальными ювелирными протирками. Это поможет вернуть первоначальный блеск. Особенно это касается серебра, которое без регулярного ухода темнеет. Серебряные украшения также чистят сухой суконной тряпочкой или же мягкой щеткой, смоченной в теплой мыльной воде.</h2>
              
                
            </div>
              <Footer customStyles={customFooterStyles}/>
        </div>
      

       
    )
}

export default Care;