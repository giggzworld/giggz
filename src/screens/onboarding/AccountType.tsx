import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../../components";
import { fonts } from "../../utils/fonts";
import ArrowBackIcon from "../../components/svgs/ArrowBackIcon";
import { ROUTES } from "../../utils";

const { width } = Dimensions.get("window");

export const AccountType = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          position: "relative",
          right: 155,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate(ROUTES.WELCOME)}
      >
        <ArrowBackIcon />
      </TouchableOpacity>

      <Image
        source={require("../../../assets/welcome-image4.png")}
        style={{
          width: width,
          resizeMode: "contain",
          marginTop: 20,
        }}
      />

      <View style={styles.textWrapper}>
        <Text style={styles.title}>Choose account type</Text>
        <Text style={styles.subtitle}>
          Find trusted artisans, explore a wide range of services, and easily
          book professionals for all your needs.
        </Text>
      </View>

      <View style={styles.btnWrapper}>
        <Button
          label="Continue as Artisan"
          uppercase
          style={{ width: "90%" }}
          onPress={() => navigation.navigate(ROUTES.LOGIN)}
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  textWrapper: {
    alignItems: "center",
    width: width,
    marginTop: 20,
  },

  title: {
    color: "#163B4E",
    fontSize: 18,
    lineHeight: 28,
    fontFamily: fonts.semiBold,
  },

  subtitle: {
    color: "#696969",
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
    paddingHorizontal: 10,
    marginTop: 15,
    fontFamily: fonts.regular,
  },

  btnWrapper: {
    width: "100%",
    marginTop: 30,
    alignItems: "center",
    gap: 8,
  },
});
