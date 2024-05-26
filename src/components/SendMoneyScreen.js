// src/components/SendMoneyScreen.js

import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';
// import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

const SendMoneyScreen = ({ navigation }) => {
  const { setAmount } = useContext(AppContext);

  return (
    <View style={styles.container}>
      
      <Ionicons name="cash-outline" size={80} color="#007bff" style={styles.icon} />
      <Text style={styles.title}>Enter Amount</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="0.00"
        onChangeText={(amount) => setAmount(parseFloat(amount))}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Recipients')}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SendMoneyScreen;
