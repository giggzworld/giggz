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
import { ROUTES } from '@src/utils';
import { useNavigation } from '@react-navigation/native';
const securityData = [
	{
		name: 'Change Password',
		icon: password,
		path: ROUTES.SET_NEW_PASSWORD,
	},
	{
		name: 'App Lock',
        icon: appLock,
        path: ROUTES.APP_LOCK,
	},
	{
		name: 'Two - Step Verification',
		icon: verificaton,
		path: ROUTES.TWO_FA,
	},
];

export const PasswordSecurity = () => {
	const [turnOn, setTurnOn] = useState(false);
	const navigation = useNavigation<any>();
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
						handlePress={() =>
							navigation.navigate(item.path)
						}
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
