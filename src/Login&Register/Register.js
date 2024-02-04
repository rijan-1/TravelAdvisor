import './Register.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();



  const handleRegister = async () => {
    // Check if username or password is empty
    if (username==='' || password==='') {
      setError('Username and password cannot be empty');
      return;
    }

    // Send registration data to the FastAPI backend

const options={
  method: 'POST',
  headers:{
    'content-type':'application/json'
  },
  body: JSON.stringify({username, password})
}

    
    const response = await fetch('http://localhost:8000/register/',options );

    if (response.ok) {
 

      navigate('/Login');
    } else {
      console.error('Registration failed');

    }
  };

  return (
    <div className='RegisterBakcground' >
      <div style={{height:'100%', width:'100%',backgroundColor:'rgba(0,0,0,0.2)'}}>
      <div className='RegisterFormcss'>
        <h1 className='RegisterHeading'>Registration</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
       <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='RegisterButton' onClick={handleRegister}>Register</button>
        {error && <p className='ErrorMessage'>{error}</p>}
      
      </div></div>
    </div>
  );
};