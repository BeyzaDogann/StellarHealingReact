import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
  const [activeTab, setActiveTab] = useState('login');
  const [registerForm, setRegisterForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
  });
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleRegisterChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.id]: e.target.value
    });
  };

  const handleLoginChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.id]: e.target.value
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === registerForm.email);

    if (userExists) {
      alert('Bu email ile zaten kayıt olunmuş.');
    } else {
      users.push(registerForm);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Kayıt başarılı!');
      setActiveTab('login');
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === loginForm.email && user.password === loginForm.password);

    if (user) {
      alert('Giriş başarılı!');
    } else {
      alert('Email veya şifre hatalı.');
    }
  };

  return (
    <div className="container mt-5">
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
            id="tab-login"
            data-mdb-pill-init
            onClick={() => handleTabChange('login')}
            href="#pills-login"
            role="tab"
            aria-controls="pills-login"
            aria-selected={activeTab === 'login' ? 'true' : 'false'}
          >
            <span style={{ color: '#09203f' }}>Giriş Yap</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
            id="tab-register"
            data-mdb-pill-init
            onClick={() => handleTabChange('register')}
            href="#pills-register"
            role="tab"
            aria-controls="pills-register"
            aria-selected={activeTab === 'register' ? 'true' : 'false'}
          >
            <span style={{ color: '#09203f' }}>Kayıt Ol</span>
          </a>
        </li>
      </ul>

      <div className="tab-content">
        <div
          className={`tab-pane fade show ${activeTab === 'login' ? 'active' : ''}`}
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form onSubmit={handleLoginSubmit} className="mb-3">
            <div className="row mb-4">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={loginForm.email}
                    onChange={handleLoginChange}
                    placeholder="Email/Kullanıcı adı"
                  />
                  <label htmlFor="email">Email/Kullanıcı adı</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    placeholder="Şifre"
                  />
                  <label htmlFor="password">Şifre</label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="loginCheck"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="loginCheck">
                    Beni Hatırla
                  </label>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <a href="forgotpassword">Şifremi Unuttum</a>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Giriş Yap
            </button>
          </form>
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'register' ? 'show active' : ''}`}
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
        >
          <form onSubmit={handleRegisterSubmit} className="mb-3">
            <div className="row mb-4">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={registerForm.name}
                    onChange={handleRegisterChange}
                    placeholder="İsim-Soyisim"
                  />
                  <label htmlFor="name">İsim-Soyisim</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={registerForm.username}
                    onChange={handleRegisterChange}
                    placeholder="Kullanıcı Adı"
                  />
                  <label htmlFor="username">Kullanıcı Adı</label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={registerForm.email}
                    onChange={handleRegisterChange}
                    placeholder="Email"
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={registerForm.password}
                    onChange={handleRegisterChange}
                    placeholder="Şifre"
                  />
                  <label htmlFor="password">Şifre</label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="password"
                    id="repeatPassword"
                    className="form-control"
                    value={registerForm.repeatPassword}
                    onChange={handleRegisterChange}
                    placeholder="Şifre Tekrar"
                  />
                  <label htmlFor="repeatPassword">Şifre Tekrar</label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-3">
              Kayıt Ol
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
