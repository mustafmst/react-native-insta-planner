import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { IImageData } from "../App";

export interface IFeedProps {
  images: IImageData[];
  removeImage: Function;
}

export default function Feed(props: IFeedProps) {
  let getImagesGrid = () => {
    if (
      props.images === undefined ||
      props.images === null ||
      props.images.length === 0
    )
      return;

    return (
      <FlatList
        style={{ width: "100%" }}
        data={[...props.images].reverse()}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
            <TouchableHighlight
              onPress={() => props.removeImage(item.id)}
              style={{ flex: 1 }}
            >
              <Image
                source={{ uri: item.uri }}
                style={styles.thumbnail}
              ></Image>
            </TouchableHighlight>
          </View>
        )}
        numColumns={3}
        keyExtractor={(item: IImageData) => item.id}
      />
    );
  };
  return (
    <View style={styles.feed}>
      <Text style={styles.appTitle}>InstaPlanner</Text>
      {getImagesGrid()}
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
    height: 129,
    width: 129,
    resizeMode: "cover",
  },
  imageGrid: {
    width: "100%",
  },
  imageGridContent: {
    alignItems: "center",
  },
  imageGridRow: {
    width: "100%",
  },
});
