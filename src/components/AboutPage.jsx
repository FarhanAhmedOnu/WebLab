import React from 'react';

const AboutPage = () => {
  const backgroundStyle = {
    backgroundImage: 'url(https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2021/11/05/fuchka3_1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    textAlign: 'center'
  };

  return (
    <div style={backgroundStyle}>
      <div style={cardStyle}>
        <h2>About Us</h2>
        <p>
        Welcome to our platform, where you can enjoy the diverse flavors of our campus community. We are dedicated to connecting you with a wide array of food shops and street food vendors, all within the convenience of a few clicks. Whether you're craving a quick bite between classes or looking for a hearty meal to fuel your late-night study sessions, we have you covered.
      </p>
      <p>
        Our mission is to make campus dining effortless, allowing you to explore the vibrant culinary scene right at your fingertips. With our user-friendly app, you can discover new tastes, support local vendors, and satisfy your cravings, all while experiencing the bustling food culture that makes our campus unique.
      </p>
      <p>
        Join us in celebrating the rich tapestry of flavors and cultures that come together on our campus. Let us be your guide to a seamless, satisfying, and delightful food journey, delivered straight to your door.
      </p>
      </div>
    </div>
  );
};

export default AboutPage;
