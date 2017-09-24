import { connect } from 'react-redux';
import TimerDisplay from './TimerDisplay';
import { timerReset } from 'src/actions/application';

const getCurrentThreshold = (time, thresholds) => {
  const lastIndex = thresholds.length - 1;
  console.log(thresholds);
  for (let index = lastIndex; index >= 0; index--) {
    const { startTime, style } = thresholds[index];
    if (time >= startTime) {
      return style;
    }
  }
  return thresholds[lastIndex].style;
};

const mapStateToProps = (state) => {
  const { settings: { thresholds }, timer: { value } } = state;
  return {
    style: getCurrentThreshold(value, thresholds),
    time: value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchTimerReset: () => dispatch(timerReset()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerDisplay);
