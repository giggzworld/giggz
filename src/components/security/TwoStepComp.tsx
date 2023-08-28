import React, {
	Dispatch,
	SetStateAction,
} from 'react';
import {
	Icon,
	View,
	Text,
} from 'react-native-ui-lib';
import keyLock from '../../assets/svgs/settings/2fa.svg';
import { Button } from '../Button';
interface Props {
	setCheckSecurity: React.Dispatch<
		SetStateAction<boolean>
	>;
}

const TwoStepComp = ({
	setCheckSecurity,
}: Props) => {
	return (
		<>
			<View marginT-45 flex paddingH-16 centerH>
				<View
					br100
					bg-cyan
					center
					height={156}
					width={156}>
					<Icon source={keyLock} size={82} />
				</View>
				<Text marginT-45 center>
					Activate Two-Step Verification to add an
					extra layer of security to your account
				</Text>
			</View>
			<View paddingH-16 marginB-32>
				<Button
					label="Continue"
					onPress={() => setCheckSecurity(true)}
				/>
			</View>
		</>
	);
};

export default TwoStepComp;
