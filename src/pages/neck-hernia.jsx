

import React from 'react';

import BoyunEsnetme from '../assets/egzeriz-img/neck-hernia/boyun-esnetme.jpg';
import IzometrikEgzersiz from '../assets/egzeriz-img/neck-hernia/izometrik.jpg';
import OmuzShrug from '../assets/egzeriz-img/neck-hernia/omuz-shrug.jpg';
import DuruşEgzersizi from '../assets/egzeriz-img/neck-hernia/duruş-egz.jpg';
import CatCowEgzersizi from '../assets/egzeriz-img/neck-hernia/cat-cow.jpg';

const NeckHernia = () => {
  return (
    <div className="container mt-5" >
      <div className="neck-hernia">
        <h2 style={{ color: 'rgb(15, 43, 155)' }}>Boyun Fıtığı Nedir?</h2>
       
          <li>
            <span>Boyun fıtığı (servikal disk hernisi), omurlar arasındaki disklerin yerinden kayması veya yırtılması sonucu sinir köklerine veya omuriliğe baskı yapması durumudur. Bu diskler, omurlar arasında yer alan jel benzeri bir çekirdek ve bu çekirdeği çevreleyen sert bir dış tabakadan oluşur. Boyun fıtığı, bu diskin dış tabakasının yırtılması ve iç çekirdeğin dışarı sızması sonucu oluşur. Bu durum, sinir köklerine veya omuriliğe baskı yaparak çeşitli belirtilere yol açabilir.</span>
          </li>
      
          <ul>
        <h2 style={{ color: 'rgb(110, 225, 246)' }}>Boyun Fıtığının Belirtileri:</h2>
      
          <li>
            <span>Boyun fıtığının belirtileri, sinir köklerine yapılan baskının yerine ve şiddetine bağlı olarak değişebilir. Yaygın belirtiler şunlardır:</span>
          </li>
   
            <li>
              <h3 style={{ color: 'rgb(110, 146, 246)' }}>Boyun Ağrısı:</h3>
              <p>Boyun bölgesinde sürekli veya aralıklı ağrı.</p>
            </li>
            <li>
              <h3 style={{ color: 'rgb(110, 146, 246)' }}>Kol ve Omuz Ağrısı:</h3>
              <p>Boyundan kola ve omuza yayılan ağrı.</p>
            </li>
            <li>
              <h3 style={{ color: 'rgb(110, 146, 246)' }}>Uyuşma ve Karıncalanma:</h3>
              <p>Kolda, elde veya parmaklarda uyuşma, karıncalanma.</p>
            </li>
            <li>
              <h3 style={{ color: 'rgb(110, 146, 246)' }}>Kas Güçsüzlüğü:</h3>
              <p>Kolda veya elde güçsüzlük, objeleri tutmakta zorlanma.</p>
            </li>
            <li>
              <h3 style={{ color: 'rgb(110, 146, 246)' }}>Baş Ağrısı:</h3>
              <p>Özellikle ense kökünde yoğunlaşan baş ağrısı.</p>
            </li>
        
        
        </ul>

        <h2 style={{ color: 'rgb(110, 225, 246)' }}>Boyun Fıtığının Nedenleri:</h2>
        <ul>
          <li>
            <span>Boyun fıtığının başlıca nedenleri şunlardır:</span>
          </li>
          <ul>
            <li>
              <h3 style={{ color: 'rgb(110, 146, 246)' }}>Aşınma ve Yıpranma:</h3>
              <p>Yaşlanma sürecinde disklerin elastikiyeti azalır ve yıpranma sonucu fıtıklaşabilir.</p>
            </li>
            <li>
              <h3 style={{ color: 'rgb(110, 146, 246)' }}>Travma:</h3>
              <p>Boyna alınan ani darbeler veya kazalar.</p>
            </li>
            <li>
              <h3 style={{ color: 'rgb(110, 146, 246)' }}>Tekrarlayan Hareketler:</h3>
              <p>Sürekli aynı pozisyonda çalışma, bilgisayar başında uzun süre kalma.</p>
            </li>
            <li>
              <h3 style={{ color: 'rgb(110, 146, 246)' }}>Kötü Duruş:</h3>
              <p>Yanlış oturma, ayakta durma veya uyuma pozisyonları.</p>
            </li>
            <li>
              <h3 style={{ color: 'rgb(110, 146, 246)' }}>Ağır Yük Kaldırma:</h3>
              <p>Yanlış teknikle ağır yüklerin kaldırılması.</p>
            </li>
          </ul>
        </ul>

        <h2 style={{ color: 'rgb(110, 225, 246)' }}>Boyun Fıtığı İçin Yapılabilecek Egzersizler:</h2>

        <li>
          <span>Boyun fıtığı için önerilen egzersizler, omurgayı destekleyen kasları güçlendirmek, esnekliği artırmak ve ağrıyı hafifletmek amacıyla yapılır. Ancak, egzersiz programına başlamadan önce bir sağlık profesyoneline danışmak önemlidir. İşte bazı önerilen egzersizler:</span>
        </li>

        <div className="container">
          <h3 style={{ color: 'rgb(110, 146, 246)' }}>Boyun Esnetme Egzersizleri</h3>
          <ul>
            <li>
              <h4 style={{ color: 'rgb(89, 101, 133)' }}>Çene Göğse:</h4>
              <p>Yavaşça çenenizi göğsünüze doğru yaklaştırın ve birkaç saniye bu pozisyonda kalın, ardından başınızı eski pozisyonuna getirin.</p>
            </li>
            <li>
              <h4 style={{ color: 'rgb(89, 101, 133)' }}>Yan Esneme:</h4>
              <p>Başınızı sağ omzunuza doğru eğin, birkaç saniye bu pozisyonda kalın, ardından diğer tarafa doğru tekrarlayın.</p>
            </li>
            <img src={BoyunEsnetme} alt="Boyun Esnetme Egzersizi" style={{ width: '500px', margin: '30px 0' }} />
          </ul>
        </div>

        <div className="container mt-5" >
          <div className="row">
            <div className='col'>
              <h2 style={{ color: 'rgb(15, 43, 155)' }}>Boyun Fıtığı Nedir?</h2>
              <p>
                Boyun fıtığı (servikal disk hernisi), omurlar arasındaki disklerin yerinden kayması veya yırtılması sonucu sinir köklerine veya omuriliğe baskı yapması durumudur. Bu diskler, omurlar arasında yer alan jel benzeri bir çekirdek ve bu çekirdeği çevreleyen sert bir dış tabakadan oluşur. Boyun fıtığı, bu diskin dış tabakasının yırtılması ve iç çekirdeğin dışarı sızması sonucu oluşur. Bu durum, sinir köklerine veya omuriliğe baskı yaparak çeşitli belirtilere yol açabilir.
              </p>

              <h2 style={{ color: 'rgb(110, 225, 246)' }}>Boyun Fıtığının Belirtileri:</h2>
              <ul>
                <li>
                  <h3 style={{ color: 'rgb(110, 146, 246)' }}>Boyun Ağrısı:</h3>
                  <p>Boyun bölgesinde sürekli veya aralıklı ağrı.</p>
                </li>
                <li>
                  <h3 style={{ color: 'rgb(110, 146, 246)' }}>Kol ve Omuz Ağrısı:</h3>
                  <p>Boyundan kola ve omuza yayılan ağrı.</p>
                </li>
                <li>
                  <h3 style={{ color: 'rgb(110, 146, 246)' }}>Uyuşma ve Karıncalanma:</h3>
                  <p>Kolda, elde veya parmaklarda uyuşma, karıncalanma.</p>
                </li>
                <li>
                  <h3 style={{ color: 'rgb(110, 146, 246)' }}>Kas Güçsüzlüğü:</h3>
                  <p>Kolda veya elde güçsüzlük, objeleri tutmakta zorlanma.</p>
                </li>
                <li>
                  <h3 style={{ color: 'rgb(110, 146, 246)' }}>Baş Ağrısı:</h3>
                  <p>Özellikle ense kökünde yoğunlaşan baş ağrısı.</p>
                </li>
              </ul>

              <h2 style={{ color: 'rgb(110, 225, 246)' }}>Boyun Fıtığının Nedenleri:</h2>
              <ul>
                <li>
                  <h3 style={{ color: 'rgb(110, 146, 246)' }}>Aşınma ve Yıpranma:</h3>
                  <p>Yaşlanma sürecinde disklerin elastikiyeti azalır ve yıpranma sonucu fıtıklaşabilir.</p>
                </li>
                <li>
                  <h3 style={{ color: 'rgb(110, 146, 246)' }}>Travma:</h3>
                  <p>Boyna alınan ani darbeler veya kazalar.</p>
                </li>
                <li>
                  <h3 style={{ color: 'rgb(110, 146, 246)' }}>Tekrarlayan Hareketler:</h3>
                  <p>Sürekli aynı pozisyonda çalışma, bilgisayar başında uzun süre kalma.</p>
                </li>
                <li>
                  <h3 style={{ color: 'rgb(110, 146, 246)' }}>Kötü Duruş:</h3>
                  <p>Yanlış oturma, ayakta durma veya uyuma pozisyonları.</p>
                </li>
                <li>
                  <h3 style={{ color: 'rgb(110, 146, 246)' }}>Ağır Yük Kaldırma:</h3>
                  <p>Yanlış teknikle ağır yüklerin kaldırılması.</p>
                </li>
              </ul>

              <h2 style={{ color: 'rgb(110, 225, 246)' }}>Boyun Fıtığı İçin Yapılabilecek Egzersizler:</h2>
              <p>Boyun fıtığı için önerilen egzersizler, omurgayı destekleyen kasları güçlendirmek, esnekliği artırmak ve ağrıyı hafifletmek amacıyla yapılır. Ancak, egzersiz programına başlamadan önce bir sağlık profesyoneline danışmak önemlidir. İşte bazı önerilen egzersizler:</p>

              <div className='container'>
                <h3 style={{ color: 'rgb(110, 146, 246)' }}>Boyun Güçlendirme Egzersizleri</h3>
                <ul>
                  <li>
                    <h4 style={{ color: 'rgb(89, 101, 133)' }}>Boyun İzometrik Egzersizler:</h4>
                    <p>Elinizi alnınıza veya başınızın yanına koyun ve başınızı elinize doğru itin, ancak elinizle karşı koyun. Bu pozisyonda 5-10 saniye kalın ve gevşeyin. Her yöne tekrarlayın (ön, arka, sağ ve sol).</p>
                  </li>
                  <img src={IzometrikEgzersiz} alt="İzometrik Egzersizler" style={{ width: '500px', margin: '30px 0' }} />
                </ul>
              </div>

              <div className='container'>
                <h3 style={{ color: 'rgb(110, 146, 246)' }}>Omuz ve Üst Sırt Egzersizleri</h3>
                <ul>
                  <li>
                    <h4 style={{ color: 'rgb(89, 101, 133)' }}>Omuz Shrug:</h4>
                    <p>Omuzlarınızı yukarı doğru kaldırın (kulaklarınıza doğru) ve birkaç saniye bu pozisyonda kalın, ardından gevşeyin.</p>
                  </li>
                  <img src={OmuzShrug} alt="Omuzları Çeneye Çekme Egzersizi" style={{ margin: '30px 0' }} />
                  <li>
                    <h4 style={{ color: 'rgb(89, 101, 133)' }}>Duruş Egzersizleri:</h4>
                    <p>Sırtınızı düz tutarak kollarınızı yanlara doğru açın, omuz kanatlarınızı (scapula) birbirine yaklaştırarak birkaç saniye tutun ve bırakın.</p>
                  </li>
                  <img src={DuruşEgzersizi} alt="Postür Düzeltici Duruş Egzersizi" style={{ width: '200px', margin: '30px 0' }} />
                </ul>
              </div>

              <div className='container'>
                <h3 style={{ color: 'rgb(110, 146, 246)' }}>Kedi-İnek Pozisyonu (Cat-Cow)</h3>
                <ul>
                  <li>
                    <p>Eller ve dizler üzerinde durarak sırtınızı yukarı doğru yuvarlayın (kedi pozisyonu), ardından sırtınızı aşağı doğru çukurlaştırın (inek pozisyonu). Her pozisyonda birkaç saniye kalın ve tekrarlayın.</p>
                  </li>
                  <img src={CatCowEgzersizi} alt="Kedi-inek Egzersizi" style={{ width: '400px', margin: '30px 0' }} />
                </ul>
              </div>

              <ul>
                <li>
                  <p>Boyun fıtığı, yaşam kalitesini olumsuz etkileyebilen ciddi bir rahatsızlıktır. Erken teşhis ve uygun tedavi ile belirtiler yönetilebilir ve komplikasyonlar önlenebilir. Egzersizler, tedavinin önemli bir parçası olabilir, <span style={{ color: 'rgb(220, 23, 23)' }}> ancak bu sayfa sadece bilgilendirme amaçlıdır. Egzersiz programına başlamadan önce mutlaka bir doktora veya fizyoterapiste danışılmalıdır.</span> Uygun tedavi ve egzersizlerle boyun sağlığını korumak ve ağrıyı azaltmak mümkündür.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default NeckHernia;