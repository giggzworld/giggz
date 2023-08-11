import React from "react";
import { Colors, Text, TextField, View } from "react-native-ui-lib";
import { Button, Header, Progress } from "@src/components";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "@src/utils";

export const VerificationPhoneNum: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <View bg-white flexG useSafeArea>
      <Header title="Verification" />
      <View marginH-16 flex>
        <Progress progress={0} />
        <Text gray90 sm marginV-16 md regular>
          Enter a valid phone number we can reach you with.
        </Text>
        <Text sm regular marginB-8>
          Phone Number
        </Text>
        <View
          marginB-32
          style={styles.inputContainer}
          row
          centerV
          paddingL-24
          paddingR-15
        >
          <Text sm gray90 regular>
            +234
          </Text>
          <TextField
            placeholder="803 123 4567"
            marginL-16
            sm
            regular
            gray90
            style={styles.input}
            keyboardType="number-pad"
            maxLength={11}
          />
        </View>
        <Button
          label="VERIFY"
          onPress={() => navigation.navigate(ROUTES.VERIFY_CODE)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.gray4,
    width: "100%",
    height: 56,
    borderRadius: 8,
  },
  input: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.gray50,
    width: "100%",
    marginLeft: 16,
    paddingLeft: 16,
  },
});
