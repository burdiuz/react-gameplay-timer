import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';

import styles from './styles';

class TimePicker extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    style: PropTypes.object,
  };

  render() {
    const { children, visible, style, onRequestClose } = this.props;
    return (
      <Modal
        visible={visible}
        onRequestClose={onRequestClose}
        transparent={true}
      >
        <KeyboardAvoidingView style={styles.background}>
          <View style={[styles.container, style]}>
            {children}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    );
  }

}

export default TimePicker;
