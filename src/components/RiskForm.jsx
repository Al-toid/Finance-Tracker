import { useEffect } from 'react';
import PropTypes from "prop-types";

const RiskForm = ({
  budget,
  years,
  growthRate,
  setGrowthRate,
  setYears,
  setBudget,
}) => {
  // Sync the budget when the component mounts or updates
  useEffect(() => {
    setBudget(budget);
  }, [budget, setBudget]);

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleYearsChange = (e) => {
    setYears(e.target.value);
  };

  const handleGrowthRateChange = (rate) => {
    setGrowthRate(rate);
  };

  return (
    <form className="p-6 bg-white dark:bg-gray-800 dark:text-white shadow-lg rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">
          Monthly Investment
        </label>
        <input
          type="number"
          value={budget}
          onChange={handleBudgetChange}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">
          Years to Invest
        </label>
        <input
          type="number"
          value={years}
          onChange={handleYearsChange}
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300">
          Investment Growth Strategy
        </label>
        <div className="flex justify-around">
          <button
            type="button"
            onClick={() => handleGrowthRateChange(6.5)}
            className={`py-2 px-4 rounded-md ${
              growthRate === 8
                ? 'bg-green-600 text-white'
                : 'bg-gray-300 dark:bg-gray-700 dark:text-white'
            }`}
          >
            Aggressive (6.5%)
          </button>
          <button
            type="button"
            onClick={() => handleGrowthRateChange(5.7)}
            className={`py-2 px-4 rounded-md ${
              growthRate === 6
                ? 'bg-green-600 text-white'
                : 'bg-gray-300 dark:bg-gray-700 dark:text-white'
            }`}
          >
            Moderate (5.7%)
          </button>
          <button
            type="button"
            onClick={() => handleGrowthRateChange(5)}
            className={`py-2 px-4 rounded-md ${
              growthRate === 5
                ? 'bg-green-600 text-white'
                : 'bg-gray-300 dark:bg-gray-700 dark:text-white'
            }`}
          >
            Conservative (5%)
          </button>
        </div>
      </div>
    </form>
  );
};

// Prop validation
RiskForm.propTypes = {
  budget: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // Budget can be a number or string
  years: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // Years can be a number or string
  growthRate: PropTypes.number, // Growth rate should be a number
  setGrowthRate: PropTypes.func, // Function to set growth rate
  setYears: PropTypes.func, // Function to set years
  setBudget: PropTypes.func, // Function to set budget
};

export default RiskForm;
