import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import PrimaryButton from 'src/components/Button';
import ColorsList from 'src/components/ColorsList';

import styles from './styles';

class Colors extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          value:PropTypes.number,
          onSelect: PropTypes.func.isRequired,
        }),
      }),
    }),
  };

  state = { selectedValue: null, };

  handleColorSelected = (value) => {
    this.setState({
      selectedValue: value,
    });
  };

  handleSelect = () => {
    const { navigation } = this.props;
    const { state: { params: { onSelect } } } = navigation;
    navigation.goBack();
    onSelect(this.state.selectedValue);
  };

  renderApplyButton() {
    if (this.state.selectedValue === null) return null;
    return (
      <PrimaryButton
        label="Apply"
        onPress={this.handleSelect}
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
