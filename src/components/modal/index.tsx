import React from "react";
import { View, Modal, Text, Pressable } from "react-native";

import styles from "./styles";

interface ModalViewProps {
  visible: boolean;
  callToAction: () => void;
  closeModal: () => void;
}

const ModalView = ({ visible, callToAction, closeModal }: ModalViewProps) => {
  return (
    <View style={[styles.centeredView, !visible && styles.hideModal]}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>
                Are you sure you want to exit?
              </Text>
            </View>
            <Pressable onPress={callToAction} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Yes</Text>
            </Pressable>
            <Pressable
              onPress={closeModal}
              style={[
                styles.modalButton,
                { backgroundColor: "rgb(38, 135, 172)" },
              ]}
            >
              <Text style={styles.modalButtonText}>No</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalView;
