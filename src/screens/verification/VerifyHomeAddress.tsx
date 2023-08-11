import React from "react";
import { Colors, TextField, View } from "react-native-ui-lib";
import { Button, Header, Progress, VerifyModal } from "@src/components";
import { StyleSheet } from "react-native";
import { ROUTES } from "@src/utils";
import SuccessIcon from "@src/assets/svgs/success.svg";

export const VerifyHomeAddress: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);
  return (
    <View bg-white flexG useSafeArea>
      <Header title="Verification" />
      <View marginH-16 flex>
        <Progress progress={25} />
        <TextField
          placeholder="Type your address"
          label="Search for your home address here"
          labelColor={Colors.gray60}
          labelStyle={{ marginBottom: 8, fontSize: 12, fontWeight: "400" }}
          placeholderTextColor={Colors.gray40}
          sm
          regular
          gray90
          marginV-32
          style={styles.input}
          onChangeText={(text) => {
            if (text.length > 0) {
              setShowButton(true);
            } else {
              setShowButton(false);
            }
          }}
        />
        {showButton && (
          <Button label="CONTINUE" onPress={() => setIsVisible(true)} />
        )}
      </View>
      <VerifyModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        title="Address Added Successfully"
        description="Great! Your home address has been successfully added. Get ready to connect with service providers near you."
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
