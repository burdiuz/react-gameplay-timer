import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import {} from 'lodash';
import { Heading } from 'src/components/Text';
import { LinkButton, CheckBox } from 'src/components/Button';
import TimePicker from 'src/components/TimePicker';
import Threshold from './Threshold';

import styles from './styles';

class Settings extends Component {
  static propTypes = {
    vibrate: PropTypes.bool,
    thresholds: PropTypes.arrayOf(PropTypes.shape({
      startTime: PropTypes.number.isRequired,
      style: PropTypes.object.isRequired,
    })),
    navigation: PropTypes.shape({}).isRequired,
    dispatchAddThreshold: PropTypes.func.isRequired,
    dispatchUpdateThreshold: PropTypes.func.isRequired,
    dispatchRemoveThreshold: PropTypes.func.isRequired,
    dispatchChangeSettings: PropTypes.func.isRequired,
  };

  state = {
    timerValue: 0,
    displayTimer: false,
  };

  handleAddThreshold = () => {
    const { thresholds } = this.props;
    this.setState({
      timerValue: thresholds[thresholds.length - 1].startTime + 60000,
      displayTimer: true,
    });
  };

  handleAddTimeSubmit = (time) => {
    this.handleAddTimeClose();
    this.props.navigation.navigate('colors', {
      value: -1,
      onSelect: (color) => {
        this.props.dispatchAddThreshold(time, color);
      },
    });
  };

  handleAddTimeClose = () => {
    this.setState({
      displayTimer: false,
    });
  };

  handleThresholdRemove = (time) => {
    this.props.dispatchRemoveThreshold(time);
  };

  handleThresholdColorChange = (time, color) => {
    this.props.navigation.navigate('colors', {
      value: color,
      onSelect: (color) => {
        this.props.dispatchUpdateThreshold(time, color);
      },
    });
  };

  handleVibrateChange = () => {
    const { dispatchChangeSettings, vibrate } = this.props;
    dispatchChangeSettings(!vibrate);
  };

  render() {
    const { thresholds, vibrate } = this.props;
    const { timerValue, displayTimer } = this.state;
    return (
      <View style={{
        padding: 10,
        paddingBottom: 30,
        flex: 1,
      }}>
        <Heading>Thresholds</Heading>
        <View style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
          <ScrollView>
            {
              thresholds.map(({ startTime, style }, index) => (
                <Threshold
                  key={startTime}
                  locked={Boolean(!index)}
                  time={startTime}
                  itemStyle={style}
                  onRemove={this.handleThresholdRemove}
                  onColorChange={this.handleThresholdColorChange}
                />
              ))
            }
          </ScrollView>
          <LinkButton
            label="Add threshold"
            onPress={this.handleAddThreshold}
            style={{
              marginTop: 15,
              marginBottom: 30,
            }}
          />
        </View>
        <CheckBox
          label="Vibrate on threshold pass"
          selected={vibrate}
          onPress={this.handleVibrateChange}
          color={'#4285F4'}
          disabledColor={'#999'}
          selectedColor={'#4285F4'}
        />
        <TimePicker
          value={timerValue}
          visible={displayTimer}
          onSubmit={this.handleAddTimeSubmit}
          onClose={this.handleAddTimeClose}
        />
      </View>
    );
  }
}

export default Settings;
