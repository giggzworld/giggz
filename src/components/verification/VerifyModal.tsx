import React from 'react';
import { Dialog, Icon, PanningProvider, Text, View } from 'react-native-ui-lib';
import { Button } from '../Button';
import { useNavigation } from '@react-navigation/native';

interface VerifyModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  title: string;
  description: string;
  buttonText: string;
  buttonOutlineText: string;
  route: string;
  icon: any;
}

export const VerifyModal: React.FC<VerifyModalProps> = ({
  isVisible,
  setIsVisible,
  title,
  description,
  buttonText,
  buttonOutlineText,
  route,
  icon,
}: VerifyModalProps) => {
  const navigation = useNavigation<any>();
  return (
    <Dialog
      visible={isVisible}
      onDismiss={() => setIsVisible(!isVisible)}
      panDirection={PanningProvider.Directions.DOWN}
    >
      <View bg-white paddingH-16 paddingV-19 br20>
        <View centerH>
          <Icon marginB-8 source={icon} />
          <Text marginB-8 xl semiBold primary>
            {title}
          </Text>
          <Text marginB-24 sm center tertiary>
            {description}
          </Text>
        </View>
        <Button
          white
          label={buttonText}
          marginB-8
          onPress={() => {
            setIsVisible(!isVisible);
            navigation.navigate(route);
          }}
        />
        <Button
          outline
          label={buttonOutlineText}
          marginB-10
          onPress={() => {
            setIsVisible(!isVisible);
          }}
        />
      </View>
    </Dialog>
  );
};
