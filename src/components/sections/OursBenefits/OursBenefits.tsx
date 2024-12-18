import { Users, Dumbbell, Calculator, SmilePlus } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

function FeaturesSection() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Effortless Workout Logging',
      description:
        'Easily log your workouts and monitor your progress over time with our intuitive logging feature.',
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-white" />,
      title: 'Accurate Rep Counting',
      description:
        'Count your reps accurately with our app, ensuring consistency and improved performance.',
    },
    {
      icon: <Calculator className="w-8 h-8 text-white" />,
      title: 'Personalized Workout Plans',
      description:
        'AI-powered workout plans tailored to your fitness level, goals, and progress.',
    },
    {
      icon: <SmilePlus className="w-8 h-8 text-white" />,
      title: 'Calorie Calculation & Personalized Diet Plans',
      description:
        'Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl text-red-600 md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-10 ">
        Discover GymFluencer Benefits
      </h1>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className=" mb-2">
            Unlock your full potential with GymFluencer your personal fitness
          </h1>
          <p className="text-white">partner for progress and motivation</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Left Cards */}
          <div className="flex flex-col gap-8 lg:w-1/3">
            {features.slice(0, 2).map((feature, index) => (
              <Card key={index} className="bg-black border-zinc-800">
                <CardHeader>
                  <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-red-600 font-orbitron">
                    {feature.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 font-orbitron">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Center Phone */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-[300px] h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-[3rem]">
                <img
                  src="/images/Container.png"
                  alt="Fitness App Demo"
                  className="w-full h-full object-cover rounded-[3rem]"
                />
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-8 lg:w-1/3">
            {features.slice(2, 4).map((feature, index) => (
              <Card key={index} className="bg-black border-zinc-800">
                <CardHeader>
                  <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">
                    {feature.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
