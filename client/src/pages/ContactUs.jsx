import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactImage from './assets/images/contactus.avif';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('Medistats_01234', 'template_uk90jes', form.current, 'q-2TIqjiSa7Uo8SpU')
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          toast.error('Failed to send message. Please try again later.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <ToastContainer />
      <div className="max-w-5xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden md:flex md:space-x-8">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-8 text-teal-500 dark:text-teal-300">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-mm font-semibold">Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-mm font-semibold">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-mm font-semibold">Message</label>
              <textarea
                name="message"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="6"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Image Section */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${contactImage})` }}
        ></div>
      </div>
    </div>
  );
}
