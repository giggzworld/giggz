import React from 'react';
import { SvgProps } from 'react-native-svg';
import {
	Icon,
	Switch,
	Text,
	View,
} from 'react-native-ui-lib';
interface Props {
	icon?: React.FC<SvgProps>;
	title: string;
	value: boolean;
	handleChange: (id?: string) => void;
}

export const SwitchComp = ({
	icon,
	title,
	value,
	handleChange,
}: Props) => {
	return (
		<View
			marginT-12
			row
			br20
			spread
			centerV
			paddingH-12
			paddingV-8
			bg-white
			height={50}>
			<View row>
				{icon && <Icon source={icon} />}
				<Text
					{...(icon && {
						'marginL-12': true,
					})}>
					{title}
				</Text>
			</View>
			<Switch
				onColor="#2ED477"
				offColor="#BFBFBF"
				value={value}
				onValueChange={handleChange}
			/>
		</View>
	);
};
