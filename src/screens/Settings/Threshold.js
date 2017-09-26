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
    }),
    locked: PropTypes.bool,
    onRemove: PropTypes.func.isRequired,
    onColorChange: PropTypes.func.isRequired,
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
      <View style={{
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 0x999999ff,
      }}>
        <View style={{
          flexGrow: 0.2,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <FAIconButton
            name="remove"
            color="#A00"
            onPress={this.handleRemove}
            disabled={locked}
            style={{ marginRight: 10 }}
            iconStyle={{ marginBottom: 2 }}
          />
          <TimeText time={time} style={{ fontSize: 26 }} />
        </View>
        <Button>
          <IconButton
            onPress={this.handleColorChangeRequest}
            style={{ width: 48, height: 48, backgroundColor: color }}
          />
        </Button>
      </View>
    );
  };
}

export default Threshold;
