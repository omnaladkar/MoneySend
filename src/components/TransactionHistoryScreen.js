// src/components/TransactionHistoryScreen.js

import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';
import { Card, Button } from 'react-native-elements';
import Modal from 'react-native-modal';

const TransactionHistoryScreen = () => {
  const { transactions } = useContext(AppContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const toggleModal = (transaction) => {
    setSelectedTransaction(transaction);
    setModalVisible(!isModalVisible);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleModal(item)}>
      <Card containerStyle={styles.card}>
        <Text style={styles.recipient}>Recipient: {item.recipient?.name}</Text>
        <Text style={styles.amount}>Amount: ${item.amount}</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          {selectedTransaction && selectedTransaction.recipient ? (
            <>
              <Text style={styles.modalTitle}>Transaction Details</Text>
              <Text style={styles.modalText}>Recipient: {selectedTransaction.recipient.name}</Text>
              <Text style={styles.modalText}>Amount: ${selectedTransaction.amount}</Text>
              <Button
                title="Close"
                buttonStyle={styles.closeButton}
                onPress={toggleModal}
              />
            </>
          ) : (
            <Text style={styles.modalText}>Transaction data is unavailable.</Text>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  recipient: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    color: '#333',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default TransactionHistoryScreen;
