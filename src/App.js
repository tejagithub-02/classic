import React, { useEffect, useState } from 'react';

import Preloader from './components/Preloader';


import Banner from './components/Banner';
import Dishes from './components/Dishes';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import About from './components/About';
import Video from './components/Video';
import Menu from './components/Menu';
import Events from './components/Events';
import Contact from './components/Contact';
 import EnquiryForm from './components/EnquiryForm';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';

import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
      <>
        <Banner/>
        <Dishes/>
        <Services/>
        <BookingForm/>
        <About/>
        <Video/>
        <Menu/>
        { <Events/> }
        { <Contact/> }
          {<EnquiryForm/> } 
        {<Testimonials/> } 
        {<Clients/> }
      
        {<Footer/>}
       </>
      )}
    </>
  );
};

export default App;
