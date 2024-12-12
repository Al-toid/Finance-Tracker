import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../server/supabase.js';
import { useDarkMode } from "../context/DarkModeContext"; // Import dark mode context

const LoginBox = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode(); // Use dark mode context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    const { data: session, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
     // alert('Login successful!');
      navigate('/test');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full">Log In</button>
        <button
          type="button"
          className="bg-black text-white px-4 py-2 rounded-md w-full mt-4"
          onClick={() => navigate('/signup')}
        >
          New User? Sign up!
        </button>
      </form>
    </div>
  );
};

export default LoginBox;
