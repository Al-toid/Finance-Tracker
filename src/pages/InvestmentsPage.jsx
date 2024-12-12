import Navbar from '../components/Navbar';
import InvestmentGraph from '../components/InvestmentGraph';
import { useState } from 'react';
import RiskForm from '../components/RiskForm';


function InvestmentsPage() {
  const [budget, setBudget] = useState(100); // Initial budget value
  const [years, setYears] = useState(10); // Initial years value
  const [growthRate, setGrowthRate] = useState(5); // Initial growth rate
  const [showForm, setShowForm] = useState(false); // Manage form visibility

  let graphOptions = {
    interaction: {
      intersect: false,
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        type: 'linear',
      },
      y: {
        min: 0,
      },
    },
  };

  return (
    <div className="bg-[#F5F5F5] dark:bg-gray-900 dark:text-white h-full">
      <Navbar />
      <br></br>
      {/* Investment Strategy Overview */}
      <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Investment Strategy Overview</h2>
        <p>
          The investment strategy you choose will significantly impact the
          long-term growth of your investment. Below are descriptions of three
          investment strategies:
        </p>

        {/* Aggressive Strategy */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Aggressive Strategy</h3>
          <div className="flex items-center space-x-4">
            <div
              className="bg-green-600 text-center text-white p-2 rounded"
              style={{ width: '80%' }}
            >
              80% Stocks
            </div>
            <div
              className="bg-green-400 text-center text-white p-2 rounded"
              style={{ width: '20%' }}
            >
              20% Bonds
            </div>
          </div>
          <p className="mt-4">
            This strategy is designed for investors who are comfortable with
            high risk and aim for higher returns. It focuses heavily on stocks,
            which offer the potential for growth but come with increased
            volatility.
          </p>
          <p className="mt-2">
            <strong>10-Year Projection:</strong> Average: +6.5%, Low: +2.0%,
            High: +16.0%
          </p>
        </div>

        {/* Moderate Strategy */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Moderate Strategy</h3>
          <div className="flex items-center space-x-4">
            <div
              className="bg-green-600 text-center text-white p-2 rounded"
              style={{ width: '60%' }}
            >
              60% Stocks
            </div>
            <div
              className="bg-green-400 text-center text-white p-2 rounded"
              style={{ width: '40%' }}
            >
              40% Bonds
            </div>
          </div>
          <p className="mt-4">
            This strategy aims to balance risk and return by investing in both
            stocks and bonds. It is suitable for investors willing to accept
            moderate risk and return potential.
          </p>
          <p className="mt-2">
            <strong>10-Year Projection:</strong> Average: +5.7%, Low: +0.5%,
            High: +11.4%
          </p>
        </div>

        {/* Conservative Strategy */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Conservative Strategy</h3>
          <div className="flex items-center space-x-4">
            <div
              className="bg-green-600 text-center text-white p-2 rounded"
              style={{ width: '40%' }}
            >
              40% Stocks
            </div>
            <div
              className="bg-green-400 text-center text-white p-2 rounded"
              style={{ width: '60%' }}
            >
              60% Bonds
            </div>
          </div>
          <p className="mt-4">
            This strategy focuses on minimizing risk by investing a larger
            portion in bonds and less in stocks. It is ideal for investors who
            prioritize stability and lower risk.
          </p>
          <p className="mt-2">
            <strong>10-Year Projection:</strong> Average: +5.0%, Low: -1.4%,
            High: +9.0%
          </p>
        </div>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mb-4">
        <button
          className="bg-green-300 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-800 text-black dark:text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowForm(!showForm)}
        >
          See your potential growth
        </button>
      </div>

      {showForm && (
        <div className="flex justify-center">
          <div className="w-full sm:w-[85%] md:w-[85%]">
            <RiskForm
              budget={budget} // Pass current budget to form
              years={years} // Pass current years to form
              growthRate={growthRate} // Pass current growth rate to form
              setGrowthRate={setGrowthRate} // Pass function to update growth rate
              setYears={setYears} // Pass function to update years
              setBudget={setBudget} // Pass function to update budget
            />
          </div>
        </div>
      )}

      {/* Centered Graph with Responsive Width */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full sm:w-[70vw] md:w-[75vw] lg:w-[70vw] h-[50vh] lg:h-[63vh]">
          <InvestmentGraph
            option={graphOptions}
            years={years} // Pass the years value to the graph
            monthlyInvestment={budget} // Pass the budget value to the graph
            rate={growthRate} // Pass the growth rate to the graph
          />
        </div>
      </div>
    </div>
  );
}

export default InvestmentsPage;
