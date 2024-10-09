// frontend/src/Login
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './ValidationFolder/LoginValidation.js';
import { Login as login } from './api/server.js';
import validation2 from './ValidationFolder/LoginValidation.js';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const currentErrors = validation(values);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      try {
        const response = await login(values);
        if (response && response.message === 'Login successful') {
          navigate('/');
        } else {
          alert('Invalid username, email, or password');
        }
      } catch (error) {
        console.error(error);
        alert('Error occurred while logging in');
      }
    }
  };

  return (
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
          <h2>Sign-In</h2>
          <form onSubmit={handleSubmit}>
            {/* שדה Username */}
            <div className='mb-3'>
              <label htmlFor='name'><strong>Username</strong></label>
              <input
                  type='text'
                  id='username'
                  name='name'
                  placeholder='Enter name'
                  autoComplete='username'  // הוספת autocomplete ל-username
                  onChange={handleInput}
                  className='form-control rounded-0'
              />
              {errors.name && <span className='text-danger'> {errors.name} </span>}
            </div>

            {/* שדה Email */}
            <div className='mb-3'>
              <label htmlFor='email'><strong>Email</strong></label>
              <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Enter Email'
                  autoComplete='email'  // הוספת autocomplete לאימייל
                  onChange={handleInput}
                  className='form-control rounded-0'
              />
              {errors.email && <span className='text-danger'> {errors.email} </span>}
            </div>

            {/* שדה Password */}
            <div className='mb-3'>
              <label htmlFor='password'><strong>Password</strong></label>
              <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Enter Password'
                  autoComplete='current-password'  // הוספת autocomplete לסיסמה
                  onChange={handleInput}
                  className='form-control rounded-0'
              />
              {errors.password && <span className='text-danger'> {errors.password} </span>}
            </div>

            <button type='submit' className='btn btn-success w-100 rounded-0'>
              Log in
            </button>

            <Link to='/Signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
              Create Account
            </Link>

            <Link to='/Resetpassword' style={{ color: 'red' }} className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
              Forgot your password?
            </Link>
          </form>
        </div>
      </div>
  );
}

export default Login;
