import React from 'react';
import Footer from '../../../pages/footer/footer';

import '../care/care.css';

const Storage = () => {
    const customFooterStyles = {
        paddingTop: '220px',
    };

    return (
        <div className='jewery-container'>
            <div className='jewelry-text-container'>
                
               <h1>Хранение</h1> 
               <br></br>
               <h2> Как следует хранить серебряные украшения? Храните ваши украшения из серебра в бархатных мешочках, специальных футлярах или шкатулках, лучше отдельно друг от друга. В крайнем случае, как выход из непредвиденной ситуации – в полиэтиленовом пакете. Так, чтобы изделия не царапали друг дружку.</h2>
              
                
            </div>
              <Footer customStyles={customFooterStyles}/>
        </div>
      

       
    )
}

export default Storage;