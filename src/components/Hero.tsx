import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Join the Movement:
            <span className="block text-green-400">Volunteer for a Greener Future</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            NFV Network | Greenpill Volunteer Registration | Feb 18–22, 2025
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdvrJRqtPTGf19kVgXDypwuZkYj7s79uekQ6P0PjmBDqyVQgg/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-green-400 rounded-lg hover:bg-green-500 transition-colors"
          >
            Register Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
