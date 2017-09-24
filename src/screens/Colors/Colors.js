import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import PrimaryButton from 'src/components/Button';
import ColorsList from 'src/components/ColorsList';

import styles from './styles';

class Colors extends Component {

  state = { selectedValue: null, };

  handleColorSelected = (value) => {
    this.setState({
      selectedValue: value,
    });
  };

  renderApplyButton() {
    if (this.state.selectedValue === null) return null;
    return (
      <PrimaryButton
        label="Apply"
        style={{
          margin: 5,
        }}
      />

    );
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'flex-end',
      }}>
        <ColorsList
          selectedValue={this.state.selectedValue}
          onSelect={this.handleColorSelected}
          style={{
            paddingBottom: 100,
          }}
        />
        {this.renderApplyButton()}
      </View>
    );
  }
}

export default Colors;
