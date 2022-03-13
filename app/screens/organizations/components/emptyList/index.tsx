import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Title, Subheading} from 'react-native-paper';

export const EmptyList = () => {
  return (
    <View testID="empty-message" style={styles.container}>
      <Avatar.Icon
        accessibilityRole="image"
        icon="emoticon-sad"
        size={75}
        style={styles.icon}
      />
      <View style={styles.content}>
        <Title accessibilityRole="header">No organizations found! 😢</Title>
        <Subheading accessibilityRole="text" style={styles.text}>
          We are working to serve you with more soon.
        </Subheading>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 50,
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
