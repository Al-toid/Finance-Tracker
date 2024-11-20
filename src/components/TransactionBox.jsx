import PropTypes from "prop-types"
import { Link } from "react-router-dom";
TransactionBox.propTypes = {
    title: PropTypes.string,
    transactions: PropTypes.array
}


function TransactionBox(props) {
  // Only get the last 5 transactions
  const recentTransactions = props.transactions.slice(-5);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">{props.title}</h3>
      <ul className="space-y-4">
        {recentTransactions.map((transaction,index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-4 border-b last:border-none cursor-pointer rounded transition ${
              transaction.amount < 0 ? "bg-red-100" : "bg-green-100"
            }`}
          >
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">{transaction.description}</span>
              <small className="text-gray-500">{transaction.date}</small>
            </div>
            <span
              className={`font-semibold ${
                transaction.amount < 0 ? "text-red-500" : "text-financial-success"
              }`}
            >
              {transaction.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      {/* Link to the transaction details page */}
      <Link to="/transaction-details" className="text-financial-primary font-medium hover:underline mt-4 block text-center">
        See All
      </Link>
    </div>
  );
}

export default TransactionBox;

