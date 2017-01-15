/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import padLeft from 'lodash/string/padLeft';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Dimensions,
  /**
   * Note for android add
   * <uses-permission android:name="android.permission.VIBRATE"/>
   * to AndroidManifest.xml
   */
  Vibration
} from 'react-native';
import KeepAwake from 'react-native-keep-awake';

const LOW_TIME = 900;
const MED_TIME = 3600;

const LOW_COLOR = 0xFF6600FF;
const MED_COLOR = 0xFFCC00FF;
const HIG_COLOR = 0x66CC00FF;

const HISTORY_MARGIN = 5;
const HISTORY_FONT_SIZE = 20;

const STATE_KEY = '@GameplayTimer:mainState';

const readState = () => {
  return AsyncStorage.getItem(STATE_KEY);
};

const noop = () => null;

const writeState = (() => {
  let prevStr = '';
  const prepRej = Promise.reject({ message: 'Data duplicated.' }).catch(noop);
  return (data) => {
    let str = JSON.stringify(data);
    if (!data || str === prevStr) {
      return prepRej;
    } else {
      return AsyncStorage.setItem(STATE_KEY, str);
    }
  }
})();

const History = ({
  list,
  style,
}) => (
  <View
    style={style} >
    {
      list.map((item, index) => (
        <Text key={index}
              style={[
                styles.historyText,
                {
                  color: item.color
                }
              ]} >
          {item.value}
        </Text>
      ))
    }
  </View>
);

const Timer = ({
  time,
  onPress,
  style,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.timerContainer} >
    <Text style={[ styles.timerText, style ]} >
      {time}
    </Text>
  </TouchableOpacity>
);

class GameplayTimer extends Component {
  _intervalId;

  state = { fontSize: 40, history: [], initialized: false };

  constructor () {
    super();
  }

  componentWillMount () {
    readState(this._init).then((str) => {
      let data;
      try {
        data = str && JSON.parse(str);
      } catch (error) {
        console.log(error);
      }
      data && this.setState(data);
      this._init();
    }, this._init);
  }

  _init = () => {
    KeepAwake.activate();
    this._layoutHandler();
    if (!this.state.startTime) {
      this._pressHandler();
    }
    this._timerHandler();
    this.setState({
      initialized: true
    });
  };

  componentDidMount () {
    this._intervalId = setInterval(this._timerHandler, 100);
  }

  _timerHandler = () => {
    this.setState({
      currentTime: Date.now() / 1000 >> 0
    });
    this._updateColor();
    this._updateType();
  };

  historyAdd () {
    const history = ([ {
      value: this.timeString,
      color: this.textColor
    } ]).concat(this.state.history).slice(0, this.maxHistoryLength);
    this.setState({
      history
    });
  }

  _pressHandler = () => {
    if (this.time) {
      this.historyAdd();
    }
    this.setState({
      startTime: Date.now() / 1000 >> 0,
      currentType: LOW_COLOR
    });
    this._saveState();
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
    const time = this.time;
    let color = LOW_COLOR;
    if (time > LOW_TIME && time < MED_TIME) {
      color = MED_COLOR;
    } else if (time > MED_TIME) {
      color = HIG_COLOR;
    }
    this.setState({
      textColor: color
    })
  };

  _updateType = () => {
    const { textColor, currentType } = this.state;
    if (textColor !== currentType) {
      Vibration.vibrate();
      this.setState({
        currentType: textColor
      });
    }
  };

  _saveState = () => {
    if (this.state.initialized) {
      writeState(this.state);
    }
  };

  get time () {
    return this.state.currentTime - this.state.startTime;
  }

  get timeString () {
    const time = this.time;
    const hours = String(time / 3600 % 24 >> 0);
    const minutes = String(time / 60 % 60 >> 0);
    const seconds = String(time % 60);
    return `${padLeft(hours, 2, '0')}:${padLeft(minutes, 2, '0')}:${padLeft(seconds, 2, '0')}`;
  }

  get textColor () {
    return this.state.textColor;
  }

  get fontSize () {
    return this.state.fontSize;
  }

  get maxHistoryLength () {
    const size = Dimensions.get('screen');
    const height = Math.max(size.width, size.height);
    return (height - HISTORY_MARGIN * 2) / HISTORY_FONT_SIZE >> 0;
  }

  render () {
    let display = null;
    if (this.state.initialized) {
      display = (
        <Timer
          time={this.timeString}
          onPress={this._pressHandler}
          style={{
            color: this.textColor,
            fontSize: this.fontSize
          }} />
      );
    }
    return (
      <View
        style={styles.container}
        onLayout={this._layoutHandler} >
        <History
          list={this.state.history}
          style={styles.historyContainer} />
        {display}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 0x000000ff,
  },
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyContainer: {
    flex: 1,
    position: 'absolute',
    top: HISTORY_MARGIN,
    left: HISTORY_MARGIN,
    right: HISTORY_MARGIN,
    bottom: HISTORY_MARGIN,
    opacity: 0.5,
  },
  historyText: {
    fontSize: HISTORY_FONT_SIZE,
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
