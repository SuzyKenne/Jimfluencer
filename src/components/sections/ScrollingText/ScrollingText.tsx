import { motion } from 'framer-motion';

const words = [
  'Motivation',

  'Progress',

  'Fitness',

  'Transformation',

  'Work',

  'Community',

  'Strength',
];

export const ScrollingText = () => {
  return (
    <div className="w-full relative overflow-hidden mt-6 ">
      {/* Top row - White text */}

      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{
          x: {
            repeat: Infinity,

            repeatType: 'loop',

            duration: 25,

            ease: 'linear',
          },
        }}
        className="flex whitespace-nowrap gap-6 mb-4"
      >
        {[...Array(3)].map((_, i) => (
          <div key={`top-${i}`} className="flex gap-6">
            {words.map((word, index) => (
              <span
                key={`top-word-${index}`}
                className="flex items-center gap-6"
              >
                <span className="text-5xl lg:text-6xl font-orbitron text-white font-medium">
                  {word}
                </span>

                <span className="text-5xl lg:text-6xl text-white font-orbitron">
                  /
                </span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Bottom row - Red text */}

      <motion.div
        animate={{ x: [-2000, 0] }}
        transition={{
          x: {
            repeat: Infinity,

            repeatType: 'loop',

            duration: 25,

            ease: 'linear',
          },
        }}
        className="flex whitespace-nowrap gap-6"
      >
        {[...Array(3)].map((_, i) => (
          <div key={`bottom-${i}`} className="flex gap-6">
            {words.map((word, index) => (
              <span
                key={`bottom-word-${index}`}
                className="flex items-center gap-6"
              >
                <span className="text-5xl lg:text-6xl font-orbitron text-[#eb0000]/75 font-medium">
                  {word}
                </span>

                <span className="text-5xl lg:text-6xl text-[#eb0000]/75 font-orbitron">
                  /
                </span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
