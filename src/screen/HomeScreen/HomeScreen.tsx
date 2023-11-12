import { Image, StyleSheet, View } from "react-native";
import React, { FC, useCallback, useEffect } from "react";
import { Button } from "../../components";
import * as ImagePicker from "expo-image-picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: FC<HomeScreenProps> = ({ navigation, route }) => {
  useEffect(() => {
    ImagePicker.requestCameraPermissionsAsync();
  });

  const handleTakePicture = useCallback(async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (result) {
      navigation.push("Image", {
        data: result,
      });
    }
  }, [navigation]);

  const handleGetImageLibrary = useCallback(async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (result) {
      navigation.push("Image", {
        data: result,
      });
    }
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Image
        source={{
          uri: "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/03/13034625/image-danh-sach-nhung-buc-anh-viet-nam-lot-top-anh-dep-the-gioi-164709278437272.jpg",
        }}
        style={styles.banner}
      />
      <View style={styles.buttonWrapper}>
        <Button text="Detect" onPress={handleTakePicture} />
        <Button text="Upload" onPress={handleGetImageLibrary} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 100,
  },
  banner: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  buttonWrapper: {
    flexDirection: "column",
    paddingHorizontal: 50,
    gap: 30,
  },
});
