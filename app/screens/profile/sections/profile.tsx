import React from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
import {Subheading, Title, withTheme} from 'react-native-paper';

const Profile = ({theme}) => {
  const styles = StyleSheet.create({
    avatar: {
      position: 'absolute',
      height: 100,
      width: 100,
      top: 90,
      left: 30,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: theme.colors.primary,
    },

    profile: {
      borderBottomRightRadius: 50,
      height: 130,
      width: 200,
      backgroundColor: theme.colors.background,
      marginBottom: 80,
    },

    nameContainer: {
      margin: 20,
    },
  });

  return (
    <View>
      <StatusBar hidden />
      <View>
        <View style={styles.profile}>
          <Image
            style={styles.avatar}
            source={require('../../../assets/images/defaultAvatar.png')}
          />
        </View>
        <View style={styles.nameContainer}>
          <Subheading>Jonathan Litchfield</Subheading>
          <Title>The Jonathan Litchfield Fund</Title>
        </View>
      </View>
    </View>
  );
};

export default withTheme(Profile);
