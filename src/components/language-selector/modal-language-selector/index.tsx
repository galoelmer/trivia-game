import React from "react";
import { View, Modal } from "react-native";

import ModalHeader from "./modal-header";
import ModalBody from "./modal-body";
import ModalActionButton from "./modal-action-button";

import styles from "../styles";

interface ModalViewProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLanguage: string;
  setSelectedLanguage: (value: string) => void;
}

const ModalView = ({
  modalVisible,
  setModalVisible,
  selectedLanguage,
  setSelectedLanguage,
}: ModalViewProps) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ModalHeader />
            <ModalBody
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
            <ModalActionButton
              selectedLanguage={selectedLanguage}
              setModalVisible={setModalVisible}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalView;
