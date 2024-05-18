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
import {
	SplashScreen,
	AccountType,
} from './onboarding';

import {
	LoginScreen,
	VerifyOtpCode,
	SignUp,
} from './common';
import ForgotPassword from './common/ForgotPassword';

import React from 'react';
import {
	AppLock,
	NotificationSettings,
	PasswordSecurity,
	ReportProblem,
	ResetPassword,
	SettingsScreen,
	TwoStepVerification,
} from './settings';
import Profile from './profile/Profile';
import ProfileEdit from './profile/ProfileEdit';

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
			initialRouteName={ROUTES.SETTINGS}
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
			<Stack.Screen
				name={ROUTES.SETTINGS}
				component={SettingsScreen}
			/>
			<Stack.Screen
				name={ROUTES.NOTIFICATION_SETTINGS}
				component={NotificationSettings}
			/>
			<Stack.Screen
				name={ROUTES.PASSWORD_SECURITY}
				component={PasswordSecurity}
			/>
			<Stack.Screen
				name={ROUTES.SET_NEW_PASSWORD}
				component={ResetPassword}
			/>
			<Stack.Screen
				name={ROUTES.TWO_FA}
				component={TwoStepVerification}
			/>
			<Stack.Screen
				name={ROUTES.APP_LOCK}
				component={AppLock}
			/>
			<Stack.Screen
				name={ROUTES.REPORT_PROBLEM}
				component={ReportProblem}
			/>
			<Stack.Screen
				name={ROUTES.PROFILE}
				component={Profile}
			/>
			<Stack.Screen
				name={ROUTES.PROFILE_EDIT}
				component={ProfileEdit}
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
