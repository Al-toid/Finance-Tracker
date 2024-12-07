import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { supabase } from '../../server/supabase.js';

const SignupBox = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

const handleSignup = async (e) => {
  e.preventDefault();
  setError('');

  // Password validation
  if (password !== confirmPassword) {
    setError('Passwords do not match!');
    return;
  }

  // Step 1: Create user in Supabase Auth
  const { data: user, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    setError(authError.message);
    return;
  }

  // Step 2: Insert profile data into the `profiles` table
  const { error: profileError } = await supabase
    .from('profiles')
    .insert([
      {
        id: user.user.id, // Use the user ID returned by Supabase Auth
        first_name: firstName,
        last_name: lastName,
        email,
      },
    ]);

  if (profileError) {
    setError(profileError.message);
    return;
  }

  // Step 3: Redirect user to login page after successful signup
  alert('Account created successfully!');
  navigate('/login');
};


  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleSignup}>
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

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

        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full">
          Sign up!
        </button>
        <button
          type="button"
          className="bg-black text-white px-4 py-2 rounded-md w-full mt-4"
          onClick={() => navigate('/login')}
        >
          Already a user? Login
        </button>
      </form>
    </div>
  );
};

export default SignupBox;
