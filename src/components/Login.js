import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ handleLogin, isLoading }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        handleLogin(userData);
    }

return (
    <div className='auth'>
      <h2 className='auth__title'>Sign in</h2>
      <form className='auth__form' onSubmit={handleSubmit}>
      <label className="auth__input">
        <input
          type='email'
          name='email'
          id="email"
          className='auth__email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </label>
        <label className="auth__input">
        <input
          type='password'
          name='password'
          id='password'
          className='auth__password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </label>
        <div className='auth__footer'>
          <div className='auth__footer-wrapper'>
            <button type='submit' className='auth__button'>
              {isLoading ? 'Logging In...' : 'Log in'}
            </button>
            <p className='auth__footer-text'>
              Not a member yet?{' '}
              <Link to='/signup' className='auth__footer-link'>
                Sign up here!
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
