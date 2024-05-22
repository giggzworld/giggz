import {
	Header,
	TextInput,
	VerifyModal,
} from '@src/components';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
	Avatar,
	Icon,
	TouchableOpacity,
	View,
} from 'react-native-ui-lib';
import tick from '../../assets/svgs/rightIc.svg';
import avatar from '../../assets/svgs/avatar.svg';
import DangerIcon from '@src/assets/svgs/danger.svg';
import { ROUTES } from '@src/utils';

const ProfileEdit = () => {
	const insets = useSafeAreaInsets();
	const [isVisible, setIsVisible] =
		useState(false);

	const ActionButton = () => {
		return (
			<TouchableOpacity
				onPress={() => setIsVisible(true)}>
				<Icon source={tick} />
			</TouchableOpacity>
		);
	};
	return (
		<View
			flexG
			bg-white
			style={{
				paddingTop: insets.top,
			}}>
			<Header
				noBgColor
				isProfile
				title="My Profile"
				rightAction={ActionButton}
			/>
			<View center>
				<Avatar source={avatar} size={125} />
			</View>
			<View paddingH-16>
				<TextInput
					label="First Name"
					placeholder="Emeka Peter"
				/>
				<TextInput
					label="Email"
					placeholder="emekapeter@gmail.com"
				/>
				<TextInput
					label="Phone Number"
					placeholder="234 | 555 555 555"
				/>
				<TextInput
					label="State"
					placeholder="Abuja"
				/>
				<TextInput
					label="Phone Number"
					placeholder="2972 Westheimer Rd. Santa Ana, Illinois 85486 "
				/>
			</View>
			<VerifyModal
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				title="Cancel changes?"
				description="Are you sure you don’t save changes made?"
				buttonText="CANCEL CHANGES"
				buttonOutlineText="FINISH AND SAVE"
				route={ROUTES.PROFILE}
				icon={DangerIcon}
				route2={ROUTES.VERIFY_CODE}
			/>
		</View>
	);
};

export default ProfileEdit;
