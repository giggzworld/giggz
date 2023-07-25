import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native-ui-lib';
import { ROUTES } from '../utils';
import { LoginScreen } from './common';

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
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.BASE} component={DrawerNavigation} />
    </Stack.Navigator>
  );
}

const DrawerNavigation = () => (
  <Drawer.Navigator>
    <Drawer.Screen name={ROUTES.MAIN} component={TabNavigation} />
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
    <Tab.Screen name={ROUTES.HOME} component={Home} />
    <Tab.Screen name={ROUTES.CHAT} component={Home} />
    <Tab.Screen name={ROUTES.GIGGZ} component={Home} />
    <Tab.Screen name={ROUTES.WALLET} component={Home} />
  </Tab.Navigator>
);
