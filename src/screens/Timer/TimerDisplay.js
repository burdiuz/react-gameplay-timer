import React, { Component } from 'react';
import {
  View,
  /**
   * Note for android add
   * <uses-permission android:name="android.permission.VIBRATE"/>
   * to AndroidManifest.xml
   */
    Vibration,
} from 'react-native';
import PropTypes from 'prop-types';
import TimeButton from 'src/components/TimeButton';

import styles from './styles';

class TimerDisplay extends Component {

  static propTypes = {
    dispatchTimerReset: PropTypes.func,
    time: PropTypes.number.isRequired,
    style: PropTypes.any,
    startTime: PropTypes.number,
    vibrate: PropTypes.bool,
  };

  state = { fontSize: 40 };

  componentWillReceiveProps(nextProps) {
    const { startTime, time, vibrate } = this.props;
    if (vibrate && time && startTime !== nextProps.startTime) {
      Vibration.vibrate();
    }
  }

  applyLayoutChange = (event = null) => {
    if (event) {
      const { width, height } = event.nativeEvent.layout;
      this.updateFontSize(width, height);
    } else {
      const { width, height } = Dimensions.get('window');
      this.updateFontSize(width, height);
    }
  };

  updateFontSize(width, height) {
    const paddings = 0;//10;
    let fontSize = height - paddings;
    if (fontSize * 4.5 > width - paddings) {
      fontSize = (width - paddings) / 4.5 >> 0;
    }
    this.setState({ fontSize });
  }

  get fontSize() {
    return this.state.fontSize;
  }

  render() {
    const { time, style, dispatchTimerReset } = this.props;
    return (
      <View
        style={styles.container}
        onLayout={this.applyLayoutChange}>
        <TimeButton
          onPress={dispatchTimerReset}
          time={time}
          textStyle={[
            styles.text,
            style,
            { fontSize: this.fontSize }
          ]}
        />
      </View>
    );
  }
}

export default TimerDisplay;
