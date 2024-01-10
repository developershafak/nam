import React from 'react';
import Navbarr from './component/Navbarr';
import Footer from './component/Footer';
// Import Swiper React components
import './index.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import Article from './component/Article';
const App = () => {
  return (
    <>
      <Navbarr />
      <Article />


      {/* <Footer /> */}
    </>
  );
};

export default App;
