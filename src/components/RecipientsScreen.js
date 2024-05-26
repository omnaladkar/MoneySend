// src/components/RecipientsScreen.js

import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Modal } from 'react-native';
import { AppContext } from '../context/AppContext';
import Icon from 'react-native-vector-icons/Ionicons';

const RecipientsScreen = ({ navigation }) => {
  const { recipients, setSelectedRecipient } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const [filteredRecipients, setFilteredRecipients] = useState(recipients);
  const [selectedRecipient, setSelectedRecipientModal] = useState(null);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = recipients.filter((recipient) =>
      recipient.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRecipients(filtered);
  };

  const handleSelectRecipient = (recipient) => {
    setSelectedRecipientModal(recipient);
  };

  const handleConfirmRecipient = () => {
    setSelectedRecipient(selectedRecipient);
    setSelectedRecipientModal(null);
    navigation.navigate('Confirmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Recipient</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search recipient..."
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredRecipients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.recipientButton}
            onPress={() => handleSelectRecipient(item)}
          >
            <Text style={styles.recipientText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Modal
        visible={!!selectedRecipient}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setSelectedRecipientModal(null)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Recipient</Text>
            {selectedRecipient && (
              <>
                <Text style={styles.recipientDetail}>{selectedRecipient.name}</Text>
                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={handleConfirmRecipient}
                >
                  <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setSelectedRecipientModal(null)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  title: {
    fontSize: 26,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  recipientButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  recipientText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  recipientDetail: {
    fontSize: 18,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  cancelButton: {
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#007bff',
    fontSize: 18,
  },
});

export default RecipientsScreen;
