import { Assets, Colors, Spacings, Typography } from 'react-native-ui-lib';
import { colors } from './colors';
import { fonts } from './fonts';
import { Platform } from 'react-native';

const isIOS = Platform.OS === 'ios';

export const initUISystem = () => {
  console.log('initUISystem');

  Colors.loadColors(colors);

  Typography.loadTypographies({
    h0: {
      fontSize: 32,
      lineHeight: 44,
      fontFamily: fonts.extraBold,
    },
    h1: {
      fontSize: 24,
      lineHeight: 33,
      fontFamily: fonts.bold,
    },
    h2: {
      fontSize: 20,
      lineHeight: 28,
      fontFamily: fonts.semiBold,
    },
    h3: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: fonts.bold,
    },
    thin: { fontFamily: fonts.thin, fontWeight: isIOS ? '100' : undefined },
    extraLight: {
      fontFamily: fonts.extraLight,
      fontWeight: isIOS ? '200' : undefined,
    },
    light: { fontFamily: fonts.light, fontWeight: isIOS ? '300' : undefined },
    regular: { fontFamily: fonts.regular },
    medium: {
      fontFamily: fonts.medium,
      fontWeight: isIOS ? '500' : undefined,
    },
    semiBold: {
      fontFamily: fonts.semiBold,
      fontWeight: isIOS ? '600' : undefined,
    },
    bold: { fontFamily: fonts.bold },
    bolder: {
      fontFamily: fonts.extraBold,
    },
    amStrong: {
      fontFamily: fonts.black,
      fontWeight: isIOS ? '800' : undefined,
    },
    xs: { fontSize: 10, lineHeight: 14, fontFamily: fonts.regular },
    sm: { fontSize: 12, lineHeight: 16, fontFamily: fonts.regular },
    md: { fontSize: 14, lineHeight: 19, fontFamily: fonts.regular },
    lg: { fontSize: 16, lineHeight: 21, fontFamily: fonts.regular },
    xl: { fontSize: 18, lineHeight: 24, fontFamily: fonts.regular },
    xxl: { fontSize: 20, lineHeight: 27, fontFamily: fonts.regular },
    underline: {
      textDecorationLine: 'underline',
    },
    uppercase: {
      textTransform: 'uppercase',
    },
    'opacity-30': {
      opacity: 0.3,
    },
    'opacity-50': {
      opacity: 0.5,
    },
  });

  Spacings.loadSpacings({
    page: 16,
  });
  // Assets.loadAssetsGroup('icons', {
  //   home: require('@assets/splash.png'),
  // });
  // Assets.loadAssetsGroup('images', {
  //   logo: require('@assets/icon.png'),
  // });
};


export const formatSeconds = (seconds: number): string => {
  const minutes = `${Math.floor(seconds / 60)}`.padStart(2, '0');
  const remainingSeconds = `${seconds % 60}`.padStart(2, '0');

  return `${minutes}:${remainingSeconds}`;
};
