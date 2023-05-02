import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomModal = (props) => {
  const [visible, setVisible] = useState(true);

  const toggleModal = () => {
    setVisible(!visible);
  }

  return (
   
      

      <Modal
        animationType="slide"
        transparent={false}
        style={{
            flex:1,
            
        }}
        pointerEvents="none"
        visible={visible}
        onRequestClose={toggleModal}
      >
        
          <View 
          pointerEvents="none"
          style={styles.modalView}>
            
            {props.children}
            
          </View>
        
      </Modal>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalView: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth:1,
    padding: 5,
    alignItems: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  closeButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default CustomModal;
