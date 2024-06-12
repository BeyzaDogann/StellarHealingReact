
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AyakBilegi from '../assets/egzeriz-img/desk-worker/ayak-bileği.jpg';
import AyakKaldırma from '../assets/egzeriz-img/desk-worker/ayak-kaldırma.jpg';
import BoyunEgzesizi from '../assets/egzeriz-img/desk-worker/boyunegz-dw.jpg';
import DizGögse from '../assets/egzeriz-img/desk-worker/diz-göğse.jpg';
import DuvardaGerme from '../assets/egzeriz-img/desk-worker/duvarda-germe.jpg';
import ElGerme from '../assets/egzeriz-img/desk-worker/el-germe.png';
import kolGerme from '../assets/egzeriz-img/desk-worker/kol-germe.jpg';
import KollarGeriye from '../assets/egzeriz-img/desk-worker/kolları-geriye.jpg';
import StresTopu from '../assets/egzeriz-img/desk-worker/stres-topu.jpg';
import YanaEgilme from '../assets/egzeriz-img/desk-worker/yana-eğilme.jpg';


const DeskWorker = () => {
  return (
    <div className="container mt-5" >
      <div className="desk-worker">
        <h2 style={{ color: 'rgb(15, 43, 155)' }}>Masa Başı Çalışanları için Egzersizler:</h2>
        <ul>
          <li>
            <span>Masa başında uzun süre çalışmak, sırt, boyun, omuz ve bel ağrılarına yol açabilir. Ayrıca hareketsizlik kas
              gerginliği, kötü duruş ve genel sağlık problemlerine neden olabilir. İşte masa başı çalışanları için uygun olan,
              kolayca uygulanabilecek bazı egzersizler:</span>
          </li>
        </ul>



        <div className="container mt-5" >
          <div className="row">
            <div className='col'>

              <div className='container'>
                <h3 style={{ color: 'rgb(110, 146, 246)' }}>Boyun Rahatlatma</h3>
                <ul>
                  <li>
                    <h4 style={{ color: 'rgb(89, 101, 133)' }}>Başınızı Çevirme:</h4>
                    <p> Otururken başınızı yavaşça sağa doğru eğin, sağ kulak sağ omuza yaklaşsın. Bu
                      pozisyonda 15-20 saniye bekleyin. Aynı hareketi sol tarafa tekrarlayın.</p>
                  </li>
                  <img src={BoyunEgzesizi} alt="Boyun Egzersizi" style={{ width: '500px', margin: '30px 0' }} />
                </ul>
              </div>

              <div className='container'>
                <ul>
                  <li>
                    <h4 style={{ color: 'rgb(89, 101, 133)' }}>Kol Uzatma ve Çekme:</h4>
                    <p> Sağ kolunuzu sol omzunuzun üstüne koyun ve sol elinizle sağ dirseğinizi tutarak kolunuzu sol omzunuza doğru çekin. 15-20 saniye bekleyin. Aynı hareketi diğer kol için tekrarlayın.</p>
                  </li>
                  <img src={kolGerme} alt="Kol Germe Egzersizi" style={{ width: '500px', margin: '30px 0' }} />
                </ul>
              </div>




              <div className='container'>
                <h3 style={{ color: 'rgb(110, 146, 246)' }}>Göğüs Germe</h3>
                <ul>
                  <li>
                    <h4 style={{ color: 'rgb(89, 101, 133)' }}>Kolları Geriye Açma:</h4>
                    <p> Sandalyede otururken ellerinizi arkanızda birleştirin ve göğsünüzü açarak kollarınızı geriye doğru kaldırın. Göğüs kaslarınızın gerildiğini hissedin. 15-20 saniye bu pozisyonda kalın. </p>
                  </li>
                  <img src={KollarGeriye} alt="Kollar Geriye Egzersizi" style={{ width: '500px', margin: '30px 0' }} />
                  <h4 style={{ color: 'rgb(89, 101, 133)' }}>Duvarda Esneme: </h4>
                  <li>
                    <p>Duvara yüzünüz dönük durun ve ellerinizi omuz genişliğinde duvara yerleştirin. Yavaşça öne doğru adım atın ve göğsünüzü duvara doğru iterek esneyin. 15-20 saniye bekleyin.</p>
                  </li>
                  <img src={DuvardaGerme} alt="Duvarda Göğüs Germe Egzersizi" style={{ width: '500px', margin: '30px 0' }} />
                </ul>
              </div>

              <div className='container'>
                <h3 style={{ color: 'rgb(110, 146, 246)' }}>Sırt ve Bel Egzersizleri</h3>
                <ul>
                  <li>
                    <h4 style={{ color: 'rgb(89, 101, 133)' }}>Yan Eğilme:</h4>
                    <p> Sandalyede otururken sağ kolunuzu yukarı kaldırın ve sol tarafa doğru eğilin. 15-20 saniye bekleyin ve aynı hareketi diğer tarafa tekrarlayın.</p>
                  </li>
                  <img src={YanaEgilme} alt="Yana Eğilme Egzersizleri" style={{ width: '500px', margin: '30px 0' }} />
                  <li>
                    <h4 style={{ color: 'rgb(89, 101, 133)' }}>Diz Göğse Çekme:</h4>
                    <p> Sandalyede otururken sağ dizinizi yukarı çekin ve ellerinizle tutarak göğsünüze doğru çekin. 15-20 saniye bekleyin. Aynı hareketi sol dizinizle tekrarlayın.</p>
                  </li>
                  <img src={DizGögse} alt="Dizi Göğüse Çekme Egzersizi" style={{ width: '200px', margin: '30px 0' }} />
                </ul>
              </div>

              <div className='container'>
                <h3 style={{ color: 'rgb(110, 146, 246)' }}> El ve Bilek Egzersizleri</h3>
                <ul>
                  <li>
                    <h4 style={{ color: 'rgb(89, 101, 133)' }}>Bilek Esnetme: </h4>
                    <p>  Kolunuzu düz tutarak avucunuzu yukarı çevirin ve diğer elinizle parmaklarınızı geriye
                      doğru itin. 15-20 saniye bekleyin. Aynı hareketi avucunuzu aşağı çevirerek tekrarlayın.</p>
                  </li>
                  <img src={ElGerme} alt="El Germe Egzersizi" style={{ margin: '30px 0' }} />
                  <li>
                    <h4 style={{ color: 'rgb(89, 101, 133)' }}>El Sıkma:</h4>
                    <p> Bir stres topu veya benzeri bir nesne kullanarak el kaslarınızı güçlendirin. Her iki elinizle
                      10-15 kez sıkın.</p>
                  </li>
                  <img src={StresTopu} alt="Stres Topu Egzersizi" style={{ width: '200px', margin: '30px 0' }} />
                </ul>
              </div>
              <div className='container'>
                Ayak Kaldırma Egzersizi
                <ul>
                  <li>
                    <h4 style={{ color: 'rgb(89, 101, 133)' }}>Ayak Bileği Çevirmeleri: </h4>
                    <p>   Sandalyenizde otururken ayağınızı kaldırın ve ayak bileğinizi dairesel
                      hareketlerle çevirin. 10 kez saat yönünde, 10 kez saat yönünün tersine tekrarlayın.</p>
                  </li>
                  <img src={AyakBilegi} alt="Ayak Bileği Egzersizi" style={{ margin: '30px 0' }} />
                  <li>
                    <h4 style={{ color: 'rgb(89, 101, 133)' }}>Bacak Kaldırma:</h4>
                    <p>  Sandalyenizde otururken bir bacağınızı düz tutarak kaldırın ve 5-10 saniye bu pozisyonda
                      kalın. Her iki bacak için 10 kez tekrarlayın.</p>
                  </li>
                  <img src={AyakKaldırma} alt="Ayak Kaldırma Egzersizi" style={{ width: '200px', margin: '30px 0' }} />
                </ul>
              </div>
              <h3 style={{ color: 'rgb(110, 146, 246)' }}> Tavsiyeler</h3>
              <ul>
                <li>
                  <li>Düzenli Mola Verin</li>
                  <li>Her 30-60 dakikada bir kısa molalar verin.</li>
                  <li>Ayağa kalkın, ofis içinde kısa yürüyüşler yapın.</li>
                  <li>Masanızdan uzaklaşarak birkaç dakikalığına farklı bir aktivite yapın.</li>
                </li>
              </ul>


              <ul>
                <li>
                  <p> Bu egzersizler, masa başı çalışırken oluşabilecek gerginlikleri ve ağrıları azaltmaya yardımcı olur. Düzenli olarak
                  uygulayarak hem fiziksel hem de zihinsel sağlığınızı koruyabilirsiniz.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default DeskWorker;