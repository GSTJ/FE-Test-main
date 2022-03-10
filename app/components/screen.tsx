import React from 'react';
import {View, StyleSheet} from 'react-native';

const Screen = ({children, style = []}) => {
  const styles = StyleSheet.create({
    screen: {
      marginHorizontal: 20,
    },
  });

  return <View style={[styles.screen, ...style]}>{children}</View>;
};

export default Screen;
