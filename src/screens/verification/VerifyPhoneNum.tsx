import React from "react";
import { Colors, Text, TextField, View } from "react-native-ui-lib";
import { Button, Header, Progress } from "@src/components";
import { StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "@src/utils";
import { showMessage } from "react-native-flash-message";
import { useMutation } from "@tanstack/react-query";
import { sendPhoneCode } from "@src/api/auth";

const InputWidth = Dimensions.get("window").width - 140;
export const VerificationPhoneNum: React.FC = () => {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<{
    phone_number: string;
  }>({
    phone_number: "",
  });

  const onChangeText = (name: string) => (text: string) => {
    setData((prev: any) => ({ ...prev, [name]: text }));
  };

  const onSuccessVerify = () => {
    navigation.navigate(ROUTES.VERIFY_CODE, {
      phone_number: data.phone_number,
    });
    setLoading(false);
  };

  const mutation = useMutation({
    mutationFn: sendPhoneCode,
    onSuccess: (res) => {
      console.log(res);
      showMessage({
        message: "Success",
        description: "OTP sent successfully",
        type: "success",
      });
      onSuccessVerify();
    },
    onError: (err) => {
      console.log(err);
      setLoading(false);
      showMessage({
        message: "Error",
        description: "Something went wrong",
        type: "danger",
      });
    },
  });

  const handleSubmission = async () => {
    console.log(data);
    if (!data.phone_number) {
      return showMessage({
        message: "Error",
        description: "Please enter your phone number",
        type: "danger",
      });
    }
    setLoading(true);
    mutation.mutate({
      phone_number: `234${data.phone_number}`,
    });
  };

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
            maxLength={10}
            onChangeText={onChangeText("phone_number")}
          />
        </View>
        <Button
          label="PROCEED TO VERIFICATION"
          onPress={handleSubmission}
          isLoading={loading}
          disabled={loading}
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
    width: InputWidth,
    marginLeft: 16,
    paddingLeft: 16,
  },
});
