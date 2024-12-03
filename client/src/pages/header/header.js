import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthComponent from '../../components/AuthComponent/AuthComponent';

import './header.css';

const Header = () => {
  const [isAuthComponentOpen, setAuthComponentOpen] = useState(false);

  const openAuthComponent = () => {
    setAuthComponentOpen(true);
  };

  const closeAuthComponent = () => {
    setAuthComponentOpen(false);
  };

  return (
    <header>
      <div className='header_blocks'>
        <Link to={'/'} style={{ textDecoration: 'None' }}>
          <h1 className='header_h1'>Silver <br /> Box</h1>
        </Link>
        <div className='header_text'>
          <Link to={'about'} style={{ textDecoration: 'None' }}>
            <p> О нас</p>
          </Link>
          <Link to={'delivery'} style={{ textDecoration: 'None' }}>
            <p> Доставка</p>
          </Link>
          <ul>
            Контакты
            <li>
              <a
                className="a_href_header"
                href="https://api.whatsapp.com/send/?phone=77015366073&text&type=phone_number&app_absent=0"
              >
                whatsapp
              </a>
            </li>
          </ul>
          <div className='contacts_header'>
            <img className='contacts_header_img' src='./img/contacts_img/phone_header.png' alt='' />
            <h1 className='header_contacts_h1'>+ 701 536 60 73</h1>
          </div>
          <h1 onClick={openAuthComponent} style={{ cursor: 'pointer', color: '#d4af37', fontWeight: 'bold' }}>
            Заказать
          </h1>

          
          {isAuthComponentOpen && (
            <div className='auth-component-overlay'>
              <div className='auth-component-content'>
                <AuthComponent />
                <button className='close-auth-button' onClick={closeAuthComponent}>
                  Закрыть
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;