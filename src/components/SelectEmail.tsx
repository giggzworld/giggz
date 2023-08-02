import React, { useState } from 'react';
import {
	Avatar,
	Colors,
	Dialog,
	PanningProvider,
	Text,
	TouchableOpacity,
	View,
} from 'react-native-ui-lib';
interface Props {
	visible: boolean;
	onDismiss: () => void;
}

export const SelectEmail = ({
	visible,
	onDismiss,
}: Props) => {
	return (
		<Dialog
			// useSafeArea
			visible={visible}
			onDismiss={onDismiss}
			panDirection={
				PanningProvider.Directions.DOWN
			}>
			<View bg-white br20 paddingT-32 paddingL-24>
				<Text color={Colors.tertiary1} semiBold>
					Select a google account below
				</Text>
				<View marginT-5 paddingB-48>
					{[1, 2, 3, 4].map((_, index) => (
						<TouchableOpacity
							key={index}
							onPress={onDismiss}>
							<View row marginT-19>
								<Avatar />
								<View marginL-6>
									<Text
										md
										color={Colors.tertiary}
										medium>
										Prince Chijioke
									</Text>
									<Text sm>
										princechijioke@gmail.com
									</Text>
								</View>
							</View>
						</TouchableOpacity>
					))}
				</View>
			</View>
		</Dialog>
	);
};
