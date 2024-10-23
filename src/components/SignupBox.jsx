import React from 'react';


const SignupBox = () => {

  return (

    <div className="flex items-center justify-center h-screen">

      <form className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded-md" />
        </div>

        <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full">Sign up!</button>
        <button className="bg-black text-white px-4 py-2 rounded-md w-full">Already a user? Login</button>
    

      </form>
    </div>
  );
};

export default SignupBox;
