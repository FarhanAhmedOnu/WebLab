import React from 'react';

const Footer = () => {
  return (
    <div style={footerStyle}>
      <div style={linkContainerStyle}>
        <a href="/contact">Contact Us</a>
        <a href="/about">___About Us</a>
        <a href="/SellerDashboard">___Partner with Us</a>
        <a href="/manage">_____Manage Your ID</a>
      </div>
      <p style={textStyle}>
        © 2023 Onu, Sudipta, Nasrin Web Lab final.
      </p>
    </div>
  );
};

const footerStyle = {
  backgroundColor: 'gray',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const linkContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '10px',
  color : 'yellow'
};

const textStyle = {
  fontSize: '14px',
  
};

export default Footer;
