// ConfirmationScreen Component:
// This component displays a confirmation screen for a transaction and includes a modal for confirming the transaction
// and a fullscreen animation upon successful confirmation.

// Challenges:
// 1. Integrating a modal for confirmation with proper functionality.
// 2. Implementing a fullscreen animation upon successful confirmation.
// 3. Managing state for modal visibility and animation visibility.


import React, { useContext, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { AppContext } from '../context/AppContext';
import LottieView from 'lottie-react-native';
import { Audio } from 'expo-av';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

const ConfirmationScreen = ({ navigation }) => {
  const { selectedRecipient, amount, addTransaction } = useContext(AppContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAnimationVisible, setAnimationVisible] = useState(false);
  const animation = useRef(null);
  const sound = useRef(new Audio.Sound());

  const handleConfirm = async () => {
    setAnimationVisible(true);
    addTransaction({ recipient: selectedRecipient, amount });
    await sound.current.loadAsync(require('../../assets/success.mp3'));
    await sound.current.playAsync();
    animation.current.play();
    setTimeout(() => {
      setAnimationVisible(false);
      navigation.navigate('Home');
    }, 3000); // Adjust timing to match animation duration
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Confirm Transaction</Card.Title>
        <Card.Divider />
        <Text style={styles.text}><Icon name="person" size={20} /> Recipient: {selectedRecipient.name}</Text>
        <Text style={styles.text}><Icon name="cash" size={20} /> Amount: ${amount}</Text>
        <Button
          title="Confirm"
          buttonStyle={styles.confirmButton}
          onPress={toggleModal}
        />
      </Card>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Are you sure?</Text>
          <Text style={styles.modalText}>Do you want to confirm this transaction?</Text>
          <View style={styles.modalButtons}>
            <Button
              title="Cancel"
              buttonStyle={styles.cancelButton}
              onPress={toggleModal}
            />
            <Button
              title="Confirm"
              buttonStyle={styles.modalConfirmButton}
              onPress={() => {
                toggleModal();
                handleConfirm();
              }}
            />
          </View>
        </View>
      </Modal>
      {isAnimationVisible && (
        <View style={styles.fullscreenAnimationContainer}>
          <LottieView
            ref={animation}
            source={require('../../assets/Animation - 1716705450914.json')}
            autoPlay
            loop={false}
            style={styles.fullscreenAnimation}
          />
        </View>
      )}
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
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  confirmButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 10,
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
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#d9534f',
    borderRadius: 8,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  modalConfirmButton: {
    backgroundColor: '#5cb85c',
    borderRadius: 8,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  fullscreenAnimationContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Optional: Add a semi-transparent background
  },
  fullscreenAnimation: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default ConfirmationScreen;
