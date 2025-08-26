import Image from "next/image";

export default function Benefits() {
  const examples = [
    {
      food: "Latte ☕",
      calories: "190 cal",
      exercises: [
        { type: "Walking", duration: "15 min", icon: "🚶" },
        { type: "Running", duration: "7 min", icon: "🏃" },
        { type: "Yoga", duration: "25 min", icon: "🧘" }
      ],
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop"
    },
    {
      food: "Burger 🍔",
      calories: "650 cal",
      exercises: [
        { type: "Cycling", duration: "45 min", icon: "🚴" },
        { type: "Swimming", duration: "35 min", icon: "🏊" },
        { type: "Dancing", duration: "60 min", icon: "💃" }
      ],
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop"
    },
    {
      food: "Salad 🥗",
      calories: "320 cal",
      exercises: [
        { type: "Walking", duration: "30 min", icon: "🚶" },
        { type: "Tennis", duration: "20 min", icon: "🎾" },
        { type: "Gardening", duration: "40 min", icon: "🌱" }
      ],
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop"
    },
    {
      food: "Pizza Slice 🍕",
      calories: "285 cal",
      exercises: [
        { type: "Walking", duration: "28 min", icon: "🚶" },
        { type: "Basketball", duration: "18 min", icon: "🏀" },
        { type: "Hiking", duration: "22 min", icon: "🥾" }
      ],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perspective, Not Restriction
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Understanding &quot;Your burger = 45 min cycling&quot; is more relatable than &quot;650 calories&quot;. 
            Make informed choices without the guilt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((example, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={example.image}
                  alt={example.food}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{example.food}</h3>
                  <p className="text-sm opacity-90">{example.calories}</p>
                </div>
              </div>
              
              <div className="p-4 space-y-2">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                  Equals to:
                </p>
                {example.exercises.map((exercise, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-white dark:bg-gray-700 rounded-lg p-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{exercise.icon}</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {exercise.type}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                      {exercise.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-full px-8 py-4">
            <div className="text-2xl">💡</div>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              Pro Tip: Use &quot;exercise snacks&quot; - quick 15-minute activities to chip away at your daily surplus!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}