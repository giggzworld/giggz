import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native-ui-lib";
import { Button, Header } from "@src/components";
import Profile from "@src/assets/svgs/profile.svg";
import Camera from "@src/assets/svgs/camera.svg";
import { StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ROUTES } from "@src/utils";
import { useNavigation } from "@react-navigation/native";

export const UploadProfilePic: React.FC = () => {
  const navigation = useNavigation<any>();
  const [selectedImage, setSelectedImage] = React.useState<any>(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0]);
      setSelectedImage(result.assets[0].uri);
    }
  };
  return (
    <View bg-white flexG useSafeArea>
      <Header title="Verification" />
      <View marginH-16 flex>
        <Text marginB-44 lg medium gray90>
          Upload a profile picture
        </Text>
        <View centerH>
          <TouchableOpacity onPress={() => pickImage()}>
            <View marginB-32 bg-gray30 br100 center style={styles.avatar}>
              {selectedImage !== null && (
                <Image source={{ uri: selectedImage }} style={styles.avatar} />
              )}
              {selectedImage === null && <Image source={Profile} />}
              <Image
                source={Camera}
                resizeMode="contain"
                style={{ position: "absolute", bottom: 0 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Button
          label="UPLOAD AND SUBMIT"
          onPress={() => navigation.navigate(ROUTES.VERIFICATION)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 125,
    height: 125,
    borderRadius: 100,
  },
});
