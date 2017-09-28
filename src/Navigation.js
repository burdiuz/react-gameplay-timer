/*
 * @flow
 */
import React from 'react';
import GamePlayTimer from './GamePlayTimer';
import Settings from 'src/screens/Settings';
import Colors from 'src/screens/Colors';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

const DrawerContent = StackNavigator(
  {
    settings: {
      screen: Settings,
      navigationOptions: {
        title: 'GamePlay Timer',
      },
    },
    colors: {
      screen: Colors,
      navigationOptions: {
        title: 'Pick a color',
      },
    },
  },
  {
    initialRouteName: 'settings',
  }
);

const Navigation = DrawerNavigator(
  {
    timer: {
      screen: GamePlayTimer,
    },
  },
  {
    contentComponent: () => (
      <DrawerContent />
    ),
  },
);

export default Navigation;
