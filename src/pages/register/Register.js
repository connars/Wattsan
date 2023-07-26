import './register.css';
import AuthModule from '../../components/auth-module/AuthModule';
import React, { useState } from 'react';

function Register() {

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": `${username}`,
      "password": `${password}`,
      "email": `${email}`
    });

    var requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3000/auth/register", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
   
  };

  return (
    <div className='login login__wrapper'>
      <AuthModule/>
      <h2 style={{textAlign: 'center'}}>
        Sign Up
      </h2>
      <form className='login__form'>
        <input placeholder='Name' value={username} onChange={(e) => setName(e.target.value)} />
        <input placeholder='E-Mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <input
          placeholder='Confirm Password'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

        <button style={{width: '330px', marginTop: '20px',marginBottom: '20px'}} className='main-btn' onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
