import React, { useEffect, useState } from 'react';
import Profile from '../assets/profile-img/fzt4.jpg';
import '../style/About.css'



const About = ()  => {

  return (
    <div className='who-card container mt-5 d-flex align-items-center'>
      <img 
        src={Profile}
        alt="Fzt. Beyza Doğan" 
        className="rounded-circle"
      />
      <div style={{ marginLeft: '50px' }}>
        <span
          style={{
            display: 'inline-block',
            fontWeight: '900',
            fontSize: '36px',
            color: 'rgb(139, 139, 197)',
          }}
        >
          Fzt. Beyza DOĞAN
        </span>
        <p>
          Ben Beyza Doğan. 1998 yılında İskenderun'da doğdum. Bahçeşehir Üniversitesi'nde
          İngilizce Fizik Tedavi ve rehabilatasyon bölümünü tamamladım,
          birçok farklı eğitim aldıktan sonra yazılım ilgimi çekmeye başladı mezun olduktan sonra
          Acunmedya Akademide 6 aylık Frontend Programına katıldım ve mezun oldum.
          Şu an bir şirkette Frontend Developer olarak çalışmaktayım.
        </p>
      </div>
     
    </div>
 
  );
};

export default About;
