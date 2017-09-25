import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { Heading } from 'src/components/Text';
import { LinkButton, CheckBox } from 'src/components/Button';
import Threshold from './Threshold';

import styles from './styles';

class Settings {

  state = { displayTimer: false };

  addThresholdHandler = () => {
    this.setState({
      displayTimer: true,
    });
  };

  render() {
    const { thresholds, vibrate } = this.props;
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
                  removable={Boolean(index)}
                  time={startTime}
                  itemStyle={style}
                />
              ))
            }
          </ScrollView>
          <LinkButton
            label="Add threshold"
            onPress={this.addThresholdHandler}
            style={{
              marginTop: 15,
              marginBottom: 30
            }}
          />
        </View>
        <CheckBox
          label="Vibrate on threshold pass"
          selected={vibrate}
          color={'#4285F4'}
          disabledColor={'#999'}
          selectedColor={'#4285F4'}
        />
        <TimePicker visible={this.state.displayTimer} />
      </View>
    );
  }
}

export default Settings;
