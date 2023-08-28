import {
	Button,
	Header,
	PasswordSuccessModal,
	TextInput,
} from '@src/components';
import React, { useState } from 'react';
import {
	View,
	Text,
	Icon,
	Picker,
	Colors,
} from 'react-native-ui-lib';

import dropdownIcon from '../../assets/svgs/dropdown.svg';
import { StyleSheet } from 'react-native';
import _ from 'lodash';
import TwoStepComp from '@src/components/security/TwoStepComp';
import { ROUTES } from '@src/utils';
const options = [
	'What is your mother’s maiden name',
	'What is the name of your high school?',
	'What was your favorite TV show as a child',
	'In what city were you born?',
	'What is your favorite vacation destination?',
	'What is your favorite book or movie?',
	'Who was your childhood best friend?',
];

export const TwoStepVerification = () => {
	const [checkSecurity, setCheckSecurity] =
		useState(false);
	const [pickerValue, setPickerValue] =
		useState('');
	const [isVisible, setIsVisible] =
		useState(false);
	const renderItem = (item: any) => {
		return (
			<Picker.Item
				key={item}
				value={item}
				label={item}
			/>
		);
	};
	return (
		<View flexG>
			{!checkSecurity ? (
				<Header
					noBgColor
					title="Two Step Verification"
				/>
			) : (
				<Header
					noBgColor
					title="Two Step Verification"
					onPressBack={() =>
						setCheckSecurity(false)
					}
				/>
			)}
			{!checkSecurity ? (
				<TwoStepComp
					setCheckSecurity={setCheckSecurity}
				/>
			) : (
				<>
					<View paddingH-16 flex>
						<Text color={Colors.tetiary}>
							Security Question
						</Text>
						<View
							style={styles.select}
							paddingT-20
							centerV>
							<Picker
								placeholder="Select an option"
								value={pickerValue}
								onChange={(
									item: React.SetStateAction<string>
								) => setPickerValue(item)}
								trailingAccessory={
									<Icon source={dropdownIcon} />
								}
								mode={Picker.modes.SINGLE}>
								{_.map(options, (item) => {
									return renderItem(item);
								})}
							</Picker>
						</View>
						<Text
							marginT-16
							color={Colors.tetiary}>
							Selected Question
						</Text>
						<View style={styles.select} centerV>
							<Text>{pickerValue}</Text>
						</View>
						<TextInput label="Answer" />
					</View>
					<View paddingH-16 marginB-32>
						<Button
							label="Activate"
							onPress={() => setIsVisible(true)}
						/>
					</View>
				</>
			)}
			<PasswordSuccessModal
				buttonLabel="DONE"
				title="Two - step Verification Enabled"
				description="Success! Your account is now protected with Two-Step Verification"
				route={ROUTES.SETTINGS}
				visible={isVisible}
				onDismiss={() => setIsVisible(false)}
				// setIsVerified={setIsVerified}
				otherFunction={() =>
					setCheckSecurity(false)
				}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	select: {
		borderWidth: 1,
		borderRadius: 10,
		borderColor: Colors.gray4,
		marginTop: 8,
		height: 56,
		width: '100%',
		paddingHorizontal: 24,
	},
});
