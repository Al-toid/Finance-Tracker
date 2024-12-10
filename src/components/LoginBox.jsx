import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext'; // Import dark mode context

const LoginBox = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode(); // Use dark mode context

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
      >
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <div className="mb-4">
          <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email
          </label>
          <input
            type="email"
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
            className={`w-full px-3 py-2 border rounded-md ${
              darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-50 text-gray-800'
            }`}
          />
        </div>

        <button
          className={`${
            darkMode ? 'bg-green-600' : 'bg-green-500'
          } text-white px-4 py-2 rounded-md w-full`}
        >
          Log In
        </button>
        <button
          className={`${
            darkMode ? 'bg-gray-800' : 'bg-black'
          } text-white px-4 py-2 rounded-md w-full`}
        >
          Forgot Password?
        </button>

        <button
          className={`${
            darkMode ? 'bg-green-600' : 'bg-green-500'
          } text-white px-4 py-2 rounded-md w-full`}
          onClick={() => navigate('/signup')}
        >
          New User? Sign up!
        </button>
      </form>
    </div>
  );
};

export default LoginBox;
