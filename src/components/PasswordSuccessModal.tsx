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
import { ROUTES } from '../utils';
interface Props {
	visible: boolean;
	onDismiss: () => void;
	setIsVerified: React.Dispatch<
		React.SetStateAction<boolean>
	>;
}

export const PasswordSuccessModal = ({
	visible,
	onDismiss,
	setIsVerified,
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
					Password successfuly changed
				</Text>
				<Text center marginB-24 marginT-8>
					Your password has been changed. Your
					account is now protected with a new
					password. Keep it safe and secure
				</Text>
				<Button
					label="LOGIN NOW"
					marginB-12
					onPress={() => {
						navigation.navigate(ROUTES.LOGIN);
						setIsVerified(false);
						onDismiss;
					}}
				/>
			</View>
		</Dialog>
	);
};
