import {
	Button,
	Header,
	PinCodeInput,
} from '@src/components';
import React, { useState } from 'react';
import {
	View,
	Text,
	Colors,
} from 'react-native-ui-lib';

export const AppLock = () => {
	const [pinCode, setPinCode] = useState('');
	return (
		<View flexG>
			<Header title="App Lock" />
			<View paddingH-16 marginT-16>
				<Text
					marginT-10
					medium
					color={Colors.gray1}>
					Choose a PIN that is easy for you to
					remember but hard for others to guess.
				</Text>
				<View marginT-24>
					<Text marginB-12>Old pin</Text>
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
				<Button
					label="RESET PIN"
					marginT-32
					onPress={() => {}}
				/>
			</View>
		</View>
	);
};
