import { BackgroundOverlay } from '../BackgroundOverlay/BackgroundOverlay';

import { ScrollingText } from '../ScrollingText/ScrollingText';

import TrustedUsers from '../TrustedUsers/TrustedUsers';

import Navbar from '../Navbar/Navbar';

export const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundOverlay />

      <div className="relative z-10">
        <Navbar />

        <div className="w-full mx-auto px-4 pt-24">
          <div className="flex flex-col items-center text-center">
            <div className="my-8 bg-[#28282c] p-2 rounded-full">
              <TrustedUsers />
            </div>

            <h1 className="font-orbitron font-black text-[#eb0000] text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Track Your Fitness
              <br />
              Journey
            </h1>

            <p className="text-gray-300 font-bold max-w-2xl text-lg lg:text-xl mb-8">
              Discover the ultimate fitness companion with GymFluencer.
              Effortlessly log your workouts, count reps, and track calories
              burned. Stay motivated and achieve your goals with ease.
            </p>

            <ScrollingText />
          </div>
        </div>
      </div>
    </div>
  );
};
