"use client";

import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content: "Finally, an app that speaks my language! Seeing that my latte equals 15 minutes of walking makes it so much easier to make smart choices throughout the day.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Busy Professional",
      content: "The visual tracking is a game-changer. I can see my weekly balance at a glance and adjust my activities accordingly. No more guilt, just awareness!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emma Davis",
      role: "Yoga Instructor",
      content: "I love how it includes yoga and other activities beyond just running. It helps me understand how my practice contributes to my overall energy balance.",
      rating: 5,
      avatar: "ED"
    },
    {
      name: "Alex Rodriguez",
      role: "College Student",
      content: "Super fast and accurate! Takes seconds to know if I should take the stairs or hit the gym after that pizza. The privacy aspect is also huge for me.",
      rating: 5,
      avatar: "AR"
    },
    {
      name: "Lisa Thompson",
      role: "Nutritionist",
      content: "I recommend Munch to all my clients. It removes the intimidation factor of calorie counting and makes the connection between food and movement intuitive.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      role: "Weekend Warrior",
      content: "The exercise variety is amazing - from gardening to HIIT. It shows me that staying active doesn't always mean hitting the gym.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 3
    );
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by 50,000+ Happy Users
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands who&apos;ve transformed their relationship with food and fitness
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex / 3) * 100}%)` }}
            >
              <div className="grid md:grid-cols-3 gap-6 w-full flex-shrink-0">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Previous testimonials"
            >
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Next testimonials"
            >
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full px-4 py-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">4.9 out of 5 stars on App Store</span>
          </div>
        </div>
      </div>
    </section>
  );
}