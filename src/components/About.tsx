import React from 'react';
import { Leaf, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">
            About NFV Network
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            NFV Network, in collaboration with Greenpill Network, is leading a volunteer-driven
            initiative to create a sustainable and technologically advanced future. Join us in
            making a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Leaf className="w-8 h-8" />,
              title: 'Environmental Impact',
              description: 'Be part of initiatives that directly contribute to environmental sustainability.',
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: 'Community Building',
              description: 'Connect with like-minded individuals passionate about technology and sustainability.',
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: 'Global Movement',
              description: 'Join a worldwide network of volunteers working towards a greener future.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-colors"
            >
              <div className="text-green-400 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;