import {
	Button,
	Header,
	PasswordSuccessModal,
	Select,
} from '@src/components';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
	View,
	Text,
	Icon,
	Colors,
} from 'react-native-ui-lib';
import Textarea from 'react-native-textarea';
import picture from '../../assets/svgs/settings/image.svg';
import { ROUTES } from '@src/utils/constants';
const items: string[] = [
	'App Failures',
	'Recommendations',
];

export const ReportProblem = () => {
	const [visible, setIsVisible] = useState(false);
	return (
		<View flexG>
			<Header
				noBgColor
				title="Report a Bug or Problem"
			/>
			<View paddingH-16 flex>
				<Select
					label="Type of report"
					items={items}
				/>
				<Text lg medium marginT-16>
					Upload Photo
				</Text>
				<View style={styles.upload} row spread>
					<Text md color={Colors.gray40}>
						Tap here to upload
					</Text>
					<Icon source={picture} />
				</View>
				<Text lg medium marginT-16>
					Explain in Detail
				</Text>
				<Textarea
					containerStyle={
						styles.textareaContainer
					}
					placeholder={
						'Give us details of the problems you encountered.'
					}
					placeholderTextColor={Colors.gray40}
				/>
			</View>
			<View paddingH-16 marginB-32>
				<Button
					label="REPORT A BUG"
					onPress={() => setIsVisible(true)}
				/>
			</View>
			<PasswordSuccessModal
				visible={visible}
				onDismiss={() => setIsVisible(false)}
				buttonLabel="TAKE ME BACK HOME"
				title="Report received"
				description="Bug Report Received. We're working to resolve it."
				// route={ROUTES.HOME}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	upload: {
		height: 56,
		paddingHorizontal: 23,
		paddingVertical: 16,
		borderColor: Colors.gray4,
		borderWidth: 1,
		borderRadius: 4,
		marginTop: 7,
	},
	textareaContainer: {
		height: 269,
		paddingTop: 20,
		paddingHorizontal: 16,
		backgroundColor: Colors.transparent,
		borderColor: Colors.gray4,
		borderWidth: 1,
		borderRadius: 4,
		marginTop: 8,
	},
});
