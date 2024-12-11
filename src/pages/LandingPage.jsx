import { Link } from "react-router-dom";
import { FaChartLine, FaPiggyBank, FaRegMoneyBillAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import logo from "../assets/logoWealthwise.png";

function LandingPage() {
  const facts = [
    "People who track their spending are 30% more likely to stick to their budget.",
    "Financial literacy improves decision-making and reduces stress about money.",
    "Saving even a small portion of your income regularly can lead to big results over time.",
    "Having a financial plan increases confidence in achieving long-term goals."
  ];

  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % facts.length);
    }, 5000); // Change fact every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [facts.length]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-financial-primary text-white py-4 shadow-md">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Finance Tracker Logo"
              className="w-10 h-10 mr-3 rounded-md"
            />
            <h1 className="text-2xl font-bold">WealthWise</h1>
          </div>

          {/* Navigation Links */}
          <nav>
            <Link
              to="/login"
              className="text-white hover:text-financial-accent transition px-4 py-2"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-white text-financial-primary px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img
              src="src/assets/carousel/image6.jpg"
              alt="Finance App Benefits"
              className="w-full h-100 object-cover rounded-lg shadow-md"
            />
            <div className="bg-financial-light text-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">How WealthWise Helps</h3>
              <ul className="list-disc list-inside">
                <li className="mb-2">Easily track expenses and stay organized.</li>
                <li className="mb-2">Get a visual view on your spending.</li>
                <li className="mb-2">Gain insights into your spending habits.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Did You Know Section */}
        <section className="py-6 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-yellow-100 text-gray-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2">Did You Know?</h3>
              <p className="text-lg font-medium">{facts[currentFactIndex]}</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Stat 1 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <FaChartLine className="text-financial-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Track Expenses</h3>
              <p className="text-gray-600 mt-2">
                Stay on top of your spending with detailed transaction tracking.
              </p>
            </div>
            {/* Stat 2 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <FaPiggyBank className="text-financial-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Grow Savings</h3>
              <p className="text-gray-600 mt-2">
                Plan and save for your financial goals with our easy-to-use tools.
              </p>
            </div>
            {/* Stat 3 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <FaRegMoneyBillAlt className="text-financial-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">Maximize Income</h3>
              <p className="text-gray-600 mt-2">
                Visualize and optimize your income streams for better cash flow.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-financial-primary text-white py-12 text-center">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold mb-4">Ready to Take Charge?</h3>
            <p className="text-lg text-gray-200 mb-6">
              Sign up today and start your journey to financial freedom.
            </p>
            <Link
              to="/signup"
              className="bg-white text-financial-primary px-6 py-3 rounded shadow-md text-lg hover:bg-gray-100 transition"
            >
              Create an Account
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">
          © 2024 WealthWise. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
