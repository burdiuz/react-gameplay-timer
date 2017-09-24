import React from 'react';
import GamePlayTimer from './GamePlayTimer';
import Settings from 'src/screens/Settings';
import Colors from 'src/screens/Colors';
import AddColor from 'src/screens/AddColor';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

console.log(Settings);

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
    addThreshold: {
      screen: AddColor,
      navigationOptions: {
        title: 'Add threshold',
      },
    },
    editThreshold: {
      screen: AddColor,
      navigationOptions: {
        title: 'Edit threshold',
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
