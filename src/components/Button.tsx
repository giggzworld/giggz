import React from 'react';
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
  Colors,
} from 'react-native-ui-lib';

type ButtonProps = BaseButtonProps & {
  uppercase?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  uppercase,
  label,
  ...props
}) => {
  return (
    <BaseButton
      sm
      medium
      bg-primary
      paddingV-16
      paddingH-16
      borderRadius={10}
      outlineColor={Colors.primary}
      label={uppercase ? label?.toUpperCase() : label}
      {...props}
    />
  );
};
