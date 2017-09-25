import { connect } from 'react-redux';
import Settings from './Settings';
import { getThresholds } from 'src/store/settings/selectors';

const mapStateToProps = (state) => {
  return {
    vibrate: state.settings.vibrate,
    thresholds: getThresholds(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
