

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SarkacEgzersizi from '../assets/egzeriz-img/imp-sendrome/sarkaç-egz.jpg';
import ParmakYuruyusu from '../assets/egzeriz-img/imp-sendrome/parmak-egz.jpg';
import CubukEgzersizi from '../assets/egzeriz-img/imp-sendrome/çubuk-egz.jpg';
import OmuzRulo from '../assets/egzeriz-img/imp-sendrome/omuzlari-yuvarlayin.jpg';
import GögüsGerme from '../assets/egzeriz-img/imp-sendrome/göğüs-germe.jpg';


const ImpSendrome = () => {
  return (
    <div className="container mt-5" >
      <div className="imp-sendrome">
        <h2 style={{ color: 'rgb(15, 43, 155)' }}>Donuk omuz</h2>
        <ul>
          <li>
            <span>Donuk omuz, tıbbi olarak "adhesive capsulitis" olarak bilinir ve omuz ekleminde ağrı ve hareket
              kısıtlılığına
              neden
              olan bir durumdur. Bu durum, omuz eklem kapsülünün kalınlaşması ve sıkışması sonucu ortaya çıkar. Genellikle
              üç
              aşamada ilerler: ağrılı aşama, donuk aşama ve çözülme aşaması.</span>
          </li>
        </ul>

        <h2 style={{ color: 'rgb(110, 225, 246)' }}>Donuk Omuzun Belirtileri:</h2>
        <h3 style={{ color: 'rgb(110, 146, 246)' }}>Ağrılı Aşama:</h3>
        <ul>
          <li>Omuzda ağrı, özellikle gece.</li>
          <li> Hareket sırasında ağrı artar.</li>
          <li>Omuz hareketlerinde kısıtlılık başlar.</li>
        </ul>

        <h3 style={{ color: 'rgb(110, 146, 246)' }}>Donuk Aşama:</h3>
        <ul>
          <li>Ağrı azalabilir, ancak hareket kısıtlılığı artar.</li>
          <li>Omuzda sertlik ve hareket sınırlılığı.</li>
          <li>Günlük aktivitelerde zorlanma.</li>
        </ul>

        <h3 style={{ color: 'rgb(110, 146, 246)' }}>Çözülme Aşaması:</h3>
        <ul>
          <li>Hareket açıklığı yavaş yavaş geri döner.</li>
          <li>Ağrı azalır.</li>
          <li>Tam iyileşme aylar veya yıllar sürebilir.</li>
        </ul>


        <h2 style={{ color: 'rgb(110, 225, 246)' }}>Donuk Omuzun Nedenleri:</h2>
        <h4 style={{ color: 'rgb(89, 101, 133)' }}>Travma veya Yaralanma:</h4>
        <ul>
          <li>
            <span>Omuz yaralanmaları veya cerrahi müdahaleler sonrası gelişebilir.</span>
          </li>
        </ul>

        <ul>
          <h4 style={{ color: 'rgb(89, 101, 133)' }}>Diğer Hastalıklar:</h4>
          <li>
            <span>Diyabet, tiroid hastalıkları, kalp hastalıkları ve Parkinson hastalığı gibi durumlar
              risk faktörleri arasındadır.</span>
          </li>
        </ul>


        <h4 style={{ color: 'rgb(89, 101, 133)' }}>İmmobilizasyon:</h4>
        <ul>
          <li>
            <span> Uzun süre omuz hareket ettirilmezse (örneğin, kol kırığı sonrası alçıda kalma), donuk omuz
              gelişme riski artar.</span>
          </li>

          <h4 style={{ color: 'rgb(89, 101, 133)' }}>Enflamasyon:</h4>
          <li>
            <span>Omuz eklem kapsülünde enflamasyon ve fibrozis gelişebilir.</span>
          </li>
        </ul>



        <div className="container mt-5" >
          <div className="row">
            <div className='col'>
              <div className='container'>
                <h2 style={{ color: 'rgb(15, 43, 155)' }}>Donuk Omuz İçin Yapılacak Egzersizler:</h2>

                <span>Donuk omuz tedavisinde egzersizler oldukça önemlidir. Amaç, omuz hareket açıklığını artırmak ve ağrıyı
                  azaltmaktır. İşte bazı temel egzersizler:</span>

              </div>

              <div className='container'>
                <h4 style={{ color: 'rgb(89, 101, 133)' }}>Sarkaç Egzersizi:</h4>
                <ul>
                  <li>
                    <li>Ayakta durun ve belinizden öne doğru eğilin.</li>
                    <li>Etkilenen kolunuzu serbest bırakın ve kolunuzu küçük daireler çizerek sallayın.</li>
                    <li>Saat yönünde ve saat yönünün tersine 10 kez tekrarlayın.</li>
                  </li>
                </ul>
                <img src={SarkacEgzersizi} alt="Sarkaç Egzersizi" style={{ width: '500px', margin: '30px 0' }} />

                <h4 style={{ color: 'rgb(89, 101, 133)' }}>Parmak Yürüyüşü:</h4>
                <ul>
                  <li>
                    <li>Parmaklarınızı bir duvara yerleştirin ve yavaşça yukarı doğru yürütün.</li>
                    <li>Omuz seviyesine ulaşana kadar parmaklarınızı yürütmeye devam edin.</li>
                    <li>Bu pozisyonda 10 saniye bekleyin, sonra başlangıç pozisyonuna dönün.</li>
                  </li>
                </ul>
                <img src={ParmakYuruyusu} alt="Parmakla Duvar Tırmanma Egzersizi" style={{ margin: '30px 0' }} />

                <h4 style={{ color: 'rgb(89, 101, 133)' }}>Çubukla Germe Egzersizi:</h4>

                <ul>
                  <li>
                    <li>Bir sopa veya çubuk kullanarak iki elinizle tutun.</li>
                    <li>Çubuğu öne doğru uzatın ve yavaşça yukarı kaldırın.</li>
                    <li>Kolunuzun hareket açıklığına göre yukarı kaldırabildiğiniz kadar kaldırın.</li>
                    <li>10-15 saniye tutun, ardından yavaşça geri indirin.</li>
                  </li>
                </ul>

                <img src={CubukEgzersizi} alt="Çubuk Egzersizi" style={{ width: '200px', margin: '30px 0' }} />

              </div>

              <div className='container'>
                <h3 style={{ color: 'rgb(110, 146, 246)' }}>Omuz Rulo Egzersizi:</h3>
                <ul>
                  <li>
                    <li>Omuzlarınızı yukarı kaldırın ve geriye doğru dairesel hareketler yapın.</li>
                    <li>10 kez geriye, 10 kez ileriye doğru tekrarlayın.</li>
                  </li>
                </ul>
                <img src={OmuzRulo} alt="Omuz Yuvarlama Egzersizi" style={{ width: '400px', margin: '30px 0' }} />
              </div>

              <div className='container'>
                <h3 style={{ color: 'rgb(110, 146, 246)' }}>Göğüs Germe:</h3>
                <ul>
                  <li>
                    <li>Bir kapı eşiğine ellerinizi yerleştirerek durun.</li>
                    <li>Yavaşça öne doğru adım atarak omuzlarınızı gerin.</li>
                    <li>15-20 saniye tutun ve bırakın.</li>
                  </li>
                </ul>
                <img src={GögüsGerme} alt="Göğüs Germe Egzersizi" style={{ width: '400px', margin: '30px 0' }} />
              </div>

              <ul>
                <li>
                  <p> Donuk omuz tedavisinde sabırlı olmak önemlidir, çünkü iyileşme süreci uzun olabilir. Egzersizlere düzenli
              olarak
              devam edilmelidir. <span style={{ color: 'rgb(220, 23, 23)' }}> Ancak bu sayfa sadece bilgilendirme amaçlıdır.
                Egzersiz programına başlamadan önce mutlaka bir doktora veya fizyoterapiste danışılmalıdır.</span> </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
};
export default ImpSendrome;