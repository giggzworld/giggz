import { Header } from '@src/components';
import React from 'react';
import { View, Text } from 'react-native-ui-lib';

export const TopUp = () => {
	return (
		<View>
			<Header title="Top Up" noBgColor />
			<View padding-16>
				<Text>
					How much do you wish to deposit?
				</Text>
			</View>
		</View>
	);
};
