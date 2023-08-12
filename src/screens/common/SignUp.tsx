import React, { useState } from 'react';
import {
	View,
	Text,
	Colors,
	Checkbox,
	TouchableOpacity,
} from 'react-native-ui-lib';
import { Button } from '../../components';
import { TextInput } from '../../components/TextInput';
import { SelectEmail } from '../../components/SelectEmail';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../utils';
import person from '../../assets/svgs/personIcon.svg';
import mail from '../../assets/svgs/mail.svg';
const details = [
	{
		label: 'First Name',
		placeholder: 'Enter Name',
		rightElement: person,
	},
	{
		label: 'Email Address',
		placeholder: 'Enter E-mail Address',
		rightElement: mail,
	},
];

export const SignUp = () => {
	const navigation = useNavigation<any>();
	const [isVisible, setIsVisible] =
		useState(false);
	console.log(isVisible);
	const [isChecked, setIsChecked] =
		useState(false);
	return (
		<View paddingT-80 flex bg-white>
			<View paddingH-16>
				<Text h2>Lets get started</Text>
				<Text
					marginT-10
					medium
					color={Colors.gray1}>
					We can’t wait to have you onboard
				</Text>

				{details.map((detail, index) => (
					<TextInput
						label={detail.label}
						key={index}
						placeholder={detail.placeholder}
						rightElement={detail.rightElement}
					/>
				))}
				<TextInput
					label="Password"
					placeholder="Enter Password"
					secureTextEntry
					isPassword
				/>
				<Checkbox
					value={isChecked}
					onValueChange={() =>
						setIsChecked((prev) => !prev)
					}
					size={20}
					color={Colors.primary}
					label="I accept the Terms and Conditions & Privacy Policy"
					labelStyle={{
						fontSize: 12,
						color: Colors.primary,
					}}
					containerStyle={{ marginTop: 16 }}
				/>

				<Button
					label="SIGN-UP"
					backgroundColor={Colors.primary}
					marginT-24
				/>
				<Button
					label="SIGNUP WITH GOOGLE"
					outline
					marginT-24
					onPress={() => setIsVisible(true)}
				/>
				<View row center marginT-40>
					<Text md color={Colors.tertiary}>
						Do not have an account?
					</Text>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate(ROUTES.LOGIN)
						}>
						<Text
							md
							marginL-2
							color={Colors.primary}>
							Login here
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<SelectEmail
				visible={isVisible}
				onDismiss={() => setIsVisible(false)}
			/>
		</View>
	);
};
