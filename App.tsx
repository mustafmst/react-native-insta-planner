import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.feed}></View>
      <View style={styles.menu}></View>
    </View>
  );
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
  },
  menu: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    borderTopColor: "#aaa",
    borderTopWidth: 2,
  },
});
