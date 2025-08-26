export default function Features() {
  const features = [
    {
      icon: "📸",
      title: "Instant Food Recognition",
      description: "AI-powered photo analysis identifies your meal in under 4 seconds"
    },
    {
      icon: "🏃",
      title: "30+ Exercise Types",
      description: "Convert calories to walking, running, cycling, yoga, HIIT, and more"
    },
    {
      icon: "📊",
      title: "Visual Energy Balance",
      description: "Track daily and weekly balance with intuitive, colorful charts"
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description: "All data stays on your device - no accounts, no cloud storage needed"
    },
    {
      icon: "🌍",
      title: "Bilingual Support",
      description: "Available in English and French for broader accessibility"
    },
    {
      icon: "📤",
      title: "Social Sharing",
      description: "Export results as beautiful images to share your progress"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Finally Understand What Your Food Really Means
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transform abstract calorie counts into tangible exercise equivalents, making healthy decisions intuitive and guilt-free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-10 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Zero Friction Experience</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            No sign-ups, no manual entry, just snap and know. Get started in seconds and make smarter food choices immediately.
          </p>
        </div>
      </div>
    </section>
  );
}