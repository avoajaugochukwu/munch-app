import Image from "next/image";
import { Check, Download, Wifi, Shield } from 'lucide-react';

export default function CTA() {
  return (
    <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-700" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Download Munch Today and 
              <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                See Your Food Differently
              </span>
            </h2>
            <p className="text-xl opacity-95 leading-relaxed">
              Join 50,000+ users who&apos;ve transformed their relationship with food. 
              It&apos;s free to download and takes seconds to get started!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com"
                className="group inline-flex items-center justify-center px-8 py-4 bg-black/90 backdrop-blur-sm text-white rounded-2xl hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              
              <a
                href="https://play.google.com"
                className="group inline-flex items-center justify-center px-8 py-4 bg-black/90 backdrop-blur-sm text-white rounded-2xl hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h11c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-11c-.83 0-1.5-.67-1.5-1.5zm10.94-12.8l-5.3 5.3 1.41 1.41 5.3-5.3c.78-.78.78-2.05 0-2.83l-5.3-5.3-1.41 1.41 5.3 5.31z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-500/20 rounded-xl">
                  <Download className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-lg">Free to download</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-500/20 rounded-xl">
                  <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-lg">No account required</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-yellow-500/20 rounded-xl">
                  <Wifi className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-lg">Works instantly</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-30" />
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop"
                alt="Woman using smartphone with healthy food"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl backdrop-blur-lg bg-opacity-90">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Live Now</span>
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">50,243</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}