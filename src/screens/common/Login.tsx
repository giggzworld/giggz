import { Text, View } from 'react-native-ui-lib';
import { Button } from '../../components';

export const LoginScreen = () => {
  return (
    <View flex center bg-white>
      <Text h2>Login !!!</Text>
      <View width='90%'>
        <Button label='Continue as Artisan' uppercase outline />
      </View>
    </View>
  );
};
