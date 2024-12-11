
import { useEffect, useState } from 'react';
import { supabase } from '../../server/supabase.js';
import Navbar from '../components/Navbar';
import AmountBox from '../components/AmountBox';
import { Line } from 'react-chartjs-2';
import TransactionBox from '../components/TransactionBox';
import { useDarkMode } from '../context/DarkModeContext';
import { config, recentTransactions } from '../mock_data';

const HomePage = () => {
  const { darkMode } = useDarkMode();
  const [profile, setProfile] = useState(null);
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBalance, setNewBalance] = useState('');
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState("Income");
  const [expenses, setExpenses] = useState(0);



const [chartData, setChartData] = useState({
  labels: [],
  datasets: [],
});

useEffect(() => {
  const fetchProfileAndTransactions = async () => {
    try {
      const { data: session } = await supabase.auth.getSession();

      if (!session?.session) {
        setError("You are not logged in!");
        return;
      }

      const userId = session.session.user.id;

      // Fetch user profile
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (profileError) {
        setError("Error fetching profile: " + profileError.message);
        return;
      }
      setProfile(profileData);

      // Fetch all transactions
      const { data: transactionsData, error: transactionsError } = await supabase
        .from("transaction")
        .select("*")
        .eq("user_id", userId)
        .order("date", { ascending: false }); // Sort by newest first

      if (transactionsError) {
        setError("Error fetching transactions: " + transactionsError.message);
        return;
      }

      // Validate transactions
      const validTransactions = transactionsData.filter(
        (transaction) =>
          transaction.amount !== null &&
          transaction.amount !== undefined &&
          typeof transaction.amount === "number" &&
          transaction.description &&
          transaction.date
      );

      setTransactions(validTransactions);

      // Calculate total balance
      const totalBalance = validTransactions.reduce(
        (sum, transaction) => sum + transaction.amount,
        0
      );
      setBalance(totalBalance);

      // Calculate total expenses
      const totalExpenses = validTransactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((sum, transaction) => sum + Math.abs(transaction.amount), 0);
      setExpenses(totalExpenses);

      // Prepare data for the graph
      const groupedByDate = validTransactions.reduce((acc, transaction) => {
        const date = transaction.date.split("T")[0]; // Get only the date (YYYY-MM-DD)
        if (!acc[date]) {
          acc[date] = { income: 0, spent: 0 };
        }
        if (transaction.amount > 0) {
          acc[date].income += transaction.amount;
        } else {
          acc[date].spent += Math.abs(transaction.amount);
        }
        return acc;
      }, {});

      const labels = Object.keys(groupedByDate).sort();
      let rollingBalance = 0;
      let rollingSpent = 0;

      const incomeData = labels.map((date) => groupedByDate[date].income);
      const spentData = labels.map((date) => {
        rollingSpent += groupedByDate[date].spent;
        return rollingSpent;
      });
      const balanceData = labels.map((date) => {
        rollingBalance += groupedByDate[date].income - groupedByDate[date].spent;
        return rollingBalance;
      });

      setChartData({
        labels,
        datasets: [
          {
            label: "Income",
            data: incomeData,
            borderColor: "green",
            fill: false,
          },
          {
            label: "Spent",
            data: spentData,
            borderColor: "red",
            fill: false,
          },
          {
            label: "Balance",
            data: balanceData,
            borderColor: "blue",
            fill: false,
          },
        ],
      });
    } catch (error) {
      setError("Error: " + error.message);
    }
  };

  fetchProfileAndTransactions();
}, []);





const handleAddBalance = async () => {
  setLoading(true);
  try {
    const { data: session } = await supabase.auth.getSession();

    if (!session?.session) {
      setError("You are not logged in!");
      return;
    }

    const userId = session.session.user.id;

    // Validate inputs
    if (!newBalance || isNaN(parseFloat(newBalance))) {
      setError("Please enter a valid amount.");
      return;
    }

    if (!description.trim()) {
      setError("Please provide a description for the transaction.");
      return;
    }

    const transactionDate = date || new Date().toISOString();

    // Insert a new transaction
    const { error: transactionError } = await supabase
      .from("transaction")
      .insert({
        user_id: userId,
        amount: parseFloat(newBalance),
        description: description.trim(),
        date: transactionDate,
      });

    if (transactionError) {
      setError("Error adding transaction: " + transactionError.message);
      return;
    }

    setIsModalOpen(false); // Close the modal
    setNewBalance(""); // Reset the form
    setDescription("");
    setDate("");
  } catch (error) {
    setError("Error: " + error.message);
  } finally {
    setLoading(false);
  }
};



  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded shadow-md w-96">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (!profile || balance === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded shadow-md w-96">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-screen overflow-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <Navbar />

      {/* Welcome message */}
      <div className="w-full text-left pt-6 px-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-500">
          Welcome, {profile.first_name}!
        </h1>
      </div>

      {/* Main content */}
      <div className="flex flex-col gap-6 p-6">
        {/* Amount boxes */}
        <div className="flex flex-wrap justify-around gap-4">
          <AmountBox
            title="Balance"
            amount={balance}
            className={`w-full sm:w-[45%] md:w-[30%] lg:w-[20%] p-4 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}`}
          />
<AmountBox
  title="Expenses"
  amount={`${expenses.toFixed(2)}`}
  className={`w-full sm:w-[45%] md:w-[30%] lg:w-[20%] p-4 ${
    darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
  }`}
/>
        </div>

        {/* Chart and transactions */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Chart container */}
          <div className="w-full lg:w-2/3 h-[50vh] p-4">
            <Line
    data={chartData}
    options={config.options}
    className={darkMode ? "bg-gray-800" : "bg-gray-50"}
            />
          </div>

          {/* Transaction box */}
          <div className="w-full lg:w-1/3 p-4">
            <TransactionBox
              title={'Recent Transactions'}
              transactions={transactions}
            />
          </div>
        </div>

        {/* Add Balance Button */}
        <div className="flex justify-left pt-4">
        <button
            className="px-6 py-2 bg-blue-500 text-white rounded"
            onClick={() => setIsModalOpen(true)}
        >
            Add Deposit / Transaction 
        </button>
        </div>
      </div>

      {/* Modal for adding balance */}
      {isModalOpen && (
<div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
  <div className="bg-white p-6 rounded w-96">
    <h2 className="text-xl font-bold mb-4">Add Deposit / Transaction</h2>
    {error && <p className="text-red-500 mb-4">{error}</p>}
    <input
      type="number"
      value={newBalance}
      onChange={(e) => setNewBalance(e.target.value)}
      placeholder="Enter amount"
      className="w-full p-2 mb-4 border rounded"
    />
    <input
      type="text"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Enter description (e.g., Paycheck)"
      className="w-full p-2 mb-4 border rounded"
    />
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      placeholder="Enter date"
      className="w-full p-2 mb-4 border rounded"
    />
    <div className="flex justify-between">
      <button
        onClick={() => setIsModalOpen(false)}
        className="px-6 py-2 bg-gray-500 text-white rounded"
      >
        Cancel
      </button>
      <button
        onClick={handleAddBalance}
        className="px-6 py-2 bg-blue-500 text-white rounded"
        disabled={loading}
      >
        {loading ? "Updating..." : "Add Balance"}
      </button>
    </div>
  </div>
</div>
      )}
    </div>
  );
};

export default HomePage;