import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet } from 'react-native';
// import arrow_down from '../../assets/svgs/arrow_down.svg';
import {
	Icon,
	View,
	Text,
} from 'react-native-ui-lib';
interface SelectProps {
	bgColor?: string;
	arrayItems?: [];
	size?: number;
	isFull?: boolean;
}

const data = [
	{ title: 'any' },
	{ title: 'boy' },
	{ title: 'me' },
];
export const SelectDropDowm: React.FC<
	SelectProps
> = ({ bgColor, arrayItems, size, isFull }) => {
	return (
		<SelectDropdown
			data={data}
			onSelect={(selectedItem, index) => {
				// console.log(selectedItem, index);
			}}
			renderButton={(selectedItem, isOpened) => {
				return (
					<View
						style={styles.dropdownButtonStyle}>
						{selectedItem?.icon && (
							<Icon
								name={selectedItem.icon}
								style={
									styles.dropdownButtonIconStyle
								}
							/>
						)}
						<Text
							style={
								styles.dropdownButtonTxtStyle
							}>
							{(selectedItem &&
								selectedItem.title) ||
								'Select your mood'}
						</Text>
						<Icon
							name={
								isOpened
									? 'chevron-up'
									: 'chevron-down'
							}
							style={
								styles.dropdownButtonArrowStyle
							}
						/>
					</View>
				);
			}}
			renderItem={(item, index, isSelected) => {
				return (
					<View
						style={{
							...styles.dropdownItemStyle,
							...(isSelected && {
								backgroundColor: '#D2D9DF',
							}),
						}}>
						<Icon
							name={item.icon}
							style={styles.dropdownItemIconStyle}
						/>
						<Text
							style={styles.dropdownItemTxtStyle}>
							{item.title}
						</Text>
					</View>
				);
			}}
			showsVerticalScrollIndicator={false}
			dropdownStyle={styles.dropdownMenuStyle}
		/>
	);
};

const styles = StyleSheet.create({
	dropdownButtonStyle: {
		width: 200,
		height: 50,
		borderWidth: 1,
		backgroundColor: 'transparent',
		borderRadius: 12,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 12,
	},
	dropdownButtonTxtStyle: {
		flex: 1,
		fontSize: 18,
		fontWeight: '500',
		color: '#151E26',
	},
	dropdownButtonArrowStyle: {
		fontSize: 28,
	},
	dropdownButtonIconStyle: {
		fontSize: 28,
		marginRight: 8,
	},
	dropdownMenuStyle: {
		backgroundColor: '#E9ECEF',
		borderRadius: 8,
	},
	dropdownItemStyle: {
		width: '100%',
		flexDirection: 'row',
		paddingHorizontal: 12,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 8,
	},
	dropdownItemTxtStyle: {
		flex: 1,
		fontSize: 18,
		fontWeight: '500',
		color: '#151E26',
	},
	dropdownItemIconStyle: {
		fontSize: 28,
		marginRight: 8,
	},
});
