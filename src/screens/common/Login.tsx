import { Text, View } from 'react-native-ui-lib';
import { Button } from '@src/components';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@src/utils';

export const LoginScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View flex center bg-white>
      <Text h2>Login !!!</Text>
      <View width='90%'>
        <Button label='Continue as Artisan' uppercase outline 
        onPress={() => navigation.navigate(ROUTES.VERIFY_IDENTITY)}
        />
      </View>
    </View>
  );
};
