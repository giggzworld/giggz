import * as React from 'react';
import {
  Avatar,
  Colors,
  Icon,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native-ui-lib';
import ArrowLeft from '../assets/svgs/arrow-left.svg';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../utils/constants';
import { StyleSheet } from 'react-native';
import AvatarPic from '@src/assets/svgs/drawer/avatar.svg';
import Artisans from '@src/assets/svgs/drawer/artisans.svg';
import Support from '@src/assets/svgs/drawer/support.svg';
import Settings from '@src/assets/svgs/drawer/setting.svg';
import Legal from '@src/assets/svgs/drawer/legal.svg';
import Profile from '@src/assets/svgs/drawer/profile.svg';
import Disputes from '@src/assets/svgs/drawer/disputes.svg';
import Logout from '@src/assets/svgs/drawer/logout.svg';
import LocationDark from '@src/assets/svgs/location-dark.svg';
import { VerifyModal } from './verification';
import DangerIcon from '@src/assets/svgs/danger.svg';

export const DrawerComp: React.FC<any> = ({ navigation }) => {
  const details = [
    {
      title: 'My Profile',
      icon: Profile,
      route: ROUTES.PROFILE,
    },
    {
      title: 'Saved Artisans',
      icon: Artisans,
      route: ROUTES.SAVED_ARTISANS,
    },
    {
      title: 'Help & Support',
      icon: Support,
      route: ROUTES.HELP_SUPPORT,
    },
    {
      title: 'Settings',
      icon: Settings,
      route: ROUTES.SETTINGS,
    },
    {
      title: 'Disputes',
      icon: Disputes,
      route: ROUTES.DISPUTES,
    },
    {
      title: 'Legal',
      icon: Legal,
      route: ROUTES.LEGAL,
    },
  ];
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <View marginT-48 marginL-16 height={'100%'}>
      <View row centerV marginB-32>
        <Avatar source={AvatarPic as any} size={32} />
        <View marginL-27>
          <Text md medium marginB-4>
            Johnathan Doe
          </Text>
          <View row centerV>
            <Image source={LocationDark} size={12} />
            <Text marginL-4 xs regular>
              Life Camp, FCT Abuja
            </Text>
          </View>
        </View>
      </View>
      <View flex>
        {details.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.closeDrawer();
              navigation.navigate(item.route);
            }}
          >
            <View row centerV marginB-32>
              <item.icon />
              <Text marginL-16 md regular gray90>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.closeDrawer();
          setIsVisible(true);
        }}
      >
        <View row centerV marginB-80>
          <Logout />
          <Text marginL-16 md regular red>
            Logout
          </Text>
        </View>
      </TouchableOpacity>
      <VerifyModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        title='Confirm Logout?'
        description='Are you sure you want to log out? You will be signed out of your account and need to re-enter your credentials to regain access'
        buttonText='YES, LOGOUT'
        buttonOutlineText='NO, I DON’T WANT TO LOGOUT'
        route={ROUTES.LOGIN}
        icon={DangerIcon}
      />
    </View>
  );
};
