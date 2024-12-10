import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext'; // Import dark mode context

const SignupBox = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode(); // Use dark mode context

  // Separate state for each field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation/confirmation
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Else, submit form
    console.log('Form Data:', { firstName, lastName, email, password });
    alert('Account created successfully!');
    navigate('/login'); // After we complete form, direct to login page
  };

  return (
    <div
      className={`flex items-center justify-center h-screen ${
        darkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <form
        className={`${
          darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
        } p-6 rounded shadow-md w-96`}
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

        <div className="mb-4">
          <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md ${
              darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-50 text-gray-800'
            }`}
          />
        </div>

        <div className="mb-4">
          <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md ${
              darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-50 text-gray-800'
            }`}
          />
        </div>

        <div className="mb-4">
          <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md ${
              darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-50 text-gray-800'
            }`}
          />
        </div>

        <div className="mb-4">
          <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md ${
              darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-50 text-gray-800'
            }`}
          />
        </div>

        <div className="mb-4">
          <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md ${
              darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-50 text-gray-800'
            }`}
          />
        </div>

        <button
          type="submit"
          className={`${
            darkMode ? 'bg-green-600' : 'bg-green-500'
          } text-white px-4 py-2 rounded-md w-full`}
        >
          Sign up!
        </button>

        <button
          type="button"
          className={`${
            darkMode ? 'bg-gray-800' : 'bg-black'
          } text-white px-4 py-2 rounded-md w-full mt-4`}
          onClick={() => navigate('/login')}
        >
          Already a user? Login
        </button>
      </form>
    </div>
  );
};

export default SignupBox;
