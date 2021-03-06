import React, {PureComponent} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './app/redux/store';
import {Provider} from 'react-redux';

class GroundSwell extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => GroundSwell);
