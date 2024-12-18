import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';

// Image URLs

const images = [
  'https://framerusercontent.com/images/y3OEsrPpF9ZlVWFn8txqhafXYY.png',

  'https://framerusercontent.com/images/yuM4HjReun2ffEbHgraaGxf4Gl0.png',

  'https://framerusercontent.com/images/WaP2lGu3X4zc8d5kCwZyhH3lDI.png',
];

export const Priorities = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle through images every 3 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Adjust the timing here

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-between px-20 bg-black text-white">
      {/* Left Content */}

      <div className="flex-1 space-y-8">
        <h1 className="text-6xl font-bold text-red-600">
          YOUR
          <br />
          PERSONALIZED
          <br />
          FITNESS HUB
        </h1>

        <div className="space-y-6 text-lg">
          <p>
            Personalized workout routines tailored to your goals and preferences
          </p>

          <p>
            Get expert guidance with virtual coaching sessions, available
            anytime, anywhere.
          </p>

          <p>
            Track your fitness journey with detailed analytics, goal setting,
            and achievements.
          </p>
        </div>
      </div>

      {/* Right Animated Panel */}

      <div className="flex-1 ml-10 relative h-[425px] w-[300px] overflow-hidden rounded-lg shadow-lg">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{
              y: currentImageIndex === index ? 0 : '100%',

              opacity: currentImageIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </div>
  );
};
