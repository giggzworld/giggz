import React, { useState } from "react";
import {
  View,
  Text,
  Colors,
  Checkbox,
  TouchableOpacity,
} from "react-native-ui-lib";
import { Button } from "../../components";
import { TextInput } from "../../components/TextInput";
import { SelectEmail } from "../../components/SelectEmail";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../utils";
import mail from "../../assets/svgs/mail.svg";
import { showMessage } from "react-native-flash-message";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@src/api/auth";

export const LoginScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<any>();

  const [data, setData] = React.useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const onChangeText = (name: string) => (text: string) => {
    setData((prev: any) => ({ ...prev, [name]: text }));
  };

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      console.log(res);
      showMessage({
        message: "Success",
        description: "User created successfully",
        type: "success",
      });
      setLoading(false);
      navigation.navigate(ROUTES.VERIFY_IDENTITY);
    },
    onError: (err) => {
      console.log(err);
      showMessage({
        message: "Error",
        description: "Something went wrong",
        type: "danger",
      });
      setLoading(false);
    },
  });

  const handleSubmission = async () => {
    if (!data.email || !data.password) {
      return showMessage({
        message: "Error",
        description: "Please fill all fields",
        type: "danger",
      });
    }
    console.log(data);
    setLoading(true);
    mutation.mutate(data);
  };

  return (
    <View paddingT-80 flex bg-white>
      <View paddingH-16>
        <Text h2>Welcome Back</Text>
        <Text marginT-10 medium color={Colors.gray1}>
          Please login to continue
        </Text>

        <TextInput
          label="Email Address"
          placeholder="Email Address"
          rightElement={mail}
          onChangeText={onChangeText("email")}
        />

        <TextInput
          label="Password"
          placeholder="Enter Password"
          secureTextEntry
          isPassword
          onChangeText={onChangeText("password")}
        />
        <View
          row
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Checkbox
            value={isChecked}
            onValueChange={() => setIsChecked((prev) => !prev)}
            size={20}
            color={Colors.primary}
            label="Remember me"
            labelStyle={{
              fontSize: 12,
              color: Colors.primary,
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}
          >
            <Text color={Colors.primary} md medium>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          label={loading ? "Loading..." : "SIGN IN"}
          backgroundColor={Colors.primary}
          disabled={loading}
          marginT-24
          onPress={handleSubmission}
        />
        <Button
          label="SIGNUP WITH GOOGLE"
          outline
          marginT-24
          onPress={() => setIsVisible(true)}
        />
        <View row center marginT-40>
          <Text md color={Colors.tertiary}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.SIGNUP)}>
            <Text md marginL-2 color={Colors.primary}>
              Signup here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SelectEmail visible={isVisible} onDismiss={() => setIsVisible(false)} />
    </View>
  );
};
