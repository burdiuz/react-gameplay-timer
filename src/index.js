/**
 * @flow
 */
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import KeepAwake from 'react-native-keep-awake';
import { Provider } from 'react-redux';
import Navigation from './Navigation';
import store from './store';

class Application extends Component {
  componentDidMount() {
    KeepAwake.activate();
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default Application;
