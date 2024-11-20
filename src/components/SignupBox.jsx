import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignupBox = () => {

  const navigate = useNavigate();

  //Separate state for each field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //form submition
  const handleSubmit = (e) => {
    e.preventDefault();

    //passworf validation/confirmation
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    //else, submit form
    console.log('Form Data:', { firstName, lastName, email, password });
    alert('Account created successfully!');
    navigate('/login'); //after we complete form, direct to login page
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange= {(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md" />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md w-full" >
          Sign up!
        </button>

        <button
          type="button"
          className="bg-black text-white px-4 py-2 rounded-md w-full mt-4"
          onClick={() => navigate('/login')} >

          Already a user? Login

        </button>
      </form>
    </div>
  );
};

export default SignupBox;