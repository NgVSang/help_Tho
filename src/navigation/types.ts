import * as ImagePicker from "expo-image-picker";

export type RootStackParamList = {
  Home: undefined;
  Image: {
    data: ImagePicker.ImagePickerResult;
  };
};
