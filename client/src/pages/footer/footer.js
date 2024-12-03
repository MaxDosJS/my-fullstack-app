import React from "react";
import PropTypes from 'prop-types';
import './footer.css'

const Footer = ({customStyles}) => {
    return(
        <footer style={customStyles}>
           <div className="footer_blocks">
            <h2 className="footer_h2">Контакты</h2>
            
            <br/>
            <img src={process.env.PUBLIC_URL + "/img/contacts_img/contacts_phone.png"} alt="contacts"></img> <p className="footer_p">+77015366073</p>
            <img src={process.env.PUBLIC_URL + "/img/contacts_img/contacts_phone.png"} alt="contacts"></img> <p className="footer_p">+77074665424</p>
            <img src={process.env.PUBLIC_URL + "/img/contacts_img/contacts_mail.png"} alt="mail"></img> <p className="footer_p">kuralay_kam@mail.ru</p>
           </div>

           <div className="footer_blocks">
           <h2 className="footer_h2">Оплата</h2>
           <img className="bank_img" src={process.env.PUBLIC_URL + "/img/contacts_img/kaspi_bank.svg"}alt="kaspi"></img>
          
           <img className="bank_img" src={process.env.PUBLIC_URL + "/img/contacts_img/halyk_bank.svg"}alt="halyk"></img>
           {/* <Link to="/Map" style={{textDecoration: 'None'}}><p>карта</p></Link> */}
            <br/>
           </div>

           <div className="footer_blocks">
            <h2 className="footer_h2">Социальные сети</h2>
            <br/>
            <img src={process.env.PUBLIC_URL + "/img/contacts_img/instagram_icon.png"} alt="instagram"></img> <a className="a_href" href="https://www.instagram.com/silverbox_ns/?next=%2F">instagram</a>
            <br/>
            <br/>
            <img src={process.env.PUBLIC_URL + "/img/contacts_img/whatsapp_icon.png"} alt="whatsapp"></img> <a className="a_href" href="https://api.whatsapp.com/send/?phone=77015366073&text&type=phone_number&app_absent=0">whatsapp</a>
           </div>
          
        </footer>
    );
};

Footer.propTypes = {
    customStyles: PropTypes.object,
};
export default Footer