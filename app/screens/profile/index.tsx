import React from 'react';
import {ScrollView} from 'react-native';
import Profile from './sections/profile';
import Achievements from './sections/achievements';
import Impact from './sections/impact';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Main = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Profile />
      <Achievements />
      <Impact />
    </ScrollView>
  );
};

const ProfileScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        options={{headerShown: false}}
        component={Main}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreen;
