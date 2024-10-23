
import React from 'react';


const LoginBox = () => {

  return (

    <div className="flex items-center justify-center h-screen">

      <form className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded-md" />
        </div>

        <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full">Log In</button>
        <button className="bg-black text-white px-4 py-2 rounded-md w-full">forgot Password?</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full">New User? sign up!</button>

      </form>
    </div>
  );
};

export default LoginBox;