import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);

      // Log the response for debugging
      console.log(data);

      if (data.success === false) {
        setError(true);
        toast.error(data.message || 'Failed to sign up. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      toast.success('Sign up successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        navigate('/sign-in');
      }, 2000); // Delay for 2 seconds
    } catch (error) {
      setLoading(false);
      setError(true);
      toast.error('Failed to sign up. Please try again later.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className='p-6 max-w-lg mx-auto mt-40 bg-white dark:bg-gray-900 rounded-lg shadow-md'>
      <ToastContainer />
      <h1 className='text-3xl font-semibold text-center mb-7 text-gray-900 dark:text-gray-100'>
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <input
          type='text'
          placeholder='Username'
          id='username'
          className='bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg p-3'
          onChange={handleChange}
          required
        />
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg p-3'
          onChange={handleChange}
          required
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg p-3'
          onChange={handleChange}
          required
        />
        <button
          disabled={loading}
          className='bg-gray-700 dark:bg-gray-600 text-white p-3 rounded-lg  font-bold hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        <OAuth />
      </form>
      <div className='flex gap-2 mt-5 justify-center'>
        <p className='text-gray-700 dark:text-gray-400'>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500 dark:text-blue-400 hover:underline'>Sign in</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5 text-center'>{error && 'Something went wrong!'}</p>
    </div>
  );
}
