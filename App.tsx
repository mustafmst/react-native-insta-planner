import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Menu from "./components/Menu";
import Feed from "./components/Feed";
import { uuidv4 } from "./utils/uuid";

export interface IImageData {
  id: string;
  uri: string;
}

export interface IAppState {
  images: IImageData[];
}

export default class App extends Component<{}, IAppState> {
  state = {
    images: [],
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
        <Feed images={this.state.images} removeImage={this.removeImage}></Feed>
        <Menu addImage={this.addImage}></Menu>
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
