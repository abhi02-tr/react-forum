import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = () => {
        fetch('http://localhost:3000/api/user', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({data: {email, password, username}}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.error(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, email, password });
        signup();
        setEmail("");
        setUsername("");
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
                                <h2>Sign in</h2>
                            </div>
                            <div className='card-body'>
                                <form className='registerForm' onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                        <label htmlFor='username' className='form-label'>Username</label>
                                        <input
                                            type='text'
                                            name='username'
                                            id='username'
                                            className='form-control'
                                            required
                                            value={username}
                                            onChange={(e) => { setUsername(e.target.value) }}
                                        />
                                    </div>
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
                                    <button className='registerBtn btn btn-primary w-100'>Sign In</button>
                                    <p>
                                        Already have an account? <Link to='/'>Log in</Link>
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

export default Register