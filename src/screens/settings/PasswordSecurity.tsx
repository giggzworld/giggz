import {
	Header,
	SwitchComp,
} from '@src/components';
import React, { useState } from 'react';
import {
	View,
	Text,
	Colors,
} from 'react-native-ui-lib';
import verificaton from '../../assets/svgs/settings/verification.svg';
import appLock from '../../assets/svgs/settings/appLock.svg';
import password from '../../assets/svgs/settings/password.svg';
import biometric from '../../assets/svgs/settings/biometric.svg';
import { ItemComponent } from './Settings';
const securityData = [
	{
		name: 'Change Password',
		icon: password,
	},
	{
		name: 'App Lock',
		icon: appLock,
	},
	{
		name: 'Two - Step Verification',
		icon: verificaton,
	},
];

const PasswordSecurity = () => {
	const [turnOn, setTurnOn] = useState(false);
	return (
		<View>
			<Header
				noBgColor
				title="Password & Security"
			/>
			<View paddingH-16 marginT-16>
				<Text sm color={Colors.gray8}>
					General
				</Text>
				{securityData.map((item, index) => (
					<ItemComponent
						items={item.name}
						icon={item.icon}
						key={index}
					/>
				))}
				<SwitchComp
					title={'Biometrics'}
					icon={biometric}
					value={turnOn}
					handleChange={() =>
						setTurnOn((prev: any) => !prev)
					}
				/>
			</View>
		</View>
	);
};
export default PasswordSecurity;
