import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-6'>
            <div className='card'>
              <div className='card-head text-center'>
                <h2>Login</h2>
              </div>
              <div className='card-body'>
                <form className='loginForm' onSubmit={handleSubmit}>
                  <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email Address</label>
                    <input
                      type='text'
                      name='email'
                      id='email'
                      className='form-control'
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      className='form-control'
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button className='loginBtn btn btn-primary w-100'>Log In</button>
                  <p>
                    Don't have an account? <Link to='/register'>Create one</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className='col-3'></div>
        </div>
      </div>
    </main>
  )
}

export default Login