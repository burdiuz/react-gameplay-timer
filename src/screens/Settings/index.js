import { connect } from 'react-redux';
import Settings from './Settings';
import { addThreshold, updateThreshold, removeThreshold, changeSettings } from 'src/store/settings/actions';
import { getThresholds } from 'src/store/settings/selectors';

const mapStateToProps = (state) => {
  return {
    vibrate: state.settings.vibrate,
    thresholds: getThresholds(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddThreshold: (startTime, color) => dispatch(addThreshold(startTime, color)),
    dispatchUpdateThreshold: (startTime, color) => dispatch(updateThreshold(startTime, color)),
    dispatchRemoveThreshold: (startTime) => dispatch(removeThreshold(startTime)),
    dispatchChangeSettings: (vibrate) => dispatch(changeSettings(vibrate)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
