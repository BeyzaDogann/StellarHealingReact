import React from 'react';

import NavigationBar from '../components/Navbar';
import NeckHernia from '../assets/anasayfa-img/neck-hernia.jpg';
import ImpSendrome from '../assets/anasayfa-img/imp.jpg';
import DeskWorker from '../assets/anasayfa-img/masabası.jpg';
import { Link } from 'react-router-dom';
import '../style/home.css';

function Anasayfa() {
  return (
    <div className="container">
      <div className="row d-flex align-items center justify-content-center my-5">
        <div className="col-md-4 mb-4">
          <div className="thumbnail">
            <Link to="/neck-hernia" className='photo-link'>
              <img src={NeckHernia} alt="Boyun Fıtığı" style={{ width: '100%' }} />
              <div className="caption">
                <p>Boyun Ağrısı için  Detaylı bilgi ve Egzersizler için Tıklayınız.</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="thumbnail">
            <Link to="/imp" className='photo-link'>
              <img src={ImpSendrome} alt="Donuk Omuz Sendromu" style={{ width: '100%' }} />
              <div className="caption">
                <p>Donuk Omuz için  Detaylı bilgi ve Egzersizler için Tıklayınız.</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='row justify-content-center' >
          <div className="col-md-4">
            <div className="thumbnail">
              <Link to="/desk-worker" className='photo-link'>
                <img src={DeskWorker} alt="Masa Başı Çalışanlar için Egzersizler" style={{ width: '100%'}} />
                <div className="caption">
                  <p>Masa Başı Çalışanları için Detaylı bilgi ve Egzersizler için Tıklayınız.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anasayfa;

