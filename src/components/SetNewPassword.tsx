import React, { useState } from 'react';
import {
	View,
	Text,
	Colors,
} from 'react-native-ui-lib';
import { TextInput } from './TextInput';
import { Button } from './Button';
import { PasswordSuccessModal } from './PasswordSuccessModal';
import { ROUTES } from '@src/utils';

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
				buttonLabel="LOGIN NOW"
				title="Password successfuly changed"
				description="Your password has been changed. Your
				account is now protected with a new
				password. Keep it safe and secure"
				route={ROUTES.LOGIN}
				visible={isVisible}
				onDismiss={() => setIsVisible(false)}
				otherFunction={() => setIsVerified(false)}
			/>
		</View>
	);
};
