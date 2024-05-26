
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/*
This component defines the HomeScreen, which acts as the main screen of the app. 
It features a welcome message and two buttons for navigating to the "Send Money" 
and "Transaction History" screens. The screen is styled with a clean white background 
and centered layout. The buttons are styled to be modern and attractive, with blue 
backgrounds and white text. Icons are also included to enhance the visual appeal.

Props:
- navigation: Used to navigate between different screens.

State and Methods:
- None in this component, as it mainly handles navigation.


*/

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ScopeX platform</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SendMoney')}
      >
       
        <Text style={styles.buttonText}>Send Money</Text>
   
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TransactionHistory')}
      >
        
        <Text style={styles.buttonText}>Transaction History</Text>
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    color: '#333',
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default HomeScreen;
