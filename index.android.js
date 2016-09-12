/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// TODO add https://www.npmjs.com/package/react-native-keep-awake

import React, { Component } from 'react';
import padLeft from 'lodash/string/padLeft';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  /**
   * Note for android add
   * <uses-permission android:name="android.permission.VIBRATE"/>
   * to AndroidManifest.xml
   */
  Vibration
} from 'react-native';

class GameplayTimer extends Component {

  static LOW_TIME = 900;
  static MED_TIME = 3600;
  /*
   static LOW_COLOR = 0xFF6666FF;
   static MED_COLOR = 0xFFFF66FF;
   static HIG_COLOR = 0x66FF66FF;
   */
  static LOW_COLOR = 0xFF6600FF;
  static MED_COLOR = 0xFFCC00FF;
  static HIG_COLOR = 0x66CC00FF;

  _intervalId;

  state = { fontSize: 40 };

  constructor () {
    super();
  }

  componentWillMount () {
    this._layoutHandler();
    this._pressHandler();
  }

  componentDidMount () {
    this._intervalId = setInterval(this._timerHandler, 250);
  }

  _timerHandler = () => {
    this.setState({
      currentTime: Date.now()
    });
    this._updateColor();
    this._updateType();
  };

  _pressHandler = () => {
    this.setState({
      startTime: Date.now(),
      currentType: GameplayTimer.LOW_COLOR
    });
    this._timerHandler();
  };

  _layoutHandler = (event) => {
    if (event) {
      var { width, height } = event.nativeEvent.layout;
    } else {
      var { width, height } = Dimensions.get('window');
    }
    this._updateFontSize(width, height);
  };

  _updateFontSize = (width, height) => {
    const paddings = 10;
    let fontSize = height - paddings;
    if (fontSize * 4.5 > width - paddings) {
      fontSize = (width - paddings) / 4.5 >> 0;
    }
    this.setState({ fontSize });
  };

  _updateColor = () => {
    let time = this.time;
    let color = GameplayTimer.LOW_COLOR;
    if (time > GameplayTimer.LOW_TIME && time < GameplayTimer.MED_TIME) {
      color = GameplayTimer.MED_COLOR;
    } else if (time > GameplayTimer.MED_TIME) {
      color = GameplayTimer.HIG_COLOR;
    }
    this.setState({
      textColor: color
    })
  };

  _updateType = () => {
    let { textColor, currentType } = this.state;
    if (textColor !== currentType) {
      Vibration.vibrate();
      this.setState({
        currentType: textColor
      });
    }
  };

  get time () {
    return (this.state.currentTime - this.state.startTime) / 1000 >> 0;
  }

  get timeString () {
    let time = this.time;
    let hours = String(time / 3600 % 24 >> 0);
    let minutes = String(time / 60 % 60 >> 0);
    let seconds = String(time % 60);
    return `${padLeft(hours, 2, '0')}:${padLeft(minutes, 2, '0')}:${padLeft(seconds, 2, '0')}`;
  }

  get textColor () {
    return this.state.textColor;
  }

  get fontSize () {
    return this.state.fontSize;
  }

  render () {
    return (
      <TouchableOpacity
        onPress={this._pressHandler}
        onLayout={this._layoutHandler}
        style={styles.container} >
        <Text
          style={[ styles.timerText, {
            color: this.textColor,
            fontSize: this.fontSize
          } ]} >
          {this.timeString}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  timerText: {
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GameplayTimer', () => GameplayTimer);
