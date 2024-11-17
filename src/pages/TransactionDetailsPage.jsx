import  { useState } from "react";
import Navbar from "../components/Navbar";
import { recentTransactions } from "../mock_data";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const myTransactions= recentTransactions

function TransactionDetailsPage() {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const navigate = useNavigate();  // Initialize the navigate function
  const handleBackClick = () => {
    navigate(-1);  // This will navigate to the previous page in the history
  };
  return (
    <>
    <Navbar></Navbar>
    <div className="font-sans p-6 bg-gray-100 min-h-screen">
      
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <button onClick={handleBackClick} className="text-gray-600 hover:text-gray-800 flex items-center">
          <FaArrowLeft className="mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">
            Transactions
          </h1>
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Transaction List */}
        <div className="bg-white rounded-lg shadow-md p-4 flex-1">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-gray-700">
            Transaction History
          </h2>
          <ul>
            {myTransactions.map((transaction,index) => (
              <li
                key={index}
                className={`p-4 border-b last:border-none cursor-pointer rounded transition ${
                  selectedTransaction?.id === transaction.id
                    ? "bg-gray-300"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedTransaction(transaction)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">{transaction.description}</span>
                  <span
                    className={`font-semibold ${
                      transaction.amount < 0 ? "text-red-500" : "text-financial-success"
                    }`}
                  >
                    {transaction.amount.toFixed(2)}
                  </span>
                </div>
                <small className="text-gray-500">{transaction.date}</small>
              </li>
            ))}
          </ul>
        </div>

        {/* Transaction Details */}
        {selectedTransaction && (
          <div className="bg-white rounded-lg shadow-md p-4 flex-1">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-gray-700">
              Transaction Details
            </h2>
            <p className="mb-2">
              <strong className="text-gray-600">Description:</strong>{" "}
              <span className="text-gray-800">{selectedTransaction.description}</span>
            </p>
            <p className="mb-2">
              <strong className="text-gray-600">Category:</strong>{" "}
              <span className="text-gray-800">{selectedTransaction.category}</span>
            </p>
            <p className="mb-2">
              <strong className="text-gray-600">Date:</strong>{" "}
              <span className="text-gray-800">{selectedTransaction.date}</span>
            </p>
            <p>
              <strong className="text-gray-600">Amount:</strong>{" "}
              <span
                className={`font-semibold ${
                  selectedTransaction.amount < 0 ? "text-red-500" : "text-financial-success"
                }`}
              >
                {selectedTransaction.amount.toFixed(2)}
              </span>
            </p>
          </div>
        )}
      </div>
    </div></>
  );
}

export default TransactionDetailsPage;
