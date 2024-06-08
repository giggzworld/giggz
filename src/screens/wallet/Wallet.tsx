import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
	View,
	Text,
	Icon,
	TouchableOpacity,
} from 'react-native-ui-lib';
import eye from '../../assets/svgs/eye1.svg';
import eyeSlash from '../../assets/svgs/eyeSlash1.svg';
import credit from '../../assets/svgs/credit.svg';
import debit from '../../assets/svgs/debit.svg';
import { StyleSheet } from 'react-native';
import { TransactionTab } from './TransactionTab';

export const Wallet = () => {
	const insets = useSafeAreaInsets();
	const [isVisible, setIsVisible] =
		useState(false);
	return (
		<View
			flex
			bg-white
			style={{
				paddingTop: insets.top,
			}}>
			<View style={styles.header}>
				<Text center color="white" xl marginB-16>
					Wallet
				</Text>
				<View row spread centerV>
					<View height={52}>
						<Text color="#A5C6DF">
							Your Balance
						</Text>
						<Text color="#fff" xl>
							{isVisible
								? 'NGN 10,0000'
								: '*** *** ***'}
						</Text>
					</View>
					<TouchableOpacity
						onPress={() =>
							setIsVisible((prev) => !prev)
						}>
						{isVisible ? (
							<Icon source={eye} />
						) : (
							<Icon source={eyeSlash} />
						)}
					</TouchableOpacity>
				</View>
				<View row spread marginT-16>
					<View
						row
						width={'48%'}
						height={52}
						br20
						backgroundColor="#163B4E">
						<Icon source={credit} />
						<View centerV>
							<Text color="#A5C6DF" xs>
								Top Deposit
							</Text>
							<Text color="#D7F0FE" sm>
								NGN 120,000
							</Text>
						</View>
					</View>
					<View
						row
						backgroundColor="#163B4E"
						width={'48%'}
						height={52}
						br20>
						<Icon source={debit} />
						<View centerV>
							<Text color="#A5C6DF" xs>
								Total Spent
							</Text>
							<Text color="#D7F0FE" sm>
								NGN 120,000
							</Text>
						</View>
					</View>
				</View>
				<View row spread marginT-16>
					<TouchableOpacity>
						<View
							width={180}
							height={60}
							bg-white
							br30
							center>
							<Text>TOP-UP</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View style={styles.outlineButton}>
							<Text color="#FFFFFF">
								WITHDRAWAL
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<View padding-16>
				<Text h3>Transaction History</Text>
			</View>
			<View flexG paddingH-16>
				<TransactionTab />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		height: 281,
		backgroundColor: '#1E4C67',
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		padding: 16,
	},
	outlineButton: {
		width: 180,
		height: 60,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
