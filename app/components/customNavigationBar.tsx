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
          accessibilityLabel="Back"
          accessibilityRole="button"
          accessibilityHint="Will navigate you to the previous page"
          testID="navigation-back-button"
          onPress={navigation.goBack}
        />
      )}
      <Appbar.Content accessibilityRole="header" title={props.options.title} />
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
