import { useState } from 'react';

import { Dialog, DialogContent } from '@/components/ui/dialog';

import { useEffect, useRef } from 'react';

import { useInView } from 'framer-motion';

const NumberAnimation = ({
  end,

  duration = 2000,
}: {
  end: number;

  duration?: number;
}) => {
  const numberRef = useRef<HTMLSpanElement>(null);

  const isInView = useInView(numberRef, { once: true });

  useEffect(() => {
    if (isInView && numberRef.current) {
      let start = 0;

      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          start = end;

          clearInterval(timer);
        }

        numberRef.current!.textContent = `${Math.floor(start)}${
          end >= 1000 ? 'k+' : '+'
        }`;
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={numberRef} className="text-7xl font-bold text-white">
      0
    </span>
  );
};

export const Statistics = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  // Add effect to handle body class when modal opens/closes

  useEffect(() => {
    if (videoOpen) {
      document.body.style.overflow = 'hidden';

      document.body.style.paddingRight = '0px';
    } else {
      document.body.style.overflow = '';

      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';

      document.body.style.paddingRight = '';
    };
  }, [videoOpen]);

  const stats = [
    {
      number: 463,

      description: 'Workouts logged and progress tracked every month',
    },

    {
      number: 163,

      description: 'Fitness enthusiasts connected through our platform',
    },

    {
      number: 13,

      description: 'Countries where GymFluencer is making an impact',
    },
  ];

  return (
    <section className="bg-[#0B0B0B] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4 px-4 relative">
              {index !== 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800 hidden md:block" />
              )}

              <NumberAnimation end={stat.number} />

              <p className="text-gray-400 text-lg">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-20 px-4">
        <div className="relative aspect-video rounded-2xl overflow-hidden group">
          <img
            src="https://framerusercontent.com/images/4LUsGH18LoMVPIiR5vKLiJSic0.png"
            alt="Fitness Video Thumbnail"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300">
            <button
              onClick={() => setVideoOpen(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4">
                  <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-[ping_1.5s_ease-out_infinite]" />

                  <div className="absolute inset-0 rounded-full border-2 border-white/70" />
                </div>

                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-8 h-8"
                  >
                    <path d="M8 5.14v14.72L19 12 8 5.14z" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen} modal={true}>
        <DialogContent
          className="w-[90%] mx-auto md:max-w-4xl p-0 overflow-hidden bg-transparent border-0 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ margin: 0 }}
        >
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            {isPlaying ? (
              <iframe
                src="https://www.youtube.com/embed/pznrAWMhahA?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1"
                className="w-full h-full"
                allowFullScreen
                allow="autoplay"
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src="https://framerusercontent.com/images/4LUsGH18LoMVPIiR5vKLiJSic0.png"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />

                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-14 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-8 h-8"
                    >
                      <path d="M8 5.14v14.72L19 12 8 5.14z" />
                    </svg>
                  </div>
                </button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Statistics;
