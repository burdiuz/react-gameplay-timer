import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'src/components/Input';

import styles from './styles';

const convertIntString = (str) => {
  let value = String(parseInt(str) || '0');
  const length = value.length;

  if (length === 1) {
    value = `0${value}`;
  } else if (length > 2) {
    value = value.substr(0, 2);
  }

  return value;
};

class NumInput extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    style: PropTypes.any,
  };

  static defaultProps = {
    onChange: null,
    style: null,
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
      <Input
        {...props}
        keyboardType="numeric"
        maxLength={3}
        placeholderTextColor="#eeeeee"
        placeholder="00"
        selectTextOnFocus={true}
        textAlign="right"
        onChangeText={this.onChangeText}
        value={this.state.valueString}
        style={[styles.input, style]}
      />
    );
  }
}

export default NumInput;
