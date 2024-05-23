import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "react-native-ui-lib";
import { ROUTES } from "../utils";
import {
  UploadProfilePic,
  VerificationPhoneNum,
  VerificationScreen,
  VerifyHomeAddress,
  VerifyIdentityScreen,
  VerifyKyc,
} from "./verification";
import {
  ForgotPassword,
  LoginScreen,
  VerifyOtpCode,
  SignUp,
  SelectSkill,
} from "./common";
import { AccountType, SplashScreen } from "./onboarding";
import { ArtisansList, Home } from "./dashboard";
import GiggzIcon from "@src/assets/svgs/giggz.svg";
import WalletIcon from "@src/assets/svgs/wallet.svg";
import ChatIcon from "@src/assets/svgs/message.svg";
import TabImageBackground from "@src/assets/svgs/Subtract.svg";
import HomeIcon from "@src/assets/svgs/home-2.svg";
import { DrawerComp } from "@src/components";
import { SavedArtisans } from "./artisans";
import { ProfileScreen } from "./profile";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.WELCOME}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.BASE} component={DrawerNavigation} />
      <Stack.Screen name={ROUTES.WELCOME} component={SplashScreen} />
      <Stack.Screen name={ROUTES.ACCOUNT_TYPE} component={AccountType} />
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.VERIFICATION} component={VerificationScreen} />
      <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
      <Stack.Screen
        name={ROUTES.VERIFY_PHONE}
        component={VerificationPhoneNum}
      />
      <Stack.Screen name={ROUTES.VERIFY_CODE} component={VerifyOtpCode} />
      <Stack.Screen
        name={ROUTES.VERIFY_HOME_ADDRESS}
        component={VerifyHomeAddress}
      />
      <Stack.Screen name={ROUTES.VERIFY_KYC} component={VerifyKyc} />

      <Stack.Screen
        name={ROUTES.UPLOAD_PROFILE_PIC}
        component={UploadProfilePic}
      />
      <Stack.Screen
        name={ROUTES.VERIFY_IDENTITY}
        component={VerifyIdentityScreen}
      />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.SIGNUP} component={SignUp} />
      <Stack.Screen name={ROUTES.SAVED_ARTISANS} component={SavedArtisans} />
      <Stack.Screen name={ROUTES.ARTISANS_LIST} component={ArtisansList} />
      <Stack.Screen name={ROUTES.SELECT_SKILL} component={SelectSkill} />
    </Stack.Navigator>
  );
}

const DrawerNavigation = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerType: "front",
    }}
    drawerContent={(props) => <DrawerComp {...props} />}
  >
    <Drawer.Screen name={ROUTES.MAIN} component={TabNavigation} />
  </Drawer.Navigator>
);

export const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 80,
        paddingBottom: 19,
        position: "absolute",
      },
      tabBarLabelStyle: {
        fontSize: 10,
        color: Colors.primary,
      },
    }}
  >
    <Tab.Screen
      name={ROUTES.HOME}
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <HomeIcon
            fill={focused ? "#1E4C67" : "#fff"}
            stroke={focused ? "#fff" : "#1E4C67"}
          />
        ),
      }}
    />
    <Tab.Screen
      name={ROUTES.CHAT}
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <ChatIcon
            fill={focused ? "#1E4C67" : "#fff"}
            stroke={focused ? "#1E4C67" : "#1E4C67"}
          />
        ),
      }}
    />
    <Tab.Screen
      name={ROUTES.GIGGZ}
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <GiggzIcon
            fill={focused ? "#1E4C67" : "#fff"}
            stroke={focused ? "#fff" : "#1E4C67"}
          />
        ),
      }}
    />
    <Tab.Screen
      name={ROUTES.WALLET}
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <WalletIcon
            fill={focused ? "#1E4C67" : "#fff"}
            stroke={focused ? "#fff" : "#1E4C67"}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
