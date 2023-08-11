import React from "react";
import {
  Colors,
  Picker,
  Icon,
  TextField,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native-ui-lib";
import { Button, Header, Progress, VerifyModal } from "@src/components";
import { StyleSheet } from "react-native";
import { ROUTES } from "@src/utils";
import SuccessIcon from "@src/assets/svgs/success.svg";
import DropdownIcon from "@src/assets/svgs/dropdown.svg";
import AddImageIcon from "@src/assets/svgs/image-add.svg";
import * as ImagePicker from "expo-image-picker";

export const VerifyKyc: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<any>(null);
  const [value, setValue] = React.useState("");
  const documents = [
    "National Identity Card",
    "Voters Card",
    "Driver's License",
  ];

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
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
        <Progress progress={50} />
        <Text marginB-12 marginT-16 lg medium gray90>
          KYC Verification
        </Text>
        <Text sm regular marginB-24 gray70>
          Provide us the following details to reduce the risk of fraud and
          improve our services.
        </Text>
        <View marginB-16>
          <Text marginB-8 sm regular>
            Choose a method of verification
          </Text>
          <Picker
            placeholder="Select an option"
            value={value}
            trailingAccessory={<Icon source={DropdownIcon} marginR-16 />}
            containerStyle={styles.input}
            paddingT-12
          >
            {documents.map((document) => (
              <Picker.Item
                key={document}
                value={document}
                label={document}
                onPress={() => {
                  setValue(document);
                }}
              />
            ))}
          </Picker>
        </View>
        <View marginB-16>
          <Text marginB-8 sm regular>
            NIN Number
          </Text>
          <TextField
            placeholder="1234567890"
            placeholderTextColor={Colors.gray40}
            sm
            regular
            gray90
            style={styles.input}
          />
        </View>
        <View marginB-32>
          <Text marginB-8 sm regular>
            Upload a clear image of doc
          </Text>
          <TouchableOpacity onPress={() => pickImage()}>
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                resizeMode="contain"
                style={{ width: "100%", height: 250 }}
              />
            ) : (
              <View style={styles.input} centerV row spread>
                <Text sm regular gray40>
                  Tap here to upload
                </Text>
                <Icon source={AddImageIcon} />
              </View>
            )}
          </TouchableOpacity>
        </View>
        <Button
          label="PROCEED TO VERIFICATION"
          onPress={() => setIsVisible(true)}
        />
      </View>
      <VerifyModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        title="KYC info submitted"
        description="Well done! Your KYC verification is complete, we will let you know once it is approved"
        buttonText="CONTINUE VERIFICATION"
        buttonOutlineText="FINISH UP LATER"
        route={ROUTES.VERIFICATION}
        icon={SuccessIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.gray4,
    width: "100%",
    height: 56,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 5,
  },
});
