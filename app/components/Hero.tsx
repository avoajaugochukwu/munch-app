import Image from "next/image";
import { Star, Users, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-white dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20 animate-pulse" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Revolutionary Food Tracking</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Food in</span>
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Perspective
                </span>
                <span className="text-gray-900 dark:text-white">Fitness in</span>
                <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Balance
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                See your food in minutes, not numbers. Instantly translate any meal into relatable exercise durations with just a photo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#download"
                className="group relative inline-flex items-center justify-center px-8 py-5 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-5 rounded-2xl border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                See How It Works
              </a>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-3 border-white dark:border-gray-900 shadow-lg"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  50,000+ happy users
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[3rem] blur-3xl opacity-30 animate-pulse" />
              
              <div className="relative bg-white dark:bg-gray-800 rounded-[3rem] p-8 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=1200&fit=crop"
                  alt="Healthy food bowl"
                  width={400}
                  height={600}
                  className="rounded-[2rem] shadow-xl mx-auto"
                  priority
                />
                
                <div className="absolute top-12 -right-8 bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-2xl backdrop-blur-lg bg-opacity-95 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                      <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Buddha Bowl</p>
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">45 min</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">cycling to burn</p>
                </div>
                
                <div className="absolute bottom-12 -left-8 bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-2xl backdrop-blur-lg bg-opacity-95 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-xl">
                      <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Or just</p>
                  </div>
                  <p className="text-3xl font-bold text-green-600">60 min</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">of walking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}