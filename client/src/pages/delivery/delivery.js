import React from 'react';

import './delivery.css';
import Footer from '../../pages/footer/footer';

const Delivery = () => {
    const customFooterStyles = {
        marginTop: '130px',
    };
    return (
        <div className='Delivery'>
             <div className='Delivery_block'>
        <h1>Бесплатная доставка и возврат по всей стране</h1>
        <br/>
        <p>
          Дорогие клиенты, мы гордимся предоставлением вам бесплатных услуг доставки и возврата, чтобы ваш опыт покупок был еще более удобным и приятным. Мы стремимся обеспечить вас уникальными изделиями из серебра с лучшим сервисом.
        </p>
        <h1>Бесплатная Доставка:</h1>
        <p>
         Мы предоставляем бесплатную доставку для каждого заказа в любой уголок нашей прекрасной страны. Независимо от того, где вы находитесь, ваш заказ будет доставлен в удобное для вас место. Наша команда тщательно отслеживает процесс доставки, чтобы убедиться, что ваш заказ был доставлен быстро и безопасно.
        </p>
        <h1>Бесплатный Возврат:</h1>
        <p>
        Ваше удовлетворение нашей продукцией - наш главный приоритет. Мы предоставляем бесплатную политику возврата, чтобы вы могли быть уверены в своих покупках. Если вы по какой-либо причине не удовлетворены своим заказом, наша команда с радостью поможет организовать бесплатный возврат.
        Мы стремимся сделать ваше покупательское путешествие легким и приятным, и бесплатная доставка и возврат - часть наших усилий, чтобы сделать ваш выбор еще более комфортным.
        Благодарим вас за выбор нас. Желаем вам приятных покупок!
        </p>
      </div>
      <div className='delivery_img_container'>
        <img className='Delivery_img' src='./img/silverpage_img/silver_page1.png' alt=''></img>
        <img className='Delivery_img' src='./img/silverpage_img/silver_page2.png' alt=''></img>
        <img className='Delivery_img' src='./img/silverpage_img/silver_page3.png' alt=''></img>
        <img className='Delivery_img' src='./img/silverpage_img/silver_page4.png' alt=''></img>
      </div>
      

            <Footer customStyles={customFooterStyles}/>
        </div>
    )
}

export default Delivery;