import React from "react";
import { Colors, Text, TouchableOpacity, View } from "react-native-ui-lib";
import { Button, Header, VerifyModal } from "@src/components";
import { useWindowDimensions } from "react-native";
import SmoothPinCodeInput from "react-native-smooth-pincode-input-v2";
import { formatSeconds } from "@src/utils/common";
import SuccessIcon from "@src/assets/svgs/success.svg";
import { ROUTES } from "@src/utils";
import { verifyPhoneCode } from "@src/api/auth";
import { showMessage } from "react-native-flash-message";
import { useMutation } from "@tanstack/react-query";

export const VerifyOtpCode: React.FC = ({ route }: any) => {
  const codeInputRef = React.useRef<typeof SmoothPinCodeInput>(null);
  const [code, setCode] = React.useState("");
  const [counter, setCounter] = React.useState(0);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const [currentCode, setCurrentCode] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const windowDimensions = useWindowDimensions();
  let cellSize, cellSpacing;
  if (windowDimensions.width < 375) {
    cellSize = 30;
    cellSpacing = cellSize / 2.5;
  } else if (windowDimensions.width > 375) {
    cellSize = 48;
    cellSpacing = cellSize / 2.5;
  }

  React.useEffect(() => {
    if (counter > 0) {
      intervalRef.current = setTimeout(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearTimeout(intervalRef.current);
    }

    return () => {
      clearTimeout(intervalRef.current!);
    };
  }, [counter]);
  console.log("code", code);

  const isValid = code.length === 6;

  const mutation = useMutation({
    mutationFn: verifyPhoneCode,
    onSuccess: (res) => {
      console.log(res);
      showMessage({
        message: "Success",
        description: "User created successfully",
        type: "success",
      });
      setLoading(false);
      setIsVisible(true);
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
    if (!isValid) {
      return showMessage({
        message: "Error",
        description: "Please fill all fields",
        type: "danger",
      });
    }
    setLoading(true);
    mutation.mutate({
      phone_number: route?.params?.phone_number,
      otp: code,
    });
  };
  return (
    <View bg-white flexG useSafeArea>
      <Header title="Verification" />
      <View marginH-16>
        <Text gray90 sm marginB-16 md regular>
          Input the four digits code sent to your phone messages.
        </Text>
        <Text sm regular>
          OTP
        </Text>
        <View>
          <SmoothPinCodeInput
            ref={codeInputRef}
            placeholder="0"
            codeLength={6}
            restrictToNumbers
            keyBoardType="number-pad"
            cellSpacing={cellSpacing}
            cellSize={cellSize}
            containerStyle={{
              width: "100%",
              height: 75,
              marginTop: 8,
              marginBottom: 20,
            }}
            cellStyle={{
              borderWidth: 2,
              borderColor: Colors.gray4,
              borderRadius: 5,
            }}
            cellStyleFocused={{
              borderColor: Colors.gray90,
            }}
            textStyle={{
              fontSize: 14,
              color: Colors.gray40,
            }}
            value={code}
            onTextChange={setCode}
          />
        </View>
        {counter > 0 ? (
          <View row center marginB-32>
            <Text md gray70 regular>
              Resend code in{" "}
            </Text>
            <Text md blue>
              {formatSeconds(counter)}
            </Text>
          </View>
        ) : (
          <View row center marginB-32>
            <Text md gray70 regular>
              No code?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setCurrentCode(code);
                setCounter(300);
              }}
            >
              <Text md blue>
                Tap to resend
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <Button
          label="VERIFY"
          onPress={handleSubmission}
          disabled={!isValid || loading}
          loading={loading}
        />
      </View>
      <VerifyModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        title="Phone number verified"
        description="Congratulations! Your phone number has been successfully verified. Enjoy enhanced security and access to all features."
        buttonText="CONTINUE VERIFICATION"
        buttonOutlineText="FINISH UP LATER"
        route={ROUTES.VERIFICATION}
        icon={SuccessIcon}
      />
    </View>
  );
};
