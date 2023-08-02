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

export const LoginScreen = () => {
	const [isVisible, setIsVisible] =
		useState(false);
	const [isChecked, setIsChecked] =
		useState(false);
	const navigation = useNavigation<any>();
	return (
		<View paddingT-80 flex bg-white>
			<View paddingH-16>
				<Text h2>Welcome Back</Text>
				<Text
					marginT-10
					medium
					color={Colors.gray1}>
					Please login to continue
				</Text>

				<TextInput
					label="Email Address"
					placeholder="Email Address"
				/>

				<TextInput
					label="Password"
					placeholder="Enter Password"
					secureTextEntry
					isPassword
				/>
				<View
					row
					style={{
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: 16,
					}}>
					<Checkbox
						value={isChecked}
						onValueChange={() =>
							setIsChecked((prev) => !prev)
						}
						size={20}
						color={Colors.primary}
						label="Remember me"
						labelStyle={{
							fontSize: 12,
							color: Colors.primary,
						}}
					/>
					<TouchableOpacity>
						<Text
							color={Colors.primary}
							md
							medium>
							Forgot Password?
						</Text>
					</TouchableOpacity>
				</View>
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
						Already have an account?
					</Text>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate(ROUTES.SIGNUP)
						}>
						<Text
							md
							marginL-2
							color={Colors.primary}>
							Signup here
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
