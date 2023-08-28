import React, { useState } from 'react';
import {
	Picker,
	View,
	Text,
	Colors,
	Icon,
} from 'react-native-ui-lib';
import dropdownIcon from '../assets/svgs/dropdown.svg';
import { StyleSheet } from 'react-native';
import _ from 'lodash';
interface SelectProps {
	label: string;
	items: string[];
	pickValue?: string;
}

export const Select = ({
	label,
	items,
	pickValue,
}: SelectProps) => {
	const [pickerValue, setPickerValue] =
		useState('');
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
		<View>
			<Text color={Colors.tetiary} lg medium>
				{label}
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
					{_.map(items, (item) => {
						return renderItem(item);
					})}
				</Picker>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	select: {
		borderWidth: 1,
		borderRadius: 4,
		borderColor: Colors.gray4,
		marginTop: 8,
		height: 56,
		width: '100%',
		paddingHorizontal: 24,
	},
});
