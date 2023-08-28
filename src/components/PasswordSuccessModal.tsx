import {
	Dialog,
	PanningProvider,
	View,
	Text,
	Colors,
	Icon,
} from 'react-native-ui-lib';
import { Button } from './Button';
import success from '../assets/svgs/mark.svg';
import { useNavigation } from '@react-navigation/native';
// import { ROUTES } from '../utils';
interface Props {
	visible: boolean;
	onDismiss: () => void;
	otherFunction?: () => void;
	buttonLabel: string;
	route?: any;
	title: string;
	description: string;
}

export const PasswordSuccessModal = ({
	visible,
	onDismiss,
	title,
	buttonLabel,
	route,
	description,
}: Props) => {
	const navigation = useNavigation<any>();
	return (
		<Dialog
			visible={visible}
			onDismiss={onDismiss}
			panDirection={
				PanningProvider.Directions.DOWN
			}>
			<View
				bg-white
				br20
				paddingT-32
				paddingH-16
				paddingT-19>
				<View center>
					<Icon source={success} />
				</View>
				<Text
					h2
					color={Colors.primary}
					center
					marginT-8>
					{title}
				</Text>
				<Text center marginB-24 marginT-8>
					{description}
				</Text>
				<Button
					label={buttonLabel}
					marginB-12
					onPress={() => {
						route && navigation.navigate(route);
						onDismiss;
					}}
				/>
			</View>
		</Dialog>
	);
};
