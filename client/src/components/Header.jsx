import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
// import { TbHealthRecognition } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";


import { FaHome, FaInfoCircle, FaQuestionCircle, FaUserCircle, FaSignInAlt, FaLifeRing } from 'react-icons/fa';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className={`${darkMode ? 'bg-dark-blue text-light' : 'bg-white text-dark'} shadow-md fixed top-0 w-full z-10 transition-colors duration-300`}>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/' className={`text-2xl font-bold flex items-center ${darkMode ? 'hover:text-light-blue' : 'hover:text-dark-blue'} transition-colors duration-300`}>
        <GiBrain 
 
        className='mr-2' /> Medistats
        </Link>
        <nav className='hidden md:flex gap-8 items-center'>
          <Link to='/' className={`${darkMode ? 'hover:text-light-blue' : 'hover:text-dark-blue'} flex items-center transition-colors duration-300`}>
            <FaHome className='mr-2' /> Home
          </Link>
          <Link to='/features' className={`${darkMode ? 'hover:text-light-blue' : 'hover:text-dark-blue'} flex items-center transition-colors duration-300`}>
            <FaInfoCircle className='mr-2' /> Features
          </Link>
          <Link to='/faq' className={`${darkMode ? 'hover:text-light-blue' : 'hover:text-dark-blue'} flex items-center transition-colors duration-300`}>
            <FaQuestionCircle className='mr-2' /> FAQ
          </Link>
          <Link to='/test' className={`${darkMode ? 'hover:text-light-blue' : 'hover:text-dark-blue'} flex items-center transition-colors duration-300`}>
            <FaUserCircle className='mr-2' /> Test
          </Link>
          {currentUser ? (
            <div className='relative'>
              <img
                src={currentUser.profilePicture}
                alt='profile'
                className='h-8 w-8 rounded-full object-cover cursor-pointer border-2 border-custom-blue hover:border-blue-500 transition'
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className={`absolute right-0 mt-2 w-48 ${darkMode ? 'bg-dark-gray' : 'bg-white'} rounded-md shadow-lg z-10 transition-colors duration-300`}>
                  <Link
                    to='/profile'
                    className={`block px-4 py-2 ${darkMode ? 'text-light hover:bg-dark-hover' : 'text-dark hover:bg-light-hover'} rounded-t-md transition-colors duration-300`}
                  >
                    Profile
                  </Link>
                  <Link
                    to='/profile'
                    className={`block px-4 py-2 ${darkMode ? 'text-light hover:bg-dark-hover' : 'text-dark hover:bg-light-hover'} transition-colors duration-300`}
                  >
                    Settings
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link to='/sign-in' className={`${darkMode ? 'hover:text-light-blue' : 'hover:text-dark-blue'} flex items-center transition-colors duration-300`}>
              <FaSignInAlt className='mr-2' /> Sign In
            </Link>
          )}
          <div className='flex items-center ml-4'>
            <span className='mr-2'>{darkMode ? 'Dark' : 'Light'} </span>
            <Toggle
              defaultChecked={darkMode}
              icons={{ checked: '🌙', unchecked: '🔆' }}
              onChange={() => setDarkMode(!darkMode)}
              className='toggle'
            />
          </div>
        </nav>
        <div className='md:hidden flex items-center'>
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className='p-2'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {dropdownOpen && (
        <nav className={`${darkMode ? 'bg-dark-blue text-light' : 'bg-white text-dark'} md:hidden transition-colors duration-300`}>
          <Link to='/' className={`block px-4 py-2 ${darkMode ? 'hover:bg-dark-hover' : 'hover:bg-light-hover'} transition-colors duration-300`}>
            <FaHome className='mr-2' /> Home
          </Link>
          <Link to='/features' className={`block px-4 py-2 ${darkMode ? 'hover:bg-dark-hover' : 'hover:bg-light-hover'} transition-colors duration-300`}>
            <FaInfoCircle className='mr-2' /> Features
          </Link>
          <Link to='/faq' className={`block px-4 py-2 ${darkMode ? 'hover:bg-dark-hover' : 'hover:bg-light-hover'} transition-colors duration-300`}>
            <FaQuestionCircle className='mr-2' /> FAQ
          </Link>
          <Link to='/test' className={`block px-4 py-2 ${darkMode ? 'hover:bg-dark-hover' : 'hover:bg-light-hover'} transition-colors duration-300`}>
            <FaUserCircle className='mr-2' /> Test
          </Link>
          <div className='flex items-center ml-4'>
            <span className='mr-2'>{darkMode ? 'Dark' : 'Light'} </span>
            <Toggle
              defaultChecked={darkMode}
              icons={{ checked: '🌙', unchecked: '🔆' }}
              onChange={() => setDarkMode(!darkMode)}
              className='toggle'
            />
          </div>
          {currentUser ? (
            <>
              <Link to='/profile' className={`block px-4 py-2 ${darkMode ? 'hover:bg-dark-hover' : 'hover:bg-light-hover'} transition-colors duration-300`}>
                Profile
              </Link>
              <Link to='/profile' className={`block px-4 py-2 ${darkMode ? 'hover:bg-dark-hover' : 'hover:bg-light-hover'} transition-colors duration-300`}>
                Settings
              </Link>
            </>
          ) : (
            <Link to='/sign-in' className={`block px-4 py-2 ${darkMode ? 'hover:bg-dark-hover' : 'hover:bg-light-hover'} transition-colors duration-300`}>
              <FaSignInAlt className='mr-2' /> Sign In
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
