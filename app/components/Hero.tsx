import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Food in <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Perspective</span>,
                <br />
                Fitness in <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Balance</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                See your food in minutes, not numbers. Instantly translate any meal into relatable exercise durations with just a photo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors group"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              
              <a
                href="#download"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors group"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h11c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-11c-.83 0-1.5-.67-1.5-1.5zm10.94-12.8l-5.3 5.3 1.41 1.41 5.3-5.3c.78-.78.78-2.05 0-2.83l-5.3-5.3-1.41 1.41 5.3 5.31z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-violet-400 border-2 border-white dark:border-gray-900"
                  />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  50,000+ happy users
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=1200&fit=crop"
                alt="Healthy food bowl"
                width={400}
                height={600}
                className="rounded-3xl shadow-2xl mx-auto"
                priority
              />
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Buddha Bowl</p>
                <p className="text-2xl font-bold text-purple-600">45 min</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">cycling</p>
              </div>
              <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Or just</p>
                <p className="text-2xl font-bold text-green-600">60 min</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">walking</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 rounded-3xl blur-3xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}