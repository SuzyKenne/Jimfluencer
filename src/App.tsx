import React from 'react';
import Footer from './components/sections/Footer/Footer';
import { faqs } from './utils/data';
import Faqs from './components/sections/Faqs/Faqs';
import OursBenefits from './components/sections/OursBenefits/OursBenefits';
import Navbar from './components/sections/Navbar/Navbar';
import { Hero } from './components/sections/Hero/Hero';
import Statistics from './components/sections/Statistics/Statistics';
import { Mission } from './components/sections/Mission/Mission';
// import Blog from './components/sections/Blog/Blog';
import { Priorities } from './components/sections/Priorities/Priorities';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mission />
      <Statistics />
      <Priorities />
      <OursBenefits />
      {/* <Blog /> */}
      <Faqs faqs={faqs} />
      <Footer email="hello@gym.birlaventures.com" />
    </div>
  );
};

export default App;
