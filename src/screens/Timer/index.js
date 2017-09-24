import { connect } from 'react-redux';
import TimerDisplay from './TimerDisplay';
import { reset } from 'src/store/application/actions';
import { getCurrentStyle } from 'src/store/settings/selectors';
import { getValue } from 'src/store/timer/selectors';

const mapStateToProps = (state) => ({
  style: getCurrentStyle(state),
  time: getValue(state),
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
