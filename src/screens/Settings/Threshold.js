import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button, IconButton, FAIconButton } from 'src/components/Button';
import TimeText from 'src/components/TimeText';

import styles from './styles';

// Color icon can be pencil-square or square-o with BG
class Threshold extends Component {

  static propTypes = {
    time: PropTypes.number.isRequired,
    itemStyle: PropTypes.shape({
      color: PropTypes.number,
    }),
    removable: PropTypes.bool,
  };

  render() {
    const { time, removable, itemStyle: { color } } = this.props;
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
            disabled={!removable}
            style={{ marginRight: 10 }}
            iconStyle={{ marginBottom: 2 }}
          />
          <TimeText time={time} style={{ fontSize: 26 }} />
        </View>
        <Button>
          <IconButton
            style={{ width: 48, height: 48, backgroundColor: color }}
          />
        </Button>
      </View>
    );
  };
}

export default Threshold;
