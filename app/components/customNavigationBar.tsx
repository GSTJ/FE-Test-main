import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Appbar} from 'react-native-paper';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';

type CustomNavigationBarProps =
  | NativeStackHeaderProps
  | (BottomTabHeaderProps & Pick<NativeStackHeaderProps, 'back'>);

const CustomNavigationBar = ({
  navigation,
  ...props
}: Partial<CustomNavigationBarProps>) => {
  return (
    <Appbar.Header>
      {Boolean(props?.back) && (
        <Appbar.BackAction
          testID="navigation-back-button"
          onPress={navigation.goBack}
        />
      )}
      <Appbar.Content title={props.options.title} />
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
