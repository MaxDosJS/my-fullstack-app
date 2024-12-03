import React, { useState } from "react";
import "./PromotionalOverlay.css";

const PromotionalOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHidden, setIsHidden] = useState(false); 

  const handleClose = () => {
    setIsHidden(true); 
    setTimeout(() => {
      setIsVisible(false); 
    }, 500);
  };

  if (!isVisible) return null; 

  return (
    <div className={`overlay ${isHidden ? "hidden" : ""}`}>
      <div className="content">
        <h1 className="prom_h1"> С НОВЫМ ГОДОМ! </h1>
        <p className="prom_p">

Мы рады сообщить вам, что в честь праздников на все наши товары действует скидка 10%!

Порадуйте себя и своих близких чудесными подарками! Не упустите возможность сделать покупки по приятным ценам!

🌟 Желаем вам счастья, здоровья и удачи в новом году! 🌟</p>
        <button className="close-button" onClick={handleClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default PromotionalOverlay;