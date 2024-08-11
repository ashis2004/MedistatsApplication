import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-teal-500 text-white dark:bg-gray-800 dark:text-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-6">
          <button 
            onClick={scrollToTop} 
            className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition flex items-center justify-center mx-auto"
          >
            <FaArrowUp className="mr-2" />
            Back to Top
          </button>
        </div>
        <div className="mb-6">
          <p>&copy; 2023 Medistats. All rights reserved.</p>
        </div>
        <div className="mb-6">
          <ul className="list-none p-0">
            <li className="inline-block mx-2">
              <a href="https://github.com/medistats" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300 transition">
                <FaGithub size={24} />
              </a>
            </li>
            <li className="inline-block mx-2">
              <a href="https://linkedin.com/in/medistats" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300 transition">
                <FaLinkedin size={24} />
              </a>
            </li>
            <li className="inline-block mx-2">
              <a href="https://twitter.com/medistats" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300 transition">
                <FaTwitter size={24} />
              </a>
            </li>
            <li className="inline-block mx-2">
              <a href="mailto:medistats@example.com" className="text-white hover:text-teal-300 transition">
                <IoIosMail size={24} />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-gray-200">
          <p>Medistats</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
