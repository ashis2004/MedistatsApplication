import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data));
        toast.error(data.message || 'Failed to sign in. Please try again.', {
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

      dispatch(signInSuccess(data));
      toast.success('Sign in successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        navigate('/');
      }, 2000); // Delay for 2 seconds
    } catch (error) {
      dispatch(signInFailure(error));
      toast.error('Failed to sign in. Please try again.', {
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
    <div className='p-6 max-w-lg mx-auto mt-40'>
      <ToastContainer />
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-gray-100 dark:bg-gray-800 p-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-gray-100 dark:bg-gray-800 p-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='bg-gray-700 dark:bg-gray-600 text-white p-3 rounded-lg  font-bold hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-500 dark:text-blue-400'>Sign up</span>
        </Link>
      </div>
      <p className='text-red-700 dark:text-red-400 mt-5'>
        {error ? error.message || 'Something went wrong!' : ''}
      </p>
    </div>
  );
}
