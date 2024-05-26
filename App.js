// App.js

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './src/context/AppContext';
import HomeScreen from './src/components/HomeScreen';
import SendMoneyScreen from './src/components/SendMoneyScreen';
import RecipientsScreen from './src/components/RecipientsScreen';
import TransactionHistoryScreen from './src/components/TransactionHistoryScreen';
import ConfirmationScreen from './src/components/ConfirmationScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SendMoney" component={SendMoneyScreen} />
          <Stack.Screen name="Recipients" component={RecipientsScreen} />
          <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
          <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
