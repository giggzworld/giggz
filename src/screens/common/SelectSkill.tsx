import React from "react";
import { StyleSheet } from "react-native";
import { Button, Colors, Picker, Text, View } from "react-native-ui-lib";
import { signUpAgent } from "@src/api/auth";
import { showMessage } from "react-native-flash-message";
import { useMutation } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "@src/utils";

export const SelectSkill: React.FC = ({ route }: any) => {
  const data = route?.params?.data;
  const occupation = ["Teacher", "Mechanic", "Cleaner", "Dispatch Rider"];
  const [loading, setLoading] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState("");
  const navigation = useNavigation<any>();

  const mutation = useMutation({
    mutationFn: signUpAgent,
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
    if (!selectValue) {
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
      role: selectValue.toLowerCase(),
    });
  };
  return (
    <View paddingT-80 flex bg-white>
      <View paddingH-16>
        <Text h2>What service do you offer?</Text>
        <Text marginT-12 medium color={Colors.gray1}>
          We can&apos;t wait to have you onboard
        </Text>
        <View marginT-24>
          <Text marginB-8 md>
            Skill
          </Text>
          <Picker
            placeholder="Select Skill"
            enableModalBlur={false}
            topBarProps={{ title: "Select Skill" }}
            style={styles.picker}
            value={selectValue}
            onChange={(item: any) => setSelectValue(item)}
            useWheelPicker
          >
            {occupation.map((item, index) => (
              <Picker.Item key={index} value={item} label={item} />
            ))}
          </Picker>
        </View>
        <Button
          label="PROCEED"
          backgroundColor={Colors.primary}
          borderRadius={8}
          marginT-24
          style={{ height: 48 }}
          isLoading={loading}
          sm
          medium
          disabled={loading || !selectValue}
          onPress={handleSubmission}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    color: Colors.primary,
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingLeft: 24,
  },
});
