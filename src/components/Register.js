import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Register = ({ handleRegister, isOpen, onClose, isSuccess, isLoading }) => {
 
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
        const userData = {
            email,
            password,
        };
        handleRegister(userData);
    }

    return (
        <div className='auth'>
            <form className='auth__form' onSubmit={handleSubmit}>
                <div className='auth__wrapper'>
                    <h3 className='auth__title'>Sign up</h3>
                    <label className='auth__input'>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            className='auth__email'
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label className='auth__input'>
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
                </div>
                <button type='submit' className='auth__button'>
                   {isLoading ? 'Logging In...' : 'Log in'}
                </button>
                    <p className='auth__text'>
                        Already a memeber? {' '}
                        <Link className='auth__link' to='/signin'>
                            Log in here!
                        </Link>
                    </p>
            </form>
        </div>
    );
}

export default withRouter(Register);