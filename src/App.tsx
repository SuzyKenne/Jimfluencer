import React from 'react';
import Footer from './components/sections/Footer/Footer';
import { faqs } from './utils/data';
import Faqs from './components/sections/Faqs/Faqs';

const App: React.FC = () => {
  return (
    <div>
      {/* Your app content */}
      <Faqs faqs={faqs}/>
      <Footer email="hello@gym.birlaventures.com" />
    </div>
  );
};

export default App;
