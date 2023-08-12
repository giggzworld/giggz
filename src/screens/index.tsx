import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native-ui-lib';
import { ROUTES } from '../utils';
import {
	UploadProfilePic,
	VerificationPhoneNum,
	VerificationScreen,
	VerifyHomeAddress,
	VerifyIdentityScreen,
	VerifyKyc,
} from './verification';
import { SplashScreen } from './onboarding';
import { AccountType } from './onboarding';

import {
	LoginScreen,
	VerifyOtpCode,
	SignUp,
} from './common';
import ForgotPassword from './common/ForgotPassword';

import React from 'react';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Home = () => (
	<View center flex>
		<Text>Home</Text>
	</View>
);

export default function Navigation() {
	return (
		<Stack.Navigator
			initialRouteName={ROUTES.LOGIN}
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen
				name={ROUTES.WELCOME}
				component={SplashScreen}
			/>
			<Stack.Screen
				name={ROUTES.ACCOUNT_TYPE}
				component={AccountType}
			/>
			<Stack.Screen
				name={ROUTES.LOGIN}
				component={LoginScreen}
			/>

			<Stack.Screen
				name={ROUTES.VERIFICATION}
				component={VerificationScreen}
			/>
			<Stack.Screen
				name={ROUTES.VERIFY_PHONE}
				component={VerificationPhoneNum}
			/>
			<Stack.Screen
				name={ROUTES.VERIFY_CODE}
				component={VerifyOtpCode}
			/>
			<Stack.Screen
				name={ROUTES.VERIFY_HOME_ADDRESS}
				component={VerifyHomeAddress}
			/>
			<Stack.Screen
				name={ROUTES.VERIFY_KYC}
				component={VerifyKyc}
			/>

			<Stack.Screen
				name={ROUTES.BASE}
				component={DrawerNavigation}
			/>
			<Stack.Screen
				name={ROUTES.UPLOAD_PROFILE_PIC}
				component={UploadProfilePic}
			/>
			<Stack.Screen
				name={ROUTES.VERIFY_IDENTITY}
				component={VerifyIdentityScreen}
			/>
			<Stack.Screen
				name={ROUTES.FORGOT_PASSWORD}
				component={ForgotPassword}
			/>
			<Stack.Screen
				name={ROUTES.SIGNUP}
				component={SignUp}
			/>
		</Stack.Navigator>
	);
}

const DrawerNavigation = () => (
	<Drawer.Navigator>
		<Drawer.Screen
			name={ROUTES.MAIN}
			component={TabNavigation}
		/>
	</Drawer.Navigator>
);

export const TabNavigation = () => (
	<Tab.Navigator
		screenOptions={{
			headerShown: false,
			tabBarStyle: {
				borderTopLeftRadius: 20,
				borderTopRightRadius: 20,
			},
		}}>
		<Tab.Screen
			name={ROUTES.HOME}
			component={Home}
		/>
		<Tab.Screen
			name={ROUTES.CHAT}
			component={Home}
		/>
		<Tab.Screen
			name={ROUTES.GIGGZ}
			component={Home}
		/>
		<Tab.Screen
			name={ROUTES.WALLET}
			component={Home}
		/>
	</Tab.Navigator>
);
