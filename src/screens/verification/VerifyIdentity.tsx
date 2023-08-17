import React from "react";
import { StyleSheet } from "react-native";
import { Image, Text, View } from "react-native-ui-lib";
import { Button } from "@src/components";
import { VerifyModal } from "@src/components/verification";
import ImageBg from "@src/assets/svgs/verification/verifyIdentity.svg";
import { ROUTES } from "@src/utils/constants";
import DangerIcon from "@src/assets/svgs/danger.svg";

export const VerifyIdentityScreen: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <View marginH-16 flex centerV useSafeArea>
      <View centerH>
        <Image source={ImageBg} resizeMode="contain" style={styles.image} />
        <Text marginB-9 marginT-21 xl semiBold primary>
          Stay connected, verify your identity
        </Text>
        <Text marginB-35 sm center gray70>
          To ensure a safe and trustworthy experience, we have implemented a
          seamless verification process.
        </Text>
      </View>
      <View centerH>
        <Button
          white
          label="PROCEED TO VERIFICATION"
          marginB-8
          onPress={() => setIsVisible(true)}
          style={{ width: "90%" }}
        />
        <Button outline label="TAKE ME TO DASHBOARD" style={{ width: "90%" }} />
      </View>
      <VerifyModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        title="Skip verification?"
        description="Don't want to verify right away? No problem! You can do it later."
        buttonText="PROCEED TO VERIFICATION"
        buttonOutlineText="TAKE ME TO DASHBOARD"
        route={ROUTES.VERIFICATION}
        icon={DangerIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 368,
  },
});
