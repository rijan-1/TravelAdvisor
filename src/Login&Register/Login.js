import React, { useState, useEffect , useContext} from 'react';

import { MyContext } from '../App';
import './Register.css'
import './Login'
export const LoginForm = () => {

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [bio, setBio] = useState('');
  const { isLoggedIn, setIsLoggedIn, username, setUsername} = useContext(MyContext);
// Track login status



  const handleLogin = async () => {
    try {

      const options ={
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      }
      // Send login data to the FastAPI backend
      const response = await fetch('http://localhost:8000/login/', options)

      if (response.ok) {
        const user = await response.json();
   
       

        // Store login state and user information in local storage
       


        setIsLoggedIn(true); // Set login status to true
        setBio(user.bio); // Set the user's bio
      } else {
        console.error('Login failed:');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  const handleLogout = () => {
    // Clear login state and user information from local storage



    setIsLoggedIn(false); // Set login status to false
    setUsername('');
    setPassword('');

  };

  return (
    <div className='RegisterBakcground'>
      <div className='RegisterFormcss'>
        {isLoggedIn ? (
          <div>
            <h1>Welcome, {username}!</h1>
            <button onClick={handleLogout}>Logout</button>
      
        
            <h2>Change Password:</h2>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
       
          </div>
        ) : (
          <div>
            <div className='LRegisterFormcss' >
            <div style={{height:'400px', width:'100%',backgroundColor:'rgba(0,0,0,0.4)',borderRadius:'20px', paddingTop:'15px'}}>
            <h1 className='RegisterHeading'>Login</h1>
            <input  style={{position:'relative', top:'15px'}}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            required />
            <input style={{position:'relative', top:'47px'}}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            required/>
            <button style={{position:'relative', top:'87px'}} className='RegisterButton' onClick={handleLogin}>Login</button>
          </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};
