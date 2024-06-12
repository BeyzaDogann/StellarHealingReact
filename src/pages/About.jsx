import React, { useEffect, useState } from 'react';
// import SwiperCore, { Navigation, Pagination } from 'swiper/core';
// import { Swiper, SwiperSlide } from 'swiper/react';
import Profile from '../assets/profile-img/fzt4.jpg';
import '../style/About.css'


// SwiperCore.use([Navigation, Pagination]);

// const images = import.meta.glob('../assets/sertifika-img/*.jpg');

// const About = () => {
//   const [imageUrls, setImageUrls] = useState([]);

//   useEffect(() => {
//     const loadImages = async () => {
//       const loadedImages = await Promise.all(
//         Object.keys(images).map(async (imagePath) => {
//           const image = await images[imagePath]();
//           return image.default;
//         })
//       );
//       setImageUrls(loadedImages);
//     };

//     loadImages();
//   }, []);
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
      {/* <div className='swiper-container'>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          className='swiper-wrapper'
        >
          {imageUrls.map((src, index) => (
            <SwiperSlide key={index} className='swiper-slide'>
              <img src={src} alt="Sertifika" className="swiper-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </div>
 
  );
};

export default About;
