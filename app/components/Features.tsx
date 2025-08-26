import { Camera, Activity, BarChart3, Lock, Globe, Share2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Camera,
      title: "Instant Food Recognition",
      description: "AI-powered photo analysis identifies your meal in under 4 seconds",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Activity,
      title: "30+ Exercise Types",
      description: "Convert calories to walking, running, cycling, yoga, HIIT, and more",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Visual Energy Balance",
      description: "Track daily and weekly balance with intuitive, colorful charts",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "All data stays on your device - no accounts, no cloud storage needed",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Bilingual Support",
      description: "Available in English and French for broader accessibility",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Share2,
      title: "Social Sharing",
      description: "Export results as beautiful images to share your progress",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Finally Understand What Your Food Really Means
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform abstract calorie counts into tangible exercise equivalents, making healthy decisions intuitive and guilt-free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-20" />
          <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-12 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Zero Friction Experience</h3>
            <p className="text-lg opacity-95 max-w-2xl mx-auto leading-relaxed">
              No sign-ups, no manual entry, just snap and know. Get started in seconds and make smarter food choices immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}