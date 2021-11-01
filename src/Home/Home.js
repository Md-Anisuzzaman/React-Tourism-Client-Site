import React from 'react';
import Banner from '../Home/Banner';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;