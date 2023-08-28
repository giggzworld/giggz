import { Header } from '@src/components/Header';
import React, {
	useEffect,
	useState,
} from 'react';
import {
	Badge,
	Colors,
	Icon,
	Text,
	TouchableOpacity,
	View,
} from 'react-native-ui-lib';
import security from '../../assets/svgs/settings/security.svg';
import bell from '../../assets/svgs/settings/bell.svg';
import report from '../../assets/svgs/settings/report.svg';
import bin from '../../assets/svgs/settings/bin.svg';
import arrowRight from '../../assets/svgs/settings/arrow-right.svg';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@src/utils';
import { SvgProps } from 'react-native-svg';

const general = [
	{
		name: 'Notifications',
		img: bell,
		path: ROUTES.NOTIFICATION_SETTINGS,
	},
	{
		name: 'Password and Security',
		img: security,
		path: ROUTES.PASSWORD_SECURITY,
	},
];
const other = [
	{
		name: 'Clear Cache',
		img: bin,
		path: 'cache',
	},
	{
		name: 'Report a Bug  or Problem',
		img: report,
		path: ROUTES.REPORT_PROBLEM,
	},
];

interface ItemProps {
	items: string;
	icon?: React.FC<SvgProps>;
	handlePress?: () => void;
}
export const ItemComponent = ({
	items,
	icon,
	handlePress,
}: ItemProps) => {
	return (
		<TouchableOpacity onPress={handlePress}>
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
					<Icon
						source={icon}
						alt="notification"
					/>
					<Text marginL-8>{items}</Text>
				</View>
				<Icon
					source={arrowRight}
					alt="notification"
				/>
			</View>
		</TouchableOpacity>
	);
};
export const SettingsScreen = () => {
	const navigation = useNavigation<any>();
	const [clearCache, setClearCache] =
		useState(false);
	const handlePress = (path: any) => {
		if (path === 'cache') {
			setClearCache(true);
		} else {
			navigation.navigate(path);
		}
	};
	useEffect(() => {
		setTimeout(() => setClearCache(false), 3000);
	}, [clearCache]);
	return (
		<View flexG>
			<Header noBgColor title="Setting" />

			<View paddingH-16 marginT-16 flex>
				<View>
					<Text sm color={Colors.gray8}>
						General
					</Text>
					{general.map((item, index) => (
						<ItemComponent
							handlePress={() =>
								navigation.navigate(item.path)
							}
							icon={item.img}
							items={item.name}
							key={index}
						/>
					))}
				</View>
				<View marginT-19>
					<Text sm color={Colors.gray8}>
						Other
					</Text>
					{other.map((item, index) => (
						<ItemComponent
							handlePress={() =>
								handlePress(item.path)
							}
							icon={item.img}
							items={item.name}
							key={index}
						/>
					))}
				</View>
			</View>
			<View centerH marginB-34>
				{clearCache && (
					<Badge
						label="Cache cleared successfully"
						size={48}
						labelStyle={{
							color: 'black',
						}}
						backgroundColor={Colors.green}
						borderRadius={4}
					/>
				)}
			</View>
			<View paddingH-16 marginB-41>
				<Text>Version 1.0</Text>
				<Text>
					&copy; 2022 Giggz. All Rights Reserved.
				</Text>
			</View>
		</View>
	);
};
