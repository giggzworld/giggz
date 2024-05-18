import { Button, Header } from '@src/components';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
	View,
	Text,
	TouchableOpacity,
	Icon,
	Avatar,
} from 'react-native-ui-lib';
import editIcon from '../../assets/svgs/edit .svg';
import avatar from '../../assets/avatar.png';
import cancel from '../../assets/svgs/cancel.svg';
import tick from '../../assets/svgs/tick.svg';
import star from '../../assets/svgs/star.svg';
import { ROUTES } from '@src/utils';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
	const navigation = useNavigation<any>();
	const insets = useSafeAreaInsets();
	const [isVerified, setIsVerified] =
		useState(false);
	const ActionButton = () => (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate(ROUTES.PROFILE_EDIT)
			}>
			<Icon source={editIcon} />
		</TouchableOpacity>
	);
	return (
		<View
			flexG
			bg-white
			style={{
				paddingTop: insets.top,
			}}>
			<Header
				noBgColor
				title="My Profile"
				rightAction={ActionButton}
			/>
			<View paddingH-16 marginT-55>
				<View
					br20
					bg-primary
					height={220}
					paddingB-20
					style={{ position: 'relative' }}>
					<View
						centerH
						bg-white
						padding-5
						br100
						style={{
							position: 'absolute',
							top: -40,
							left: '40%',
						}}>
						<Avatar source={avatar} size={78} />
					</View>
					<Text md color="#fff" marginT-52 center>
						Emeka peter
					</Text>
					<View row center marginT-16>
						{!isVerified ? (
							<View row center>
								<View row marginR-8>
									<Icon source={cancel} />
									<Text color="#F46363">
										Unverified
									</Text>
								</View>
								<TouchableOpacity>
									<View
										height={28}
										paddingH-8
										br60
										bg-white
										center>
										<Text center color="#51899F">
											Verify Now
										</Text>
									</View>
								</TouchableOpacity>
							</View>
						) : (
							<View row marginR-5>
								<Icon source={tick} />
								<Text color="#2ED477">
									Verified User
								</Text>
							</View>
						)}
					</View>
					<View row center marginT-32>
						<View marginR-16 centerH>
							<Text color="#A5C6DF">
								Job Posted
							</Text>
							<Text color="#fff" xl>
								02
							</Text>
						</View>
						<View marginR-16 centerH>
							<Text color="#A5C6DF">
								Hired Giggs
							</Text>
							<Text color="#fff" xl>
								02
							</Text>
						</View>
						<View centerH>
							<Text color="#A5C6DF">
								Hours Paid
							</Text>
							<Text color="#fff" xl>
								214
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View paddingH-16 marginT-16>
				<Text xl>Personal Information</Text>
				<View br20>
					<View
						row
						style={{
							justifyContent: 'space-between',
						}}>
						<Text color="#7E7E7E">Name:</Text>
						<Text color="#3E3E3E" md>
							Prince Chijioke
						</Text>
					</View>
					<View
						marginT-8
						row
						style={{
							justifyContent: 'space-between',
						}}>
						<Text color="#7E7E7E">
							Email Address:
						</Text>
						<Text color="#3E3E3E" md>
							emekapeter@gmail.com
						</Text>
					</View>
					<View
						marginT-8
						row
						style={{
							justifyContent: 'space-between',
						}}>
						<Text color="#7E7E7E">
							Phone Number:
						</Text>
						<Text color="#3E3E3E" md>
							+234 903 828 3447
						</Text>
					</View>
					<View
						marginT-8
						row
						style={{
							justifyContent: 'space-between',
						}}>
						<Text color="#7E7E7E">State:</Text>
						<Text color="#3E3E3E" md>
							Abuja
						</Text>
					</View>
					<View
						marginT-8
						row
						style={{
							justifyContent: 'space-between',
						}}>
						<Text color="#7E7E7E" width="50%">
							Address:
						</Text>
						<Text color="#3E3E3E" md width="50%">
							2972 Westheimer Rd. Santa Ana,
							Illinois 85486
						</Text>
					</View>
				</View>
			</View>
			<View paddingH-16 marginT-16>
				<Text lg>The Reviews </Text>
				<View
					row
					marginT-16
					style={{
						justifyContent: 'space-between',
					}}>
					<Text color="#3E3E3E" sm centerH>
						Responsive Client
					</Text>
					<Text color="#3E3E3E" md>
						2 weeks ago
					</Text>
				</View>
				<Text color="#3E3E3E" marginT-8>
					A wonderful client to work with! He had
					a clear vision for the project and
					provided detailed specifications.
					Communication was excellent throughout
					the process, and he was always
					responsive and accommodating. It was a
					pleasure bringing his ideas to life.
					Highly recommended!
				</Text>
				<View
					row
					centerH
					style={{
						justifyContent: 'space-between',
					}}>
					<View row center>
						<Avatar source={avatar} size={40} />
						<Text lg marginL-4>
							Suleman Blakes
						</Text>
					</View>
					<Icon source={star} size={70} />
				</View>
			</View>
		</View>
	);
};
export default Profile;
