import React from 'react';
import { CheckCircle } from 'lucide-react';

const Register = () => {
  const benefits = [
    'Network with industry professionals',
    'Access to exclusive events and workshops',
    'Contribute to environmental initiatives',
    'Learn about cutting-edge technology',
    'Be part of a global community',
  ];

  return (
    <section id="register" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Join Our <span className="text-green-400">Volunteer Program</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Make a difference by joining our volunteer program. We're looking for passionate
            individuals ready to contribute to a sustainable future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Volunteer Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Ready to Join?</h3>
            <p className="text-gray-300 mb-8">
              Fill out our volunteer registration form to get started on your journey with NFV Network.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeSWCqvqwrCqOaOpsnVrX-06k42PTYvqBt71u5U7ciqYby5eA/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 text-lg font-semibold text-black bg-green-400 rounded-lg hover:bg-green-500 transition-colors"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;