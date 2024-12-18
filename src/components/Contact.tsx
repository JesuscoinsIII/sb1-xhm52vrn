import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in <span className="text-green-400">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about volunteering? We're here to help! Reach out to us through any
            of the following channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Mail className="w-6 h-6" />,
              title: 'Email',
              info: 'contact@nfvnetwork.xyz',
            },
            {
              icon: <MapPin className="w-6 h-6" />,
              title: 'Location',
              info: 'Global / Remote',
            },
            {
              icon: <Phone className="w-6 h-6" />,
              title: 'Social',
              info: '@NFVNetwork',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors"
            >
              <div className="text-green-400 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;