import React, { useRef, useState } from 'react';
import {
	View,
	Text,
	Colors,
	TouchableOpacity,
} from 'react-native-ui-lib';
import { TextInput } from './TextInput';
import { Button } from './Button';
import { ROUTES } from '../utils';
import { useNavigation } from '@react-navigation/native';
import { PinCodeInput } from './SmoothPinCodeInput';

interface Props {
	setIsVerified: React.Dispatch<
		React.SetStateAction<boolean>
	>;
}

const PasswordVerify = ({
	setIsVerified,
}: Props) => {
	const navigation = useNavigation<any>();
	const [pinCode, setPinCode] = useState('');
	const [otp, setOtp] = useState(false);

	return (
		<View paddingH-16>
			<Text h2>Forgot password?</Text>
			<Text
				marginT-10
				medium
				color={Colors.gray1}>
				Kindly input the phone number associated
				with your account below.
			</Text>
			{!otp ? (
				<TextInput
					label="Phone Number"
					placeholder="+234  |  5555 5555 555"
				/>
			) : (
				<View marginT-24>
					<Text marginB-12>OTP</Text>
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<PinCodeInput
							pinCode={pinCode}
							setPinCode={setPinCode}
						/>
					</View>
				</View>
			)}
			<Button
				label="Continue"
				marginT-32
				onPress={() => {
					!otp
						? setOtp(true)
						: setIsVerified(true);
				}}
			/>

			<View row center marginT-40>
				<Text md color={Colors.tertiary}>
					Go back to login?
				</Text>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate(ROUTES.LOGIN)
					}>
					<Text
						md
						marginL-2
						color={Colors.primary}>
						Sign in here
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default PasswordVerify;
