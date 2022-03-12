import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Title, Subheading} from 'react-native-paper';

export const ErrorMessage = () => {
  return (
    <View testID="error-message" style={styles.container}>
      <Avatar.Icon
        accessibilityRole="image"
        icon="emoticon-dead"
        size={75}
        style={styles.icon}
      />
      <View style={styles.content}>
        <Title accessibilityRole="header">Oops, something went wrong! 😱</Title>
        <Subheading accessibilityRole="text" style={styles.text}>
          We had some internal issues with this request. Please try again later
          🛠
        </Subheading>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
