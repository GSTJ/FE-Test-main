import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {withTheme} from 'react-native-paper';
import OverView from './overview';
import ProfileScreen from './profile';
import OrganizationsScreen from './organizations';
import More from './more';
import Statements from './statements';
import CustomNavigationBar from '../components/customNavigationBar';

const Tab = createBottomTabNavigator();

const Home = ({theme}) => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        title: '',
        tabBarStyle: {backgroundColor: theme.colors.primary},
        headerShown: false,
        headerTintColor: '#000',
      }}>
      <Tab.Screen
        name="Home"
        component={OverView}
        options={{
          title: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={'white'} size={30} />
          ),
          tabBarLabelStyle: {color: 'white', fontSize: 12},
        }}
      />
      <Tab.Screen
        name="Statements"
        component={Statements}
        options={{
          title: 'Statements',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              color={'white'}
              size={30}
            />
          ),
          tabBarLabelStyle: {color: 'white'},
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color={'white'} size={30} />
          ),
          tabBarLabelStyle: {color: 'white'},
        }}
      />
      <Tab.Screen
        name="Organizations"
        component={OrganizationsScreen}
        options={{
          title: 'Organizations',
          headerShown: true,
          header: props => <CustomNavigationBar {...props} />,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="search-web"
              color={'white'}
              size={30}
            />
          ),
          tabBarLabelStyle: {color: 'white'},
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          title: 'More',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={'white'}
              size={30}
            />
          ),
          tabBarLabelStyle: {color: 'white'},
        }}
      />
    </Tab.Navigator>
  );
};

export default withTheme(Home);
