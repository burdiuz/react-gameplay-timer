/*
 * @flow
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button, IconButton, FAIconButton } from 'src/components/Button';
import TimeText from 'src/components/TimeText';

import styles from './styles';

class Threshold extends Component {

  static propTypes = {
    time: PropTypes.number.isRequired,
    itemStyle: PropTypes.shape({
      color: PropTypes.number,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
    onColorChange: PropTypes.func.isRequired,
    locked: PropTypes.bool,
  };

  static defaultProps = {
    locked: false,
  };

  handleRemove = () => {
    const { onRemove, time } = this.props;
    onRemove(time);
  };

  handleColorChangeRequest = () => {
    const { onColorChange, time, itemStyle: { color } } = this.props;
    onColorChange(time, color);
  };

  render() {
    const { time, locked, itemStyle: { color } } = this.props;
    return (
      <View style={styles.thresholdView}>
        <View style={styles.thresholdTextView}>
          <FAIconButton
            name="remove"
            color="#A00"
            onPress={this.handleRemove}
            disabled={locked}
            style={styles.thresholdRemove}
            iconStyle={styles.thresholdRemoveIcon}
          />
          <TimeText time={time} style={styles.thresholdText} />
        </View>
        <Button>
          <IconButton
            onPress={this.handleColorChangeRequest}
            style={[styles.thresholdColor, { backgroundColor: color }]}
          />
        </Button>
      </View>
    );
  };
}

export default Threshold;
