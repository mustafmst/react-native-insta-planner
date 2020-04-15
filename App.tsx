import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Menu from "./components/Menu";
import Feed from "./components/Feed";
import { uuidv4 } from "./utils/uuid";
import InstagramModal from "./components/InstagramAuthModal";

export interface IImageData {
  id: string;
  uri: string;
}

export interface IAppState {
  images: IImageData[];
  instagramModalEnabled: boolean;
}

export default class App extends Component<{}, IAppState> {
  state = {
    images: [],
    instagramModalEnabled: false,
  };

  switchInstagramModal = () => {
    this.setState({ instagramModalEnabled: !this.state.instagramModalEnabled });
  };

  addImage = (uri: string) => {
    this.setState({
      images: [...this.state.images, { id: uuidv4(), uri: uri }],
    });
  };

  removeImage = (id: string) => {
    this.setState({
      images: [...this.state.images].filter(
        (image: IImageData) => image.id !== id
      ),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <InstagramModal
          enabled={this.state.instagramModalEnabled}
          switchModal={this.switchInstagramModal}
        ></InstagramModal>
        <Feed images={this.state.images} removeImage={this.removeImage}></Feed>
        <Menu
          addImage={this.addImage}
          switchInstagramModal={this.switchInstagramModal}
        ></Menu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
