import React from 'react';
import {
	Pressable,
	StyleSheet,
	ViewStyle,
} from 'react-native';
import {
	Colors,
	Icon,
	TextField,
	TextFieldProps,
} from 'react-native-ui-lib';
import Eye from '../assets/svgs/eye.svg';
import EyeSlash from '../assets/svgs/eyeSlash.svg';
import { SvgProps } from 'react-native-svg';
type InputProps = TextFieldProps & {
	noMargin?: boolean;
	rightElement?: React.FC<SvgProps>;
};

export const TextInput: React.FC<InputProps> = (
	props
) => {
	const isPasswordField = !!props.secureTextEntry;
	const [showPassword, setShowPassword] =
		React.useState(isPasswordField);
	return (
		<TextField
			placeholderTextColor={Colors.placeholder}
			labelColor={Colors.tertiary}
			padding-16
			validationMessageStyle={styles.error}
			fieldStyle={{
				// backgroundColor: Colors.background,
				borderRadius: 8,
				borderColor: Colors.placeholder,
				borderWidth: 1,
				height: 56,
				marginTop: 12,
				padding: 16,
			}}
			containerStyle={{
				marginTop: 16,
			}}
			{...props}
			{...(!props.noMargin && {
				'marginV-12': true,
			})}
			br8
			{...(isPasswordField
				? {
						secureTextEntry: showPassword,
						trailingAccessory: (
							<Pressable
								onPress={() =>
									setShowPassword((p) => !p)
								}>
								{!showPassword ? (
									<Icon source={EyeSlash} />
								) : (
									<Icon source={Eye} />
								)}
							</Pressable>
						),
				  }
				: {
						trailingAccessory: (
							<Icon source={props.rightElement} />
						),
				  })}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		backgroundColor: Colors.white,
		borderRadius: 8,
		borderColor: Colors.gray2,
		height: 51,
	},
	background: {
		backgroundColor: Colors.background,
		borderRadius: 8,
		borderColor: Colors.gray2,
		height: 51,
	},
	transparent: {
		borderRadius: 8,
		backgroundColor: Colors.transparent,
		color: Colors.primary,
		height: 48,
		borderWidth: 1,
		borderColor: Colors.gray2,
	},
	error: {
		marginTop: 2,
		marginLeft: 4,
	},
});
