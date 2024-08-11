import React from 'react';
import heroImage from './assets/images/heroimage.jpg'; // Adjust the path as necessary

function HeroSection() {
  return (
    <div className="relative bg-teal-500 text-white dark:bg-gray-900 dark:text-gray-100 py-20 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-4 transition-transform transform hover:scale-105">
            Early Signals, Lifelong Impact: Detecting Childhood Disorders - <span className="text-yellow-200">Medistats</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed transition-opacity opacity-90 hover:opacity-100">
            Empowering parents to detect and address behavioral disorders in their children.
          </p>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-2">
            <li className="transition-transform transform hover:translate-x-2">Comprehensive behavioral analysis</li>
            <li className="transition-transform transform hover:translate-x-2">Easy-to-use platform</li>
            <li className="transition-transform transform hover:translate-x-2">Insights based on latest research</li>
            <li className="transition-transform transform hover:translate-x-2">Secure and confidential data handling</li>
            <li className="transition-transform transform hover:translate-x-2">Advanced ML Algorithms</li>
          </ul>
          <button className="bg-white text-teal-500 font-bold py-2 px-6 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition-transform transform hover:scale-105 mt-4">
            Get Started
          </button>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Hero"
            className="rounded-lg shadow-lg transform hover:scale-105 transition mt-4"
          />
        </div>
      </div>
      <div className="bottom-0 left-0 right-0 bg-teal-700 h-16 skew-y-2 transform -translate-y-8 mt-32"></div>
    </div>
  );
}

export default HeroSection;
