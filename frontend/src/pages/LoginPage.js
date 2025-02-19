// src/pages/LoginPage.js
import React, { useState } from 'react';
import './AuthStyles.css'; // Link to the auth form styles

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login details:', loginData);
  };

  return (
    <div 
  className="login-page" 
  style={{
    backgroundImage: `url(${require('../pages/images/back.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'  // Darker background to contrast with a white image
  }}
>
  {/* Your form content */}


  
      <div className="auth-container">
        <div className="auth-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <button type="submit" className="auth-btn">
              Login
            </button>
          </form>
          <div className="auth-links">
            <a href="/register">Don't have an account? Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
