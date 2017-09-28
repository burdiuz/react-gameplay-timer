/*
 * @flow
 */
import React, { Component } from 'react';
import { Text as BaseText } from 'react-native';

import styles from './styles';

class Text extends Component {

  static propTypes = {
    ...BaseText.propTypes,
  };

  static defaultProps = {};

  // let's forward stuff or sruff whatever
  setNativeProps(...args) {
    return this.refs.setNativeProps && this.refs.setNativeProps(...args);
  }

  render() {
    const { children, style, ...rest } = this.props;
    return (
      <BaseText ref='text' {...rest} style={[styles.text, style]}>
        {children}
      </BaseText>
    );
  }
}

export default Text;
