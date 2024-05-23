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
import person from "../../assets/svgs/personIcon.svg";
import mail from "../../assets/svgs/mail.svg";
import { useMutation } from "@tanstack/react-query";
import { ScrollView } from "react-native";
import { signUpClient } from "@src/api/auth";
import { showMessage } from "react-native-flash-message";

interface detailsProps {
  label: string;
  placeholder: string;
  rightElement: any;
  inputText?: string;
}

const details = [
  {
    label: "First Name",
    placeholder: "Enter Name",
    rightElement: person,
    inputText: "first_name",
  },
  {
    label: "Last Name",
    placeholder: "Enter Name",
    rightElement: person,
    inputText: "last_name",
  },
  {
    label: "Email Address",
    placeholder: "Enter E-mail Address",
    rightElement: mail,
    inputText: "email",
  },
] as detailsProps[];

export const SignUp: React.FC = ({ route }: any) => {
  console.log(route.params);
  const isArtisan = route?.params?.isArtisan;
  const navigation = useNavigation<any>();
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = React.useState<{
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;
  }>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const onChangeText = (name: string) => (text: string) => {
    setData((prev: any) => ({ ...prev, [name]: text }));
  };

  const mutation = useMutation({
    mutationFn: signUpClient,
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
    if (
      !data.first_name ||
      !data.last_name ||
      !data.email ||
      !data.password ||
      !data.phone_number ||
      !isChecked
    ) {
      return showMessage({
        message: "Error",
        description: "Please fill all fields",
        type: "danger",
      });
    }
    setLoading(true);
    mutation.mutate({
      email: data.email,
      password: data.password,
      first_name: data.first_name.trim(),
      last_name: data.last_name.trim(),
      phone_number: data.phone_number,
    });
  };

  return (
    <View paddingT-80 flex bg-white>
      <ScrollView>
        <View paddingH-16>
          <Text h2>Lets get started</Text>
          <Text marginT-10 medium color={Colors.gray1}>
            We can&apos;t wait to have you onboard
          </Text>

          <TextInput
            label="First Name"
            placeholder="Enter Name"
            rightElement={person}
            onChangeText={onChangeText("first_name")}
          />

          <TextInput
            label="Last Name"
            placeholder="Enter Name"
            rightElement={person}
            onChangeText={onChangeText("last_name")}
          />
          <TextInput
            label="Email Address"
            placeholder="Enter E-mail Address"
            rightElement={mail}
            onChangeText={onChangeText("email")}
          />
          <TextInput
            label="Phone Number"
            placeholder="Enter Phone Number"
            onChangeText={onChangeText("phone_number")}
          />
          <TextInput
            label="Password"
            placeholder="Enter Password"
            secureTextEntry
            isPassword
            onChangeText={onChangeText("password")}
          />
          <Checkbox
            value={isChecked}
            onValueChange={() => setIsChecked((prev) => !prev)}
            size={20}
            color={Colors.primary}
            label="I accept the Terms and Conditions & Privacy Policy"
            labelStyle={{
              fontSize: 12,
              color: Colors.primary,
            }}
            containerStyle={{ marginTop: 16 }}
          />
          <Button
            label="SIGN-UP"
            backgroundColor={Colors.primary}
            marginT-24
            onPress={
              isArtisan
                ? () => navigation.navigate(ROUTES.SELECT_SKILL, { data })
                : handleSubmission
            }
            isLoading={loading}
          />
          <Button
            label="SIGNUP WITH GOOGLE"
            outline
            marginT-24
            onPress={() => setIsVisible(true)}
          />
          <View row center marginV-40>
            <Text md color={Colors.tertiary}>
              Do not have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.LOGIN)}>
              <Text md marginL-2 color={Colors.primary}>
                Login here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <SelectEmail
          visible={isVisible}
          onDismiss={() => setIsVisible(false)}
        />
      </ScrollView>
    </View>
  );
};
