import React, { useState } from "react";
import "./AuthComponent.css";

const AuthComponent = () => {
  const [message, setMessage] = useState("");

  const whatsappNumber = "+77015366073"; 

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message) {
      const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, "_blank");
    } else {
      alert("Пожалуйста, введите сообщение.");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Связаться с нами</h2>
      <textarea
        className="auth-textarea"
        placeholder="Введите ваше сообщение"
        value={message}
        onChange={handleInputChange}
      />
      <button className="auth-button" onClick={handleSubmit}>
        Отправить сообщение в WhatsApp
      </button>
    </div>
  );
};

export default AuthComponent;
