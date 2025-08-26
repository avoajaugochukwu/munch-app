import Image from "next/image";
import { PersonStanding, Bike, Activity, Lightbulb } from 'lucide-react';

export default function Benefits() {
  const examples = [
    {
      food: "Latte",
      calories: "190 cal",
      exercises: [
        { type: "Walking", duration: "15 min", icon: "walking" },
        { type: "Running", duration: "7 min", icon: "running" },
        { type: "Yoga", duration: "25 min", icon: "yoga" }
      ],
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop"
    },
    {
      food: "Burger",
      calories: "650 cal",
      exercises: [
        { type: "Cycling", duration: "45 min", icon: "cycling" },
        { type: "Swimming", duration: "35 min", icon: "swimming" },
        { type: "Dancing", duration: "60 min", icon: "dancing" }
      ],
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop"
    },
    {
      food: "Salad",
      calories: "320 cal",
      exercises: [
        { type: "Walking", duration: "30 min", icon: "walking" },
        { type: "Tennis", duration: "20 min", icon: "tennis" },
        { type: "Gardening", duration: "40 min", icon: "gardening" }
      ],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop"
    },
    {
      food: "Pizza Slice",
      calories: "285 cal",
      exercises: [
        { type: "Walking", duration: "28 min", icon: "walking" },
        { type: "Basketball", duration: "18 min", icon: "basketball" },
        { type: "Hiking", duration: "22 min", icon: "hiking" }
      ],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop"
    }
  ];

  const getExerciseIcon = (type: string) => {
    const icons: { [key: string]: JSX.Element } = {
      walking: <PersonStanding className="w-5 h-5" />,
      running: <Activity className="w-5 h-5" />,
      cycling: <Bike className="w-5 h-5" />,
      swimming: <Activity className="w-5 h-5" />,
      dancing: <Activity className="w-5 h-5" />,
      tennis: <Activity className="w-5 h-5" />,
      gardening: <Activity className="w-5 h-5" />,
      basketball: <Activity className="w-5 h-5" />,
      hiking: <PersonStanding className="w-5 h-5" />,
      yoga: <PersonStanding className="w-5 h-5" />
    };
    return icons[type] || <Activity className="w-5 h-5" />;
  };

  return (
    <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Perspective, Not Restriction
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Understanding &quot;Your burger = 45 min cycling&quot; is more relatable than &quot;650 calories&quot;. 
            Make informed choices without the guilt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={example.image}
                    alt={example.food}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{example.food}</h3>
                    <p className="text-sm opacity-90 mt-1">{example.calories}</p>
                  </div>
                </div>
                
                <div className="p-5 space-y-3">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Equals to:
                  </p>
                  {example.exercises.map((exercise, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-3 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white">
                          {getExerciseIcon(exercise.icon)}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {exercise.type}
                        </span>
                      </div>
                      <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {exercise.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative inline-flex items-center gap-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-8 py-5 shadow-xl">
              <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full text-white">
                <Lightbulb className="w-6 h-6" />
              </div>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                Pro Tip: Use &quot;exercise snacks&quot; - quick 15-minute activities to chip away at your daily surplus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}