// src/context/AppContext.js

import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [recipients, setRecipients] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);
  const [transactions, setTransactions] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [amount, setAmount] = useState(0);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

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
