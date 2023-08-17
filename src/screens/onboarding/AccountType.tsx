import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "@src/components";
import { fonts } from "../../utils/fonts";
import { ArrowBackIcon } from "@src/assets/custom";
import { ROUTES } from "@src/utils";
import ImageBg from "@src/assets/svgs/verification/verifyIdentity.svg";
import { Image, Text, View } from "react-native-ui-lib";

const { width } = Dimensions.get("window");

export const AccountType = ({ navigation }: any) => {
  return (
    <View marginH-16 flex centerV useSafeArea>
      <View centerH>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            position: "relative",
            right: 155,
            marginBottom: 38,
          }}
          onPress={() => navigation.navigate(ROUTES.WELCOME)}
        >
          <ArrowBackIcon />
        </TouchableOpacity>
        <Image source={ImageBg} resizeMode="contain" style={styles.image} />
        <Text marginB-9 marginT-21 xl semiBold primary>
          Choose account type
        </Text>
        <Text marginB-35 sm center gray70 style={{ width: "90%" }}>
          Find trusted artisans, explore a wide range of services, and easily
          book professionals for all your needs.
        </Text>
      </View>

      <View centerH>
        <Button
          label="Continue as Artisan"
          uppercase
          marginB-8
          style={{ width: "90%" }}
          onPress={() => navigation.navigate(ROUTES.VERIFY_IDENTITY)}
        />
        <Button
          label="I want to hire an Artisan"
          uppercase
          outline
          style={{ width: "90%" }}
          onPress={() => navigation.navigate(ROUTES.LOGIN)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 368,
  },
});
