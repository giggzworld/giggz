import React, { useState } from 'react';
import { View } from 'react-native-ui-lib';
import PasswordVerify from '../../components/PasswordVerify';
import { SetNewPassword } from '@src/components/SetNewPassword';

const ForgotPassword = () => {
	const [isVerify, setIsVerified] =
		useState(false);
	return (
		<View paddingT-80 flex bg-white>
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
	);
};

export default ForgotPassword;
