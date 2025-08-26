import Image from "next/image";
import { Camera, Eye, TrendingUp, ChevronRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Snap",
      description: "Take a photo of your meal or select from your gallery",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&h=800&fit=crop",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      title: "See",
      description: "Instantly see exercise equivalents for your food",
      icon: Eye,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "Balance",
      description: "Track your daily energy balance and make informed choices",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&h=800&fit=crop",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">How It Works</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            As Simple as Snap, See, Balance
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            No manual entry, no searching databases. Just take a photo and get instant insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-[450px] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    
                    <div className="absolute top-6 left-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl shadow-xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="text-6xl font-bold opacity-20 mb-2">{step.number}</div>
                      <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                      <p className="text-lg text-white/90 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                      <ChevronRight className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-20" />
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-100 dark:border-gray-700">
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div className="space-y-3">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">&lt; 4 sec</div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Analysis time</p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">95%</div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Accuracy rate</p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">1M+</div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Foods recognized</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}