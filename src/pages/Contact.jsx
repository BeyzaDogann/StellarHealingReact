import React from 'react'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone,} from '@fortawesome/free-solid-svg-icons';
import '../style/Contact.css';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="containerContact">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Bize ulaşın</h3>
          <p className="text">
            Size en kısa sürede dönmemiz için lütfen açık ve sade bir şekilde sorularınızı bize Mail veya Whatsapp üzerinden iletebilirsiniz.
          </p>

          <div className="info">
            <div className="information">
              <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;&nbsp;
              <p>Bostancı / Istanbul</p>
            </div>
            <div className="information">
              <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;
              <a href="mailto:fzt.beyzadogann@gmail.com">fzt.beyzadogann@gmail.com</a>
            </div>
            <div className="information">
              <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;
              <p>+90 511 121 1212</p>
            </div>
          </div>
          <div className="social-media">
            <p>Sosyal Medyada Bizi Takip Et</p>
            <div className="social-icons">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Contact;