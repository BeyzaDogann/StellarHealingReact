import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setMessage('Şifre sıfırlama talimatları email adresinize gönderildi.');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="form-container d-flex justify-content-center">
      <h2 col>Şifremi Unuttum</h2>
      <form className='d-flex justify-content-center align-items-center' onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className= 'd-flex justify-content-center align-items-center' type="submit">Şifreyi Gönder</button>
      </form>
      {message && <p>{message}</p>}
      <button className= 'd-flex justify-content-center align-items-center' onClick={handleBack}>Geri Dön</button>
    </div>
  );
}

export default ForgotPassword;
