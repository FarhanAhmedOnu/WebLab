import React from 'react';
import './Signup.css';

const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="background-image"></div>
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Location 1" />
          <input type="text" placeholder="Location 2" />
          
          <button className="buttontt" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
