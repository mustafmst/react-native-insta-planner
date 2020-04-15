import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Menu from "./components/Menu";
import Feed from "./components/Feed";

export interface IImageData {
  id: number;
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
    console.log(uri, this.state);
    this.setState({
      images: [
        ...this.state.images,
        { id: this.state.images.length, uri: uri },
      ],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Feed images={this.state.images}></Feed>
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
