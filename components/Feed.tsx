import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { IImageData } from "../App";

export interface IFeedProps {
  images: IImageData[];
}

export default function Feed(props: IFeedProps) {
  let getImagesGrid = () => {
    if (
      props.images === undefined ||
      props.images === null ||
      props.images.length === 0
    )
      return;
    return props.images.map((image) => (
      <Image
        source={{ uri: image.uri }}
        style={styles.thumbnail}
        key={image.id}
      />
    ));
  };
  return (
    <View style={styles.feed}>
      <Text style={styles.appTitle}>InstaPlanner</Text>
      <ScrollView
        contentContainerStyle={styles.imageGridContent}
        style={styles.imageGrid}
      >
        {getImagesGrid()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  feed: {
    width: "100%",
    flex: 11,
    backgroundColor: "#fff",
    paddingTop: 40,
    alignItems: "center",
  },
  appTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  imageGrid: {
    width: "100%",
  },
  imageGridContent: {
    alignItems: "center",
  },
});
