import React from 'react';
import Logo from '../assets/log-img/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, } from '@fortawesome/free-solid-svg-icons';
import '../style/Footer.css';

const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="footer-logo">
              <img src={Logo} alt="Logo"  style={{ width: '120px', borderRadius: '50%' }} />
            </div>
            <div className="footer-exp my-5">
              <p>Bu sayfa sadece bilgi amaçlıdır. Teşhis ve tedavi için doktorunuza başvurunuz.</p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="footer-card">
              <span className="footer-header">Hızlı Linkler</span>
              <ul className="footer-menu my-5">
                <li><a href="/About">Hakkımda</a></li>
                <li><a href="/Contact">İletişim</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="footer-card">
              <span className="footer-header">İletişim</span>
              <ul className="footer-menu my-5">
                <li>

                  <div className="information">
                    <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;
                    <p>+90 511 121 1212</p>
                  </div>
                </li>
                <li>

                  <div className="information">
                    <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;
                    <a href="mailto:fzt.beyzadogann@gmail.com">fzt.beyzadogann@gmail.com</a>
                  </div>
                </li>
                <li>
            <div className="information">
              <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;&nbsp;
              <p>Bostancı / Istanbul</p>
            </div>


                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-text">© 2024. Tüm hakları saklıdır.</div>
    </div>
  );
};

export default Footer;
