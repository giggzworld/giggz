import React, { useRef, useState } from 'react';
import { View } from 'react-native-ui-lib';

import SetNewPassword from '../../components/SetNewPassword';
import PasswordVerify from '../../components/PasswordVerify';

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
