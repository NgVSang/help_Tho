import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type ImageScreenProps = NativeStackScreenProps<RootStackParamList, "Image">;

const ImageScreen: FC<ImageScreenProps> = ({ navigation, route }) => {
  const image = route.params.data;
  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={{ uri: image.assets[0].uri }} />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 500,
  },
});
