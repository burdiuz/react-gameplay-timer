/*
 * @flow
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import PrimaryButton from 'src/components/Button';
import ColorsList from 'src/components/ColorsList';

import styles from './styles';

class Colors extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          value: PropTypes.number,
          onSelect: PropTypes.func.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  static defaultProps = {};

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
        style={styles.applyButton}
      />

    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ColorsList
          selectedValue={this.state.selectedValue}
          onSelect={this.handleColorSelected}
          style={styles.list}
        />
        {this.renderApplyButton()}
      </View>
    );
  }
}

export default Colors;
