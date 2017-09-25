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

//import styles from './styles';

const Input = ({ refHandler, ...props }) => (
  <TextInput
    keyboardType="numeric"
    maxLength={2}
    underlineColorAndroid="transparent"
    placeholderTextColor="#eeeeee"
    placeholder="00"
    ref={refHandler}
    style={{
      fontSize: 60,
      width: 80,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: 0xeeeeeeff,
    }}
    {...props}
  />
);

const Spacer = () => (
  <Text
    style={{
      fontSize: 60,
      width: 18,
    }}
  >:</Text>
);

class TimePicker extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    value: PropTypes.number,
    onChange: PropTypes.func,
  };

  hoursChangeHandle = (text) => {
    if (text.length === 2 && this.minutesField) {
      this.minutesField.focus();
    }
  };

  minutesChangeHandle = (text) => {
    if (text.length === 2 && this.secondsField) {
      this.secondsField.focus();
    }
  };

  secondsChangeHandle = (text) => {
  };

  hoursRefHandle = (field) => this.hoursField = field;
  minutesRefHandle = (field) => this.minutesField = field;
  secondsRefHandle = (field) => this.secondsField = field;

  render() {
    const { visible } = this.props;
    return (
      <Modal
        visible={visible}
        onRequestClose={() => null}
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
            refHandler={this.hoursRefHandle}
            onChangeText={this.hoursChangeHandle}
            autoFocus={true}
          />
          <Spacer />
          <Input
            refHandler={this.minutesRefHandle}
            onChangeText={this.minutesChangeHandle}
          />
          <Spacer />
          <Input
            refHandler={this.secondsRefHandle}
            onChangeText={this.secondsChangeHandle}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <LinkButton label="Cancel" style={{ marginRight: 20 }} />
          <PrimaryButton label="Ok" />
        </View>
      </Modal>
    );
  }

}

export default TimePicker;
