import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext"; // Import dark mode context

TransactionBox.propTypes = {
  title: PropTypes.string.isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function TransactionBox({ title, transactions }) {
  const { darkMode } = useDarkMode(); // Access dark mode state

  // Get the last 5 transactions (already sorted from the parent component)
  const recentTransactions = transactions.slice(0, 5);

  return (
    <div
      className={`rounded-lg shadow-md p-4 w-full max-w-md transition-all duration-300 ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-4">
        {recentTransactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`flex justify-between items-center p-4 border-b last:border-none cursor-pointer rounded transition-all duration-300 ${
              transaction.amount < 0
                ? darkMode
                  ? "bg-red-900 text-red-300"
                  : "bg-red-100 text-red-600"
                : darkMode
                ? "bg-green-900 text-green-300"
                : "bg-green-100 text-green-600"
            }`}
          >
            <div className="flex flex-col">
              <span className="font-medium">{transaction.description}</span>
              <small>{new Date(transaction.date).toLocaleDateString()}</small>
            </div>
            <span
              className={`font-semibold ${
                transaction.amount < 0
                  ? darkMode
                    ? "text-red-400"
                    : "text-red-500"
                  : darkMode
                  ? "text-green-400"
                  : "text-green-600"
              }`}
            >
              {transaction.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      {/* Link to the transaction details page */}
      <Link
        to="/transaction-details"
        className={`font-medium hover:underline mt-4 block text-center ${
          darkMode ? "text-blue-400" : "text-blue-600"
        }`}
      >
        See All
      </Link>
    </div>
  );
}

export default TransactionBox;
