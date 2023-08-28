import * as React from 'react';
import {
	Colors,
	Icon,
	Text,
	TouchableOpacity,
	View,
} from 'react-native-ui-lib';
import ArrowLeft from '../assets/svgs/arrow-left.svg';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../utils/constants';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
	rightAction?: () => React.ReactNode;
	title?: string;
	hideButton?: boolean;
	onPressBack?: () => void;
	noBgColor?: boolean;
}

const styles = StyleSheet.create({
	base: {
		position: 'relative',
	},
	title: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
	},
});
export const Header: React.FC<HeaderProps> = ({
	rightAction,
	title,
	hideButton,
	onPressBack,
	noBgColor,
}) => {
	const navigation = useNavigation<any>();
	const insets = useSafeAreaInsets();

	const goBack = () => {
		if (onPressBack) {
			return onPressBack();
		}
		if (navigation.canGoBack()) {
			navigation.goBack();
		} else {
			navigation.navigate(ROUTES.VERIFY_IDENTITY);
		}
	};

	return (
		<View style={{ paddingTop: insets.top }}>
			<View
				marginB-24
				paddingH-16
				centerV
				{...(!noBgColor && {
					'bg-gray80': true,
				})}
				height={48}
				row
				spread>
				<TouchableOpacity onPress={goBack}>
					<Icon
						source={ArrowLeft}
						tintColor={Colors.black2}
					/>
				</TouchableOpacity>
				<Text xl bold gray100>
					{title || ''}
				</Text>
				<View>
					{!hideButton && rightAction?.()}
				</View>
			</View>
		</View>
	);
};
