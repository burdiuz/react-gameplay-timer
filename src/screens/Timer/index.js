import { connect } from 'react-redux';
import TimerDisplay from './TimerDisplay';
import { reset } from 'src/store/application/actions';
import { getCurrentStyle, getCurrentStartTime, getVibrate } from 'src/store/settings/selectors';
import { getValue } from 'src/store/timer/selectors';

const mapStateToProps = (state) => ({
  startTime: getCurrentStartTime(state),
  style: getCurrentStyle(state),
  time: getValue(state),
  vibrate: getVibrate(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchTimerReset: () => dispatch(reset()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerDisplay);
