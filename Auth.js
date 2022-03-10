import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {isAuthenticated} from '@okta/okta-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './app/LoginScreen.js';
import ProfileScreen from './app/ProfileScreen.js';
import {createConfig} from '@okta/okta-react-native';
import config from './auth.config';
import Spinner from 'react-native-loading-spinner-overlay';

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      progress: true,
      authenticated: false,
    };

    this.checkAuthentication = this.checkAuthentication.bind(this);
  }

  async checkAuthentication() {
    const result = await isAuthenticated();

    this.setState({
      authenticated: result.authenticated,
      progress: false,
    });
  }

  async componentDidMount() {
    await createConfig({
      clientId: config.oidc.clientId,
      redirectUri: config.oidc.redirectUri,
      endSessionRedirectUri: config.oidc.endSessionRedirectUri,
      discoveryUri: config.oidc.discoveryUri,
      scopes: config.oidc.scopes,
      requireHardwareBackedKeyStore: config.oidc.requireHardwareBackedKeyStore,
    });

    await this.checkAuthentication();
  }

  render() {
    if (this.state.progress) {
      return (
        <SafeAreaView>
          <Spinner visible={true} />
        </SafeAreaView>
      );
    }

    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={this.state.authenticated ? 'Profile' : 'Login'}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: 'Login', headerLeft: null}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{title: 'User Profile'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
