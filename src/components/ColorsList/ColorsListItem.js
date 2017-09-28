/*
 * @flow
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';

import styles from './styles';

class ColorsListItem extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    style: PropTypes.any,
  };

  static defaultProps = {
    style: null,
  };

  shouldComponentUpdate(nextProps) {
    return this.props.selected !== nextProps.selected;
  }

  handleOnPress = () => {
    const { onPress, value } = this.props;
    onPress(value);
  };

  get viewStyle() {
    const { value, selected, style, } = this.props;
    let viewStyle = [styles.colorsListItem, style, { backgroundColor: value }];
    if (selected) {
      viewStyle = [...viewStyle, styles.colorsListItemSelected];
    }
    return viewStyle;
  }

  render() {
    const {
      value,
      onPress,
      selected,
      style,
      ...props
    } = this.props;

    return (
      <TouchableHighlight
        onPress={this.handleOnPress}
        {...props}
      >
        <View style={this.viewStyle} />
      </TouchableHighlight>
    );
  };
}

export default ColorsListItem;
