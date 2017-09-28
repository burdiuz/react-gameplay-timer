/*
 * @flow
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Modal as ModalBase,
  KeyboardAvoidingView,
} from 'react-native';

import styles from './styles';

class Modal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    children: PropTypes.node,
    style: PropTypes.any,
  };

  static defaultProps = {
    children: null,
    style: null,
  };

  render() {
    const { children, visible, style, onRequestClose } = this.props;
    return (
      <ModalBase
        visible={visible}
        onRequestClose={onRequestClose}
        transparent={true}
      >
        <KeyboardAvoidingView style={styles.background}>
          <View style={[styles.container, style]}>
            {children}
          </View>
        </KeyboardAvoidingView>
      </ModalBase>
    );
  }
}

export default Modal;
