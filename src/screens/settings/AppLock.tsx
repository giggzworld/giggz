import {
	Button,
	Header,
	PasswordSuccessModal,
	PinCodeInput,
} from '@src/components';
import { ROUTES } from '@src/utils';
import React, { useState } from 'react';
import {
	View,
	Text,
	Colors,
} from 'react-native-ui-lib';

export const AppLock = () => {
	const [visible, setIsVisible] = useState(false);
	const [oldPin, setOldPin] = useState({
		name: 'Old Pin',
		isPin: true,
		pinValue: '',
	});
	const [newPin, setNewPin] = useState({
		name: 'New Pin',
		isPin: false,
		pinValue: '',
	});
	const [confirmPin, setComfirmPin] = useState({
		name: 'Confirm Pin',
		isPin: false,
		pinValue: '',
	});
	const handleSubmit = () => {
		if (
			oldPin.isPin
			// &&
			// oldPin.pinValue.length === 4
		) {
			setOldPin({ ...oldPin, isPin: false });
			setNewPin({ ...newPin, isPin: true });
		} else if (
			newPin.isPin
			// &&
			// newPin.pinValue.length === 4
		) {
			setNewPin({ ...newPin, isPin: false });
			setComfirmPin({
				...confirmPin,
				isPin: true,
			});
		} else if (
			confirmPin.isPin
			// &&
			// confirmPin.pinValue.length === 4
		) {
			setIsVisible(true);
		}
	};
	return (
		<View flexG>
			<Header title="App Lock" />
			<View paddingH-16 marginT-16>
				<Text
					marginT-10
					medium
					color={Colors.gray1}>
					Choose a PIN that is easy for you to
					remember but hard for others to guess.
				</Text>
				{oldPin.isPin && (
					<View marginT-24>
						<Text marginB-12>{oldPin.name}</Text>
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<PinCodeInput
								pinCode={oldPin.pinValue}
								setPinCode={setOldPin}
							/>
						</View>
					</View>
				)}
				{newPin.isPin && (
					<View marginT-24>
						<Text marginB-12>{newPin.name}</Text>
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<PinCodeInput
								pinCode={newPin.pinValue}
								setPinCode={setOldPin}
							/>
						</View>
					</View>
				)}
				{confirmPin.isPin && (
					<View marginT-24>
						<Text marginB-12>
							{confirmPin.name}
						</Text>
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<PinCodeInput
								pinCode={confirmPin.pinValue}
								setPinCode={setOldPin}
							/>
						</View>
					</View>
				)}
				<Button
					label={
						oldPin.isPin
							? 'RESET PIN'
							: 'SET NEW PIN'
					}
					marginT-32
					onPress={handleSubmit}
				/>
			</View>
			<PasswordSuccessModal
				visible={visible}
				onDismiss={() => setIsVisible(false)}
				buttonLabel="DONE"
				title="App lock changed successfully"
				description="You have successfully changed your app lock pin, you’re all set!"
				otherFunction={() => {
					setComfirmPin({
						...confirmPin,
						isPin: false,
					});
					setOldPin({ ...oldPin, isPin: true });
				}}
				route={ROUTES.PASSWORD_SECURITY}
			/>
		</View>
	);
};
