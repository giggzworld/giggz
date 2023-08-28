import { PasswordSuccessModal } from '@src/components';
import { Button } from '@src/components/Button';
import { Header } from '@src/components/Header';
import { TextInput } from '@src/components/TextInput';
import { ROUTES } from '@src/utils';
import React, { useState } from 'react';
import {
	View,
	Text,
	Colors,
} from 'react-native-ui-lib';

export const ResetPassword = () => {
	const [isVisible, setIsVisible] =
		useState(false);
	return (
		<View flexG>
			<Header
				noBgColor
				title="Set New Password"
			/>
			<View flex paddingH-16>
				<Text
					marginT-10
					medium
					color={Colors.gray1}>
					Please choose a combination you can
					easily remember.
				</Text>

				<TextInput
					label="Old password"
					placeholder="Enter password"
					secureTextEntry
				/>
				<TextInput
					label="Type new password"
					placeholder="Enter password"
					secureTextEntry
				/>
				<TextInput
					label="Retype new password"
					placeholder="Enter Password"
					secureTextEntry
				/>
				<Button
					label="Reset Password"
					marginT-32
					onPress={() => setIsVisible(true)}
				/>
			</View>
			<PasswordSuccessModal
				buttonLabel="Done"
				title="Password  successfully changed"
				description="Your password has been changed. Your
				account is now protected with a new
				password. Keep it safe and secure"
				visible={isVisible}
				onDismiss={() => setIsVisible(false)}
				route={ROUTES.SETTINGS}
			/>
		</View>
	);
};
