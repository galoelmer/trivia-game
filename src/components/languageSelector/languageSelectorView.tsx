import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Baloo_Regular400 } from "@expo-google-fonts/baloo";
import { useFonts } from "expo-font";

const languagesData = [
  { id: "1", name: "English", code: "en" },
  { id: "2", name: "Spanish", code: "es" },
];

const LanguageSelector = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  let [fontsLoaded] = useFonts({
    Baloo_Regular400,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Pressable
        style={styles.selectButton}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.selectButtonText}>Select Language</Text>
      </Pressable>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          style={{ backgroundColor: "red" }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>Select Language</Text>
              </View>
              <FlatList
                data={languagesData}
                renderItem={({ item }) => (
                  <View style={styles.itemsWrapper}>
                    <TouchableOpacity
                      onPress={() => setSelectedLanguage(item.name)}
                      style={[
                        styles.items,
                        selectedLanguage === item.name && styles.itemsSelected,
                      ]}
                    >
                      <Text
                        style={[
                          styles.itemText,
                          selectedLanguage === item.name &&
                            styles.itemTextSelected,
                        ]}
                      >
                        {item.name}
                      </Text>
                      {selectedLanguage === item.name && (
                        <FontAwesome
                          style={styles.textIcon}
                          name="check-circle"
                          size={24}
                          color="#fff"
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Accept</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default LanguageSelector;

const styles = StyleSheet.create({
  selectButton: {
    marginTop: 25,
  },
  selectButtonText: {
    fontFamily: "Baloo_Regular400",
    fontSize: 18,
    textTransform: "capitalize",
    letterSpacing: 1,
    textAlign: "center",
    color: "#fff",
    textDecorationLine: "underline",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    margin: 10,
  },
  modalHeaderText: {
    fontFamily: "Baloo_Regular400",
    fontSize: 26,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  itemsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  items: {
    width: "75%",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itemsSelected: {
    backgroundColor: "#000",
  },
  itemText: {
    fontFamily: "Baloo_Regular400",
    fontSize: 18,
    letterSpacing: 1,
    textAlign: "center",
    textTransform: "uppercase",
  },
  itemTextSelected: {
    color: "#fff",
  },
  modalButton: {
    width: "85%",
    marginTop: 30,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "rgba(36, 188, 248, 0.9)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButtonText: {
    fontFamily: "Baloo_Regular400",
    fontSize: 22,
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
    color: "#fff",
  },
  textIcon: {
    marginLeft: 10,
  },
});
