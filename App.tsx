import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Menu from "./components/Menu";

interface IImageData {
  id: number;
  uri: string;
}

interface IAppState {
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
        <View style={styles.feed}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            InstaPlanner
          </Text>
        </View>
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
  feed: {
    width: "100%",
    flex: 11,
    backgroundColor: "#fff",
    paddingTop: 40,
    alignItems: "center",
  },
});
