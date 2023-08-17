import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  Dimensions,
} from "react-native";
import { colors } from "../../utils/colors";
import { Button } from "@src/components";
import { fonts } from "../../utils/fonts";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    imageWrapper: {
      image: require("../../../assets/welcome-image1.png"),
      name: "Prince Chijioke",
      occupation: "Carpenter",
    },
    title: "Quality Services",
    subTitle:
      " Discover exceptional artisans and enjoy a seamless, stress-freeservice booking experience.",
  },
  {
    id: 2,
    imageWrapper: {
      image: require("../../../assets/welcome-image2.png"),
      name: "Ademola Adeniji",
      occupation: "Plumber",
    },
    title: "Transparent Transactions",
    subTitle:
      "Experience transparent pricing, clear communication, and honest transactions with our trusted artisans.",
  },
  {
    id: 3,
    imageWrapper: {
      image: require("../../../assets/welcome-image3.png"),
      name: "Fatima Usman",
      occupation: "Cook",
    },
    title: "Customer Satisfaction",
    subTitle:
      "We go the extra mile to ensure every job is completed to your utmost satisfaction.",
  },
];

export const SplashScreen = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCurrentSlideIndex = (e: {
    nativeEvent: { contentOffset: { x: number } };
  }) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const getCurrentIndex = Math.round(offsetX / width);
    setCurrentIndex(getCurrentIndex);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar backgroundColor={colors.background} />
      <View style={{ flex: 1, alignItems: "center" }}>
        <FlatList
          onMomentumScrollEnd={updateCurrentSlideIndex}
          pagingEnabled
          data={slides}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Slide item={item} currentIndex={currentIndex} />
          )}
        />
      </View>

      <View
        style={{
          width: "100%",
          marginBottom: 50,
          alignItems: "center",
        }}
      >
        <Button
          label="Get started"
          onPress={() => navigation.navigate("AccountType")}
          style={{ width: "90%" }}
        />
      </View>
    </SafeAreaView>
  );
};

export const Slide = ({ item, currentIndex }: any) => {
  return (
    <View style={styles.onboard}>
      <View style={styles.onboardTop}>
        <Image
          source={item.imageWrapper.image}
          style={{ width, resizeMode: "contain" }}
        />
        <View style={styles.imageText}>
          <Text style={styles.imageTextLeft}>{item.imageWrapper.name}</Text>
          <Text style={styles.imageTextRight}>
            {item.imageWrapper.occupation}
          </Text>
        </View>
      </View>

      <View style={styles.indicatorWrapper}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index && {
                backgroundColor: "#1E4C67",
              },
            ]}
          />
        ))}
      </View>

      <View style={styles.bottom}>
        <Text style={styles.bottomText}>{item.title}</Text>
        <Text style={styles.bottomSubtext}>{item.subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  onboardTop: {
    position: "relative",
  },
  imageText: {
    position: "absolute",
    left: "19%",
    bottom: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#FAFAFA",
    width: 262,
    height: 40,
  },
  imageTextLeft: {
    color: "#282828",
    fontSize: 10,
    lineHeight: 15,
    fontFamily: fonts.regular,
  },
  imageTextRight: {
    color: "#282828",
    fontSize: 10,
    lineHeight: 15,
    fontFamily: fonts.semiBold,
  },
  indicatorWrapper: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  indicator: {
    width: 49,
    height: 2,
    backgroundColor: "#D7F0FE",
    borderRadius: 10,
  },
  bottom: {
    alignItems: "center",
    width: width,
    marginTop: 20,
  },
  bottomText: {
    color: "#163B4E",
    fontSize: 18,
    lineHeight: 28,
    fontFamily: fonts.semiBold,
  },
  bottomSubtext: {
    color: "#696969",
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
    paddingHorizontal: 10,
    marginTop: 15,
    width: "86%",
    fontFamily: fonts.regular,
  },
});
