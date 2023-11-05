// import React, { useState, useEffect } from 'react';

// const Slideshow = () => {
//   const images = [
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDszvbdgTM1zlRJ9iVR5OgAxg60qfwHNRfhSk-ygqpw&s',
//     'https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0',
//     'https://st3.depositphotos.com/1194063/15070/i/450/depositphotos_150709644-stock-photo-various-herbs-and-spices.jpg'
//   ];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 10000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const backgroundImageStyle = {
//     backgroundImage: `url(${images[currentImageIndex]})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     width: '100vw',
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center'
//   };

//   const buttonStyle = {
//     backgroundColor: 'black',
//     color: 'white',
//     padding: '5px 10px',
//     margin: '5px'
//   };

//   return (
//     <div style={backgroundImageStyle}>
//       <h1 style={{ color: 'white', background: 'Black'}}>Welcome to JU FoodHub. Start ordering NOW!</h1>
//       <div>
//       <a href="/Shop" style={buttonStyle}>
//       Order Now!
//       </a>
//         <a href="/AboutPage" style={buttonStyle}>
//           About Us
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Slideshow;
import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const images = [
    'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg',
    'https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1000&format=pjpg&exif=0&iptc=0',
    'https://st3.depositphotos.com/1194063/15070/i/450/depositphotos_150709644-stock-photo-various-herbs-and-spices.jpg'

  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  const welcomeTextStyle = {
    color: 'white',
    backgroundColor:'black',
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    margin: '10px',
    textAlign: 'center'
  };

  const handleCardClick = (link) => {
    window.location.href = link;
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div style={welcomeTextStyle}>
        Welcome to JU FoodHub. Start ordering NOW!
        </div>
        <div style={cardContainerStyle}>
          <div
            style={cardStyle}
            onClick={() => handleCardClick('/Shop')}
          >
            <img
              height={200}
              width={200}
              src="https://static.wixstatic.com/media/f319d7_489433df09914bfd8ed48e7f497e2bf6~mv2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80,enc_auto/file.jpg"
              alt="Order Now!"
              style={{ marginBottom: '10px' }}
            />
            <p>Order Now</p>
          </div>
          <div
            style={cardStyle}
            onClick={() => handleCardClick('/AboutPage')}
          >
            <img
              height={200}
              width={200}
              src="https://images.prothomalo.com/prothomalo-english%2Fimport%2Fmedia%2F2017%2F10%2F08%2F3bb09aa59f432dd5a38003b983d891f3-JU.jpg?auto=format%2Ccompress&w=400&dpr=2.6"
              alt="About Us"
              style={{ marginBottom: '10px' }}
            />
            <p>About Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
