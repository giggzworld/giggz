import React, { useState } from 'react';
import {
	View,
	Text,
	Colors,
} from 'react-native-ui-lib';
import { TextInput } from './TextInput';
import { Button } from './Button';
import { PasswordSuccessModal } from './PasswordSuccessModal';

interface Props {
	setIsVerified: React.Dispatch<
		React.SetStateAction<boolean>
	>;
}

export const SetNewPassword = ({
	setIsVerified,
}: Props) => {
	const [isVisible, setIsVisible] =
		useState(false);

	return (
		<View>
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
					placeholder="Enter password"
					secureTextEntry
					isPassword
				/>
				<TextInput
					label="Retype new password"
					placeholder="Enter Password"
					secureTextEntry
					isPassword
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
		</View>
	);
};
