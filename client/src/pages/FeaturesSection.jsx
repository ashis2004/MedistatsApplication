import React from 'react';
import { FaChartLine, FaUsers, FaBook, FaLock, FaClock, FaHeadset } from 'react-icons/fa';

function FeaturesSection() {
  const features = [
    {
      title: 'Comprehensive Analysis',
      description: 'Detailed insights into children’s behavioral patterns.',
      icon: <FaChartLine />,
    },
    {
      title: 'User-Friendly Interface',
      description: 'Designed for ease of use by parents and caregivers.',
      icon: <FaUsers />,
    },
    {
      title: 'Evidence-Based Recommendations',
      description: 'Recommendations based on the latest research in child psychology.',
      icon: <FaBook />,
    },
    {
      title: 'Secure Data Handling',
      description: 'Ensuring confidentiality and privacy of user data.',
      icon: <FaLock />,
    },
    {
      title: 'Real-Time Monitoring',
      description: 'Track behavioral changes and progress over time.',
      icon: <FaClock />,
    },
    {
      title: 'Professional Support',
      description: 'Access to experts for personalized advice and support.',
      icon: <FaHeadset />,
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-100 dark:bg-gray-900 ">
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-5xl md:text-5xl font-bold mb-6 text-center text-teal-500 dark:text-teal-300">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white shadow-md rounded-lg p-8 text-center dark:bg-gray-700 dark:text-gray-100 transition-transform transform hover:scale-105">
              <div className="text-teal-500 dark:text-teal-300 mb-4 text-4xl">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-teal-500 dark:text-teal-300">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
