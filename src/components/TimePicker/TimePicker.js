import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'src/components/Modal';
import { LinkButton, PrimaryButton } from 'src/components/Button';
import Text, { Heading } from 'src/components/Text';
import { getHours, getMinutes, getSeconds, getTimestamp } from 'src/utils/timeToString';
import Spacer from './Spacer';
import Input from './Input';

//import styles from './styles';

class TimePicker extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    value: PropTypes.number,
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  static defaultProps = {
    visible: false,
    value: 0,
  };

  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  componentWillMount() {
    this.applyToState(this.props.value);
  }

  componentWillReceiveProps({ value }) {
    this.applyToState(value);
  }

  applyToState(value) {
    this.setState({
      hours: getHours(value),
      minutes: getMinutes(value),
      seconds: getSeconds(value),
    });
  }

  hoursChangeHandle = (value) => {
    this.setState({ hours: value });
  };

  minutesChangeHandle = (value) => {
    this.setState({ minutes: value });
  };

  secondsChangeHandle = (value) => {
    this.setState({ seconds: value });
  };

  saveHandler = () => {
    const { hours, minutes, seconds } = this.state;
    this.props.onSubmit(getTimestamp(hours, minutes, seconds));
  };

  render() {
    const { visible, onClose } = this.props;
    const { hours, minutes, seconds } = this.state;
    return (
      <Modal
        visible={visible}
        onRequestClose={onClose}
        transparent={true}
      >
        <Heading
          style={{
            marginBottom: 15,
          }}
        >
          Specify time
        </Heading>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15,
          }}
        >
          <Input
            onChange={this.hoursChangeHandle}
            autoFocus={true}
            value={hours}
          />
          <Spacer />
          <Input
            onChange={this.minutesChangeHandle}
            value={minutes}
          />
          <Spacer />
          <Input
            onChange={this.secondsChangeHandle}
            value={seconds}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <LinkButton
            label="Cancel"
            onPress={onClose}
            style={{ marginRight: 20 }}
          />
          <PrimaryButton
            label="Ok"
            onPress={this.saveHandler}
          />
        </View>
      </Modal>
    );
  }

}

export default TimePicker;
