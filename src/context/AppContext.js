import React, { createContext, useState } from 'react';

// Create a context for the app
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  // State to hold recipient data
  const [recipients, setRecipients] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);
  // State to hold transaction data
  const [transactions, setTransactions] = useState([]);
  // State to hold the selected recipient
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  // State to hold the amount to be sent
  const [amount, setAmount] = useState(0);

  // Function to add a new transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Provide state and functions to children components
  return (
    <AppContext.Provider value={{
      recipients,
      selectedRecipient,
      setSelectedRecipient,
      amount,
      setAmount,
      transactions,
      addTransaction
    }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
