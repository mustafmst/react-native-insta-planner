import React, { Component } from "react";
import { Modal, View, Text, StyleSheet, Button, TextInput } from "react-native";
import { getInstagramPage } from "../utils/instaFetch";

export interface IInstagramModalProps {
  enabled: boolean;
  switchModal: Function;
}

export interface IInstagramModalState {
  nickname: string;
}

export default class InstagramModal extends Component<
  IInstagramModalProps,
  IInstagramModalState
> {
  state = {
    nickname: "",
  };

  setNickname = (nickname: string) => {
    this.setState({ nickname: nickname });
  };

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.enabled}
        onRequestClose={() => {}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Get photos from Your Instagram account
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text: string) => this.setNickname(text)}
              value={this.state.nickname}
            />
            <View style={styles.btn}>
              <Button
                color="#c13584"
                title="Get Pics!"
                onPress={() => getInstagramPage(this.state.nickname)}
              ></Button>
            </View>
            <View style={styles.btn}>
              <Button
                title="Go back"
                onPress={() => this.props.switchModal()}
              ></Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    width: "100%",
    padding: 10,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(52, 52, 52, 0.5)",
  },
  modalView: {
    margin: 0,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "90%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  btn: {
    marginTop: 10,
    width: "100%",
  },
});
