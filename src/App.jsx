import React from 'react';
import './style/App.css';
import { Routes, Route} from "react-router-dom";
import Anasayfa from './pages/Home';
import Hakkımda from './pages/About';
import İletişim from './pages/Contact';
import NavigationBar from './components/Navbar';
import NeckHernia from  './pages/neck-hernia';
import ImpSendrome from './pages/imp';
import DeskWorker from './pages/desk-worker';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';


function App() {

  return (
    <div>
   
      <NavigationBar/>

      <Routes>

        <Route index path='/Home' element={<Anasayfa/>}/>
        <Route path="/About" element={<Hakkımda/>} />
        <Route path="/Contact" element={<İletişim/>} /> 
        <Route path="/neck-hernia" element={<NeckHernia/>} /> 
        <Route path="/imp" element={<ImpSendrome/>} /> 
        <Route path="/desk-worker" element={<DeskWorker/>} /> 
        <Route path="/signUp" element={<SignUp/>} /> 
        <Route path="/forgotpassword" element={<ForgotPassword/>} /> 
    

        
      </Routes>
      <Footer/>
      </div>
  
  );
}

export default App;
