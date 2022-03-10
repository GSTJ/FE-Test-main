import React from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
import {Button, Text, withTheme} from 'react-native-paper';
import {useAppDispatch} from '../redux/hooks';
import {LogOut} from '../redux/slices/userSlice';
import {NavigationContext} from '@react-navigation/native';

const More = () => {
  const dispatch = useAppDispatch();
  const navigation = React.useContext(NavigationContext);

  const logout = () => {
    dispatch(LogOut());
    navigation?.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image
        style={styles.image}
        source={require('../assets/images/logo.png')}
      />
      <View style={{flexDirection: 'row'}}>
        <Button style={styles.button} mode="contained" onPress={logout}>
          Logout
        </Button>
      </View>
      <Text>v 1.0</Text>
      <Text>{'\u00A9'} GroundSwell</Text>
    </View>
  );
};

export default withTheme(More);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {margin: 20, paddingVertical: 10, paddingHorizontal: 20},
  image: {
    borderRadius: 15,
    overflow: 'hidden',
    height: 250,
    width: 550,
  },
  input: {marginVertical: 10, height: 50, width: 350},
});
