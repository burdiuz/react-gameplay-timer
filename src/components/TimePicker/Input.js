import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

//import styles from './styles';

const convertIntString = (str) => {
  let value = String(parseInt(str) || '0');
  const length = value.length;

  if (length == 1) {
    value = `0${value}`;
  } else if (length > 2) {
    value = value.substr(0, 2);
  }

  return value;
};

class Input extends Component {
  static propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
    style: PropTypes.object,
  };

  state = {
    valueString: '',
  };

  componentWillMount() {
    this.applyToState(this.props.value);
  }

  componentWillReceiveProps({ value }) {
    this.applyToState(value);
  }

  applyToState(value, onComplete) {
    this.setState({
      valueString: convertIntString(value),
    }, onComplete);
  }

  onChangeText = (text) => {
    this.applyToState(text, () => {
      const { onChange } = this.props;
      if (onChange) {
        onChange(parseInt(this.state.valueString));
      }
    });
  };

  render() {
    const { onChange, style, ...props } = this.props;
    return (
      <TextInput
        {...props}
        keyboardType="numeric"
        maxLength={3}
        underlineColorAndroid="transparent"
        placeholderTextColor="#eeeeee"
        placeholder="00"
        selectTextOnFocus={true}
        textAlign="right"
        onChangeText={this.onChangeText}
        value={this.state.valueString}
        style={[{
          fontSize: 60,
          width: 80,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: 0xeeeeeeff,
        }, style]}
      />
    );
  }
}

export default Input;
