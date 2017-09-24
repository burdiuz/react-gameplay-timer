/**
 * @flow
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import History from 'src/screens/History';
import Timer from 'src/screens/Timer';
import { start } from 'src/store/timer/actions';

const ACCURACY = 10;

class GamePlayTimer extends Component {

  static propTypes = {
    dispatchStart: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.dispatchStart(ACCURACY);
  }

  render() {
    return (
      <View
        style={styles.container}>
        <History />
        <Timer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 0x000000ff,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchStart: (accuracy) => dispatch(start(accuracy)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(GamePlayTimer);
