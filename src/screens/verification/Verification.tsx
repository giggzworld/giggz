import React from "react";
import { Colors, Text, TouchableOpacity, View } from "react-native-ui-lib";
import { Button, Header, Progress } from "@src/components";
import Profile from "@src/assets/svgs/verification/profile.svg";
import Location from "@src/assets/svgs/verification/location.svg";
import Phone from "@src/assets/svgs/verification/phone.svg";
import Kyc from "@src/assets/svgs/verification/kyc.svg";
import { FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "@src/utils";

export const VerificationScreen: React.FC = () => {
  const content = [
    {
      title: "Verify your phone number",
      description:
        "Protect your account from unauthorized access and receive important updates by verifying your phone number",
      icon: <Phone />,
      route: ROUTES.VERIFY_PHONE,
    },
    {
      title: "Add your home address",
      description:
        "Provide your home address to help us connect you with nearby service providers and enable location-based services",
      icon: <Location />,
      route: ROUTES.VERIFY_HOME_ADDRESS,
    },
    {
      title: "KYC Verification",
      description:
        "By verifying your identity, we can maintain the integrity of our platform and protect your account from unauthorized access",
      icon: <Kyc />,
      route: ROUTES.VERIFY_KYC,
    },
    {
      title: "Upload a profile photo",
      description:
        "Personalize your presence and make it easier for others to recognize and connect with you by adding a profile picture",
      icon: <Profile />,
      route: ROUTES.UPLOAD_PROFILE_PIC,
    },
  ];
  const navigation = useNavigation<any>();
  return (
    <View bg-white flexG useSafeArea>
      <Header title="Verification" />
      <View marginH-16>
        <Text gray90 sm marginB-24>
          Complete your verification now and unlock a secure and trustworthy
          experience within our platform
        </Text>
        <Progress progress={0} />
      </View>
      <View marginT-16 marginB-24 flex paddingH-16>
        <FlatList
          data={content}
          renderItem={({ item: { title, description, icon, route } }) => (
            <TouchableOpacity onPress={() => navigation.navigate(route)}>
              <View br20 padding-8 marginB-8 bg-background style={styles.card}>
                <View row marginT-5 centerV marginB-13>
                  <View marginL-5 marginR-8>
                    {icon}
                  </View>
                  <Text md medium blue>
                    {title}
                  </Text>
                </View>
                <Text sm gray70 width="95%">
                  {description}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <Button label="PROCEED TO VERIFICATION" marginH-16 marginB-11 />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
