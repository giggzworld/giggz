import * as React from 'react';
import { transactData } from './transaction';
import {
	View,
	Text,
	Icon,
} from 'react-native-ui-lib';
import {
	PressableAndroidRippleConfig,
	ScrollView,
	StyleProp,
	StyleSheet,
	TextStyle,
	ViewStyle,
	useWindowDimensions,
} from 'react-native';
import {
	TabView,
	SceneMap,
	TabBar,
	NavigationState,
	Route,
	SceneRendererProps,
	TabBarIndicatorProps,
	TabBarItemProps,
} from 'react-native-tab-view';
import {
	Scene,
	Event,
} from 'react-native-tab-view/lib/typescript/src/types';
import pendingIcon from '../../assets/svgs/pending.svg';
import debitIcon from '../../assets/svgs/debit.svg';
import creditIcon from '../../assets/svgs/credit.svg';
const FirstRoute = () => (
	<View
		style={{
			flex: 1,
		}}>
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			showsVerticalScrollIndicator={false}>
			{transactData.map((data, i) => (
				<View
					row
					spread
					centerH
					marginT-16
					key={i}>
					<View row centerV>
						{data.status === 'Pending' && (
							<Icon source={pendingIcon} />
						)}
						{data.status === 'Debit' && (
							<Icon source={debitIcon} />
						)}
						{data.status === 'Credit' && (
							<Icon source={creditIcon} />
						)}

						<View>
							<Text sm color="#202223">
								{data.status}
							</Text>
							<Text xs color="#7E7E7E">
								{data.date}
							</Text>
						</View>
					</View>
					<Text
						color="#545454
">
						{data.amount}
					</Text>
				</View>
			))}
		</ScrollView>
	</View>
);

const SecondRoute = () => (
	<View
		style={{
			flex: 1,
		}}>
		<ScrollView>
			{transactData
				.filter(
					(value) => value.status === 'Credit'
				)
				.map((data, i) => (
					<View
						row
						spread
						centerH
						marginT-16
						key={i}>
						<View row centerV>
							<Icon source={creditIcon} />
							<View>
								<Text sm color="#202223">
									{data.status}
								</Text>
								<Text xs color="#7E7E7E">
									{data.date}
								</Text>
							</View>
						</View>
						<Text
							color="#545454
">
							{data.amount}
						</Text>
					</View>
				))}
		</ScrollView>
	</View>
);
const ThirdRoute = () => (
	<View
		style={{
			flex: 1,
		}}>
		<ScrollView>
			{transactData
				.filter(
					(value) => value.status === 'Debit'
				)
				.map((data, i) => (
					<View
						row
						spread
						centerH
						marginT-16
						key={i}>
						<View row centerV>
							<Icon source={debitIcon} />
							<View>
								<Text sm color="#202223">
									{data.status}
								</Text>
								<Text xs color="#7E7E7E">
									{data.date}
								</Text>
							</View>
						</View>
						<Text
							color="#545454
">
							{data.amount}
						</Text>
					</View>
				))}
		</ScrollView>
	</View>
);

const renderScene = SceneMap({
	first: FirstRoute,
	second: SecondRoute,
	third: ThirdRoute,
});
const renderTabBar = (
	props: JSX.IntrinsicAttributes &
		SceneRendererProps & {
			navigationState: NavigationState<Route>;
			scrollEnabled?: boolean | undefined;
			bounces?: boolean | undefined;
			activeColor?: string | undefined;
			inactiveColor?: string | undefined;
			pressColor?: string | undefined;
			pressOpacity?: number | undefined;
			getLabelText?:
				| ((
						scene: Scene<Route>
				  ) => string | undefined)
				| undefined;
			getAccessible?:
				| ((
						scene: Scene<Route>
				  ) => boolean | undefined)
				| undefined;
			getAccessibilityLabel?:
				| ((
						scene: Scene<Route>
				  ) => string | undefined)
				| undefined;
			getTestID?:
				| ((
						scene: Scene<Route>
				  ) => string | undefined)
				| undefined;
			renderLabel?:
				| ((
						scene: Scene<Route> & {
							focused: boolean;
							color: string;
						}
				  ) => React.ReactNode)
				| undefined;
			renderIcon?:
				| ((
						scene: Scene<Route> & {
							focused: boolean;
							color: string;
						}
				  ) => React.ReactNode)
				| undefined;
			renderBadge?:
				| ((
						scene: Scene<Route>
				  ) => React.ReactNode)
				| undefined;
			renderIndicator?:
				| ((
						props: TabBarIndicatorProps<Route>
				  ) => React.ReactNode)
				| undefined;
			renderTabBarItem?:
				| ((
						props: TabBarItemProps<Route> & {
							key: string;
						}
				  ) => React.ReactElement<
						any,
						| string
						| React.JSXElementConstructor<any>
				  >)
				| undefined;
			onTabPress?:
				| ((scene: Scene<Route> & Event) => void)
				| undefined;
			onTabLongPress?:
				| ((scene: Scene<Route>) => void)
				| undefined;
			tabStyle?: StyleProp<ViewStyle>;
			indicatorStyle?: StyleProp<ViewStyle>;
			indicatorContainerStyle?: StyleProp<ViewStyle>;
			labelStyle?: StyleProp<TextStyle>;
			contentContainerStyle?: StyleProp<ViewStyle>;
			style?: StyleProp<ViewStyle>;
			gap?: number | undefined;
			testID?: string | undefined;
			android_ripple?:
				| PressableAndroidRippleConfig
				| undefined;
		}
) => (
	<TabBar
		{...props}
		activeColor={'#3E3E3E'}
		indicatorStyle={{
			backgroundColor: '#000',
			borderWidth: 1,
		}}
		indicatorContainerStyle={{
			backgroundColor: '#000',
			borderWidth: 5,
		}}
		tabStyle={{
			backgroundColor: 'white',
			borderBottomWidth: 2,
			borderBottomColor: '#949494',
		}}
		labelStyle={{
			color: '#949494',
			fontSize: 10,
			textAlign: 'center',
		}}
	/>
);
export const TransactionTab = () => {
	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'first', title: 'All Transaction' },
		{ key: 'second', title: 'Credit' },
		{ key: 'third', title: 'Debit' },
	]);
	return (
		<TabView
			renderTabBar={renderTabBar}
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={{ width: layout.width }}
		/>
	);
};

const styles = StyleSheet.create({});
