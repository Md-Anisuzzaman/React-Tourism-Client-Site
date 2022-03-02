import React from 'react';
import Banner from '../Home/Banner';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import AddReview from '../AddReview/AddReview';
import Reviews from '../Review/Review';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;