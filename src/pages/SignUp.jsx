import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    try {
      const response = await axios.post('http://localhost:5000/users', data);
      console.log('Sign up successful:', response.data);
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  };

  return (
    <div className="signup-container container mt-5">
      <h2>Kayıt Ol</h2>
      <span>Güncel makaleler ve egzersizler için kayıt olabilirsiniz</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">E-mail:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <span className="text-danger">{errors.email.message}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Şifre</label>
          <input
            id="password"
            type="password"
            className="form-control"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <span className="text-danger">{errors.password.message}</span>}
        </div>
        <button type="submit" className="btn btn-primary w-100">Kayıt Ol</button>
      </form>
    </div>
  );
};

export default SignUp;
