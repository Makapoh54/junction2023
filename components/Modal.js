import React from 'react';
import { Alert, Pressable, Modal as RawModal, StyleSheet, Text, View } from 'react-native';

const Modal = ({ animationType = 'fade', modalVisible, onClose, children }) => (
  <View style={styles.centeredView}>
    <RawModal
      animationType={animationType}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      {onClose && <Pressable style={styles.close} onPress={onClose}>
        <Text style={styles.closeText}>x</Text>
      </Pressable>}
      {children}
    </RawModal>
  </View>
  )

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  close: {
    position: 'absolute',
    top: 40,
    right: 40,
    zIndex: 20
  },
  closeText: {
    fontFamily: "l-pixel-u",
    fontSize: 35,
    color: "white",
  }
});

export default Modal
