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
    <div className="form-container d-flex justify-content-center mb-5 mt-5">
      <h2 style={{color:'blue', fontSize:'20px', marginRight: '24px', marginTop: '18px'}}>Şifremi Unuttum:</h2>
      <form className='justify-content-center align-items-center mt-3' onSubmit={handleForgotPassword}>
        <input style={{borderRadius:'15px', padding: ' 6px 6px' }}
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button style={{marginTop: '16px'}} className= ' btn btn-primary d-flex justify-content-center align-items-center' type="submit">Şifreyi Gönder</button>
      </form>
      {message && <p>{message}</p>}
      <button style={{marginTop: '75px'}} className= 'btn btn-primary  justify-content-center align-items-center mb-5' onClick={handleBack}>Geri Dön</button>
    </div>
  );
}

export default ForgotPassword;
