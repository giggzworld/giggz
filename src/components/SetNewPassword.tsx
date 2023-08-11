import React, { useState } from 'react';
import {
	View,
	Text,
	Colors,
	Icon,
} from 'react-native-ui-lib';
import { Button, TextInput } from '.';
import { PasswordSuccessModal } from './PasswordSuccessModal';
interface Props {
	setIsVerified: React.Dispatch<
		React.SetStateAction<boolean>
	>;
}

const SetNewPassword = ({
	setIsVerified,
}: Props) => {
	const [isVisible, setIsVisible] =
		useState(false);
	return (
		<>
			<View paddingH-16>
				<Text h2>Set new password?</Text>
				<Text
					marginT-10
					medium
					color={Colors.gray1}>
					Please choose a combination you can
					easily remember.
				</Text>
				<TextInput
					label="Type new password"
					placeholder="0001029392pass"
					secureTextEntry
				/>
				<TextInput
					label="Retype new password"
					placeholder="0001029392pass"
					secureTextEntry
				/>
				<Button
					label="Continue"
					marginT-32
					onPress={() => setIsVisible(true)}
				/>
			</View>
			<PasswordSuccessModal
				visible={isVisible}
				onDismiss={() => setIsVisible(false)}
				setIsVerified={setIsVerified}
			/>
		</>
	);
};

export default SetNewPassword;
