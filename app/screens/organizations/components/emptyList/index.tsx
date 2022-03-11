import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Title, Subheading} from 'react-native-paper';

export const EmptyList = () => {
  return (
    <View testID="empty-message" style={styles.container}>
      <Avatar.Icon icon="emoticon-sad" size={75} style={styles.icon} />
      <View style={styles.content}>
        <Title>This list is still empty! 😢</Title>
        <Subheading style={styles.text}>
          Please try again later, we are working to serve you with it soon.
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
