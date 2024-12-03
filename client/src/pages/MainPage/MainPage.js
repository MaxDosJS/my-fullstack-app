import React from "react";
import { Link } from 'react-router-dom';

import Button from "../../components/Button/button";
import AnimatedBlock from "../../components/AnimatedBlock/AnimatedBlock";
import PromotionalOverlay from "../../components/PromotionalOverlay/PromotionalOverlay";
import ListWife from "../../components/List/ListWife/ListWife";
import Footer from "../footer/footer";

import Carousel from "../../components/img_carousel/img_carousel";
import './MainPage.css';

const MainPage = () => {
    
  //  const handleClick =() => {
  //   alert ('Кнопка')
  //  };
   const ButtonStyle = {
    fontFamily: 'Montserrat, sans-serif',
   
    backgroundColor: 'rgba(51, 51, 51, 1)',
    color: 'white',
    border: '2px solid white'
   }

    return(
      <div className="MainPage">
        <PromotionalOverlay />
         <div className="bgc_img">
          <img src="./img/bgc_img/bgc.png" 
          alt=""
          style={{ maxWidth: '100%',}}/> 
             <div class="translation-container">
                    <div class="original-text">Украшение дополняет красоту</div>
                    <div class="translated-text">Әшекей сұлулықты арттырады</div>
                </div>
          <div className="logo_block"> 
           <img className="logo_img" src="./img/logo_img/silver_rus.png" alt=""></img>
           <img className="logo_img" src="./img/logo_img/sokolov.png" alt=""></img>
           <img className="logo_img" src="./img/logo_img/alkor.png" alt=""></img>
           <img className="logo_img" src="./img/logo_img/red_presn.png" alt=""></img>
           <img className="logo_img" src="./img/logo_img/Aquamarine.png" alt=""></img>
         </div>
         
        </div>
        
        <div className="beauty">
          <img className="parallax" src="./img/parallax_img/herringbone.png"></img>
          <div className="second-screen_text">
            <p className="second-screen_text_p">К мероприятиям</p>
            <h1 className="second-screen_text_h1">Настоящая красота здесь!</h1>
            
          </div>
          <div className="second-screen_list">
            <br/>
          <ListWife/>
          </div>
          <div className="location_salon">
            <h2 className="location_salon_h2">Не знаете, что выбрать?</h2>
            <h1 className="location_salon_h1">Посетите наши салоны в Астане</h1>
             <div className="location_salon_map_btn"> 
             <Button label={"ул. Бухар Жырау д.31 ЖК IZet"}  buttonStyle={{...ButtonStyle,  width: '160px', height: '60px', borderRadius: '15px'}}/>

              <AnimatedBlock/>
              </div>
             
     
          </div>
        </div>

        <div className="advice">
          <p className="advice_p">Полезные советы</p>
          <h2 className="advice_h2">Советы по уходу за ювелирными изделиями</h2>
          <div className="advice_img_container">
            
          <Link to={'/health'}>
            <div style={{ position: 'relative' }}>
             <img src="./img/advice_img/advice_1.png" alt="" />
             <p style={{ position: 'absolute', top: 290, left: 120, color: 'white', background: '', fontSize: '24px'}}>Здоровье </p>
            </div>
          </Link>
     
          <Link to={'/care'}> 
           <div style={{ position: 'relative' }}>
             <img src="./img/advice_img/advice_2.png" alt="" />
             <p style={{ position: 'absolute', top: 290, left: 150, color: 'white', background: '', fontSize: '24px'}}>Уход</p>
           </div>
          </Link>

          <Link to={'/storage'}>
           <div style={{ position: 'relative' }}>
            <img src="./img/advice_img/advice_3.png" alt="" />
            <p style={{ position: 'absolute', top: 290, left: 120, color: 'white', background: '', fontSize: '24px' }}>Хранение</p>
           </div>
          </Link>
          </div>
        </div>

        <div className="social_media">

          <h2 className="social_h2">Мы в социальных сетях</h2>
          <a href="https://www.instagram.com/silverbox_ns/" target="_blank" rel="noopener noreferrer"> 
           <Button label={"#Silver_box"}  
           buttonStyle={{...ButtonStyle,  
            width: '200px', 
            height: '45px', 
            fontSize: '28px', 
            cursor: 'pointer',
            position:'relative',
            top:'130px', 
            margin: '0 auto',  
            left: '50%',
            transform: 'translateX(-50%)', }}/>
          </a>
           
         
          
          <Carousel/>
         
        </div>
        <Footer/>
      </div>
    )
}
export default MainPage