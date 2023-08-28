import React, { useState } from 'react';
import { View } from 'react-native-ui-lib';
import PasswordVerify from '../../components/PasswordVerify';
import { SetNewPassword } from '@src/components/SetNewPassword';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ForgotPassword = () => {
	const [isVerify, setIsVerified] =
		useState(false);
	const insets = useSafeAreaInsets();
	return (
		<View
			flexG
			bg-white
			style={{ paddingTop: insets.top }}>
			<View marginT-40>
				{!isVerify ? (
					<PasswordVerify
						setIsVerified={setIsVerified}
					/>
				) : (
					<SetNewPassword
						setIsVerified={setIsVerified}
					/>
				)}
			</View>
		</View>
	);
};

export default ForgotPassword;
