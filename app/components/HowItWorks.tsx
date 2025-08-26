import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Snap",
      description: "Take a photo of your meal or select from your gallery",
      image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&h=800&fit=crop"
    },
    {
      number: "2",
      title: "See",
      description: "Instantly see exercise equivalents for your food",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop"
    },
    {
      number: "3",
      title: "Balance",
      description: "Track your daily energy balance and make informed choices",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&h=800&fit=crop"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            As Simple as Snap, See, Balance
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            No manual entry, no searching databases. Just take a photo and get instant insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={400}
                  height={500}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-900 text-purple-600 text-xl font-bold rounded-full shadow-lg">
                    {step.number}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/90">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-purple-400 z-10">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">&lt; 4 sec</div>
              <p className="text-gray-600 dark:text-gray-300">Analysis time</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-gray-600 dark:text-gray-300">Accuracy rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
              <p className="text-gray-600 dark:text-gray-300">Foods recognized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}