import React from "react";
import { StyleSheet, View, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

export interface IMenuProps {
  addImage: Function;
  switchInstagramModal: Function;
}

export default function Menu(props: IMenuProps) {
  let runImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    props.addImage(pickerResult.uri.toString());
  };

  return (
    <View style={styles.menu}>
      <View style={styles.btn}>
        <Button title="Add Photo" onPress={runImagePickerAsync}></Button>
      </View>
      <View style={styles.btn}>
        <Button
          color="#c13584"
          title="Add Instagram"
          onPress={() => props.switchInstagramModal()}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  btn: {
    height: "100%",
    flex: 1,
    margin: 3,
  },
});
