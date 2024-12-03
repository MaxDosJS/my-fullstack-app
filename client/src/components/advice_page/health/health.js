import React from 'react';
import Footer from '../../../pages/footer/footer';

import '../care/care.css';

const Health = () => {
    const customFooterStyles = {
        paddingTop: '220px',
    };

    return (
        <div className='jewery-container'>
            <div className='jewelry-text-container'>
                
               <h1>Здоровье</h1> 
               <br></br>
               <h2> Польза серебра для организма человека была известна еще древним людям. И,пожалуй, это единственный драгоценный металл, которому приписывались столько целительных свойств. 

Народная медицина уверена, что люди, которые ежедневно носят серебряные украшения менее подвержены перепадам настроения и стрессам, а их иммунитет значительно сильнее тех, кто пренебрегает ношением серебра. Помимо этого, целители, астрологи и другие нестандартные специалисты считают, что серебряные изделия создают некий мощный энергетический щит, который успокаивает энергию тела, исцеляет травмы и защищает организм от вредного электромагнитного излучения.</h2>
              
                
            </div>
              <Footer customStyles={customFooterStyles}/>
        </div>
      

       
    )
}

export default Health;